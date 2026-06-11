import type { Metadata } from "next";
import { Newsreader, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { site } from "@/lib/site";

const display = Newsreader({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  fallback: ["Georgia", "serif"],
  adjustFontFallback: false,
});

const sans = Hanken_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Chartered Accountants in Hayes, West London`,
    template: `%s — ${site.name}`,
  },
  description: site.shortDescription,
  keywords: [
    "accountants Hayes",
    "chartered accountants West London",
    "small business accountants",
    "self assessment Hayes",
    "VAT accountant",
    "payroll services West London",
    "business advisory Hayes",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — Chartered Accountants in Hayes, West London`,
    description: site.shortDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Chartered Accountants in Hayes, West London`,
    description: site.shortDescription,
  },
  robots: { index: true, follow: true },
  authors: [{ name: site.legalName }],
  category: "Accounting",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AccountingService",
  name: site.name,
  legalName: site.legalName,
  description: site.shortDescription,
  url: site.url,
  email: site.contact.email,
  telephone: site.contact.phone,
  areaServed: "West London",
  address: {
    "@type": "PostalAddress",
    streetAddress: `${site.address.line1}, ${site.address.line2}`,
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    postalCode: site.address.postcode,
    addressCountry: "GB",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:30",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB" className={`${display.variable} ${sans.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-paper-light"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
