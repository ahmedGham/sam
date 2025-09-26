"use client";
import { motion } from "framer-motion";
import { Viewport } from "next/dist/lib/metadata/types/extra-types";
import { ReactNode } from "react";

export default function PopupInView({
  children,
  style,
  viewport = { once: true, amount: 0.3 },
}: {
  children: ReactNode;
  style?: string;
  viewport: Viewport;
}) {
  return (
    // <div className="h-[200vh] flex items-center justify-center">
    <motion.div
      className={`${style}`}
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={viewport}
      transition={{
        duration: 0.6,
        scale: { type: "spring", visualDuration: 0.9, bounce: 0.3 },
      }}
    >
      {children}
    </motion.div>
    // </div>
  );
}
