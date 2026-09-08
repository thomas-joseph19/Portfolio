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

  // Fast-reacting scroll transforms (0.0 -> 1.0)
  const gearRotationCW = useTransform(scrollYProgress, [0, 1], [0, 720]); // 2 full spins
  const gearRotationCCW = useTransform(scrollYProgress, [0, 1], [0, -1080]); // 3 full spins
  const gearScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.4, 2.2]);
  const reticleRadius = useTransform(scrollYProgress, [0, 0.8], [90, 260]);
  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0]);
  const titleY = useTransform(scrollYProgress, [0, 0.8], [0, -120]);

  return (
    <div ref={containerRef} className="relative h-[250vh] w-full bg-[var(--bg-primary)]">
      {/* Sticky Viewport Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center items-center px-4">
        {/* Background Interlocking Spur Gear Train */}
        <motion.div
          style={{
            opacity: prefersReducedMotion ? 0.3 : opacity,
            scale: prefersReducedMotion ? 1 : gearScale,
          }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <svg
            className="w-[800px] h-[800px] text-[var(--accent)] opacity-50"
            viewBox="0 0 600 600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            {/* Background Grid */}
            <pattern id="s1-grid-large" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" stroke="var(--border-subtle)" strokeWidth="0.75" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#s1-grid-large)" opacity="0.4" />

            {/* Dynamic Expanding Crosshair Circle */}
            <motion.circle
              cx="300"
              cy="300"
              r={prefersReducedMotion ? 140 : reticleRadius}
              stroke="var(--accent)"
              strokeWidth="1.5"
              strokeDasharray="8 6"
            />

            {/* Driver Gear (Clockwise) */}
            <motion.g
              style={{
                rotate: prefersReducedMotion ? 0 : gearRotationCW,
                transformOrigin: "300px 300px",
              }}
            >
              <circle cx="300" cy="300" r="160" stroke="var(--accent)" strokeWidth="2" />
              <circle cx="300" cy="300" r="40" stroke="var(--accent)" strokeWidth="1.5" fill="var(--bg-primary)" />
              {Array.from({ length: 24 }).map((_, i) => {
                const angle = (i * 360) / 24;
                const rad = (angle * Math.PI) / 180;
                const x1 = 300 + 155 * Math.cos(rad);
                const y1 = 300 + 155 * Math.sin(rad);
                const x2 = 300 + 175 * Math.cos(rad);
                const y2 = 300 + 175 * Math.sin(rad);
                return (
                  <line
                    key={i}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="var(--accent)"
                    strokeWidth="4"
                  />
                );
              })}
            </motion.g>

            {/* Driven Pinion Gear (Counter-Clockwise) */}
            <motion.g
              style={{
                rotate: prefersReducedMotion ? 0 : gearRotationCCW,
                transformOrigin: "440px 300px",
              }}
            >
              <circle cx="440" cy="300" r="70" stroke="var(--text-primary)" strokeWidth="2" fill="var(--surface-graphite)" />
              {Array.from({ length: 12 }).map((_, i) => {
                const angle = (i * 360) / 12;
                const rad = (angle * Math.PI) / 180;
                const x1 = 440 + 65 * Math.cos(rad);
                const y1 = 440 + 65 * Math.sin(rad);
                const x2 = 440 + 80 * Math.cos(rad);
                const y2 = 440 + 80 * Math.sin(rad);
                return (
                  <line
                    key={i}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="var(--text-primary)"
                    strokeWidth="3.5"
                  />
                );
              })}
            </motion.g>
          </svg>
        </motion.div>

        {/* Foreground Content */}
        <motion.div
          style={{
            opacity: prefersReducedMotion ? 1 : opacity,
            y: prefersReducedMotion ? 0 : titleY,
          }}
          className="relative z-10 text-center space-y-6 max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[var(--radius-sm)] border border-[var(--border-accent)] bg-[var(--accent-dim)] shadow-lg">
            <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent)] animate-ping" />
            <span className="mono-label text-xs font-semibold text-[var(--accent)] tracking-wider">
              [AWAITING INTRODUCTION LABEL]
            </span>
          </div>

          <h1 className="text-4xl sm:text-7xl font-extrabold tracking-tight text-[var(--text-primary)] font-heading leading-none">
            ENGINEERED SYSTEMS & KINEMATICS
          </h1>

          <p className="mono-label text-xs sm:text-sm text-[var(--text-secondary)] tracking-widest pt-2">
            SCROLL DOWN TO DRIVE MECHANICAL TRANSITIONS
          </p>

          <div className="pt-8 flex justify-center">
            <div className="flex flex-col items-center gap-2 text-[var(--accent)] font-mono text-[11px]">
              <span className="animate-pulse">SCROLL_01 // SPINNING GEAR TRAIN</span>
              <div className="w-0.5 h-12 bg-gradient-to-b from-[var(--accent)] to-transparent animate-bounce" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
