"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface Props {
  children?: React.ReactNode;
  direction?: "left" | "right" | "up" | "down";
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  reduceMotionOnMobile?: boolean;
}

export default function ScrollFade({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  className = "",
  once = true,
  reduceMotionOnMobile = false,
}: Props) {
  const ref = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (!reduceMotionOnMobile) return;

    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const updateMobileState = () => setIsMobile(mediaQuery.matches);

    updateMobileState();
    mediaQuery.addEventListener("change", updateMobileState);

    return () => mediaQuery.removeEventListener("change", updateMobileState);
  }, [reduceMotionOnMobile]);

  const isInView = useInView(ref, {
    margin: "0px 0px -10% 0px",
    once,
  });

  const shouldReduceMotion = reduceMotionOnMobile && isMobile;
  const offset = shouldReduceMotion ? 0 : 60;
  const initial = { opacity: 0, x: 0, y: 0 };

  if (direction === "left") initial.x = -offset;
  if (direction === "right") initial.x = offset;
  if (direction === "up") initial.y = offset;
  if (direction === "down") initial.y = -offset;

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={initial}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : initial}
      transition={{
        delay: delay / 1000,
        duration: shouldReduceMotion ? Math.min(duration, 0.3) : duration,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}