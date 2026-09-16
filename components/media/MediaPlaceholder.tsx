"use client";

import React, { useState } from "react";
import { MediaItem } from "@/content/projects/_schema";
import { getAssetPath } from "@/lib/assets";

interface MediaPlaceholderProps {
  aspectRatio?: string;
  label?: string;
  item?: MediaItem | null;
  className?: string;
  showCaption?: boolean;
}

export const MediaPlaceholder: React.FC<MediaPlaceholderProps> = ({
  aspectRatio,
  label = "AWAITING MEDIA",
  item,
  className = "",
  showCaption = true,
}) => {
  const [imageError, setImageError] = useState(false);
  const effectiveAspectRatio = item?.aspectRatio || aspectRatio || "16/9";
  const mediaSrc = getAssetPath(item?.src || null);
  const hasMediaSrc = Boolean(mediaSrc) && !imageError;
  const altText = item?.alt || label;

  const isContain = item?.objectFit === "contain";
  const objectFitClass = isContain ? "object-contain bg-[#0a0a0b]" : "object-cover";

  return (
    <figure className={`flex flex-col w-full ${className}`}>
      {/* Image Container Box */}
      <div
        className="relative w-full overflow-hidden rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--surface-graphite)] transition-colors duration-200"
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

            {/* Optional Type Watermark Icon */}
            {item?.type === "video" && (
              <div className="mb-2 text-[var(--accent)] opacity-60 pointer-events-none" aria-hidden="true">
                <svg className="w-10 h-10 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
            )}
            {item?.type === "diagram" && (
              <div className="mb-2 text-[var(--accent)] opacity-60 pointer-events-none" aria-hidden="true">
                <svg className="w-10 h-10 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
            )}

            <div className="relative z-10 space-y-1">
              <div className="mono-label text-xs font-semibold tracking-wider text-[var(--accent)]">
                [{item?.placeholderLabel || label}]
              </div>
              <div className="text-xs text-[var(--text-secondary)] font-mono">
                RATIO: {effectiveAspectRatio}
                {item?.type ? ` • ${item.type.toUpperCase()}` : ""}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Caption Rendered Below Image Box (Never Overlapping) */}
      {showCaption && item?.caption && (
        <figcaption className="pt-2 px-1 text-xs text-[var(--text-secondary)] font-mono leading-relaxed border-l-2 border-[var(--accent)] pl-2.5 mt-2">
          {item.caption}
        </figcaption>
      )}
    </figure>
  );
};
