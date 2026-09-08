# Engineering Portfolio

## What This Is

A personal engineering portfolio website built using Next.js (App Router, TypeScript), Tailwind CSS, Framer Motion, GSAP, and Lenis. It features a cinematic, scroll-driven monochrome dark-mode aesthetic inspired by mechanical linkages, gears, CAD geometry, and technical interfaces, backed by a single typed source-of-truth content architecture.

## Core Value

Combines cinematic visual storytelling (7 scroll scenes on the home page) with practical usability for recruiters (immediate access to projects, resume, and contact information via persistent navigation, zero forced animation wait times, and strict content placeholder rules with zero fabricated data).

## Target Repository

- **Git Remote**: `https://github.com/thomas-joseph19/Portfolio.git`

## Current State

- **Milestone v1.0 (In Progress)**: Initializing project architecture, Next.js framework setup, design token system, structured project content schema, and GSD roadmap.

## Tech Stack

| Layer | Choice | Rationale |
|---|---|---|
| Framework | Next.js (App Router, TypeScript) | SSG/ISR for SEO, file-based routing maps cleanly to `/projects/[slug]` |
| Styling | Tailwind CSS + CSS variables (`tokens.css`) | Fast, constrains to consistent monochrome design system |
| Animation (Scroll) | Framer Motion (`useScroll`, `useTransform`) | Declarative scroll-linked transforms, React ergonomics |
| Animation (Mechanics) | GSAP + ScrollTrigger | Timeline-based mechanical choreography (Scene 05 exploded assembly) |
| Smooth Scroll | Lenis (desktop only) | Environment transforms without hijacking native scroll semantics |
| Content Architecture | Structured TypeScript files (`/content/projects/`) | Single source of truth, zero hardcoded project data in components |

## Key Constraints & Rules

1. **Zero Fabricated Data**: Never invent personal names, employers, skills, dates, or contact info. All unsupplied fields use bracketed placeholders (e.g. `[AWAITING NAME]`).
2. **Media Placeholders**: All media locations use `<MediaPlaceholder aspectRatio="..." label="AWAITING MEDIA" />` with locked CSS aspect ratio. Zero broken image tags or layout shifts.
3. **Modularity**: Adding a project requires adding exactly one file in `/content/projects/` and its export line in `index.ts`. Filter categories derived dynamically at build time.
4. **Accessibility & Reduced Motion**: Full keyboard nav, visible focus rings, WCAG AA contrast, and complete disablement of camera movements / Lenis under `prefers-reduced-motion`.
