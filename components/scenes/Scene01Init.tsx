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

  // Scroll Transforms (0.0 -> 1.0)
  const gearRotationCW = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const gearRotationCCW = useTransform(scrollYProgress, [0, 1], [0, -540]); // 1.5 ratio
  const gridScale = useTransform(scrollYProgress, [0, 1], [1, 1.8]);
  const reticleRadius = useTransform(scrollYProgress, [0, 0.7], [80, 190]);
  const opacity = useTransform(scrollYProgress, [0, 0.75, 1], [1, 1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.8], [0, -80]);

  return (
    <div ref={containerRef} className="relative h-[220vh] w-full bg-[var(--bg-primary)]">
      {/* Sticky Viewport Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center items-center px-4">
        {/* Background Mechanical Gear Train SVG */}
        <motion.div
          style={{
            opacity: prefersReducedMotion ? 0.3 : opacity,
            scale: prefersReducedMotion ? 1 : gridScale,
          }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <svg
            className="w-[700px] h-[700px] text-[var(--border-subtle)]"
            viewBox="0 0 500 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            {/* Coordinate Grid Background */}
            <pattern id="s1-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" stroke="var(--border-subtle)" strokeWidth="0.5" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#s1-grid)" opacity="0.3" />

            {/* Dynamic Reticle Ring */}
            <motion.circle
              cx="250"
              cy="250"
              r={prefersReducedMotion ? 120 : reticleRadius}
              stroke="var(--accent)"
              strokeWidth="1"
              strokeDasharray="6 6"
            />

            {/* Main Driver Gear (Clockwise) */}
            <motion.g
              style={{
                rotate: prefersReducedMotion ? 0 : gearRotationCW,
                transformOrigin: "250px 250px",
              }}
            >
              <circle cx="250" cy="250" r="140" stroke="var(--border-subtle)" strokeWidth="1.5" />
              {/* Gear Teeth Pins */}
              {Array.from({ length: 16 }).map((_, i) => {
                const angle = (i * 360) / 16;
                const rad = (angle * Math.PI) / 180;
                const x1 = 250 + 135 * Math.cos(rad);
                const y1 = 250 + 135 * Math.sin(rad);
                const x2 = 250 + 152 * Math.cos(rad);
                const y2 = 250 + 152 * Math.sin(rad);
                return (
                  <line
                    key={i}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="var(--accent)"
                    strokeWidth="3"
                  />
                );
              })}
            </motion.g>

            {/* Interlocking Pinion Gear (Counter-Clockwise at (370, 250)) */}
            <motion.g
              style={{
                rotate: prefersReducedMotion ? 0 : gearRotationCCW,
                transformOrigin: "370px 250px",
              }}
            >
              <circle cx="370" cy="250" r="60" stroke="var(--accent)" strokeWidth="1.5" strokeDasharray="4 2" />
              {Array.from({ length: 8 }).map((_, i) => {
                const angle = (i * 360) / 8;
                const rad = (angle * Math.PI) / 180;
                const x1 = 370 + 55 * Math.cos(rad);
                const y1 = 370 + 55 * Math.sin(rad);
                const x2 = 370 + 68 * Math.cos(rad);
                const y2 = 370 + 68 * Math.sin(rad);
                return (
                  <line
                    key={i}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="var(--text-secondary)"
                    strokeWidth="3"
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
            y: prefersReducedMotion ? 0 : textY,
          }}
          className="relative z-10 text-center space-y-6 max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[var(--radius-sm)] border border-[var(--border-accent)] bg-[var(--accent-dim)]">
            <span className="h-2 w-2 rounded-full bg-[var(--accent)] animate-ping" />
            <span className="mono-label text-xs font-semibold text-[var(--accent)] tracking-wider">
              [AWAITING INTRODUCTION LABEL]
            </span>
          </div>

          <h1 className="text-4xl sm:text-7xl font-extrabold tracking-tight text-[var(--text-primary)] font-heading leading-none">
            ENGINEERED SYSTEMS & KINEMATICS
          </h1>

          <p className="mono-label text-xs sm:text-sm text-[var(--text-secondary)] tracking-widest pt-2">
            SCROLL TO DRIVE MECHANICAL TRANSITIONS
          </p>

          <div className="pt-8 flex justify-center">
            <div className="flex flex-col items-center gap-2 text-[var(--text-muted)] font-mono text-[11px]">
              <span>SYSTEM_STATE // PUSH SCROLL TO ROTATE GEAR TRAIN</span>
              <div className="w-0.5 h-12 bg-gradient-to-b from-[var(--accent)] to-transparent animate-bounce" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
