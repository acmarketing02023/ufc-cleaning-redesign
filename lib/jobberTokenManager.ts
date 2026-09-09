import { refreshAccessToken } from './oauth';
import { kv } from '@vercel/kv';
import { encrypt, decrypt } from './encryption';

export interface JobberCredentials {
  access_token: string;
  refresh_token: string;
  expires_at: number;
  token_type: string;
}

/**
 * Token Manager for Jobber OAuth tokens
 *
 * Handles:
 * - Token refresh when expired
 * - Automatic storage of new tokens
 * - Token validation
 */

const TOKEN_REFRESH_THRESHOLD = 5 * 60 * 1000; // Refresh 5 minutes before expiration

/**
 * Get valid access token, refreshing if necessary
 *
 * Automatic refresh logic:
 * - Checks if access token will expire within 5 minutes
 * - If expiring soon, automatically refreshes using stored refresh token
 * - When refreshed, Jobber rotates the refresh token (returns new refresh + access token)
 * - New tokens are stored in Vercel KV with 30-day TTL (persists refresh token)
 * - Returns current valid access token for immediate use
 */
export async function getValidAccessToken(): Promise<string> {
  try {
    const credentials = await retrieveJobberCredentials();

    if (!credentials) {
      throw new Error('No Jobber credentials stored. Please authorize first.');
    }

    // Check if token is expired or about to expire
    const now = Date.now();
    const timeUntilExpiry = credentials.expires_at - now;

    if (timeUntilExpiry < TOKEN_REFRESH_THRESHOLD) {
      console.log('Access token expiring soon, refreshing...', {
        timeUntilExpirySeconds: Math.floor(timeUntilExpiry / 1000),
        refreshThresholdSeconds: TOKEN_REFRESH_THRESHOLD / 1000,
      });
      return await refreshJobberAccessToken(credentials.refresh_token);
    }

    return credentials.access_token;
  } catch (error) {
    console.error('Error getting valid access token:', error);
    throw error;
  }
}

/**
 * Refresh Jobber access token and store new tokens atomically
 *
 * CRITICAL: Implements Jobber's refresh token rotation
 * - Request new access token using current refresh token
 * - Jobber returns new access AND new refresh token
 * - Old refresh token becomes invalid (especially for newer Jobber apps)
 * - Atomically store both new tokens to replace old pair BEFORE any other operations
 * - This ensures no API call uses an invalidated refresh token
 *
 * Sequence:
 * 1. Call refreshAccessToken() to get new tokens from Jobber
 * 2. Immediately call storeJobberCredentials() to persist new pair
 * 3. Return new access token for immediate use
 */
export async function refreshJobberAccessToken(refreshToken: string): Promise<string> {
  const clientId = process.env.JOBBER_CLIENT_ID;
  const clientSecret = process.env.JOBBER_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    throw new Error('Jobber credentials not configured');
  }

  try {
    // Exchange refresh token for new tokens from Jobber
    const newTokens = await refreshAccessToken(
      clientId,
      clientSecret,
      refreshToken
    );

    // ATOMIC: Store the new tokens (both access and refresh) immediately
    // Jobber rotates refresh tokens on each refresh - old one is now invalid
    // This overwrites the old pair in KV before any other API calls can happen
    await storeJobberCredentials({
      access_token: newTokens.access_token,
      refresh_token: newTokens.refresh_token,
      expires_at: Date.now() + newTokens.expires_in * 1000,
      token_type: newTokens.token_type,
    });

    console.log('Jobber tokens refreshed and stored atomically', {
      newAccessTokenLength: newTokens.access_token.length,
      newRefreshTokenLength: newTokens.refresh_token.length,
      newExpirationIn: `${newTokens.expires_in} seconds`,
    });
    return newTokens.access_token;

  } catch (error) {
    console.error('Failed to refresh Jobber access token:', error);
    throw error;
  }
}

/**
 * Retrieve stored Jobber credentials from Vercel KV
 */
