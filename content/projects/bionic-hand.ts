import { Project } from "./_schema";

export const bionicHandProject: Project = {
  slug: "bionic-hand",
  title: "Teleoperated Biomimetic Arm & Glove-Controlled Bionic Hand",
  shortDescription:
    "7-DoF teleoperated biomimetic arm and bionic hand actuated by 7 servos and a base stepper motor, featuring isolated dual-rail power and I²C PWM control.",
  fullOverview:
    "A teleoperated biomimetic arm and multi-articulated hand designed to mirror human upper-limb kinematics. The system integrates a NEMA 17 base yaw stepper motor, elbow and wrist joints, and tendon-driven digits powered by 7 MG996R servos commanded through an isolated dual-rail Arduino and PCA9685 control architecture.",
  status: "in-development",
  role: "Mechatronics Designer & Embedded Developer",
  timeline: "Ongoing / 2026",
  categories: ["Robotics", "Mechatronics", "3D Printing", "CAD Design"],
  tags: [
    "SolidWorks CAD",
    "Arduino Uno",
    "PCA9685 PWM",
    "A4988 Driver",
    "NEMA 17 Stepper",
    "MG996R Servos",
    "Kinematics",
  ],
  technologies: [
    "SolidWorks (3D CAD)",
    "Arduino Uno",
    "PCA9685 16-Ch PWM Driver",
    "A4988 Stepper Driver",
    "7x MG996R Metal-Gear Servos",
    "NEMA 17 Stepper Motor",
    "I²C Serial Protocol",
    "Isolated Dual Power Rails",
    "Embedded C++",
    "FDM 3D Printing",
  ],
  skills: ["SOLIDWORKS", "MATLAB", "KINEMATICS", "CIRCUIT DESIGN", "EMBEDDED C++"],
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
      id: "cad-modeling",
      heading: "01 // 3D CAD MODELING & KINEMATICS",
      body: "SolidWorks parametric assembly modeling joint clearances, tendon cable routing, motor mounts, and structural mass distribution for FDM 3D printing.",
      media: [
        {
          type: "cad-render",
          src: "/projects/bionic-hand/cad-model.png",
          alt: "3D CAD Model Assembly",
          aspectRatio: "16/9",
          objectFit: "contain",
          caption: "SolidWorks assembly model illustrating 7-servo actuator housing, wrist pivot, and base yaw stepper mount.",
        },
      ],
    },
    {
      id: "actuators",
      heading: "02 // ACTUATOR SUBSYSTEM",
      body: "Actuation stack configured for responsive kinematic mirroring and high holding torque.",
      callouts: [
        {
          title: "7x MG996R Servos",
          badge: "DIGITS & WRIST",
          description: "High-torque metal-gear servos actuating tendon lines for finger flexion and wrist articulation.",
        },
        {
          title: "NEMA 17 Stepper",
          badge: "BASE YAW",
          description: "Bipolar stepper motor providing continuous, high-precision base rotation.",
        },
        {
          title: "Tendon Cable Routing",
          badge: "KINEMATICS",
          description: "High-tensile lines routed through low-friction internal forearm channels.",
        },
      ],
    },
    {
      id: "electrical-system",
      heading: "03 // ELECTRICAL SYSTEM & BENCH TEST",
      body: "Decoupled architecture separating 5V logic signals from high-current motor power rails to prevent brownouts. The Arduino Uno drives the PCA9685 over I²C (60 Hz PWM) and commutates the A4988 stepper driver via STEP/DIR pulses.",
      callouts: [
        {
          title: "Dual Power Rails",
          badge: "ISOLATED",
          description: "5V logic rail separated from external high-current motor DC supply with unified ground.",
        },
        {
          title: "PCA9685 PWM Driver",
          badge: "I²C (A4/A5)",
          description: "16-channel 12-bit PWM controller commanding all 7 servos simultaneously at 60 Hz.",
        },
        {
          title: "A4988 Current Limiting",
          badge: "VREF TUNING",
          description: "Current-regulated driver tuned (VREF ≈ 1.2V) to match the stepper coil rating.",
        },
      ],
      table: {
        headers: ["Signal", "Arduino Pin", "Target Component", "Description"],
        rows: [
          ["I²C SDA", "A4", "PCA9685 Controller", "Serial Data for 7 servo channels"],
          ["I²C SCL", "A5", "PCA9685 Controller", "Serial Clock line"],
          ["STEP / DIR", "D3 / D2", "A4988 Stepper Driver", "Pulse speed & direction signals"],
          ["Inputs", "D4 - D11", "Pushbuttons", "Internal pullup (active-LOW) manual inputs"],
          ["Power", "5V / GND", "All Subsystems", "Regulated logic rail & unified ground return"],
        ],
      },
      media: [
        {
          type: "diagram",
          src: null, // TO INSERT IMAGE: Save image to public/projects/bionic-hand/circuit-diagram.png and set src: "/projects/bionic-hand/circuit-diagram.png"
          placeholderLabel: "CIRCUIT SCHEMATIC DIAGRAM",
          alt: "Electrical circuit schematic diagram for bionic hand Arduino, PCA9685, and A4988",
          aspectRatio: "16/9",
          objectFit: "contain",
          caption: "Wiring Schematic: Arduino Uno pinouts, I²C bus lines, A4988 driver connections, and dual power rails.",
        },
        {
          type: "video",
          src: null, // TO INSERT VIDEO: Save video to public/projects/bionic-hand/electrical-demo.mp4 and set src: "/projects/bionic-hand/electrical-demo.mp4"
          placeholderLabel: "BENCH DEMONSTRATION VIDEO",
          alt: "Bench test demonstration video showing physical components working together",
          aspectRatio: "16/9",
          objectFit: "contain",
          caption: "Hardware Bench Test: Validating multi-servo PWM actuation and stepper rotation under unified power distribution.",
        },
      ],
    },
    {
      id: "firmware",
      heading: "04 // EMBEDDED MOTOR CONTROL CODE",
      body: "Arduino C++ sketch managing I²C PWM calibration, stepper commutation pulses, and non-blocking input handling.",
      codeSnippet: {
        language: "cpp",
        filename: "bionic_hand_controller.ino",
        caption: "Arduino Control Firmware: PCA9685 60Hz PWM setup, A4988 STEP/DIR pulses, and pushbutton inputs.",
        code: `#include <Wire.h>
#include <Adafruit_PWMServoDriver.h>

Adafruit_PWMServoDriver pwm(0x40);

const int PIN_DIR   = 2;
const int PIN_STEP  = 3;
const int PIN_BTNS[7] = {4, 5, 6, 7, 8, 9, 10};
const int PIN_STEP_BTN = 11;

#define SERVO_MIN 150  // 0° pulse tick (~1ms)
#define SERVO_MAX 600  // 180° pulse tick (~2ms)

void setup() {
  Wire.begin();
  pwm.begin();
  pwm.setPWMFreq(60); // 60 Hz analog servo PWM

  pinMode(PIN_DIR, OUTPUT);
  pinMode(PIN_STEP, OUTPUT);

  for (int i = 0; i < 7; i++) {
    pinMode(PIN_BTNS[i], INPUT_PULLUP);
  }
  pinMode(PIN_STEP_BTN, INPUT_PULLUP);
}

void loop() {
  // Read pushbutton inputs and actuate servo channels
  for (int i = 0; i < 7; i++) {
    int pos = (digitalRead(PIN_BTNS[i]) == LOW) ? SERVO_MAX : SERVO_MIN;
    pwm.setPWM(i, 0, pos);
  }

  // Stepper rotation pulse
  if (digitalRead(PIN_STEP_BTN) == LOW) {
    digitalWrite(PIN_DIR, HIGH);
    digitalWrite(PIN_STEP, HIGH);
    delayMicroseconds(800);
    digitalWrite(PIN_STEP, LOW);
    delayMicroseconds(800);
  }
}`,
      },
    },
    {
      id: "roadmap",
      heading: "05 // TELEOPERATION & NEXT STEPS",
      body: "Next phases focus on integrating the wearable flex-sensor teleoperation glove, 3D printing the arm chassis segments, and calibrating dynamic gesture response latency.",
    },
  ],
  seo: {
    title: "Teleoperated Bionic Hand & Arm — Thomas Joseph Portfolio",
    description: "Mechatronics personal project engineering a 7-servo, stepper-driven teleoperated biomimetic bionic hand with PCA9685 PWM and A4988 stepper drivers.",
  },
};
