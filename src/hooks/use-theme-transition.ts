"use client";

import { useTheme } from "next-themes";
import { useCallback, useRef } from "react";
import { flushSync } from "react-dom";

export function useThemeTransition() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const isTransitioningRef = useRef(false);

  const toggleTheme = useCallback(
    (event?: React.MouseEvent<HTMLElement>) => {
      if (isTransitioningRef.current) return;

      const currentTheme = resolvedTheme || theme || "light";
      const targetTheme = currentTheme === "dark" ? "light" : "dark";

      // Fallback if View Transitions API is not supported or user prefers reduced motion
      const supportsViewTransitions =
        typeof document !== "undefined" &&
        "startViewTransition" in document &&
        !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (!supportsViewTransitions) {
        setTheme(targetTheme);
        return;
      }

      let x = window.innerWidth / 2;
      let y = window.innerHeight / 2;

      if (event) {
        if (event.clientX !== 0 || event.clientY !== 0) {
          x = event.clientX;
          y = event.clientY;
        } else if (event.currentTarget) {
          const rect = event.currentTarget.getBoundingClientRect();
          x = rect.left + rect.width / 2;
          y = rect.top + rect.height / 2;
        }
      }

      const endRadius = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y)
      );

      const docEl = document.documentElement;

      isTransitioningRef.current = true;

      // Set CSS variables for circle position & radius BEFORE view transition starts
      // This allows CSS keyframes to apply clip-path at frame 0 without JS microtask delay (preventing initial flash)
      docEl.style.setProperty("--theme-x", `${x}px`);
      docEl.style.setProperty("--theme-y", `${y}px`);
      docEl.style.setProperty("--theme-r", `${endRadius}px`);

      docEl.classList.add("theme-transitioning");

      const transition = (
        document as Document & {
          startViewTransition: (callback: () => void) => {
            finished: Promise<void>;
          };
        }
      ).startViewTransition(() => {
        flushSync(() => {
          setTheme(targetTheme);
        });
      });

      transition.finished.finally(() => {
        isTransitioningRef.current = false;
        docEl.classList.remove("theme-transitioning");
      });
    },
    [resolvedTheme, theme, setTheme]
  );

  return {
    theme,
    resolvedTheme,
    setTheme,
    toggleTheme,
  };
}
