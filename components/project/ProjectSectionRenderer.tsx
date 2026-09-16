import React from "react";
import { ProjectSection } from "@/content/projects/_schema";
import { MediaPlaceholder } from "@/components/media/MediaPlaceholder";
import { CodeViewer } from "@/components/project/CodeViewer";

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

          {/* Optional Callout Spec Grid */}
          {section.callouts && section.callouts.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {section.callouts.map((callout, cIdx) => (
                <div
                  key={cIdx}
                  className="p-4 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-elevated)] space-y-2 hover:border-[var(--accent)] transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[var(--text-primary)]">
                      {callout.title}
                    </span>
                    {callout.badge && (
                      <span className="mono-label text-[10px] px-1.5 py-0.5 rounded bg-[var(--surface-graphite)] text-[var(--accent)] border border-[var(--border-subtle)]">
                        {callout.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-[var(--text-secondary)] font-mono leading-relaxed">
                    {callout.description}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Optional Technical Data Table */}
          {section.table && (
            <div className="overflow-x-auto rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-elevated)]">
              <table className="w-full text-left font-mono text-xs border-collapse">
                <thead>
                  <tr className="border-b border-[var(--border-subtle)] bg-[var(--surface-graphite)] text-[var(--accent)] font-semibold tracking-wider">
                    {section.table.headers.map((header, hIdx) => (
                      <th key={hIdx} className="px-4 py-3">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--border-subtle)]">
                  {section.table.rows.map((row, rIdx) => (
                    <tr key={rIdx} className="hover:bg-white/[0.02] transition-colors">
                      {row.map((cell, cellIdx) => (
                        <td
                          key={cellIdx}
                          className={`px-4 py-2.5 ${cellIdx === 0 ? "font-bold text-[var(--text-primary)]" : "text-[var(--text-secondary)]"}`}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
              {section.table.caption && (
                <div className="px-4 py-2 border-t border-[var(--border-subtle)] text-[11px] text-[var(--text-muted)] font-mono italic">
                  {section.table.caption}
                </div>
              )}
            </div>
          )}

          {/* Optional Code Snippet Block */}
          {section.codeSnippet && (
            <div className="w-full">
              <CodeViewer snippet={section.codeSnippet} />
            </div>
          )}

          {/* Media Items */}
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
