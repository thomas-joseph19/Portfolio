"use client";

import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

interface CustomCadModelLoader3DProps {
  customModelUrl?: string | null;
  progress?: number;
}

export const CustomCadModelLoader3D: React.FC<CustomCadModelLoader3DProps> = ({
  customModelUrl,
  progress = 0,
}) => {
  const groupRef = useRef<THREE.Group>(null);

  // PERMANENT HOMEPAGE 3D CAD MODEL PATH
  // Drop your model into: public/cad/homepage-cad.glb
  const defaultUrl = "/cad/homepage-cad.glb";
  const activeUrl = customModelUrl || defaultUrl;

  let gltfModel: any = null;
  try {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    gltfModel = useGLTF(activeUrl);
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
    return null; // Fallback to procedural 3D wireframe assembly when no GLTF file is provided
  }

  return (
    <group ref={groupRef}>
      <primitive object={gltfModel.scene} scale={1.8} />
    </group>
  );
};
