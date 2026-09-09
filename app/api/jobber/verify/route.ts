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
    console.log('Verifying Jobber API connection...');

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
    const graphQLResult = await makeJobberGraphQLRequest(accessToken, {
      query: QUERY_GET_ACCOUNT,
    });

    if (!graphQLResult.success) {
      console.error('Jobber verification failed:', {
        error: graphQLResult.error,
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

    const accountData = graphQLResult.data?.account;

    if (!accountData) {
      console.error('Jobber verification: No account data returned');
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
