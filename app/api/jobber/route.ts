import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { apiKey, data, formData, totalPrice } = body;

    // Create client in Jobber
    const clientResponse = await fetch('https://api.getjobber.com/api/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        query: `
          mutation CreateClient($input: ClientCreateInput!) {
            clientCreate(input: $input) {
              client {
                id
                name
                email
                phone
                address
              }
              errors {
                field
                message
              }
            }
          }
        `,
        variables: {
          input: {
            name: data.client.name,
            email: data.client.email,
            phone: data.client.phone,
            address: data.client.address,
          },
        },
      }),
    });

    const clientData = await clientResponse.json();

    if (clientData.errors || clientData.data?.clientCreate?.errors?.length > 0) {
      console.error('Jobber client creation error:', clientData);
      // Client might already exist, continue anyway
    }

    const clientId = clientData.data?.clientCreate?.client?.id;

    // Create request/quote in Jobber
    if (clientId) {
      const requestResponse = await fetch('https://api.getjobber.com/api/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          query: `
            mutation CreateRequest($input: RequestCreateInput!) {
              requestCreate(input: $input) {
                request {
                  id
                  title
                  description
                }
                errors {
                  field
                  message
                }
              }
            }
          `,
          variables: {
            input: {
              clientId: clientId,
              title: `Quote from ${formData.firstName} ${formData.lastName}`,
              description: `
Service: ${formData.service}
Estimated Price: $${totalPrice}
Bedrooms: ${formData.bedrooms}
Bathrooms: ${formData.bathrooms}
Condition: ${formData.condition}
Frequency: ${formData.frequency}
Timeline: ${formData.timing}
Add-ons: ${formData.addOns.length > 0 ? formData.addOns.join(', ') : 'None'}
Notes: ${formData.notes || 'None'}
Phone: ${formData.phone}
Email: ${formData.email}
Address: ${formData.address}
              `,
            },
          },
        }),
      });

      const requestData = await requestResponse.json();

      if (requestData.errors || requestData.data?.requestCreate?.errors?.length > 0) {
        console.error('Jobber request creation error:', requestData);
      }
    }

    return NextResponse.json({ success: true, message: 'Quote submitted to Jobber' });
  } catch (error) {
    console.error('Error processing Jobber submission:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to process quote submission' },
      { status: 500 }
    );
  }
}
