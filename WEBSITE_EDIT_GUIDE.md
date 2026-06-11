# How to edit your website (plain-English guide)

You can change almost all of the website's text, links, contact details and the map by editing **one single file**. You do not need to be a developer.

---

## The one file you edit

```
src/lib/site-content.ts
```

Open it in any text editor. Inside, you'll find clearly labelled sections like `Contact details`, `Opening hours`, `Home page`, `About page`, and so on.

**The golden rules:**
- Only change the text **inside the "quotes"**. Keep the quotes.
- Don't change the word **before** the colon. For example in `email: "info@rsgllp.co.uk"`, change only the part in quotes.
- Lines starting with `//` are notes to you. They're ignored by the website.
- Leave anything labelled `icon`, `slug`, `src`, `w`, `h`, `kind` alone — those are technical, not visible text.

---

## 1. Where to edit text

All visible wording is in `src/lib/site-content.ts`, grouped by where it appears:

| You want to change… | Look for the section called… |
|---|---|
| The big homepage headline / subheading | `HOME PAGE` → `hero` |
| Button labels (e.g. "Book a free consultation") | `Buttons (labels + where they link)` → `ctas` |
| The three homepage boxes (Accounts / Audit / Tax) | `Home page: three pillars` → `pillars` |
| Service names and descriptions | `SERVICES` → `services` |
| Credentials wording (ICAEW, ACCA, CIOT, Audit) | `credentialsCard` and `accreditations` |
| About page text and heritage line | `ABOUT PAGE` and `Heritage line` |
| Contact page text and form | `CONTACT PAGE` |
| Footer / legal wording | `FOOTER` |

Just change the text inside the quotes, save, and push (see step 4).

---

## 2. Where to edit the Google Maps location

In `src/lib/site-content.ts`, find the section **`Google Maps`**. There are two links:

- `googleMapsEmbedUrl` — the map shown on the page.
- `googleMapsDirectionsUrl` — where the "Open in Google Maps" button sends people.

**If the pin is slightly wrong, replace the map link like this:**
1. Go to **google.com/maps** and search your exact address.
2. Click **Share** → **Embed a map** → **Copy HTML**.
3. From the copied text, find `src="..."` and copy **only the link inside the quotes**.
4. Paste it as the new `googleMapsEmbedUrl` value (keep the quotes).

For the directions button: on Google Maps click **Share → Send a link → Copy link**, and paste it as `googleMapsDirectionsUrl`.

> The map currently points to: **Machine Works House, 5 Pressing Lane, Hayes, UB3 1FD.**

---

## 3. Where to edit contact details

Still in `src/lib/site-content.ts`:

- **Email** → `Contact details` → `email`
- **Phone** → `Contact details` → `phone` **and** `phoneHref` (for `phoneHref`, use the number with no spaces and a country code, e.g. `+442085735329`)
- **Address** → `Office address`
- **Opening hours** → `Opening hours`

---

## 4. How to save your changes (GitHub Desktop)

After editing and **saving** the file:

1. Open **GitHub Desktop**.
2. It automatically shows what you changed on the left.
3. In the bottom-left box, type a short note like *"Updated phone number"* (this is the "Summary").
4. Click **Commit to main**.
5. Click **Push origin** (top right).

That's it — your change is saved to GitHub.

---

## 5. The website updates itself

After you **Push origin**, **Vercel automatically rebuilds and updates your live website** within about a minute. You don't need to do anything else. Refresh your site after a minute to see the change.

> If something looks broken after an edit, it's almost always a missing or extra `"` quote, or a missing comma. Undo your change in GitHub Desktop (right-click the file → **Discard changes**) and try again carefully.

---

## Quick reference

- **Edit text/links/contact/map:** `src/lib/site-content.ts`
- **Save & publish:** GitHub Desktop → Commit to main → Push origin
- **Goes live:** automatically, ~1 minute later, via Vercel
