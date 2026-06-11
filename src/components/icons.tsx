import type { SVGProps } from "react";

/**
 * A small, consistent set of line icons (24×24, 1.5 stroke, currentColor).
 * Deliberately geometric and restrained — no emoji, no clip-art.
 */

export type IconName =
  | "ledger"
  | "shield"
  | "user"
  | "chart"
  | "percent"
  | "people"
  | "stack"
  | "compass"
  | "building"
  | "globe"
  | "coins"
  | "spark"
  | "seal";

const paths: Record<IconName, JSX.Element> = {
  ledger: (
    <>
      <path d="M5 3.5h11.5A1.5 1.5 0 0 1 18 5v15.5l-2.2-1.4-2.3 1.4-2.3-1.4-2.2 1.4V5A1.5 1.5 0 0 1 6.5 3.5" />
      <path d="M9 8h6M9 11.5h6" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3.5 5.5 6v5.2c0 4 2.7 7 6.5 8.3 3.8-1.3 6.5-4.3 6.5-8.3V6L12 3.5Z" />
      <path d="m9.3 12 1.9 1.9 3.5-3.7" />
    </>
  ),
  user: (
    <>
      <circle cx="12" cy="8" r="3.4" />
      <path d="M5.5 19.5a6.5 6.5 0 0 1 13 0" />
    </>
  ),
  chart: (
    <>
      <path d="M4.5 4.5v15h15" />
      <path d="M8 15.5v-3M11.5 15.5V9M15 15.5v-5M18.5 15.5V7" />
    </>
  ),
  percent: (
    <>
      <path d="m6.5 17.5 11-11" />
      <circle cx="8" cy="8" r="2.1" />
      <circle cx="16" cy="16" r="2.1" />
    </>
  ),
  people: (
    <>
      <circle cx="9" cy="8.5" r="2.8" />
      <path d="M3.8 19a5.2 5.2 0 0 1 10.4 0" />
      <path d="M15.5 6.2a2.8 2.8 0 0 1 0 4.6M16.8 14.2a5.2 5.2 0 0 1 3.4 4.8" />
    </>
  ),
  stack: (
    <>
      <path d="M12 3.5 20 8l-8 4.5L4 8l8-4.5Z" />
      <path d="m4 12 8 4.5L20 12M4 16l8 4.5L20 16" />
    </>
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="m14.5 9.5-1.2 3.8-3.8 1.2 1.2-3.8 3.8-1.2Z" />
    </>
  ),
  building: (
    <>
      <path d="M5 20.5V5a1.5 1.5 0 0 1 1.5-1.5h7A1.5 1.5 0 0 1 15 5v15.5" />
      <path d="M15 9.5h2.5A1.5 1.5 0 0 1 19 11v9.5M3.5 20.5h17" />
      <path d="M8 7.5h4M8 11h4M8 14.5h4" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17" />
      <path d="M12 3.5c2.3 2.3 3.5 5.3 3.5 8.5s-1.2 6.2-3.5 8.5c-2.3-2.3-3.5-5.3-3.5-8.5S9.7 5.8 12 3.5Z" />
    </>
  ),
  coins: (
    <>
      <ellipse cx="9" cy="7" rx="5" ry="2.6" />
      <path d="M4 7v4c0 1.4 2.2 2.6 5 2.6s5-1.2 5-2.6V7" />
      <path d="M10 13.4V17c0 1.4 2.2 2.6 5 2.6s5-1.2 5-2.6v-4c0-1.4-2.2-2.6-5-2.6" />
    </>
  ),
  spark: (
    <>
      <path d="M12 3.5c.4 3.6 1.9 5.1 5.5 5.5-3.6.4-5.1 1.9-5.5 5.5-.4-3.6-1.9-5.1-5.5-5.5 3.6-.4 5.1-1.9 5.5-5.5Z" />
      <path d="M18 14.5c.2 1.6.9 2.3 2.5 2.5-1.6.2-2.3.9-2.5 2.5-.2-1.6-.9-2.3-2.5-2.5 1.6-.2 2.3-.9 2.5-2.5Z" />
    </>
  ),
  seal: (
    <>
      <circle cx="12" cy="10.5" r="6" />
      <path d="m9.4 10.5 1.8 1.8 3.4-3.6" />
      <path d="M8.7 15.6 7 21l5-2.2L17 21l-1.7-5.4" />
    </>
  ),
};

export function Icon({
  name,
  ...props
}: { name: IconName } & SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}

/* Standalone UI glyphs */

export function ArrowRight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M4.5 12h14M13 6.5 18.5 12 13 17.5" />
    </svg>
  );
}

export function PhoneIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M6.5 4.5h3l1.3 3.4-1.7 1.3a11 11 0 0 0 4.7 4.7l1.3-1.7 3.4 1.3v3a1.5 1.5 0 0 1-1.6 1.5A14.5 14.5 0 0 1 5 6.1 1.5 1.5 0 0 1 6.5 4.5Z" />
    </svg>
  );
}

export function MailIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <rect x="3.5" y="5.5" width="17" height="13" rx="1.5" />
      <path d="m4 7 8 5.5L20 7" />
    </svg>
  );
}

export function ClockIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  );
}

export function PinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M12 21c4-4 6.5-7.2 6.5-10.5A6.5 6.5 0 0 0 5.5 10.5C5.5 13.8 8 17 12 21Z" />
      <circle cx="12" cy="10.3" r="2.4" />
    </svg>
  );
}

export function CheckIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="m5 12.5 4.2 4.2L19 7" />
    </svg>
  );
}

export function MenuIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function CloseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}