async function retrieveJobberCredentials(): Promise<JobberCredentials | null> {
  try {
    console.log('Attempting to retrieve Jobber credentials from KV key: jobber:tokens');

    const stored = await kv.get('jobber:tokens');

    if (!stored) {
      console.warn('KV get returned null/undefined for jobber:tokens key', {
        kvKey: 'jobber:tokens',
        storedValue: stored,
        storedType: typeof stored,
      });
      return null;
    }

    console.log('Successfully retrieved data from KV', {
      kvKey: 'jobber:tokens',
      dataType: typeof stored,
      dataLength: typeof stored === 'string' ? stored.length : 'N/A',
    });

    let parsed;
    try {
      parsed = JSON.parse(stored as string);
      console.log('Successfully parsed JSON from stored data', {
        hasAccessToken: !!parsed.access_token,
        hasRefreshToken: !!parsed.refresh_token,
        hasExpiresAt: !!parsed.expires_at,
        hasTokenType: !!parsed.token_type,
      });
    } catch (parseError) {
      console.error('Failed to parse JSON from stored KV data:', {
        error: String(parseError),
        dataPreview: String(stored).substring(0, 100),
      });
      return null;
    }

    // Decrypt the tokens
    try {
      const credentials: JobberCredentials = {
        access_token: decrypt(parsed.access_token),
        refresh_token: decrypt(parsed.refresh_token),
        expires_at: parsed.expires_at,
        token_type: parsed.token_type,
      };

      console.log('Successfully decrypted Jobber credentials', {
        accessTokenLength: credentials.access_token.length,
        refreshTokenLength: credentials.refresh_token.length,
        expiresAt: new Date(credentials.expires_at).toISOString(),
      });

      return credentials;
    } catch (decryptError) {
      console.error('Failed to decrypt Jobber credentials:', {
        error: String(decryptError),
        hasAccessTokenField: !!parsed.access_token,
        hasRefreshTokenField: !!parsed.refresh_token,
      });
      return null;
    }
  } catch (error) {
    console.error('Unexpected error retrieving Jobber credentials:', {
      error: String(error),
      errorType: error instanceof Error ? error.name : typeof error,
    });
    return null;
  }
}

/**
 * Store Jobber credentials in Vercel KV with encryption
 * Implements atomic refresh token rotation:
 * - When tokens are refreshed, immediately overwrite with newest values
 * - Old refresh token becomes invalid (especially for newer Jobber apps)
 * - New pair is stored before any other API calls can happen
 *
 * CRITICAL: No TTL expiration set
 * - Access tokens expire in ~60 minutes, tracked by expires_at timestamp
 * - Refresh tokens are long-lived and persist until Jobber invalidation
 * - Tokens remain stored indefinitely until explicit disconnect
 */
async function storeJobberCredentials(credentials: JobberCredentials): Promise<void> {
  try {
    // Encrypt sensitive tokens
    const encryptedCredentials = {
      access_token: encrypt(credentials.access_token),
      refresh_token: encrypt(credentials.refresh_token),
      expires_at: credentials.expires_at,
      token_type: credentials.token_type,
    };

    // Store persistently in KV without TTL expiration
    // Atomically overwrites previous tokens (implements refresh token rotation)
    // NO TTL SET - tokens persist until explicit disconnect or Jobber invalidation
    await kv.set('jobber:tokens', JSON.stringify(encryptedCredentials));

    console.log('Jobber credentials stored/updated persistently in KV', {
      accessTokenExpiresAt: new Date(credentials.expires_at).toISOString(),
      storageType: 'persistent (no TTL)',
      rotationBehavior: 'atomic overwrite with new pair',
    });
  } catch (error) {
    console.error('Error storing Jobber credentials:', error);
    throw error;
  }
}

/**
 * Clear stored Jobber credentials (for logout/disconnect)
 */
export async function clearJobberCredentials(): Promise<void> {
  try {
    await kv.del('jobber:tokens');
    console.log('Jobber credentials cleared');
  } catch (error) {
    console.error('Error clearing Jobber credentials:', error);
    throw error;
  }
}
