"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useReducedMotionSafe } from "@/components/motion/useReducedMotionSafe";
import { getFeaturedProjects } from "@/lib/content";
import { MediaPlaceholder } from "@/components/media/MediaPlaceholder";
import { TagPill } from "@/components/ui/TagPill";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { Button } from "@/components/ui/Button";

export const Scene06Featured: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotionSafe();
  const featuredProjects = getFeaturedProjects();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0.1, 0.3, 0.8, 0.95], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0.1, 0.45], [80, 0]);

  return (
    <div ref={containerRef} className="relative h-[220vh] w-full bg-[var(--bg-elevated)] border-t border-[var(--border-subtle)]">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center items-center px-4">
        <motion.div
          style={{
            opacity: prefersReducedMotion ? 1 : opacity,
            y: prefersReducedMotion ? 0 : y,
          }}
          className="mx-auto max-w-7xl w-full space-y-8"
        >
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[var(--border-subtle)] pb-4">
            <div className="space-y-1">
              <div className="mono-label text-xs tracking-widest text-[var(--accent)]">
                FEATURED_MODULES // SCENE_06
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
            <div className="p-12 text-center border border-[var(--border-subtle)] rounded-[var(--radius-md)] bg-[var(--surface-graphite)] space-y-3">
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
                  className="group flex flex-col rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--surface-graphite)] overflow-hidden transition-all duration-300 hover:border-[var(--accent)] hover:shadow-lg hover:shadow-[var(--accent-glow)]"
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
      </div>
    </div>
  );
};
