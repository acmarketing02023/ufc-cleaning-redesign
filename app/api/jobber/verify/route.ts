import { NextResponse } from 'next/server';
import { getValidAccessToken } from '@/lib/jobberTokenManager';
import { kvGetParsed } from '@/lib/kvSerializer';

/**
 * Verify Jobber API Connection
 *
 * This endpoint:
 * 1. Retrieves the stored Jobber access token (with automatic refresh if needed)
 * 2. Makes an authenticated GraphQL request to Jobber API
 * 3. Returns the connected account/company info without exposing the token
 */
export async function GET() {
  try {
    // Log KV environment diagnostics
    const kvUrl = process.env.KV_REST_API_URL;
    const kvToken = process.env.KV_REST_API_TOKEN;
    console.log('Verify endpoint KV environment check', {
      kvRestApiUrlExists: !!kvUrl,
      kvRestApiUrlPrefix: kvUrl ? kvUrl.substring(0, 30) : 'NOT_SET',
      kvRestApiTokenExists: !!kvToken,
      kvRestApiTokenLength: kvToken ? kvToken.length : 0,
    });

    console.log('Starting Jobber API verification...');

    // DIAGNOSTIC: Check KV directly before calling getValidAccessToken
    console.log('Performing direct KV diagnostics using unified serializer...');
    const kvDirect = await kvGetParsed<{
      access_token: string;
      refresh_token: string;
      expires_at: number;
      token_type: string;
    }>('jobber:tokens');

    if (!kvDirect) {
      console.error('CRITICAL: KV key does not exist or cannot be parsed', {
        kvKey: 'jobber:tokens',
      });
    } else {
      console.log('KV key exists and is readable', {
        kvKey: 'jobber:tokens',
        hasAccessTokenField: !!kvDirect.access_token,
        hasRefreshTokenField: !!kvDirect.refresh_token,
        hasExpiresAtField: !!kvDirect.expires_at,
        hasTokenTypeField: !!kvDirect.token_type,
      });
    }

    // Get valid access token (will auto-refresh if within 5 minutes of expiration)
    let accessToken;
    try {
      accessToken = await getValidAccessToken();
      console.log('Retrieved valid access token');
    } catch (error) {
      console.error('Failed to retrieve valid access token:', error);
      return NextResponse.json(
        {
          success: false,
          error: 'No Jobber authorization found',
          message: 'Please authorize Jobber first by visiting /api/jobber/auth',
        },
        { status: 401 }
      );
    }

    // Make a simple GraphQL query to verify the connection
    // This query retrieves the current account/company name
    const graphQLQuery = {
      query: `
        query {
          account {
            name
            id
          }
        }
      `,
    };

    console.log('Sending GraphQL query to Jobber API...');

    const graphQLEndpoint = 'https://api.getjobber.com/api/graphql';
    const requestBody = JSON.stringify(graphQLQuery);

    console.log('GraphQL request details:', {
      endpoint: graphQLEndpoint,
      method: 'POST',
      contentTypeHeader: 'application/json',
      authHeaderPresent: !!accessToken,
      authHeaderLength: accessToken.length,
      requestBodyLength: requestBody.length,
    });

    const jobberApiResponse = await fetch(graphQLEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
      },
      body: requestBody,
    });

    // Log response metadata WITHOUT parsing JSON yet
    const responseContentType = jobberApiResponse.headers.get('content-type');
    const responseUrl = jobberApiResponse.url;

    console.log('Jobber GraphQL response metadata:', {
      status: jobberApiResponse.status,
      statusText: jobberApiResponse.statusText,
      contentType: responseContentType,
      responseUrl: responseUrl,
      isJsonContentType: responseContentType?.includes('application/json') ?? false,
    });

    // Read response body safely first
    let responseBodyText: string;
    try {
      responseBodyText = await jobberApiResponse.text();
    } catch (readError) {
      console.error('Failed to read response body:', readError);
      return NextResponse.json(
        {
          success: false,
          error: 'Failed to read Jobber API response',
          details: String(readError),
        },
        { status: 500 }
      );
    }

    // Log first ~100 chars of response (safe preview)
    const responsePreview = responseBodyText.substring(0, 100);
    console.log('Response body preview (first 100 chars):', { preview: responsePreview });

    // Only attempt JSON parsing if content-type is JSON
    if (!responseContentType?.includes('application/json')) {
      console.error('CRITICAL: Jobber returned non-JSON response', {
        endpoint: graphQLEndpoint,
        status: jobberApiResponse.status,
        contentType: responseContentType,
        isHtml: responseBodyText.includes('<!DOCTYPE'),
        isHtmlTag: responseBodyText.includes('<html'),
        bodyPreview: responsePreview,
      });

      return NextResponse.json(
        {
          success: false,
          error: 'Jobber API returned non-JSON response',
          details: `Expected application/json, got ${responseContentType}`,
          diagnostics: {
            status: jobberApiResponse.status,
            contentType: responseContentType,
            looksLikeHtml: responseBodyText.includes('<!DOCTYPE'),
            endpoint: graphQLEndpoint,
          },
        },
        { status: 500 }
      );
    }

    // Now safely parse JSON
    let graphQLData;
    try {
      graphQLData = JSON.parse(responseBodyText);
    } catch (parseError) {
      console.error('Failed to parse GraphQL response as JSON:', {
        error: String(parseError),
        bodyPreview: responsePreview,
      });
      return NextResponse.json(
        {
          success: false,
          error: 'Failed to parse Jobber API response',
          details: 'Response was not valid JSON',
        },
        { status: 500 }
      );
    }

    if (!jobberApiResponse.ok || graphQLData.errors) {
      const errors = graphQLData.errors || [];
      const errorMessages = errors.map((e: any) => e.message).join('; ');

      console.error('Jobber GraphQL error response:', {
        status: jobberApiResponse.status,
        statusText: jobberApiResponse.statusText,
        errors: errorMessages,
      });

      return NextResponse.json(
        {
          success: false,
          error: 'Jobber API verification failed',
          details: errorMessages || 'Unknown GraphQL error',
        },
        { status: jobberApiResponse.status }
      );
    }

    // Extract account info from successful response
    const accountData = graphQLData.data?.account;

    if (!accountData) {
      console.error('Jobber API returned no account data');
      return NextResponse.json(
        {
          success: false,
          error: 'No account data returned from Jobber',
        },
        { status: 500 }
      );
    }

    console.log('Jobber API verification successful', {
      accountName: accountData.name,
      accountId: accountData.id,
    });

    // Return account info without exposing the token
    return NextResponse.json(
      {
        success: true,
        message: 'Jobber API connection verified',
        account: {
          name: accountData.name,
          id: accountData.id,
        },
        tokenStatus: {
          message: 'Access token is valid and stored securely',
          autoRefreshEnabled: true,
          refreshThreshold: '5 minutes before expiration',
        },
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Unexpected error during Jobber verification:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Unexpected error during verification',
        details: String(error),
      },
      { status: 500 }
    );
  }
}
