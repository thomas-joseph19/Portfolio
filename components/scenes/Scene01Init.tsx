"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useReducedMotionSafe } from "@/components/motion/useReducedMotionSafe";

export const Scene01Init: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotionSafe();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 0.92]);
  const rotateGear = useTransform(scrollYProgress, [0, 1], [0, 90]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[90vh] flex flex-col justify-center items-center px-4 overflow-hidden border-b border-[var(--border-subtle)]"
    >
      {/* Background CAD Coordinate Grid & Interlocking Mechanism SVG */}
      <motion.div
        style={{
          opacity: prefersReducedMotion ? 0.3 : opacity,
          scale: prefersReducedMotion ? 1 : scale,
        }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <svg
          className="w-[600px] h-[600px] text-[var(--border-subtle)] opacity-40"
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Outer Coordinate Grid Ring */}
          <circle cx="200" cy="200" r="180" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="200" cy="200" r="140" stroke="currentColor" strokeWidth="0.75" />
          <line x1="20" y1="200" x2="380" y2="200" stroke="currentColor" strokeWidth="0.5" />
          <line x1="200" y1="20" x2="200" y2="380" stroke="currentColor" strokeWidth="0.5" />

          {/* Interlocking Gear SVG driven by scroll rotation */}
          <motion.g
            style={{ rotate: prefersReducedMotion ? 0 : rotateGear, transformOrigin: "200px 200px" }}
          >
            <circle cx="200" cy="200" r="80" stroke="var(--accent)" strokeWidth="1.5" strokeDasharray="12 6" />
            <path
              d="M 200 110 L 200 90 M 200 290 L 200 310 M 110 200 L 90 200 M 290 200 L 310 200"
              stroke="var(--accent)"
              strokeWidth="2"
            />
          </motion.g>
        </svg>
      </motion.div>

      <div className="relative z-10 text-center space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[var(--radius-sm)] border border-[var(--border-accent)] bg-[var(--accent-dim)]">
          <span className="h-2 w-2 rounded-full bg-[var(--accent)] animate-ping" />
          <span className="mono-label text-xs font-semibold text-[var(--accent)]">
            [AWAITING INTRODUCTION LABEL]
          </span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-[var(--text-primary)] font-heading">
          ENGINEERED SYSTEMS & KINEMATICS
        </h1>

        <p className="mono-label text-xs sm:text-sm text-[var(--text-secondary)] tracking-widest pt-2">
          SCROLL TO INITIATE SYSTEM TRANSITION
        </p>
      </div>

      {/* Downward Scroll Indicator */}
      <div className="absolute bottom-8 flex flex-col items-center gap-2 text-[var(--text-muted)] font-mono text-[11px]">
        <span>SCROLL_01 // INIT</span>
        <div className="w-0.5 h-8 bg-gradient-to-b from-[var(--accent)] to-transparent animate-pulse" />
      </div>
    </section>
  );
};
