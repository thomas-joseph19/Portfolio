import { Project } from "./_schema";

export const bionicHandProject: Project = {
  slug: "bionic-hand",
  title: "Teleoperated Biomimetic Arm & Glove-Controlled Bionic Hand",
  shortDescription:
    "Design, 3D CAD kinematic assembly, and mechatronic control of a 7-servo, stepper-driven teleoperated biomimetic arm and articulated bionic hand with isolated dual-rail electrical architecture.",
  fullOverview:
    "An ongoing mechatronics and biomechatronics personal project engineering a teleoperated bionic arm and multi-articulated hand system. Designed to mirror human arm kinematics, the system incorporates a base yaw rotation axis (NEMA 17 stepper motor), an articulated elbow, forearm section, wrist joint, and multi-digit fingers actuated by 7 precision MG996R servo motors.\n\nThe electrical architecture separates low-power control signals (Arduino Uno, I²C PCA9685 PWM driver, A4988 logic) from high-current motor power supplies with a unified common reference ground, preventing voltage drops and ensuring stable teleoperation under mechanical load.",
  status: "in-development",
  role: "Mechatronics Designer & Embedded Developer",
  timeline: "Ongoing / 2026",
  categories: ["Robotics", "Mechatronics", "3D Printing", "CAD Design", "Embedded Systems"],
  tags: [
    "Bionic Hand",
    "SolidWorks CAD",
    "Arduino Uno",
    "PCA9685 PWM",
    "A4988 Stepper Driver",
    "NEMA 17 Stepper",
    "MG996R Servos",
    "Circuit Design",
    "Teleoperation Glove",
    "Kinematics",
  ],
  technologies: [
    "SolidWorks (3D CAD Modeling)",
    "Arduino Uno Microcontroller",
    "PCA9685 16-Ch PWM Servo Driver",
    "A4988 Stepper Motor Driver",
    "7x MG996R Metal-Gear Servos",
    "NEMA 17 Bipolar Stepper Motor",
    "I²C Serial Communication Bus",
    "Isolated High-Current Dual Power Rails",
    "Embedded C++ Firmware",
    "FDM 3D Printing & Tendon Linkages",
  ],
  skills: ["SOLIDWORKS", "MATLAB", "KINEMATICS", "EMBEDDED C++", "CIRCUIT DESIGN", "Finite-Element-Analysis"],
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
      body: "The actuation subsystem utilizes 7 precision high-torque MG996R metal-gear servo motors dedicated to finger flexion, thumb opposition, and wrist orientation, paired with 1 bipolar NEMA 17 stepper motor for smooth base rotational positioning. Mechanical components are optimized for custom FDM 3D printing with embedded bearing pivots and lightweight internal ribbing.",
    },
    {
      id: "electrical-system",
      heading: "03 // ELECTRICAL SYSTEM & POWER ARCHITECTURE",
      body: "The robotic hand and arm separates control signals from high-current motor power. An Arduino Uno serves as the primary controller, generating low-power logic signals, while external dedicated power supplies deliver the current required by the servos and stepper motor to prevent voltage sags, brownouts, and microcontroller resets.\n\nThe Arduino communicates via I²C (SDA on A4, SCL on A5) with a 16-channel PCA9685 PWM servo driver operating at ~60 Hz to command the seven MG996R servos. For base rotation, an Allegro A4988 stepper driver controls the two-phase bipolar NEMA 17 motor via STEP and DIR digital pulses.\n\nAll user pushbuttons utilize internal pullup resistors (INPUT_PULLUP) connected between the digital pins and common ground, reading HIGH at rest and LOW when pressed without requiring external resistors.",
      callouts: [
        {
          title: "Logic Power Domain (5V)",
          badge: "ARDUINO / I²C",
          description: "Arduino Uno 5V rail powers PCA9685 VCC logic circuitry and A4988 VDD logic, isolated from heavy motor transients.",
        },
        {
          title: "Actuator Power Rail",
          badge: "HIGH-CURRENT DC",
          description: "External supply feeds PCA9685 V+ for 7x MG996R servos and A4988 VMOT for NEMA 17 coils, sharing a common ground.",
        },
        {
          title: "A4988 Current Regulation",
          badge: "VREF TUNING",
          description: "Current limit configured via reference voltage: I_LIMIT ≈ V_REF / (8 × R_S). Adjusted to match motor rated phase current.",
        },
      ],
      table: {
        headers: ["Arduino Pin", "Target Component", "Signal / Function", "Electrical Mode"],
        rows: [
          ["D2", "A4988 Stepper Driver", "DIR (Direction Control)", "Digital Output (HIGH/LOW)"],
          ["D3", "A4988 Stepper Driver", "STEP (Pulse Frequency / Speed)", "Digital Output (Pulsed)"],
          ["D4 - D10", "7x Pushbuttons", "Manual Servo Channel Inputs", "INPUT_PULLUP (Active LOW)"],
          ["D11", "Pushbutton", "Manual Stepper Rotation Trigger", "INPUT_PULLUP (Active LOW)"],
          ["A4", "PCA9685 PWM Controller", "I²C SDA (Serial Data)", "Open-Drain / Pull-Up"],
          ["A5", "PCA9685 PWM Controller", "I²C SCL (Serial Clock)", "Synchronous Clock"],
          ["5V", "PCA9685 & A4988", "Logic Subsystem Power (VCC / VDD)", "Regulated 5.0V DC"],
          ["GND", "All Subsystems", "Common Reference Ground", "0V Unified Return Path"],
        ],
        caption: "* Common electrical ground is shared across the Arduino Uno, PCA9685 servo driver, A4988 stepper driver, and external power supplies.",
      },
      media: [
        {
          type: "diagram",
          src: null, // TO INSERT IMAGE: Save file to public/projects/bionic-hand/circuit-diagram.png and set src: "/projects/bionic-hand/circuit-diagram.png"
          placeholderLabel: "AWAITING CIRCUIT SCHEMATIC DIAGRAM",
          alt: "Electrical circuit schematic diagram for bionic hand Arduino, PCA9685, and A4988",
          aspectRatio: "16/9",
          objectFit: "contain",
          caption: "Electrical Wiring Schematic: Pinout connections between Arduino Uno, PCA9685 I²C servo driver, A4988 stepper driver, pushbuttons, and isolated power supplies.",
        },
        {
          type: "video",
          src: null, // TO INSERT VIDEO: Save file to public/projects/bionic-hand/electrical-demo.mp4 and set src: "/projects/bionic-hand/electrical-demo.mp4"
          placeholderLabel: "AWAITING DEMO VIDEO: PHYSICAL ACTUATION & ELECTRICAL TEST",
          alt: "Bench test demonstration video showing physical components working together",
          aspectRatio: "16/9",
          objectFit: "contain",
          caption: "Physical Hardware Bench Demonstration: Live test validating integrated electrical components, 7-servo PWM actuation, and stepper rotation under unified power delivery.",
        },
      ],
    },
    {
      id: "firmware",
      heading: "04 // EMBEDDED FIRMWARE & MOTOR CONTROL CODE",
      body: "The embedded firmware runs on the Arduino Uno (ATmega328P). It communicates with the PCA9685 over the I²C bus using the Adafruit PWM Servo Driver library, configuring a 60 Hz carrier frequency for analog servo position pulses. Digital output pulses sent to the A4988 STEP pin control rotational speed, while DIR determines clockwise or counter-clockwise rotation.\n\nThe starter sketch below manages pin definitions, driver initialization, and input reading. Replace the loop logic with your complete teleoperation gesture pipeline.",
      codeSnippet: {
        language: "cpp",
        filename: "bionic_hand_controller.ino",
        caption: "Embedded C++ Arduino Sketch: Hardware pinouts, PCA9685 60Hz PWM calibration, A4988 STEP/DIR pulses, and pushbutton inputs.",
        code: `/*
 * ==============================================================================
 * Project: Teleoperated Bionic Hand & Robotic Arm Controller
 * Microcontroller: Arduino Uno (ATmega328P)
 * Drivers: PCA9685 (16-Ch PWM over I2C 0x40), Allegro A4988 Stepper Driver
 * Actuators: 7x MG996R Servos (Digits/Wrist), 1x NEMA 17 Stepper (Base Yaw)
 * Power: 5V Logic (Arduino) + External High-Current DC Supply (Motors)
 * ==============================================================================
 */

#include <Wire.h>
#include <Adafruit_PWMServoDriver.h>

// --- PCA9685 I2C INSTANCE (Default Address: 0x40) ---
Adafruit_PWMServoDriver pwm = Adafruit_PWMServoDriver(0x40);

// --- PIN ASSIGNMENTS ---
const int PIN_STEPPER_DIR   = 2;      // A4988 Direction pin
const int PIN_STEPPER_STEP  = 3;      // A4988 Step pulse pin
const int PIN_SERVO_BTNS[7] = {4, 5, 6, 7, 8, 9, 10}; // 7 Servo trigger buttons
const int PIN_STEPPER_BTN   = 11;     // Stepper manual trigger button

// --- PWM CALIBRATION (60 Hz analog servo pulse ticks out of 4096) ---
#define SERVO_MIN_TICK  150   // ~1ms pulse (0 degrees)
#define SERVO_MAX_TICK  600   // ~2ms pulse (180 degrees)

void setup() {
  Serial.begin(115200);
  Serial.println(F("========================================"));
  Serial.println(F("[INIT] Initializing Bionic Arm Subsystem"));
  Serial.println(F("========================================"));

  // 1. Configure Stepper Motor Driver Control Pins
  pinMode(PIN_STEPPER_DIR, OUTPUT);
  pinMode(PIN_STEPPER_STEP, OUTPUT);
  digitalWrite(PIN_STEPPER_DIR, LOW);
  digitalWrite(PIN_STEPPER_STEP, LOW);

  // 2. Configure Pushbuttons with Internal Pullup Resistors
  for (int i = 0; i < 7; i++) {
    pinMode(PIN_SERVO_BTNS[i], INPUT_PULLUP);
  }
  pinMode(PIN_STEPPER_BTN, INPUT_PULLUP);

  // 3. Initialize I2C Communication & PCA9685 PWM Controller
  Wire.begin(); // SDA = A4, SCL = A5
  pwm.begin();
  pwm.setPWMFreq(60); // 60 Hz Analog Servo Frequency

  // Set all 7 servo channels to default neutral stance
  for (uint8_t ch = 0; ch < 7; ch++) {
    pwm.setPWM(ch, 0, (SERVO_MIN_TICK + SERVO_MAX_TICK) / 2);
  }

  Serial.println(F("[READY] Electrical system online. Ready for actuation."));
}

void loop() {
  /*
   * --------------------------------------------------------------------------
   * >>> PASTE YOUR COMPLETE CODE OR GESTURE CONTROL PIPELINE HERE <<<
   * --------------------------------------------------------------------------
   * 1. Read button inputs (LOW = pressed, HIGH = released)
   * 2. Read teleoperation glove flex sensors or serial packets
   * 3. Set servo position: pwm.setPWM(channel, 0, pulseLength);
   * 4. Step NEMA 17: digitalWrite(PIN_STEPPER_STEP, HIGH); delayMicroseconds(800);
   * --------------------------------------------------------------------------
   */

  // Interactive Pushbutton Actuation Demo
  for (int i = 0; i < 7; i++) {
    if (digitalRead(PIN_SERVO_BTNS[i]) == LOW) {
      pwm.setPWM(i, 0, SERVO_MAX_TICK); // Flex servo
    } else {
      pwm.setPWM(i, 0, SERVO_MIN_TICK); // Neutral servo
    }
  }

  // Stepper Rotation Trigger Demo
  if (digitalRead(PIN_STEPPER_BTN) == LOW) {
    digitalWrite(PIN_STEPPER_DIR, HIGH);
    for (int s = 0; s < 200; s++) { // 200 steps = 1 full revolution (1.8 deg/step)
      digitalWrite(PIN_STEPPER_STEP, HIGH);
      delayMicroseconds(1000);
      digitalWrite(PIN_STEPPER_STEP, LOW);
      delayMicroseconds(1000);
    }
  }
}`,
      },
    },
    {
      id: "control-glove",
      heading: "05 // SENSOR GLOVE & TELEOPERATION CONTROL",
      body: "Developing an intuitive human-machine interface featuring a wearable teleoperation control glove equipped with flex sensors and orientation sensors. Signals are processed through an Arduino microcontroller programmed to convert glove deflection angles into synchronized PWM motor commands for real-time gesture mirroring.",
    },
    {
      id: "cad-modeling",
      heading: "06 // PARAMETRIC 3D CAD MODELING",
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
      heading: "07 // DEVELOPMENT ROADMAP & NEXT STEPS",
      body: "Current Status: CAD assembly completed; electronic circuit bench testing successfully validated with integrated multi-servo PWM and stepper rotation.\n\nNext Milestones:\n• Insert live demonstration video & finalized circuit schematic diagram\n• 3D print arm chassis segments and string tendon tension lines\n• Integrate wearable sensor glove teleoperation serial communication\n• Perform gesture response latency benchmarks under mechanical load",
    },
  ],
  seo: {
    title: "Teleoperated Bionic Hand & Arm — Thomas Joseph Portfolio",
    description: "Mechatronics personal project engineering a 7-servo, stepper-driven teleoperated biomimetic bionic hand with PCA9685 PWM and A4988 stepper drivers.",
  },
};
