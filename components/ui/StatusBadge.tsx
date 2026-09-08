import React from "react";
import { ProjectStatus } from "@/content/projects/_schema";

interface StatusBadgeProps {
  status: ProjectStatus | null;
  size?: "sm" | "md";
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status, size = "sm" }) => {
  if (!status) return null;

  const isDev = status === "in-development";
  const isCompleted = status === "completed";
  const isProto = status === "prototyping";

  let badgeStyle = "bg-[var(--surface-graphite)] text-[var(--text-secondary)] border-[var(--border-subtle)]";
  let dotStyle = "bg-[var(--text-muted)]";
  let label = status.toUpperCase().replace("-", " ");

  if (isDev) {
    badgeStyle = "bg-amber-500/20 text-amber-300 border-amber-500/60 font-bold shadow-lg shadow-amber-500/20";
    dotStyle = "bg-amber-400 animate-ping";
    label = "IN PROGRESS";
  } else if (isCompleted) {
    badgeStyle = "bg-[var(--accent-dim)] text-[var(--accent)] border-[var(--border-accent)] font-semibold";
    dotStyle = "bg-[var(--accent)] animate-pulse";
  } else if (isProto) {
    badgeStyle = "bg-blue-500/20 text-blue-300 border-blue-500/50 font-semibold";
    dotStyle = "bg-blue-400 animate-pulse";
  }

  const pxClass = size === "sm" ? "px-2 py-0.5 text-[10px]" : "px-2.5 py-1 text-[11px]";

  return (
    <div className={`inline-flex items-center gap-1.5 rounded-[var(--radius-sm)] border font-mono tracking-wider ${pxClass} ${badgeStyle}`}>
      <span className="relative flex h-2 w-2">
        <span className={`absolute inline-flex h-full w-full rounded-full opacity-75 ${dotStyle}`} />
        <span className={`relative inline-flex h-2 w-2 rounded-full ${isDev ? "bg-amber-400" : isCompleted ? "bg-[var(--accent)]" : "bg-blue-400"}`} />
      </span>
      <span>{label}</span>
    </div>
  );
};
