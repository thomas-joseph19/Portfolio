"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

interface ExplodedCad3DCanvasProps {
  progress: number; // 0.0 -> 1.0 scroll progress
}

const CadGrid3D: React.FC = () => {
  return (
    <gridHelper
      args={[20, 20, "#6fb3c2", "#2a2a2e"]}
      position={[0, -3, 0]}
    />
  );
};

const ExplodedPlanetaryGear3D: React.FC<{ progress: number }> = ({ progress }) => {
  const groupRef = useRef<THREE.Group>(null);

  // Smooth rotation animation in 3D space based on scroll progress
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y = progress * Math.PI * 2.5;
      groupRef.current.rotation.x = 0.3 + Math.sin(progress * Math.PI) * 0.25;
    }
  });

  // Calculate exploded separation distances in 3D space
  const explodeDistance = progress * 2.5;
  const topPlateY = 0.8 + explodeDistance * 1.5;
  const bottomPlateY = -0.8 - explodeDistance * 1.5;
  const planetRadius = 1.2 + explodeDistance * 0.9;
  const sunGearY = progress * 0.6;

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* 3D Exploded Projection Vector Lines */}
      {progress > 0.05 && (
        <group>
          {/* Vertical axis vector */}
          <line fill={undefined}>
            <bufferGeometry
              attach="geometry"
              onUpdate={(geo) => {
                const points = [
                  new THREE.Vector3(0, bottomPlateY, 0),
                  new THREE.Vector3(0, topPlateY, 0),
                ];
                geo.setFromPoints(points);
              }}
            />
            <lineDashedMaterial
              attach="material"
              color="#6fb3c2"
              dashSize={0.2}
              gapSize={0.1}
              linewidth={1}
            />
          </line>
        </group>
      )}

      {/* 1. TOP CAD HOUSING PLATE */}
      <mesh position={[0, topPlateY, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[2.2, 2.2, 0.2, 32]} />
        <meshStandardMaterial
          color="#1c1c1f"
          metalness={0.9}
          roughness={0.2}
          wireframe={progress > 0.4}
          emissive="#6fb3c2"
          emissiveIntensity={progress * 0.3}
        />
      </mesh>

      {/* 2. CENTRAL SUN GEAR (3D Mesh) */}
      <mesh position={[0, sunGearY, 0]}>
        <cylinderGeometry args={[0.7, 0.7, 0.6, 16]} />
        <meshStandardMaterial
          color="#6fb3c2"
          metalness={0.95}
          roughness={0.1}
          emissive="#6fb3c2"
          emissiveIntensity={0.5}
        />
      </mesh>

      {/* 3. PLANET GEARS (4 Radial Gears expanding in 3D) */}
      {[0, Math.PI / 2, Math.PI, (3 * Math.PI) / 2].map((angle, i) => {
        const x = Math.cos(angle + progress * Math.PI) * planetRadius;
        const z = Math.sin(angle + progress * Math.PI) * planetRadius;
        return (
          <mesh key={i} position={[x, 0, z]}>
            <cylinderGeometry args={[0.55, 0.55, 0.5, 12]} />
            <meshStandardMaterial
              color="#3a3a40"
              metalness={0.8}
              roughness={0.3}
              wireframe={progress > 0.6}
            />
          </mesh>
        );
      })}

      {/* 4. OUTER RING GEAR (Enclosing Casing) */}
      <mesh position={[0, 0, 0]}>
        <torusGeometry args={[2.4, 0.15, 16, 48]} />
        <meshStandardMaterial
          color="#9a9a9e"
          metalness={0.9}
          roughness={0.2}
          wireframe
        />
      </mesh>

      {/* 5. BOTTOM BASE MOUNTING PLATE */}
      <mesh position={[0, bottomPlateY, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[2.5, 2.5, 0.25, 32]} />
        <meshStandardMaterial
          color="#131315"
          metalness={0.85}
          roughness={0.3}
          wireframe={progress > 0.5}
        />
      </mesh>
    </group>
  );
};

export const ExplodedCad3DCanvas: React.FC<ExplodedCad3DCanvasProps> = ({ progress }) => {
  return (
    <div className="w-full h-full relative cursor-grab active:cursor-grabbing">
      <Canvas
        camera={{ position: [0, 2.5, 7.5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        {/* Ambient & Directional CAD Studio Lighting */}
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 15, 10]} intensity={1.5} color="#f2f2f0" />
        <pointLight position={[-10, -10, -10]} intensity={0.8} color="#6fb3c2" />

        {/* 3D CAD Grid Floor */}
        <CadGrid3D />

        {/* 3D Exploded Planetary Gear Group */}
        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
          <ExplodedPlanetaryGear3D progress={progress} />
        </Float>

        {/* Orbit Controls for manual drag/rotate inspection */}
        <OrbitControls enableZoom={false} enablePan={false} maxPolarAngle={Math.PI / 1.8} />
      </Canvas>
    </div>
  );
};
