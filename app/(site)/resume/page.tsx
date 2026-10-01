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
            <span>LOCATION: Orlando, FL</span>
            <span>PHONE: 813-451-7308</span>
            <span>EMAIL: thomas.joseph19@outlook.com</span>
            <a
              href="https://www.linkedin.com/in/thomas-joseph-5a01072a7/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-[var(--text-primary)]"
            >
              linkedin.com/in/thomas-joseph-5a01072a7
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
              B.S. Mechanical Engineering | B.S. Aerospace Engineering | GPA: 3.9
            </div>
            <div className="text-xs text-[var(--text-secondary)] pt-2 border-t border-[var(--border-subtle)] space-y-1.5">
              <div>
                <span className="text-[var(--text-muted)] font-semibold">RELEVANT COURSEWORK: </span>
                <span>Statics, Thermodynamics, Solid Mechanics, Structure & Properties of Materials, Dynamics</span>
              </div>
              <div>
                <span className="text-[var(--text-muted)] font-semibold">SOCIETIES/CLUBS: </span>
                <span>American Society of Mechanical Engineers, Students for the Exploration and Development of Space</span>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="space-y-4">
          <h2 className="text-lg font-bold text-[var(--text-primary)] border-b border-[var(--border-subtle)] pb-2 font-heading">
            02 // PROJECTS
          </h2>

          {/* NASA Micro-g NExT Challenge */}
          <div className="p-6 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--surface-graphite)] space-y-3">
            <div className="flex flex-col sm:flex-row justify-between text-sm gap-1">
              <div>
                <div className="font-semibold text-[var(--text-primary)] text-base">NASA Micro-g NExT Challenge</div>
                <div className="text-xs text-[var(--accent)]">Students for the Exploration and Development of Space at UCF</div>
              </div>
              <span className="text-xs text-[var(--text-muted)] whitespace-nowrap">September 2026 – Present</span>
            </div>
            <ul className="text-xs text-[var(--text-secondary)] pt-2 leading-relaxed space-y-1.5 list-disc list-inside">
              <li>Selected as one of teams nationwide to compete in Challenge 2 of NASA's Micro-g NExT program (ongoing).</li>
              <li>Modeled the stability subsystem of a deployable lunar lighting stand for NASA's Micro-g NExT Challenge.</li>
              <li>Supported hazard analysis for the lunar lighting stand, identifying pinch points and sharp-edge risks to meet NASA's NBL safety and labeling requirements.</li>
            </ul>
          </div>

          {/* Compressed Air Engine Research Group */}
          <div className="p-6 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--surface-graphite)] space-y-3">
            <div className="flex flex-col sm:flex-row justify-between text-sm gap-1">
              <div>
                <div className="font-semibold text-[var(--text-primary)] text-base">Compressed Air Engine Research Group — Engine Design Team</div>
                <div className="text-xs text-[var(--accent)]">American Society of Mechanical Engineers at UCF</div>
              </div>
              <span className="text-xs text-[var(--text-muted)] whitespace-nowrap">September 2026 – Present</span>
            </div>
            <ul className="text-xs text-[var(--text-secondary)] pt-2 leading-relaxed space-y-1.5 list-disc list-inside">
              <li>Researched mechanical efficiency across three compressed-air engine architectures — conventional piston, opposed-piston, and Atkinson opposed-piston designs (ongoing).</li>
              <li>Supported 3D modeling and data acquisition planning to evaluate mechanical efficiency differences across varying valve timings.</li>
              <li>Contributed to an academic paper documenting findings, targeted for submission to a project showcase or research conference.</li>
            </ul>
          </div>

          {/* High-Powered Rocket Design & Flight */}
          <div className="p-6 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--surface-graphite)] space-y-3">
            <div className="flex flex-col sm:flex-row justify-between text-sm gap-1">
              <div>
                <div className="font-semibold text-[var(--text-primary)] text-base">High-Powered Rocket Design & Flight — Level 1 Certification</div>
                <div className="text-xs text-[var(--accent)]">Knights Experimental Rocketry at UCF</div>
              </div>
              <span className="text-xs text-[var(--text-muted)] whitespace-nowrap">October 2025 – November 2025</span>
            </div>
            <ul className="text-xs text-[var(--text-secondary)] pt-2 leading-relaxed space-y-1.5 list-disc list-inside">
              <li>Engineered and fabricated a high-powered rocket to NAR/TRA Level 1 standards, modeling the full assembly in SolidWorks to verify fin alignment, motor retainer fitment, and center-of-gravity/center-of-pressure margins prior to fabrication.</li>
              <li>Tuned aerodynamic stability to 1.5–2.0 calibers and executed full pre-flight readiness procedures, achieving a successful certification flight in November 2025 with a stability margin of 0.2 calibers.</li>
            </ul>
          </div>

          {/* Propulsion Team Member — Project Horizon */}
          <div className="p-6 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--surface-graphite)] space-y-3">
            <div className="flex flex-col sm:flex-row justify-between text-sm gap-1">
              <div>
                <div className="font-semibold text-[var(--text-primary)] text-base">Propulsion Team Member — Project Horizon</div>
                <div className="text-xs text-[var(--accent)]">American Institute of Aeronautics and Astronautics at UCF</div>
              </div>
              <span className="text-xs text-[var(--text-muted)] whitespace-nowrap">October 2025 – November 2025</span>
            </div>
            <ul className="text-xs text-[var(--text-secondary)] pt-2 leading-relaxed space-y-1.5 list-disc list-inside">
              <li>Calculated nozzle geometry, throat area, expansion ratio, and exit velocity to support propulsion performance analysis for a student-designed rocket targeting an altitude of 45,000 ft.</li>
              <li>Collaborated with propulsion and aerostructures subteams to validate motor assumptions, improving predicted altitude accuracy by 15%.</li>
            </ul>
          </div>

          {/* Prototype Boat Design & Fabrication */}
          <div className="p-6 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--surface-graphite)] space-y-3">
            <div className="flex flex-col sm:flex-row justify-between text-sm gap-1">
              <div>
                <div className="font-semibold text-[var(--text-primary)] text-base">Prototype Boat Design & Fabrication</div>
                <div className="text-xs text-[var(--accent)]">Engineering Design class at UCF</div>
              </div>
              <span className="text-xs text-[var(--text-muted)] whitespace-nowrap">January 2026 – March 2026</span>
            </div>
            <ul className="text-xs text-[var(--text-secondary)] pt-2 leading-relaxed space-y-1.5 list-disc list-inside">
              <li>Fabricated a prototype boat as a team-based mechanical design project, applying buoyancy, stability, and weight-distribution principles.</li>
              <li>Integrated basic electrical components into the boat's mechanical structure and collaborated with teammates to test and refine performance.</li>
              <li>Iterated hull geometry across 4 design revisions, improving stability by 15%.</li>
              <li>Reduced overall structure weight by 10% through material selection and design optimization.</li>
            </ul>
          </div>
        </section>

        {/* Experience Section */}
        <section className="space-y-4">
          <h2 className="text-lg font-bold text-[var(--text-primary)] border-b border-[var(--border-subtle)] pb-2 font-heading">
            03 // EXPERIENCE
          </h2>

          <div className="p-6 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--surface-graphite)] space-y-3">
            <div className="flex flex-col sm:flex-row justify-between text-sm gap-1">
              <div>
                <div className="font-semibold text-[var(--text-primary)] text-base">Undergraduate Research Intern</div>
                <div className="text-xs text-[var(--accent)]">Michigan State University</div>
              </div>
              <span className="text-xs text-[var(--text-muted)] whitespace-nowrap">June 2024 – July 2024</span>
            </div>
            <ul className="text-xs text-[var(--text-secondary)] pt-2 leading-relaxed space-y-1.5 list-disc list-inside">
              <li>Calibrated NaI gamma-ray detectors using Cs-137 and Co-60 reference sources, achieving calibration accuracy within 89% of expected values.</li>
              <li>Analyzed gamma-ray spectra in MATLAB to identify unknown radioisotopes from experimental detector data.</li>
              <li>Applied energy calibration and spectral analysis techniques to characterize gamma-ray measurements across 13 detector configurations.</li>
              <li>Presented experimental methods and results through a technical research poster at the Facility for Rare Isotope Beams.</li>
            </ul>
          </div>

          <div className="p-6 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--surface-graphite)] space-y-3">
            <div className="flex flex-col sm:flex-row justify-between text-sm gap-1">
              <div>
                <div className="font-semibold text-[var(--text-primary)] text-base">Founder</div>
                <div className="text-xs text-[var(--accent)]">Tampa Bay Model United Nations</div>
              </div>
              <span className="text-xs text-[var(--text-muted)] whitespace-nowrap">January 2022 – January 2026</span>
            </div>
            <ul className="text-xs text-[var(--text-secondary)] pt-2 leading-relaxed space-y-1.5 list-disc list-inside">
              <li>Founded and led a five-member team to develop and operate a local Model United Nations conference from the ground up.</li>
              <li>Raised more than $10,000 over two years through sponsorships and fundraising, increasing annual funding by 27%.</li>
            </ul>
          </div>
        </section>

        {/* Technical Skills Section */}
        <section className="p-6 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--surface-graphite)] space-y-4">
          <h2 className="text-lg font-bold text-[var(--text-primary)] border-b border-[var(--border-subtle)] pb-2 font-heading">
            04 // TECHNICAL SKILLS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-[var(--text-secondary)]">
            <div className="space-y-1">
              <div className="text-[var(--text-muted)] font-semibold mono-label">ENGINEERING SOFTWARE</div>
              <p className="text-[var(--text-primary)] font-bold">SolidWorks, MATLAB</p>
            </div>
            <div className="space-y-1">
              <div className="text-[var(--text-muted)] font-semibold mono-label">PROGRAMMING</div>
              <p className="text-[var(--text-primary)] font-bold">Python, C, Java</p>
            </div>
            <div className="space-y-1">
              <div className="text-[var(--text-muted)] font-semibold mono-label">ENGINEERING METHODS</div>
              <p className="text-[var(--text-primary)] font-bold">CAD Modeling, Engineering Analysis, Data Analysis, Technical Documentation</p>
            </div>
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
