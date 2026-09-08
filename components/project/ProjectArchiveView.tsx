"use client";

import React, { useState, useMemo } from "react";
import { Project } from "@/content/projects/_schema";
import { ProjectFilterBar } from "./ProjectFilterBar";
import { ProjectCard } from "./ProjectCard";

interface ProjectArchiveViewProps {
  projects: Project[];
  categories: string[];
}

export const ProjectArchiveView: React.FC<ProjectArchiveViewProps> = ({
  projects,
  categories,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredProjects = useMemo(() => {
    if (!selectedCategory) return projects;
    return projects.filter((p) => p.categories.includes(selectedCategory));
  }, [projects, selectedCategory]);

  return (
    <div className="space-y-8">
      {/* Category Filter Bar derived dynamically */}
      <ProjectFilterBar
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      {/* Projects Grid */}
      {filteredProjects.length === 0 ? (
        <div className="p-12 text-center border border-[var(--border-subtle)] rounded-[var(--radius-md)] bg-[var(--surface-graphite)] space-y-2">
          <div className="mono-label text-xs text-[var(--accent)]">[NO MATCHING PROJECTS]</div>
          <p className="text-xs text-[var(--text-secondary)]">
            NO PROJECTS MATCH THE SELECTED FILTER CATEGORY.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      )}
    </div>
  );
};
