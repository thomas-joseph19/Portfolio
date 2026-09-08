import React from "react";
import Link from "next/link";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-[var(--border-subtle)] bg-[var(--bg-primary)] py-12 text-[var(--text-secondary)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 font-mono text-xs text-[var(--text-primary)]">
              <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
              <span className="font-semibold">[ENGINEERING PORTFOLIO SYSTEM]</span>
            </div>
            <p className="text-xs text-[var(--text-secondary)] max-w-md font-mono">
              SCROLL-DRIVEN MONOCHROME TECHNICAL INTERFACE • SINGLE SOURCE OF TRUTH CONTENT ARCHITECTURE
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 font-mono text-xs">
            <Link
              href="/"
              className="hover:text-[var(--accent)] transition-colors focus-ring p-0.5 rounded-[var(--radius-sm)]"
            >
              HOME
            </Link>
            <Link
              href="/about"
              className="hover:text-[var(--accent)] transition-colors focus-ring p-0.5 rounded-[var(--radius-sm)]"
            >
              ABOUT
            </Link>
            <Link
              href="/projects"
              className="hover:text-[var(--accent)] transition-colors focus-ring p-0.5 rounded-[var(--radius-sm)]"
            >
              PROJECTS
            </Link>
            <Link
              href="/resume"
              className="hover:text-[var(--accent)] transition-colors focus-ring p-0.5 rounded-[var(--radius-sm)]"
            >
              RESUME
            </Link>
            <Link
              href="/contact"
              className="hover:text-[var(--accent)] transition-colors focus-ring p-0.5 rounded-[var(--radius-sm)]"
            >
              CONTACT
            </Link>
          </div>
        </div>

        <div className="mt-8 border-t border-[var(--border-subtle)] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-[var(--text-muted)]">
          <div>
            © {new Date().getFullYear()} [AWAITING NAME]. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-4">
            <span>SYS_VER: 1.0.0</span>
            <span>BUILD: STATIC_EXPORT</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
