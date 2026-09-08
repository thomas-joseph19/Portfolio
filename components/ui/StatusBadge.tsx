import React from "react";
import { ProjectStatus } from "@/content/projects/_schema";

interface StatusBadgeProps {
  status: ProjectStatus | null;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const displayStatus = status ? status.toUpperCase().replace("-", " ") : "UNSET";

  return (
    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[var(--radius-sm)] border border-[var(--border-subtle)] bg-[var(--surface-graphite)] text-[11px] font-mono tracking-wider text-[var(--text-secondary)]">
      <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
      <span>{displayStatus}</span>
    </div>
  );
};
