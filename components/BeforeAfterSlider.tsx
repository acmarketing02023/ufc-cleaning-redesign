"use client";

import { useState } from "react";
import Image from "next/image";

interface BeforeAfterSliderProps {
  before: string;
  after: string;
  alt: string;
}

export default function BeforeAfterSlider({ before, after, alt }: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const newPosition = ((e.clientX - rect.left) / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, newPosition)));
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const newPosition = ((e.touches[0].clientX - rect.left) / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, newPosition)));
  };

  return (
    <div
      className="relative w-full max-w-2xl mx-auto overflow-hidden rounded-lg shadow-lg bg-gray-900 cursor-col-resize"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      style={{ aspectRatio: "16 / 9" }}
    >
      {/* After image (background) */}
      <Image
        src={after}
        alt={`${alt} - After`}
        fill
        className="object-cover"
        priority
      />

      {/* Before image (foreground, clipped) */}
      <div
        className="absolute top-0 left-0 h-full w-full overflow-hidden"
        style={{ width: `${sliderPosition}%` }}
      >
        <Image
          src={before}
          alt={`${alt} - Before`}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Slider handle */}
      <div
        className="absolute top-0 h-full w-1 bg-accent-500 cursor-col-resize"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-accent-500 w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
          <div className="flex gap-1">
            <svg
              className="w-4 h-4 text-primary-900"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M13 6a2 2 0 11-4 0 2 2 0 014 0zM8 10a2 2 0 11-4 0 2 2 0 014 0zM14 15a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <svg
              className="w-4 h-4 text-primary-900"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M13 6a2 2 0 11-4 0 2 2 0 014 0zM8 10a2 2 0 11-4 0 2 2 0 014 0zM14 15a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute top-4 left-4 bg-black bg-opacity-60 px-3 py-1 rounded text-white text-sm font-semibold">
        BEFORE
      </div>
      <div className="absolute top-4 right-4 bg-black bg-opacity-60 px-3 py-1 rounded text-white text-sm font-semibold">
        AFTER
      </div>
    </div>
  );
}
