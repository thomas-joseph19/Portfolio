import { Project } from "./_schema";

export const planetaryGearProject: Project = {
  slug: "planetary-gear",
  title: "[AWAITING PROJECT TITLE]",
  shortDescription: "[AWAITING PROJECT SHORT DESCRIPTION]",
  fullOverview: "[AWAITING PROJECT FULL OVERVIEW]",
  status: "prototyping",
  role: "[AWAITING ROLE]",
  timeline: "[AWAITING TIMELINE]",
  categories: ["Mechanical Engineering", "CAD Design", "Powertrain"],
  tags: ["SolidWorks", "Gearbox", "Kinematics"],
  technologies: ["SolidWorks", "FEA Analysis", "GD&T"],
  skills: ["Mechanical Design", "Tolerance Stackup", "Prototyping"],
  featured: true,
  thumbnail: {
    type: "cad-render",
    src: null,
    alt: "[AWAITING THUMBNAIL MEDIA ALT TEXT]",
    aspectRatio: "16/9",
    caption: "[AWAITING THUMBNAIL CAPTION]",
  },
  heroMedia: {
    type: "cad-render",
    src: null,
    alt: "[AWAITING HERO MEDIA ALT TEXT]",
    aspectRatio: "16/9",
    caption: "[AWAITING HERO MEDIA CAPTION]",
  },
  gallery: [
    {
      type: "cad-render",
      src: null,
      alt: "[AWAITING GALLERY ITEM 1 ALT TEXT]",
      aspectRatio: "4/3",
      caption: "[AWAITING GALLERY ITEM 1 CAPTION]",
    },
    {
      type: "diagram",
      src: null,
      alt: "[AWAITING GALLERY ITEM 2 ALT TEXT]",
      aspectRatio: "4/3",
      caption: "[AWAITING GALLERY ITEM 2 CAPTION]",
    },
  ],
  sections: [
    {
      id: "objective",
      heading: "Objective & Problem Statement",
      body: "[AWAITING OBJECTIVE & PROBLEM STATEMENT]",
      media: [
        {
          type: "diagram",
          src: null,
          alt: "[AWAITING OBJECTIVE DIAGRAM ALT TEXT]",
          aspectRatio: "16/9",
        },
      ],
    },
    {
      id: "requirements",
      heading: "Requirements & Constraints",
      body: "[AWAITING REQUIREMENTS & CONSTRAINTS: MASS BUDGET, FOS, POWER RATING]",
    },
    {
      id: "design-process",
      heading: "Design Process & Kinematic Analysis",
      body: "[AWAITING DESIGN PROCESS & KINEMATIC ANALYSIS]",
    },
    {
      id: "engineering-work",
      heading: "Engineering Work & CAD Modeling",
      body: "[AWAITING ENGINEERING WORK DETAILS]",
      media: [
        {
          type: "cad-render",
          src: null,
          alt: "[AWAITING CAD EXPLODED VIEW ALT TEXT]",
          aspectRatio: "16/9",
        },
      ],
    },
    {
      id: "results",
      heading: "Results & Next Steps",
      body: "[AWAITING RESULTS & NEXT STEPS]",
    },
  ],
  seo: {
    title: "[AWAITING PROJECT TITLE] — Engineering Portfolio",
    description: "[AWAITING PROJECT DESCRIPTION FOR SEO]",
  },
};
