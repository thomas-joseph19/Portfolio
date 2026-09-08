"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Html, Float } from "@react-three/drei";
import * as THREE from "three";
import { getFeaturedProjects } from "@/lib/content";
import { TagPill } from "@/components/ui/TagPill";
import { Button } from "@/components/ui/Button";
import { MediaPlaceholder } from "@/components/media/MediaPlaceholder";
import { CustomCadModelLoader3D } from "./CustomCadModelLoader3D";

// --- EYE-LEVEL 3D CAMERA FLIGHT CONTROLLER ---
interface CameraFlightProps {
  progress: number; // 0.0 -> 1.0 virtual scroll progress
}

const CameraFlightController: React.FC<CameraFlightProps> = ({ progress }) => {
  const { camera } = useThree();

  // Damped Eye-Level Camera Waypoints
  // All camera targets keep Y near eye-level (y = 0.2) to eliminate top-down wall slope!
  useFrame(() => {
    let targetPos = new THREE.Vector3(0, 0.2, 14);
    let targetLook = new THREE.Vector3(0, 0.2, 10);

    if (progress <= 0.25) {
      const t = progress / 0.25; // 0 -> 1
      targetPos.lerpVectors(
        new THREE.Vector3(0, 0.2, 14),
        new THREE.Vector3(7, 0.2, 4),
        t
      );
      targetLook.lerpVectors(
        new THREE.Vector3(0, 0.2, 10),
        new THREE.Vector3(7, 0.2, 0),
        t
      );
    } else if (progress <= 0.5) {
      const t = (progress - 0.25) / 0.25;
      targetPos.lerpVectors(
        new THREE.Vector3(7, 0.2, 4),
        new THREE.Vector3(0, 0.2, -7),
        t
      );
      targetLook.lerpVectors(
        new THREE.Vector3(7, 0.2, 0),
        new THREE.Vector3(0, 0.2, -12),
        t
      );
    } else if (progress <= 0.75) {
      const t = (progress - 0.5) / 0.25;
      targetPos.lerpVectors(
        new THREE.Vector3(0, 0.2, -7),
        new THREE.Vector3(-7, 0.2, -19),
        t
      );
      targetLook.lerpVectors(
        new THREE.Vector3(0, 0.2, -12),
        new THREE.Vector3(-7, 0.2, -24),
        t
      );
    } else {
      const t = (progress - 0.75) / 0.25;
      targetPos.lerpVectors(
        new THREE.Vector3(-7, 0.2, -19),
        new THREE.Vector3(0, 0.2, -33),
        t
      );
      targetLook.lerpVectors(
        new THREE.Vector3(-7, 0.2, -24),
        new THREE.Vector3(0, 0.2, -38),
        t
      );
    }

    // Damped camera flight transition
    camera.position.lerp(targetPos, 0.08);
    camera.lookAt(targetLook);
  });

  return null;
};

// --- 3D ENVIRONMENT CAD GRID ---
const InfiniteCadGrid: React.FC = () => {
  return (
    <gridHelper
      args={[120, 120, "#6fb3c2", "#2a2a2e"]}
      position={[0, -3.5, -15]}
    />
  );
};

// --- NODE 1: HERO / NAME NODE (Z = 10, EYE LEVEL) ---
const HeroGearNode3D: React.FC<{ progress: number }> = ({ progress }) => {
  const meshRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y = progress * Math.PI * 4;
    }
  });

  return (
    <group position={[0, 0.2, 10]}>
      {/* Background CAD Gear Mesh */}
      <group ref={meshRef} position={[0, 0, -2]}>
        <mesh>
          <cylinderGeometry args={[3.2, 3.2, 0.3, 32]} />
          <meshStandardMaterial color="#1c1c1f" metalness={0.9} wireframe />
        </mesh>
        <mesh>
          <torusGeometry args={[3.8, 0.12, 16, 48]} />
          <meshStandardMaterial color="#6fb3c2" emissive="#6fb3c2" emissiveIntensity={0.5} />
        </mesh>
      </group>

      {/* Upright Front-Facing HTML Card (No Top-Down Slope!) */}
      <Html position={[0, 0, 0]} center distanceFactor={7.5}>
        <div className="w-[680px] text-center space-y-6 select-none font-sans">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[var(--radius-sm)] border border-[var(--border-accent)] bg-[var(--accent-dim)] shadow-xl backdrop-blur-md">
            <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent)] animate-ping" />
            <span className="mono-label text-xs font-semibold text-[var(--accent)] tracking-wider">
              [AWAITING INTRODUCTION LABEL]
            </span>
          </div>

          <div className="p-10 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--surface-graphite)]/95 backdrop-blur-md space-y-4 shadow-2xl">
            <div className="mono-label text-xs tracking-widest text-[var(--accent)]">
              SYSTEM_PROFILE // HERO_01
            </div>

            <h1 className="text-5xl sm:text-6xl font-extrabold text-[var(--text-primary)] font-heading tracking-tight leading-none">
              [AWAITING NAME]
            </h1>

            <div className="h-0.5 w-36 bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent mx-auto my-4" />

            <p className="mono-label text-lg text-[var(--text-secondary)] tracking-wider">
              [AWAITING PROFESSIONAL TITLE]
            </p>
          </div>
        </div>
      </Html>
    </group>
  );
};

