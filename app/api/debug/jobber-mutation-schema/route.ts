import { NextResponse } from 'next/server';
import { getValidAccessToken } from '@/lib/jobberTokenManager';

/**
 * TEMPORARY DIAGNOSTIC ENDPOINT
 * Introspects the exact Jobber GraphQL schema for clientCreate, requestCreate, and client search
 * Returns complete field definitions for integration design
 *
 * DELETE AFTER SCHEMA IS DOCUMENTED
 * Access via: GET /api/debug/jobber-mutation-schema
 */

export async function GET() {
  try {
    console.log('Introspecting Jobber GraphQL schema (2025-04-16)...');

    const accessToken = await getValidAccessToken();

    // Full introspection query for mutations and input types
    const introspectionQuery = `
      query {
        __schema {
          mutationType {
            name
            fields {
              name
              description
              args {
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
                    }
                  }
                }
              }
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
          queryType {
            fields {
              name
              description
              args {
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

    const contentType = response.headers.get('content-type');
    if (!contentType?.includes('application/json')) {
      return NextResponse.json(
        { error: `Non-JSON response: ${contentType}` },
        { status: 500 }
      );
    }

    const result = await response.json();

    if (result.errors) {
      return NextResponse.json(
        { error: 'GraphQL errors', details: result.errors },
        { status: 500 }
      );
    }

    const schema = result.data?.__schema;

    // Extract only the mutations and types we need
    const mutations = schema?.mutationType?.fields || [];
    const queries = schema?.queryType?.fields || [];
    const types = schema?.types || [];

    // Filter relevant mutations
    const relevantMutations = mutations.filter((m: any) =>
      ['clientCreate', 'requestCreate', 'clientUpdate'].includes(m.name)
    );

    // Filter relevant input types
    const relevantTypes = types.filter((t: any) =>
      [
        'ClientCreateInput',
        'ClientUpdateInput',
        'RequestCreateInput',
        'RequestUpdateInput',
        'Client',
        'Request',
        'AddressInput',
        'Address',
      ].includes(t.name)
    );

    // Filter relevant queries
    const relevantQueries = queries.filter((q: any) =>
      ['clients', 'client', 'clientSearch'].includes(q.name)
    );

    return NextResponse.json(
      {
        success: true,
        apiVersion: '2025-04-16',
        timestamp: new Date().toISOString(),
        mutations: relevantMutations,
        queries: relevantQueries,
        types: relevantTypes,
        instructions: 'Extract exact field definitions from "types" array for ClientCreateInput, RequestCreateInput, etc.',
        deleteMe: 'This endpoint should be deleted after schema is documented',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Introspection error:', String(error));
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to introspect Jobber schema',
        details: String(error),
      },
      { status: 500 }
    );
  }
}
