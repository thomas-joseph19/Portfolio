import { constructMetadata } from "@/lib/seo";
import { TagPill } from "@/components/ui/TagPill";
import { Button } from "@/components/ui/Button";

export const metadata = constructMetadata({
  title: "About",
  description: "General information, education, engineering background, and core technical skills.",
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
          ABOUT & ENGINEERING PROFILE
        </h1>
        <p className="text-sm sm:text-base text-[var(--text-secondary)] max-w-2xl leading-relaxed">
          STRUCTURED PROFILE INSPIRED BY CAD WIREFRAMES, COORDINATE SYSTEMS, AND MATHEMATICAL GEOMETRY.
        </p>
      </header>

      {/* CAD Wireframe Coordinate Mesh Overlay Banner */}
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
          <div className="mono-label text-xs text-[var(--accent)] font-semibold">
            [AWAITING PROFILE HEADER LOGO / MONOGRAM]
          </div>
          <div className="text-xs text-[var(--text-secondary)] font-mono">
            COORDINATES: 0.00° N, 0.00° E
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {/* General Information */}
        <section className="p-8 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--surface-graphite)] space-y-4">
          <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-3">
            <h2 className="text-xl font-bold text-[var(--text-primary)] font-heading">
              01 // GENERAL INFORMATION
            </h2>
            <span className="mono-label text-xs text-[var(--accent)]">STATUS: ACTIVE</span>
          </div>
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed font-mono">
            [AWAITING GENERAL INFORMATION & BIOGRAPHY]
          </p>
        </section>

        {/* Education */}
        <section className="p-8 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--surface-graphite)] space-y-4">
          <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-3">
            <h2 className="text-xl font-bold text-[var(--text-primary)] font-heading">
              02 // EDUCATION & ACADEMICS
            </h2>
            <span className="mono-label text-xs text-[var(--text-muted)]">DEGREE SPECIFICATION</span>
          </div>
          <div className="space-y-3 font-mono text-sm text-[var(--text-secondary)]">
            <div>
              <div className="text-[var(--text-primary)] font-semibold">[AWAITING INSTITUTION NAME]</div>
              <div className="text-xs text-[var(--accent)]">[AWAITING DEGREE / MAJOR]</div>
              <div className="text-xs text-[var(--text-muted)]">[AWAITING GRADUATION DATE / TIMELINE]</div>
            </div>
            <p className="text-xs leading-relaxed pt-2 border-t border-[var(--border-subtle)]">
              [AWAITING RELEVANT COURSEWORK & HONORS]
            </p>
          </div>
        </section>

        {/* Engineering Interests */}
        <section className="p-8 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--surface-graphite)] space-y-4">
          <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-3">
            <h2 className="text-xl font-bold text-[var(--text-primary)] font-heading">
              03 // ENGINEERING INTERESTS
            </h2>
            <span className="mono-label text-xs text-[var(--text-muted)]">FOCUS AREAS</span>
          </div>
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed font-mono">
            [AWAITING ENGINEERING INTERESTS & RESEARCH DOMAINS]
          </p>
        </section>

        {/* Technical Skills */}
        <section className="p-8 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--surface-graphite)] space-y-4">
          <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-3">
            <h2 className="text-xl font-bold text-[var(--text-primary)] font-heading">
              04 // TECHNICAL SKILLS & SOFTWARE
            </h2>
            <span className="mono-label text-xs text-[var(--text-muted)]">CAPABILITIES</span>
          </div>
          <div className="space-y-4">
            <div>
              <div className="mono-label text-xs text-[var(--text-muted)] mb-2">CAD & SIMULATION</div>
              <div className="flex flex-wrap gap-2">
                <TagPill label="SolidWorks" variant="accent" size="sm" />
                <TagPill label="FEA Stress Analysis" variant="default" size="sm" />
                <TagPill label="GD&T" variant="default" size="sm" />
                <TagPill label="MATLAB / Simulink" variant="default" size="sm" />
              </div>
            </div>
            <div>
              <div className="mono-label text-xs text-[var(--text-muted)] mb-2">MANUFACTURING & FABRICATION</div>
              <div className="flex flex-wrap gap-2">
                <TagPill label="CNC Machining" variant="default" size="sm" />
                <TagPill label="3D Printing / FDM" variant="default" size="sm" />
                <TagPill label="Laser Cutting" variant="default" size="sm" />
              </div>
            </div>
          </div>
        </section>

        {/* Optional Additional Information */}
        <section className="p-8 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--surface-graphite)] space-y-4">
          <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-3">
            <h2 className="text-xl font-bold text-[var(--text-primary)] font-heading">
              05 // ADDITIONAL INFORMATION
            </h2>
            <span className="mono-label text-xs text-[var(--text-muted)]">OPTIONAL</span>
          </div>
          <p className="text-sm text-[var(--text-secondary)] leading-relaxed font-mono">
            [AWAITING ADDITIONAL INFORMATION, CERTIFICATIONS, OR EXTRACURRICULAR ACTIVITIES]
          </p>
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
