# Requirements — Engineering Portfolio

## 1. Tech Stack & Architecture
- **[REQ-STACK-01]** Framework: Next.js (App Router, TypeScript) with static export capability and `generateStaticParams` for dynamic `/projects/[slug]` routes.
- **[REQ-STACK-02]** Styling: Tailwind CSS + CSS variables design system defined in `/styles/tokens.css`.
- **[REQ-STACK-03]** Animation: Framer Motion (`useScroll`, `useTransform`) for scroll scenes, GSAP + ScrollTrigger for Scene 05 mechanical choreography, and Lenis smooth scroll on desktop.
- **[REQ-STACK-04]** 3D / WebGL Rule: 2D SVG/CSS transforms prioritized first; 3D / R3F permitted only if 2D proves visually insufficient and must be code-split / lazy-loaded.

## 2. Project Data Architecture & Content System
- **[REQ-DATA-01]** Typed Source of Truth: All project data defined in `/content/projects/` using `_schema.ts` (`Project`, `ProjectStatus`, `MediaItem`, `ProjectSection`).
- **[REQ-DATA-02]** Modularity Rule: Adding a project = adding one file in `/content/projects/` + exporting it in `index.ts`. No nav, page, router, or filter code touched.
- **[REQ-DATA-03]** Dynamic Categories: Filter categories, tags, technologies, and skills derived dynamically at build time from project metadata.
- **[REQ-DATA-04]** MediaPlaceholder: Reusable `<MediaPlaceholder aspectRatio="..." label="AWAITING MEDIA" />` component locking aspect-ratio via CSS with graphite surface and subtle borders.
- **[REQ-DATA-05]** Strict Placeholders: Zero fabricated personal info, achievements, dates, or skills. All unsupplied values use bracketed placeholders (e.g. `[AWAITING NAME]`). Zero Lorem Ipsum.

## 3. Design Tokens & Aesthetic System
- **[REQ-DESIGN-01]** Palette: Monochrome dark mode (`--bg-primary: #0a0a0b`, `--bg-elevated: #131315`, `--surface-graphite: #1c1c1f`, `--border-subtle: #2a2a2e`, `--text-primary: #f2f2f0`, `--text-secondary: #9a9a9e`, desaturated cool cyan accent `--accent: #6fb3c2` used sparingly).
- **[REQ-DESIGN-02]** Typography: Technical sans-serif typography (`--font-heading`, `--font-body`) with restrained technical label formatting (`PROJECT_01`).

## 4. Home Page Seven Scroll Scenes
- **[REQ-SCENE-01]** Scene 01 (Initialization): Near-black, abstract geometry, `[AWAITING INTRODUCTION LABEL]`.
- **[REQ-SCENE-02]** Scene 02 (Identity): `[AWAITING NAME]`, `[AWAITING PROFESSIONAL TITLE]`, subtle geometry motion.
- **[REQ-SCENE-03]** Scene 03 (Engineering Statement): Cinematic statement beat `[AWAITING ENGINEERING STATEMENT]`.
- **[REQ-SCENE-04]** Scene 04 (Engineering Profile): Technical interface (`[AWAITING DISCIPLINE]`, `[AWAITING SECONDARY DISCIPLINE]`, `[AWAITING ENGINEERING FOCUS]`, `[AWAITING SKILLS]`).
- **[REQ-SCENE-05]** Scene 05 (Project Transition): Exploded mechanical assembly separating/rotating/expanding into project modules.
- **[REQ-SCENE-06]** Scene 06 (Featured Projects): Emerging modules with title, description, media placeholder, tags, linking to detail pages.
- **[REQ-SCENE-07]** Scene 07 (Continuation): Clear navigation pathways to Projects Archive, Resume, and Contact.

## 5. Core Pages & Routing
- **[REQ-PAGE-01]** Persistent Header/Nav: Home, About, Projects, Resume, Contact, monogram logo. Reachable without animation delay.
- **[REQ-PAGE-02]** About Page: Technical CAD grid coordinate aesthetic with placeholder sections for General Info, Education, Interests, Skills, and Additional Info.
- **[REQ-PAGE-03]** Projects Archive Page: Spatial environment / index view with dynamic category filter bar and project cards.
- **[REQ-PAGE-04]** Dedicated Project Page: `/projects/[slug]` rendering overview, requirements/constraints (mass, FOS, power budget), design process, engineering work, gallery, and results.
- **[REQ-PAGE-05]** Resume Page: Web-readable resume format + downloadable resume link placeholder `[AWAITING RESUME FILE]`.
- **[REQ-PAGE-06]** Contact Page: Headline, description, email/LinkedIn/GitHub fields (bracketed placeholders).

## 6. Accessibility & Performance Budget
- **[REQ-A11Y-01]** Keyboard Navigation: Skip-to-content link, full keyboard reachability, custom visible focus rings.
- **[REQ-A11Y-02]** Reduced Motion: `useReducedMotionSafe` hook disabling camera movements, parallax, and Lenis smooth scroll under `prefers-reduced-motion`.
- **[REQ-A11Y-03]** Landmarks & ARIA: `<nav>`, `<main>`, `<footer>` present on every page; decorative SVGs `aria-hidden="true"`.
- **[REQ-PERF-01]** Lighthouse Budget: Performance ≥ 85, Accessibility ≥ 95, SEO ≥ 95 on mobile throttled profiles.
- **[REQ-PERF-02]** Zero Layout Shift: Enforced structurally by aspect-ratio media containers.
