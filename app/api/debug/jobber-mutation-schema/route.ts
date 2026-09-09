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

    // Comprehensive introspection query for all required types
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
    const types = schema?.types || [];

    // Filter all required types for complete schema documentation
    const requiredTypeNames = [
      'PhoneNumberCreateAttributes',
      'EmailCreateAttributes',
      'AddressAttributes',
      'PropertyAttributes',
      'ClientFilterAttributes',
      'RequestDetailsInput',
      'RequestCreateLineItemAttributes',
      'AssessmentCreateInput',
      'ClientCreateInput',
      'RequestCreateInput',
      'Client',
      'Request',
      'ClientTitle',
      'RequestStatusTypeEnum',
      'ClientCreatePayload',
      'RequestCreatePayload',
    ];

    const relevantTypes = types.filter((t: any) =>
      requiredTypeNames.includes(t.name)
    );

    return NextResponse.json(
      {
        success: true,
        apiVersion: '2025-04-16',
        timestamp: new Date().toISOString(),
        types: relevantTypes,
        note: 'Complete schema for all input types, objects, and enums needed for quote-to-lead integration',
        deleteEndpoint: 'Remove this endpoint after schema documentation is complete',
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
