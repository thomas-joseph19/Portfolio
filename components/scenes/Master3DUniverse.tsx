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
import { StatusBadge } from "@/components/ui/StatusBadge";
import { CustomCadModelLoader3D } from "./CustomCadModelLoader3D";

// --- 3D CATMULL-ROM CONTINUOUS CAMERA CURVE PATH ---
// 5 Stage Nodes: 0.00 (Hero) -> 0.25 (Statement) -> 0.50 (Profile) -> 0.75 (CAD Assembly) -> 1.00 (System Terminal)
const cameraPosCurve = new THREE.CatmullRomCurve3([
  new THREE.Vector3(0, 0.2, 12),    // 0.00 (0 scrolls): Hero / Name
  new THREE.Vector3(5, 0.2, 6),     // 0.25 (5 scrolls): Statement / Linkage
  new THREE.Vector3(0, 0.2, 0),      // 0.50 (10 scrolls): Profile HUD
  new THREE.Vector3(-5, 0.2, -6),   // 0.75 (15 scrolls): Exploded CAD Assembly
  new THREE.Vector3(0, 0.2, -18),   // 1.00 (20 scrolls): System Terminal / Architecture
]);

const cameraLookCurve = new THREE.CatmullRomCurve3([
  new THREE.Vector3(0, 0.2, 8),     // 0.00: Look at Hero
  new THREE.Vector3(5, 0.2, 2),     // 0.25: Look at Statement
  new THREE.Vector3(0, 0.2, -4),    // 0.50: Look at Profile
  new THREE.Vector3(-5, 0.2, -10),  // 0.75: Look at Exploded Assembly
  new THREE.Vector3(0, 0.2, -22),   // 1.00: Look at System Terminal / Architecture
]);

interface CameraFlightProps {
  targetProgress: number;
}

const CameraFlightController: React.FC<CameraFlightProps> = ({ targetProgress }) => {
  const { camera } = useThree();
  const currentProgress = useRef(0);

  useFrame(() => {
    // Smooth Damping Physics to target step
    currentProgress.current = THREE.MathUtils.lerp(
      currentProgress.current,
      targetProgress,
      0.09
    );

    const p = Math.max(0, Math.min(1, currentProgress.current));

    const pos = cameraPosCurve.getPoint(p);
    const look = cameraLookCurve.getPoint(p);

    camera.position.copy(pos);
    camera.lookAt(look);
  });

  return null;
};

// --- 3D ENVIRONMENT CAD GRID ---
const InfiniteCadGrid: React.FC = () => {
  return (
    <gridHelper
      args={[120, 120, "#6fb3c2", "#2a2a2e"]}
      position={[0, -3.2, -6]}
    />
  );
};

// --- NODE 1: HERO / NAME NODE (Z = 8, Progress 0.00) ---
const HeroGearNode3D: React.FC<{ progress: number }> = ({ progress }) => {
  const distFromCam = Math.abs(progress - 0.0);
  const opacity = Math.max(0, 1 - distFromCam * 4.5);

  return (
    <group position={[0, 0.2, 8]}>
      <Html position={[0, 0, 0]} center distanceFactor={7}>
        <div
          style={{ opacity, pointerEvents: opacity > 0.3 ? "auto" : "none" }}
          className="w-[660px] text-center space-y-6 select-none font-sans transition-opacity duration-300"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[var(--radius-sm)] border border-[var(--border-accent)] bg-[var(--accent-dim)] shadow-xl backdrop-blur-md">
            <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent)] animate-ping" />
            <span className="mono-label text-xs font-semibold text-[var(--accent)] tracking-wider">
              Future Engineer
            </span>
          </div>

          <div className="p-10 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--surface-graphite)]/95 backdrop-blur-md space-y-4 shadow-2xl">
            <div className="mono-label text-xs tracking-widest text-[var(--accent)]">
              SYSTEM_PROFILE // HERO_01
            </div>

            <h1 className="text-5xl sm:text-6xl font-extrabold text-[var(--text-primary)] font-heading tracking-tight leading-none">
              Thomas Joseph
            </h1>

            <div className="h-0.5 w-36 bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent mx-auto my-4" />

            <p className="mono-label text-lg text-[var(--text-secondary)] tracking-wider">
              Mechanical/Aerospace engineer
            </p>
          </div>
        </div>
      </Html>
    </group>
  );
};

