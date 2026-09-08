"use client";

import React, { useRef, useMemo, Suspense, Component, ReactNode } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader, STLLoader, OBJLoader, DRACOLoader } from "three-stdlib";
import * as THREE from "three";

// Instantiate DRACOLoader for compressed GLTF/GLB models
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

// --- STL CAD MODEL LOADER ---
const StlCadModelInner: React.FC<{ url: string }> = ({ url }) => {
  const groupRef = useRef<THREE.Group>(null);
  const geometry = useLoader(STLLoader, url);

  const { mesh, scale } = useMemo(() => {
    if (!geometry) return { mesh: null, scale: 1 };
    const geom = geometry.clone();
    geom.computeVertexNormals();
    geom.computeBoundingBox();

    const box = geom.boundingBox || new THREE.Box3();
    const center = new THREE.Vector3();
    const size = new THREE.Vector3();
    box.getCenter(center);
    box.getSize(size);

    geom.center(); // Center geometry at pivot

    const maxDim = Math.max(size.x, size.y, size.z);
    const targetScale = maxDim > 0 ? 3.5 / maxDim : 1;

    const material = new THREE.MeshStandardMaterial({
      color: "#6fb3c2",
      metalness: 0.85,
      roughness: 0.2,
      side: THREE.DoubleSide,
    });

    const m = new THREE.Mesh(geom, material);
    return { mesh: m, scale: targetScale };
  }, [geometry]);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(clock.getElapsedTime() * 1.2) * 0.15;
    }
  });

  if (!mesh) return null;

  return (
    <group ref={groupRef} scale={[scale, scale, scale]}>
      <primitive object={mesh} />
    </group>
  );
};

// --- OBJ CAD MODEL LOADER ---
const ObjCadModelInner: React.FC<{ url: string }> = ({ url }) => {
  const groupRef = useRef<THREE.Group>(null);
  const obj = useLoader(OBJLoader, url);

  const { object3D, scale } = useMemo(() => {
    if (!obj) return { object3D: null, scale: 1 };
    const cloned = obj.clone(true);

    const box = new THREE.Box3().setFromObject(cloned);
    const center = new THREE.Vector3();
    const size = new THREE.Vector3();
    box.getCenter(center);
    box.getSize(size);

    cloned.position.sub(center);

    cloned.traverse((child: any) => {
      if (child.isMesh) {
        child.material = new THREE.MeshStandardMaterial({
          color: "#8a9ba8",
          metalness: 0.9,
          roughness: 0.25,
          side: THREE.DoubleSide,
        });
      }
    });

    const maxDim = Math.max(size.x, size.y, size.z);
    const targetScale = maxDim > 0 ? 3.5 / maxDim : 1;

    return { object3D: cloned, scale: targetScale };
  }, [obj]);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(clock.getElapsedTime() * 1.2) * 0.15;
    }
  });

  if (!object3D) return null;

  return (
    <group ref={groupRef} scale={[scale, scale, scale]}>
      <primitive object={object3D} />
    </group>
  );
};

// --- GLTF / GLB CAD MODEL LOADER ---
const GltfCadModelInner: React.FC<{ url: string }> = ({ url }) => {
  const groupRef = useRef<THREE.Group>(null);

  const gltf = useLoader(GLTFLoader, url, (loader) => {
    loader.setDRACOLoader(dracoLoader);
  });

  const { issMeshObject, scale } = useMemo(() => {
    if (!gltf || !gltf.scene) return { issMeshObject: null, scale: 1 };

    const fullAssembly = new THREE.Group();

    gltf.scene.children.forEach((child) => {
      // Exclude camera nodes to prevent scene offset
      if (child.name !== "current camera" && !(child as THREE.Camera).isCamera) {
        fullAssembly.add(child.clone(true));
      }
    });

    if (fullAssembly.children.length === 0) {
      fullAssembly.add(gltf.scene.clone(true));
    }

    fullAssembly.position.set(0, 0, 0);
    fullAssembly.rotation.set(0, 0, 0);

    const box = new THREE.Box3().setFromObject(fullAssembly);
    const center = new THREE.Vector3();
    const size = new THREE.Vector3();
    box.getCenter(center);
    box.getSize(size);

    fullAssembly.position.sub(center);

    fullAssembly.traverse((child: any) => {
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
    const targetScale = maxDim > 0 && maxDim < 10000 ? 3.5 / maxDim : 0.02;

    return { issMeshObject: fullAssembly, scale: targetScale };
  }, [gltf]);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.position.y = Math.sin(clock.getElapsedTime() * 1.2) * 0.15;
    }
  });

  if (!issMeshObject) return null;

  return (
    <group ref={groupRef} scale={[scale, scale, scale]}>
      <primitive object={issMeshObject} />
    </group>
  );
};

// --- HIGH-PRECISION TSX NATIVE 3D INTERNATIONAL SPACE STATION COMPONENT ---
const ISSPure3DModel: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);
  const dishRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (groupRef.current) {
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
          <mesh position={[0, 0, 0]}>
            <boxGeometry args={[5.2, 0.15, 0.1]} />
            <meshStandardMaterial color="#2d3748" metalness={0.8} />
          </mesh>

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

interface CustomCadModelLoader3DProps {
  customModelUrl?: string | null;
  progress?: number;
}

export const CustomCadModelLoader3D: React.FC<CustomCadModelLoader3DProps> = ({
  customModelUrl,
}) => {
  const isGhPages =
    typeof window !== "undefined" && window.location.pathname.startsWith("/Portfolio");
  const basePath = isGhPages ? "/Portfolio" : "";

  const defaultUrl = customModelUrl || "/cad/ISS.glb";
  const resolvedUrl = defaultUrl.startsWith("blob:")
    ? defaultUrl
    : defaultUrl.startsWith("/")
    ? `${basePath}${defaultUrl}`
    : defaultUrl;

  const ext = resolvedUrl.split(".").pop()?.toLowerCase();

  return (
    <CadErrorBoundary fallback={<ISSPure3DModel />}>
      <Suspense fallback={<ISSPure3DModel />}>
        {ext === "stl" ? (
          <StlCadModelInner url={resolvedUrl} />
        ) : ext === "obj" ? (
          <ObjCadModelInner url={resolvedUrl} />
        ) : (
          <GltfCadModelInner url={resolvedUrl} />
        )}
      </Suspense>
    </CadErrorBoundary>
  );
};
