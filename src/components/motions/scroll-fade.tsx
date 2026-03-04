"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface Props {
  children?: React.ReactNode;
  direction?: "left" | "right" | "up" | "down";
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}

export default function ScrollFade({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  className = "",
  once = true,
}: Props) {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    margin: "0px 0px -10% 0px",
    once,
  });

  const offset = 60;
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
        duration,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}