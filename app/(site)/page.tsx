"use client";

import dynamic from "next/dynamic";

const Master3DUniverse = dynamic(
  () => import("@/components/scenes/Master3DUniverse").then((mod) => mod.Master3DUniverse),
  {
    ssr: false,
    loading: () => (
      <div className="fixed inset-0 h-screen w-screen bg-[#0d0d0f] flex items-center justify-center text-[var(--accent)] font-mono text-sm">
        <div className="flex items-center gap-3">
          <span className="h-3 w-3 rounded-full bg-[var(--accent)] animate-ping" />
          <span>INITIALIZING 3D KINEMATIC UNIVERSE...</span>
        </div>
      </div>
    ),
  }
);

export default function HomePage() {
  return <Master3DUniverse />;
}
