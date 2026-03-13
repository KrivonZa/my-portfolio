"use client";

import { useEffect, useMemo, useState } from "react";
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const updateMobileState = () => setIsMobile(mediaQuery.matches);

    updateMobileState();
    mediaQuery.addEventListener("change", updateMobileState);

    return () => mediaQuery.removeEventListener("change", updateMobileState);
  }, []);

  const descriptionLines = useMemo(
    () =>
      Array.isArray(description)
        ? description
        : description
            .split("\n")
            .map((line) => line.trim())
            .filter(Boolean),
    [description],
  );

  const imageMotionClass = isMobile
    ? isTapped
      ? "scale-[1.02]"
      : ""
    : isTapped
      ? "scale-105 blur-[3px]"
      : "group-hover:scale-105";

  const imageTransitionClass = isMobile ? "duration-300" : "duration-700";
  const overlayTransitionClass = isMobile ? "duration-300" : "duration-500";

  return (
    <div
      className="group relative w-full h-full overflow-hidden rounded-3xl bg-gray-900 shadow-2xl touch-pan-y border border-white/10"
      onClick={() => setIsTapped(!isTapped)}
    >
      {/* Image Layer */}
      <Image
        src={imageSrc}
        alt={alt || title}
        className={`h-full w-full object-cover transition-transform ${imageTransitionClass} ${imageMotionClass}`}
        width={500}
        height={300}
      />

      {/* Overlay Content */}
      <div
        className={`absolute inset-0 flex flex-col justify-end bg-linear-to-t from-black/90 via-black/60 to-transparent transition-all ${overlayTransitionClass}
          ${isTapped ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none md:group-hover:opacity-100 md:group-hover:pointer-events-auto"}`}
      >
        <div className="flex max-h-[85%] flex-col p-6 md:p-12 text-white">
          <h3 className="mb-2 md:mb-4 text-2xl md:text-5xl font-bold tracking-tight text-primary">
            {title}
          </h3>

          {/* Scrollable Area */}
          <div
            className={`pr-4 custom-scrollbar ${isTapped ? "overflow-y-auto max-h-[60vh]" : "overflow-hidden"} touch-pan-y`}
          >
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
