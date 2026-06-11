import type { ReactNode } from "react";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { GridMotif } from "@/components/decor";

export function PageHeader({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-paper-light pt-[var(--header-h)]">
      <GridMotif className="pointer-events-none absolute inset-0 h-full w-full text-ink/[0.035]" />
      <div className="pointer-events-none absolute inset-x-0 top-[var(--header-h)] h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      <Container className="relative">
        <div className="max-w-3xl py-16 sm:py-20">
          <Reveal>
            <span className="eyebrow">{eyebrow}</span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 font-display text-4xl font-medium leading-[1.08] tracking-tight text-ink sm:text-5xl">
              {title}
            </h1>
          </Reveal>
          {intro && (
            <Reveal delay={150}>
              <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-slate">
                {intro}
              </p>
            </Reveal>
          )}
          {children && (
            <Reveal delay={220}>
              <div className="mt-9">{children}</div>
            </Reveal>
          )}
        </div>
      </Container>
    </section>
  );
}
