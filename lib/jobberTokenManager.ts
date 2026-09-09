import { refreshAccessToken } from './oauth';
import { kvGetParsed, kvSetSerialized, kvDelete } from './kvSerializer';
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
      console.log('Refreshing Jobber access token (expires soon)');
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
    const newTokens = await refreshAccessToken(
      clientId,
      clientSecret,
      refreshToken
    );

    // Atomically store new tokens (refresh token rotation)
    await storeJobberCredentials({
      access_token: newTokens.access_token,
      refresh_token: newTokens.refresh_token,
      expires_at: Date.now() + newTokens.expires_in * 1000,
      token_type: newTokens.token_type,
    });

    console.log('Jobber access token refreshed');
    return newTokens.access_token;

  } catch (error) {
    console.error('Failed to refresh Jobber access token:', String(error));
    throw error;
  }
}

/**
 * Retrieve stored Jobber credentials from Vercel KV
 */
async function retrieveJobberCredentials(): Promise<JobberCredentials | null> {
  try {
    const parsed = await kvGetParsed<{
      access_token: string;
      refresh_token: string;
      expires_at: number;
      token_type: string;
    }>('jobber:tokens');

    if (!parsed) {
      return null;
    }

    try {
      const credentials: JobberCredentials = {
        access_token: decrypt(parsed.access_token),
        refresh_token: decrypt(parsed.refresh_token),
        expires_at: parsed.expires_at,
        token_type: parsed.token_type,
      };

      return credentials;
    } catch (decryptError) {
      console.error('Failed to decrypt Jobber credentials:', String(decryptError));
      return null;
    }
  } catch (error) {
    console.error('Error retrieving Jobber credentials:', String(error));
    return null;
  }
}

/**
 * Store Jobber credentials in Vercel KV with encryption
 * Implements atomic refresh token rotation - new tokens replace old pair immediately
 * No TTL set - tokens persist until explicit disconnect or Jobber invalidation
 */
async function storeJobberCredentials(credentials: JobberCredentials): Promise<void> {
  try {
    const encryptedCredentials = {
      access_token: encrypt(credentials.access_token),
      refresh_token: encrypt(credentials.refresh_token),
      expires_at: credentials.expires_at,
      token_type: credentials.token_type,
    };

    await kvSetSerialized('jobber:tokens', encryptedCredentials);
    console.log('Jobber credentials stored securely');
  } catch (error) {
    console.error('Error storing Jobber credentials:', String(error));
    throw error;
  }
}

/**
 * Clear stored Jobber credentials (for logout/disconnect)
 */
export async function clearJobberCredentials(): Promise<void> {
  try {
    await kvDelete('jobber:tokens');
    console.log('Jobber credentials cleared');
  } catch (error) {
    console.error('Error clearing Jobber credentials:', error);
    throw error;
  }
}