// --- NODE 2: STATEMENT LINKAGE NODE (X = 7, Z = 0, EYE LEVEL) ---
const LinkageNode3D: React.FC<{ progress: number }> = ({ progress }) => {
  const armRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (armRef.current) {
      armRef.current.rotation.z = Math.sin(progress * Math.PI * 6) * 0.5;
    }
  });

  return (
    <group position={[7, 0.2, 0]}>
      <group ref={armRef} position={[-2.5, 0, -1]}>
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[0.2, 3.5, 0.2]} />
          <meshStandardMaterial color="#6fb3c2" emissive="#6fb3c2" emissiveIntensity={0.6} />
        </mesh>
        <mesh position={[0, 1.75, 0]}>
          <sphereGeometry args={[0.35, 16, 16]} />
          <meshStandardMaterial color="#f2f2f0" metalness={0.9} />
        </mesh>
      </group>

      <Html position={[0, 0, 0]} center distanceFactor={7.5}>
        <div className="w-[620px] text-center space-y-6 select-none font-sans">
          <div className="mono-label text-xs tracking-widest text-[var(--accent)]">
            PHILOSOPHY // NODE_02
          </div>
          <blockquote className="text-2xl sm:text-3xl font-light leading-relaxed text-[var(--text-primary)] border-l-4 border-[var(--accent)] pl-6 text-left font-heading bg-[var(--surface-graphite)]/95 p-8 rounded-[var(--radius-md)] border border-[var(--border-subtle)] backdrop-blur-md shadow-2xl">
            “[AWAITING ENGINEERING STATEMENT]”
          </blockquote>
        </div>
      </Html>
    </group>
  );
};

// --- NODE 3: PROFILE HUD NODE (Z = -12, EYE LEVEL) ---
const ProfileNode3D: React.FC = () => {
  return (
    <group position={[0, 0.2, -12]}>
      <Html position={[0, 0, 0]} center distanceFactor={7.5}>
        <div className="w-[780px] space-y-6 select-none font-sans">
          <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-3 bg-[var(--bg-primary)]/90 p-3 rounded-[var(--radius-sm)]">
            <div className="mono-label text-xs tracking-widest text-[var(--accent)]">
              SYSTEM_PROFILE // NODE_03
            </div>
            <div className="mono-label text-xs text-[var(--text-muted)]">SPECIFICATION: VER_1.0</div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--surface-graphite)]/95 backdrop-blur-md space-y-1 shadow-xl">
              <div className="mono-label text-[10px] text-[var(--text-muted)]">01 // DISCIPLINE</div>
              <div className="text-xl font-bold text-[var(--text-primary)] font-heading">[AWAITING DISCIPLINE]</div>
            </div>
            <div className="p-6 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--surface-graphite)]/95 backdrop-blur-md space-y-1 shadow-xl">
              <div className="mono-label text-[10px] text-[var(--text-muted)]">02 // SECONDARY</div>
              <div className="text-xl font-bold text-[var(--text-primary)] font-heading">[AWAITING SECONDARY DISCIPLINE]</div>
            </div>
            <div className="p-6 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--surface-graphite)]/95 backdrop-blur-md space-y-1 col-span-2 shadow-xl">
              <div className="mono-label text-[10px] text-[var(--text-muted)]">03 // CORE FOCUS</div>
              <div className="text-sm text-[var(--text-secondary)] font-mono">[AWAITING ENGINEERING FOCUS]</div>
            </div>
            <div className="p-6 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--surface-graphite)]/95 backdrop-blur-md space-y-3 col-span-2 shadow-xl">
              <div className="mono-label text-[10px] text-[var(--text-muted)]">04 // SKILLS</div>
              <div className="flex flex-wrap gap-2">
                <TagPill label="[AWAITING SKILLS]" variant="accent" size="sm" />
                <TagPill label="CAD Modeling" variant="default" size="sm" />
                <TagPill label="FEA Stress Analysis" variant="default" size="sm" />
                <TagPill label="Kinematics" variant="default" size="sm" />
              </div>
            </div>
          </div>
        </div>
      </Html>
    </group>
  );
};

