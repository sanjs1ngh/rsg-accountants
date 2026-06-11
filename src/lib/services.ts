import type { IconName } from "@/components/icons";

export type Service = {
  slug: string;
  title: string;
  /** Short label for the scrolling ticker. */
  short: string;
  icon: IconName;
  /** One clean line. */
  line: string;
};

/** The service catalogue. One clear line each, value first. */
export const services: Service[] = [
  {
    slug: "accounting-year-end",
    title: "Accounting & year-end accounts",
    short: "Year-End Accounts",
    icon: "ledger",
    line: "Year-end and management accounts, filed on time.",
  },
  {
    slug: "audit-assurance",
    title: "Audit & assurance",
    short: "Audit & Assurance",
    icon: "shield",
    line: "Independent audits that satisfy lenders and boards.",
  },
  {
    slug: "personal-tax",
    title: "Personal tax & Self Assessment",
    short: "Personal Tax",
    icon: "user",
    line: "Self Assessment filed, with year-round tax planning.",
  },
  {
    slug: "business-tax",
    title: "Business & corporation tax",
    short: "Corporation Tax",
    icon: "chart",
    line: "Corporation tax handled, with every relief claimed.",
  },
  {
    slug: "vat",
    title: "VAT",
    short: "VAT",
    icon: "percent",
    line: "Registration and returns under Making Tax Digital.",
  },
  {
    slug: "payroll-paye",
    title: "Payroll & PAYE",
    short: "Payroll & PAYE",
    icon: "people",
    line: "Payroll, RTI and pensions, run each cycle.",
  },
  {
    slug: "bookkeeping-outsourced-finance",
    title: "Bookkeeping & outsourced finance",
    short: "Bookkeeping",
    icon: "stack",
    line: "A finance function on cloud software, without the in-house hire.",
  },
  {
    slug: "business-advisory",
    title: "Business advisory",
    short: "Business Advisory",
    icon: "compass",
    line: "Forecasting, structure and growth planning.",
  },
  {
    slug: "company-formation",
    title: "Company formation & company law",
    short: "Company Formation",
    icon: "building",
    line: "Incorporation and ongoing company secretarial support.",
  },
  {
    slug: "international-import-export",
    title: "International & import-export",
    short: "International",
    icon: "globe",
    line: "VAT and compliance for cross-border trade.",
  },
  {
    slug: "funding-asset-finance",
    title: "Funding & asset finance",
    short: "Funding & Finance",
    icon: "coins",
    line: "Lender-ready figures and support through applications.",
  },
  {
    slug: "consultancy",
    title: "Other consultancy",
    short: "Consultancy",
    icon: "spark",
    line: "Support for questions that fall outside a standard service.",
  },
];

/** The three pillars surfaced on the home page (Services page holds the full list). */
export const pillars = [
  {
    title: "Accounts",
    icon: "ledger" as IconName,
    line: "Year-end and management accounts, filed on time.",
    href: "/services#accounting-year-end",
  },
  {
    title: "Audit",
    icon: "shield" as IconName,
    line: "Independent audits that satisfy lenders and boards.",
    href: "/services#audit-assurance",
  },
  {
    title: "Tax",
    icon: "chart" as IconName,
    line: "Personal and corporate tax, planned and filed.",
    href: "/services#personal-tax",
  },
];
