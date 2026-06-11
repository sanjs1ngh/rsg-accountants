import Link from "next/link";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { ButtonLink } from "@/components/button";
import { CtaSection } from "@/components/cta-section";
import { CredentialsCard } from "@/components/credentials-card";
import { ServiceTicker } from "@/components/service-ticker";
import { GridMotif } from "@/components/decor";
import { Icon, ArrowRight } from "@/components/icons";
import { content } from "@/lib/site-content";

const { hero, pillarsSection, why, auditAdvisory } = content.home;
const { pillars, ctas } = content;

export default function HomePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-paper pt-[var(--header-h)]">
        <GridMotif className="pointer-events-none absolute inset-0 h-full w-full text-ink/[0.04]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

        <Container className="relative">
          <div className="grid items-center gap-14 py-24 lg:grid-cols-[1.08fr_0.92fr] lg:py-32">
            <div>
              <Reveal>
                <span className="eyebrow">{hero.eyebrow}</span>
              </Reveal>
              <Reveal delay={80}>
                <h1 className="mt-7 font-display text-[2.9rem] font-medium leading-[1.02] tracking-tight text-ink sm:text-6xl lg:text-[4.1rem]">
                  {hero.heading}
                </h1>
              </Reveal>
              <Reveal delay={150}>
                <p className="mt-7 max-w-md text-pretty text-lg leading-relaxed text-slate">
                  {hero.subheading}
                </p>
              </Reveal>
              <Reveal delay={220}>
                <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                  <ButtonLink href={ctas.bookConsultation.href} variant="primary" withArrow>
                    {ctas.bookConsultation.label}
                  </ButtonLink>
                  <ButtonLink href={ctas.requestQuote.href} variant="secondary">
                    {ctas.requestQuote.label}
                  </ButtonLink>
                </div>
              </Reveal>
              <Reveal delay={300}>
                <p className="mt-9 text-sm text-slate-light">
                  {content.heritage.line}
                </p>
              </Reveal>
            </div>

            <Reveal delay={200} className="lg:justify-self-end lg:pl-6">
              <CredentialsCard />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ── Service ticker (crafted motion) ──────────────────── */}
      <ServiceTicker />

      {/* ── Three pillars ────────────────────────────────────── */}
      <section className="bg-paper py-24 sm:py-32">
        <Container>
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <Reveal>
              <h2 className="max-w-xl font-display text-3xl font-medium leading-[1.1] tracking-tight text-ink sm:text-[2.75rem]">
                {pillarsSection.heading}
              </h2>
            </Reveal>
            <Reveal delay={100} className="shrink-0">
              <Link href={ctas.allServices.href} className="link-underline pb-1 text-sm">
                {ctas.allServices.label} <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
            {pillars.map((pillar, i) => (
              <Reveal key={pillar.title} delay={i * 90}>
                <Link
                  href={pillar.href}
                  className="group flex h-full flex-col bg-paper-light p-8 transition-colors duration-300 hover:bg-white sm:p-10"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-line text-accent transition-colors duration-300 group-hover:border-accent/40 group-hover:bg-accent-soft">
                    <Icon name={pillar.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-7 font-display text-2xl font-medium text-ink sm:text-3xl">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 flex-1 text-pretty text-base leading-relaxed text-slate">
                    {pillar.line}
                  </p>
                  <span className="mt-7 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
                    {ctas.viewServices.label}
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-refined group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Why RSG ──────────────────────────────────────────── */}
      <section className="border-t border-line bg-paper-light py-24 sm:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20">
            <Reveal>
              <h2 className="font-display text-3xl font-medium leading-[1.1] tracking-tight text-ink sm:text-[2.5rem]">
                {why.heading}
              </h2>
            </Reveal>
            <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
              {why.items.map((r, i) => (
                <Reveal key={r.title} delay={i * 90}>
                  <div className="h-full bg-paper p-7">
                    <span className="font-display text-3xl text-accent/30">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-4 font-display text-lg font-medium text-ink">
                      {r.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate">
                      {r.line}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── Audit & advisory highlight ───────────────────────── */}
      <section className="bg-paper py-24 sm:py-28">
        <Container>
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl bg-ink px-6 py-16 sm:px-14 sm:py-20">
              <GridMotif className="pointer-events-none absolute inset-0 h-full w-full text-paper/[0.04]" />
              <div className="relative grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                <div>
                  <span className="eyebrow text-accent-soft/90">
                    {auditAdvisory.eyebrow}
                  </span>
                  <h2 className="mt-5 font-display text-3xl font-medium leading-tight text-paper-light sm:text-[2.5rem]">
                    {auditAdvisory.headingLine1}
                    <br />
                    {auditAdvisory.headingLine2}
                  </h2>
                  <p className="mt-5 max-w-md text-pretty text-base leading-relaxed text-paper/65">
                    {auditAdvisory.body}
                  </p>
                  <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                    <ButtonLink href={ctas.discussAudit.href} variant="light" withArrow>
                      {ctas.discussAudit.label}
                    </ButtonLink>
                    <ButtonLink
                      href={ctas.exploreServices.href}
                      variant="ghost"
                      className="text-paper hover:text-accent-soft"
                    >
                      {ctas.exploreServices.label}
                    </ButtonLink>
                  </div>
                </div>

                <div className="grid gap-4">
                  {auditAdvisory.cards.map((card) => (
                    <div
                      key={card.title}
                      className="flex items-center gap-5 rounded-2xl border border-paper/10 bg-paper/[0.04] p-6"
                    >
                      <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/20 text-accent-soft">
                        <Icon name={card.icon} className="h-5 w-5" />
                      </span>
                      <div>
                        <h3 className="font-display text-lg font-medium text-paper-light">
                          {card.title}
                        </h3>
                        <p className="mt-1 text-sm leading-relaxed text-paper/60">
                          {card.line}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <CtaSection />
    </>
  );
}
