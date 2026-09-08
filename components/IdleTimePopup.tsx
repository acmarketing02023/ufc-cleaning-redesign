"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function IdleTimePopup() {
  const [isVisible, setIsVisible] = useState(false);
  const idleTimerRef = useRef<NodeJS.Timeout | null>(null);
  const hasShownRef = useRef(false);
  const pathname = usePathname();

  // Only show idle popup on the quote funnel page
  const isOnQuotePage = pathname === "/quote";

  useEffect(() => {
    if (!isOnQuotePage) return;

    const resetIdleTimer = () => {
      if (idleTimerRef.current) {
        clearTimeout(idleTimerRef.current);
      }

      idleTimerRef.current = setTimeout(() => {
        if (!hasShownRef.current) {
          setIsVisible(true);
          hasShownRef.current = true;
        }
      }, 120000); // 2 minutes of inactivity
    };

    const events = ["mousedown", "keydown", "scroll", "touchstart"];

    events.forEach((event) => {
      document.addEventListener(event, resetIdleTimer);
    });

    resetIdleTimer();

    return () => {
      events.forEach((event) => {
        document.removeEventListener(event, resetIdleTimer);
      });
      if (idleTimerRef.current) {
        clearTimeout(idleTimerRef.current);
      }
    };
  }, [isOnQuotePage]);

  if (!isVisible || !isOnQuotePage) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-primary-700 rounded-lg p-8 max-w-md mx-4 shadow-2xl border-2 border-accent-500 relative">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300"
        >
          ×
        </button>

        <h2 className="text-2xl font-bold text-white mb-3">Need Help?</h2>
        <p className="text-white mb-4">
          Let's connect you with the right service. Our team is ready to help with same-day or next-day availability.
        </p>

        <div className="bg-primary-600 rounded-lg p-4 mb-6">
          <p className="text-white font-bold mb-2">Quick & Easy:</p>
          <ul className="text-white text-sm space-y-1">
            <li>✓ 2-minute quote</li>
            <li>✓ No obligation</li>
            <li>✓ Same-day service</li>
          </ul>
        </div>

        <div className="space-y-3">
          <Link
            href="/quote"
            onClick={() => setIsVisible(false)}
            className="block w-full btn bg-accent-500 text-primary-900 hover:bg-accent-400 font-bold text-center"
          >
            Get Your Quote
          </Link>
          <a
            href="tel:+12142182921"
            onClick={() => setIsVisible(false)}
            className="block w-full btn bg-primary-600 text-white hover:bg-primary-500 font-bold border border-accent-500 text-center"
          >
            Call (214) 218-2921
          </a>
        </div>
      </div>
    </div>
  );
}
