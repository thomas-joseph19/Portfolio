"use client";

import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotionSafe } from "@/components/motion/useReducedMotionSafe";

gsap.registerPlugin(ScrollTrigger);

export const Scene05Transition: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const prefersReducedMotion = useReducedMotionSafe();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const explodedOffset = useTransform(scrollYProgress, [0.2, 0.7], [0, 80]);
  const rotation = useTransform(scrollYProgress, [0.2, 0.8], [0, 180]);
  const opacity = useTransform(scrollYProgress, [0.1, 0.4, 0.8, 1], [0, 1, 1, 0.2]);

  useEffect(() => {
    if (prefersReducedMotion || !sectionRef.current || !svgRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".exploded-part-1",
        { y: 0, x: 0, opacity: 1 },
        {
          y: -60,
          x: -40,
          opacity: 0.9,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top center",
            end: "bottom center",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        ".exploded-part-2",
        { y: 0, x: 0, opacity: 1 },
        {
          y: 60,
          x: 40,
          opacity: 0.9,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top center",
            end: "bottom center",
            scrub: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100vh] flex flex-col justify-center items-center px-4 py-24 border-b border-[var(--border-subtle)] bg-[var(--bg-primary)] overflow-hidden"
    >
      <div className="absolute top-12 left-1/2 -translate-x-1/2 text-center space-y-2 z-10">
        <div className="mono-label text-xs tracking-widest text-[var(--accent)]">
          TRANSITION // SCENE_05
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] font-heading">
          EXPLODED ASSEMBLY RECONFIGURATION
        </h2>
      </div>

      {/* Exploded Mechanical Assembly SVG Canvas */}
      <motion.div
        style={{ opacity: prefersReducedMotion ? 1 : opacity }}
        className="relative z-10 w-full max-w-4xl h-[450px] flex items-center justify-center pointer-events-none"
      >
        <svg
          ref={svgRef}
          className="w-full h-full"
          viewBox="0 0 800 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Exploded Guidelines / Projection Vector Lines */}
          <line x1="200" y1="100" x2="600" y2="400" stroke="var(--border-subtle)" strokeWidth="0.75" strokeDasharray="4 4" />
          <line x1="600" y1="100" x2="200" y2="400" stroke="var(--border-subtle)" strokeWidth="0.75" strokeDasharray="4 4" />
          <circle cx="400" cy="250" r="180" stroke="var(--border-subtle)" strokeWidth="0.5" />

          {/* Central Housing Plate */}
          <g className="exploded-main">
            <rect
              x="320"
              y="180"
              width="160"
              height="140"
              rx="4"
              stroke="var(--accent)"
              strokeWidth="1.5"
              fill="var(--surface-graphite)"
            />
            <circle cx="400" cy="250" r="40" stroke="var(--accent)" strokeWidth="1" strokeDasharray="8 4" />
          </g>

          {/* Upper Exploded Gear Component */}
          <g className="exploded-part-1">
            <motion.g style={{ rotate: prefersReducedMotion ? 0 : rotation, transformOrigin: "280px 140px" }}>
              <circle cx="280" cy="140" r="50" stroke="var(--text-secondary)" strokeWidth="1.5" fill="var(--bg-elevated)" />
              <circle cx="280" cy="140" r="20" stroke="var(--accent)" strokeWidth="1" />
              <path d="M 280 80 L 280 200 M 220 140 L 340 140" stroke="var(--border-subtle)" strokeWidth="0.75" />
            </motion.g>
          </g>

          {/* Lower Exploded Linkage Component */}
          <g className="exploded-part-2">
            <motion.g style={{ rotate: prefersReducedMotion ? 0 : rotation, transformOrigin: "520px 360px" }}>
              <circle cx="520" cy="360" r="55" stroke="var(--text-secondary)" strokeWidth="1.5" fill="var(--bg-elevated)" />
              <rect x="495" y="335" width="50" height="50" stroke="var(--accent)" strokeWidth="1" strokeDasharray="4 2" />
            </motion.g>
          </g>
        </svg>
      </motion.div>

      <div className="absolute bottom-10 text-center mono-label text-xs text-[var(--text-muted)] tracking-wider">
        RESOLVING SYSTEM MODULES...
      </div>
    </section>
  );
};
