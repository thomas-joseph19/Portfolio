import { constructMetadata } from "@/lib/seo";
import { getAllProjects, getAllCategories } from "@/lib/content";
import { ProjectArchiveView } from "@/components/project/ProjectArchiveView";

export const metadata = constructMetadata({
  title: "Projects Archive / Engineering Bay",
  description: "Browse the complete archive of engineered systems, CAD models, and technical case studies.",
  path: "/projects",
});

export default function ProjectsPage() {
  const projects = getAllProjects();
  const categories = getAllCategories();

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 space-y-8">
      <header className="space-y-4 border-b border-[var(--border-subtle)] pb-8">
        <div className="mono-label text-xs tracking-widest text-[var(--accent)]">
          ENGINEERING_BAY // ARCHIVE_INDEX
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[var(--text-primary)] font-heading">
          PROJECT ARCHIVE & CASE STUDIES
        </h1>
        <p className="text-sm sm:text-base text-[var(--text-secondary)] max-w-2xl leading-relaxed">
          SPATIAL ARCHIVE ENVIRONMENT. FILTER BY DYNAMIC CATEGORIES DERIVED AT BUILD TIME FROM METADATA SOURCE OF TRUTH.
        </p>
      </header>

      <ProjectArchiveView projects={projects} categories={categories} />
    </div>
  );
}
