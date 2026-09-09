import { NextResponse } from 'next/server';
import { getValidAccessToken } from '@/lib/jobberTokenManager';
import { kvGetParsed } from '@/lib/kvSerializer';
import { makeJobberGraphQLRequest, QUERY_GET_ACCOUNT } from '@/lib/jobberGraphQL';

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

    // Make GraphQL query using centralized helper
    // This ensures consistent API version and headers
    console.log('Sending GraphQL query to Jobber API...');

    const graphQLResult = await makeJobberGraphQLRequest(accessToken, {
      query: QUERY_GET_ACCOUNT,
    });

    if (!graphQLResult.success) {
      console.error('Jobber GraphQL request failed:', {
        error: graphQLResult.error,
        details: graphQLResult.details,
      });

      return NextResponse.json(
        {
          success: false,
          error: graphQLResult.error || 'Jobber API verification failed',
          details: graphQLResult.details || 'Unknown error',
        },
        { status: 500 }
      );
    }

    const graphQLData = graphQLResult.data;

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
