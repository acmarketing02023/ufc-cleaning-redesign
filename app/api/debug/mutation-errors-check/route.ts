import { NextResponse } from 'next/server';
import { getValidAccessToken } from '@/lib/jobberTokenManager';

/**
 * TEMPORARY - Check exact MutationErrors type definition
 * DELETE AFTER VERIFICATION
 */

export async function GET() {
  try {
    const accessToken = await getValidAccessToken();

    // Try to find the error type by attempting a mutation that will fail
    const testMutation = `
      mutation {
        clientCreate(input: {
          firstName: "Test"
        }) {
          client {
            id
          }
          userErrors {
            message
            field
            code
            type
          }
        }
      }
    `;

    const response = await fetch('https://api.getjobber.com/api/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
        'X-JOBBER-GRAPHQL-VERSION': '2025-04-16',
      },
      body: JSON.stringify({ query: testMutation }),
    });

    const result = await response.json();

    return NextResponse.json(
      {
        success: true,
        testMutationResponse: result,
        note: 'Check the structure of userErrors in the response',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Introspection error:', String(error));
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to introspect schema',
        details: String(error),
      },
      { status: 500 }
    );
  }
}
