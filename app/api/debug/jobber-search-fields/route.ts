import { NextResponse } from 'next/server';
import { getValidAccessToken } from '@/lib/jobberTokenManager';

/**
 * TEMPORARY - Check ClientSearchField enum values
 * DELETE AFTER ANALYSIS
 */

export async function GET() {
  try {
    const accessToken = await getValidAccessToken();

    const introspectionQuery = `
      query {
        __type(name: "ClientSearchField") {
          name
          kind
          description
          enumValues {
            name
            description
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
      body: JSON.stringify({ query: introspectionQuery }),
    });

    const result = await response.json();

    if (result.errors) {
      return NextResponse.json(
        { error: 'GraphQL errors', details: result.errors },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        clientSearchFieldEnum: result.data?.__type,
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
