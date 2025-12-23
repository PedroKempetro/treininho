"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

interface FadeInWhenVisibleProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
}

export function FadeInWhenVisible({
  children,
  className,
  delay = 0,
  duration = 0.6,
  direction = "up",
}: FadeInWhenVisibleProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { threshold: 0.1 });

  const directionOffset = {
    up: { y: 40 },
    down: { y: -40 },
    left: { x: 40 },
    right: { x: -40 },
    none: {},
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...directionOffset[direction] }}
      animate={
        isInView
          ? { opacity: 1, y: 0, x: 0 }
          : { opacity: 0, ...directionOffset[direction] }
      }
      transition={{ duration, delay }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
