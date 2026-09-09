import { NextRequest, NextResponse } from 'next/server';
import { kv } from '@vercel/kv';
import { exchangeCodeForTokens, validateState } from '@/lib/oauth';
import { encrypt } from '@/lib/encryption';

/**
 * OAuth Callback Route for Jobber
 *
 * This route handles the callback from Jobber after user authorization.
 * It exchanges the authorization code for access and refresh tokens using PKCE.
 *
 * Query parameters received from Jobber:
 * - code: Authorization code to exchange for tokens
 * - state: CSRF protection token (must match the one we sent)
 * - error (optional): If authorization was denied
 */
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const code = searchParams.get('code');
    const state = searchParams.get('state');
    const error = searchParams.get('error');
    const errorDescription = searchParams.get('error_description');

    // Check for authorization errors from Jobber
    if (error) {
      console.error(`OAuth authorization error: ${error}`, errorDescription);
      return NextResponse.json(
        {
          success: false,
          error: error,
          message: errorDescription || 'Authorization was denied'
        },
        { status: 400 }
      );
    }

    // Validate required parameters
    if (!code || !state) {
      console.error('Missing authorization code or state');
      return NextResponse.json(
        { success: false, error: 'Missing authorization code or state' },
        { status: 400 }
      );
    }

    // Get environment variables
    const clientId = process.env.JOBBER_CLIENT_ID;
    const clientSecret = process.env.JOBBER_CLIENT_SECRET;
    const redirectUri = process.env.JOBBER_REDIRECT_URI || 'https://ufc-cleaning.com/api/jobber/callback';

    if (!clientId || !clientSecret) {
      console.error('Jobber OAuth credentials not configured');
      return NextResponse.json(
        { success: false, error: 'OAuth not configured' },
        { status: 500 }
      );
    }

    // TODO: Retrieve stored state and code_verifier from secure storage
    // This should be retrieved from a database, cache (Vercel KV), or session
    // For now, this is a placeholder - implement using:
    // - Vercel KV (Redis): kv.get(`oauth:${state}`)
    // - Database: query database for session
    // - Encrypted cookies: decrypt session from request.cookies

    const storedOAuthSession = await getStoredOAuthSession(state);

    if (!storedOAuthSession) {
      console.error('No stored OAuth session found for state');
      return NextResponse.json(
        { success: false, error: 'Invalid state parameter' },
        { status: 400 }
      );
    }

    // Validate state using timing-safe comparison
    try {
      validateState(state, storedOAuthSession.state);
      console.log('OAuth state validation successful');
    } catch (error) {
      console.error('State validation failed');
      return NextResponse.json(
        { success: false, error: 'State validation failed' },
        { status: 400 }
      );
    }

    // Log PKCE verifier information (sanitized)
    console.log('PKCE code_verifier retrieved from storage:', {
      verifierLength: storedOAuthSession.codeVerifier.length,
      verifierPrefix: storedOAuthSession.codeVerifier.substring(0, 8),
      verifierSuffix: storedOAuthSession.codeVerifier.substring(storedOAuthSession.codeVerifier.length - 8),
    });

    // Exchange authorization code for tokens using PKCE
    let tokens;
    try {
      console.log('Initiating token exchange with Jobber...', {
        clientIdMatch: clientId ? `${clientId.length} chars` : 'MISSING',
        clientSecretMatch: clientSecret ? `${clientSecret.length} chars` : 'MISSING',
        redirectUri: redirectUri,
        codeLength: code.length,
        verifierLength: storedOAuthSession.codeVerifier.length,
      });
      tokens = await exchangeCodeForTokens(
        clientId,
        clientSecret,
        code,
        redirectUri,
        storedOAuthSession.codeVerifier
      );
      console.log('Token exchange completed successfully');
    } catch (error) {
      const errorMessage = String(error);
      console.error('Token exchange failed with error:', {
        errorMessage: errorMessage,
        errorType: error instanceof Error ? error.name : typeof error,
      });
      return NextResponse.json(
        {
          success: false,
          error: 'Failed to exchange authorization code for tokens',
          details: errorMessage,
          debugInfo: {
            clientIdProvided: !!clientId,
            clientSecretProvided: !!clientSecret,
            codeReceived: !!code,
            stateValidated: true,
            verifierRetrieved: !!storedOAuthSession.codeVerifier,
          }
        },
        { status: 500 }
      );
    }

    // Store tokens securely
    try {
      await storeJobberTokens({
        access_token: tokens.access_token,
        refresh_token: tokens.refresh_token,
        expires_at: Date.now() + tokens.expires_in * 1000,
        token_type: tokens.token_type,
      });
    } catch (error) {
      console.error('Failed to store tokens:', error);
      return NextResponse.json(
        { success: false, error: 'Failed to store authentication tokens' },
        { status: 500 }
      );
    }

    // Clean up the stored OAuth session
    try {
      await deleteStoredOAuthSession(state);
    } catch (error) {
      console.warn('Failed to clean up OAuth session:', error);
    }

    // Success response
    // In production, you might redirect to a dashboard or send a JSON response
    return NextResponse.json(
      {
        success: true,
        message: 'Successfully connected Jobber account',
        redirectUrl: '/admin/jobber-connected' // TODO: Create this page
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Unexpected error in OAuth callback:', error);
    return NextResponse.json(
      { success: false, error: 'An unexpected error occurred' },
      { status: 500 }
    );
  }
}

