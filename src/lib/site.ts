/**
 * Single source of truth for firm details, navigation and contact info.
 * Update these values to roll the real brand assets and copy through the site.
 */

export const site = {
  name: "RSG Accountants",
  legalName: "RSG Professional Services LLP",
  companyNumber: "OC451093",
  tagline:
    "Chartered accountants and business advisers for growing businesses in West London.",
  shortDescription:
    "Chartered accountants and business advisers in Hayes, West London. Built on over 20 years of local accountancy heritage, working with sole traders, small businesses and limited companies.",
  // Used for canonical URLs, sitemap and Open Graph. Replace with the live domain at launch.
  url: "https://www.rsgllp.co.uk",
  // Heritage: the practice traces to JS Gulati & Co Ltd, incorporated 2002.
  // Worded carefully so RSG itself does not claim a longer trading history than is accurate.
  heritage: {
    since: 2002,
    years: "20+",
    line: "Built on over 20 years of West London accountancy heritage.",
  },
  address: {
    line1: "Machine Works House",
    line2: "5 Pressing Lane",
    city: "Hayes",
    region: "England",
    postcode: "UB3 1FD",
    country: "United Kingdom",
  },
  contact: {
    email: "info@rsgllp.co.uk",
    phone: "+44 20 8573 5329",
    phoneDisplay: "+44 20 8573 5329",
    phoneHref: "+442085735329",
  },
  hours: [
    { day: "Monday to Friday", time: "9:00am to 5:30pm" },
    { day: "Saturday & Sunday", time: "Closed" },
  ],
  // Plain-text credential labels used in the footer and the home hero card.
  credentials: [
    "ICAEW Chartered",
    "ACCA qualified",
    "CIOT tax expertise",
    "Audit registered",
  ],
} as const;

/**
 * Accreditations shown as a premium feature on the About page.
 * `mark` is a typographic placeholder for the official logo — drop the
 * licensed asset into the slot when approved. Official brand resources:
 *   ICAEW: https://www.icaew.com/about-icaew/find-a-chartered-accountant/icaew-firms/use-of-the-icaew-logo
 *   ACCA:  https://www.accaglobal.com/  (member/brand resources)
 *   CIOT:  https://www.tax.org.uk/
 */
export const accreditations = [
  { mark: "ICAEW", name: "ICAEW Chartered", note: "Chartered accountants" },
  { mark: "ACCA", name: "ACCA qualified expertise", note: "Qualified accountants" },
  { mark: "CIOT", name: "CIOT tax expertise", note: "Chartered tax advisers" },
  { mark: "AUDIT", name: "Audit registered", note: "Statutory audit" },
] as const;

export const nav = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const mapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${site.address.line1}, ${site.address.line2}, ${site.address.city}, ${site.address.postcode}`,
)}`;

/** Keyless Google Maps embed (no API key required). */
export const mapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
  `${site.address.line1}, ${site.address.line2}, ${site.address.city}, ${site.address.postcode}`,
)}&z=15&output=embed`;
