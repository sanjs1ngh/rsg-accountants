# RSG Accountants — Website

Marketing website for **RSG Accountants** (legal entity: _RSG Professional Services LLP_), a chartered accountancy and business advisory firm in Hayes, West London.

Built as a fast, accessible, SEO-friendly site with a clean component structure that's easy to extend and hand off.

---

## Tech stack

- **[Next.js 14](https://nextjs.org/)** (App Router) — file-based routing, server components, built-in metadata/SEO, sitemap & robots.
- **[TypeScript](https://www.typescriptlang.org/)** — type safety across components and data.
- **[Tailwind CSS 3](https://tailwindcss.com/)** — a small, restrained design system defined in `tailwind.config.ts`.
- **Fonts** via `next/font` (self-hosted, no layout shift): **Newsreader** (display) + **Hanken Grotesk** (body).
- **No animation library** — scroll reveals use a tiny `IntersectionObserver` hook (`src/components/reveal.tsx`) with motion defined in CSS and fully disabled under `prefers-reduced-motion`.

---

## Requirements

- **Node.js 18.18+** (Node 20 LTS recommended)
- npm (bundled with Node)

Check your version:

```bash
node --version
```

---

## Run locally

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev
```

Open **http://localhost:3000**.

### Other scripts

```bash
npm run build   # Production build
npm run start   # Serve the production build locally (run build first)
npm run lint    # Lint with eslint-config-next
```

---

## Project structure

```
src/
├─ app/
│  ├─ layout.tsx          # Fonts, metadata, JSON-LD, header/footer shell
│  ├─ page.tsx            # Home
│  ├─ services/page.tsx   # Services
│  ├─ about/page.tsx      # About
│  ├─ contact/page.tsx    # Contact
│  ├─ api/contact/route.ts# Contact form endpoint (validates + logs)
│  ├─ opengraph-image.tsx # Auto-generated social share image
│  ├─ sitemap.ts          # /sitemap.xml
│  ├─ robots.ts           # /robots.txt
│  ├─ icon.svg            # Favicon
│  └─ globals.css         # Tokens, focus states, reveal utilities
├─ components/            # Header, footer, buttons, form, sections, icons…
└─ lib/
   ├─ site.ts             # Firm details, contact info, navigation
   └─ services.ts         # The service catalogue (single source of truth)
```

**Most content lives in `src/lib/`** — update `site.ts` and `services.ts` to change copy, contact details or the service list everywhere at once.

---

## Deploy to a domain

### Option A — Vercel (recommended; first-class Next.js support)

1. Push this folder to a GitHub/GitLab repository.
2. Go to **[vercel.com](https://vercel.com/new)** → **Import Project** → select the repo.
3. Framework preset auto-detects **Next.js** — no configuration needed. Click **Deploy**.
4. Add your custom domain under **Project → Settings → Domains** (e.g. `rsgllp.co.uk`) and point DNS as instructed.
5. Set the production URL in `src/lib/site.ts` (`site.url`) so canonical URLs, the sitemap and Open Graph tags resolve correctly.

The contact API route (`/api/contact`) runs as a serverless function on Vercel out of the box.

### Option B — Netlify

1. Push to a Git repository and **Import** it in Netlify.
2. Install the official **`@netlify/plugin-nextjs`** (Netlify usually adds this automatically for Next.js sites).
3. Build command `npm run build`, then deploy. Add your custom domain under **Domain settings**.

> If you prefer not to run a server, you can also use Netlify Forms or a third-party form service instead of the included API route (see placeholders below).

---

## Environment variables

Copy `.env.example` to `.env.local`. **Nothing is required to run locally** — without these the contact form validates and logs instead of emailing.

| Variable | Purpose |
|----------|---------|
| `RESEND_API_KEY` | Resend API key. When set, the contact form emails enquiries. When unset, it logs them. |
| `CONTACT_TO_EMAIL` | Inbox that receives enquiries. Defaults to `info@rsgllp.co.uk`. |
| `CONTACT_FROM_EMAIL` | Verified sender. Must be on a domain verified in Resend. |
| `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` | Optional. The map works without it (keyless embed). |

**Contact form (Resend):** create an account at [resend.com](https://resend.com), verify the `rsgllp.co.uk` sending domain, create an API key, and set the three `CONTACT_*` / `RESEND_*` variables in your host's dashboard (Vercel → Settings → Environment Variables). Enquiries are delivered to `info@rsgllp.co.uk` with the sender's address as `reply-to`. No npm dependency is needed — the route calls the Resend API directly. The implementation is in `src/app/api/contact/route.ts`.

## Placeholders to replace before launch

| Item | Where | Notes |
|------|-------|-------|
| **Production domain** | `src/lib/site.ts` → `site.url` | Currently `https://www.rsgllp.co.uk`. Used for canonical URLs, sitemap, OG. |
| **Logo** | `src/components/logo.tsx`, `src/app/icon.svg` | Typographic wordmark + favicon. Swap for the real logo asset / a `.ico` for legacy browsers if needed. |
| **Official accreditation logos** | `src/components/credentials-feature.tsx` | ICAEW / ACCA / CIOT shown as premium typographic marks with logo **slots**. Drop the licensed logos in only with each body's permission, per their brand guidelines (resource links in `src/lib/site.ts`). |
| **Audit registration** | `src/lib/site.ts` (`accreditations`) | Confirm the firm holds current ICAEW statutory audit registration before publishing this claim. |
| **Team headcount (optional)** | `src/app/about/page.tsx` | Copy says "a team of qualified accountants, tax advisers and auditors." Add a specific number if you want one. |
| **Regulatory wording** | `src/components/site-footer.tsx` | Confirm ICAEW firm registration details and any required regulator statements. |
| **Contact form sender domain** | Resend dashboard + `.env` | Verify `rsgllp.co.uk` and set `CONTACT_FROM_EMAIL` to a verified address. |

---

## Accessibility & SEO notes

- Semantic landmarks (`header`, `main`, `nav`, `footer`), a **skip-to-content** link, visible keyboard focus styles, and labelled form fields with inline error messaging.
- Strong colour contrast (deep navy on warm off-white).
- `prefers-reduced-motion` fully respected — all reveals and transitions disable.
- Per-page `<title>`/description, Open Graph + Twitter cards, generated OG image, `AccountingService` JSON-LD, `sitemap.xml` and `robots.txt`.

---

© RSG Professional Services LLP. Company no. OC451093.
