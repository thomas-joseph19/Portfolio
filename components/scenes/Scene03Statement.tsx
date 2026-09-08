"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useReducedMotionSafe } from "@/components/motion/useReducedMotionSafe";

export const Scene03Statement: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotionSafe();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0.1, 0.4, 0.7, 0.95], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0.2, 0.5], [0.95, 1]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[85vh] flex flex-col justify-center items-center px-4 py-24 border-b border-[var(--border-subtle)] bg-[var(--bg-elevated)]"
    >
      {/* Dynamic Linkage CAD Geometry Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
        <svg className="w-full h-full max-w-5xl" viewBox="0 0 800 400" fill="none" aria-hidden="true">
          <path d="M 100 200 Q 400 50 700 200" stroke="var(--accent)" strokeWidth="1" strokeDasharray="6 6" />
          <path d="M 100 200 Q 400 350 700 200" stroke="var(--border-subtle)" strokeWidth="1" />
          <circle cx="400" cy="200" r="120" stroke="var(--border-subtle)" strokeWidth="0.75" />
        </svg>
      </div>

      <motion.div
        style={{
          opacity: prefersReducedMotion ? 1 : opacity,
          scale: prefersReducedMotion ? 1 : scale,
        }}
        className="relative z-10 max-w-3xl w-full text-center space-y-8"
      >
        <div className="mono-label text-xs tracking-widest text-[var(--accent)]">
          PHILOSOPHY // SCENE_03
        </div>

        <blockquote className="text-xl sm:text-3xl font-light leading-relaxed text-[var(--text-primary)] border-l-2 border-[var(--accent)] pl-6 py-2 text-left sm:text-center sm:border-l-0 sm:pl-0">
          “[AWAITING ENGINEERING STATEMENT]”
        </blockquote>

        <div className="mono-label text-xs text-[var(--text-muted)] tracking-wider">
          CORE PHILOSOPHY & METHODOLOGY
        </div>
      </motion.div>
    </section>
  );
};
