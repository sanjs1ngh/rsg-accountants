import Image from "next/image";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { GridMotif } from "@/components/decor";
import { Icon } from "@/components/icons";

/**
 * About-page accreditations feature.
 *
 * ICAEW and ACCA show the official supplied logos on white plaques (brand
 * guidelines require adequate contrast / clear space). CIOT is a typographic
 * placeholder until the official asset is supplied; "Audit registered" is a
 * regulatory status shown with a seal mark.
 *
 * To add the CIOT logo later: drop the file in /public/logos and switch its
 * `kind` to "image" below.
 */
type Item =
  | { kind: "image"; src: string; w: number; h: number; alt: string; name: string; note: string }
  | { kind: "text"; text: string; name: string; note: string }
  | { kind: "seal"; name: string; note: string };

const items: Item[] = [
  {
    kind: "image",
    src: "/logos/icaew.svg",
    w: 149,
    h: 245,
    alt: "ICAEW",
    name: "ICAEW Chartered",
    note: "Chartered accountants",
  },
  {
    kind: "image",
    src: "/logos/acca.png",
    w: 2000,
    h: 2000,
    alt: "ACCA",
    name: "ACCA qualified",
    note: "Qualified accountants",
  },
  {
    kind: "text",
    text: "CIOT",
    name: "CIOT tax expertise",
    note: "Chartered tax advisers",
  },
  {
    kind: "seal",
    name: "Audit registered",
    note: "Statutory audit",
  },
];

function Plaque({ item }: { item: Item }) {
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
            <span className="eyebrow text-accent-soft/90">Accreditations</span>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="mt-5 font-display text-3xl font-medium leading-tight text-paper-light sm:text-[2.5rem]">
              Qualified, regulated, accountable.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-5 text-pretty text-base leading-relaxed text-paper/60">
              Standards you can hold us to, across accountancy, tax and audit.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-paper/10 bg-paper/10 lg:grid-cols-4">
          {items.map((item, i) => (
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
