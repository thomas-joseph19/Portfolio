import React from "react";
import Link from "next/link";
import { Project } from "@/content/projects/_schema";
import { MediaPlaceholder } from "@/components/media/MediaPlaceholder";
import { TagPill } from "@/components/ui/TagPill";
import { StatusBadge } from "@/components/ui/StatusBadge";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group flex flex-col rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--surface-graphite)] overflow-hidden transition-all duration-300 hover:border-[var(--accent)] hover:shadow-lg hover:shadow-[var(--accent-glow)]">
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
            {project.categories.map((cat) => (
              <TagPill key={cat} label={cat} variant="accent" size="sm" />
            ))}
            {project.tags.map((tag) => (
              <TagPill key={tag} label={tag} variant="default" size="sm" />
            ))}
          </div>

          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center text-xs font-mono font-medium text-[var(--accent)] hover:underline focus-ring p-0.5 rounded-[var(--radius-sm)]"
          >
            VIEW FULL SPECIFICATION & CAD →
          </Link>
        </div>
      </div>
    </div>
  );
};
