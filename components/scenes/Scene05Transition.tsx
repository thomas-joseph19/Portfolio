"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useReducedMotionSafe } from "@/components/motion/useReducedMotionSafe";

export const Scene05Transition: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotionSafe();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Multi-stage Explosive Mechanical Transforms
  const assemblyRotateZ = useTransform(scrollYProgress, [0, 0.7], [0, 180]);
  const assemblyScale = useTransform(scrollYProgress, [0, 0.5, 0.9], [0.9, 1.2, 0.85]);
  const opacity = useTransform(scrollYProgress, [0.05, 0.2, 0.85, 0.98], [0, 1, 1, 0]);

  // Exploded Components Separation Distances
  const topPartY = useTransform(scrollYProgress, [0.2, 0.7], [0, -120]);
  const bottomPartY = useTransform(scrollYProgress, [0.2, 0.7], [0, 120]);
  const leftPartX = useTransform(scrollYProgress, [0.2, 0.7], [0, -130]);
  const rightPartX = useTransform(scrollYProgress, [0.2, 0.7], [0, 130]);
  const vectorDash = useTransform(scrollYProgress, [0.3, 0.8], [200, 0]);

  return (
    <div ref={containerRef} className="relative h-[300vh] w-full bg-[var(--bg-primary)] border-t border-[var(--border-subtle)]">
      {/* Sticky Pinned Viewport Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center items-center px-4">
        {/* Header HUD */}
        <div className="absolute top-10 text-center space-y-2 z-20">
          <div className="mono-label text-xs tracking-widest text-[var(--accent)]">
            TRANSITION // SCENE_05
          </div>
          <h2 className="text-xl sm:text-3xl font-extrabold text-[var(--text-primary)] font-heading tracking-tight">
            EXPLODED ASSEMBLY RECONFIGURATION
          </h2>
          <div className="mono-label text-[11px] text-[var(--text-muted)]">
            KEEP SCROLLING TO DISASSEMBLE CAD MODULE
          </div>
        </div>

        {/* Exploded CAD Assembly SVG Canvas */}
        <motion.div
          style={{
            opacity: prefersReducedMotion ? 1 : opacity,
            scale: prefersReducedMotion ? 1 : assemblyScale,
          }}
          className="relative z-10 w-full max-w-5xl h-[550px] flex items-center justify-center pointer-events-none"
        >
          <svg className="w-full h-full" viewBox="0 0 900 600" fill="none" aria-hidden="true">
            {/* Vector Projection Guidelines */}
            <motion.g style={{ strokeDashoffset: prefersReducedMotion ? 0 : vectorDash }}>
              <line x1="450" y1="300" x2="450" y2="100" stroke="var(--accent)" strokeWidth="1" strokeDasharray="6 4" />
              <line x1="450" y1="300" x2="450" y2="500" stroke="var(--accent)" strokeWidth="1" strokeDasharray="6 4" />
              <line x1="450" y1="300" x2="200" y2="300" stroke="var(--accent)" strokeWidth="1" strokeDasharray="6 4" />
              <line x1="450" y1="300" x2="700" y2="300" stroke="var(--accent)" strokeWidth="1" strokeDasharray="6 4" />
            </motion.g>

            {/* Rotating Core Group */}
            <motion.g
              style={{
                rotate: prefersReducedMotion ? 0 : assemblyRotateZ,
                transformOrigin: "450px 300px",
              }}
            >
              {/* Central Fixed Core */}
              <rect
                x="380"
                y="240"
                width="140"
                height="120"
                rx="6"
                stroke="var(--accent)"
                strokeWidth="2"
                fill="var(--surface-graphite)"
              />
              <circle cx="450" cy="300" r="35" stroke="var(--accent)" strokeWidth="1.5" strokeDasharray="8 4" />

              {/* Top Exploded Plate (Moves UP -Y) */}
              <motion.g style={{ y: prefersReducedMotion ? 0 : topPartY }}>
                <polygon
                  points="390,160 510,160 540,210 360,210"
                  stroke="var(--text-primary)"
                  strokeWidth="2"
                  fill="var(--bg-elevated)"
                />
                <circle cx="450" cy="185" r="15" stroke="var(--accent)" strokeWidth="1" />
              </motion.g>

              {/* Bottom Exploded Base (Moves DOWN +Y) */}
              <motion.g style={{ y: prefersReducedMotion ? 0 : bottomPartY }}>
                <rect
                  x="350"
                  y="390"
                  width="200"
                  height="40"
                  rx="4"
                  stroke="var(--text-primary)"
                  strokeWidth="2"
                  fill="var(--bg-elevated)"
                />
                <circle cx="400" cy="410" r="8" fill="var(--accent)" />
                <circle cx="500" cy="410" r="8" fill="var(--accent)" />
              </motion.g>

              {/* Left Exploded Pinion (Moves LEFT -X) */}
              <motion.g style={{ x: prefersReducedMotion ? 0 : leftPartX }}>
                <circle cx="280" cy="300" r="45" stroke="var(--text-secondary)" strokeWidth="2" fill="var(--bg-elevated)" />
                <circle cx="280" cy="300" r="18" stroke="var(--accent)" strokeWidth="1.5" />
              </motion.g>

              {/* Right Exploded Actuator (Moves RIGHT +X) */}
              <motion.g style={{ x: prefersReducedMotion ? 0 : rightPartX }}>
                <rect x="580" y="270" width="70" height="60" rx="4" stroke="var(--text-secondary)" strokeWidth="2" fill="var(--bg-elevated)" />
                <line x1="580" y1="300" x2="650" y2="300" stroke="var(--accent)" strokeWidth="2" />
              </motion.g>
            </motion.g>
          </svg>
        </motion.div>

        {/* Footer Status Overlay */}
        <div className="absolute bottom-10 text-center mono-label text-xs text-[var(--text-muted)] tracking-wider">
          ASSEMBLY STATUS: DECONSTRUCTING INTO MODULES...
        </div>
      </div>
    </div>
  );
};
