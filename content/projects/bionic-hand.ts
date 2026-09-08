import { Project } from "./_schema";

export const bionicHandProject: Project = {
  slug: "bionic-hand",
  title: "Teleoperated Biomimetic Arm & Glove-Controlled Bionic Hand",
  shortDescription:
    "Design, 3D CAD kinematic assembly, and Arduino motor control of a 7-servo, stepper-driven teleoperated biomimetic arm and articulated bionic hand.",
  fullOverview:
    "An ongoing mechatronics and biomechatronics personal project engineering a teleoperated bionic arm and multi-articulated hand system. Designed to mirror human arm kinematics, the system incorporates a base yaw rotation axis (stepper motor), an articulated elbow, forearm section, wrist joint, and multi-digit fingers actuated by 7 precision servo motors. Motion is commanded in real time via a custom sensor-laden teleoperation glove interfaced with an Arduino microcontroller.",
  status: "in-development",
  role: "Mechatronics Designer & Developer",
  timeline: "Ongoing / 2026",
  categories: ["Robotics", "Mechatronics", "3D Printing", "CAD Design"],
  tags: [
    "Bionic Hand",
    "SolidWorks CAD",
    "Arduino",
    "Servo Motors",
    "Stepper Motor",
    "Teleoperation Glove",
    "Kinematics",
  ],
  technologies: [
    "SolidWorks (3D CAD Modeling)",
    "Arduino Microcontroller",
    "7x Servo Motors",
    "High-Torque Stepper Motor",
    "Sensor-Laden Control Glove",
    "FDM 3D Printing & Custom Linkages",
  ],
  skills: ["SOLIDWORKS", "MATLAB", "KINEMATICS", "Finite-Element-Analysis"],
  featured: true,
  thumbnail: {
    type: "cad-render",
    src: "/projects/bionic-hand/cad-model.png",
    alt: "3D CAD Model of Teleoperated Bionic Arm & Hand",
    aspectRatio: "16/9",
    objectFit: "contain",
    caption: "3D CAD assembly layout showing base rotation, elbow joint, forearm, wrist, and 7-servo bionic hand mechanism.",
  },
  heroMedia: {
    type: "cad-render",
    src: "/projects/bionic-hand/cad-model.png",
    alt: "3D CAD Model of Bionic Hand Assembly",
    aspectRatio: "16/9",
    objectFit: "contain",
    caption: "Parametric CAD assembly model of the biomimetic arm and glove-controlled hand architecture.",
  },
  gallery: [
    {
      type: "cad-render",
      src: "/projects/bionic-hand/cad-model.png",
      alt: "Exploded 3D CAD View of Bionic Arm Joints",
      aspectRatio: "16/9",
      objectFit: "contain",
      caption: "Exploded 3D CAD view detailing servo motor housing, cable tendon routing, and joint pivots.",
    },
  ],
  sections: [
    {
      id: "kinematics",
      heading: "01 // SYSTEM OVERVIEW & KINEMATIC FREEDOM",
      body: "Engineering a multi-Degree-of-Freedom (DoF) biomimetic arm system designed to closely mimic natural human upper-extremity movement. The anatomical linkage architecture includes base yaw rotation (driven by a stepper motor perpendicular to the mounting surface), a half-bicep structure, an articulated elbow joint, a forearm housing, a wrist joint, and multi-segmented fingers driven by tendon lines.",
    },
    {
      id: "actuators",
      heading: "02 // MECHATRONIC ACTUATORS & HARDWARE STACK",
      body: "The actuation subsystem utilizes 7 precision servo motors dedicated to finger flexion, thumb opposition, and wrist orientation, paired with 1 high-torque NEMA stepper motor for smooth base rotational positioning. Mechanical components are optimized for custom FDM 3D printing with embedded bearing pivots and lightweight internal ribbing.",
    },
    {
      id: "control-glove",
      heading: "03 // SENSOR GLOVE & TELEOPERATION CONTROL",
      body: "Developing an intuitive human-machine interface featuring a wearable teleoperation control glove equipped with flex sensors and orientation sensors. Signals are processed through an Arduino microcontroller programmed to convert glove deflection angles into synchronized PWM motor commands for real-time gesture mirroring.",
    },
    {
      id: "cad-modeling",
      heading: "04 // PARAMETRIC 3D CAD MODELING",
      body: "Constructing full 3D CAD assemblies to verify joint clearance, tendon line routing paths, motor mount alignments, and structural mass distribution prior to physical 3D printing and assembly.",
      media: [
        {
          type: "cad-render",
          src: "/projects/bionic-hand/cad-model.png",
          alt: "3D CAD Model Assembly",
          aspectRatio: "16/9",
          objectFit: "contain",
          caption: "CAD assembly cross-section illustrating 7-servo actuator placements and base stepper motor mount.",
        },
      ],
    },
    {
      id: "roadmap",
      heading: "05 // DEVELOPMENT ROADMAP & NEXT STEPS",
      body: "Current Status: CAD assembly completed; electronic circuit bench testing in progress. Next Milestones: 3D printing arm chassis components, stringing tendon tension lines, fine-tuning Arduino PWM control algorithms, and performing gesture response latency benchmarks.",
    },
  ],
  seo: {
    title: "Teleoperated Bionic Hand & Arm — Thomas Joseph Portfolio",
    description: "Mechatronics personal project engineering a 7-servo, stepper-driven teleoperated biomimetic bionic hand controlled by an Arduino sensor glove.",
  },
};
