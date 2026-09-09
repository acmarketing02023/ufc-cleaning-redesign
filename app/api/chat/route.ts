import { NextRequest, NextResponse } from 'next/server';
import { findMatchingIntent, getFallbackResponse } from '@/lib/faqKnowledge';

interface RequestBody {
  message: string;
}

/**
 * POST /api/chat
 * Rule-based FAQ chatbot - no external AI API required
 * Completely free and fast
 */
export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as RequestBody;
    const { message } = body;

    if (!message || !message.trim()) {
      return NextResponse.json(
        {
          success: false,
          response: "Please ask me something! 😊",
        },
        { status: 400 }
      );
    }

    // Find matching FAQ intent
    const matchedIntent = findMatchingIntent(message);
    const faqResponse = matchedIntent?.response || getFallbackResponse();

    return NextResponse.json(
      {
        success: true,
        response: faqResponse.response,
        quickReplies: faqResponse.quickReplies || [],
        buttonText: faqResponse.buttonText || null,
        buttonLink: faqResponse.buttonLink || null,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Chat error:', error);

    return NextResponse.json(
      {
        success: false,
        response:
          "Oops! Something went wrong. Please call us at (214) 218-2921!",
        quickReplies: ["Call Us", "Get a Quote"],
      },
      { status: 500 }
    );
  }
}
