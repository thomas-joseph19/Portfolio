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
    console.warn("CAD Model Loader error:", error, errorInfo);
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
}

const CadModelInner: React.FC<ModelProps> = ({ url }) => {
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

  // Clone scene & compute bounding box to auto-center & scale user GLB CAD model
  const { clonedScene, scale } = useMemo(() => {
    if (!gltf || !gltf.scene) return { clonedScene: null, scale: 1 };
    const scene = gltf.scene.clone(true);

    // Compute bounding box excluding outlier datum nodes (> 1000 units)
    const box = new THREE.Box3();
    let validMeshes = 0;

    scene.traverse((child: any) => {
      if (child.isMesh && child.geometry) {
        child.geometry.computeBoundingBox();
        const meshBox = child.geometry.boundingBox.clone();
        meshBox.applyMatrix4(child.matrixWorld);

        const sizeX = Math.abs(meshBox.max.x - meshBox.min.x);
        const sizeY = Math.abs(meshBox.max.y - meshBox.min.y);
        const sizeZ = Math.abs(meshBox.max.z - meshBox.min.z);

        // Filter out outlier nodes
        if (sizeX < 500 && sizeY < 500 && sizeZ < 500 && Math.abs(meshBox.min.x) < 500) {
          box.expandByObject(child);
          validMeshes++;
        }

        // Enhance material visibility & contrast
        child.material.side = THREE.DoubleSide;
        if (child.material.color) {
          if (
            child.material.color.r < 0.08 &&
            child.material.color.g < 0.08 &&
            child.material.color.b < 0.08
          ) {
            child.material.color.set("#64748b");
          }
        }
      }
    });

    const center = new THREE.Vector3();
    const size = new THREE.Vector3();

    if (validMeshes > 0 && !box.isEmpty()) {
      box.getCenter(center);
      box.getSize(size);
    } else {
      box.setFromObject(scene);
      box.getCenter(center);
      box.getSize(size);
    }

    // Center model at pivot [0, 0, 0]
    scene.position.sub(center);

    const maxDim = Math.max(size.x, size.y, size.z);
    // Explicit scale for user's CAD model: scale factor between 0.02 and 0.05
    let targetScale = 0.035;
    if (maxDim > 0 && maxDim < 1000) {
      targetScale = 3.5 / maxDim;
    }

    return { clonedScene: scene, scale: targetScale };
  }, [gltf]);

  // Gentle floating animation (no rotation on scroll, just subtle float up/down)
  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(clock.getElapsedTime() * 1.2) * 0.15;
    }
  });

  if (!clonedScene) return null;

  return (
    <group ref={groupRef} scale={[scale, scale, scale]}>
      <primitive object={clonedScene} />
    </group>
  );
};

interface CustomCadModelLoader3DProps {
  customModelUrl?: string | null;
  progress?: number;
}

export const CustomCadModelLoader3D: React.FC<CustomCadModelLoader3DProps> = ({
  customModelUrl,
}) => {
  // User's GLB model file: public/cad/homepage-cad.glb
  const defaultUrl = "/cad/homepage-cad.glb";
  const activeUrl = customModelUrl || defaultUrl;

  return (
    <CadErrorBoundary fallback={null}>
      <Suspense fallback={null}>
        <CadModelInner url={activeUrl} />
      </Suspense>
    </CadErrorBoundary>
  );
};
