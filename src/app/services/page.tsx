import type { Metadata } from "next";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { ButtonLink } from "@/components/button";
import { PageHeader } from "@/components/page-header";
import { CtaSection } from "@/components/cta-section";
import { Icon } from "@/components/icons";
import { services } from "@/lib/services";
import { content } from "@/lib/site-content";

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
        eyebrow={content.servicesPage.eyebrow}
        title={content.servicesPage.title}
        intro={content.servicesPage.intro}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink
            href={content.ctas.bookConsultation.href}
            variant="primary"
            withArrow
          >
            {content.ctas.bookConsultation.label}
          </ButtonLink>
          <ButtonLink href={content.ctas.requestQuote.href} variant="secondary">
            {content.ctas.requestQuote.label}
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
        title={content.servicesPage.closingTitle}
        intro={content.servicesPage.closingIntro}
      />
    </>
  );
}
