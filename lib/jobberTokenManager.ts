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
      console.log('Access token expiring soon, refreshing...');
      return await refreshJobberAccessToken(credentials.refresh_token);
    }

    return credentials.access_token;
  } catch (error) {
    console.error('Error getting valid access token:', error);
    throw error;
  }
}

/**
 * Refresh Jobber access token and store new tokens
 *
 * Implements Jobber's refresh token rotation:
 * - Request new access token using refresh token
 * - Jobber returns new access AND refresh token
 * - Save both new tokens
 *
 * TODO: Implement with your storage backend
 */
export async function refreshJobberAccessToken(refreshToken: string): Promise<string> {
  const clientId = process.env.JOBBER_CLIENT_ID;
  const clientSecret = process.env.JOBBER_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    throw new Error('Jobber credentials not configured');
  }

  try {
    // Exchange refresh token for new tokens
    const newTokens = await refreshAccessToken(
      clientId,
      clientSecret,
      refreshToken
    );

    // Store the new tokens (both access and refresh)
    // Jobber rotates refresh tokens on each refresh
    await storeJobberCredentials({
      access_token: newTokens.access_token,
      refresh_token: newTokens.refresh_token,
      expires_at: Date.now() + newTokens.expires_in * 1000,
      token_type: newTokens.token_type,
    });

    console.log('Jobber tokens refreshed and stored successfully');
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
    const stored = await kv.get('jobber:tokens');

    if (!stored) {
      return null;
    }

    const parsed = JSON.parse(stored as string);

    // Decrypt the tokens
    const credentials: JobberCredentials = {
      access_token: decrypt(parsed.access_token),
      refresh_token: decrypt(parsed.refresh_token),
      expires_at: parsed.expires_at,
      token_type: parsed.token_type,
    };

    return credentials;
  } catch (error) {
    console.error('Error retrieving Jobber credentials:', error);
    return null;
  }
}

/**
 * Store Jobber credentials in Vercel KV with encryption
 * Implements automatic refresh token rotation:
 * - When tokens are refreshed, immediately overwrite with newest values
 * - Old tokens become invalid
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

    // Calculate TTL from token expiration
    const ttlSeconds = Math.max(
      Math.floor((credentials.expires_at - Date.now()) / 1000),
      3600 // Minimum 1 hour TTL
    );

    // Store in KV with automatic expiration
    // This overwrites any previous tokens (implements refresh token rotation)
    await kv.set('jobber:tokens', JSON.stringify(encryptedCredentials), {
      ex: ttlSeconds,
    });

    console.log('Jobber credentials stored/updated securely in KV');
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
