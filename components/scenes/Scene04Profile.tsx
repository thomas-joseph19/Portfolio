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

  const opacity = useTransform(scrollYProgress, [0.1, 0.4, 0.7, 0.9], [0, 1, 1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[90vh] flex flex-col justify-center items-center px-4 py-24 border-b border-[var(--border-subtle)]"
    >
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
          {/* Primary Discipline */}
          <div className="p-6 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--surface-graphite)] space-y-2">
            <div className="mono-label text-[11px] text-[var(--text-muted)]">
              01 // PRIMARY DISCIPLINE
            </div>
            <div className="text-lg font-semibold text-[var(--text-primary)]">
              [AWAITING DISCIPLINE]
            </div>
          </div>

          {/* Secondary Discipline */}
          <div className="p-6 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--surface-graphite)] space-y-2">
            <div className="mono-label text-[11px] text-[var(--text-muted)]">
              02 // SECONDARY DISCIPLINE
            </div>
            <div className="text-lg font-semibold text-[var(--text-primary)]">
              [AWAITING SECONDARY DISCIPLINE]
            </div>
          </div>

          {/* Engineering Focus */}
          <div className="p-6 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--surface-graphite)] space-y-2 md:col-span-2">
            <div className="mono-label text-[11px] text-[var(--text-muted)]">
              03 // CORE ENGINEERING FOCUS
            </div>
            <div className="text-base text-[var(--text-secondary)] leading-relaxed">
              [AWAITING ENGINEERING FOCUS]
            </div>
          </div>

          {/* Technical Skills Interface */}
          <div className="p-6 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--surface-graphite)] space-y-4 md:col-span-2">
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
    </section>
  );
};
