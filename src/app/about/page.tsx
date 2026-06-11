import type { Metadata } from "next";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { PageHeader } from "@/components/page-header";
import { CredentialsFeature } from "@/components/credentials-feature";
import { CtaSection } from "@/components/cta-section";
import { OfficeMap } from "@/components/office-map";
import { PinIcon } from "@/components/icons";
import { site, mapsSearchUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "RSG Accountants is a chartered accountancy and business advisory firm in Hayes, West London, built on over 20 years of local accountancy heritage.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Built for West London business."
        intro="Over 20 years of local accountancy heritage, brought together as one chartered firm."
      />

      {/* Lead trust signal: accreditations */}
      <CredentialsFeature />

      {/* Heritage + positioning */}
      <section className="bg-paper py-20 sm:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <Reveal>
              <span className="eyebrow">Our practice</span>
            </Reveal>
            <div className="max-w-2xl">
              <Reveal>
                <p className="font-display text-2xl font-medium leading-snug text-ink sm:text-[1.9rem]">
                  Rooted in a practice serving West London businesses since 2002,
                  RSG brings the standards of a chartered firm to the businesses
                  on its doorstep.
                </p>
              </Reveal>
              <Reveal delay={80}>
                <div className="mt-7 space-y-4 text-pretty text-base leading-relaxed text-slate">
                  <p>
                    We work with sole traders, growing companies and established
                    businesses across the area. Compliance is handled properly.
                    Advice is clear and direct.
                  </p>
                  <p>
                    Behind the work is a team of qualified accountants, tax
                    advisers and auditors.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Location */}
      <section className="border-t border-line bg-paper-light py-20 sm:py-28">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <div>
                <span className="eyebrow">Find us</span>
                <h2 className="mt-5 font-display text-3xl font-medium leading-tight text-ink sm:text-[2.5rem]">
                  Rooted in Hayes.
                </h2>
                <p className="mt-5 text-pretty text-base leading-relaxed text-slate">
                  In person across West London, and set up to work with you
                  wherever you are.
                </p>
                <a
                  href={mapsSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 flex items-start gap-3 text-sm text-ink transition-colors hover:text-accent"
                >
                  <PinIcon className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span className="not-italic">
                    {site.address.line1}, {site.address.line2}
                    <br />
                    {site.address.city}, {site.address.region},{" "}
                    {site.address.postcode}
                  </span>
                </a>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <OfficeMap className="aspect-[4/3] w-full" />
            </Reveal>
          </div>
        </Container>
      </section>

      <CtaSection />
    </>
  );
}
