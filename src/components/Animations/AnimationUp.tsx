"use client";
import { Easing, motion, Transition } from "motion/react";
// import { ViewportOptions } from "next/dist/lib/metadata/types/metadata-interface";
import { Viewport } from "next/dist/lib/metadata/types/metadata-interface";
import React from "react";

const AnimationUp = ({
  children,
  className,
  duration = 0.5,
  ease = "easeOut",
  viewport = { once: true, amount: 0.3 },
  transition = {},
  animation = true,
}: {
  children: React.ReactNode;
  className?: string;
  duration?: number;
  ease?: Easing;
  viewport?: Viewport;
  transition?: Transition;
  animation?: boolean;
}) => {
  if (!animation) {
    return <div className={className}>{children}</div>;
  }
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={viewport}
      transition={{ duration: 0.5, ease: "easeOut", ...transition }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimationUp;
