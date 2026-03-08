"use client";

import { useState } from "react";
import Image from "next/image";

interface ContentCardProps {
  imageSrc: string;
  title: string;
  description: string | string[];
  alt?: string;
}

export default function ContentCard({
  imageSrc,
  title,
  description,
  alt,
}: ContentCardProps) {
  const [isTapped, setIsTapped] = useState(false);
  const descriptionLines = Array.isArray(description)
    ? description
    : description
        .split("\n")
        .map((line) => line.trim())
        .filter(Boolean);

  return (
    <div
      className="group relative w-full h-full overflow-hidden rounded-3xl bg-gray-900 shadow-2xl touch-none border border-white/10"
      onClick={() => setIsTapped(!isTapped)}
    >
      {/* Image Layer */}
      <Image
        src={imageSrc}
        alt={alt || title}
        className={`h-full w-full object-cover transition-transform duration-700 
          ${isTapped ? "scale-105 blur-[3px]" : "group-hover:scale-105"}`}
        width={500}
        height={300}
      />

      {/* Overlay Content */}
      <div
        className={`absolute inset-0 flex flex-col justify-end bg-linear-to-t from-black/90 via-black/60 to-transparent transition-all duration-500
          ${isTapped ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 md:group-hover:opacity-100 md:group-hover:translate-y-0"}`}
      >
        <div className="flex max-h-[85%] flex-col p-6 md:p-12 text-white">
          <h3 className="mb-2 md:mb-4 text-2xl md:text-5xl font-bold tracking-tight text-primary">
            {title}
          </h3>

          {/* Scrollable Area */}
          <div className="overflow-y-auto pr-4 custom-scrollbar overscroll-contain">
            <ul className="space-y-2 text-sm leading-relaxed text-gray-200 md:text-lg">
              {descriptionLines.map((line, index) => (
                <li key={`${line}-${index}`} className="flex gap-2">
                  <span className="mt-[0.45em] h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>

          <button className="mt-6 text-[10px] md:text-xs uppercase tracking-[0.3em] text-gray-400 md:hidden">
            — Tap to close —
          </button>
        </div>
      </div>
    </div>
  );
}
