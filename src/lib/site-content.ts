import type { IconName } from "@/components/icons";

/**
 * ───────────────────────────────────────────────────────────────────────────
 *  RSG ACCOUNTANTS — WEBSITE CONTENT
 * ───────────────────────────────────────────────────────────────────────────
 *
 *  This is the ONLY file you need to edit to change wording, links, contact
 *  details, opening hours, the address, or the Google Maps location.
 *
 *  HOW TO EDIT:
 *   • Change text inside the "quotes". Keep the quotes.
 *   • Don't change the words before the colon (e.g. `email:`), only the value.
 *   • A line starting with // is a note to you and is ignored by the website.
 *   • After editing, save the file, then push with GitHub Desktop. Vercel
 *     updates the live site automatically (see WEBSITE_EDIT_GUIDE.md).
 *
 *  Leave the `icon:`, `kind:`, `src:`, `w:`, `h:`, and `slug:` values alone —
 *  those are technical and not visible text.
 * ───────────────────────────────────────────────────────────────────────────
 */

/* ── Firm identity ──────────────────────────────────────────────────────── */
const firm = {
  name: "RSG Accountants",
  legalName: "RSG Professional Services LLP",
  companyNumber: "OC451093",
  logoSubtitle: "Chartered & Advisory", // small text under the logo
};

/* ── Search engine / sharing ────────────────────────────────────────────── */
const seo = {
  // Your live web address. After you connect your own domain, change this to it.
  url: "https://www.rsgllp.co.uk",
  description:
    "Chartered accountants and business advisers in Hayes, West London. Built on over 20 years of local accountancy heritage, working with sole traders, small businesses and limited companies.",
};

/* ── Contact details ────────────────────────────────────────────────────── */
const contact = {
  email: "info@rsgllp.co.uk",
  phone: "+44 20 8573 5329", // shown on the page
  phoneDisplay: "+44 20 8573 5329",
  phoneHref: "+442085735329", // for the "tap to call" link — digits only, no spaces
};

/* ── Office address ─────────────────────────────────────────────────────── */
const address = {
  line1: "Machine Works House",
  line2: "5 Pressing Lane",
  city: "Hayes",
  region: "England",
  postcode: "UB3 1FD",
  country: "United Kingdom",
};

/* ── Opening hours ──────────────────────────────────────────────────────── */
const hours = [
  { day: "Monday to Friday", time: "9:00am to 5:30pm" },
  { day: "Saturday & Sunday", time: "Closed" },
];

/* ── Google Maps ────────────────────────────────────────────────────────────
 *  The map currently points to: Machine Works House, 5 Pressing Lane, Hayes,
 *  UB3 1FD.
 *
 *  If the pin is slightly off, fix it like this:
 *   1. Go to Google Maps and search your exact address.
 *   2. For the MAP: click Share → "Embed a map" → Copy HTML → from that HTML
 *      copy ONLY the link inside src="..." and paste it as googleMapsEmbedUrl.
 *   3. For the DIRECTIONS button: click Share → "Send a link" → Copy link, and
 *      paste it as googleMapsDirectionsUrl.
 * ─────────────────────────────────────────────────────────────────────────── */
const maps = {
  googleMapsEmbedUrl:
    "https://www.google.com/maps?q=Machine%20Works%20House%2C%205%20Pressing%20Lane%2C%20Hayes%2C%20UB3%201FD&z=15&output=embed",
  googleMapsDirectionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=Machine%20Works%20House%2C%205%20Pressing%20Lane%2C%20Hayes%2C%20UB3%201FD",
};

/* ── Heritage line ──────────────────────────────────────────────────────── */
const heritage = {
  since: 2002,
  years: "20+",
  line: "Built on over 20 years of West London accountancy heritage.",
};

