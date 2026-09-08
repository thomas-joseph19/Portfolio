import { constructMetadata } from "@/lib/seo";
import { Button } from "@/components/ui/Button";

export const metadata = constructMetadata({
  title: "Resume",
  description: "Web-readable engineering resume and downloadable PDF document placeholder.",
  path: "/resume",
});

export default function ResumePage() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      <header className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-[var(--border-subtle)] pb-8">
        <div className="space-y-4">
          <div className="mono-label text-xs tracking-widest text-[var(--accent)]">
            SYSTEM_DOCUMENT // RESUME_VER_1.0
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[var(--text-primary)] font-heading">
            ENGINEERING RESUME
          </h1>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] max-w-xl leading-relaxed">
            WEB-READABLE SPECIFICATION. DOWNLOADABLE RESUME FILE LINKED BELOW.
          </p>
        </div>

        {/* Download Action Placeholder */}
        <div>
          <Button href="#" download variant="primary" size="md">
            DOWNLOAD RESUME PDF [AWAITING RESUME FILE]
          </Button>
        </div>
      </header>

      <div className="space-y-10 font-mono">
        {/* Header Personal Info Placeholder */}
        <div className="p-6 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--surface-graphite)] space-y-2">
          <div className="text-xl font-bold text-[var(--text-primary)] font-heading">[AWAITING NAME]</div>
          <div className="text-xs text-[var(--accent)]">[AWAITING EMAIL] • [AWAITING LOCATION] • [AWAITING LINKEDIN]</div>
        </div>

        {/* Education Section */}
        <section className="space-y-4">
          <h2 className="text-lg font-bold text-[var(--text-primary)] border-b border-[var(--border-subtle)] pb-2 font-heading">
            01 // EDUCATION
          </h2>
          <div className="p-6 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--surface-graphite)] space-y-2">
            <div className="flex flex-col sm:flex-row justify-between text-sm">
              <span className="font-semibold text-[var(--text-primary)]">[AWAITING UNIVERSITY / INSTITUTION]</span>
              <span className="text-xs text-[var(--text-muted)]">[AWAITING DATES]</span>
            </div>
            <div className="text-xs text-[var(--accent)]">[AWAITING DEGREE / MAJOR]</div>
            <p className="text-xs text-[var(--text-secondary)] pt-2 leading-relaxed">
              [AWAITING ACADEMIC HIGHLIGHTS, GPA, & RELEVANT COURSEWORK]
            </p>
          </div>
        </section>

        {/* Work Experience Section */}
        <section className="space-y-4">
          <h2 className="text-lg font-bold text-[var(--text-primary)] border-b border-[var(--border-subtle)] pb-2 font-heading">
            02 // PROFESSIONAL EXPERIENCE
          </h2>
          <div className="p-6 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--surface-graphite)] space-y-2">
            <div className="flex flex-col sm:flex-row justify-between text-sm">
              <span className="font-semibold text-[var(--text-primary)]">[AWAITING COMPANY / EMPLOYER]</span>
              <span className="text-xs text-[var(--text-muted)]">[AWAITING DATES]</span>
            </div>
            <div className="text-xs text-[var(--accent)]">[AWAITING JOB TITLE / ROLE]</div>
            <ul className="text-xs text-[var(--text-secondary)] pt-2 leading-relaxed space-y-1 list-disc list-inside">
              <li>[AWAITING RESPONSIBILITY / ACHIEVEMENT BULLET 1]</li>
              <li>[AWAITING RESPONSIBILITY / ACHIEVEMENT BULLET 2]</li>
            </ul>
          </div>
        </section>

        {/* Project Experience Section */}
        <section className="space-y-4">
          <h2 className="text-lg font-bold text-[var(--text-primary)] border-b border-[var(--border-subtle)] pb-2 font-heading">
            03 // PROJECT EXPERIENCE
          </h2>
          <div className="p-6 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--surface-graphite)] space-y-2">
            <div className="flex flex-col sm:flex-row justify-between text-sm">
              <span className="font-semibold text-[var(--text-primary)]">[AWAITING PROJECT NAME]</span>
              <span className="text-xs text-[var(--text-muted)]">[AWAITING DATES]</span>
            </div>
            <div className="text-xs text-[var(--accent)]">[AWAITING KEY TECHNOLOGIES / ROLE]</div>
            <p className="text-xs text-[var(--text-secondary)] pt-2 leading-relaxed">
              [AWAITING PROJECT SUMMARY & SPECIFICATION OUTCOMES]
            </p>
          </div>
        </section>

        {/* Research Experience Section */}
        <section className="space-y-4">
          <h2 className="text-lg font-bold text-[var(--text-primary)] border-b border-[var(--border-subtle)] pb-2 font-heading">
            04 // RESEARCH EXPERIENCE
          </h2>
          <div className="p-6 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--surface-graphite)] space-y-2">
            <div className="flex flex-col sm:flex-row justify-between text-sm">
              <span className="font-semibold text-[var(--text-primary)]">[AWAITING RESEARCH LAB / FACILITY]</span>
              <span className="text-xs text-[var(--text-muted)]">[AWAITING DATES]</span>
            </div>
            <p className="text-xs text-[var(--text-secondary)] pt-2 leading-relaxed">
              [AWAITING RESEARCH TOPIC & METHODOLOGY DETAILS]
            </p>
          </div>
        </section>

        {/* Technical Skills & Certifications Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--surface-graphite)] space-y-2">
            <h3 className="text-sm font-bold text-[var(--text-primary)] font-heading">
              05 // TECHNICAL SKILLS
            </h3>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              [AWAITING HARD SKILLS, CAD SOFTWARE, PROGRAMMING LANGUAGES]
            </p>
          </div>

          <div className="p-6 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--surface-graphite)] space-y-2">
            <h3 className="text-sm font-bold text-[var(--text-primary)] font-heading">
              06 // CERTIFICATIONS & ADDITIONAL INFO
            </h3>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              [AWAITING CERTIFICATIONS, LICENSES, OR PROFESSIONAL MEMBERSHIPS]
            </p>
          </div>
        </section>
      </div>

      <footer className="pt-8 border-t border-[var(--border-subtle)] flex items-center justify-between">
        <Button href="/contact" variant="primary" size="md">
          INITIATE CONTACT →
        </Button>
        <Button href="/projects" variant="secondary" size="md">
          EXPLORE PROJECTS ARCHIVE →
        </Button>
      </footer>
    </div>
  );
}
