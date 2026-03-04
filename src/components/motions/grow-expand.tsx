"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface GrowExpandProps {
  size?: number | string;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}

export default function GrowExpand({
  size = "100px",
  direction = "up",
  delay = 0,
  duration = 0.6,
  className = "",
  once = true,
}: GrowExpandProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once });

  // Default animation
  let initial = {};
  let animate = {};
  const style: React.CSSProperties = {};

  // Vertical directions
  if (direction === "up") {
    style.height = size;
    style.transformOrigin = "bottom";
    initial = { scaleY: 0.01 };
    animate = { scaleY: 1 };
  }

  if (direction === "down") {
    style.height = size;
    style.transformOrigin = "top";
    initial = { scaleY: 0.01 };
    animate = { scaleY: 1 };
  }

  // Horizontal directions
  if (direction === "left") {
    style.width = size;
    style.transformOrigin = "right";
    initial = { scaleX: 0.01 };
    animate = { scaleX: 1 };
  }

  if (direction === "right") {
    style.width = size;
    style.transformOrigin = "left";
    initial = { scaleX: 0.01 };
    animate = { scaleX: 1 };
  }

  return (
    <motion.div
      ref={ref}
      style={style}
      className={className}
      initial={initial}
      animate={isInView ? animate : initial}
      transition={{
        delay: delay / 1000,
        duration,
        ease: "easeOut",
      }}
    />
  );
}