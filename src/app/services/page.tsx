import type { Metadata } from "next";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { ButtonLink } from "@/components/button";
import { PageHeader } from "@/components/page-header";
import { CtaSection } from "@/components/cta-section";
import { Icon } from "@/components/icons";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Accountancy, audit, tax, payroll, bookkeeping and business advisory for sole traders, small businesses and limited companies in Hayes and across West London.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="What we do."
        intro="Compliance handled properly, and advice for what comes next."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/contact" variant="primary" withArrow>
            Book a free consultation
          </ButtonLink>
          <ButtonLink href="/contact" variant="secondary">
            Request a quote
          </ButtonLink>
        </div>
      </PageHeader>

      <section className="bg-paper py-12 sm:py-16">
        <Container>
          <div className="border-t border-line">
            {services.map((service, i) => (
              <Reveal key={service.slug}>
                <article
                  id={service.slug}
                  className="group grid scroll-mt-28 grid-cols-[auto_1fr] items-baseline gap-x-5 gap-y-1 border-b border-line py-8 sm:grid-cols-[5rem_1fr_1fr] sm:gap-x-8 sm:py-10"
                >
                  <span className="font-display text-xl text-accent/40 sm:text-2xl">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="flex items-center gap-3 font-display text-2xl font-medium leading-tight text-ink transition-colors duration-300 group-hover:text-accent sm:text-[1.9rem]">
                    <Icon
                      name={service.icon}
                      className="hidden h-6 w-6 text-accent sm:block"
                    />
                    {service.title}
                  </h2>
                  <p className="col-start-2 text-pretty text-base leading-relaxed text-slate sm:col-start-3 sm:pt-1.5">
                    {service.line}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaSection
        title="Not sure what you need?"
        intro="Tell us about your business and we’ll recommend a sensible place to start."
      />
    </>
  );
}
