"use client";

import React, { useState } from "react";
import { MediaItem } from "@/content/projects/_schema";
import { getAssetPath } from "@/lib/assets";

interface MediaPlaceholderProps {
  aspectRatio?: string;
  label?: string;
  item?: MediaItem | null;
  className?: string;
}

export const MediaPlaceholder: React.FC<MediaPlaceholderProps> = ({
  aspectRatio,
  label = "AWAITING MEDIA",
  item,
  className = "",
}) => {
  const [imageError, setImageError] = useState(false);
  const effectiveAspectRatio = item?.aspectRatio || aspectRatio || "16/9";
  const mediaSrc = getAssetPath(item?.src || null);
  const hasMediaSrc = Boolean(mediaSrc) && !imageError;
  const altText = item?.alt || label;

  const isContain = item?.objectFit === "contain";
  const objectFitClass = isContain ? "object-contain bg-[#0a0a0b]" : "object-cover";

  return (
    <div
      className={`relative w-full overflow-hidden rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--surface-graphite)] transition-colors duration-200 ${className}`}
      style={{ aspectRatio: effectiveAspectRatio }}
    >
      {hasMediaSrc && mediaSrc ? (
        item?.type === "video" ? (
          <video
            src={mediaSrc}
            aria-label={altText}
            controls
            className={`h-full w-full ${objectFitClass}`}
          />
        ) : (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={mediaSrc}
            alt={altText}
            onError={() => setImageError(true)}
            className={`h-full w-full ${objectFitClass}`}
          />
        )
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
          {/* CAD / Engineering Coordinate Crosshair Grid Background */}
          <svg
            className="absolute inset-0 h-full w-full opacity-20 pointer-events-none"
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="media-grid"
                width="32"
                height="32"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 32 0 L 0 0 0 32"
                  fill="none"
                  stroke="var(--border-subtle)"
                  strokeWidth="0.75"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#media-grid)" />
            <circle
              cx="50%"
              cy="50%"
              r="24"
              fill="none"
              stroke="var(--accent)"
              strokeWidth="0.5"
              strokeDasharray="2 2"
            />
            <line
              x1="50%"
              y1="0"
              x2="50%"
              y2="100%"
              stroke="var(--border-subtle)"
              strokeWidth="0.5"
            />
            <line
              x1="0"
              y1="50%"
              x2="100%"
              y2="50%"
              stroke="var(--border-subtle)"
              strokeWidth="0.5"
            />
          </svg>

          <div className="relative z-10 space-y-1">
            <div className="mono-label text-xs font-semibold tracking-wider text-[var(--accent)]">
              [{label}]
            </div>
            <div className="text-xs text-[var(--text-secondary)] font-mono">
              RATIO: {effectiveAspectRatio}
              {item?.type ? ` • ${item.type.toUpperCase()}` : ""}
            </div>
          </div>
        </div>
      )}

      {item?.caption && (
        <div className="absolute bottom-0 inset-x-0 bg-black/80 px-3 py-2 text-[11px] text-[var(--text-secondary)] backdrop-blur-md border-t border-[var(--border-subtle)]/50">
          {item.caption}
        </div>
      )}
    </div>
  );
};
