import { NextRequest, NextResponse } from 'next/server';
import { Anthropic } from '@anthropic-ai/sdk';
import { getChatbotSystemPrompt } from '@/lib/chatbotKnowledge';

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

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

    if (!process.env.ANTHROPIC_API_KEY) {
      console.error('ANTHROPIC_API_KEY not configured');
      return NextResponse.json(
        { error: 'Chat service not configured' },
        { status: 500 }
      );
    }

    // Build messages array for Claude
    const messages: ChatMessage[] = [
      ...conversationHistory,
      { role: 'user', content: message },
    ];

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
    console.error('Chat API error:', error);

    // Return a helpful fallback message
    const fallbackMessage =
      'I had trouble processing that. Please call us at (214) 218-2921 or email david@ufc-cleaning.com for immediate assistance!';

    return NextResponse.json(
      {
        success: false,
        message: fallbackMessage,
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
