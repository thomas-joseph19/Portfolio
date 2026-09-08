"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

interface ContinuousEngine3DCanvasProps {
  progress: number; // 0.0 -> 1.0 global scroll progress
}

const CadGridFloor: React.FC<{ progress: number }> = ({ progress }) => {
  return (
    <gridHelper
      args={[30, 30, "#6fb3c2", "#2a2a2e"]}
      position={[0, -3.5, 0]}
    />
  );
};

const IntricateMechanicalSystem3D: React.FC<{ progress: number }> = ({ progress }) => {
  const groupRef = useRef<THREE.Group>(null);
  const sunGearRef = useRef<THREE.Mesh>(null);
  const ringGearRef = useRef<THREE.Mesh>(null);

  // Smooth continuous rotation & orientation transforms based on global scroll progress
  useFrame(() => {
    if (groupRef.current) {
      // Continuous smooth rotation across the entire page scroll
      groupRef.current.rotation.y = progress * Math.PI * 4;
      groupRef.current.rotation.x = Math.sin(progress * Math.PI * 2) * 0.35;
      groupRef.current.rotation.z = Math.cos(progress * Math.PI) * 0.25;
    }
    if (sunGearRef.current) {
      sunGearRef.current.rotation.y = progress * Math.PI * 8;
    }
    if (ringGearRef.current) {
      ringGearRef.current.rotation.y = -progress * Math.PI * 2;
    }
  });

  // Stage-based Explosion & Linkage Displacement Calculations
  // Stage 4 (0.55 -> 0.85) is the 3D Disassembly phase
  const explodeFactor = Math.max(0, Math.min(1, (progress - 0.45) / 0.35));

  const topHousingY = 1.0 + explodeFactor * 2.8;
  const bottomHousingY = -1.0 - explodeFactor * 2.8;
  const planetRadius = 1.4 + explodeFactor * 1.6;
  const sunElevateY = explodeFactor * 0.8;
  const linkageReach = Math.sin(progress * Math.PI * 2) * 1.5;

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* 3D Laser Projection Vector Lines (Appears during stage transitions) */}
      {progress > 0.2 && (
        <group>
          {/* Vertical axis vector */}
          <line fill={undefined}>
            <bufferGeometry
              attach="geometry"
              onUpdate={(geo) => {
                const points = [
                  new THREE.Vector3(0, bottomHousingY - 0.5, 0),
                  new THREE.Vector3(0, topHousingY + 0.5, 0),
                ];
                geo.setFromPoints(points);
              }}
            />
            <lineDashedMaterial
              attach="material"
              color="#6fb3c2"
              dashSize={0.3}
              gapSize={0.15}
              linewidth={1.5}
            />
          </line>
        </group>
      )}

      {/* 1. TOP CAD HOUSING PLATE (Disassembles UP) */}
      <mesh position={[0, topHousingY, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[2.6, 2.6, 0.25, 32]} />
        <meshStandardMaterial
          color="#1c1c1f"
          metalness={0.9}
          roughness={0.2}
          wireframe={explodeFactor > 0.3}
          emissive="#6fb3c2"
          emissiveIntensity={explodeFactor * 0.4}
        />
      </mesh>

      {/* 2. CENTRAL SUN GEAR (High speed rotational core) */}
      <mesh ref={sunGearRef} position={[0, sunElevateY, 0]}>
        <cylinderGeometry args={[0.75, 0.75, 0.7, 20]} />
        <meshStandardMaterial
          color="#6fb3c2"
          metalness={0.95}
          roughness={0.1}
          emissive="#6fb3c2"
          emissiveIntensity={0.6}
        />
      </mesh>

      {/* 3. 6 PLANET GEARS (Radially expanding set) */}
      {[0, Math.PI / 3, (2 * Math.PI) / 3, Math.PI, (4 * Math.PI) / 3, (5 * Math.PI) / 3].map((angle, i) => {
        const x = Math.cos(angle + progress * Math.PI * 3) * planetRadius;
        const z = Math.sin(angle + progress * Math.PI * 3) * planetRadius;
        return (
          <group key={i} position={[x, 0, z]}>
            <mesh>
              <cylinderGeometry args={[0.5, 0.5, 0.6, 16]} />
              <meshStandardMaterial
                color="#3a3a40"
                metalness={0.85}
                roughness={0.25}
                wireframe={explodeFactor > 0.5}
              />
            </mesh>
            {/* Articulating Linkage Rod attached to planet hubs */}
            {progress > 0.25 && (
              <mesh position={[0, 0.5 + Math.sin(angle + progress * 4) * 0.3, 0]}>
                <boxGeometry args={[0.1, linkageReach * 0.5, 0.1]} />
                <meshStandardMaterial color="#6fb3c2" emissive="#6fb3c2" emissiveIntensity={0.4} />
              </mesh>
            )}
          </group>
        );
      })}

      {/* 4. OUTER ENCLOSING RING GEAR */}
      <mesh ref={ringGearRef} position={[0, 0, 0]}>
        <torusGeometry args={[2.8, 0.18, 16, 64]} />
        <meshStandardMaterial
          color="#9a9a9e"
          metalness={0.9}
          roughness={0.2}
          wireframe
        />
      </mesh>

      {/* 5. BOTTOM MOUNTING BASE PLATE (Disassembles DOWN) */}
      <mesh position={[0, bottomHousingY, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[3.0, 3.0, 0.3, 32]} />
        <meshStandardMaterial
          color="#131315"
          metalness={0.85}
          roughness={0.3}
          wireframe={explodeFactor > 0.4}
        />
      </mesh>
    </group>
  );
};

export const ContinuousEngine3DCanvas: React.FC<ContinuousEngine3DCanvasProps> = ({ progress }) => {
  return (
    <div className="w-full h-full relative cursor-grab active:cursor-grabbing">
      <Canvas
        camera={{ position: [0, 3, 8.5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        {/* Studio Lighting */}
        <ambientLight intensity={0.7} />
        <directionalLight position={[12, 18, 12]} intensity={1.8} color="#f2f2f0" />
        <pointLight position={[-12, -12, -10]} intensity={1.0} color="#6fb3c2" />

        {/* 3D CAD Grid Floor */}
        <CadGridFloor progress={progress} />

        {/* Continuous 3D Mechanical System */}
        <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.25}>
          <IntricateMechanicalSystem3D progress={progress} />
        </Float>

        <OrbitControls enableZoom={false} enablePan={false} maxPolarAngle={Math.PI / 1.7} />
      </Canvas>
    </div>
  );
};
