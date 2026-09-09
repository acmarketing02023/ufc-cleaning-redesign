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
    const allTypes = schema?.types || [];
    const mutationType = schema?.mutationType;

    // Get all mutation fields
    const mutations = mutationType?.fields || [];

    // Return schema with mutations and types
    return NextResponse.json(
      {
        success: true,
        totalTypes: allTypes.length,
        types: allTypes,
        mutations: mutations,
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
