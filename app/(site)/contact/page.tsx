import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Contact",
  description: "Direct contact details and communication channels for Thomas Joseph.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20 space-y-12">
      <header className="space-y-4 border-b border-[var(--border-subtle)] pb-8 text-center sm:text-left">
        <div className="mono-label text-xs tracking-widest text-[var(--accent)]">
          COMMUNICATION // DIRECT_INTERFACE
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[var(--text-primary)] font-heading tracking-tight">
          CONTACT THOMAS JOSEPH
        </h1>
        <p className="text-sm sm:text-base text-[var(--text-secondary)] max-w-xl leading-relaxed">
          GET IN TOUCH FOR ENGINEERING OPPORTUNITIES, RESEARCH COLLABORATIONS, AND TECHNICAL INQUIRIES.
        </p>
      </header>

      {/* Direct Contact Options Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Email */}
        <a
          href="mailto:thomas.joseph19@outlook.com"
          className="p-6 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--surface-graphite)] space-y-3 flex flex-col justify-between hover:border-[var(--accent)] transition-colors group"
        >
          <div className="space-y-2">
            <div className="mono-label text-[11px] text-[var(--accent)]">01 // EMAIL</div>
            <div className="text-xs font-semibold text-[var(--text-primary)] font-mono break-all group-hover:text-[var(--accent)]">
              thomas.joseph19@outlook.com
            </div>
          </div>
          <div className="pt-4 border-t border-[var(--border-subtle)] text-[10px] font-mono text-[var(--text-muted)]">
            SEND EMAIL →
          </div>
        </a>

        {/* Phone */}
        <a
          href="tel:8134517308"
          className="p-6 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--surface-graphite)] space-y-3 flex flex-col justify-between hover:border-[var(--accent)] transition-colors group"
        >
          <div className="space-y-2">
            <div className="mono-label text-[11px] text-[var(--accent)]">02 // PHONE</div>
            <div className="text-sm font-semibold text-[var(--text-primary)] font-mono group-hover:text-[var(--accent)]">
              813-451-7308
            </div>
          </div>
          <div className="pt-4 border-t border-[var(--border-subtle)] text-[10px] font-mono text-[var(--text-muted)]">
            CALL / TEXT →
          </div>
        </a>

        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/thomas-joseph"
          target="_blank"
          rel="noopener noreferrer"
          className="p-6 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--surface-graphite)] space-y-3 flex flex-col justify-between hover:border-[var(--accent)] transition-colors group"
        >
          <div className="space-y-2">
            <div className="mono-label text-[11px] text-[var(--accent)]">03 // LINKEDIN</div>
            <div className="text-xs font-semibold text-[var(--text-primary)] font-mono break-all group-hover:text-[var(--accent)]">
              in/thomas-joseph
            </div>
          </div>
          <div className="pt-4 border-t border-[var(--border-subtle)] text-[10px] font-mono text-[var(--text-muted)]">
            VIEW LINKEDIN →
          </div>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/thomas-joseph19"
          target="_blank"
          rel="noopener noreferrer"
          className="p-6 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--surface-graphite)] space-y-3 flex flex-col justify-between hover:border-[var(--accent)] transition-colors group"
        >
          <div className="space-y-2">
            <div className="mono-label text-[11px] text-[var(--accent)]">04 // GITHUB</div>
            <div className="text-xs font-semibold text-[var(--text-primary)] font-mono break-all group-hover:text-[var(--accent)]">
              thomas-joseph19
            </div>
          </div>
          <div className="pt-4 border-t border-[var(--border-subtle)] text-[10px] font-mono text-[var(--text-muted)]">
            VIEW GITHUB →
          </div>
        </a>
      </div>

      {/* Technical Status Indicator Box */}
      <div className="p-6 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-elevated)] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[var(--text-secondary)]">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent)] animate-pulse" />
          <span>LOCATION: TAMPA, FL • UCF MAY 2029</span>
        </div>
        <div className="text-[var(--accent)] font-semibold">
          STATUS: OPEN FOR ENGINEERING INTERNSHIPS & OPPORTUNITIES
        </div>
      </div>
    </div>
  );
}
