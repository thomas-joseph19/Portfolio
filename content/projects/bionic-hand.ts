import { Project } from "./_schema";

export const bionicHandProject: Project = {
  slug: "bionic-hand",
  title: "Teleoperated Biomimetic Arm & Glove-Controlled Bionic Hand",
  shortDescription:
    "7-DoF teleoperated biomimetic arm and bionic hand actuated by 7 servos and a base stepper motor, featuring FDM 3D printed chassis components, isolated dual-rail power, and I²C PWM control.",
  fullOverview:
    "A teleoperated biomimetic arm and multi-articulated hand designed to mirror human upper-limb kinematics. The system integrates a NEMA 17 base yaw stepper motor, elbow and wrist joints, and tendon-driven digits powered by 7 servos commanded through an isolated dual-rail Arduino and PCA9685 control architecture. Currently in physical prototyping with FDM 3D printed structural components.",
  status: "prototyping",
  role: "Mechatronics Designer & Embedded Developer",
  timeline: "Ongoing / 2026",
  categories: ["Robotics", "Mechatronics", "3D Printing", "CAD Design"],
  tags: [
    "SolidWorks CAD",
    "3D Printing",
    "Tolerance Optimization",
    "Arduino Uno",
    "PCA9685 PWM",
    "A4988 Driver",
    "NEMA 17 Stepper",
    "MG996R Servos",
    "Kinematics",
  ],
  technologies: [
    "SolidWorks (3D CAD)",
    "FDM 3D Printing",
    "CAD Tolerance Tuning",
    "Arduino Uno",
    "PCA9685 16-Ch PWM Driver",
    "A4988 Stepper Driver",
    "7x MG996R Metal-Gear Servos",
    "NEMA 17 Stepper Motor",
    "I²C Serial Protocol",
    "Isolated Dual Power Rails",
    "Embedded C++",
  ],
  skills: ["SOLIDWORKS", "3D PRINTING", "MATLAB", "KINEMATICS", "CIRCUIT DESIGN", "EMBEDDED C++"],
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
    {
      type: "image",
      src: "/projects/bionic-hand/arm-base.png",
      alt: "3D Printed Arm Base Segment",
      aspectRatio: "4/3",
      objectFit: "contain",
      placeholderLabel: "PHOTO: 3D PRINTED ARM BASE (1 SERVO)",
      caption: "3D Printed Arm Base: Physical chassis segment housing 1 servo for base rotational motion.",
    },
    {
      type: "image",
      src: "/projects/bionic-hand/forearm-bottom.png",
      alt: "3D Printed Forearm Bottom Segment",
      aspectRatio: "4/3",
      objectFit: "contain",
      placeholderLabel: "PHOTO: 3D PRINTED FOREARM BOTTOM (2 SERVOS)",
      caption: "3D Printed Forearm Bottom: Houses 2 servos for elbow and lower forearm joint movement.",
    },
    {
      type: "image",
      src: "/projects/bionic-hand/forearm-top.png",
      alt: "3D Printed Forearm Top Segment",
      aspectRatio: "4/3",
      objectFit: "contain",
      placeholderLabel: "PHOTO: 3D PRINTED FOREARM TOP (4 SERVOS)",
      caption: "3D Printed Forearm Top: Houses 3 finger flexor servos plus 1 additional servo for wrist articulation.",
    },
    {
      type: "image",
      src: "/projects/bionic-hand/Palm.png",
      alt: "3D Printed Palm Segment",
      aspectRatio: "4/3",
      objectFit: "contain",
      placeholderLabel: "PHOTO: 3D PRINTED PALM",
      caption: "3D Printed Palm: Palm structural component with internal tendon routing channels for digit movement.",
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
      id: "3d-printing-tolerances",
      heading: "02 // 3D PRINTING FABRICATION & CAD TOLERANCING",
      body: "Physical fabrication of the biomimetic arm relies on FDM 3D printed structural components. During initial 3D printing of the structural parts, physical manufacturing challenges arose—specifically tight joint clearances, pin binding, and internal tendon channel friction.\n\nTo overcome these printing difficulties, geometric tolerances were systematically re-analyzed and adjusted directly within the SolidWorks CAD model prior to re-printing, ensuring smooth mechanical joint motion and accurate servo fitment across all segments.\n\nThe physical servo distribution across the printed arm components is structured as follows:\n• Arm Base: 1 servo motor dedicated to base rotation.\n• Forearm Bottom: 2 servos driving lower forearm and elbow articulation.\n• Forearm Top: 4 servos total (3 servos for finger flexion + 1 additional servo for wrist control).\n• Palm: 3D printed structural palm with tendon routing channels.",
      callouts: [
        {
          title: "Arm Base",
          badge: "1 SERVO",
          description: "Base structural segment housing 1 servo motor for base rotational positioning.",
        },
        {
          title: "Forearm Bottom",
          badge: "2 SERVOS",
          description: "Lower forearm segment housing 2 servos driving elbow and lower arm articulation.",
        },
        {
          title: "Forearm Top",
          badge: "4 SERVOS",
          description: "Upper forearm segment housing 3 finger flexor servos + 1 additional wrist articulation servo.",
        },
        {
          title: "Palm Segment",
          badge: "TENDON GUIDES",
          description: "3D printed palm featuring routed low-friction channels for finger tendon cables.",
        },
        {
          title: "CAD Tolerance Optimization",
          badge: "3D PRINT FIX",
          description: "Overcame 3D printing binding and clearance friction by adjusting CAD tolerances prior to re-printing.",
        },
      ],
      media: [
        {
          type: "image",
          src: "/projects/bionic-hand/arm-base.png",
          alt: "3D Printed Arm Base Segment",
          aspectRatio: "4/3",
          objectFit: "contain",
          placeholderLabel: "PHOTO: 3D PRINTED ARM BASE (1 SERVO)",
          caption: "3D Printed Arm Base: Physical chassis segment housing 1 servo for base rotation.",
        },
        {
          type: "image",
          src: "/projects/bionic-hand/forearm-bottom.png",
          alt: "3D Printed Forearm Bottom Segment",
          aspectRatio: "4/3",
          objectFit: "contain",
          placeholderLabel: "PHOTO: 3D PRINTED FOREARM BOTTOM (2 SERVOS)",
          caption: "3D Printed Forearm Bottom: Houses 2 servos for lower arm and elbow joint articulation.",
        },
        {
          type: "image",
          src: "/projects/bionic-hand/forearm-top.png",
          alt: "3D Printed Forearm Top Segment",
          aspectRatio: "4/3",
          objectFit: "contain",
          placeholderLabel: "PHOTO: 3D PRINTED FOREARM TOP (4 SERVOS)",
          caption: "3D Printed Forearm Top: Houses 3 finger servos plus 1 additional servo for wrist movement.",
        },
        {
          type: "image",
          src: "/projects/bionic-hand/Palm.png",
          alt: "3D Printed Palm Segment",
          aspectRatio: "4/3",
          objectFit: "contain",
          placeholderLabel: "PHOTO: 3D PRINTED PALM",
          caption: "3D Printed Palm: Structural palm element with integrated tendon cable channels.",
        },
      ],
    },
    {
      id: "actuators",
      heading: "03 // ACTUATOR SUBSYSTEM & SERVO ALLOCATION",
      body: "Actuation stack configured for responsive kinematic mirroring and high holding torque across 7 total servos and 1 base stepper.",
      callouts: [
        {
          title: "7x MG996R Servos Total",
          badge: "DIGITS, WRIST & ARM",
          description: "Distributed across Arm Base (1), Forearm Bottom (2), and Forearm Top (4: 3 fingers + 1 wrist).",
        },
        {
          title: "NEMA 17 Stepper",
          badge: "BASE YAW",
          description: "Bipolar stepper motor providing continuous, high-precision base rotation.",
        },
        {
          title: "Tendon Cable Routing",
          badge: "KINEMATICS",
          description: "High-tensile lines routed through low-friction channels in the 3D printed palm and forearm.",
        },
      ],
    },
    {
      id: "electrical-system",
      heading: "04 // ELECTRICAL SYSTEM & BENCH TEST",
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
          src: "/projects/bionic-hand/circuit-diagram.png",
          alt: "Electrical circuit schematic diagram for bionic hand Arduino, PCA9685, and A4988",
          aspectRatio: "16/9",
          objectFit: "contain",
          caption: "Wiring Schematic: Arduino Uno pinouts, I²C bus lines, A4988 driver connections, and dual power rails.",
        },
        {
          type: "video",
          src: "/projects/bionic-hand/electrical-demo.mp4",
          alt: "Bench test demonstration video showing physical components working together",
          aspectRatio: "16/9",
          objectFit: "contain",
          caption: "Hardware Bench Test: Validating multi-servo PWM actuation and stepper rotation under unified power distribution.",
        },
      ],
    },
    {
      id: "firmware",
      heading: "05 // EMBEDDED MOTOR CONTROL CODE",
      body: "Arduino C++ sketch managing I²C PWM calibration, non-blocking servo timing, and stepper commutation pulses.",
      codeSnippet: {
        language: "cpp",
        filename: "bionic_hand_controller.ino",
        caption: "Arduino Control Firmware: PCA9685 60Hz PWM setup, A4988 STEP/DIR pulses, and pushbutton inputs.",
        code: `#include <Wire.h>
#include <Adafruit_PWMServoDriver.h>

// =====================================================
// GLOBAL VARIABLES / SETTINGS
// =====================================================

// =====================================================
// SERIAL
// =====================================================
const long SERIAL_BAUD_RATE = 9600;

// =====================================================
// PCA9685
// =====================================================
Adafruit_PWMServoDriver srituhobby = Adafruit_PWMServoDriver();
const int PCA9685_FREQUENCY = 60;

// =====================================================
// SERVOS
// =====================================================
const int NUMBER_OF_SERVOS = 7;

// Servo position limits
const int SERVO_MIN = 150;
const int SERVO_MAX = 600;

// Amount servo position changes per update (Larger = faster)
const int SERVO_MOVE_AMOUNT = 5;

// Time between servo updates in milliseconds (Smaller = faster)
const unsigned long SERVO_MOVE_INTERVAL = 20;

// PCA9685 channel for each servo
const int SERVO_CHANNELS[NUMBER_OF_SERVOS] = {
  0, 1, 2, 3, 4, 5, 6
};

// Arduino button pin for each servo
const int SERVO_BUTTONS[NUMBER_OF_SERVOS] = {
  4, 5, 6, 7, 8, 9, 10
};

// Current position of each servo
int servoPosition[NUMBER_OF_SERVOS] = {
  SERVO_MIN, SERVO_MIN, SERVO_MIN, SERVO_MIN, SERVO_MIN, SERVO_MIN, SERVO_MIN
};

// Direction of each servo (false = clockwise, true = counterclockwise)
bool servoDirection[NUMBER_OF_SERVOS] = {
  false, false, false, false, false, false, false
};

// Previous button state for each servo
bool previousServoButtonState[NUMBER_OF_SERVOS] = {
  HIGH, HIGH, HIGH, HIGH, HIGH, HIGH, HIGH
};

// Last time each servo moved
unsigned long lastServoMove[NUMBER_OF_SERVOS] = {
  0, 0, 0, 0, 0, 0, 0
};

// =====================================================
// STEPPER MOTOR
// =====================================================
const int STEPPER_DIR_PIN = 2;
const int STEPPER_STEP_PIN = 3;
const int STEPPER_BUTTON = 11;

// Stepper speed: time between HIGH/LOW changes (Smaller = faster)
const unsigned long STEPPER_INTERVAL = 5000;

bool stepperDirection = false;
bool stepperState = LOW;
bool previousStepperButtonState = HIGH;
unsigned long lastStepperStep = 0;

// =====================================================
// SETUP
// =====================================================
void setup() {
  // SERIAL
  Serial.begin(SERIAL_BAUD_RATE);
  Serial.println("System started");

  // STEPPER
  pinMode(STEPPER_DIR_PIN, OUTPUT);
  pinMode(STEPPER_STEP_PIN, OUTPUT);
  digitalWrite(STEPPER_STEP_PIN, LOW);

  // BUTTONS
  for (int i = 0; i < NUMBER_OF_SERVOS; i++) {
    pinMode(SERVO_BUTTONS[i], INPUT_PULLUP);
  }
  pinMode(STEPPER_BUTTON, INPUT_PULLUP);

  // PCA9685
  srituhobby.begin();
  srituhobby.setPWMFreq(PCA9685_FREQUENCY);

  // INITIALIZE SERVOS
  for (int i = 0; i < NUMBER_OF_SERVOS; i++) {
    servoPosition[i] = SERVO_MIN;
    srituhobby.setPWM(SERVO_CHANNELS[i], 0, servoPosition[i]);
  }
}

// =====================================================
// LOOP
// =====================================================
void loop() {
  unsigned long currentMillis = millis();
  unsigned long currentMicros = micros();

  // ===================================================
  // SERVO CONTROL
  // ===================================================
  for (int i = 0; i < NUMBER_OF_SERVOS; i++) {
    bool buttonState = digitalRead(SERVO_BUTTONS[i]);

    // BUTTON RELEASED: Reverse direction
    if (buttonState == HIGH && previousServoButtonState[i] == LOW) {
      servoDirection[i] = !servoDirection[i];
      Serial.print("Servo ");
      Serial.print(i + 1);
      Serial.print(" direction: ");
      Serial.println(servoDirection[i] ? "COUNTERCLOCKWISE" : "CLOCKWISE");
    }

    // BUTTON HELD: Move servo smoothly
    if (buttonState == LOW && currentMillis - lastServoMove[i] >= SERVO_MOVE_INTERVAL) {
      lastServoMove[i] = currentMillis;

      if (servoDirection[i] == false) {
        servoPosition[i] += SERVO_MOVE_AMOUNT;
        if (servoPosition[i] >= SERVO_MAX) servoPosition[i] = SERVO_MAX;
      } else {
        servoPosition[i] -= SERVO_MOVE_AMOUNT;
        if (servoPosition[i] <= SERVO_MIN) servoPosition[i] = SERVO_MIN;
      }

      srituhobby.setPWM(SERVO_CHANNELS[i], 0, servoPosition[i]);
    }

    previousServoButtonState[i] = buttonState;
  }

  // ===================================================
  // STEPPER CONTROL
  // ===================================================
  bool stepperButtonState = digitalRead(STEPPER_BUTTON);

  if (stepperButtonState != previousStepperButtonState) {
    if (stepperButtonState == LOW) {
      Serial.println("STEPPER BUTTON PRESSED");
    } else {
      Serial.println("STEPPER BUTTON RELEASED");
      stepperDirection = !stepperDirection;
      Serial.print("Stepper direction: ");
      Serial.println(stepperDirection ? "COUNTERCLOCKWISE" : "CLOCKWISE");
    }
  }

  // BUTTON HELD: Step motor
  if (stepperButtonState == LOW) {
    digitalWrite(STEPPER_DIR_PIN, stepperDirection ? LOW : HIGH);

    if (currentMicros - lastStepperStep >= STEPPER_INTERVAL) {
      lastStepperStep = currentMicros;
      stepperState = !stepperState;
      digitalWrite(STEPPER_STEP_PIN, stepperState);
    }
  } else {
    digitalWrite(STEPPER_STEP_PIN, LOW);
    stepperState = LOW;
  }

  previousStepperButtonState = stepperButtonState;
}`,
      },
    },
    {
      id: "roadmap",
      heading: "06 // TELEOPERATION & NEXT STEPS",
      body: "Next phases focus on assembling the 3D printed arm chassis sections, mounting the 7 servos into their respective arm base, forearm, and wrist mounts, integrating the wearable flex-sensor teleoperation glove, and fine-tuning joint movement calibration.",
    },
  ],
  seo: {
    title: "Teleoperated Bionic Hand & Arm — Thomas Joseph Portfolio",
    description: "Mechatronics personal project engineering a 7-servo, stepper-driven teleoperated biomimetic bionic hand with 3D printed chassis components, PCA9685 PWM, and A4988 stepper drivers.",
  },
};
