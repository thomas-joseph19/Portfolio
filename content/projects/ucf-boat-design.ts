import { Project } from "./_schema";

export const ucfBoatDesignProject: Project = {
  slug: "ucf-boat-design",
  title: "Autonomous Pontoon Life Raft & Hydrodynamic Boat",
  shortDescription:
    "Design, 3D CAD modeling, closed-loop TI MSP430 gyro guidance integration, and hydrodynamics testing of a functional pontoon prototype boat for UCF engineering competition.",
  fullOverview:
    "Developed as part of a team-based engineering design challenge at the University of Central Florida (UCF), this project encompasses the trade study analysis, CAD modeling, closed-loop guidance programming, and physical fabrication of an autonomous pontoon life raft. The design evolved from an initial speedboat concept to a highly buoyant dual-pontoon craft utilizing recycled PET soda bottles, a triangular prism plastic hull, an internal skeletal component mounting box, and a closed-loop TI MSP430 microcontroller coupled with an MPU 6050 gyroscope for active heading correction.",
  status: "completed",
  role: "Mechanical Design & Fabrication Team Lead",
  timeline: "Spring 2026",
  categories: ["Mechanical Engineering", "CAD Design", "Control Systems", "Prototyping"],
  tags: ["Pontoon Design", "Onshape CAD", "Closed-Loop Control", "TI MSP430", "Hydrodynamics", "UCF"],
  technologies: [
    "SolidWorks / Onshape (CAD)",
    "TI MSP430 Microcontroller",
    "MPU 6050 Gyroscope",
    "ESC & Steering Servo",
    "Closed-Loop Control",
    "3D Printing & Plastic Fabrication",
  ],
  skills: ["SOLIDWORKS", "MATLAB", "KINEMATICS", "Finite-Element-Analysis"],
  featured: true,
  thumbnail: {
    type: "image",
    src: "/projects/ucf-boat-design/final-boat.png",
    alt: "Final Autonomous Pontoon Boat Prototype",
    aspectRatio: "4/3",
    objectFit: "contain",
    caption: "Completed Autonomous Pontoon Life Raft Prototype ready for UCF competition race day.",
  },
  heroMedia: {
    type: "image",
    src: "/projects/ucf-boat-design/final-boat.png",
    alt: "Completed Pontoon Life Raft Prototype",
    aspectRatio: "16/9",
    objectFit: "contain",
    caption: "Final pontoon life raft prototype featuring twin PET bottle pontoons, front-mounted electronics, and rear counterweight.",
  },
  gallery: [
    {
      type: "cad-render",
      src: "/projects/ucf-boat-design/cad-model.png",
      alt: "3D CAD Model of Pontoon Boat in Onshape",
      aspectRatio: "16/9",
      objectFit: "contain",
      caption: "3D CAD assembly view of the pontoon boat in Onshape showing triangular prism hull geometry and twin pontoons.",
    },
  ],
  sections: [
    {
      id: "brainstorming",
      heading: "01 // BRAINSTORMING & HULL TRADE STUDY",
      body: "Evaluated two core hull architectures: a high-speed mono-hull vs. a dual-pontoon life raft. While a speedboat offered raw velocity, it presented high risk of water ingress due to low freeboard displacement. The team selected the dual-pontoon configuration utilizing recycled 2-liter PET soda bottles coupled to a central sealed hull. Material trade studies favored 3D printed plastic over porous wood due to superior water resistance, low mass density, and ease of manufacturing.",
    },
    {
      id: "hydrodynamics",
      heading: "02 // HYDRODYNAMICS & WEIGHT REDESIGN",
      body: "Initial physical mockups revealed severe rear-heavy trim when electronics were mounted near the propeller shaft. To restore hydrodynamic balance, electronics were relocated to the front-left section of the pontoon and balanced with a precision rear counterweight box. The main hull geometry was overhauled from a cuboid shape to a streamlined triangular prism, lowering material mass, reducing hydrodynamic drag, and positioning the pontoons beneath the hull for optimal center of buoyancy.",
      media: [
        {
          type: "cad-render",
          src: "/projects/ucf-boat-design/cad-model.png",
          alt: "3D CAD Assembly Model",
          aspectRatio: "16/9",
          objectFit: "contain",
          caption: "Onshape 3D CAD parametric layout of the updated triangular prism hull and internal skeletal mounting.",
        },
      ],
    },
    {
      id: "propulsion",
      heading: "03 // PROPULSION & HARDWARE INTEGRATION",
      body: "Selected stock ESC, motor, battery, and steering servo components for high system reliability and thermal compatibility. Electronics were encased inside a 4x4 inch lidded Tupperware container with internal skeletal mounting. The main motor was coupled directly to the rear propeller shaft pointed below horizontal. The rudder was linked to the steering servo using a V-bend shock-absorbing metal wire to insulate the servo gear train from hydrodynamic impact.",
    },
    {
      id: "guidance",
      heading: "04 // CLOSED-LOOP GUIDANCE & GYRO CONTROL",
      body: "Implemented closed-loop heading feedback using a TI MSP430 microcontroller paired with an MPU 6050 gyroscope sensor. The closed-loop controller continuously adjusted rudder positioning to counteract wave ripples and wake collisions from adjacent race boats, smoothing control inputs to eliminate steering oscillation.",
    },
    {
      id: "results",
      heading: "05 // RACE DAY PERFORMANCE & LESSONS LEARNED",
      body: "Achieved 2 course checkpoints on the initial run at the UCF competition pond, outperforming baseline predictions. Key engineering takeaways included battery discharge management under repeated testing, counterweight trimming for level trim, closed-loop gyro calibration, and working ahead on microcontroller hardware compatibility.",
    },
  ],
  seo: {
    title: "Autonomous Pontoon Boat Design — Thomas Joseph Portfolio",
    description: "Functional prototype boat and autonomous pontoon life raft engineered by Thomas Joseph for UCF competition.",
  },
};
