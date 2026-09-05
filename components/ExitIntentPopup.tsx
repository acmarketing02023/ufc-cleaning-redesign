"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger if mouse leaves from top of window
      if (e.clientY <= 0) {
        setIsVisible(true);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-primary-700 rounded-lg p-8 max-w-md mx-4 shadow-2xl border-2 border-accent-500 relative">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300"
        >
          ×
        </button>

        <h2 className="text-2xl font-bold text-white mb-3">Hold On!</h2>
        <p className="text-white mb-4">
          Before you go, get a free quote for your project. Same-day service available.
        </p>

        <div className="bg-primary-600 rounded-lg p-4 mb-6">
          <p className="text-accent-300 font-bold text-sm mb-1">Limited Time Offer:</p>
          <p className="text-white font-bold">15% off your first service</p>
          <p className="text-white text-xs mt-2">Use code: WELCOME15</p>
        </div>

        <div className="space-y-3">
          <Link
            href="/quote"
            onClick={() => setIsVisible(false)}
            className="block w-full btn bg-accent-500 text-primary-900 hover:bg-accent-400 font-bold text-center"
          >
            Get Free Quote Now
          </Link>
          <button
            onClick={() => setIsVisible(false)}
            className="block w-full btn bg-primary-600 text-white hover:bg-primary-500 font-bold border border-accent-500"
          >
            Continue Browsing
          </button>
        </div>

        <p className="text-white text-xs text-center mt-4">
          Questions? Call (214) 817-9212
        </p>
      </div>
    </div>
  );
}
