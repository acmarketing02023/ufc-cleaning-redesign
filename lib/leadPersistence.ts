import { kvSetSerialized, kvGetParsed, kvDelete } from './kvSerializer';

/**
 * Durable lead submission storage
 * Captures complete lead data before Jobber sync
 * Prevents data loss if Jobber API is unavailable
 */

export interface PersistedLead {
  // Submission metadata
  submissionId: string; // Unique ID for this lead
  timestamp: string; // ISO 8601 timestamp
  syncStatus: 'pending' | 'synced' | 'failed'; // Submission state

  // Customer contact
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;

  // Service details
  service: string;
  bedrooms: number;
  bathrooms: number;
  frequency: string;
  addOns: string[];
  condition: string;
  timing: string;
  notes: string;

  // Estimate
  estimatedPrice: number;

  // Jobber sync results (populated after successful sync)
  jobberClientId?: string;
  jobberRequestId?: string;
  jobberPropertyId?: string;
  syncError?: string; // Error message if sync failed
}

/**
 * Generate unique submission ID
 */
function generateSubmissionId(): string {
  return `lead_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Store lead submission durably before attempting Jobber sync
 */
export async function persistLead(lead: Omit<PersistedLead, 'submissionId'>): Promise<string> {
  const submissionId = generateSubmissionId();
  const persistedLead: PersistedLead = {
    ...lead,
    submissionId,
  };

  try {
    // Store with 90-day TTL (long-term archival)
    await kvSetSerialized(`lead:${submissionId}`, persistedLead, 90 * 24 * 60 * 60);
    console.log(`Lead persisted: ${submissionId}`);
    return submissionId;
  } catch (error) {
    console.error('Failed to persist lead:', String(error));
    throw error;
  }
}

/**
 * Retrieve persisted lead by ID
 */
export async function retrieveLead(submissionId: string): Promise<PersistedLead | null> {
  try {
    return await kvGetParsed<PersistedLead>(`lead:${submissionId}`);
  } catch (error) {
    console.error('Failed to retrieve lead:', String(error));
    return null;
  }
}

/**
 * Update lead after successful Jobber sync
 */
export async function markLeadSynced(
  submissionId: string,
  jobberClientId: string,
  jobberRequestId: string,
  jobberPropertyId: string
): Promise<void> {
  try {
    const lead = await retrieveLead(submissionId);
    if (!lead) {
      console.error(`Lead not found for update: ${submissionId}`);
      return;
    }

    lead.syncStatus = 'synced';
    lead.jobberClientId = jobberClientId;
    lead.jobberRequestId = jobberRequestId;
    lead.jobberPropertyId = jobberPropertyId;

    await kvSetSerialized(`lead:${submissionId}`, lead, 90 * 24 * 60 * 60);
    console.log(`Lead marked synced: ${submissionId}`);
  } catch (error) {
    console.error('Failed to mark lead synced:', String(error));
    throw error;
  }
}

/**
 * Mark lead sync as failed (preserves lead for manual recovery)
 */
export async function markLeadSyncFailed(
  submissionId: string,
  error: string
): Promise<void> {
  try {
    const lead = await retrieveLead(submissionId);
    if (!lead) {
      console.error(`Lead not found for failure update: ${submissionId}`);
      return;
    }

    lead.syncStatus = 'failed';
    lead.syncError = error;

    await kvSetSerialized(`lead:${submissionId}`, lead, 90 * 24 * 60 * 60);
    console.log(`Lead marked failed: ${submissionId} - ${error}`);
  } catch (error) {
    console.error('Failed to mark lead failed:', String(error));
    throw error;
  }
}

/**
 * Get list of pending/failed leads (for manual recovery/monitoring)
 * Note: This does NOT iterate KV - you must track submission IDs separately
 * For now, just retrieve individual leads by ID as needed
 */
export async function getLead(submissionId: string): Promise<PersistedLead | null> {
  return retrieveLead(submissionId);
}
