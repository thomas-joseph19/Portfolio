import { Project } from "./_schema";

export const hprL1RocketProject: Project = {
  slug: "hpr-l1-rocket",
  title: "High-Powered Rocketry Level 1 (HPR L1) Certification Rocket",
  shortDescription:
    "Design, structural fabrication, motor cage integration, recovery system rigging, and certified flight testing of a Level 1 High-Powered Rocket built with Knights Experimental Rocketry (KXR) at UCF.",
  fullOverview:
    "Developed as part of Knights Experimental Rocketry (KXR) at the University of Central Florida (UCF), this project encompasses the end-to-end mechanical assembly, aerodynamic stability tuning, and flight readiness certification of a High-Powered Rocket (HPR). The rocket was built in strict compliance with NAR (National Association of Rocketry) / TRA (Tripoli Rocketry Association) Level 1 standards, featuring dual forward centering rings, wood glue structural filleting, calibrated clay ballast for 1.5–2.0 caliber stability, dual-bolt nosecone securing, and quick-link recovery rigging.",
  status: "completed",
  role: "Lead Mechanical / Rocketry Builder",
  timeline: "November 2025",
  categories: ["Aerospace Engineering", "Rocketry", "Manufacturing"],
  tags: ["High-Powered Rocketry", "SolidWorks", "KXR UCF", "NAR/TRA Level 1"],
  technologies: ["SolidWorks (CAD Modeling)", "Wood Glue Filleting", "Dual Centering Rings", "Recovery Rigging"],
  skills: ["SOLIDWORKS", "MATLAB", "KINEMATICS", "Finite-Element-Analysis"],
  featured: true,
  thumbnail: {
    type: "image",
    src: "/projects/hpr-l1-rocket/completed-rocket.jpg",
    alt: "Thomas Joseph next to the completed Level 1 High-Powered Rocket",
    aspectRatio: "4/5",
    objectFit: "contain",
    caption: "Completed High-Powered Rocketry Level 1 Certification Rocket alongside Thomas Joseph.",
  },
  heroMedia: {
    type: "image",
    src: "/projects/hpr-l1-rocket/completed-rocket.jpg",
    alt: "Thomas Joseph with completed HPR Level 1 Certification Rocket",
    aspectRatio: "4/5",
    objectFit: "contain",
    caption: "Fully painted and assembled HPR Level 1 Rocket prior to NAR/TRA certification launch.",
  },
  gallery: [
    {
      type: "cad-render",
      src: "/projects/hpr-l1-rocket/solidworks-assembly.jpg",
      alt: "SolidWorks 3D CAD Assembly of the HPR L1 Rocket",
      aspectRatio: "4/3",
      caption: "SolidWorks 3D CAD model showcasing internal motor cage, centering rings, and fin tabs.",
    },
  ],
  sections: [
    {
      id: "objective",
      heading: "01 // OBJECTIVE & CERTIFICATION REQUIREMENTS",
      body: "The primary objective of this project was to engineer, fabricate, and launch a High-Powered Rocket to achieve Level 1 Certification under National Association of Rocketry (NAR) / Tripoli Rocketry Association (TRA) guidelines. Built through Knights Experimental Rocketry (KXR @ UCF), the airframe and motor assembly were required to withstand high thrust-to-weight ratios, maintain aerodynamic stability across motor burnout, and execute flawless parachute recovery.",
    },
    {
      id: "motor-cage",
      heading: "02 // MOTOR CAGE & AEROSTRUCTURE FABRICATION",
      body: "Engineered the propulsion core using dual forward centering rings and an aft centering ring flush with the bottom of the motor tube. Wood glue structural filleting was applied in multiple liberal coats across all joints to reinforce motor cage rigidity. Precise fin slots were cut into the body tube using custom alignment jigs and exacto technique. Fins were locked into position with superglue and reinforced with multi-pass wood glue fillets for aerodynamic surface integration.",
    },
    {
      id: "recovery-ballast",
      heading: "03 // RECOVERY RIGGING & AERODYNAMIC BALLAST",
      body: "Rigged a <=12 ft high-strength shock cord anchored to the forward centering ring via an eyebolt with double nuts and locknut assembly, sealed with superglue threads. Aerodynamic stability was tuned to 1.5–2.0 calibers by compacting calibrated clay ballast into the nosecone tip. The nosecone shoulder was secured with three 120°-spaced bolt fasteners. Attached a sonic tracker (screamer) and quick-link parachute loop positioned to ensure safe airframe separation.",
    },
    {
      id: "simulations-cad",
      heading: "04 // SOLIDWORKS CAD & STRUCTURAL MODELING",
      body: "Designed full parametric 3D CAD assemblies in SolidWorks to verify component fitment, fin tab slot alignment, motor retainer Z-clips, and C.G./C.P. margins prior to material cutting and assembly.",
      media: [
        {
          type: "cad-render",
          src: "/projects/hpr-l1-rocket/solidworks-assembly.jpg",
          alt: "SolidWorks Rocket Assembly View",
          aspectRatio: "16/9",
          caption: "SolidWorks CAD assembly cross-section detailing internal motor retainer Z-clips and shock cord eyebolt.",
        },
      ],
    },
    {
      id: "flight-readiness",
      heading: "05 // FLIGHT READINESS REVIEW & LAUNCH PROCEDURES",
      body: "Executed strict pre-flight protocols including SRA launch card completion, delay drilling, ignition wiring (3/4\" copper wire strip, full motor tip insertion, alligator clip isolation), continuity verification, and structural inspections (fin security, rail button alignment, nosecone fitment, and Z-clip motor retention). Certification flight successfully completed in November 2025.",
    },
  ],
  seo: {
    title: "High-Powered Rocketry Level 1 Certification — Thomas Joseph Portfolio",
    description: "High-Powered Rocketry Level 1 Certification rocket designed and built by Thomas Joseph with Knights Experimental Rocketry (KXR) at UCF.",
  },
};
