"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useReducedMotionSafe } from "@/components/motion/useReducedMotionSafe";
import { TagPill } from "@/components/ui/TagPill";

export const Scene04Profile: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotionSafe();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0.1, 0.3, 0.75, 0.95], [0, 1, 1, 0]);
  const slideLeft = useTransform(scrollYProgress, [0.15, 0.45], [-120, 0]);
  const slideRight = useTransform(scrollYProgress, [0.15, 0.45], [120, 0]);

  return (
    <div ref={containerRef} className="relative h-[220vh] w-full bg-[var(--bg-primary)] border-t border-[var(--border-subtle)]">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center items-center px-4">
        <motion.div
          style={{
            opacity: prefersReducedMotion ? 1 : opacity,
          }}
          className="relative z-10 max-w-4xl w-full space-y-8"
        >
          <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-4">
            <div className="mono-label text-xs tracking-widest text-[var(--accent)]">
              SYSTEM_PROFILE // SCENE_04
            </div>
            <div className="mono-label text-xs text-[var(--text-muted)]">
              SPECIFICATION: VER_1.0
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Primary Discipline - Slides from Left */}
            <motion.div
              style={{ x: prefersReducedMotion ? 0 : slideLeft }}
              className="p-6 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--surface-graphite)] space-y-2 shadow-lg"
            >
              <div className="mono-label text-[11px] text-[var(--text-muted)]">
                01 // PRIMARY DISCIPLINE
              </div>
              <div className="text-xl font-bold text-[var(--text-primary)] font-heading">
                [AWAITING DISCIPLINE]
              </div>
            </motion.div>

            {/* Secondary Discipline - Slides from Right */}
            <motion.div
              style={{ x: prefersReducedMotion ? 0 : slideRight }}
              className="p-6 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--surface-graphite)] space-y-2 shadow-lg"
            >
              <div className="mono-label text-[11px] text-[var(--text-muted)]">
                02 // SECONDARY DISCIPLINE
              </div>
              <div className="text-xl font-bold text-[var(--text-primary)] font-heading">
                [AWAITING SECONDARY DISCIPLINE]
              </div>
            </motion.div>

            {/* Engineering Focus */}
            <div className="p-6 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--surface-graphite)] space-y-2 md:col-span-2 shadow-lg">
              <div className="mono-label text-[11px] text-[var(--text-muted)]">
                03 // CORE ENGINEERING FOCUS
              </div>
              <div className="text-base text-[var(--text-secondary)] leading-relaxed font-mono">
                [AWAITING ENGINEERING FOCUS]
              </div>
            </div>

            {/* Technical Skills Interface */}
            <div className="p-6 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--surface-graphite)] space-y-4 md:col-span-2 shadow-lg">
              <div className="mono-label text-[11px] text-[var(--text-muted)]">
                04 // TECHNICAL SKILLS & CAPABILITIES
              </div>
              <div className="flex flex-wrap gap-2">
                <TagPill label="[AWAITING SKILLS]" variant="accent" size="md" />
                <TagPill label="CAD Modeling" variant="default" size="md" />
                <TagPill label="FEA Stress Analysis" variant="default" size="md" />
                <TagPill label="Kinematics" variant="default" size="md" />
                <TagPill label="Prototyping" variant="default" size="md" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
