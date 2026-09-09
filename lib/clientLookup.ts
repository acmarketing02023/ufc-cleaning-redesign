import { kvGetParsed, kvSetSerialized, kvDelete } from './kvSerializer';
import { makeJobberGraphQLRequest } from './jobberGraphQL';

/**
 * Client lookup with KV cache optimization
 * Implements exact-match duplicate prevention
 */

/**
 * Normalize email for comparison
 */
function normalizeEmail(email: string): string {
  return email.toLowerCase().trim();
}

/**
 * Normalize phone number to digits only for comparison
 */
function normalizePhone(phone: string): string {
  return phone.replace(/\D/g, '');
}

/**
 * Generate KV cache key for email
 */
function getCacheKeyEmail(email: string): string {
  return `client:email:${normalizeEmail(email)}`;
}

/**
 * Generate KV cache key for phone
 */
function getCacheKeyPhone(phone: string): string {
  return `client:phone:${normalizePhone(phone)}`;
}

/**
 * Result from client lookup
 */
type ClientLookupResult =
  | { status: 'found'; clientId: string; properties: any[] }
  | { status: 'not_found' }
  | { status: 'error'; error: string };

/**
 * Cache a client mapping (email or phone -> clientId)
 */
async function cacheClientMapping(
  email: string | null,
  phone: string | null,
  clientId: string
): Promise<void> {
  try {
    const ttl = 30 * 24 * 60 * 60; // 30 days

    if (email) {
      await kvSetSerialized(getCacheKeyEmail(email), clientId, ttl);
    }
    if (phone) {
      await kvSetSerialized(getCacheKeyPhone(phone), clientId, ttl);
    }

    console.log(`Cached client mapping: ${clientId}`);
  } catch (error) {
    console.error('Failed to cache client mapping:', String(error));
    // Non-fatal: cache is optional optimization
  }
}

/**
 * Check KV cache for existing client ID
 */
async function checkCacheForClient(
  email: string | null,
  phone: string | null
): Promise<string | null> {
  try {
    // Try email first
    if (email) {
      const cachedId = await kvGetParsed<string>(getCacheKeyEmail(email));
      if (cachedId) {
        console.log(`Cache hit for email: ${email}`);
        return cachedId;
      }
    }

    // Try phone fallback
    if (phone) {
      const cachedId = await kvGetParsed<string>(getCacheKeyPhone(phone));
      if (cachedId) {
        console.log(`Cache hit for phone: ${phone}`);
        return cachedId;
      }
    }

    return null;
  } catch (error) {
    console.error('Cache lookup error:', String(error));
    return null; // Treat cache miss on error
  }
}

/**
 * Verify a cached client ID is still valid
 * Returns null if client not found or is invalid (stale/deleted/merged)
 */
async function verifyCachedClient(
  accessToken: string,
  clientId: string
): Promise<boolean> {
  try {
    const query = `
      query VerifyClient($id: EncodedId!) {
        client(id: $id) {
          id
        }
      }
    `;

    const result = await makeJobberGraphQLRequest(accessToken, {
      query,
      variables: { id: clientId },
    });

    if (!result.success) {
      console.log(`Cached client invalid (lookup failed): ${clientId}`);
      return false;
    }

    const foundClientId = result.data?.client?.id;
    if (foundClientId) {
      console.log(`Cached client verified: ${clientId}`);
      return true;
    }

    console.log(`Cached client not found: ${clientId}`);
    return false;
  } catch (error) {
    console.error('Client verification error:', String(error));
    return false;
  }
}

/**
 * Search Jobber for client by email with exact matching
 */
async function searchClientByEmail(
  accessToken: string,
  email: string
): Promise<ClientLookupResult> {
  try {
    const normalizedEmail = normalizeEmail(email);

    const query = `
      query SearchClientByEmail($searchTerm: String!) {
        clients(searchTerm: $searchTerm, searchFields: [EMAILS, PRIMARY_EMAIL], first: 100) {
          edges {
            node {
              id
              firstName
              lastName
              emails {
                address
                primary
              }
              phones {
                number
                primary
              }
              clientProperties(first: 100) {
                nodes {
                  id
                  name
                  address {
                    street1
                    street2
                    city
                    province
                    postalCode
                    country
                  }
                }
              }
            }
          }
        }
      }
    `;

    const result = await makeJobberGraphQLRequest(accessToken, {
      query,
      variables: { searchTerm: email },
    });

    if (!result.success) {
      console.error('Email search failed:', result.error);
      return { status: 'error', error: result.error || 'Email search failed' };
    }

    const clients = result.data?.clients?.edges?.map((e: any) => e.node) || [];

    // Exact matching: find client with matching email
    for (const client of clients) {
      const clientEmails = (client.emails || []).map((e: any) => normalizeEmail(e.address));

      if (clientEmails.includes(normalizedEmail)) {
        console.log(`Exact email match found: ${client.id}`);
        return {
          status: 'found',
          clientId: client.id,
          properties: client.clientProperties?.nodes || [],
        };
      }
    }

    console.log(`No exact email match for: ${email}`);
    return { status: 'not_found' };
  } catch (error) {
    console.error('Email search exception:', String(error));
    return { status: 'error', error: String(error) };
  }
}

