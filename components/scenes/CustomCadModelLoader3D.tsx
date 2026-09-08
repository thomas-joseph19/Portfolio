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
    console.warn("CAD Model Loader error caught safely:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

// --- HIGH-PRECISION TSX NATIVE 3D INTERNATIONAL SPACE STATION COMPONENT ---
const ISSPure3DModel: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);
  const dishRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      // Gentle floating animation (stationary stance, subtle vertical float)
      groupRef.current.position.y = Math.sin(clock.getElapsedTime() * 1.2) * 0.15;
    }
    if (dishRef.current) {
      dishRef.current.rotation.z = clock.getElapsedTime() * 0.4;
    }
  });

  return (
    <group ref={groupRef} scale={[0.95, 0.95, 0.95]}>
      {/* Central Pressurized Core Modules (Zvezda / Destiny / Unity Nodes) */}
      <mesh position={[0, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.75, 0.75, 4.0, 32]} />
        <meshStandardMaterial color="#d69e2e" metalness={0.9} roughness={0.25} />
      </mesh>

      {/* Titanium Docking Hub Rings */}
      {[-1.8, -0.6, 0.6, 1.8].map((x, idx) => (
        <mesh key={idx} position={[x, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.85, 0.85, 0.35, 24]} />
          <meshStandardMaterial color="#8a9ba8" metalness={0.95} roughness={0.15} />
        </mesh>
      ))}

      {/* Main Integrated Truss Structure (S0 / P1 / S1 Truss Beams) */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[0.35, 8.2, 0.35]} />
        <meshStandardMaterial color="#6fb3c2" metalness={0.9} wireframe />
      </mesh>

      {/* Dual Massive Solar Array Wings (Port & Starboard Arrays) */}
      {[-3.8, 3.8].map((yPos, sideIdx) => (
        <group key={sideIdx} position={[0, yPos, 0]}>
          {/* Solar Panel Mounting Frame */}
          <mesh position={[0, 0, 0]}>
            <boxGeometry args={[5.2, 0.15, 0.1]} />
            <meshStandardMaterial color="#2d3748" metalness={0.8} />
          </mesh>

          {/* Photovoltaic Panels (Upper & Lower arrays) */}
          {[-2.0, -0.7, 0.7, 2.0].map((xPos, pIdx) => (
            <group key={pIdx} position={[xPos, 0, 0]}>
              <mesh position={[0, 0, 1.5]}>
                <boxGeometry args={[1.1, 0.05, 2.8]} />
                <meshStandardMaterial
                  color="#1a365d"
                  emissive="#1a365d"
                  emissiveIntensity={0.4}
                  metalness={0.9}
                  roughness={0.1}
                />
              </mesh>
              <mesh position={[0, 0, -1.5]}>
                <boxGeometry args={[1.1, 0.05, 2.8]} />
                <meshStandardMaterial
                  color="#1a365d"
                  emissive="#1a365d"
                  emissiveIntensity={0.4}
                  metalness={0.9}
                  roughness={0.1}
                />
              </mesh>
            </group>
          ))}
        </group>
      ))}

      {/* High-Gain Parabolic Communications Radar Dish */}
      <group ref={dishRef} position={[0, 0, 2.0]}>
        <mesh rotation={[Math.PI / 4, 0, 0]}>
          <cylinderGeometry args={[1.0, 0.1, 0.35, 24]} />
          <meshStandardMaterial color="#f2f2f0" metalness={0.9} wireframe />
        </mesh>
        <mesh position={[0, 0.45, 0]}>
          <sphereGeometry args={[0.18, 16, 16]} />
          <meshStandardMaterial color="#6fb3c2" emissive="#6fb3c2" emissiveIntensity={0.8} />
        </mesh>
      </group>

      {/* Ion Thrusters (Glowing Cyan Plasma) */}
      {[-0.9, 0.9].map((zPos, idx) => (
        <mesh key={idx} position={[-2.2, 0, zPos]} rotation={[0, Math.PI / 2, 0]}>
          <coneGeometry args={[0.4, 0.8, 16]} />
          <meshStandardMaterial color="#4fd1c5" emissive="#4fd1c5" emissiveIntensity={1.2} />
        </mesh>
      ))}
    </group>
  );
};

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

  // Extract the ISS mesh directly (ignoring camera node offset) and center/scale it
  const { issMeshObject, scale } = useMemo(() => {
    if (!gltf || !gltf.scene) return { issMeshObject: null, scale: 1 };

    // Find ISS mesh in GLTF scene, ignoring camera nodes
    let issObject: THREE.Object3D | null = null;
    gltf.scene.traverse((child) => {
      if (child.name === "ISS" || (child as THREE.Mesh).isMesh) {
        if (!issObject) {
          issObject = child.clone(true);
        }
      }
    });

    if (!issObject) {
      issObject = gltf.scene.clone(true);
    }

    // Reset local matrix transforms on root object
    issObject.position.set(0, 0, 0);
    issObject.rotation.set(0, 0, 0);
    issObject.scale.set(1, 1, 1);

    // Compute bounding box over ISS geometry
    const box = new THREE.Box3().setFromObject(issObject);
    const center = new THREE.Vector3();
    const size = new THREE.Vector3();
    box.getCenter(center);
    box.getSize(size);

    // Center geometry at [0, 0, 0]
    issObject.position.sub(center);

    // Enhance materials
    issObject.traverse((child: any) => {
      if (child.isMesh && child.material) {
        child.material.side = THREE.DoubleSide;
        if (child.material.color) {
          if (
            child.material.color.r < 0.08 &&
            child.material.color.g < 0.08 &&
            child.material.color.b < 0.08
          ) {
            child.material.color.set("#5a6578");
          }
        }
      }
    });

    const maxDim = Math.max(size.x, size.y, size.z);
    // Explicit scale factor for ISS mesh
    const targetScale = maxDim > 0 && maxDim < 10000 ? 3.5 / maxDim : 0.025;

    return { issMeshObject: issObject, scale: targetScale };
  }, [gltf]);

  // Gentle floating animation (stationary stance, subtle vertical float)
  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(clock.getElapsedTime() * 1.2) * 0.15;
    }
  });

  if (!issMeshObject) {
    return <ISSPure3DModel />;
  }

  return (
    <group ref={groupRef} scale={[scale, scale, scale]}>
      <primitive object={issMeshObject} />
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
    <CadErrorBoundary fallback={<ISSPure3DModel />}>
      <Suspense fallback={<ISSPure3DModel />}>
        <CadModelInner url={activeUrl} />
      </Suspense>
    </CadErrorBoundary>
  );
};
