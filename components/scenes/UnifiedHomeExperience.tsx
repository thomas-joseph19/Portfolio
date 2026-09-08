"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useReducedMotionSafe } from "@/components/motion/useReducedMotionSafe";
import { ContinuousEngine3DCanvas } from "./ContinuousEngine3DCanvas";
import { getFeaturedProjects } from "@/lib/content";
import { MediaPlaceholder } from "@/components/media/MediaPlaceholder";
import { TagPill } from "@/components/ui/TagPill";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { Button } from "@/components/ui/Button";

export const UnifiedHomeExperience: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotionSafe();
  const featuredProjects = getFeaturedProjects();
  const [scrollVal, setScrollVal] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (val) => {
      setScrollVal(val);
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  // Stage 1: Identity & Hero (0.0 -> 0.2)
  const opacityStage1 = useTransform(scrollYProgress, [0.0, 0.15, 0.22], [1, 1, 0]);
  const yStage1 = useTransform(scrollYProgress, [0.0, 0.2], [0, -80]);

  // Stage 2: Engineering Philosophy Statement (0.22 -> 0.42)
  const opacityStage2 = useTransform(scrollYProgress, [0.22, 0.28, 0.38, 0.44], [0, 1, 1, 0]);
  const scaleStage2 = useTransform(scrollYProgress, [0.24, 0.35, 0.44], [0.92, 1, 0.95]);

  // Stage 3: Engineering Profile & Skills (0.44 -> 0.65)
  const opacityStage3 = useTransform(scrollYProgress, [0.44, 0.5, 0.6, 0.67], [0, 1, 1, 0]);
  const slideLeftStage3 = useTransform(scrollYProgress, [0.44, 0.52], [-100, 0]);
  const slideRightStage3 = useTransform(scrollYProgress, [0.44, 0.52], [100, 0]);

  // Stage 4: Featured Projects (0.67 -> 0.88)
  const opacityStage4 = useTransform(scrollYProgress, [0.67, 0.72, 0.83, 0.89], [0, 1, 1, 0]);
  const yStage4 = useTransform(scrollYProgress, [0.67, 0.74], [60, 0]);

  // Stage 5: Continuation Pathways (0.89 -> 1.0)
  const opacityStage5 = useTransform(scrollYProgress, [0.89, 0.93, 1.0], [0, 1, 1]);

  return (
    <div ref={containerRef} className="relative h-[600vh] w-full bg-[var(--bg-primary)]">
      {/* Persistent 3D Master Canvas Fixed in Background */}
      <div className="fixed inset-0 z-0 w-full h-full">
        <ContinuousEngine3DCanvas progress={scrollVal} />
      </div>

      {/* Persistent Scroll Progress Tech Indicator Bar */}
      <div className="fixed bottom-6 left-6 z-30 flex items-center gap-3 font-mono text-[11px] text-[var(--accent)] bg-[var(--bg-primary)]/80 px-3 py-1.5 rounded-[var(--radius-sm)] border border-[var(--border-accent)] backdrop-blur-md">
        <span className="h-2 w-2 rounded-full bg-[var(--accent)] animate-ping" />
        <span>SYSTEM_TRANSITION: {Math.round(scrollVal * 100)}%</span>
      </div>

      {/* OVERLAID SEAMLESS STAGE CONTENT PANELS */}
      <div className="sticky top-0 h-screen w-full overflow-hidden z-10 pointer-events-none flex flex-col justify-center items-center px-4">
        {/* STAGE 1: IDENTITY & HERO ([AWAITING NAME] FIRST) */}
        <motion.div
          style={{
            opacity: prefersReducedMotion ? 1 : opacityStage1,
            y: prefersReducedMotion ? 0 : yStage1,
            display: scrollVal > 0.24 ? "none" : "block",
          }}
          className="relative z-10 text-center space-y-6 max-w-4xl px-4 pointer-events-auto"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[var(--radius-sm)] border border-[var(--border-accent)] bg-[var(--accent-dim)] shadow-xl">
            <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent)] animate-ping" />
            <span className="mono-label text-xs font-semibold text-[var(--accent)] tracking-wider">
              [AWAITING INTRODUCTION LABEL]
            </span>
          </div>

          <div className="relative p-8 sm:p-14 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--surface-graphite)]/90 backdrop-blur-md space-y-4 shadow-2xl overflow-hidden">
            <div className="mono-label text-xs tracking-widest text-[var(--accent)]">
              SYSTEM_PROFILE // HERO_01
            </div>

            {/* NAME PLACEHOLDER FIRST */}
            <h1 className="text-4xl sm:text-7xl font-extrabold text-[var(--text-primary)] font-heading tracking-tight">
              [AWAITING NAME]
            </h1>

            <div className="h-0.5 w-36 bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent mx-auto my-4" />

            <p className="mono-label text-base sm:text-xl text-[var(--text-secondary)] tracking-wider">
              [AWAITING PROFESSIONAL TITLE]
            </p>
          </div>

          <div className="pt-4 flex justify-center">
            <div className="flex flex-col items-center gap-2 text-[var(--accent)] font-mono text-[11px]">
              <span className="animate-pulse">SCROLL DOWN TO DRIVE CONTINUOUS 3D CAD SYSTEM TRANSITION</span>
              <div className="w-0.5 h-12 bg-gradient-to-b from-[var(--accent)] to-transparent animate-bounce" />
            </div>
          </div>
        </motion.div>

        {/* STAGE 2: ENGINEERING PHILOSOPHY STATEMENT */}
        <motion.div
          style={{
            opacity: prefersReducedMotion ? 1 : opacityStage2,
            scale: prefersReducedMotion ? 1 : scaleStage2,
            display: scrollVal < 0.2 || scrollVal > 0.45 ? "none" : "block",
          }}
          className="relative z-10 max-w-4xl w-full text-center space-y-8 pointer-events-auto"
        >
          <div className="mono-label text-xs tracking-widest text-[var(--accent)]">
            PHILOSOPHY // STAGE_02
          </div>

          <blockquote className="text-2xl sm:text-4xl font-light leading-relaxed text-[var(--text-primary)] border-l-4 border-[var(--accent)] pl-6 text-left sm:text-center sm:border-l-0 sm:pl-0 font-heading bg-[var(--surface-graphite)]/85 p-8 rounded-[var(--radius-md)] border border-[var(--border-subtle)] backdrop-blur-md shadow-2xl">
            “[AWAITING ENGINEERING STATEMENT]”
          </blockquote>

          <div className="mono-label text-xs text-[var(--text-muted)] tracking-wider">
            CONTINUOUS 3D KINEMATICS
          </div>
        </motion.div>

        {/* STAGE 3: ENGINEERING PROFILE & SKILLS */}
        <motion.div
          style={{
            opacity: prefersReducedMotion ? 1 : opacityStage3,
            display: scrollVal < 0.42 || scrollVal > 0.68 ? "none" : "block",
          }}
          className="relative z-10 max-w-4xl w-full space-y-8 pointer-events-auto"
        >
          <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-4 bg-[var(--bg-primary)]/80 p-3 rounded-[var(--radius-sm)] backdrop-blur-xs">
            <div className="mono-label text-xs tracking-widest text-[var(--accent)]">
              SYSTEM_PROFILE // STAGE_03
            </div>
            <div className="mono-label text-xs text-[var(--text-muted)]">
              SPECIFICATION: VER_1.0
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              style={{ x: prefersReducedMotion ? 0 : slideLeftStage3 }}
              className="p-6 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--surface-graphite)]/90 backdrop-blur-md space-y-2 shadow-2xl"
            >
              <div className="mono-label text-[11px] text-[var(--text-muted)]">
                01 // PRIMARY DISCIPLINE
              </div>
              <div className="text-xl font-bold text-[var(--text-primary)] font-heading">
                [AWAITING DISCIPLINE]
              </div>
            </motion.div>

            <motion.div
              style={{ x: prefersReducedMotion ? 0 : slideRightStage3 }}
              className="p-6 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--surface-graphite)]/90 backdrop-blur-md space-y-2 shadow-2xl"
            >
              <div className="mono-label text-[11px] text-[var(--text-muted)]">
                02 // SECONDARY DISCIPLINE
              </div>
              <div className="text-xl font-bold text-[var(--text-primary)] font-heading">
                [AWAITING SECONDARY DISCIPLINE]
              </div>
            </motion.div>

            <div className="p-6 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--surface-graphite)]/90 backdrop-blur-md space-y-2 md:col-span-2 shadow-2xl">
              <div className="mono-label text-[11px] text-[var(--text-muted)]">
                03 // CORE ENGINEERING FOCUS
              </div>
              <div className="text-base text-[var(--text-secondary)] leading-relaxed font-mono">
                [AWAITING ENGINEERING FOCUS]
              </div>
            </div>

            <div className="p-6 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--surface-graphite)]/90 backdrop-blur-md space-y-4 md:col-span-2 shadow-2xl">
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

        {/* STAGE 4: FEATURED ENGINEERING PROJECTS */}
        <motion.div
          style={{
            opacity: prefersReducedMotion ? 1 : opacityStage4,
            y: prefersReducedMotion ? 0 : yStage4,
            display: scrollVal < 0.66 || scrollVal > 0.9 ? "none" : "block",
          }}
          className="mx-auto max-w-7xl w-full space-y-8 pointer-events-auto"
        >
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[var(--border-subtle)] pb-4 bg-[var(--bg-primary)]/80 p-4 rounded-[var(--radius-sm)] backdrop-blur-xs">
            <div className="space-y-1">
              <div className="mono-label text-xs tracking-widest text-[var(--accent)]">
                FEATURED_MODULES // STAGE_04
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[var(--text-primary)] font-heading tracking-tight">
                FEATURED ENGINEERING PROJECTS
              </h2>
            </div>
            <Button href="/projects" variant="outline" size="sm">
              VIEW ALL PROJECTS ARCHIVE →
            </Button>
          </div>

          {featuredProjects.length === 0 ? (
            <div className="p-12 text-center border border-[var(--border-subtle)] rounded-[var(--radius-md)] bg-[var(--surface-graphite)]/90 backdrop-blur-md space-y-3">
              <div className="mono-label text-xs text-[var(--accent)]">[NO FEATURED PROJECTS FOUND]</div>
              <p className="text-sm text-[var(--text-secondary)]">
                ADD A PROJECT FILE TO /content/projects/ WITH featured: true TO DISPLAY HERE.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProjects.map((project) => (
                <div
                  key={project.slug}
                  className="group flex flex-col rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--surface-graphite)]/90 backdrop-blur-md overflow-hidden transition-all duration-300 hover:border-[var(--accent)] hover:shadow-2xl"
                >
                  <div className="relative">
                    <MediaPlaceholder item={project.thumbnail} />
                    <div className="absolute top-3 right-3 z-10">
                      <StatusBadge status={project.status} />
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors font-heading">
                        <Link href={`/projects/${project.slug}`} className="focus-ring p-0.5 rounded-[var(--radius-sm)]">
                          {project.title || "[AWAITING PROJECT TITLE]"}
                        </Link>
                      </h3>
                      <p className="text-xs text-[var(--text-secondary)] line-clamp-3 leading-relaxed">
                        {project.shortDescription || "[AWAITING PROJECT DESCRIPTION]"}
                      </p>
                    </div>

                    <div className="space-y-4 pt-2 border-t border-[var(--border-subtle)]">
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((tag) => (
                          <TagPill key={tag} label={tag} variant="default" size="sm" />
                        ))}
                      </div>

                      <Link
                        href={`/projects/${project.slug}`}
                        className="inline-flex items-center text-xs font-mono font-medium text-[var(--accent)] hover:underline focus-ring p-0.5 rounded-[var(--radius-sm)]"
                      >
                        SPECIFICATION DETAILS & CAD →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </motion.div>

        {/* STAGE 5: NAVIGATION PATHWAYS & CONTINUATION */}
        <motion.div
          style={{
            opacity: prefersReducedMotion ? 1 : opacityStage5,
            display: scrollVal < 0.88 ? "none" : "block",
          }}
          className="mx-auto max-w-4xl w-full text-center space-y-8 pointer-events-auto"
        >
          <div className="mono-label text-xs tracking-widest text-[var(--accent)]">
            NAVIGATION // STAGE_05
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[var(--text-primary)] font-heading tracking-tight">
            EXPLORE THE SYSTEM ARCHITECTURE
          </h2>

          <p className="text-sm sm:text-base text-[var(--text-secondary)] max-w-xl mx-auto leading-relaxed font-mono">
            ACCESS DETAILED PROJECT CASE STUDIES, REVIEW THE FULL TECHNICAL RESUME, OR INITIATE DIRECT CONTACT.
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
      </div>
    </div>
  );
};
