"use client";

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

interface CustomCadModelLoader3DProps {
  url?: string;
  progress?: number;
}

export const CustomCadModelLoader3D: React.FC<CustomCadModelLoader3DProps> = ({
  url = "/models/custom-cad.glb",
  progress = 0,
}) => {
  const groupRef = useRef<THREE.Group>(null);

  // Try loading GLTF / GLB model if available
  let gltfModel: any = null;
  try {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    gltfModel = useGLTF(url);
  } catch {
    gltfModel = null;
  }

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y = progress * Math.PI * 4;
      groupRef.current.rotation.x = Math.sin(progress * Math.PI) * 0.25;
    }
  });

  if (!gltfModel || !gltfModel.scene) {
    return null; // Fallback to procedural 3D mechanical system when no custom file is uploaded
  }

  return (
    <group ref={groupRef}>
      <primitive object={gltfModel.scene} scale={1.5} />
    </group>
  );
};
