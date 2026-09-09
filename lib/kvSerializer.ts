/**
 * Unified KV Serialization Helper
 *
 * Handles the fact that @vercel/kv may auto-deserialize JSON:
 * - kv.set() with JSON string may cause automatic deserialization
 * - kv.get() might return either the original string OR a deserialized object
 *
 * This module provides consistent get/set operations that work regardless
 * of whether the KV client deserializes or not.
 */

import { kv } from '@vercel/kv';

/**
 * Safe get that handles both string and object returns from KV
 */
export async function kvGetParsed<T>(key: string): Promise<T | null> {
  try {
    const stored = await kv.get(key);

    if (!stored) {
      return null;
    }

    // Handle both cases: string (if KV doesn't auto-deserialize) or object (if it does)
    let parsed: T;

    if (typeof stored === 'string') {
      // KV returned a string - parse it
      try {
        parsed = JSON.parse(stored) as T;
      } catch (parseError) {
        console.error('kvGetParsed: Failed to parse string from KV', {
          key,
          error: String(parseError),
          preview: stored.substring(0, 100),
        });
        return null;
      }
    } else if (typeof stored === 'object' && stored !== null) {
      // KV already deserialized it to an object - use directly
      parsed = stored as T;
    } else {
      console.error('kvGetParsed: Unexpected KV value type', {
        key,
        receivedType: typeof stored,
        receivedValue: stored,
      });
      return null;
    }

    return parsed;
  } catch (error) {
    console.error('kvGetParsed: Unexpected error retrieving from KV', {
      key,
      error: String(error),
    });
    return null;
  }
}

/**
 * Safe set that stores as JSON string (works with auto-deserializing KV clients)
 * @param key - KV key
 * @param value - Value to store
 * @param ttlSeconds - Optional TTL in seconds
 */
export async function kvSetSerialized<T>(
  key: string,
  value: T,
  ttlSeconds?: number
): Promise<void> {
  try {
    // Always store as JSON string
    // If KV auto-deserializes on retrieval, kvGetParsed will handle it
    const jsonString = JSON.stringify(value);

    const options: any = {};
    if (ttlSeconds) {
      options.ex = ttlSeconds; // ex = expire in seconds
    }

    await kv.set(key, jsonString, options);

    console.log('kvSetSerialized: Stored successfully', {
      key,
      jsonLength: jsonString.length,
      ttl: ttlSeconds,
    });
  } catch (error) {
    console.error('kvSetSerialized: Failed to store in KV', {
      key,
      error: String(error),
    });
    throw error;
  }
}

/**
 * Verify that a KV key exists and is readable
 */
export async function kvKeyExists(key: string): Promise<boolean> {
  try {
    const value = await kv.get(key);
    return value !== null && value !== undefined;
  } catch (error) {
    console.error('kvKeyExists: Error checking KV key', {
      key,
      error: String(error),
    });
    return false;
  }
}

/**
 * Delete a KV key
 */
export async function kvDelete(key: string): Promise<void> {
  try {
    await kv.del(key);
    console.log('kvDelete: Key deleted successfully', { key });
  } catch (error) {
    console.error('kvDelete: Failed to delete KV key', {
      key,
      error: String(error),
    });
    throw error;
  }
}
