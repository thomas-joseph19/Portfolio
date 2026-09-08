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

  const opacity = useTransform(scrollYProgress, [0.1, 0.3, 0.75, 0.95], [0, 1, 1, 0]);
  const linkAngle = useTransform(scrollYProgress, [0.1, 0.8], [-30, 45]);
  const scale = useTransform(scrollYProgress, [0.15, 0.5, 0.85], [0.9, 1, 0.95]);

  return (
    <div ref={containerRef} className="relative h-[200vh] w-full bg-[var(--bg-elevated)] border-t border-[var(--border-subtle)]">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center items-center px-4">
        {/* Dynamic Four-Bar Linkage SVG Mechanics */}
        <motion.div
          style={{ opacity: prefersReducedMotion ? 0.2 : 0.35 }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <svg className="w-[800px] h-[500px]" viewBox="0 0 800 500" fill="none" aria-hidden="true">
            {/* Ground Link */}
            <line x1="200" y1="350" x2="600" y2="350" stroke="var(--border-subtle)" strokeWidth="3" />
            <circle cx="200" cy="350" r="8" fill="var(--accent)" />
            <circle cx="600" cy="350" r="8" fill="var(--accent)" />

            {/* Input Crank Linkage articulating with scroll */}
            <motion.g
              style={{
                rotate: prefersReducedMotion ? 0 : linkAngle,
                transformOrigin: "200px 350px",
              }}
            >
              <line x1="200" y1="350" x2="200" y2="200" stroke="var(--accent)" strokeWidth="4" />
              <circle cx="200" cy="200" r="6" fill="var(--text-primary)" />
            </motion.g>

            {/* Output Coupler Vector */}
            <line x1="200" y1="200" x2="600" y2="250" stroke="var(--border-subtle)" strokeWidth="2" strokeDasharray="6 4" />
          </svg>
        </motion.div>

        <motion.div
          style={{
            opacity: prefersReducedMotion ? 1 : opacity,
            scale: prefersReducedMotion ? 1 : scale,
          }}
          className="relative z-10 max-w-4xl w-full text-center space-y-8"
        >
          <div className="mono-label text-xs tracking-widest text-[var(--accent)]">
            PHILOSOPHY // SCENE_03
          </div>

          <blockquote className="text-2xl sm:text-4xl font-light leading-relaxed text-[var(--text-primary)] border-l-4 border-[var(--accent)] pl-6 text-left sm:text-center sm:border-l-0 sm:pl-0 font-heading">
            “[AWAITING ENGINEERING STATEMENT]”
          </blockquote>

          <div className="mono-label text-xs text-[var(--text-muted)] tracking-wider">
            CORE PHILOSOPHY & KINEMATICS
          </div>
        </motion.div>
      </div>
    </div>
  );
};