// --- NODE 2: STATEMENT LINKAGE NODE (X = 5, Z = 2, Progress 0.25) ---
const LinkageNode3D: React.FC<{ progress: number }> = ({ progress }) => {
  const armRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (armRef.current) {
      armRef.current.rotation.z = Math.sin(progress * Math.PI * 6) * 0.5;
    }
  });

  const distFromCam = Math.abs(progress - 0.25);
  const opacity = Math.max(0, 1 - distFromCam * 4.5);

  return (
    <group position={[5, 0.2, 2]}>
      <group ref={armRef} position={[-2.5, 0, -1]}>
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[0.2, 3.2, 0.2]} />
          <meshStandardMaterial color="#6fb3c2" emissive="#6fb3c2" emissiveIntensity={0.6} transparent opacity={opacity} />
        </mesh>
        <mesh position={[0, 1.6, 0]}>
          <sphereGeometry args={[0.3, 16, 16]} />
          <meshStandardMaterial color="#f2f2f0" metalness={0.9} transparent opacity={opacity} />
        </mesh>
      </group>

      <Html position={[0, 0, 0]} center distanceFactor={7}>
        <div
          style={{ opacity, pointerEvents: opacity > 0.3 ? "auto" : "none" }}
          className="w-[600px] text-center space-y-6 select-none font-sans transition-opacity duration-300"
        >
          <div className="mono-label text-xs tracking-widest text-[var(--accent)]">
            PHILOSOPHY // NODE_02
          </div>
          <blockquote className="text-2xl sm:text-3xl font-light leading-relaxed text-[var(--text-primary)] border-l-4 border-[var(--accent)] pl-6 text-left font-heading bg-[var(--surface-graphite)]/95 p-8 rounded-[var(--radius-md)] border border-[var(--border-subtle)] backdrop-blur-md shadow-2xl">
            “Driven by a passion for precision design engineering, quality manufacturing, and high-performance CAD systems in mechanical and aerospace engineering.”
          </blockquote>
        </div>
      </Html>
    </group>
  );
};

// --- NODE 3: PROFILE HUD NODE (Z = -4, Progress 0.50) ---
const ProfileNode3D: React.FC<{ progress: number }> = ({ progress }) => {
  const distFromCam = Math.abs(progress - 0.50);
  const opacity = Math.max(0, 1 - distFromCam * 4.5);

  return (
    <group position={[0, 0.2, -4]}>
      <Html position={[0, 0, 0]} center distanceFactor={7}>
        <div
          style={{ opacity, pointerEvents: opacity > 0.3 ? "auto" : "none" }}
          className="w-[760px] space-y-6 select-none font-sans transition-opacity duration-300"
        >
          <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-3 bg-[var(--bg-primary)]/90 p-3 rounded-[var(--radius-sm)]">
            <div className="mono-label text-xs tracking-widest text-[var(--accent)]">
              SYSTEM_PROFILE // NODE_03
            </div>
            <div className="mono-label text-xs text-[var(--text-muted)]">GPA: 3.9 // UCF 2029</div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--surface-graphite)]/95 backdrop-blur-md space-y-1 shadow-xl">
              <div className="mono-label text-[10px] text-[var(--text-muted)]">01 // DISCIPLINE</div>
              <div className="text-xl font-bold text-[var(--text-primary)] font-heading">Mechanical Engineering</div>
            </div>
            <div className="p-6 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--surface-graphite)]/95 backdrop-blur-md space-y-1 shadow-xl">
              <div className="mono-label text-[10px] text-[var(--text-muted)]">02 // SECONDARY</div>
              <div className="text-xl font-bold text-[var(--text-primary)] font-heading">Aerospace Engineering</div>
            </div>
            <div className="p-6 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--surface-graphite)]/95 backdrop-blur-md space-y-1 col-span-2 shadow-xl">
              <div className="mono-label text-[10px] text-[var(--text-muted)]">03 // CORE FOCUS</div>
              <div className="text-sm text-[var(--text-secondary)] font-mono">High-Performance Aerostructures, Propulsion & Quality CAD Modeling</div>
            </div>
            <div className="p-6 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--surface-graphite)]/95 backdrop-blur-md space-y-3 col-span-2 shadow-xl">
              <div className="mono-label text-[10px] text-[var(--text-muted)]">04 // TECHNICAL SKILLS</div>
              <div className="flex flex-wrap gap-2">
                <TagPill label="SOLIDWORKS" variant="accent" size="sm" />
                <TagPill label="MATLAB" variant="default" size="sm" />
                <TagPill label="KINEMATICS" variant="default" size="sm" />
                <TagPill label="Finite-Element-Analysis" variant="default" size="sm" />
              </div>
            </div>
          </div>
        </div>
      </Html>
    </group>
  );
};

