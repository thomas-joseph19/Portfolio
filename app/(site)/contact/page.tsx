import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Contact",
  description: "Direct contact channels and communication interface.",
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
          [AWAITING CONTACT HEADLINE]
        </h1>
        <p className="text-sm sm:text-base text-[var(--text-secondary)] max-w-xl leading-relaxed">
          [AWAITING CONTACT DESCRIPTION]
        </p>
      </header>

      {/* Direct Contact Options Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Email */}
        <div className="p-8 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--surface-graphite)] space-y-3 flex flex-col justify-between hover:border-[var(--accent)] transition-colors">
          <div className="space-y-2">
            <div className="mono-label text-[11px] text-[var(--accent)]">01 // EMAIL</div>
            <div className="text-sm font-semibold text-[var(--text-primary)] font-mono">
              [AWAITING EMAIL ADDRESS]
            </div>
          </div>
          <div className="pt-4 border-t border-[var(--border-subtle)] text-[11px] font-mono text-[var(--text-muted)]">
            DIRECT EMAIL COMMUNICATION
          </div>
        </div>

        {/* LinkedIn */}
        <div className="p-8 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--surface-graphite)] space-y-3 flex flex-col justify-between hover:border-[var(--accent)] transition-colors">
          <div className="space-y-2">
            <div className="mono-label text-[11px] text-[var(--accent)]">02 // LINKEDIN</div>
            <div className="text-sm font-semibold text-[var(--text-primary)] font-mono">
              [AWAITING LINKEDIN PROFILE]
            </div>
          </div>
          <div className="pt-4 border-t border-[var(--border-subtle)] text-[11px] font-mono text-[var(--text-muted)]">
            PROFESSIONAL NETWORK
          </div>
        </div>

        {/* GitHub */}
        <div className="p-8 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--surface-graphite)] space-y-3 flex flex-col justify-between hover:border-[var(--accent)] transition-colors">
          <div className="space-y-2">
            <div className="mono-label text-[11px] text-[var(--accent)]">03 // GITHUB</div>
            <div className="text-sm font-semibold text-[var(--text-primary)] font-mono">
              [AWAITING GITHUB PROFILE]
            </div>
          </div>
          <div className="pt-4 border-t border-[var(--border-subtle)] text-[11px] font-mono text-[var(--text-muted)]">
            CODE REPOSITORIES & OPEN SOURCE
          </div>
        </div>
      </div>

      {/* Technical Status Indicator Box */}
      <div className="p-6 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-elevated)] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[var(--text-secondary)]">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent)] animate-pulse" />
          <span>AVAILABILITY STATUS: OPEN FOR ENGINEERING OPPORTUNITIES</span>
        </div>
        <div className="text-[var(--text-muted)]">
          RESPONSE_TIME: ~24 HOURS
        </div>
      </div>
    </div>
  );
}
