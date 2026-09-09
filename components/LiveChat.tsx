"use client";

import { useState } from "react";

interface Message {
  type: "customer" | "agent";
  text: string;
}

export default function LiveChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { type: "agent", text: "Hi there! 👋 How can we help you today?" },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage = inputValue.trim();

    // Add user message to chat
    const updatedMessages: Message[] = [
      ...messages,
      { type: "customer", text: userMessage },
    ];
    setMessages(updatedMessages);
    setInputValue("");
    setIsLoading(true);

    try {
      // Call the chatbot API
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMessage,
          conversationHistory: updatedMessages
            .filter((m) => m.type !== "customer" || m.text !== userMessage)
            .map((m) => ({
              role: m.type === "customer" ? "user" : "assistant",
              content: m.text,
            })),
        }),
      });

      const data = await response.json();

      if (data.success && data.message) {
        setMessages([
          ...updatedMessages,
          { type: "agent", text: data.message },
        ]);
      } else {
        setMessages([
          ...updatedMessages,
          {
            type: "agent",
            text: "I had trouble processing that. Please call us at (214) 218-2921!",
          },
        ]);
      }
    } catch (error) {
      console.error("Chat error:", error);
      setMessages([
        ...updatedMessages,
        {
          type: "agent",
          text: "Sorry, I'm having trouble connecting. Please call (214) 218-2921 for assistance!",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {isOpen ? (
        <div className="w-96 h-[500px] bg-primary-700 rounded-lg shadow-2xl flex flex-col border-2 border-accent-500">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white p-4 rounded-t-lg flex justify-between items-center border-b border-accent-500">
            <div>
              <h3 className="font-bold">Chat with Us</h3>
              <p className="text-xs text-accent-200">Usually replies in minutes</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-accent-300 text-xl"
            >
              ×
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-primary-800">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.type === "customer" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-lg ${
                    msg.type === "customer"
                      ? "bg-accent-500 text-primary-900 rounded-br-none font-medium"
                      : "bg-primary-600 text-white rounded-bl-none border border-accent-500"
                  }`}
                >
                  <p className="text-sm whitespace-wrap break-words">{msg.text}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-primary-600 text-white rounded-bl-none border border-accent-500 px-4 py-2 rounded-lg">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-accent-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-accent-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-accent-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="border-t-2 border-accent-500 p-4 bg-primary-700 rounded-b-lg">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Type your message..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && !isLoading && handleSendMessage()}
                disabled={isLoading}
                className="flex-1 border-2 border-accent-500 rounded px-3 py-2 text-sm bg-primary-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-500 disabled:opacity-50"
              />
              <button
                onClick={handleSendMessage}
                disabled={isLoading || !inputValue.trim()}
                className="bg-accent-500 text-primary-900 px-4 py-2 rounded hover:bg-accent-400 transition font-bold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? "..." : "Send"}
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-primary-600 text-white p-4 rounded-full shadow-lg hover:bg-primary-700 transition hover:shadow-xl w-16 h-16 flex items-center justify-center"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        </button>
      )}
    </div>
  );
}
