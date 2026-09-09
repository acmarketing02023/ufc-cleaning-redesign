import { NextResponse } from 'next/server';
import { getValidAccessToken } from '@/lib/jobberTokenManager';

/**
 * TEMPORARY - Schema verification for FormInput and ClientFilterAttributes
 * DELETE AFTER VERIFICATION
 */

export async function GET() {
  try {
    const accessToken = await getValidAccessToken();

    const introspectionQuery = `
      query {
        __schema {
          types {
            name
            kind
            description
            fields {
              name
              description
              type {
                kind
                name
                ofType {
                  kind
                  name
                  ofType {
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
            inputFields {
              name
              description
              type {
                kind
                name
                ofType {
                  kind
                  name
                  ofType {
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
            enumValues {
              name
              description
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

    const schema = result.data?.__schema;
    const types = schema?.types || [];

    // Extract all Form-related types and key types
    const relevantTypes = types.filter((t: any) =>
      t.name?.includes('Form') ||
      t.name === 'ClientFilterAttributes' ||
      t.name === 'ClientsConnection' ||
      t.name === 'ClientEdge' ||
      t.name === 'Client'
    );

    return NextResponse.json(
      {
        success: true,
        types: relevantTypes,
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
