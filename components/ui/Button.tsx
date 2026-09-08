import React from "react";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  download?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  download,
}) => {
  const baseClasses =
    "inline-flex items-center justify-center font-mono font-medium rounded-[var(--radius-sm)] border transition-all duration-200 focus-ring cursor-pointer select-none";

  const sizeClasses = {
    sm: "px-3 py-1.5 text-xs gap-1.5",
    md: "px-4 py-2.5 text-xs tracking-wider gap-2",
    lg: "px-6 py-3.5 text-sm tracking-wider gap-2.5",
  };

  const variantClasses = {
    primary:
      "bg-[var(--accent)] text-[var(--bg-primary)] border-[var(--accent)] hover:bg-[#85c4d2] hover:border-[#85c4d2] font-semibold",
    secondary:
      "bg-[var(--surface-graphite)] text-[var(--text-primary)] border-[var(--border-subtle)] hover:border-[var(--accent)] hover:text-[var(--accent)]",
    outline:
      "bg-transparent text-[var(--text-primary)] border-[var(--border-subtle)] hover:border-[var(--accent)] hover:text-[var(--accent)]",
  };

  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  if (href) {
    if (download) {
      return (
        <a href={href} download className={classes}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
};
