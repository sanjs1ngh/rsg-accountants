import type { Metadata } from "next";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { PageHeader } from "@/components/page-header";
import { ContactForm } from "@/components/contact-form";
import { OfficeMap } from "@/components/office-map";
import {
  PhoneIcon,
  MailIcon,
  PinIcon,
  ClockIcon,
} from "@/components/icons";
import { site, mapsSearchUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with RSG Accountants in Hayes, West London. Book a free consultation, request a quote, call or email. We aim to respond within one working day.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let’s start a conversation."
        intro="Tell us about your business and what you need. We reply within one working day, and the first consultation is free."
      />

      <section className="bg-paper py-16 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            {/* Form */}
            <Reveal>
              <div className="rounded-3xl border border-line bg-paper-light p-7 shadow-card sm:p-9">
                <h2 className="font-display text-2xl font-medium text-ink">
                  Send us a message
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-slate">
                  Fields marked required help us point your enquiry to the right
                  person.
                </p>
                <div className="mt-7">
                  <ContactForm />
                </div>
              </div>
            </Reveal>

            {/* Details */}
            <Reveal delay={120}>
              <div className="flex flex-col gap-6">
                <div className="rounded-3xl border border-line bg-paper-light p-7 sm:p-9">
                  <h2 className="font-display text-xl font-medium text-ink">
                    Speak to us directly
                  </h2>
                  <ul className="mt-6 space-y-5">
                    <ContactRow
                      icon={<PhoneIcon className="h-5 w-5" />}
                      label="Phone"
                    >
                      <a
                        href={`tel:${site.contact.phoneHref}`}
                        className="text-ink transition-colors hover:text-accent"
                      >
                        {site.contact.phoneDisplay}
                      </a>
                    </ContactRow>
                    <ContactRow
                      icon={<MailIcon className="h-5 w-5" />}
                      label="Email"
                    >
                      <a
                        href={`mailto:${site.contact.email}`}
                        className="text-ink transition-colors hover:text-accent"
                      >
                        {site.contact.email}
                      </a>
                    </ContactRow>
                    <ContactRow
                      icon={<PinIcon className="h-5 w-5" />}
                      label="Office"
                    >
                      <a
                        href={mapsSearchUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="not-italic text-ink transition-colors hover:text-accent"
                      >
                        {site.address.line1}, {site.address.line2}
                        <br />
                        {site.address.city}, {site.address.region},{" "}
                        {site.address.postcode}
                      </a>
                    </ContactRow>
                    <ContactRow
                      icon={<ClockIcon className="h-5 w-5" />}
                      label="Opening hours"
                    >
                      <span className="text-ink">
                        {site.hours.map((h) => (
                          <span key={h.day} className="block">
                            {h.day}: {h.time}
                          </span>
                        ))}
                      </span>
                    </ContactRow>
                  </ul>
                </div>

                <OfficeMap className="aspect-[16/10] w-full rounded-3xl" />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}

function ContactRow({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex gap-4">
      <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
        {icon}
      </span>
      <span className="flex flex-col">
        <span className="text-xs font-semibold uppercase tracking-eyebrow text-slate-light">
          {label}
        </span>
        <span className="mt-1 text-sm leading-relaxed">{children}</span>
      </span>
    </li>
  );
}
