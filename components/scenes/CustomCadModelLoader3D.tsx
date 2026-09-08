"use client";

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

// --- AEROSPACE TURBOFAN JET ENGINE & TURBOPUMP CAD ASSEMBLY ---
export const AerospaceTurbofanJetEngine3D: React.FC<{ progress?: number }> = () => {
  const groupRef = useRef<THREE.Group>(null);
  const fanRotorRef = useRef<THREE.Group>(null);
  const turbineRotorRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    // Gentle floating motion (stationary orientation)
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(t * 1.2) * 0.15;
    }

    // High-speed turbomachinery rotor rotation
    if (fanRotorRef.current) {
      fanRotorRef.current.rotation.z = t * 3.5;
    }
    if (turbineRotorRef.current) {
      turbineRotorRef.current.rotation.z = -t * 5.0;
    }
  });

  const bladeCount = 20;

  return (
    <group ref={groupRef} scale={[0.9, 0.9, 0.9]}>
      {/* 01 // OUTER NACELLE AIR DUCT CASING (Titanium Alloy Shroud) */}
      <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[2.4, 2.1, 4.8, 32, 1, true]} />
        <meshStandardMaterial color="#1e293b" metalness={0.9} roughness={0.2} side={THREE.DoubleSide} />
      </mesh>
      <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.4, 0.08, 16, 48]} />
        <meshStandardMaterial color="#38bdf8" metalness={0.95} emissive="#0284c7" emissiveIntensity={0.4} />
      </mesh>

      {/* 02 // FRONT INTAKE STATOR GUIDE VANES RING */}
      <group position={[0, 0, 2.2]}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[2.35, 2.35, 0.15, 32]} />
          <meshStandardMaterial color="#0f172a" metalness={0.9} wireframe />
        </mesh>
      </group>

      {/* 03 // HIGH-PRESSURE TURBOFAN ROTOR (24 Aerodynamic Titanium Blades) */}
      <group ref={fanRotorRef} position={[0, 0, 1.8]}>
        {/* Central Aerodynamic Spinner Nose Cone */}
        <mesh position={[0, 0, 0.6]} rotation={[Math.PI / 2, 0, 0]}>
          <coneGeometry args={[0.6, 1.4, 32]} />
          <meshStandardMaterial color="#d69e2e" metalness={0.95} roughness={0.15} />
        </mesh>
        {/* Rotor Hub Disk */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.7, 0.7, 0.4, 32]} />
          <meshStandardMaterial color="#475569" metalness={0.9} roughness={0.2} />
        </mesh>

        {/* 20 Swept Titanium Fan Blades */}
        {Array.from({ length: bladeCount }).map((_, i) => {
          const angle = (i * Math.PI * 2) / bladeCount;
          return (
            <group key={i} rotation={[0, 0, angle]}>
              <mesh position={[1.35, 0, -0.1]} rotation={[0.3, 0.25, 0]}>
                <boxGeometry args={[1.3, 0.08, 0.35]} />
                <meshStandardMaterial color="#94a3b8" metalness={0.9} roughness={0.15} />
              </mesh>
            </group>
          );
        })}
      </group>

      {/* 04 // AXIAL COMPRESSOR STAGE DISK STACK */}
      {[-0.6, -0.2, 0.2, 0.6, 1.0].map((zPos, idx) => (
        <mesh key={idx} position={[0, 0, zPos]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[1.1 - idx * 0.08, 1.1 - idx * 0.08, 0.25, 24]} />
          <meshStandardMaterial color="#64748b" metalness={0.85} wireframe />
        </mesh>
      ))}

      {/* 05 // ANNULAR COMBUSTION CHAMBER CORE (Glowing Amber Thermal Emission) */}
      <group position={[0, 0, -0.8]}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.95, 0.85, 1.4, 32]} />
          <meshStandardMaterial
            color="#f59e0b"
            emissive="#d97706"
            emissiveIntensity={0.7}
            metalness={0.8}
            roughness={0.3}
          />
        </mesh>
        {/* Fuel Injector Manifold Ring */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.05, 0.06, 16, 32]} />
          <meshStandardMaterial color="#e2e8f0" metalness={0.95} />
        </mesh>
      </group>

      {/* 06 // HIGH-PRESSURE TURBINE STAGE */}
      <group ref={turbineRotorRef} position={[0, 0, -1.6]}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.8, 0.8, 0.3, 32]} />
          <meshStandardMaterial color="#334155" metalness={0.9} />
        </mesh>
        {Array.from({ length: 16 }).map((_, i) => {
          const angle = (i * Math.PI * 2) / 16;
          return (
            <group key={i} rotation={[0, 0, angle]}>
              <mesh position={[0.7, 0, 0]} rotation={[-0.4, 0, 0]}>
                <boxGeometry args={[0.6, 0.06, 0.2]} />
                <meshStandardMaterial color="#cbd5e1" metalness={0.95} />
              </mesh>
            </group>
          );
        })}
      </group>

      {/* 07 // CONVERGENT-DIVERGENT EXHAUST VECTORING NOZZLE PETALS */}
      <group position={[0, 0, -2.4]}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <coneGeometry args={[1.3, 1.2, 24, 1, true]} />
          <meshStandardMaterial color="#1e293b" metalness={0.95} roughness={0.2} side={THREE.DoubleSide} />
        </mesh>

        {/* Glowing Cyan Shock-Diamond Exhaust Plume */}
        <mesh position={[0, 0, -1.0]} rotation={[-Math.PI / 2, 0, 0]}>
          <coneGeometry args={[0.7, 1.8, 16]} />
          <meshStandardMaterial color="#38bdf8" emissive="#0284c7" emissiveIntensity={1.8} transparent opacity={0.8} />
        </mesh>
      </group>
    </group>
  );
};

export const CustomCadModelLoader3D = AerospaceTurbofanJetEngine3D;
