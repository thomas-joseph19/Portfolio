"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useReducedMotionSafe } from "@/components/motion/useReducedMotionSafe";
import { ExplodedCad3DCanvas } from "./ExplodedCad3DCanvas";

export const Scene05Transition: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotionSafe();
  const [scrollVal, setScrollVal] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Track progress for R3F 3D Canvas
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (val) => {
      setScrollVal(val);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  const opacity = useTransform(scrollYProgress, [0.05, 0.2, 0.85, 0.98], [0, 1, 1, 0]);

  return (
    <div ref={containerRef} className="relative h-[400vh] w-full bg-[var(--bg-primary)] border-t border-[var(--border-subtle)]">
      {/* Sticky Pinned Viewport Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center items-center px-4">
        {/* Header HUD */}
        <div className="absolute top-8 text-center space-y-1.5 z-20 pointer-events-none">
          <div className="mono-label text-xs tracking-widest text-[var(--accent)]">
            3D_CAD_EXPLOSION // SCENE_05
          </div>
          <h2 className="text-xl sm:text-3xl font-extrabold text-[var(--text-primary)] font-heading tracking-tight">
            3D EXPLODED CAD MECHANICAL ASSEMBLY
          </h2>
          <div className="mono-label text-[11px] text-[var(--text-muted)]">
            CONTINUE SCROLLING TO DISASSEMBLE PLANETARY GEARING IN 3D
          </div>
        </div>

        {/* 3D WebGL Three.js Exploded CAD Canvas */}
        <motion.div
          style={{ opacity: prefersReducedMotion ? 1 : opacity }}
          className="relative z-10 w-full max-w-6xl h-[650px]"
        >
          <ExplodedCad3DCanvas progress={scrollVal} />
        </motion.div>

        {/* Footer Status Overlay */}
        <div className="absolute bottom-6 text-center mono-label text-xs text-[var(--text-muted)] tracking-wider pointer-events-none">
          3D DISASSEMBLY PROGRESS: {Math.round(scrollVal * 100)}% • ROTATE WITH MOUSE DRAG
        </div>
      </div>
    </div>
  );
};
