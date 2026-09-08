"use client";

import React from "react";

interface ProjectFilterBarProps {
  categories: string[];
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
}

export const ProjectFilterBar: React.FC<ProjectFilterBarProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
}) => {
  return (
    <div className="flex flex-wrap items-center gap-2 py-4 border-b border-[var(--border-subtle)]">
      <span className="mono-label text-xs text-[var(--text-muted)] mr-2">
        FILTER BY CATEGORY:
      </span>

      <button
        onClick={() => onSelectCategory(null)}
        className={`mono-label px-3 py-1.5 text-xs rounded-[var(--radius-sm)] border transition-all focus-ring ${
          selectedCategory === null
            ? "bg-[var(--accent)] text-[var(--bg-primary)] border-[var(--accent)] font-semibold"
            : "bg-[var(--surface-graphite)] text-[var(--text-secondary)] border-[var(--border-subtle)] hover:border-[var(--text-secondary)]"
        }`}
      >
        ALL ({categories.length})
      </button>

      {categories.map((category) => {
        const isSelected = selectedCategory === category;
        return (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={`mono-label px-3 py-1.5 text-xs rounded-[var(--radius-sm)] border transition-all focus-ring ${
              isSelected
                ? "bg-[var(--accent)] text-[var(--bg-primary)] border-[var(--accent)] font-semibold"
                : "bg-[var(--surface-graphite)] text-[var(--text-secondary)] border-[var(--border-subtle)] hover:border-[var(--text-secondary)]"
            }`}
          >
            {category.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
};