/**
 * Retrieve stored OAuth session (state and code_verifier)
 * Uses Vercel KV for temporary storage
 */
async function getStoredOAuthSession(state: string): Promise<{ state: string; codeVerifier: string } | null> {
  try {
    const session = await kv.get(`oauth:${state}`);
    return session as { state: string; codeVerifier: string } | null;
  } catch (error) {
    console.error('Failed to retrieve OAuth session from KV:', error);
    return null;
  }
}

/**
 * Store Jobber tokens securely in Vercel KV
 * Tokens are encrypted before storage
 */
interface JobberTokens {
  access_token: string;
  refresh_token: string;
  expires_at: number;
  token_type: string;
}

async function storeJobberTokens(tokens: JobberTokens): Promise<void> {
  try {
    console.log('Encrypting Jobber tokens before storage...');

    // Encrypt tokens before storage
    const encryptedTokens = {
      access_token: encrypt(tokens.access_token),
      refresh_token: encrypt(tokens.refresh_token),
      expires_at: tokens.expires_at,
      token_type: tokens.token_type,
    };

    console.log('Encrypted tokens ready for storage', {
      accessTokenEncryptedLength: encryptedTokens.access_token.length,
      refreshTokenEncryptedLength: encryptedTokens.refresh_token.length,
      expiresAt: new Date(tokens.expires_at).toISOString(),
      kvKey: 'jobber:tokens',
    });

    // Store refresh token persistently in KV without expiration
    // - Access tokens expire in ~60 minutes (Jobber standard), tracked by expires_at timestamp
    // - Refresh tokens are long-lived and should persist until Jobber invalidates them
    // - On each refresh, Jobber rotates the refresh token (invalidates the old one immediately for newer apps)
    // - New tokens are atomically stored to replace the old pair before any API calls
    // NO TTL SET - tokens persist until explicit disconnect or Jobber invalidation
    const jsonString = JSON.stringify(encryptedTokens);
    console.log('Calling kv.set() for jobber:tokens key', {
      kvKey: 'jobber:tokens',
      jsonLength: jsonString.length,
      ttlSet: false,
    });

    // Call kv.set with explicit options (empty object = no TTL/expiration)
    const result = await kv.set('jobber:tokens', jsonString, {});

    console.log('Jobber tokens stored persistently in KV', {
      kvSetResult: result,
      accessTokenExpiresAt: new Date(tokens.expires_at).toISOString(),
      storageType: 'persistent (no TTL)',
      refreshTokenRotation: 'enabled - new tokens replace old pair atomically',
    });
  } catch (error) {
    console.error('Failed to store Jobber tokens:', {
      error: String(error),
      errorType: error instanceof Error ? error.name : typeof error,
      kvKey: 'jobber:tokens',
    });
    throw new Error('Failed to store authentication tokens');
  }
}

/**
 * Delete stored OAuth session after successful token exchange
 */
async function deleteStoredOAuthSession(state: string): Promise<void> {
  try {
    await kv.del(`oauth:${state}`);
    console.log('OAuth session cleaned up');
  } catch (error) {
    console.warn('Failed to clean up OAuth session:', error);
  }
}
