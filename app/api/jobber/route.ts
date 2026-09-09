import { NextRequest, NextResponse } from 'next/server';
import { getValidAccessToken } from '@/lib/jobberTokenManager';
import { makeJobberGraphQLRequest } from '@/lib/jobberGraphQL';

interface QuoteFormData {
  service: string;
  bedrooms: number;
  bathrooms: number;
  frequency: string;
  addOns: string[];
  condition: string;
  timing: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  address: string;
  notes: string;
}

/**
 * Normalize phone number to digits only for comparison
 */
function normalizePhone(phone: string): string {
  return phone.replace(/\D/g, '');
}

/**
 * Normalize email for comparison
 */
function normalizeEmail(email: string): string {
  return email.toLowerCase().trim();
}

/**
 * Normalize address for comparison: lowercase, remove punctuation, collapse spaces
 */
function normalizeAddress(address: string): string {
  return address
    .toLowerCase()
    .replace(/[,]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Query clients with pagination to find existing client by email/phone
 */
async function findExistingClient(
  accessToken: string,
  email: string,
  phone: string
): Promise<{ id: string; properties: any[] } | null> {
  const normalizedEmail = normalizeEmail(email);
  const normalizedPhone = normalizePhone(phone);

  let cursor = null;
  let hasMore = true;

  while (hasMore) {
    const query = `
      query GetClientsPage($first: Int!, $after: String) {
        clients(first: $first, after: $after, filter: { isArchived: false }) {
          pageInfo {
            hasNextPage
            endCursor
          }
          edges {
            node {
              id
              firstName
              lastName
              isCompany
              emails {
                address
                primary
              }
              phones {
                number
                primary
              }
              clientProperties(first: 100) {
                nodes {
                  id
                  name
                  address {
                    street1
                    street2
                    city
                    province
                    postalCode
                    country
                  }
                }
              }
            }
          }
        }
      }
    `;

    const result = await makeJobberGraphQLRequest(accessToken, {
      query,
      variables: { first: 100, after: cursor },
    });

    if (!result.success) {
      console.error('Failed to query clients:', result.error);
      return null;
    }

    const clients = result.data?.clients?.edges?.map((e: any) => e.node) || [];

    // Check each client for email/phone match
    for (const client of clients) {
      const clientEmails = (client.emails || []).map((e: any) =>
        normalizeEmail(e.address)
      );
      const clientPhones = (client.phones || []).map((p: any) =>
        normalizePhone(p.number)
      );

      // Email match (primary)
      if (normalizedEmail && clientEmails.includes(normalizedEmail)) {
        return {
          id: client.id,
          properties: client.clientProperties?.nodes || [],
        };
      }

      // Phone match (fallback)
      if (normalizedPhone && clientPhones.includes(normalizedPhone)) {
        return {
          id: client.id,
          properties: client.clientProperties?.nodes || [],
        };
      }
    }

    hasMore = result.data?.clients?.pageInfo?.hasNextPage;
    cursor = result.data?.clients?.pageInfo?.endCursor;
  }

  return null;
}

/**
 * Check if submitted address matches any existing property
 */
function findMatchingProperty(
  submittedAddress: string,
  existingProperties: any[]
): string | null {
  const normalizedSubmitted = normalizeAddress(submittedAddress);

  for (const property of existingProperties) {
    const fullAddressString = [
      property.address?.street1,
      property.address?.street2,
      property.address?.city,
      property.address?.province,
      property.address?.postalCode,
    ]
      .filter(Boolean)
      .join(' ');

    const normalizedExisting = normalizeAddress(fullAddressString);

    if (normalizedSubmitted === normalizedExisting) {
      return property.id;
    }
  }

  return null;
}

/**
 * Create a new property for an existing client
 */
async function createProperty(
  accessToken: string,
  clientId: string,
  address: string
): Promise<string | null> {
  const mutation = `
    mutation CreateProperty($clientId: EncodedId!, $input: PropertyCreateInput!) {
      propertyCreate(clientId: $clientId, input: $input) {
        property {
          id
        }
        userErrors {
          message
          field
        }
      }
    }
  `;

  const result = await makeJobberGraphQLRequest(accessToken, {
    query: mutation,
    variables: {
      clientId,
      input: {
        properties: [
          {
            address: {
              street1: address, // Entire address goes into street1
            },
          },
        ],
      },
    },
  });

  if (!result.success) {
    console.error('Failed to create property:', result.error);
    return null;
  }

  const userErrors = result.data?.propertyCreate?.userErrors;
  if (userErrors && userErrors.length > 0) {
    console.error('Property creation userErrors:', userErrors);
    return null;
  }

  return result.data?.propertyCreate?.property?.id || null;
}

/**
 * Create a new client with address
 */
async function createClient(
  accessToken: string,
  firstName: string,
  lastName: string,
  email: string,
  phone: string,
  address: string
): Promise<{ clientId: string; propertyId: string } | null> {
  const mutation = `
    mutation CreateClient($input: ClientCreateInput!) {
      clientCreate(input: $input) {
        client {
          id
          firstName
          lastName
        }
        userErrors {
          message
          field
        }
      }
    }
  `;

  const result = await makeJobberGraphQLRequest(accessToken, {
    query: mutation,
    variables: {
      input: {
        firstName,
        lastName,
        emails: [
          {
            address: email,
            description: 'PERSONAL',
            primary: true,
          },
        ],
        phones: [
          {
            number: phone,
            description: 'MOBILE',
            primary: true,
            smsAllowed: true,
          },
        ],
        properties: [
          {
            address: {
              street1: address,
            },
          },
        ],
        receivesReminders: true,
        receivesQuoteFollowUps: true,
      },
    },
  });

  if (!result.success) {
    console.error('Failed to create client:', result.error);
    return null;
  }

  const userErrors = result.data?.clientCreate?.userErrors;
  if (userErrors && userErrors.length > 0) {
    console.error('Client creation userErrors:', userErrors);
    return null;
  }

  const clientId = result.data?.clientCreate?.client?.id;
  if (!clientId) {
    console.error('No client ID returned from clientCreate');
    return null;
  }

  // Fetch the newly created properties to get the ID
  const clientQuery = `
    query GetClient($id: EncodedId!) {
      client(id: $id) {
        clientProperties(first: 1) {
          nodes {
            id
          }
        }
      }
    }
  `;

  const clientResult = await makeJobberGraphQLRequest(accessToken, {
    query: clientQuery,
    variables: { id: clientId },
  });

  const propertyId =
    clientResult.data?.client?.clientProperties?.nodes?.[0]?.id || null;

  if (!propertyId) {
    console.error('Could not retrieve property ID from newly created client');
    return null;
  }

  return { clientId, propertyId };
}

/**
 * Create RequestCreateInput with UFC quote data in FormInput Q&A structure
 */
function buildRequestInput(
  clientId: string,
  propertyId: string,
  formData: QuoteFormData,
  totalPrice: number
) {
  // Map form data to readable labels
  const frequencyMap: { [key: string]: string } = {
    'one-time': 'One-time',
    weekly: 'Weekly',
    'bi-weekly': 'Bi-weekly',
    monthly: 'Monthly',
  };

  const timingMap: { [key: string]: string } = {
    asap: 'ASAP / Same Day',
    'this-week': 'This Week',
    'next-week': 'Next Week',
    flexible: 'Flexible',
  };

  const conditionMap: { [key: string]: string } = {
    clean: 'Clean',
    average: 'Average',
    'moderate-clutter': 'Moderate Clutter',
    'heavily-cluttered': 'Heavily Cluttered',
  };

  return {
    clientId,
    propertyId,
    title: `UFC Website Quote - ${formData.firstName} ${formData.lastName}`,
    requestDetails: {
      form: {
        sections: [
          {
            label: 'Service Information',
            items: [
              {
                label: 'Service Type',
                answerText: formData.service,
              },
              {
                label: 'Bedrooms',
                answerText: formData.bedrooms.toString(),
              },
              {
                label: 'Bathrooms',
                answerText: formData.bathrooms.toString(),
              },
              {
                label: 'Frequency',
                answerText: frequencyMap[formData.frequency] || formData.frequency,
              },
              {
                label: 'Property Condition',
                answerText: conditionMap[formData.condition] || formData.condition,
              },
            ],
          },
          {
            label: 'Add-Ons & Preferences',
            items: [
              {
                label: 'Add-Ons',
                answerText: formData.addOns.join(', ') || 'None selected',
              },
              {
                label: 'Timing Preference',
                answerText: timingMap[formData.timing] || formData.timing,
              },
              {
                label: 'Website Estimated Price',
                answerText: `$${totalPrice}`,
              },
            ],
          },
          {
            label: 'Customer Notes',
            items: [
              {
                label: 'Notes',
                answerText: formData.notes || 'No additional notes',
              },
            ],
          },
        ],
      },
    },
  };
}

/**
 * Create Jobber request/lead
 */
async function createRequest(
  accessToken: string,
  input: any
): Promise<string | null> {
  const mutation = `
    mutation CreateRequest($input: RequestCreateInput!) {
      requestCreate(input: $input) {
        request {
          id
          title
          status
        }
        userErrors {
          message
          field
        }
      }
    }
  `;

  const result = await makeJobberGraphQLRequest(accessToken, {
    query: mutation,
    variables: { input },
  });

  if (!result.success) {
    console.error('Failed to create request:', result.error);
    return null;
  }

  const userErrors = result.data?.requestCreate?.userErrors;
  if (userErrors && userErrors.length > 0) {
    console.error('Request creation userErrors:', userErrors);
    return null;
  }

  return result.data?.requestCreate?.request?.id || null;
}

/**
 * Main POST handler for lead creation
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { formData, totalPrice } = body as {
      formData: QuoteFormData;
      totalPrice: number;
    };

    // Validate required fields
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.phone ||
      !formData.address
    ) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Get valid access token
    let accessToken: string;
    try {
      accessToken = await getValidAccessToken();
    } catch (error) {
      console.error('Failed to get Jobber access token:', error);
      return NextResponse.json(
        {
          success: false,
          error: 'Jobber not authorized',
          message: 'Please authorize Jobber first',
        },
        { status: 401 }
      );
    }

    // Step 1: Try to find existing client by email/phone
    console.log(
      `Searching for existing client: ${formData.email} / ${formData.phone}`
    );
    const existingClient = await findExistingClient(
      accessToken,
      formData.email,
      formData.phone
    );

    let clientId: string;
    let propertyId: string | null;

    if (existingClient) {
      console.log(`Found existing client: ${existingClient.id}`);
      clientId = existingClient.id;

      // Step 2: Check if address matches existing property
      propertyId = findMatchingProperty(
        formData.address,
        existingClient.properties
      );

      if (!propertyId) {
        console.log('Address does not match existing properties, creating new property');
        // Step 3: Create new property for existing client
        propertyId = await createProperty(
          accessToken,
          clientId,
          formData.address
        );

        if (!propertyId) {
          return NextResponse.json(
            {
              success: false,
              error: 'Failed to create property for existing client',
            },
            { status: 500 }
          );
        }
        console.log(`Created new property: ${propertyId}`);
      } else {
        console.log(`Using existing property: ${propertyId}`);
      }
    } else {
      console.log('No existing client found, creating new client with property');
      // Step 4: Create new client with property
      const newClientResult = await createClient(
        accessToken,
        formData.firstName,
        formData.lastName,
        formData.email,
        formData.phone,
        formData.address
      );

      if (!newClientResult) {
        return NextResponse.json(
          { success: false, error: 'Failed to create new client' },
          { status: 500 }
        );
      }

      clientId = newClientResult.clientId;
      propertyId = newClientResult.propertyId;
      console.log(`Created new client: ${clientId}, property: ${propertyId}`);
    }

    // Step 5: Create request with FormInput data
    const requestInput = buildRequestInput(
      clientId,
      propertyId,
      formData,
      totalPrice
    );

    const requestId = await createRequest(accessToken, requestInput);

    if (!requestId) {
      return NextResponse.json(
        { success: false, error: 'Failed to create request in Jobber' },
        { status: 500 }
      );
    }

    console.log(
      `Successfully created request: ${requestId} for client: ${clientId}`
    );

    return NextResponse.json(
      {
        success: true,
        message: 'Quote submitted to Jobber',
        requestId,
        clientId,
        propertyId,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing quote submission:', String(error));
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to process quote submission',
        details: String(error),
      },
      { status: 500 }
    );
  }
}
