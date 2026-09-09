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
 * POSTs to Jobber's current OAuth token endpoint
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
  try {
    // Log request parameters (sanitized - no secrets)
    console.log('OAuth token exchange initiated:', {
      endpoint: 'https://api.getjobber.com/api/oauth/token',
      method: 'POST',
      contentType: 'application/x-www-form-urlencoded',
      clientIdLength: clientId.length,
      clientSecretLength: clientSecret.length,
      grantType: 'authorization_code',
      redirectUri: redirectUri,
      codeVerifierLength: codeVerifier.length,
      codeLengthReceived: code.length,
      parameters: [
        'grant_type=authorization_code',
        `client_id=[${clientId.length} chars]`,
        `client_secret=[${clientSecret.length} chars]`,
        `code=[${code.length} chars]`,
        `redirect_uri=${redirectUri}`,
        `code_verifier=[${codeVerifier.length} chars]`,
      ],
    });

    const tokenEndpoint = 'https://api.getjobber.com/api/oauth/token';

    const requestBody = new URLSearchParams({
      grant_type: 'authorization_code',
      code: code,
      client_id: clientId,
      client_secret: clientSecret,
      redirect_uri: redirectUri,
      code_verifier: codeVerifier,
    });

    const response = await fetch(tokenEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: requestBody.toString(),
    });

    // Log response status and content-type
    const contentType = response.headers.get('content-type');
    console.log('Jobber token endpoint response:', {
      status: response.status,
      statusText: response.statusText,
      contentType: contentType,
    });

    // Parse response
    let responseData;
    let responseText = '';
    try {
      responseText = await response.text();
      responseData = JSON.parse(responseText);
    } catch (parseError) {
      console.error('Failed to parse Jobber token response:', {
        status: response.status,
        contentType: contentType,
        responseLength: responseText.length,
        responsePreview: responseText.substring(0, 200),
      });
      throw new Error(`Jobber token endpoint returned non-JSON response: ${response.status} ${response.statusText}`);
    }

    if (!response.ok) {
      // Log sanitized error response (no secrets)
      const sanitizedError = {
        status: response.status,
        statusText: response.statusText,
        error: responseData.error,
        error_description: responseData.error_description,
        errorDetails: responseData,
      };
      console.error('Jobber token exchange error (Forbidden/4xx):', sanitizedError);

      // Provide actionable error message
      const errorMsg = responseData.error_description || responseData.error || 'Unknown error';
      throw new Error(`OAuth token exchange failed: ${response.status} ${response.statusText} - ${errorMsg}`);
    }

    // Verify response contains required fields
    if (!responseData.access_token || !responseData.refresh_token) {
      console.error('Token response missing required fields:', {
        hasAccessToken: !!responseData.access_token,
        hasRefreshToken: !!responseData.refresh_token,
        hasExpiresIn: !!responseData.expires_in,
        hasTokenType: !!responseData.token_type,
      });
      throw new Error('Token response missing access_token or refresh_token');
    }

    console.log('OAuth token exchange successful:', {
      accessTokenLength: responseData.access_token.length,
      refreshTokenLength: responseData.refresh_token.length,
      expiresIn: responseData.expires_in,
      tokenType: responseData.token_type,
    });
    return responseData;

  } catch (error) {
    console.error('Token exchange error:', error);
    throw error;
  }
}

/**
 * Refresh access token using refresh token
 * POSTs to Jobber's current OAuth token endpoint
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
  try {
    console.log('Token refresh initiated', {
      endpoint: 'https://api.getjobber.com/api/oauth/token',
      method: 'POST',
      contentType: 'application/x-www-form-urlencoded',
      grantType: 'refresh_token',
      clientIdLength: clientId.length,
      clientSecretLength: clientSecret.length,
      refreshTokenLength: refreshToken.length,
    });

    const tokenEndpoint = 'https://api.getjobber.com/api/oauth/token';

    const response = await fetch(tokenEndpoint, {
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

    const contentType = response.headers.get('content-type');
    console.log('Jobber token refresh response:', {
      status: response.status,
      statusText: response.statusText,
      contentType: contentType,
    });

    let responseData;
    let responseText = '';
    try {
      responseText = await response.text();
      responseData = JSON.parse(responseText);
    } catch (parseError) {
      console.error('Failed to parse Jobber token refresh response:', {
        status: response.status,
        contentType: contentType,
        responseLength: responseText.length,
        responsePreview: responseText.substring(0, 200),
      });
      throw new Error(`Jobber token endpoint returned non-JSON response: ${response.status} ${response.statusText}`);
    }

    if (!response.ok) {
      const sanitizedError = {
        status: response.status,
        statusText: response.statusText,
        error: responseData.error,
        error_description: responseData.error_description,
        errorDetails: responseData,
      };
      console.error('Jobber token refresh error:', sanitizedError);
      const errorMsg = responseData.error_description || responseData.error || 'Unknown error';
      throw new Error(`Token refresh failed: ${response.status} ${response.statusText} - ${errorMsg}`);
    }

    console.log('Token refresh successful', {
      accessTokenLength: responseData.access_token.length,
      refreshTokenLength: responseData.refresh_token.length,
      expiresIn: responseData.expires_in,
    });
    return responseData;

  } catch (error) {
    console.error('Token refresh error:', error);
    throw error;
  }
}