// --- NODE 4: EXPLODED PLANETARY CAD ASSEMBLY (X = -7, Z = -24, EYE LEVEL) ---
const ExplodedAssemblyNode3D: React.FC<{ progress: number }> = ({ progress }) => {
  const groupRef = useRef<THREE.Group>(null);
  const explode = Math.sin(progress * Math.PI * 4) * 1.5;

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y = progress * Math.PI * 4;
    }
  });

  return (
    <group position={[-7, 0.2, -24]}>
      {/* Custom Uploaded CAD Model Loader (or Procedural Fallback) */}
      <CustomCadModelLoader3D progress={progress} />

      <group ref={groupRef}>
        {/* Top Plate */}
        <mesh position={[0, 1 + explode, 0]}>
          <cylinderGeometry args={[2.2, 2.2, 0.2, 24]} />
          <meshStandardMaterial color="#6fb3c2" metalness={0.9} wireframe />
        </mesh>

        {/* Sun Gear */}
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.75, 0.75, 0.5, 16]} />
          <meshStandardMaterial color="#6fb3c2" emissive="#6fb3c2" emissiveIntensity={0.7} />
        </mesh>

        {/* Planet Gears */}
        {[0, Math.PI / 2, Math.PI, (3 * Math.PI) / 2].map((ang, idx) => (
          <mesh key={idx} position={[Math.cos(ang) * (1.3 + explode), 0, Math.sin(ang) * (1.3 + explode)]}>
            <cylinderGeometry args={[0.55, 0.55, 0.4, 12]} />
            <meshStandardMaterial color="#f2f2f0" metalness={0.8} />
          </mesh>
        ))}

        {/* Bottom Base */}
        <mesh position={[0, -1 - explode, 0]}>
          <cylinderGeometry args={[2.4, 2.4, 0.2, 24]} />
          <meshStandardMaterial color="#1c1c1f" metalness={0.8} wireframe />
        </mesh>
      </group>
    </group>
  );
};

