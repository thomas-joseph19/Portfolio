export type ProjectStatus =
  | "concept"
  | "in-development"
  | "prototyping"
  | "testing"
  | "completed"
  | "archived";

export interface MediaItem {
  type: "image" | "video" | "cad-render" | "diagram";
  src: string | null;        // null => render AWAITING MEDIA placeholder
  alt: string;
  aspectRatio: string;       // e.g. "16/9", "4/3" — required even when src is null
  caption?: string;
}

export interface ProjectSection {
  id: string;                // stable id for anchor links / reordering
  heading: string;
  body: string | null;       // null => render placeholder text for this section
  media?: MediaItem[];
}

export interface Project {
  slug: string;               // URL-safe, drives /projects/[slug]
  title: string | null;
  shortDescription: string | null;
  fullOverview: string | null;
  status: ProjectStatus | null;
  role: string | null;
  timeline: string | null;
  categories: string[];       // freeform, drives filter UI — no hardcoded enum
  tags: string[];
  technologies: string[];
  skills: string[];
  featured: boolean;
  thumbnail: MediaItem;
  heroMedia: MediaItem;
  gallery: MediaItem[];
  sections: ProjectSection[]; // ordered, modular — supports objective, requirements,
                               // design process, engineering work, results, next steps, etc.
  seo: {
    title: string | null;
    description: string | null;
  };
}
