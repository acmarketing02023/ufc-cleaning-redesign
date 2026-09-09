import { NextRequest, NextResponse } from 'next/server';
import { Anthropic } from '@anthropic-ai/sdk';
import { getChatbotSystemPrompt } from '@/lib/chatbotKnowledge';

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

interface RequestBody {
  message: string;
  conversationHistory?: ChatMessage[];
}

/**
 * POST /api/chat
 * Handles chatbot messages using Claude API
 */
export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as RequestBody;
    const { message, conversationHistory = [] } = body;

    if (!message || !message.trim()) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    // Validate API key is configured
    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      console.error('ANTHROPIC_API_KEY not configured in environment');
      return NextResponse.json(
        { error: 'Chat service not configured' },
        { status: 500 }
      );
    }

    // Initialize Anthropic client with valid API key
    const client = new Anthropic({
      apiKey: apiKey,
    });

    // Build messages array for Claude
    const messages: ChatMessage[] = [
      ...conversationHistory,
      { role: 'user', content: message },
    ];

    console.log('Calling Claude API with message:', message.substring(0, 50));

    // Call Claude API
    const response = await client.messages.create({
      model: 'claude-3-5-sonnet-20241022',
      max_tokens: 500,
      system: getChatbotSystemPrompt(),
      messages: messages,
    });

    // Extract the text response
    const assistantMessage =
      response.content[0].type === 'text' ? response.content[0].text : '';

    if (!assistantMessage) {
      throw new Error('No response from Claude');
    }

    return NextResponse.json(
      {
        success: true,
        message: assistantMessage,
      },
      { status: 200 }
    );
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    const errorDetails = {
      timestamp: new Date().toISOString(),
      error: errorMessage,
      errorType: error?.constructor?.name || 'Unknown',
    };

    console.error('Chat API error - Full Details:', errorDetails);
    console.error('Chat API error - Stack:', error instanceof Error ? error.stack : 'No stack trace');

    // Return detailed error info for debugging (includes actual error)
    const fallbackMessage =
      'I had trouble processing that. Please call us at (214) 218-2921 or email david@ufc-cleaning.com for immediate assistance!';

    return NextResponse.json(
      {
        success: false,
        message: fallbackMessage,
        debug: {
          error: errorMessage,
          type: error?.constructor?.name || 'Unknown',
          timestamp: new Date().toISOString(),
        },
      },
      { status: 500 }
    );
  }
}
