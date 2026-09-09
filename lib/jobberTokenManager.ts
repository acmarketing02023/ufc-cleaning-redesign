import { refreshAccessToken } from './oauth';

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
 * TODO: Implement with your storage backend
 */
export async function getValidAccessToken(): Promise<string> {
  // PLACEHOLDER: Replace with actual storage implementation
  console.warn('getValidAccessToken: Storage backend not implemented.');

  // Example implementation:
  // const credentials = await retrieveJobberCredentials();
  //
  // if (!credentials) {
  //   throw new Error('No Jobber credentials stored');
  // }
  //
  // // Check if token is expired or about to expire
  // const now = Date.now();
  // const timeUntilExpiry = credentials.expires_at - now;
  //
  // if (timeUntilExpiry < TOKEN_REFRESH_THRESHOLD) {
  //   return await refreshJobberAccessToken(credentials.refresh_token);
  // }
  //
  // return credentials.access_token;

  throw new Error('Jobber token manager not configured. Storage backend must be implemented.');
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
 * Retrieve stored Jobber credentials
 *
 * TODO: Implement with your storage backend
 * Options:
 * - Vercel KV: kv.get('jobber:credentials')
 * - Database: db.jobberCredentials.findFirst()
 * - Encrypted cookies: decrypt from request
 */
async function retrieveJobberCredentials(): Promise<JobberCredentials | null> {
  // PLACEHOLDER: Replace with actual storage implementation
  console.warn('retrieveJobberCredentials: Storage backend not implemented.');
  return null;
}

/**
 * Store Jobber credentials
 *
 * TODO: Implement with your storage backend
 * CRITICAL SECURITY:
 * - Encrypt access_token and refresh_token before storage
 * - Use secure storage (database, KV cache, etc.)
 * - Never log tokens
 * - Set appropriate expiration on refresh_token storage
 */
async function storeJobberCredentials(credentials: JobberCredentials): Promise<void> {
  // PLACEHOLDER: Replace with actual storage implementation
  console.warn('storeJobberCredentials: Storage backend not implemented.');
  console.log('Prepared to store credentials with expiration:', new Date(credentials.expires_at));

  // Example with Vercel KV:
  // import { kv } from '@vercel/kv';
  // const expiresIn = Math.floor((credentials.expires_at - Date.now()) / 1000);
  // await kv.setex(
  //   'jobber:credentials',
  //   expiresIn,
  //   JSON.stringify(credentials)
  // );

  // Example with database:
  // await db.jobberCredentials.upsert({
  //   id: 'default',
  //   accessToken: encrypt(credentials.access_token),
  //   refreshToken: encrypt(credentials.refresh_token),
  //   expiresAt: new Date(credentials.expires_at),
  //   updatedAt: new Date(),
  // });
}

/**
 * Clear stored Jobber credentials (for logout/disconnect)
 */
export async function clearJobberCredentials(): Promise<void> {
  // PLACEHOLDER: Replace with actual storage implementation
  console.warn('clearJobberCredentials: Storage backend not implemented.');

  // Example with Vercel KV:
  // import { kv } from '@vercel/kv';
  // await kv.del('jobber:credentials');

  // Example with database:
  // await db.jobberCredentials.deleteMany();
}