// --- NODE 4: 3D CAD KINEMATIC MODEL ASSEMBLY (X = -5, Z = -10, Progress 0.75) ---
const ExplodedAssemblyNode3D: React.FC<{ progress: number }> = ({ progress }) => {
  return (
    <group position={[-5, 0.2, -10]}>
      {/* 3D Space Station / Satellite CAD Assembly */}
      <CustomCadModelLoader3D progress={progress} />
    </group>
  );
};

// --- NODE 5: SYSTEM TERMINAL / FEATURED PROJECTS CONTINUATION (Z = -22, Progress 1.00) ---
const SystemTerminalNode3D: React.FC<{ progress: number }> = ({ progress }) => {
  const featuredProjects = getFeaturedProjects();
  const opacity = Math.min(1, Math.max(0, (progress - 0.75) / 0.20));
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -290, behavior: "smooth" });
    }
  };

  const handleScrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 290, behavior: "smooth" });
    }
  };

  return (
    <group position={[0, 0.2, -22]}>
      <Html position={[0, 0, 0]} center distanceFactor={7}>
        <div
          style={{ opacity, pointerEvents: opacity > 0.3 ? "auto" : "none" }}
          className="w-[880px] space-y-4 select-none font-sans transition-opacity duration-300"
        >
          {/* Header Bar with Horizontal Carousel Controls */}
          <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-2.5 bg-[var(--bg-primary)]/90 p-3 rounded-[var(--radius-sm)] shadow-md">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[var(--accent)] animate-pulse" />
              <div className="mono-label text-xs tracking-widest text-[var(--accent)] font-semibold">
                SYSTEM_TERMINAL // FEATURED PROJECTS
              </div>
            </div>
            
            <div className="flex items-center gap-3 font-mono text-xs">
              <span className="text-[var(--text-muted)] text-[11px] hidden sm:inline">HORIZONTALLY SCROLL →</span>
              <button
                onClick={handleScrollLeft}
                className="px-2.5 py-1 rounded-[var(--radius-sm)] border border-[var(--border-subtle)] bg-[var(--surface-graphite)] text-[var(--text-primary)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors cursor-pointer"
                title="Scroll Left"
              >
                ◀ PREV
              </button>
              <button
                onClick={handleScrollRight}
                className="px-2.5 py-1 rounded-[var(--radius-sm)] border border-[var(--border-subtle)] bg-[var(--surface-graphite)] text-[var(--text-primary)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors cursor-pointer"
                title="Scroll Right"
              >
                NEXT ▶
              </button>
            </div>
          </div>

          {/* Horizontal Scroll Showcase (Shows 3 visible at once, horizontal scroll for 4th+) */}
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto pb-3 pt-1 snap-x snap-mandatory scroll-smooth focus:outline-none"
            style={{ scrollbarWidth: "thin", scrollbarColor: "var(--accent-dim) transparent" }}
          >
            {featuredProjects.map((project) => (
              <div
                key={project.slug}
                className="w-[275px] shrink-0 snap-start p-4 rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--surface-graphite)]/95 backdrop-blur-md space-y-3 shadow-xl transition-all duration-300 hover:border-[var(--accent)] hover:-translate-y-1 hover:shadow-2xl hover:shadow-[var(--accent-glow)] flex flex-col justify-between group"
              >
                <div className="space-y-2.5">
                  <div className="overflow-hidden rounded-[var(--radius-sm)]">
                    <MediaPlaceholder item={project.thumbnail} aspectRatio="16/9" />
                  </div>
                  <div className="text-sm font-bold text-[var(--text-primary)] font-heading group-hover:text-[var(--accent)] transition-colors line-clamp-1">
                    {project.title || "[AWAITING TITLE]"}
                  </div>
                  <div className="text-xs text-[var(--text-secondary)] line-clamp-2 leading-relaxed">
                    {project.shortDescription}
                  </div>
                </div>

                <div className="pt-2 border-t border-[var(--border-subtle)] flex items-center justify-between">
                  <StatusBadge status={project.status} />
                  <Link
                    href={`/projects/${project.slug}`}
                    className="text-xs text-[var(--accent)] font-mono hover:underline inline-flex items-center gap-1 font-semibold"
                  >
                    SPEC & CAD →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Compact Streamlined Action Footer */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-[var(--surface-graphite)]/95 p-5 rounded-[var(--radius-md)] border border-[var(--border-subtle)] backdrop-blur-md shadow-2xl">
            <div className="space-y-0.5 text-center sm:text-left">
              <div className="text-base font-bold text-[var(--text-primary)] font-heading">
                EXPLORE COMPLETE ENGINEERING ARCHIVE
              </div>
              <div className="text-xs text-[var(--text-secondary)] font-mono">
                ACCESS FULL CAD MODELS, SYSTEM SCHEMATICS & SPECIFICATIONS
              </div>
            </div>
            <div className="flex gap-3">
              <Button href="/projects" variant="primary" size="md">
                ALL PROJECTS →
              </Button>
              <Button href="/resume" variant="secondary" size="md">
                RESUME
              </Button>
              <Button href="/contact" variant="outline" size="md">
                CONTACT
              </Button>
            </div>
          </div>
        </div>
      </Html>
    </group>
  );
};

export const Master3DUniverse: React.FC = () => {
  const [targetProgress, setTargetProgress] = useState(0);
  const isCooldownRef = useRef(false);

  // Exact 12.5% per Wheel Tick (2 scrolls = 25% = 1 Stage Transition!)
  const handleWheel = useCallback((e: WheelEvent) => {
    e.preventDefault();
    if (isCooldownRef.current) return;

    isCooldownRef.current = true;
    setTimeout(() => {
      isCooldownRef.current = false;
    }, 120);

    const direction = Math.sign(e.deltaY);
    setTargetProgress((prev) => {
      const next = prev + direction * 0.125;
      return Math.max(0, Math.min(1, Math.round(next * 1000) / 1000));
    });
  }, []);

  const touchStartRef = useRef(0);
  const handleTouchStart = useCallback((e: TouchEvent) => {
    touchStartRef.current = e.touches[0].clientY;
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    e.preventDefault();
    if (isCooldownRef.current) return;
    const diff = touchStartRef.current - e.touches[0].clientY;
    if (Math.abs(diff) > 25) {
      isCooldownRef.current = true;
      setTimeout(() => {
        isCooldownRef.current = false;
      }, 150);
      const direction = Math.sign(diff);
      touchStartRef.current = e.touches[0].clientY;
      setTargetProgress((prev) => {
        const next = prev + direction * 0.125;
        return Math.max(0, Math.min(1, Math.round(next * 1000) / 1000));
      });
    }
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
    setTargetProgress(target);
  };

  return (
    <div className="fixed inset-0 h-screen w-screen overflow-hidden bg-[var(--bg-primary)] text-[var(--text-primary)] select-none">
      {/* 3D WebGL Canvas */}
      <Canvas gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={0.9} />
        <directionalLight position={[10, 15, 15]} intensity={1.6} color="#f2f2f0" />
        <pointLight position={[-10, -10, -10]} intensity={1.0} color="#6fb3c2" />

        <CameraFlightController targetProgress={targetProgress} />
        <InfiniteCadGrid />

        <Float speed={1} rotationIntensity={0.1} floatIntensity={0.2}>
          <HeroGearNode3D progress={targetProgress} />
          <LinkageNode3D progress={targetProgress} />
          <ProfileNode3D progress={targetProgress} />
          {/* 3D Aerospace Orbital Rocket positioned right beside Projects Architecture page */}
          <group position={[-4.2, -0.2, -17]}>
            <CustomCadModelLoader3D progress={targetProgress} />
          </group>
          <ExplodedAssemblyNode3D progress={targetProgress} />
          <SystemTerminalNode3D progress={targetProgress} />
        </Float>
      </Canvas>

      {/* On-Screen Waypoint Jump Bar */}
      <div className="fixed top-20 right-6 z-40 flex flex-col gap-2 bg-[var(--bg-primary)]/90 p-2 rounded-[var(--radius-sm)] border border-[var(--border-subtle)] backdrop-blur-md">
        <button onClick={() => jumpToProgress(0.0)} className={`mono-label px-2.5 py-1 text-[10px] rounded-[var(--radius-sm)] text-left cursor-pointer transition-colors ${targetProgress <= 0.12 ? "bg-[var(--accent)] text-[var(--bg-primary)] font-bold" : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"}`}>
          01 // HERO
        </button>
        <button onClick={() => jumpToProgress(0.25)} className={`mono-label px-2.5 py-1 text-[10px] rounded-[var(--radius-sm)] text-left cursor-pointer transition-colors ${targetProgress > 0.12 && targetProgress <= 0.38 ? "bg-[var(--accent)] text-[var(--bg-primary)] font-bold" : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"}`}>
          02 // STATEMENT
        </button>
        <button onClick={() => jumpToProgress(0.50)} className={`mono-label px-2.5 py-1 text-[10px] rounded-[var(--radius-sm)] text-left cursor-pointer transition-colors ${targetProgress > 0.38 && targetProgress <= 0.62 ? "bg-[var(--accent)] text-[var(--bg-primary)] font-bold" : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"}`}>
          03 // PROFILE
        </button>
        <button onClick={() => jumpToProgress(0.75)} className={`mono-label px-2.5 py-1 text-[10px] rounded-[var(--radius-sm)] text-left cursor-pointer transition-colors ${targetProgress > 0.62 && targetProgress <= 0.88 ? "bg-[var(--accent)] text-[var(--bg-primary)] font-bold" : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"}`}>
          04 // ROCKET TAKEOFF
        </button>
        <button onClick={() => jumpToProgress(1.00)} className={`mono-label px-2.5 py-1 text-[10px] rounded-[var(--radius-sm)] text-left cursor-pointer transition-colors ${targetProgress > 0.88 ? "bg-[var(--accent)] text-[var(--bg-primary)] font-bold" : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"}`}>
          05 // PROJECTS
        </button>
      </div>

      {/* Progress HUD Indicator */}
      <div className="fixed bottom-6 left-6 z-40 flex items-center gap-3 font-mono text-[11px] text-[var(--accent)] bg-[var(--bg-primary)]/90 px-3.5 py-2 rounded-[var(--radius-sm)] border border-[var(--border-accent)] backdrop-blur-md shadow-xl">
        <span className="h-2 w-2 rounded-full bg-[var(--accent)] animate-ping" />
        <span>SYSTEM PROGRESS • {Math.round(targetProgress * 100)}%</span>
      </div>
    </div>
  );
};
