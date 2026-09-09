import { NextRequest, NextResponse } from 'next/server';
import { exchangeCodeForTokens, validateState } from '@/lib/oauth';

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
    } catch (error) {
      console.error('State validation failed');
      return NextResponse.json(
        { success: false, error: 'State validation failed' },
        { status: 400 }
      );
    }

    // Exchange authorization code for tokens using PKCE
    let tokens;
    try {
      tokens = await exchangeCodeForTokens(
        clientId,
        clientSecret,
        code,
        redirectUri,
        storedOAuthSession.codeVerifier
      );
    } catch (error) {
      console.error('Token exchange failed:', error);
      return NextResponse.json(
        { success: false, error: 'Failed to exchange authorization code for tokens' },
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
 *
 * TODO: Implement storage backend
 * Options:
 * 1. Vercel KV (Redis):
 *    ```
 *    import { kv } from '@vercel/kv';
 *    return await kv.get(`oauth:${state}`);
 *    ```
 *
 * 2. Database (Supabase, MongoDB, PostgreSQL, etc.):
 *    ```
 *    return await db.oauthSessions.findOne({ state });
 *    ```
 *
 * 3. Encrypted cookies (less recommended for sensitive data):
 *    ```
 *    const session = decrypt(cookies().get('oauth_session')?.value);
 *    ```
 */
async function getStoredOAuthSession(state: string): Promise<{ state: string; codeVerifier: string } | null> {
  // PLACEHOLDER: Replace with actual storage implementation
  console.warn('getStoredOAuthSession: Storage backend not implemented. Using placeholder.');

  // Example implementation with Vercel KV:
  // const { kv } = await import('@vercel/kv');
  // const session = await kv.get(`oauth:${state}`);
  // return session as { state: string; codeVerifier: string } | null;

  return null; // Remove when implementing
}

/**
 * Store Jobber tokens securely
 *
 * TODO: Implement storage backend
 * CRITICAL: Never log or expose tokens. Store encrypted.
 *
 * Options:
 * 1. Vercel KV (Redis):
 *    ```
 *    import { kv } from '@vercel/kv';
 *    const expiresIn = Math.floor((tokens.expires_at - Date.now()) / 1000);
 *    await kv.setex(
 *      'jobber:tokens',
 *      expiresIn,
 *      JSON.stringify(tokens)
 *    );
 *    ```
 *
 * 2. Database (with encryption):
 *    ```
 *    await db.jobberTokens.upsert({
 *      accessToken: encrypt(tokens.access_token),
 *      refreshToken: encrypt(tokens.refresh_token),
 *      expiresAt: new Date(tokens.expires_at)
 *    });
 *    ```
 *
 * 3. Encrypted environment variable (simple but less flexible):
 *    Not recommended for tokens that need to be refreshed
 */
interface JobberTokens {
  access_token: string;
  refresh_token: string;
  expires_at: number;
  token_type: string;
}

async function storeJobberTokens(tokens: JobberTokens): Promise<void> {
  // PLACEHOLDER: Replace with actual storage implementation
  console.warn('storeJobberTokens: Storage backend not implemented. Using placeholder.');
  console.log('Token storage structure prepared for access_token, refresh_token, and expiration.');

  // Example implementation with Vercel KV:
  // import { kv } from '@vercel/kv';
  // await kv.set('jobber:tokens', JSON.stringify(tokens));
  // await kv.expireat('jobber:tokens', Math.floor(tokens.expires_at / 1000));
}

/**
 * Delete stored OAuth session after successful token exchange
 */
async function deleteStoredOAuthSession(state: string): Promise<void> {
  // PLACEHOLDER: Replace with actual storage implementation
  console.warn('deleteStoredOAuthSession: Storage backend not implemented.');

  // Example implementation with Vercel KV:
  // import { kv } from '@vercel/kv';
  // await kv.del(`oauth:${state}`);
}