/**
 * Search Jobber for client by phone with exact matching
 */
async function searchClientByPhone(
  accessToken: string,
  phone: string
): Promise<ClientLookupResult> {
  try {
    const normalizedPhone = normalizePhone(phone);

    const query = `
      query SearchClientByPhone($searchTerm: String!) {
        clients(searchTerm: $searchTerm, searchFields: [PHONES], first: 100) {
          edges {
            node {
              id
              firstName
              lastName
              emails {
                address
                primary
              }
              phones {
                number
                primary
              }
              clientProperties(first: 100) {
                nodes {
                  id
                  name
                  address {
                    street1
                    street2
                    city
                    province
                    postalCode
                    country
                  }
                }
              }
            }
          }
        }
      }
    `;

    const result = await makeJobberGraphQLRequest(accessToken, {
      query,
      variables: { searchTerm: phone },
    });

    if (!result.success) {
      console.error('Phone search failed:', result.error);
      return { status: 'error', error: result.error || 'Phone search failed' };
    }

    const clients = result.data?.clients?.edges?.map((e: any) => e.node) || [];

    // Exact matching: find client with matching phone
    for (const client of clients) {
      const clientPhones = (client.phones || []).map((p: any) =>
        normalizePhone(p.number)
      );

      if (clientPhones.includes(normalizedPhone)) {
        console.log(`Exact phone match found: ${client.id}`);
        return {
          status: 'found',
          clientId: client.id,
          properties: client.clientProperties?.nodes || [],
        };
      }
    }

    console.log(`No exact phone match for: ${phone}`);
    return { status: 'not_found' };
  } catch (error) {
    console.error('Phone search exception:', String(error));
    return { status: 'error', error: String(error) };
  }
}

/**
 * Find existing client with exact-match duplicate prevention
 *
 * Lookup order:
 * 1. Check KV cache (email and phone)
 * 2. If no cache hit and email exists: search Jobber by email with exact match
 * 3. If no email match found: search Jobber by phone with exact match
 * 4. Return not_found only if both searches complete successfully with no match
 * 5. Return error status if any search fails (do not treat as not_found)
 */
export async function findExistingClient(
  accessToken: string,
  email: string | null,
  phone: string | null
): Promise<ClientLookupResult> {
  console.log(`Starting client lookup: email=${email}, phone=${phone}`);

  // Step 1: Check KV cache
  const cachedClientId = await checkCacheForClient(email, phone);
  if (cachedClientId) {
    // Verify cache is still valid
    const isValid = await verifyCachedClient(accessToken, cachedClientId);
    if (isValid) {
      // Retrieve cached client details for property matching
      const query = `
        query GetCachedClient($id: EncodedId!) {
          client(id: $id) {
            clientProperties(first: 100) {
              nodes {
                id
                name
                address {
                  street1
                  street2
                  city
                  province
                  postalCode
                  country
                }
              }
            }
          }
        }
      `;

      const result = await makeJobberGraphQLRequest(accessToken, {
        query,
        variables: { id: cachedClientId },
      });

      if (result.success) {
        return {
          status: 'found',
          clientId: cachedClientId,
          properties: result.data?.client?.clientProperties?.nodes || [],
        };
      }
    } else {
      // Cache is stale - delete it and fall through to Jobber search
      console.log(`Cached client is stale, deleting: ${cachedClientId}`);
      try {
        if (email) await kvDelete(getCacheKeyEmail(email));
        if (phone) await kvDelete(getCacheKeyPhone(phone));
      } catch (error) {
        console.error('Failed to clear stale cache:', String(error));
      }
    }
  }

  // Step 2: If email exists, search by email with exact matching
  if (email) {
    console.log(`Searching Jobber for email: ${email}`);
    const emailResult = await searchClientByEmail(accessToken, email);

    if (emailResult.status === 'found') {
      // Cache the match for future lookups
      await cacheClientMapping(email, phone, emailResult.clientId);
      return emailResult;
    }

    if (emailResult.status === 'error') {
      // Email search failed - do not treat as "not found"
      return emailResult;
    }
    // status === 'not_found': continue to phone search
  }

  // Step 3: If phone exists, search by phone with exact matching
  if (phone) {
    console.log(`Searching Jobber for phone: ${phone}`);
    const phoneResult = await searchClientByPhone(accessToken, phone);

    if (phoneResult.status === 'found') {
      // Cache the match for future lookups
      await cacheClientMapping(email, phone, phoneResult.clientId);
      return phoneResult;
    }

    if (phoneResult.status === 'error') {
      // Phone search failed - do not treat as "not found"
      return phoneResult;
    }
    // status === 'not_found': continue
  }

  // Step 4: Both searches completed without errors and no match found
  console.log('No existing client found after email and phone searches');
  return { status: 'not_found' };
}

/**
 * Update cache after successful client creation
 */
export async function cacheNewClient(
  email: string | null,
  phone: string | null,
  clientId: string
): Promise<void> {
  await cacheClientMapping(email, phone, clientId);
}
