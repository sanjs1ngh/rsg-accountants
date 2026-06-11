"use client";

import { useRef, type MouseEvent } from "react";
import { ArcMotif } from "@/components/decor";
import { content } from "@/lib/site-content";

const { eyebrow, marks, tagline, footnote } = content.credentialsCard;

/**
 * Compact credentials card for the home hero — qualifications shown,
 * not explained. A soft sheen follows the cursor on hover (hover-capable
 * devices only); the fuller treatment lives on the About page.
 */
export function CredentialsCard({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  function handleMove(e: MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${((e.clientX - r.left) / r.width) * 100}%`);
    el.style.setProperty("--my", `${((e.clientY - r.top) / r.height) * 100}%`);
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      className={`group relative overflow-hidden rounded-3xl bg-ink p-8 shadow-soft sm:p-10 ${className}`}
    >
      <ArcMotif className="pointer-events-none absolute -bottom-16 -right-12 h-64 w-64 text-accent/25" />
      {/* Cursor-tracking sheen */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 ease-refined group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(420px circle at var(--mx, 50%) var(--my, 50%), rgba(167, 199, 191, 0.13), transparent 60%)",
        }}
      />

      <div className="relative">
        <span className="text-[11px] font-semibold uppercase tracking-eyebrow text-accent-soft/80">
          {eyebrow}
        </span>

        <div className="mt-7 grid grid-cols-3 divide-x divide-paper/10">
          {marks.map((m, i) => (
            <div key={m.mark} className={i === 0 ? "pr-4" : "px-4"}>
              <div className="font-display text-2xl leading-none text-paper-light sm:text-[1.75rem]">
                {m.mark}
              </div>
              <div className="mt-2 text-[10px] uppercase tracking-eyebrow text-paper/45">
                {m.label}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 border-t border-paper/10 pt-6 font-display text-lg text-paper/85">
          {tagline}
        </p>
        <p className="mt-1.5 text-sm text-paper/45">{footnote}</p>
      </div>
    </div>
  );
}
