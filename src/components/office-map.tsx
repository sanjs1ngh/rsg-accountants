import { ArrowRight } from "@/components/icons";
import { site, mapsEmbedUrl, mapsSearchUrl } from "@/lib/site";

/**
 * Interactive Google Maps embed for the Hayes office.
 * Uses the keyless `output=embed` endpoint, so it works with no API key.
 * For a fully branded/styled map, switch to the Google Maps Embed API and
 * set NEXT_PUBLIC_GOOGLE_MAPS_API_KEY (see README).
 */
export function OfficeMap({ className = "" }: { className?: string }) {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border border-line bg-paper-dark ${className}`}
    >
      <iframe
        title={`Map showing ${site.name}, ${site.address.city}`}
        src={mapsEmbedUrl}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-full w-full grayscale-[0.35] transition-[filter] duration-700 ease-refined group-hover:grayscale-0"
        style={{ border: 0 }}
      />
      <a
        href={mapsSearchUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-ink/90 px-4 py-2 text-xs font-semibold text-paper-light backdrop-blur-sm transition-colors hover:bg-ink"
      >
        Open in Google Maps
        <ArrowRight className="h-3.5 w-3.5" />
      </a>
    </div>
  );
}
