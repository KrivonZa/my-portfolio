"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface SlideTitleProps {
  children: React.ReactNode;
  direction?: "left" | "right" | "top" | "bottom";
  baseColor?: string;
  duration?: number;
  delay?: number;
  className?: string;
  once?: boolean;
}

export default function SlideTitle({
  children,
  direction = "left",
  baseColor = "bg-primary",
  duration = 0.6,
  delay = 0,
  className,
  once = true,
}: SlideTitleProps) {
  const ref = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const updateMobileState = () => setIsMobile(mediaQuery.matches);

    updateMobileState();
    mediaQuery.addEventListener("change", updateMobileState);

    return () => mediaQuery.removeEventListener("change", updateMobileState);
  }, []);

  const isInView = useInView(ref, {
    margin: "0px 0px -10% 0px",
    once,
  });

  const shouldReduceMotion = isMobile;

  const slideVariants = {
    initial: {
      x: shouldReduceMotion
        ? 0
        : direction === "left"
          ? "-100%"
          : direction === "right"
            ? "100%"
            : 0,
      y: shouldReduceMotion
        ? 0
        : direction === "top"
          ? "-100%"
          : direction === "bottom"
            ? "100%"
            : 0,
    },
    animate: { x: 0, y: 0 },
  };

  return (
    <div
      ref={ref}
      className={cn("relative inline-block overflow-hidden isolate", className)}
    >
      <motion.div
        variants={slideVariants}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
        transition={{
          duration: shouldReduceMotion ? Math.min(duration, 0.3) : duration,
          delay: delay / 1000,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={cn("absolute inset-0 z-[-1]", baseColor)}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{
          duration: shouldReduceMotion ? 0.2 : 0.3,
          delay: (delay + (shouldReduceMotion ? 80 : 150)) / 1000,
        }}
        className="px-2"
      >
        {children}
      </motion.div>
    </div>
  );
}