"use client";

import { usePathname } from "next/navigation";

export default function EmergencyBanner() {
  const pathname = usePathname();

  // Only show on homepage
  if (pathname !== "/") return null;

  return (
    <div className="bg-red-600 text-white py-2 px-4 sm:py-3 sm:px-6 z-30">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center gap-2 text-center">
          <span className="text-sm font-semibold">⏰</span>
          <p className="text-sm font-medium">Only a few appointments left this week in your area</p>
        </div>
      </div>
    </div>
  );
}
