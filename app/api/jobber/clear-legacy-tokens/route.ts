import { NextResponse } from 'next/server';
import { kv } from '@vercel/kv';

/**
 * ONE-TIME UTILITY: Clear legacy malformed jobber:tokens record
 *
 * This endpoint deletes ONLY the jobber:tokens KV key to clear out
 * any malformed records from before the KV serialization fix.
 *
 * Should only be called once before fresh OAuth authorization.
 * Can be deleted after successful token refresh cycle.
 *
 * Deployed: 2026-09-08 (force redeploy)
 */
export async function GET() {
  try {
    console.log('Clearing legacy jobber:tokens KV record...');

    // Delete ONLY jobber:tokens key
    const deleteResult = await kv.del('jobber:tokens');

    console.log('Legacy token record cleared', {
      keyDeleted: 'jobber:tokens',
      deleteResult: deleteResult,
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Legacy jobber:tokens record deleted',
        details: 'KV key cleared. Ready for fresh OAuth authorization.',
        nextStep: 'Visit /api/jobber/auth to perform fresh authorization',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Failed to clear legacy token record:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to delete jobber:tokens',
        details: String(error),
      },
      { status: 500 }
    );
  }
}
