"use client";

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

// --- INTRICATE 3D AEROSPACE ORBITAL ROCKET CAD MODEL (Blasts Off on Scroll) ---
export const OrbitalRocketCad3D: React.FC<{ progress?: number }> = ({ progress = 0 }) => {
  const groupRef = useRef<THREE.Group>(null);
  const plumeRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    if (groupRef.current) {
      // Rocket launch kinematics: as scroll progress increases past Stage 04 (0.60 -> 1.00), rocket launches upward!
      const launchProgress = Math.max(0, (progress - 0.60) / 0.35);
      const launchAltitude = Math.pow(launchProgress, 1.8) * 22; // Accelerating takeoff trajectory

      // Base hovering float + takeoff vertical displacement
      const baseFloat = Math.sin(t * 1.5) * 0.12;
      groupRef.current.position.y = baseFloat + launchAltitude;

      // Slight aerodynamic roll & pitch during ascent
      groupRef.current.rotation.y = t * 0.3;
      groupRef.current.rotation.z = Math.sin(t * 2.0) * 0.02 * (1 + launchProgress);
    }

    if (plumeRef.current) {
      // Engine plume flicker & expansion during launch
      const isIgnited = progress > 0.55;
      const flicker = 1.0 + Math.sin(t * 30) * 0.15;
      plumeRef.current.scale.set(flicker, isIgnited ? 1.0 + Math.min(2.0, (progress - 0.55) * 4) : 0.2, flicker);
    }
  });

  const isEngineOn = progress > 0.55;

  return (
    <group ref={groupRef} scale={[0.65, 0.65, 0.65]}>
      {/* 01 // PAYLOAD FAIRING (Nose Cone) */}
      <mesh position={[0, 4.2, 0]}>
        <coneGeometry args={[0.7, 1.8, 32]} />
        <meshStandardMaterial color="#f8fafc" metalness={0.85} roughness={0.15} />
      </mesh>

      {/* Interstage Ring (Black Carbon Trim) */}
      <mesh position={[0, 3.25, 0]}>
        <cylinderGeometry args={[0.705, 0.705, 0.15, 32]} />
        <meshStandardMaterial color="#0f172a" metalness={0.9} roughness={0.3} />
      </mesh>

      {/* 02 // SECOND STAGE FUEL TANK & COLD-GAS RCS PODS */}
      <mesh position={[0, 2.2, 0]}>
        <cylinderGeometry args={[0.7, 0.7, 1.9, 32]} />
        <meshStandardMaterial color="#f1f5f9" metalness={0.8} roughness={0.2} />
      </mesh>
      {/* Black Thermal Raceway Strip down side */}
      <mesh position={[0.71, 0.5, 0]}>
        <boxGeometry args={[0.04, 5.2, 0.12]} />
        <meshStandardMaterial color="#020617" metalness={0.9} />
      </mesh>

      {/* 03 // TITANIUM GRID FINS (Interstage Steering Actuators) */}
      {[0, Math.PI / 2, Math.PI, (3 * Math.PI) / 2].map((ang, idx) => (
        <group key={idx} rotation={[0, ang, 0]}>
          <mesh position={[0.85, 1.2, 0]} rotation={[0, 0, 0.3]}>
            <boxGeometry args={[0.3, 0.45, 0.05]} />
            <meshStandardMaterial color="#38bdf8" metalness={0.95} wireframe />
          </mesh>
        </group>
      ))}

      {/* 04 // FIRST STAGE BOOSTER TANK */}
      <mesh position={[0, -0.6, 0]}>
        <cylinderGeometry args={[0.7, 0.7, 3.6, 32]} />
        <meshStandardMaterial color="#e2e8f0" metalness={0.85} roughness={0.25} />
      </mesh>

      {/* Booster Base Heatshield & Octa-Web Engine Mount */}
      <mesh position={[0, -2.45, 0]}>
        <cylinderGeometry args={[0.75, 0.8, 0.3, 32]} />
        <meshStandardMaterial color="#1e293b" metalness={0.95} roughness={0.2} />
      </mesh>

      {/* 05 // MULTI-NOZZLE ROCKET ENGINE CLUSTER (Merlin / Raptor style) */}
      <group position={[0, -2.7, 0]}>
        {/* Center Main Engine Bell Nozzle */}
        <mesh position={[0, -0.25, 0]} rotation={[Math.PI, 0, 0]}>
          <coneGeometry args={[0.25, 0.5, 24, 1, true]} />
          <meshStandardMaterial color="#334155" metalness={0.95} roughness={0.15} side={THREE.DoubleSide} />
        </mesh>
        {/* Outer Engine Bell Ring */}
        {[0, Math.PI / 3, (2 * Math.PI) / 3, Math.PI, (4 * Math.PI) / 3, (5 * Math.PI) / 3].map((ang, idx) => (
          <mesh key={idx} position={[Math.cos(ang) * 0.42, -0.25, Math.sin(ang) * 0.42]} rotation={[Math.PI, 0, 0]}>
            <coneGeometry args={[0.18, 0.45, 16, 1, true]} />
            <meshStandardMaterial color="#475569" metalness={0.95} roughness={0.15} side={THREE.DoubleSide} />
          </mesh>
        ))}
      </group>

      {/* 06 // DYNAMIC ROCKET EXHAUST LAUNCH PLUME (Ignites & Expands on Takeoff) */}
      <group ref={plumeRef} position={[0, -3.0, 0]}>
        {/* Core Amber Flame Cone */}
        <mesh position={[0, -1.0, 0]} rotation={[Math.PI, 0, 0]}>
          <coneGeometry args={[0.6, 2.2, 24]} />
          <meshStandardMaterial
            color="#f97316"
            emissive="#ea580c"
            emissiveIntensity={isEngineOn ? 3.0 : 0.4}
            transparent
            opacity={isEngineOn ? 0.95 : 0.3}
          />
        </mesh>
        {/* Outer Plasma Thrust Plume (Shock Diamonds) */}
        <mesh position={[0, -1.8, 0]} rotation={[Math.PI, 0, 0]}>
          <coneGeometry args={[0.9, 3.4, 24]} />
          <meshStandardMaterial
            color="#ef4444"
            emissive="#dc2626"
            emissiveIntensity={isEngineOn ? 2.2 : 0.2}
            transparent
            opacity={isEngineOn ? 0.75 : 0.15}
          />
        </mesh>
        {/* Cyan Plasma Core Stream */}
        <mesh position={[0, -0.6, 0]} rotation={[Math.PI, 0, 0]}>
          <cylinderGeometry args={[0.3, 0.4, 1.2, 16]} />
          <meshStandardMaterial
            color="#38bdf8"
            emissive="#0284c7"
            emissiveIntensity={isEngineOn ? 3.5 : 0.5}
            transparent
            opacity={isEngineOn ? 0.9 : 0.4}
          />
        </mesh>
      </group>
    </group>
  );
};

export const CustomCadModelLoader3D = OrbitalRocketCad3D;
