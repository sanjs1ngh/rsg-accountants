import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { ButtonLink } from "@/components/button";
import { ArcMotif } from "@/components/decor";
import { PhoneIcon, MailIcon } from "@/components/icons";
import { site } from "@/lib/site";
import { content } from "@/lib/site-content";

export function CtaSection({
  title = content.ctaBand.title,
  intro = content.ctaBand.intro,
}: {
  title?: string;
  intro?: string;
}) {
  return (
    <section className="bg-paper py-20 sm:py-28">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-ink px-6 py-16 text-center sm:px-12 sm:py-20">
            <ArcMotif className="pointer-events-none absolute -right-10 -top-10 h-72 w-72 text-paper/10" />
            <ArcMotif className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rotate-180 text-accent/25" />

            <div className="relative mx-auto max-w-2xl">
              <span className="eyebrow justify-center text-accent-soft/90">
                {content.ctaBand.eyebrow}
              </span>
              <h2 className="mt-5 font-display text-3xl font-medium leading-tight text-paper-light sm:text-4xl">
                {title}
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-pretty text-base leading-relaxed text-paper/70">
                {intro}
              </p>

              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <ButtonLink
                  href={content.ctas.bookConsultation.href}
                  variant="light"
                  withArrow
                >
                  {content.ctas.bookConsultation.label}
                </ButtonLink>
                <ButtonLink
                  href={`tel:${site.contact.phoneHref}`}
                  variant="ghost"
                  className="text-paper hover:text-accent-soft"
                >
                  <PhoneIcon className="h-4 w-4" />
                  {content.ctas.callUs.label}
                </ButtonLink>
              </div>

              <div className="mt-8 flex flex-col items-center justify-center gap-x-8 gap-y-2 text-sm text-paper/55 sm:flex-row">
                <a
                  href={`tel:${site.contact.phoneHref}`}
                  className="inline-flex items-center gap-2 transition-colors hover:text-paper"
                >
                  <PhoneIcon className="h-4 w-4 text-accent-soft/80" />
                  {site.contact.phoneDisplay}
                </a>
                <a
                  href={`mailto:${site.contact.email}`}
                  className="inline-flex items-center gap-2 transition-colors hover:text-paper"
                >
                  <MailIcon className="h-4 w-4 text-accent-soft/80" />
                  {site.contact.email}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
