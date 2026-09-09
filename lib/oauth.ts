import crypto from 'crypto';

/**
 * Generate a cryptographically secure random string
 */
export function generateSecureRandom(length: number = 32): string {
  return crypto.randomBytes(length).toString('hex');
}

/**
 * Generate PKCE code verifier and challenge
 * @returns { verifier, challenge }
 */
export function generatePKCE() {
  const verifier = generateSecureRandom(32);

  // Create S256 challenge (SHA256 hash of verifier, base64url encoded)
  const challenge = crypto
    .createHash('sha256')
    .update(verifier)
    .digest('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=/g, '');

  return { verifier, challenge };
}

/**
 * Generate OAuth state value for CSRF protection
 */
export function generateState(): string {
  return generateSecureRandom(32);
}

/**
 * Validate OAuth state (simple string comparison)
 * In production, you'd validate against stored state in database/cache
 */
export function validateState(providedState: string, storedState: string): boolean {
  return crypto.timingSafeEqual(
    Buffer.from(providedState),
    Buffer.from(storedState)
  );
}

/**
 * Build Jobber authorization URL
 * Uses Jobber's current OAuth authorization endpoint
 */
export function buildAuthorizationUrl(
  clientId: string,
  redirectUri: string,
  state: string,
  codeChallenge: string,
  scopes: string[] = ['clients:read', 'clients:write', 'requests:read', 'requests:write']
): string {
  const params = new URLSearchParams({
    response_type: 'code',
    client_id: clientId,
    redirect_uri: redirectUri,
    state: state,
    code_challenge: codeChallenge,
    code_challenge_method: 'S256',
    scope: scopes.join(' '),
  });

  return `https://api.getjobber.com/api/oauth/authorize?${params.toString()}`;
}

/**
 * Exchange authorization code for tokens
 */
export async function exchangeCodeForTokens(
  clientId: string,
  clientSecret: string,
  code: string,
  redirectUri: string,
  codeVerifier: string
): Promise<{
  access_token: string;
  refresh_token: string;
  expires_in: number;
  token_type: string;
}> {
  const response = await fetch('https://api.getjobber.com/oauth/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'authorization_code',
      code: code,
      client_id: clientId,
      client_secret: clientSecret,
      redirect_uri: redirectUri,
      code_verifier: codeVerifier,
    }).toString(),
  });

  if (!response.ok) {
    throw new Error(`OAuth token exchange failed: ${response.statusText}`);
  }

  return response.json();
}

/**
 * Refresh access token using refresh token
 */
export async function refreshAccessToken(
  clientId: string,
  clientSecret: string,
  refreshToken: string
): Promise<{
  access_token: string;
  refresh_token: string;
  expires_in: number;
  token_type: string;
}> {
  const response = await fetch('https://api.getjobber.com/oauth/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
      client_id: clientId,
      client_secret: clientSecret,
    }).toString(),
  });

  if (!response.ok) {
    throw new Error(`Token refresh failed: ${response.statusText}`);
  }

  return response.json();
}
