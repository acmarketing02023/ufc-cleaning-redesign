import crypto from 'crypto';

/**
 * Encryption utilities for storing sensitive tokens
 * Uses AES-256-GCM for authenticated encryption
 */

const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY || generateEncryptionKey();
const ALGORITHM = 'aes-256-gcm';

/**
 * Generate a random encryption key (32 bytes for AES-256)
 * In production, this should be stored in an environment variable
 */
function generateEncryptionKey(): string {
  return crypto.randomBytes(32).toString('hex');
}

/**
 * Encrypt sensitive data
 * @param data - The data to encrypt
 * @returns Encrypted data with IV and auth tag prepended
 */
export function encrypt(data: string): string {
  try {
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv(ALGORITHM, Buffer.from(ENCRYPTION_KEY, 'hex'), iv);

    let encrypted = cipher.update(data, 'utf8', 'hex');
    encrypted += cipher.final('hex');

    const authTag = cipher.getAuthTag();

    // Combine: IV + authTag + encrypted data
    const combined = iv.toString('hex') + ':' + authTag.toString('hex') + ':' + encrypted;

    return combined;
  } catch (error) {
    console.error('Encryption error:', error);
    throw new Error('Failed to encrypt data');
  }
}

/**
 * Decrypt sensitive data
 * @param encryptedData - The encrypted data (format: IV:authTag:encrypted)
 * @returns Decrypted original data
 */
export function decrypt(encryptedData: string): string {
  try {
    const parts = encryptedData.split(':');
    if (parts.length !== 3) {
      throw new Error('Invalid encrypted data format');
    }

    const iv = Buffer.from(parts[0], 'hex');
    const authTag = Buffer.from(parts[1], 'hex');
    const encrypted = parts[2];

    const decipher = crypto.createDecipheriv(ALGORITHM, Buffer.from(ENCRYPTION_KEY, 'hex'), iv);
    decipher.setAuthTag(authTag);

    let decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');

    return decrypted;
  } catch (error) {
    console.error('Decryption error:', error);
    throw new Error('Failed to decrypt data');
  }
}

/**
 * Validate encryption key is configured
 */
export function validateEncryptionKey(): boolean {
  return !!process.env.ENCRYPTION_KEY;
}
