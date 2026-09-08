"use client";

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { getAssetPath } from "@/lib/assets";

const modelUrl = getAssetPath("/projects/hpr-l1-rocket/rocket-model.glb");

// --- USER'S ACTUAL GLB CAD MODEL COMPONENT ---
const UserGltfRocketModel: React.FC<{ progress?: number }> = ({ progress = 0 }) => {
  const { scene } = useGLTF(modelUrl);
  const groupRef = useRef<THREE.Group>(null);
  const plumeRef = useRef<THREE.Group>(null);

  const clonedScene = React.useMemo(() => {
    const clone = scene.clone(true);

    // Remove any embedded camera nodes that skew root matrix transforms
    const cameras: THREE.Object3D[] = [];
    clone.traverse((child) => {
      if (child.type.includes("Camera") || child.name.toLowerCase().includes("camera")) {
        cameras.push(child);
      }
    });
    cameras.forEach((c) => c.removeFromParent());

    // Center bounding box and normalize scale to fit ~5 units height
    const box = new THREE.Box3().setFromObject(clone);
    const size = box.getSize(new THREE.Vector3());
    const maxDim = Math.max(size.x, size.y, size.z);
    if (maxDim > 0) {
      const scale = 5.0 / maxDim;
      clone.scale.set(scale, scale, scale);
    }
    const center = box.getCenter(new THREE.Vector3());
    clone.position.sub(center.multiplyScalar(clone.scale.x));
    return clone;
  }, [scene]);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    if (groupRef.current) {
      // Rocket launch kinematics: ignition & takeoff at progress > 0.68
      const launchProgress = Math.max(0, (progress - 0.68) / 0.32);
      const launchAltitude = Math.pow(launchProgress, 1.8) * 28;

      const baseFloat = Math.sin(t * 1.5) * 0.12;
      groupRef.current.position.y = baseFloat + launchAltitude;
      groupRef.current.rotation.y = t * 0.4;
      groupRef.current.rotation.z = Math.sin(t * 2.0) * 0.02 * (1 + launchProgress);
    }

    if (plumeRef.current) {
      const isIgnited = progress > 0.62;
      const flicker = 1.0 + Math.sin(t * 30) * 0.15;
      plumeRef.current.scale.set(flicker, isIgnited ? 1.0 + Math.min(2.5, (progress - 0.62) * 5) : 0.2, flicker);
    }
  });

  const isEngineOn = progress > 0.62;

  return (
    <group ref={groupRef}>
      <primitive object={clonedScene} />

      {/* Dynamic Rocket Exhaust Launch Plume */}
      <group ref={plumeRef} position={[0, -2.8, 0]}>
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
      </group>
    </group>
  );
};

// --- INTRICATE PROCEDURAL 3D AEROSPACE ROCKET FALLBACK ---
export const ProceduralRocketCad3D: React.FC<{ progress?: number }> = ({ progress = 0 }) => {
  const groupRef = useRef<THREE.Group>(null);
  const plumeRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    if (groupRef.current) {
      const launchProgress = Math.max(0, (progress - 0.68) / 0.32);
      const launchAltitude = Math.pow(launchProgress, 1.8) * 28;
      const baseFloat = Math.sin(t * 1.5) * 0.12;
      groupRef.current.position.y = baseFloat + launchAltitude;
      groupRef.current.rotation.y = t * 0.3;
      groupRef.current.rotation.z = Math.sin(t * 2.0) * 0.02 * (1 + launchProgress);
    }

    if (plumeRef.current) {
      const isIgnited = progress > 0.62;
      const flicker = 1.0 + Math.sin(t * 30) * 0.15;
      plumeRef.current.scale.set(flicker, isIgnited ? 1.0 + Math.min(2.5, (progress - 0.62) * 5) : 0.2, flicker);
    }
  });

  const isEngineOn = progress > 0.62;

  return (
    <group ref={groupRef} scale={[0.65, 0.65, 0.65]}>
      {/* Payload Fairing */}
      <mesh position={[0, 4.2, 0]}>
        <coneGeometry args={[0.7, 1.8, 32]} />
        <meshStandardMaterial color="#f8fafc" metalness={0.85} roughness={0.15} />
      </mesh>
      {/* Interstage Ring */}
      <mesh position={[0, 3.25, 0]}>
        <cylinderGeometry args={[0.705, 0.705, 0.15, 32]} />
        <meshStandardMaterial color="#0f172a" metalness={0.9} roughness={0.3} />
      </mesh>
      {/* Second Stage Fuel Tank */}
      <mesh position={[0, 2.2, 0]}>
        <cylinderGeometry args={[0.7, 0.7, 1.9, 32]} />
        <meshStandardMaterial color="#f1f5f9" metalness={0.8} roughness={0.2} />
      </mesh>
      {/* First Stage Booster */}
      <mesh position={[0, -0.6, 0]}>
        <cylinderGeometry args={[0.7, 0.7, 3.6, 32]} />
        <meshStandardMaterial color="#e2e8f0" metalness={0.85} roughness={0.25} />
      </mesh>
      {/* Multi-Nozzle Engine Cluster */}
      <group position={[0, -2.7, 0]}>
        <mesh position={[0, -0.25, 0]} rotation={[Math.PI, 0, 0]}>
          <coneGeometry args={[0.25, 0.5, 24, 1, true]} />
          <meshStandardMaterial color="#334155" metalness={0.95} roughness={0.15} side={THREE.DoubleSide} />
        </mesh>
      </group>
      {/* Launch Plume */}
      <group ref={plumeRef} position={[0, -3.0, 0]}>
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
      </group>
    </group>
  );
};

// Error Boundary wrapper for GLB loading
class GltfErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback: React.ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) return this.props.fallback;
    return this.props.children;
  }
}

export const CustomCadModelLoader3D: React.FC<{ progress?: number }> = ({ progress = 0 }) => {
  return (
    <GltfErrorBoundary fallback={<ProceduralRocketCad3D progress={progress} />}>
      <React.Suspense fallback={<ProceduralRocketCad3D progress={progress} />}>
        <UserGltfRocketModel progress={progress} />
      </React.Suspense>
    </GltfErrorBoundary>
  );
};

useGLTF.preload(modelUrl);
