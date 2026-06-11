import type { ReactNode } from "react";
import { Reveal } from "@/components/reveal";

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "dark",
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
}) {
  const isLight = tone === "light";
  return (
    <div
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && (
        <Reveal>
          <span
            className={`eyebrow ${isLight ? "text-paper" : ""} ${
              align === "center" ? "justify-center" : ""
            }`}
          >
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={60}>
        <h2
          className={`mt-5 font-display text-3xl font-medium leading-[1.12] tracking-tight sm:text-4xl ${
            isLight ? "text-paper-light" : "text-ink"
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {intro && (
        <Reveal delay={120}>
          <p
            className={`mt-5 text-pretty text-base leading-relaxed sm:text-lg ${
              isLight ? "text-paper/70" : "text-slate"
            }`}
          >
            {intro}
          </p>
        </Reveal>
      )}
    </div>
  );
}