// --- NODE 5: FEATURED PROJECTS (Z = -38, EYE LEVEL) ---
const ProjectsNode3D: React.FC = () => {
  const featuredProjects = getFeaturedProjects();

  return (
    <group position={[0, 0.2, -38]}>
      <Html position={[0, 0, 0]} center distanceFactor={7.5}>
        <div className="w-[880px] space-y-6 select-none font-sans">
          <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-3 bg-[var(--bg-primary)]/90 p-3 rounded-[var(--radius-sm)]">
            <div className="mono-label text-xs tracking-widest text-[var(--accent)]">
              FEATURED_PROJECTS // NODE_05
            </div>
            <Button href="/projects" variant="outline" size="sm">
              VIEW ARCHIVE →
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {featuredProjects.map((project) => (
              <div key={project.slug} className="p-5 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--surface-graphite)]/95 backdrop-blur-md space-y-3 shadow-xl">
                <MediaPlaceholder item={project.thumbnail} />
                <div className="text-base font-bold text-[var(--text-primary)] font-heading">{project.title || "[AWAITING TITLE]"}</div>
                <div className="text-xs text-[var(--text-secondary)] line-clamp-2">{project.shortDescription}</div>
                <Link href={`/projects/${project.slug}`} className="text-xs text-[var(--accent)] font-mono block hover:underline">
                  VIEW CAD & SPEC →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </Html>
    </group>
  );
};

// --- NODE 6: CONTINUATION PATHWAYS (Z = -48, EYE LEVEL) ---
const ContinuationNode3D: React.FC = () => {
  return (
    <group position={[0, 0.2, -48]}>
      <Html position={[0, 0, 0]} center distanceFactor={7.5}>
        <div className="w-[700px] text-center space-y-6 select-none bg-[var(--surface-graphite)]/95 p-10 rounded-[var(--radius-md)] border border-[var(--border-subtle)] backdrop-blur-md shadow-2xl font-sans">
          <div className="mono-label text-xs tracking-widest text-[var(--accent)]">
            SYSTEM_TERMINAL // NODE_06
          </div>
          <h2 className="text-4xl font-extrabold text-[var(--text-primary)] font-heading">
            EXPLORE THE ARCHITECTURE
          </h2>
          <div className="flex justify-center gap-4 pt-2">
            <Button href="/projects" variant="primary" size="md">
              PROJECT ARCHIVE
            </Button>
            <Button href="/resume" variant="secondary" size="md">
              RESUME
            </Button>
            <Button href="/contact" variant="outline" size="md">
              CONTACT
            </Button>
          </div>
        </div>
      </Html>
    </group>
  );
};

export const Master3DUniverse: React.FC = () => {
  const [virtualProgress, setVirtualProgress] = useState(0);

  // Wheel & Touch Virtual Scroll Controller
  const handleWheel = useCallback((e: WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY * 0.0006;
    setVirtualProgress((prev) => Math.max(0, Math.min(1, prev + delta)));
  }, []);

  const touchStartRef = useRef(0);
  const handleTouchStart = useCallback((e: TouchEvent) => {
    touchStartRef.current = e.touches[0].clientY;
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    e.preventDefault();
    const delta = (touchStartRef.current - e.touches[0].clientY) * 0.001;
    touchStartRef.current = e.touches[0].clientY;
    setVirtualProgress((prev) => Math.max(0, Math.min(1, prev + delta)));
  }, []);

  useEffect(() => {
    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [handleWheel, handleTouchStart, handleTouchMove]);

  const jumpToProgress = (target: number) => {
    setVirtualProgress(target);
  };

  return (
    <div className="fixed inset-0 h-screen w-screen overflow-hidden bg-[var(--bg-primary)] text-[var(--text-primary)] select-none">
      {/* Eye-Level 3D WebGL Canvas */}
      <Canvas gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={0.9} />
        <directionalLight position={[10, 15, 15]} intensity={1.6} color="#f2f2f0" />
        <pointLight position={[-10, -10, -10]} intensity={1.0} color="#6fb3c2" />

        <CameraFlightController progress={virtualProgress} />
        <InfiniteCadGrid />

        <Float speed={1} rotationIntensity={0.1} floatIntensity={0.2}>
          <HeroGearNode3D progress={virtualProgress} />
          <LinkageNode3D progress={virtualProgress} />
          <ProfileNode3D />
          <ExplodedAssemblyNode3D progress={virtualProgress} />
          <ProjectsNode3D />
          <ContinuationNode3D />
        </Float>
      </Canvas>

      {/* On-Screen Waypoint Navigation Jump Bar */}
      <div className="fixed top-20 right-6 z-40 flex flex-col gap-2 bg-[var(--bg-primary)]/90 p-2 rounded-[var(--radius-sm)] border border-[var(--border-subtle)] backdrop-blur-md">
        <button onClick={() => jumpToProgress(0.0)} className={`mono-label px-2.5 py-1 text-[10px] rounded-[var(--radius-sm)] text-left cursor-pointer transition-colors ${virtualProgress <= 0.15 ? "bg-[var(--accent)] text-[var(--bg-primary)] font-bold" : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"}`}>
          01 // HERO (NAME)
        </button>
        <button onClick={() => jumpToProgress(0.25)} className={`mono-label px-2.5 py-1 text-[10px] rounded-[var(--radius-sm)] text-left cursor-pointer transition-colors ${virtualProgress > 0.15 && virtualProgress <= 0.38 ? "bg-[var(--accent)] text-[var(--bg-primary)] font-bold" : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"}`}>
          02 // STATEMENT
        </button>
        <button onClick={() => jumpToProgress(0.5)} className={`mono-label px-2.5 py-1 text-[10px] rounded-[var(--radius-sm)] text-left cursor-pointer transition-colors ${virtualProgress > 0.38 && virtualProgress <= 0.62 ? "bg-[var(--accent)] text-[var(--bg-primary)] font-bold" : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"}`}>
          03 // PROFILE
        </button>
        <button onClick={() => jumpToProgress(0.75)} className={`mono-label px-2.5 py-1 text-[10px] rounded-[var(--radius-sm)] text-left cursor-pointer transition-colors ${virtualProgress > 0.62 && virtualProgress <= 0.88 ? "bg-[var(--accent)] text-[var(--bg-primary)] font-bold" : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"}`}>
          04 // CAD ASSEMBLY
        </button>
        <button onClick={() => jumpToProgress(1.0)} className={`mono-label px-2.5 py-1 text-[10px] rounded-[var(--radius-sm)] text-left cursor-pointer transition-colors ${virtualProgress > 0.88 ? "bg-[var(--accent)] text-[var(--bg-primary)] font-bold" : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"}`}>
          05 // PROJECTS
        </button>
      </div>

      {/* Progress HUD Indicator */}
      <div className="fixed bottom-6 left-6 z-40 flex items-center gap-3 font-mono text-[11px] text-[var(--accent)] bg-[var(--bg-primary)]/90 px-3 py-1.5 rounded-[var(--radius-sm)] border border-[var(--border-accent)] backdrop-blur-md">
        <span className="h-2 w-2 rounded-full bg-[var(--accent)] animate-ping" />
        <span>3D CAMERA FLIGHT PROGRESS: {Math.round(virtualProgress * 100)}%</span>
      </div>
    </div>
  );
};
