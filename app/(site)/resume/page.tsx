import { constructMetadata } from "@/lib/seo";
import { Button } from "@/components/ui/Button";

export const metadata = constructMetadata({
  title: "Resume",
  description: "Mechanical & Aerospace Engineering resume of Thomas Joseph - University of Central Florida.",
  path: "/resume",
});

export default function ResumePage() {
  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      <header className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-[var(--border-subtle)] pb-8">
        <div className="space-y-4">
          <div className="mono-label text-xs tracking-widest text-[var(--accent)]">
            SYSTEM_DOCUMENT // RESUME_2026
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[var(--text-primary)] font-heading">
            THOMAS JOSEPH
          </h1>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] max-w-xl leading-relaxed">
            MECHANICAL & AEROSPACE ENGINEERING RESUME • UNIVERSITY OF CENTRAL FLORIDA
          </p>
        </div>

        <div>
          <Button href="/contact" variant="primary" size="md">
            GET IN TOUCH →
          </Button>
        </div>
      </header>

      <div className="space-y-10 font-mono">
        {/* Personal Contact Bar */}
        <div className="p-6 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--surface-graphite)] space-y-2">
          <div className="text-xl font-bold text-[var(--text-primary)] font-heading">THOMAS JOSEPH</div>
          <div className="text-xs text-[var(--accent)] flex flex-wrap gap-4 pt-1">
            <span>LOCATION: Tampa, FL</span>
            <span>PHONE: 813-451-7308</span>
            <span>EMAIL: thomas.joseph19@outlook.com</span>
            <a
              href="https://linkedin.com/in/thomas-joseph"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-[var(--text-primary)]"
            >
              linkedin.com/in/thomas-joseph
            </a>
          </div>
        </div>

        {/* Education Section */}
        <section className="space-y-4">
          <h2 className="text-lg font-bold text-[var(--text-primary)] border-b border-[var(--border-subtle)] pb-2 font-heading">
            01 // EDUCATION
          </h2>
          <div className="p-6 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--surface-graphite)] space-y-3">
            <div className="flex flex-col sm:flex-row justify-between text-sm">
              <span className="font-semibold text-[var(--text-primary)] text-base">University of Central Florida</span>
              <span className="text-xs text-[var(--text-muted)]">Expected Grad: May 2029</span>
            </div>
            <div className="text-xs text-[var(--accent)] font-bold">
              B.S. Mechanical Engineering & B.S. Aerospace Engineering | GPA: 3.9
            </div>
            <div className="text-xs text-[var(--text-secondary)] pt-2 border-t border-[var(--border-subtle)] space-y-1">
              <span className="text-[var(--text-muted)] font-semibold">RELEVANT COURSEWORK:</span>
              <p className="leading-relaxed">
                Statics, Thermodynamics, Solid Mechanics, Structure & Properties of Materials, Differential Equations, Probability & Statistics for Engineers, Calculus I–III.
              </p>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="space-y-4">
          <h2 className="text-lg font-bold text-[var(--text-primary)] border-b border-[var(--border-subtle)] pb-2 font-heading">
            02 // WORK & LEADERSHIP EXPERIENCE
          </h2>

          <div className="p-6 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--surface-graphite)] space-y-3">
            <div className="flex flex-col sm:flex-row justify-between text-sm">
              <span className="font-semibold text-[var(--text-primary)] text-base">Undergraduate Research Intern — Michigan State University</span>
              <span className="text-xs text-[var(--text-muted)]">June 2024 – July 2024</span>
            </div>
            <ul className="text-xs text-[var(--text-secondary)] pt-2 leading-relaxed space-y-1.5 list-disc list-inside">
              <li>Calibrated NaI gamma-ray detectors using Cs-137 and Co-60 reference sources for energy spectroscopy.</li>
              <li>Analyzed gamma-ray spectra in MATLAB and multichannel analyzer software to identify unknown radioisotopes.</li>
              <li>Applied detector calibration and spectral analysis techniques to characterize gamma-ray measurements.</li>
              <li>Presented experimental methods and results through a technical research poster.</li>
            </ul>
          </div>

          <div className="p-6 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--surface-graphite)] space-y-3">
            <div className="flex flex-col sm:flex-row justify-between text-sm">
              <span className="font-semibold text-[var(--text-primary)] text-base">Founder — Tampa Bay Model United Nations</span>
              <span className="text-xs text-[var(--text-muted)]">January 2022 – Present</span>
            </div>
            <ul className="text-xs text-[var(--text-secondary)] pt-2 leading-relaxed space-y-1.5 list-disc list-inside">
              <li>Led a team of 5 to build a local Model UN conference expanding opportunities for area students.</li>
              <li>Raised over $10,000 over two years to fund the project.</li>
              <li>Managed 2 annual committees, coordinated 10+ staff members, and oversaw 2 full-day conferences — hands-on leadership and logistical experience.</li>
            </ul>
          </div>
        </section>

        {/* Projects Section */}
        <section className="space-y-4">
          <h2 className="text-lg font-bold text-[var(--text-primary)] border-b border-[var(--border-subtle)] pb-2 font-heading">
            03 // ENGINEERING & SOFTWARE PROJECTS
          </h2>

          <div className="p-6 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--surface-graphite)] space-y-2">
            <div className="flex flex-col sm:flex-row justify-between text-sm">
              <span className="font-semibold text-[var(--text-primary)]">Propulsion Team Member — Project Neptune (AIAA @ UCF & SEDS @ UCF)</span>
              <span className="text-xs text-[var(--accent)]">UCF Rocketry</span>
            </div>
            <ul className="text-xs text-[var(--text-secondary)] pt-2 leading-relaxed space-y-1 list-disc list-inside">
              <li>Lead the planning and development of the propulsion subsystem for a multidisciplinary student engineering project developing a two-stage rocket targeting an altitude exceeding 100 km.</li>
              <li>Collaborate with aerostructures, electronics, systems, and test & integration teams to establish the 1st ever collegiate level two-stage rocket to reach space from an offshore platform.</li>
            </ul>
          </div>

          <div className="p-6 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--surface-graphite)] space-y-2">
            <div className="flex flex-col sm:flex-row justify-between text-sm">
              <span className="font-semibold text-[var(--text-primary)]">Boat Design Prototype — UCF</span>
              <span className="text-xs text-[var(--accent)]">Mechanical Design</span>
            </div>
            <ul className="text-xs text-[var(--text-secondary)] pt-2 leading-relaxed space-y-1 list-disc list-inside">
              <li>Fabricated a functional prototype boat in a team-based engineering project.</li>
              <li>Applied mechanical design principles for buoyancy, stability, and weight distribution; integrated basic electrical components.</li>
              <li>Collaborated with teammates to test, troubleshoot, and refine mechanical structure and electrical functionality.</li>
            </ul>
          </div>

          <div className="p-6 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--surface-graphite)] space-y-2">
            <div className="flex flex-col sm:flex-row justify-between text-sm">
              <span className="font-semibold text-[var(--text-primary)]">Soccer Team Operations Tool (GoalPro)</span>
              <span className="text-xs text-[var(--accent)]">Java, SQL, Swing/JavaFX</span>
            </div>
            <ul className="text-xs text-[var(--text-secondary)] pt-2 leading-relaxed space-y-1 list-disc list-inside">
              <li>Built a Java application automating administrative workflows for a competitive soccer team, cutting manual data entry by 50%.</li>
              <li>Integrated a SQL database (JDBC) to track scoring trends, availability, and match statistics.</li>
            </ul>
          </div>
        </section>

        {/* Technical Skills & Certifications Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--surface-graphite)] space-y-3">
            <h3 className="text-sm font-bold text-[var(--text-primary)] font-heading">
              04 // TECHNICAL SKILLS
            </h3>
            <div className="space-y-2 text-xs text-[var(--text-secondary)]">
              <div>
                <span className="text-[var(--text-muted)] font-semibold">DESIGN & ANALYSIS:</span>
                <p className="text-[var(--text-primary)] font-bold">SolidWorks (CAD Modeling), MATLAB Simulation, Kinematics, Finite-Element-Analysis</p>
              </div>
              <div>
                <span className="text-[var(--text-muted)] font-semibold">PROGRAMMING:</span>
                <p className="text-[var(--text-primary)]">Java, C, Python</p>
              </div>
              <div>
                <span className="text-[var(--text-muted)] font-semibold">SOFTWARE:</span>
                <p className="text-[var(--text-primary)]">Microsoft Word, Excel, PowerPoint</p>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--surface-graphite)] space-y-3">
            <h3 className="text-sm font-bold text-[var(--text-primary)] font-heading">
              05 // CERTIFICATIONS
            </h3>
            <ul className="space-y-2 text-xs text-[var(--text-secondary)]">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                <span><strong className="text-[var(--text-primary)]">High-Powered Rocketry Level 1 Certification</strong> (Nov 2025)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                <span><strong className="text-[var(--text-primary)]">Engineering Job Simulation, British Airways</strong> (Jan 2026)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                <span><strong className="text-[var(--text-primary)]">Microsoft Technology Associate</strong> (Aug 2023)</span>
              </li>
            </ul>
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
