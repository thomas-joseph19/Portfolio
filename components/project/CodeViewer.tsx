"use client";

import React, { useState } from "react";
import { CodeSnippet } from "@/content/projects/_schema";

interface CodeViewerProps {
  snippet: CodeSnippet;
  className?: string;
}

export const CodeViewer: React.FC<CodeViewerProps> = ({ snippet, className = "" }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(snippet.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy code: ", err);
    }
  };

  const lines = snippet.code.trim().split("\n");

  return (
    <div className={`flex flex-col w-full rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[#0d0d0f] overflow-hidden shadow-2xl ${className}`}>
      {/* Window Title Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#141418] border-b border-[var(--border-subtle)] select-none">
        {/* Terminal Window Controls & File Tab */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]/80 inline-block" />
          </div>

          <div className="flex items-center gap-2 pl-2 border-l border-[var(--border-subtle)] text-xs font-mono text-[var(--text-primary)] font-medium">
            <svg
              className="w-3.5 h-3.5 text-[var(--accent)]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              />
            </svg>
            <span>{snippet.filename || "controller_sketch.ino"}</span>
          </div>
        </div>

        {/* Language Pill & Copy Button */}
        <div className="flex items-center gap-2.5">
          <span className="mono-label text-[10px] px-2 py-0.5 rounded bg-[var(--surface-graphite)] text-[var(--text-muted)] border border-[var(--border-subtle)]">
            {snippet.language.toUpperCase()}
          </span>

          <button
            onClick={handleCopy}
            type="button"
            className="flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-mono font-medium transition-all duration-200 border border-[var(--border-subtle)] hover:border-[var(--accent)] hover:text-[var(--accent)] text-[var(--text-secondary)] bg-[var(--surface-graphite)] focus-ring"
            aria-label="Copy code to clipboard"
          >
            {copied ? (
              <>
                <svg className="w-3.5 h-3.5 text-[var(--accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[var(--accent)]">COPIED</span>
              </>
            ) : (
              <>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <span>COPY CODE</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Code Area with Line Numbers */}
      <div className="relative overflow-x-auto p-4 max-h-[500px] font-mono text-xs leading-relaxed text-[#d4d4d8] selection:bg-[var(--accent)] selection:text-[var(--bg-primary)]">
        <table className="w-full border-collapse">
          <tbody>
            {lines.map((line, idx) => (
              <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                <td className="pr-4 py-0.5 text-right select-none text-[var(--text-muted)] font-mono text-[11px] w-8 align-top">
                  {idx + 1}
                </td>
                <td className="py-0.5 whitespace-pre font-mono text-left text-[var(--text-primary)]">
                  {line.startsWith("//") || line.startsWith("/*") || line.startsWith(" *") ? (
                    <span className="text-[#6272a4] italic">{line}</span>
                  ) : line.includes("#include") || line.includes("#define") ? (
                    <span className="text-[#ff79c6]">{line}</span>
                  ) : (
                    line
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Caption or Footer Note */}
      {snippet.caption && (
        <div className="px-4 py-2 border-t border-[var(--border-subtle)] bg-[#101014] text-xs font-mono text-[var(--text-secondary)] border-l-2 border-l-[var(--accent)]">
          {snippet.caption}
        </div>
      )}
    </div>
  );
};
