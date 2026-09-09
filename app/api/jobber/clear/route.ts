import { NextResponse } from 'next/server';
import { kv } from '@vercel/kv';

/**
 * Clear jobber:tokens KV record
 * Simple route to delete the legacy token record
 */
export async function GET() {
  try {
    console.log('Deleting jobber:tokens KV record');

    const result = await kv.del('jobber:tokens');

    return NextResponse.json(
      {
        success: true,
        message: 'jobber:tokens deleted',
        result: result,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error deleting token record:', error);
    return NextResponse.json(
      {
        success: false,
        error: String(error),
      },
      { status: 500 }
    );
  }
}