/* ── Main menu (top navigation) ─────────────────────────────────────────── */
const nav: { label: string; href: string }[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

/* ── Buttons (labels + where they link) ─────────────────────────────────────
 *  Internal links start with "/". Phone links start with "tel:". Email links
 *  start with "mailto:".
 * ─────────────────────────────────────────────────────────────────────────── */
const ctas = {
  bookConsultation: { label: "Book a free consultation", href: "/contact" },
  requestQuote: { label: "Request a quote", href: "/contact" },
  allServices: { label: "All services", href: "/services" },
  viewServices: { label: "View services" },
  discussAudit: { label: "Discuss an audit", href: "/contact" },
  exploreServices: { label: "Explore services", href: "/services" },
  callUs: { label: "Call us", href: `tel:${contact.phoneHref}` },
};

/* ── Credentials card (home hero) ───────────────────────────────────────── */
const credentialsCard = {
  eyebrow: "Credentials",
  marks: [
    { mark: "ICAEW", label: "Chartered" },
    { mark: "ACCA", label: "Qualified" },
    { mark: "CIOT", label: "Tax" },
  ],
  tagline: "Chartered Accountants & Business Advisers",
  footnote: "Audit registered · Hayes, West London",
};

/* ── Accreditations feature (About page) ────────────────────────────────────
 *  `name` and `note` are the visible text. Leave kind/src/w/h/alt alone.
 * ─────────────────────────────────────────────────────────────────────────── */
export type AccreditationItem =
  | { kind: "image"; src: string; w: number; h: number; alt: string; name: string; note: string }
  | { kind: "text"; text: string; name: string; note: string }
  | { kind: "seal"; name: string; note: string };

const accreditations = {
  eyebrow: "Accreditations",
  heading: "Qualified, regulated, accountable.",
  intro: "Standards you can hold us to, across accountancy, tax and audit.",
  items: [
    { kind: "image", src: "/logos/icaew.svg", w: 149, h: 245, alt: "ICAEW", name: "ICAEW Chartered", note: "Chartered accountants" },
    { kind: "image", src: "/logos/acca.png", w: 2000, h: 2000, alt: "ACCA", name: "ACCA qualified", note: "Qualified accountants" },
    { kind: "image", src: "/logos/ciot.png", w: 180, h: 180, alt: "CIOT", name: "CIOT tax expertise", note: "Chartered tax advisers" },
    { kind: "seal", name: "Audit registered", note: "Statutory audit" },
  ] as AccreditationItem[],
};

/* ── Footer credential labels (small text in the footer) ────────────────── */
const footerCredentials = [
  "ICAEW Chartered",
  "ACCA qualified",
  "CIOT tax expertise",
  "Audit registered",
];

/* ── SERVICES ───────────────────────────────────────────────────────────────
 *  `title` and `line` are the visible text. Leave slug/short/icon alone.
 * ─────────────────────────────────────────────────────────────────────────── */
export type Service = {
  slug: string;
  title: string;
  short: string; // short label used in the scrolling strip
  icon: IconName;
  line: string;
};

const services: Service[] = [
  { slug: "accounting-year-end", title: "Accounting & year-end accounts", short: "Year-End Accounts", icon: "ledger", line: "Year-end and management accounts, filed on time." },
  { slug: "audit-assurance", title: "Audit & assurance", short: "Audit & Assurance", icon: "shield", line: "Independent audits that satisfy lenders and boards." },
  { slug: "personal-tax", title: "Personal tax & Self Assessment", short: "Personal Tax", icon: "user", line: "Self Assessment filed, with year-round tax planning." },
  { slug: "business-tax", title: "Business & corporation tax", short: "Corporation Tax", icon: "chart", line: "Corporation tax handled, with every relief you’re due." },
  { slug: "vat", title: "VAT", short: "VAT", icon: "percent", line: "Registration and returns under Making Tax Digital." },
  { slug: "payroll-paye", title: "Payroll & PAYE", short: "Payroll & PAYE", icon: "people", line: "Payroll, RTI and pensions, run each cycle." },
  { slug: "bookkeeping-outsourced-finance", title: "Bookkeeping & outsourced finance", short: "Bookkeeping", icon: "stack", line: "A finance function on cloud software, without the in-house hire." },
  { slug: "business-advisory", title: "Business advisory", short: "Business Advisory", icon: "compass", line: "Forecasting, structure and growth planning." },
  { slug: "company-formation", title: "Company formation & company law", short: "Company Formation", icon: "building", line: "Incorporation and ongoing company secretarial support." },
  { slug: "international-import-export", title: "International & import-export", short: "International", icon: "globe", line: "VAT and compliance for cross-border trade." },
  { slug: "funding-asset-finance", title: "Funding & asset finance", short: "Funding & Finance", icon: "coins", line: "Lender-ready figures and support through applications." },
  { slug: "consultancy", title: "Other consultancy", short: "Consultancy", icon: "spark", line: "Support for questions that fall outside a standard service." },
];

/* ── Home page: three pillars ───────────────────────────────────────────── */
const pillars: { title: string; icon: IconName; line: string; href: string }[] = [
  { title: "Accounts", icon: "ledger", line: "Year-end and management accounts, filed on time.", href: "/services#accounting-year-end" },
  { title: "Audit", icon: "shield", line: "Independent audits that satisfy lenders and boards.", href: "/services#audit-assurance" },
  { title: "Tax", icon: "chart", line: "Personal and corporate tax, planned and filed.", href: "/services#personal-tax" },
];

/* ── HOME PAGE ──────────────────────────────────────────────────────────── */
const home = {
  hero: {
    eyebrow: "Chartered Accountants · Hayes, West London",
    heading:
      "Chartered accountants and business advisers for growing businesses in West London.",
    subheading:
      "Clear advice for sole traders, small businesses and limited companies.",
  },
  pillarsSection: {
    heading: "Where we focus.",
  },
  why: {
    heading: "Why RSG.",
    items: [
      { title: "Plain English", line: "Clear advice, not jargon." },
      { title: "Proactive", line: "We look ahead, so deadlines never catch you out." },
      { title: "Chartered", line: "Qualified people behind every number." },
    ],
  },
  auditAdvisory: {
    eyebrow: "Audit & advisory",
    headingLine1: "Rigorous audit.",
    headingLine2: "Advice that looks forward.",
    body: "Independent assurance for the businesses that need it, and advice that looks past the sign-off.",
    cards: [
      { icon: "shield" as IconName, title: "Audit & assurance", line: "Confidence for lenders, investors and boards." },
      { icon: "compass" as IconName, title: "Business advisory", line: "Support for the decisions that matter." },
    ],
  },
};

/* ── SERVICES PAGE ──────────────────────────────────────────────────────── */
const servicesPage = {
  eyebrow: "Services",
  title: "What we do.",
  intro: "Compliance handled properly, and advice for what comes next.",
  closingTitle: "Not sure what you need?",
  closingIntro:
    "Tell us about your business and we’ll recommend a sensible place to start.",
};

/* ── ABOUT PAGE ─────────────────────────────────────────────────────────── */
const aboutPage = {
  header: {
    eyebrow: "About",
    title: "Built for West London business.",
    intro:
      "Over 20 years of local accountancy heritage, brought together as one chartered firm.",
  },
  practice: {
    eyebrow: "Our practice",
    statement:
      "Rooted in a practice serving West London businesses since 2002, RSG brings the standards of a chartered firm to the businesses on its doorstep.",
    paragraphs: [
      "We work with sole traders, growing companies and established businesses across the area. Compliance is handled properly. Advice is clear and direct.",
      "Behind the work is a team of qualified accountants, tax advisers and auditors.",
    ],
  },
  location: {
    eyebrow: "Find us",
    heading: "Rooted in Hayes.",
    body: "In person across West London, and set up to work with you wherever you are.",
  },
};

/* ── CONTACT PAGE ───────────────────────────────────────────────────────── */
const contactPage = {
  header: {
    eyebrow: "Contact",
    title: "Let’s start a conversation.",
    intro:
      "Tell us about your business and what you need. We reply within one working day, and the first consultation is free.",
  },
  form: {
    heading: "Send us a message",
    intro: "Fields marked required help us point your enquiry to the right person.",
    businessTypes: [
      "Sole trader",
      "Limited company",
      "Partnership / LLP",
      "Landlord / property",
      "Startup",
      "Charity / not-for-profit",
      "Other",
    ],
    notSureOption: "Not sure yet",
    submitLabel: "Send message",
    submittingLabel: "Sending…",
    consent: "By submitting, you agree we may contact you about your enquiry.",
    successHeading: "Thank you. Your message is on its way.",
    successBody: "We aim to respond within one working day. If your enquiry is urgent, please call us on",
    sendAnother: "Send another message",
    errorMessage: "Something went wrong sending your message. Please try again, or email us directly at",
    messagePlaceholder: "Tell us a little about your business and how we can help…",
  },
  detailsHeading: "Speak to us directly",
};

/* ── REUSABLE "BOOK A CONSULTATION" BAND ────────────────────────────────── */
const ctaBand = {
  eyebrow: "Free consultation",
  title: "Let’s talk.",
  intro: "Book a free consultation. We’ll tell you how we can help, and what it costs.",
};

/* ── FOOTER ─────────────────────────────────────────────────────────────── */
const footer = {
  exploreHeading: "Explore",
  requestQuoteLabel: "Request a quote",
  getInTouchHeading: "Get in touch",
  // The small regulatory line. Confirm exact wording with your professional body.
  regulatoryNote:
    "RSG Professional Services LLP is a firm of Chartered Accountants. Professional body references are provided for information.",
};

/* ───────────────────────────────────────────────────────────────────────────
 *  Everything above is bundled here. You normally won't need to touch this.
 * ─────────────────────────────────────────────────────────────────────────── */
export const content = {
  firm,
  seo,
  contact,
  address,
  hours,
  maps,
  heritage,
  nav,
  ctas,
  credentialsCard,
  accreditations,
  footerCredentials,
  services,
  pillars,
  home,
  servicesPage,
  aboutPage,
  contactPage,
  ctaBand,
  footer,
};
