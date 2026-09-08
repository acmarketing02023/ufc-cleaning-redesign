import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { data, formData, totalPrice } = body;

    // Get API key from environment
    const apiKey = process.env.JOBBER_API_KEY;

    if (!apiKey) {
      console.error('Jobber API key not configured');
      return NextResponse.json(
        { success: false, error: 'Jobber integration not configured' },
        { status: 500 }
      );
    }

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
              }
              userErrors {
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
          },
        },
      }),
    });

    const clientData = await clientResponse.json();

    if (clientData.errors) {
      console.error('Jobber API error:', clientData.errors);
      return NextResponse.json({ success: false, error: clientData.errors }, { status: 400 });
    }

    if (clientData.data?.clientCreate?.userErrors?.length > 0) {
      console.error('Jobber client creation error:', clientData.data.clientCreate.userErrors);
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
                }
                userErrors {
                  field
                  message
                }
              }
            }
          `,
          variables: {
            input: {
              clientId: clientId,
              title: `Quote - ${formData.firstName} ${formData.lastName}`,
              description: `Service: ${formData.service}\nEstimated Price: $${totalPrice}\nDetails: ${formData.notes || 'No additional notes'}`,
            },
          },
        }),
      });

      const requestData = await requestResponse.json();

      if (requestData.errors) {
        console.error('Jobber request error:', requestData.errors);
      }

      if (requestData.data?.requestCreate?.userErrors?.length > 0) {
        console.error('Jobber request creation error:', requestData.data.requestCreate.userErrors);
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
