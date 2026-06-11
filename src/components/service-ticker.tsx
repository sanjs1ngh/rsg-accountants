import { services } from "@/lib/services";

/**
 * A slow, edge-faded ticker of service areas — the one piece of crafted
 * motion on the page. Pure CSS, pauses on hover, and falls back to a
 * static centred row under prefers-reduced-motion (handled in globals.css).
 */
function TickerGroup({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <ul
      aria-hidden={ariaHidden || undefined}
      className={`flex shrink-0 items-center ${ariaHidden ? "marquee-dup" : ""}`}
    >
      {services.map((s) => (
        <li key={s.slug} className="flex items-center whitespace-nowrap">
          <span className="px-8 font-display text-lg text-ink/70 sm:text-xl">
            {s.short}
          </span>
          <span
            aria-hidden="true"
            className="h-1.5 w-1.5 rotate-45 bg-accent/50"
          />
        </li>
      ))}
    </ul>
  );
}

export function ServiceTicker() {
  return (
    <section
      aria-label="Our services"
      className="overflow-hidden border-y border-line bg-paper-light py-6"
    >
      <div className="marquee-mask">
        <div className="marquee-track flex w-max animate-marquee">
          <TickerGroup />
          <TickerGroup ariaHidden />
        </div>
      </div>
    </section>
  );
}
