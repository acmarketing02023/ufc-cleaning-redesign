import { NextResponse } from 'next/server';
import { kv } from '@vercel/kv';
import { getValidAccessToken } from '@/lib/jobberTokenManager';

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
    console.log('Starting Jobber API verification...');

    // DIAGNOSTIC: Check KV directly before calling getValidAccessToken
    console.log('Performing direct KV diagnostics...');
    const kvDirect = await kv.get('jobber:tokens');

    if (kvDirect === null || kvDirect === undefined) {
      console.error('CRITICAL: KV key does not exist', {
        kvKey: 'jobber:tokens',
        kvGetResult: kvDirect,
        kvGetResultType: typeof kvDirect,
      });
    } else {
      try {
        const directParsed = JSON.parse(kvDirect as string);
        console.log('KV key exists and is parseable', {
          kvKey: 'jobber:tokens',
          valueType: typeof kvDirect,
          valueLengthBytes: String(kvDirect).length,
          hasAccessTokenField: !!directParsed.access_token,
          hasRefreshTokenField: !!directParsed.refresh_token,
          hasExpiresAtField: !!directParsed.expires_at,
          hasTokenTypeField: !!directParsed.token_type,
        });
      } catch (directParseError) {
        console.error('KV value exists but JSON parsing failed', {
          error: String(directParseError),
          valueType: typeof kvDirect,
          valueLengthBytes: String(kvDirect).length,
        });
      }
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

    const jobberApiResponse = await fetch('https://api.getjobber.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
      },
      body: JSON.stringify(graphQLQuery),
    });

    console.log('Jobber GraphQL response status:', jobberApiResponse.status);

    const graphQLData = await jobberApiResponse.json();

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
