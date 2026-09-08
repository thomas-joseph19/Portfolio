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
    const targetScale = maxDim > 0 && maxDim < 10000 ? 3.5 / maxDim : 1.5;

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

// --- INTRICATE 3D INTERNATIONAL SPACE STATION / SATELLITE CAD ASSEMBLY ---
const SpaceStationCadModel: React.FC<{ progress: number }> = ({ progress }) => {
  const stationRef = useRef<THREE.Group>(null);
  const dishRef = useRef<THREE.Group>(null);
  const solarRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (stationRef.current) {
      stationRef.current.rotation.y = progress * Math.PI * 4;
      stationRef.current.rotation.x = Math.sin(progress * Math.PI * 2) * 0.15;
    }
    if (dishRef.current) {
      dishRef.current.rotation.z = progress * Math.PI * 6;
    }
    if (solarRef.current) {
      solarRef.current.rotation.x = Math.sin(progress * Math.PI * 3) * 0.25;
    }
  });

  return (
    <group ref={stationRef} scale={[0.9, 0.9, 0.9]}>
      {/* Central Pressurized Core Module (Destiny / Zvezda style) */}
      <mesh position={[0, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.75, 0.75, 3.8, 32]} />
        <meshStandardMaterial color="#d69e2e" metalness={0.9} roughness={0.25} />
      </mesh>

      {/* Titanium Docking Hubs & Node Rings */}
      {[-1.6, 0, 1.6].map((x, idx) => (
        <mesh key={idx} position={[x, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.85, 0.85, 0.4, 24]} />
          <meshStandardMaterial color="#8a9ba8" metalness={0.95} roughness={0.15} />
        </mesh>
      ))}

      {/* Cross Structural Lattice Truss Beam */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[0.3, 7.5, 0.3]} />
        <meshStandardMaterial color="#6fb3c2" metalness={0.9} wireframe />
      </mesh>

      {/* Dual Massive Solar Array Wings (Left & Right) */}
      <group ref={solarRef}>
        {[-3.6, 3.6].map((yPos, sideIdx) => (
          <group key={sideIdx} position={[0, yPos, 0]}>
            {/* Solar Panel Mounting Frame */}
            <mesh position={[0, 0, 0]}>
              <boxGeometry args={[4.8, 0.15, 0.1]} />
              <meshStandardMaterial color="#2d3748" metalness={0.8} />
            </mesh>

            {/* Photovoltaic Panels (Upper & Lower arrays) */}
            {[-1.8, -0.6, 0.6, 1.8].map((xPos, pIdx) => (
              <group key={pIdx} position={[xPos, 0, 0]}>
                <mesh position={[0, 0, 1.4]}>
                  <boxGeometry args={[1.0, 0.05, 2.5]} />
                  <meshStandardMaterial color="#1a365d" emissive="#1a365d" emissiveIntensity={0.4} metalness={0.9} roughness={0.1} />
                </mesh>
                <mesh position={[0, 0, -1.4]}>
                  <boxGeometry args={[1.0, 0.05, 2.5]} />
                  <meshStandardMaterial color="#1a365d" emissive="#1a365d" emissiveIntensity={0.4} metalness={0.9} roughness={0.1} />
                </mesh>
              </group>
            ))}
          </group>
        ))}
      </group>

      {/* High-Gain Parabolic Communications Radar Dish */}
      <group ref={dishRef} position={[0, 0, 1.8]}>
        <mesh rotation={[Math.PI / 4, 0, 0]}>
          <cylinderGeometry args={[0.9, 0.1, 0.3, 24]} />
          <meshStandardMaterial color="#f2f2f0" metalness={0.9} wireframe />
        </mesh>
        <mesh position={[0, 0.4, 0]}>
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshStandardMaterial color="#6fb3c2" emissive="#6fb3c2" emissiveIntensity={0.8} />
        </mesh>
      </group>

      {/* Ion Plasma Thruster Engines (Glowing Cyan Plasma) */}
      {[-0.8, 0.8].map((zPos, idx) => (
        <mesh key={idx} position={[-2.1, 0, zPos]} rotation={[0, Math.PI / 2, 0]}>
          <coneGeometry args={[0.35, 0.7, 16]} />
          <meshStandardMaterial color="#4fd1c5" emissive="#4fd1c5" emissiveIntensity={1.2} />
        </mesh>
      ))}
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
  const defaultUrl = "/cad/homepage-cad.glb";
  const activeUrl = customModelUrl || defaultUrl;

  return (
    <CadErrorBoundary fallback={<SpaceStationCadModel progress={progress} />}>
      <Suspense fallback={<SpaceStationCadModel progress={progress} />}>
        <CadModelInner url={activeUrl} progress={progress} />
      </Suspense>
    </CadErrorBoundary>
  );
};
