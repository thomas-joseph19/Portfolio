import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllProjects, getProjectBySlug } from "@/lib/content";
import { constructMetadata } from "@/lib/seo";
import { MediaPlaceholder } from "@/components/media/MediaPlaceholder";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { TagPill } from "@/components/ui/TagPill";
import { ProjectSectionRenderer } from "@/components/project/ProjectSectionRenderer";
import { Button } from "@/components/ui/Button";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return constructMetadata({ title: "Project Not Found" });
  }

  return constructMetadata({
    title: project.seo.title || project.title || "[AWAITING PROJECT TITLE]",
    description: project.seo.description || project.shortDescription || "[AWAITING PROJECT DESCRIPTION]",
    path: `/projects/${project.slug}`,
  });
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      {/* Breadcrumb & Navigation Back */}
      <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-4 font-mono text-xs text-[var(--text-secondary)]">
        <Link href="/projects" className="hover:text-[var(--accent)] transition-colors focus-ring p-1 rounded-[var(--radius-sm)]">
          ← BACK TO PROJECTS ARCHIVE
        </Link>
        <StatusBadge status={project.status} />
      </div>

      {/* Header Info */}
      <header className="space-y-6">
        <div className="space-y-3">
          <div className="mono-label text-xs tracking-widest text-[var(--accent)]">
            PROJECT_SPECIFICATION // {project.slug.toUpperCase()}
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[var(--text-primary)] font-heading">
            {project.title || "[AWAITING PROJECT TITLE]"}
          </h1>
          <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
            {project.shortDescription || "[AWAITING PROJECT DESCRIPTION]"}
          </p>
        </div>

        {/* Technical Metadata Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-6 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--surface-graphite)] font-mono text-xs">
          <div>
            <span className="text-[var(--text-muted)] block">ROLE</span>
            <span className="font-semibold text-[var(--text-primary)]">{project.role || "[AWAITING ROLE]"}</span>
          </div>
          <div>
            <span className="text-[var(--text-muted)] block">TIMELINE</span>
            <span className="font-semibold text-[var(--text-primary)]">{project.timeline || "[AWAITING TIMELINE]"}</span>
          </div>
          <div>
            <span className="text-[var(--text-muted)] block">CATEGORIES</span>
            <span className="font-semibold text-[var(--text-primary)]">{project.categories.join(", ") || "[UNSET]"}</span>
          </div>
        </div>

        {/* Tags & Technologies */}
        <div className="flex flex-wrap items-center gap-2">
          {project.technologies.map((tech) => (
            <TagPill key={tech} label={tech} variant="accent" size="sm" />
          ))}
          {project.tags.map((tag) => (
            <TagPill key={tag} label={tag} variant="default" size="sm" />
          ))}
        </div>
      </header>

      {/* Hero Media Placeholder */}
      <div className="w-full">
        <MediaPlaceholder item={project.heroMedia} className="shadow-xl" />
      </div>

      {/* Full Overview Section */}
      {project.fullOverview && (
        <section className="p-8 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--bg-elevated)] space-y-4">
          <h2 className="text-xl font-bold text-[var(--text-primary)] font-heading">
            SYSTEM OVERVIEW & DESIGN INTENT
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed font-mono whitespace-pre-line">
            {project.fullOverview}
          </p>
        </section>
      )}

      {/* Modular Project Sections */}
      <ProjectSectionRenderer sections={project.sections} />

      {/* Media Gallery Section */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="space-y-6 pt-6 border-t border-[var(--border-subtle)]">
          <h2 className="text-xl font-bold text-[var(--text-primary)] font-heading">
            ENGINEERING MEDIA GALLERY
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.gallery.map((galleryItem, idx) => (
              <MediaPlaceholder key={idx} item={galleryItem} />
            ))}
          </div>
        </section>
      )}

      {/* Next/Prev Navigation */}
      <footer className="pt-12 border-t border-[var(--border-subtle)] flex items-center justify-between">
        <Button href="/projects" variant="secondary" size="md">
          ← RETURN TO ARCHIVE
        </Button>
        <Button href="/contact" variant="outline" size="md">
          INQUIRE ABOUT THIS PROJECT →
        </Button>
      </footer>
    </article>
  );
}
