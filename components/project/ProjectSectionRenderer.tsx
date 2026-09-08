import React from "react";
import { ProjectSection } from "@/content/projects/_schema";
import { MediaPlaceholder } from "@/components/media/MediaPlaceholder";

interface ProjectSectionRendererProps {
  sections: ProjectSection[];
}

export const ProjectSectionRenderer: React.FC<ProjectSectionRendererProps> = ({ sections }) => {
  return (
    <div className="space-y-16">
      {sections.map((section, idx) => (
        <section
          key={section.id || idx}
          id={section.id}
          className="p-8 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--surface-graphite)] space-y-6"
        >
          <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-4">
            <h3 className="text-xl font-bold text-[var(--text-primary)] font-heading">
              {section.heading}
            </h3>
            <span className="mono-label text-xs text-[var(--text-muted)]">
              SECTION // 0{idx + 1}
            </span>
          </div>

          {section.body && (
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed font-mono whitespace-pre-line">
              {section.body}
            </p>
          )}

          {section.media && section.media.length > 0 && (
            <div className={`grid gap-6 ${section.media.length > 1 ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"}`}>
              {section.media.map((mediaItem, mediaIdx) => (
                <MediaPlaceholder key={mediaIdx} item={mediaItem} />
              ))}
            </div>
          )}
        </section>
      ))}
    </div>
  );
};
