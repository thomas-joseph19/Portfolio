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

  const opacity = useTransform(scrollYProgress, [0.1, 0.35, 0.7, 0.95], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0.1, 0.4, 0.8], [0.88, 1, 0.95]);
  const borderDash = useTransform(scrollYProgress, [0.15, 0.6], [0, 100]);

  return (
    <div ref={containerRef} className="relative h-[200vh] w-full bg-[var(--bg-primary)] border-t border-[var(--border-subtle)]">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center items-center px-4">
        {/* CAD Crosshair Grid background */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
          <svg className="w-full h-full" viewBox="0 0 800 600" fill="none" aria-hidden="true">
            <line x1="0" y1="300" x2="800" y2="300" stroke="var(--accent)" strokeWidth="0.5" strokeDasharray="4 4" />
            <line x1="400" y1="0" x2="400" y2="600" stroke="var(--accent)" strokeWidth="0.5" strokeDasharray="4 4" />
          </svg>
        </div>

        <motion.div
          style={{
            opacity: prefersReducedMotion ? 1 : opacity,
            scale: prefersReducedMotion ? 1 : scale,
          }}
          className="relative z-10 max-w-4xl w-full text-center space-y-6"
        >
          <div className="mono-label text-xs tracking-widest text-[var(--accent)]">
            SYSTEM_PROFILE // SCENE_02
          </div>

          <div className="relative p-8 sm:p-14 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--surface-graphite)]/90 backdrop-blur-md space-y-6 shadow-2xl overflow-hidden">
            {/* Tech HUD Corner Accents */}
            <div className="absolute top-2 left-2 text-[10px] font-mono text-[var(--text-muted)]">TL_01</div>
            <div className="absolute top-2 right-2 text-[10px] font-mono text-[var(--text-muted)]">TR_02</div>
            <div className="absolute bottom-2 left-2 text-[10px] font-mono text-[var(--text-muted)]">BL_03</div>
            <div className="absolute bottom-2 right-2 text-[10px] font-mono text-[var(--text-muted)]">BR_04</div>

            <h2 className="text-4xl sm:text-6xl font-extrabold text-[var(--text-primary)] font-heading tracking-tight">
              [AWAITING NAME]
            </h2>

            <div className="h-0.5 w-32 bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent mx-auto my-4" />

            <p className="mono-label text-sm sm:text-lg text-[var(--text-secondary)] tracking-wider">
              [AWAITING PROFESSIONAL TITLE]
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
