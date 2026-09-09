/**
 * Quick schema verification script
 * Usage: node scripts/verify-jobber-schema.js
 * Requires: JOBBER_CLIENT_ID, JOBBER_CLIENT_SECRET, Vercel KV access
 */

const fs = require('fs');
const path = require('path');

// Load environment
require('dotenv').config({ path: path.join(__dirname, '../.env.local') });

const JOBBER_GRAPHQL_ENDPOINT = 'https://api.getjobber.com/api/graphql';
const JOBBER_GRAPHQL_VERSION = '2025-04-16';

async function getAccessToken() {
  // This will only work if .env.local has the KV credentials
  // For now, we'll document what needs to be queried
  console.log('This script requires active Jobber credentials.');
  console.log('Alternative: Run the /api/debug/jobber-schema-verify endpoint on your deployed site.\n');

  return null;
}

async function introspectSchema(accessToken) {
  const query = `
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
        }
      }
    }
  `;

  const response = await fetch(JOBBER_GRAPHQL_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`,
      'X-JOBBER-GRAPHQL-VERSION': JOBBER_GRAPHQL_VERSION,
    },
    body: JSON.stringify({ query }),
  });

  const result = await response.json();

  if (result.errors) {
    console.error('GraphQL errors:', result.errors);
    return null;
  }

  const types = result.data?.__schema?.types || [];
  const focused = types.filter((t) =>
    ['FormInput', 'ClientFilterAttributes', 'ClientsConnection', 'ClientEdge', 'Client'].includes(t.name)
  );

  return focused;
}

(async () => {
  const token = await getAccessToken();
  if (!token) {
    console.log('To verify FormInput and ClientFilterAttributes:');
    console.log('1. Visit: https://ufc-cleaning.com/api/debug/jobber-schema-verify');
    console.log('2. Review the "types" array for: FormInput, ClientFilterAttributes, ClientsConnection');
    console.log('\nOR run this from the deployed environment where KV credentials are available.\n');
    return;
  }

  const types = await introspectSchema(token);
  if (types) {
    console.log(JSON.stringify(types, null, 2));
  }
})();
