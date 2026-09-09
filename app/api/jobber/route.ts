import { NextRequest, NextResponse } from 'next/server';
import { getValidAccessToken } from '@/lib/jobberTokenManager';
import { makeJobberGraphQLRequest } from '@/lib/jobberGraphQL';
import {
  persistLead,
  markLeadSynced,
  markLeadSyncFailed,
  PersistedLead,
} from '@/lib/leadPersistence';
import { findExistingClient, cacheNewClient } from '@/lib/clientLookup';

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
              street1: address,
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
    console.error(
      'Property creation userErrors:',
      userErrors.map((e: any) => e.message).join('; ')
    );
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
    console.error(
      'Client creation userErrors:',
      userErrors.map((e: any) => e.message).join('; ')
    );
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
    console.error(
      'Request creation userErrors:',
      userErrors.map((e: any) => e.message).join('; ')
    );
    return null;
  }

  return result.data?.requestCreate?.request?.id || null;
}

/**
 * Main POST handler for lead creation
 */
export async function POST(request: NextRequest) {
  let submissionId: string | null = null;

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

    // CRITICAL: Step 1 - Persist the lead immediately before any Jobber operations
    // This ensures no data loss if Jobber becomes unavailable
    console.log('Step 1: Persisting lead submission');
    try {
      const persistedLead: Omit<PersistedLead, 'submissionId'> = {
        timestamp: new Date().toISOString(),
        syncStatus: 'pending',
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        address: formData.address,
        service: formData.service,
        bedrooms: formData.bedrooms,
        bathrooms: formData.bathrooms,
        frequency: formData.frequency,
        addOns: formData.addOns,
        condition: formData.condition,
        timing: formData.timing,
        notes: formData.notes,
        estimatedPrice: totalPrice,
      };

      submissionId = await persistLead(persistedLead);
      console.log(`Lead persisted with ID: ${submissionId}`);
    } catch (error) {
      console.error('Critical: Failed to persist lead:', String(error));
      return NextResponse.json(
        {
          success: false,
          error: 'Failed to store lead submission',
          details: String(error),
        },
        { status: 500 }
      );
    }

    // Step 2: Get valid Jobber access token
    console.log('Step 2: Retrieving Jobber access token');
    let accessToken: string;
    try {
      accessToken = await getValidAccessToken();
    } catch (error) {
      console.error('Failed to get Jobber access token:', error);
      if (submissionId) {
        await markLeadSyncFailed(
          submissionId,
          'Jobber not authorized'
        ).catch((e) => console.error('Failed to mark sync failed:', e));
      }
      return NextResponse.json(
        {
          success: false,
          error: 'Jobber not authorized',
          submissionId: submissionId,
        },
        { status: 401 }
      );
    }

    // Step 3: Find or create Jobber client (with exact-match duplicate prevention)
    console.log('Step 3: Looking up existing client');
    const clientLookup = await findExistingClient(
      accessToken,
      formData.email,
      formData.phone
    );

    // If lookup itself failed, return error and preserve lead
    if (clientLookup.status === 'error') {
      console.error('Client lookup failed:', clientLookup.error);
      if (submissionId) {
        await markLeadSyncFailed(
          submissionId,
          `Client lookup failed: ${clientLookup.error}`
        ).catch((e) => console.error('Failed to mark sync failed:', e));
      }
      return NextResponse.json(
        {
          success: false,
          error: 'Failed to query existing clients',
          details: clientLookup.error,
          submissionId: submissionId,
        },
        { status: 500 }
      );
    }

    let clientId: string;
    let propertyId: string | null;

    if (clientLookup.status === 'found') {
      console.log(`Found existing client: ${clientLookup.clientId}`);
      clientId = clientLookup.clientId;

      // Check if address matches existing property
      propertyId = findMatchingProperty(
        formData.address,
        clientLookup.properties
      );

      if (!propertyId) {
        console.log('Creating new property for existing client');
        propertyId = await createProperty(
          accessToken,
          clientId,
          formData.address
        );

        if (!propertyId) {
          if (submissionId) {
            await markLeadSyncFailed(
              submissionId,
              'Failed to create property'
            ).catch((e) => console.error('Failed to mark sync failed:', e));
          }
          return NextResponse.json(
            {
              success: false,
              error: 'Failed to create property for existing client',
              submissionId: submissionId,
            },
            { status: 500 }
          );
        }
        console.log(`Created new property: ${propertyId}`);
      } else {
        console.log(`Using existing property: ${propertyId}`);
      }
    } else {
      // clientLookup.status === 'not_found'
      console.log('Creating new client with property');
      const newClientResult = await createClient(
        accessToken,
        formData.firstName,
        formData.lastName,
        formData.email,
        formData.phone,
        formData.address
      );

      if (!newClientResult) {
        if (submissionId) {
          await markLeadSyncFailed(
            submissionId,
            'Failed to create new client'
          ).catch((e) => console.error('Failed to mark sync failed:', e));
        }
        return NextResponse.json(
          {
            success: false,
            error: 'Failed to create new client',
            submissionId: submissionId,
          },
          { status: 500 }
        );
      }

      clientId = newClientResult.clientId;
      propertyId = newClientResult.propertyId;
      console.log(`Created new client: ${clientId}, property: ${propertyId}`);

      // Cache the new client for future lookups
      await cacheNewClient(formData.email, formData.phone, clientId).catch(
        (e) => console.error('Failed to cache new client:', e)
      );
    }

    // Step 4: Create Jobber Request
    console.log('Step 4: Creating Jobber Request');
    const requestInput = buildRequestInput(
      clientId,
      propertyId,
      formData,
      totalPrice
    );

    const requestId = await createRequest(accessToken, requestInput);

    if (!requestId) {
      if (submissionId) {
        await markLeadSyncFailed(
          submissionId,
          'Failed to create request in Jobber'
        ).catch((e) => console.error('Failed to mark sync failed:', e));
      }
      return NextResponse.json(
        {
          success: false,
          error: 'Failed to create request in Jobber',
          submissionId: submissionId,
        },
        { status: 500 }
      );
    }

    // Step 5: Mark lead as successfully synced
    console.log('Step 5: Marking lead as synced');
    if (submissionId) {
      await markLeadSynced(submissionId, clientId, requestId, propertyId).catch(
        (e) => console.error('Failed to mark sync successful:', e)
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
        submissionId: submissionId,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Unexpected error processing quote submission:', String(error));

    // Mark lead as failed on unexpected error
    if (submissionId) {
      await markLeadSyncFailed(
        submissionId,
        `Unexpected error: ${String(error)}`
      ).catch((e) => console.error('Failed to mark sync failed:', e));
    }

    return NextResponse.json(
      {
        success: false,
        error: 'Failed to process quote submission',
        details: String(error),
        submissionId: submissionId,
      },
      { status: 500 }
    );
  }
}
