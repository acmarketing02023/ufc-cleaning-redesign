import { NextResponse } from 'next/server';
import { generateState, generatePKCE, buildAuthorizationUrl } from '@/lib/oauth';

/**
 * Initiate Jobber OAuth Flow
 *
 * This endpoint generates:
 * - A secure state value (for CSRF protection)
 * - PKCE code_verifier and code_challenge (for Authorization Code flow)
 *
 * It stores these values and redirects to Jobber's authorization endpoint.
 */
export async function GET() {
  try {
    // Get environment variables
    const clientId = process.env.JOBBER_CLIENT_ID;
    const redirectUri = process.env.JOBBER_REDIRECT_URI || 'https://ufc-cleaning.com/api/jobber/callback';

    if (!clientId) {
      console.error('JOBBER_CLIENT_ID not configured');
      return NextResponse.json(
        { success: false, error: 'OAuth not configured' },
        { status: 500 }
      );
    }

    // Generate PKCE values
    const { verifier, challenge } = generatePKCE();

    // Generate state for CSRF protection
    const state = generateState();

    // TODO: Store state and code_verifier for later validation in callback
    // This must be stored in secure, temporary storage that expires
    //
    // Example with Vercel KV:
    // ```
    // import { kv } from '@vercel/kv';
    // await kv.setex(
    //   `oauth:${state}`,
    //   600, // 10 minutes expiration
    //   JSON.stringify({ state, codeVerifier: verifier })
    // );
    // ```
    //
    // Example with database:
    // ```
    // await db.oauthSessions.create({
    //   state,
    //   codeVerifier: verifier,
    //   expiresAt: new Date(Date.now() + 10 * 60 * 1000),
    //   createdAt: new Date(),
    // });
    // ```

    try {
      await storeOAuthSession(state, verifier);
    } catch (error) {
      console.error('Failed to store OAuth session:', error);
      return NextResponse.json(
        { success: false, error: 'Failed to initiate OAuth flow' },
        { status: 500 }
      );
    }

    // Build Jobber authorization URL
    const authorizationUrl = buildAuthorizationUrl(
      clientId,
      redirectUri,
      state,
      challenge,
      ['clients:read', 'clients:write', 'requests:read', 'requests:write']
    );

    // Redirect to Jobber authorization endpoint
    return NextResponse.redirect(authorizationUrl);

  } catch (error) {
    console.error('OAuth initialization error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to initialize OAuth flow' },
      { status: 500 }
    );
  }
}

/**
 * Store OAuth session state and code_verifier
 *
 * TODO: Implement with your storage backend
 * This must be temporary storage that expires in 10 minutes
 */
async function storeOAuthSession(state: string, codeVerifier: string): Promise<void> {
  // PLACEHOLDER: Replace with actual storage implementation
  console.warn('storeOAuthSession: Storage backend not implemented.');

  // Example with Vercel KV:
  // import { kv } from '@vercel/kv';
  // await kv.setex(
  //   `oauth:${state}`,
  //   600, // 10 minute expiration
  //   JSON.stringify({ state, codeVerifier })
  // );

  // Example with database:
  // const { db } = await import('@/lib/db');
  // await db.oauthSessions.create({
  //   state,
  //   codeVerifier,
  //   expiresAt: new Date(Date.now() + 10 * 60 * 1000),
  // });
}
