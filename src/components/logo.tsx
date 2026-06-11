import Link from "next/link";
import { site } from "@/lib/site";
import { content } from "@/lib/site-content";

/**
 * Typographic wordmark — a small geometric monogram tile + the firm name.
 * Replace with the supplied logo asset when available (see README placeholders).
 */
export function Logo({
  tone = "dark",
  className = "",
}: {
  tone?: "dark" | "light";
  className?: string;
}) {
  const isLight = tone === "light";

  return (
    <Link
      href="/"
      aria-label={`${site.name} — home`}
      className={`group inline-flex items-center gap-3 ${className}`}
    >
      <span
        aria-hidden="true"
        className={`grid h-10 w-10 place-items-center rounded-[10px] font-display text-[15px] font-semibold leading-none transition-colors duration-300 ${
          isLight
            ? "bg-paper-light text-ink"
            : "bg-ink text-paper-light group-hover:bg-accent"
        }`}
      >
        RSG
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-lg font-semibold tracking-tight ${
            isLight ? "text-paper-light" : "text-ink"
          }`}
        >
          {content.firm.name}
        </span>
        <span
          className={`mt-1 text-[10px] font-semibold uppercase tracking-eyebrow ${
            isLight ? "text-paper/70" : "text-slate"
          }`}
        >
          {content.firm.logoSubtitle}
        </span>
      </span>
    </Link>
  );
}
