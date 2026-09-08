import { constructMetadata } from "@/lib/seo";
import { TagPill } from "@/components/ui/TagPill";
import { Button } from "@/components/ui/Button";

export const metadata = constructMetadata({
  title: "About",
  description: "Mechanical & Aerospace Engineering background, education at UCF, research, and skills of Thomas Joseph.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      <header className="space-y-4 border-b border-[var(--border-subtle)] pb-8">
        <div className="mono-label text-xs tracking-widest text-[var(--accent)]">
          SYSTEM_PROFILE // GENERAL_INFORMATION
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[var(--text-primary)] font-heading">
          ABOUT THOMAS JOSEPH
        </h1>
        <p className="text-sm sm:text-base text-[var(--text-secondary)] max-w-2xl leading-relaxed">
          MECHANICAL & AEROSPACE ENGINEERING STUDENT AT THE UNIVERSITY OF CENTRAL FLORIDA (GPA: 3.9).
        </p>
      </header>

      {/* CAD Wireframe Banner */}
      <div className="relative h-48 w-full rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--surface-graphite)] overflow-hidden flex items-center justify-center">
        <svg
          className="absolute inset-0 h-full w-full opacity-30"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          aria-hidden="true"
        >
          <defs>
            <pattern id="about-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="var(--border-subtle)" strokeWidth="0.75" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#about-grid)" />
          <line x1="0" y1="50%" x2="100%" y2="50%" stroke="var(--accent)" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="50%" cy="50%" r="60" stroke="var(--accent)" strokeWidth="1" fill="none" />
        </svg>

        <div className="relative z-10 text-center space-y-1">
          <div className="mono-label text-sm text-[var(--accent)] font-semibold">
            THOMAS JOSEPH // FUTURE ENGINEER
          </div>
          <div className="text-xs text-[var(--text-secondary)] font-mono">
            TAMPA, FL • UNIVERSITY OF CENTRAL FLORIDA
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {/* General Information */}
        <section className="p-8 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--surface-graphite)] space-y-4">
          <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-3">
            <h2 className="text-xl font-bold text-[var(--text-primary)] font-heading">
              01 // GENERAL INFORMATION & PHILOSOPHY
            </h2>
            <span className="mono-label text-xs text-[var(--accent)]">GPA: 3.9</span>
          </div>
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed font-mono">
            Driven by a passion for precision design engineering, quality manufacturing, and high-performance CAD systems in mechanical and aerospace engineering. Pursuing dual Bachelor of Science degrees in Mechanical Engineering and Aerospace Engineering at the University of Central Florida.
          </p>
        </section>

        {/* Education */}
        <section className="p-8 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--surface-graphite)] space-y-4">
          <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-3">
            <h2 className="text-xl font-bold text-[var(--text-primary)] font-heading">
              02 // EDUCATION & ACADEMICS
            </h2>
            <span className="mono-label text-xs text-[var(--text-muted)]">UCF • MAY 2029</span>
          </div>
          <div className="space-y-3 font-mono text-sm text-[var(--text-secondary)]">
            <div>
              <div className="text-[var(--text-primary)] font-semibold text-lg">University of Central Florida</div>
              <div className="text-xs text-[var(--accent)]">B.S. Mechanical Engineering & B.S. Aerospace Engineering | GPA: 3.9</div>
              <div className="text-xs text-[var(--text-muted)]">Expected Graduation: May 2029</div>
            </div>
            <div className="pt-3 border-t border-[var(--border-subtle)] space-y-1">
              <div className="mono-label text-xs text-[var(--text-muted)]">RELEVANT COURSEWORK:</div>
              <p className="text-xs leading-relaxed text-[var(--text-secondary)]">
                Statics, Thermodynamics, Solid Mechanics, Structure & Properties of Materials, Differential Equations, Probability & Statistics for Engineers, Calculus I–III.
              </p>
            </div>
          </div>
        </section>

        {/* Technical Skills */}
        <section className="p-8 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--surface-graphite)] space-y-4">
          <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-3">
            <h2 className="text-xl font-bold text-[var(--text-primary)] font-heading">
              03 // TECHNICAL SKILLS & CAPABILITIES
            </h2>
            <span className="mono-label text-xs text-[var(--text-muted)]">ENGINEERING STACK</span>
          </div>
          <div className="space-y-4">
            <div>
              <div className="mono-label text-xs text-[var(--text-muted)] mb-2">DESIGN, ANALYSIS & KINEMATICS</div>
              <div className="flex flex-wrap gap-2">
                <TagPill label="SOLIDWORKS" variant="accent" size="sm" />
                <TagPill label="MATLAB" variant="default" size="sm" />
                <TagPill label="KINEMATICS" variant="default" size="sm" />
                <TagPill label="Finite-Element-Analysis" variant="default" size="sm" />
              </div>
            </div>
            <div>
              <div className="mono-label text-xs text-[var(--text-muted)] mb-2">PROGRAMMING LANGUAGES</div>
              <div className="flex flex-wrap gap-2">
                <TagPill label="Python" variant="default" size="sm" />
                <TagPill label="C" variant="default" size="sm" />
                <TagPill label="Java" variant="default" size="sm" />
              </div>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="p-8 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--surface-graphite)] space-y-4">
          <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-3">
            <h2 className="text-xl font-bold text-[var(--text-primary)] font-heading">
              04 // CERTIFICATIONS & CREDENTIALS
            </h2>
            <span className="mono-label text-xs text-[var(--text-muted)]">VERIFIED</span>
          </div>
          <ul className="space-y-2 font-mono text-xs text-[var(--text-secondary)]">
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
              <strong className="text-[var(--text-primary)]">High-Powered Rocketry Level 1 Certification</strong> — November 2025
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
              <strong className="text-[var(--text-primary)]">Engineering Job Simulation, British Airways</strong> — January 2026
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
              <strong className="text-[var(--text-primary)]">Microsoft Technology Associate</strong> — August 2023
            </li>
          </ul>
        </section>
      </div>

      <div className="pt-8 border-t border-[var(--border-subtle)] flex items-center justify-between">
        <Button href="/projects" variant="primary" size="md">
          EXPLORE PROJECTS →
        </Button>
        <Button href="/resume" variant="secondary" size="md">
          VIEW RESUME →
        </Button>
      </div>
    </div>
  );
}
