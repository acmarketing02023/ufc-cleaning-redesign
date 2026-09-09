import { NextResponse } from 'next/server';
import { getValidAccessToken } from '@/lib/jobberTokenManager';

/**
 * TEMPORARY - Inspect actual Jobber query capabilities and rate limits
 * DELETE AFTER ANALYSIS
 */

export async function GET() {
  try {
    const accessToken = await getValidAccessToken();

    // Get full schema definition of Query.clients and related types
    const introspectionQuery = `
      query {
        clientsQuery: __type(name: "Query") {
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
          }
        }
        clientSearchQuery: __type(name: "ClientSearchInput") {
          name
          kind
          description
          inputFields {
            name
            description
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

    // Extract only clients query details
    const queryFields = result.data?.clientsQuery?.fields || [];
    const clientsField = queryFields.find((f: any) => f.name === 'clients');

    return NextResponse.json(
      {
        success: true,
        clientsQueryDefinition: clientsField,
        clientSearchInput: result.data?.clientSearchQuery,
        responseHeaders: Object.fromEntries(response.headers),
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
