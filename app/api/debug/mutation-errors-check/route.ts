import { NextResponse } from 'next/server';
import { getValidAccessToken } from '@/lib/jobberTokenManager';

/**
 * TEMPORARY - Check exact MutationErrors type definition
 * DELETE AFTER VERIFICATION
 */

export async function GET() {
  try {
    const accessToken = await getValidAccessToken();

    const introspectionQuery = `
      query {
        mutationErrorType: __type(name: "MutationError") {
          name
          kind
          fields {
            name
            type {
              kind
              name
              ofType {
                kind
                name
              }
            }
          }
        }
        userErrorType: __type(name: "UserError") {
          name
          kind
          fields {
            name
            type {
              kind
              name
              ofType {
                kind
                name
              }
            }
          }
        }
        clientErrorType: __type(name: "ClientError") {
          name
          kind
          fields {
            name
            type {
              kind
              name
              ofType {
                kind
                name
              }
            }
          }
        }
        validationErrorType: __type(name: "ValidationError") {
          name
          kind
          fields {
            name
            type {
              kind
              name
              ofType {
                kind
                name
              }
            }
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
        mutationErrorType: result.data?.__type,
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
