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

  // Clone scene & compute bounding box to auto-center & scale user ISS.glb CAD model
  const { clonedScene, scale } = useMemo(() => {
    if (!gltf || !gltf.scene) return { clonedScene: null, scale: 1 };
    const scene = gltf.scene.clone(true);

    const box = new THREE.Box3();
    let validCount = 0;

    scene.traverse((child: any) => {
      if (child.isMesh && child.geometry) {
        // Ensure geometry bounding box is computed
        child.geometry.computeBoundingBox();

        // Position attribute filtering to ignore outlier construction points (> 1000 units)
        const posAttr = child.geometry.attributes.position;
        if (posAttr) {
          const v = new THREE.Vector3();
          for (let i = 0; i < posAttr.count; i++) {
            v.fromBufferAttribute(posAttr, i);
            if (Math.abs(v.x) < 500 && Math.abs(v.y) < 500 && Math.abs(v.z) < 500) {
              const worldV = v.clone().applyMatrix4(child.matrixWorld);
              box.expandByPoint(worldV);
              validCount++;
            }
          }
        }

        // Enhance material visibility & contrast for dark CAD parts
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

    if (validCount > 0 && !box.isEmpty()) {
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
    // Precise scale calculation for ISS.glb (~190 units physical dimension -> 3.8 units target size)
    const targetScale = maxDim > 0 ? 3.8 / maxDim : 0.018;

    return { clonedScene: scene, scale: targetScale };
  }, [gltf]);

  // Gentle floating animation (stationary stance, no scroll rotation)
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
  // Path to user's ISS.glb file: public/cad/ISS.glb
  const defaultUrl = "/cad/ISS.glb";
  const activeUrl = customModelUrl || defaultUrl;

  return (
    <CadErrorBoundary fallback={null}>
      <Suspense fallback={null}>
        <CadModelInner url={activeUrl} />
      </Suspense>
    </CadErrorBoundary>
  );
};
