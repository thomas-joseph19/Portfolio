"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useReducedMotionSafe } from "@/components/motion/useReducedMotionSafe";
import { Button } from "@/components/ui/Button";

export const Scene07Continuation: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotionSafe();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0.1, 0.3, 0.9], [0, 1, 1]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[70vh] flex flex-col justify-center items-center px-4 py-24 bg-[var(--bg-primary)]"
    >
      <motion.div
        style={{ opacity: prefersReducedMotion ? 1 : opacity }}
        className="mx-auto max-w-4xl w-full text-center space-y-8"
      >
        <div className="mono-label text-xs tracking-widest text-[var(--accent)]">
          NAVIGATION // SCENE_07
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] font-heading tracking-tight">
          EXPLORE THE SYSTEM ARCHITECTURE
        </h2>

        <p className="text-sm text-[var(--text-secondary)] max-w-xl mx-auto leading-relaxed">
          ACCESS DETAILED PROJECT CASE STUDIES, REVIEW THE FULL TECHNICAL RESUME, OR INITIATE DIRECT DIRECT CONTACT.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Button href="/projects" variant="primary" size="lg">
            EXPLORE PROJECT ARCHIVE
          </Button>
          <Button href="/resume" variant="secondary" size="lg">
            VIEW RESUME
          </Button>
          <Button href="/contact" variant="outline" size="lg">
            CONTACT
          </Button>
        </div>
      </motion.div>
    </section>
  );
};
