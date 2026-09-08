"use client";

import React, { useRef, useMemo, Suspense, Component, ReactNode } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader, DRACOLoader } from "three-stdlib";
import * as THREE from "three";

// Instantiate DRACOLoader for compressed CAD models
const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath("https://www.gstatic.com/draco/versioned/decoders/1.5.7/");

interface ErrorBoundaryProps {
  fallback: ReactNode;
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class CadErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.warn("CAD Model Loader safely caught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

interface ModelProps {
  url: string;
  progress: number;
}

const CadModelInner: React.FC<ModelProps> = ({ url, progress }) => {
  const groupRef = useRef<THREE.Group>(null);

  // Detect GitHub Pages /Portfolio path
  const isGhPages =
    typeof window !== "undefined" && window.location.pathname.startsWith("/Portfolio");
  const basePath = isGhPages ? "/Portfolio" : "";

  // Format URL properly
  const resolvedUrl = url.startsWith("blob:")
    ? url
    : url.startsWith("/")
    ? `${basePath}${url}`
    : url;

  // Load GLTF with Draco compression support
  const gltf = useLoader(GLTFLoader, resolvedUrl, (loader) => {
    loader.setDRACOLoader(dracoLoader);
  });

  // Clone scene & compute bounding box to auto-center & auto-scale any CAD model
  const { clonedScene, scale } = useMemo(() => {
    if (!gltf || !gltf.scene) return { clonedScene: null, scale: 1 };
    const scene = gltf.scene.clone(true);

    // Compute robust bounding box by filtering out extreme outlier nodes (> 1000 units)
    const box = new THREE.Box3();
    let validMeshes = 0;

    scene.traverse((child: any) => {
      if (child.isMesh && child.geometry) {
        child.geometry.computeBoundingBox();
        const meshBox = child.geometry.boundingBox.clone();
        meshBox.applyMatrix4(child.matrixWorld);

        // Check if mesh box is within sane CAD bounds (< 500 units from origin)
        const sizeX = Math.abs(meshBox.max.x - meshBox.min.x);
        const sizeY = Math.abs(meshBox.max.y - meshBox.min.y);
        const sizeZ = Math.abs(meshBox.max.z - meshBox.min.z);

        if (sizeX < 500 && sizeY < 500 && sizeZ < 500) {
          box.expandByObject(child);
          validMeshes++;
        }

        // Enhance material visibility & contrast for dark CAD parts
        child.material.side = THREE.DoubleSide;
        if (child.material.color) {
          if (
            child.material.color.r < 0.05 &&
            child.material.color.g < 0.05 &&
            child.material.color.b < 0.05
          ) {
            child.material.color.set("#5a6578");
          }
        }
      }
    });

    if (validMeshes === 0 || box.isEmpty()) {
      box.setFromObject(scene);
    }

    const center = new THREE.Vector3();
    const size = new THREE.Vector3();
    box.getCenter(center);
    box.getSize(size);

    // Center model at pivot [0, 0, 0]
    scene.position.sub(center);

    const maxDim = Math.max(size.x, size.y, size.z);
    // Target size ~3.2 units in 3D viewport space
    const targetScale = maxDim > 0 && maxDim < 10000 ? 3.2 / maxDim : 1.5;

    return { clonedScene: scene, scale: targetScale };
  }, [gltf]);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y = progress * Math.PI * 4;
      groupRef.current.rotation.x = Math.sin(progress * Math.PI) * 0.2;
    }
  });

  if (!clonedScene) return null;

  return (
    <group ref={groupRef} scale={[scale, scale, scale]}>
      <primitive object={clonedScene} />
    </group>
  );
};

// Fallback procedural geometry rendered while loading or if model fails
const ProceduralFallback: React.FC<{ progress: number }> = ({ progress }) => {
  const groupRef = useRef<THREE.Group>(null);
  const explode = Math.sin(progress * Math.PI * 4) * 1.2;

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y = progress * Math.PI * 4;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh position={[0, 1 + explode, 0]}>
        <cylinderGeometry args={[2.0, 2.0, 0.2, 24]} />
        <meshStandardMaterial color="#6fb3c2" metalness={0.9} wireframe />
      </mesh>
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.7, 0.7, 0.5, 16]} />
        <meshStandardMaterial color="#6fb3c2" emissive="#6fb3c2" emissiveIntensity={0.7} />
      </mesh>
      {[0, Math.PI / 2, Math.PI, (3 * Math.PI) / 2].map((ang, idx) => (
        <mesh key={idx} position={[Math.cos(ang) * (1.2 + explode), 0, Math.sin(ang) * (1.2 + explode)]}>
          <cylinderGeometry args={[0.5, 0.5, 0.4, 12]} />
          <meshStandardMaterial color="#f2f2f0" metalness={0.8} />
        </mesh>
      ))}
      <mesh position={[0, -1 - explode, 0]}>
        <cylinderGeometry args={[2.2, 2.2, 0.2, 24]} />
        <meshStandardMaterial color="#1c1c1f" metalness={0.8} wireframe />
      </mesh>
    </group>
  );
};

interface CustomCadModelLoader3DProps {
  customModelUrl?: string | null;
  progress?: number;
}

export const CustomCadModelLoader3D: React.FC<CustomCadModelLoader3DProps> = ({
  customModelUrl,
  progress = 0,
}) => {
  // PERMANENT HOMEPAGE 3D CAD MODEL PATH
  const defaultUrl = "/cad/homepage-cad.glb";
  const activeUrl = customModelUrl || defaultUrl;

  return (
    <CadErrorBoundary fallback={<ProceduralFallback progress={progress} />}>
      <Suspense fallback={<ProceduralFallback progress={progress} />}>
        <CadModelInner url={activeUrl} progress={progress} />
      </Suspense>
    </CadErrorBoundary>
  );
};
