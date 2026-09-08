# Roadmap — Engineering Portfolio

## Phase 1: Project Initialization & Foundation
- [ ] Initialize Next.js (App Router, TypeScript) in `portfolio/` project folder.
- [ ] Setup Tailwind CSS and design tokens in `/styles/tokens.css`.
- [ ] Configure animation dependencies (Framer Motion, GSAP + ScrollTrigger, Lenis).
- [ ] Implement content data architecture (`/content/projects/_schema.ts`, `index.ts`, `/lib/content.ts`).
- [ ] Build reusable `MediaPlaceholder` component with locked aspect ratio.

## Phase 2: Navigation, Layout, & Motion Infrastructure
- [ ] Build persistent Header/Nav, Footer, Skip-to-content link, and UI components (`TagPill`, `StatusBadge`, `Button`).
- [ ] Create `useReducedMotionSafe` hook and Lenis smooth scroll provider.
- [ ] Implement site layout wrapper with global providers and dark-mode styling.

## Phase 3: Home Page — 7 Scroll Scenes
- [ ] Scene 01 (Initialization): Abstract geometry appearance with `[AWAITING INTRODUCTION LABEL]`.
- [ ] Scene 02 (Identity): `[AWAITING NAME]` and `[AWAITING PROFESSIONAL TITLE]`.
- [ ] Scene 03 (Engineering Statement): Cinematic statement layout with `[AWAITING ENGINEERING STATEMENT]`.
- [ ] Scene 04 (Engineering Profile): Technical interface with discipline and skills placeholders.
- [ ] Scene 05 (Project Transition): Exploded mechanical assembly separation/rotation choreography.
- [ ] Scene 06 (Featured Projects): Emerging project cards linking to dedicated detail pages.
- [ ] Scene 07 (Continuation): Actionable pathways to Projects Archive, Resume, and Contact pages.

## Phase 4: Dynamic Project Detail Pages & Architecture Verification
- [ ] Build `/app/(site)/projects/[slug]/page.tsx` with dynamic static params generation (`generateStaticParams`).
- [ ] Build `ProjectSectionRenderer` for custom modular project sections (objective, requirements, CAD, results).
- [ ] Verify content modularity rule by adding/removing a test project file in `/content/projects/`.

## Phase 5: Projects Archive, About, Resume, & Contact Pages
- [ ] Projects Archive (`/app/(site)/projects/page.tsx`): Spatial view + scannable index with dynamic category filtering.
- [ ] About Page (`/app/(site)/about/page.tsx`): Engineering geometry & CAD coordinate system layout with placeholders.
- [ ] Resume Page (`/app/(site)/resume/page.tsx`): Web-readable resume sections and download placeholder.
- [ ] Contact Page (`/app/(site)/contact/page.tsx`): Headline, description, email/LinkedIn/GitHub placeholders.

## Phase 6: Accessibility, Performance, & Git Deployment
- [ ] Verify accessibility checklist (skip link, keyboard focus rings, landmark tags, reduced motion fallback, WCAG contrast).
- [ ] Test performance budget (Lighthouse mobile >= 85 performance, >= 95 accessibility).
- [ ] Initialize Git repository in `portfolio/` connected to `https://github.com/thomas-joseph19/Portfolio.git` and commit complete project.
