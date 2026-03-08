"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface GrowExpandProps {
  size?: number | string;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
  children?: React.ReactNode;
  duration?: number;
}

export default function GrowExpand({
  size = "200px",
  direction = "down",
  className = "",
  children,
  duration = 1,
}: GrowExpandProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const isVertical = direction === "up" || direction === "down";

  const originMap = {
    down: "top",
    up: "bottom",
    right: "left",
    left: "right",
  } as const;

  const animateProps = isVertical
    ? { height: isInView ? size : "0px" }
    : { width: isInView ? size : "0px" };

  const initialProps = isVertical ? { height: "0px" } : { width: "0px" };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={initialProps}
      animate={animateProps}
      transition={{ duration, ease: "easeOut" }}
      style={{
        overflow: "hidden",
        transformOrigin: originMap[direction],
      }}
    >
      {children}
    </motion.div>
  );
}