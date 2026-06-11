import Link from "next/link";
import { Logo } from "@/components/logo";
import { MailIcon, PhoneIcon, PinIcon, ClockIcon } from "@/components/icons";
import { site, nav, mapsSearchUrl } from "@/lib/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-paper/80">
      <div className="container-x py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1.2fr]">
          {/* Brand + intro */}
          <div>
            <Logo tone="light" />
            <p className="mt-6 max-w-sm text-pretty text-sm leading-relaxed text-paper/65">
              {site.shortDescription}
            </p>
            <p className="mt-6 text-xs uppercase tracking-eyebrow text-paper/45">
              {site.credentials.slice(0, 4).join(" · ")}
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer">
            <h2 className="text-xs font-semibold uppercase tracking-eyebrow text-paper/45">
              Explore
            </h2>
            <ul className="mt-5 space-y-3 text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-paper/75 transition-colors hover:text-paper"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  className="text-paper/75 transition-colors hover:text-paper"
                >
                  Request a quote
                </Link>
              </li>
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-eyebrow text-paper/45">
              Get in touch
            </h2>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex gap-3">
                <PinIcon className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <a
                  href={mapsSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="not-italic text-paper/75 transition-colors hover:text-paper"
                >
                  {site.address.line1}, {site.address.line2}
                  <br />
                  {site.address.city}, {site.address.postcode}
                </a>
              </li>
              <li className="flex gap-3">
                <PhoneIcon className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <a
                  href={`tel:${site.contact.phoneHref}`}
                  className="text-paper/75 transition-colors hover:text-paper"
                >
                  {site.contact.phoneDisplay}
                </a>
              </li>
              <li className="flex gap-3">
                <MailIcon className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <a
                  href={`mailto:${site.contact.email}`}
                  className="text-paper/75 transition-colors hover:text-paper"
                >
                  {site.contact.email}
                </a>
              </li>
              <li className="flex gap-3">
                <ClockIcon className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <span className="text-paper/75">
                  {site.hours.map((h) => (
                    <span key={h.day} className="block">
                      {h.day}: {h.time}
                    </span>
                  ))}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal */}
        <div className="mt-14 border-t border-paper/10 pt-8">
          <div className="flex flex-col gap-4 text-xs leading-relaxed text-paper/50 lg:flex-row lg:items-center lg:justify-between">
            <p>
              © {year} {site.legalName}. All rights reserved.
              <span className="mx-2 text-paper/25">|</span>
              Registered in England &amp; Wales, company no. {site.companyNumber}.
            </p>
            <p>
              Registered office: {site.address.line1}, {site.address.line2},{" "}
              {site.address.city}, {site.address.region}, {site.address.postcode}.
            </p>
          </div>
          <p className="mt-4 text-xs leading-relaxed text-paper/40">
            {site.legalName} is a firm of Chartered Accountants. Professional body
            references are provided for information.{" "}
            <span className="text-paper/30">
              [Placeholder: confirm ICAEW firm registration details, regulatory
              status and any required regulator wording before going live.]
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
