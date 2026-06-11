import Image from "next/image";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { GridMotif } from "@/components/decor";
import { Icon } from "@/components/icons";
import { content, type AccreditationItem } from "@/lib/site-content";

/**
 * About-page accreditations feature. Wording and logos are set in
 * src/lib/site-content.ts (accreditations).
 *
 * ICAEW, ACCA and CIOT show the official supplied logos on white plaques
 * (brand guidelines require adequate contrast / clear space). "Audit
 * registered" is a regulatory status shown with a seal mark.
 */
function Plaque({ item }: { item: AccreditationItem }) {
  return (
    <div className="flex h-20 w-full items-center justify-center rounded-xl bg-white px-5">
      {item.kind === "image" ? (
        <Image
          src={item.src}
          alt={item.alt}
          width={item.w}
          height={item.h}
          className="h-10 w-auto object-contain"
        />
      ) : item.kind === "text" ? (
        <span className="font-display text-2xl font-semibold tracking-tight text-ink">
          {item.text}
        </span>
      ) : (
        <Icon name="seal" className="h-9 w-9 text-ink" />
      )}
    </div>
  );
}

export function CredentialsFeature() {
  return (
    <section className="relative overflow-hidden bg-ink py-20 sm:py-28">
      <GridMotif className="pointer-events-none absolute inset-0 h-full w-full text-paper/[0.04]" />
      <Container className="relative">
        <div className="max-w-2xl">
          <Reveal>
            <span className="eyebrow text-accent-soft/90">
              {content.accreditations.eyebrow}
            </span>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="mt-5 font-display text-3xl font-medium leading-tight text-paper-light sm:text-[2.5rem]">
              {content.accreditations.heading}
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-5 text-pretty text-base leading-relaxed text-paper/60">
              {content.accreditations.intro}
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-paper/10 bg-paper/10 lg:grid-cols-4">
          {content.accreditations.items.map((item, i) => (
            <Reveal key={item.name} delay={i * 80}>
              <div className="flex h-full flex-col bg-ink p-6 sm:p-7">
                <Plaque item={item} />
                <div className="mt-5 font-display text-lg text-paper-light">
                  {item.name}
                </div>
                <div className="mt-1.5 text-sm leading-relaxed text-paper/50">
                  {item.note}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
