"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useReducedMotionSafe } from "@/components/motion/useReducedMotionSafe";

export const Scene02Identity: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotionSafe();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const opacity = useTransform(scrollYProgress, [0.1, 0.4, 0.7, 0.9], [0, 1, 1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[80vh] flex flex-col justify-center items-center px-4 py-20 border-b border-[var(--border-subtle)]"
    >
      <motion.div
        style={{
          y: prefersReducedMotion ? 0 : y,
          opacity: prefersReducedMotion ? 1 : opacity,
        }}
        className="relative z-10 max-w-4xl w-full text-center space-y-6"
      >
        <div className="mono-label text-xs tracking-widest text-[var(--accent)]">
          SYSTEM_PROFILE // SCENE_02
        </div>

        <div className="p-8 sm:p-12 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--surface-graphite)]/80 backdrop-blur-xs space-y-4">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[var(--text-primary)] font-heading tracking-tight">
            [AWAITING NAME]
          </h2>
          <div className="h-0.5 w-24 bg-[var(--accent)] mx-auto my-4 opacity-75" />
          <p className="mono-label text-sm sm:text-base text-[var(--text-secondary)] tracking-wider">
            [AWAITING PROFESSIONAL TITLE]
          </p>
        </div>
      </motion.div>
    </section>
  );
};
