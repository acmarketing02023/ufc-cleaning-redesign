/**
 * Jobber GraphQL API Helper
 *
 * Centralized configuration for all Jobber GraphQL requests
 * Ensures consistent API version and headers across the application
 */

const JOBBER_GRAPHQL_ENDPOINT = 'https://api.getjobber.com/api/graphql';
const JOBBER_GRAPHQL_VERSION = '2025-04-16';

interface GraphQLRequestOptions {
  query: string;
  variables?: Record<string, any>;
}

interface GraphQLResponse {
  data?: any;
  errors?: Array<{ message: string; extensions?: any }>;
}

/**
 * Make a Jobber GraphQL request with proper headers and error handling
 *
 * @param accessToken - Bearer token from OAuth
 * @param options - GraphQL query and optional variables
 * @returns Parsed GraphQL response
 */
export async function makeJobberGraphQLRequest(
  accessToken: string,
  options: GraphQLRequestOptions
): Promise<{
  success: boolean;
  data?: any;
  error?: string;
  details?: string;
}> {
  try {
    const { query, variables } = options;

    const requestBody = {
      query,
      ...(variables && { variables }),
    };

    const response = await fetch(JOBBER_GRAPHQL_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
        'X-JOBBER-GRAPHQL-VERSION': JOBBER_GRAPHQL_VERSION,
      },
      body: JSON.stringify(requestBody),
    });

    // Get response metadata
    const contentType = response.headers.get('content-type');

    // Read response body safely
    let responseBodyText: string;
    try {
      responseBodyText = await response.text();
    } catch (readError) {
      console.error('Failed to read Jobber response body:', readError);
      return {
        success: false,
        error: 'Failed to read API response',
        details: String(readError),
      };
    }

    // Validate content type
    if (!contentType?.includes('application/json')) {
      console.error('Jobber API: Non-JSON response', { status: response.status, contentType });
      return {
        success: false,
        error: `Expected JSON, got ${contentType}`,
      };
    }

    // Parse JSON
    let graphQLData: GraphQLResponse;
    try {
      graphQLData = JSON.parse(responseBodyText);
    } catch (parseError) {
      console.error('Failed to parse GraphQL response:', parseError);
      return {
        success: false,
        error: 'Failed to parse API response',
        details: 'Response was not valid JSON',
      };
    }

    // Check for GraphQL errors
    if (graphQLData.errors && graphQLData.errors.length > 0) {
      const errorMessages = graphQLData.errors
        .map((e) => e.message)
        .join('; ');

      console.error('Jobber GraphQL error:', { errors: errorMessages });

      return {
        success: false,
        error: 'GraphQL error from Jobber',
        details: errorMessages,
      };
    }

    // Check for HTTP errors
    if (!response.ok) {
      console.error('Jobber API HTTP error:', {
        status: response.status,
        statusText: response.statusText,
      });

      return {
        success: false,
        error: `HTTP ${response.status}: ${response.statusText}`,
        details: graphQLData.errors?.[0]?.message || 'Unknown error',
      };
    }

    return {
      success: true,
      data: graphQLData.data,
    };
  } catch (error) {
    console.error('Unexpected error in Jobber GraphQL request:', error);
    return {
      success: false,
      error: 'Unexpected error',
      details: String(error),
    };
  }
}

/**
 * Simple account info query for verification
 */
export const QUERY_GET_ACCOUNT = `
  query GetAccount {
    account {
      id
      name
    }
  }
`;
