import React from "react";

interface TagPillProps {
  label: string;
  variant?: "default" | "accent" | "outline";
  size?: "sm" | "md";
}

export const TagPill: React.FC<TagPillProps> = ({
  label,
  variant = "default",
  size = "sm",
}) => {
  const baseClasses =
    "inline-flex items-center font-mono rounded-[var(--radius-sm)] border transition-colors";
  
  const sizeClasses =
    size === "sm" ? "px-2 py-0.5 text-[11px]" : "px-3 py-1 text-xs";

  const variantClasses = {
    default:
      "bg-[var(--surface-graphite)] text-[var(--text-secondary)] border-[var(--border-subtle)] hover:border-[var(--text-secondary)]",
    accent:
      "bg-[var(--accent-dim)] text-[var(--accent)] border-[var(--border-accent)] font-medium",
    outline:
      "bg-transparent text-[var(--text-secondary)] border-[var(--border-subtle)]",
  };

  return (
    <span className={`${baseClasses} ${sizeClasses} ${variantClasses[variant]}`}>
      {label}
    </span>
  );
};
