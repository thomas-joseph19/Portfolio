import { projects, Project } from "@/content/projects";

export function getAllProjects(): Project[] {
  return projects;
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

/**
 * Derive all unique categories across all projects dynamically at build time.
 * Never hardcoded.
 */
export function getAllCategories(): string[] {
  const categorySet = new Set<string>();
  projects.forEach((p) => {
    p.categories.forEach((cat) => categorySet.add(cat));
  });
  return Array.from(categorySet).sort();
}

/**
 * Derive all unique tags across all projects dynamically at build time.
 */
export function getAllTags(): string[] {
  const tagSet = new Set<string>();
  projects.forEach((p) => {
    p.tags.forEach((tag) => tagSet.add(tag));
  });
  return Array.from(tagSet).sort();
}

/**
 * Derive all unique technologies across all projects dynamically at build time.
 */
export function getAllTechnologies(): string[] {
  const techSet = new Set<string>();
  projects.forEach((p) => {
    p.technologies.forEach((tech) => techSet.add(tech));
  });
  return Array.from(techSet).sort();
}
