import type { SVGProps } from "react";

/**
 * A restrained, concentric line motif — used as intentional, abstract
 * decoration (a quiet nod to growth and precision) rather than clip-art.
 */
export function ArcMotif(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 240 240"
      fill="none"
      aria-hidden="true"
      {...props}
    >
      <g stroke="currentColor" strokeWidth="1">
        <circle cx="240" cy="240" r="48" opacity="0.9" />
        <circle cx="240" cy="240" r="92" opacity="0.65" />
        <circle cx="240" cy="240" r="136" opacity="0.45" />
        <circle cx="240" cy="240" r="180" opacity="0.28" />
        <circle cx="240" cy="240" r="224" opacity="0.16" />
      </g>
    </svg>
  );
}

/** A fine vertical "ledger rule" grid, very low contrast. */
export function GridMotif(props: SVGProps<SVGSVGElement>) {
  return (
    <svg fill="none" aria-hidden="true" {...props}>
      <defs>
        <pattern
          id="rsg-grid"
          width="32"
          height="32"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M32 0H0V32"
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.5"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#rsg-grid)" />
    </svg>
  );
}
