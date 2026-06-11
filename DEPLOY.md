# Deploying the RSG Accountants website

Simple, non-technical steps. You do **not** need a domain to go live — Vercel gives you a free web address first, and you can connect your own domain later.

---

## Step 1 — Put the code on GitHub

1. Create a free account at **github.com** (if you don't have one).
2. Click **New repository**. Name it `rsg-accountants`. Leave everything else as-is. Click **Create repository**.
3. GitHub shows a page with commands. Use the section titled **"…or push an existing repository from the command line"** and copy the two lines that start with `git remote add` and `git push`. Run them in the Terminal, inside this project folder.

> The project is already a git repository with your first commit saved, so you only need to connect it to GitHub and push.

## Step 2 — Deploy on Vercel (free)

1. Go to **vercel.com** and click **Sign up**, then **Continue with GitHub**.
2. Click **Add New… → Project**.
3. Find `rsg-accountants` in the list and click **Import**.
4. Don't change any settings. Click **Deploy**.
5. Wait about a minute. Vercel gives you a live link like `rsg-accountants.vercel.app`. **Your site is live.** 🎉

That's it for going live.

---

## What can wait until later

### The contact form emailing you (optional, anytime)
The form already works and is safe to launch. Right now it accepts a message but does not email it anywhere. To make it email **info@rsgllp.co.uk**:

1. Create a free account at **resend.com**.
2. Add an API key, then in Vercel go to **Project → Settings → Environment Variables** and add:
   - `RESEND_API_KEY` — the key from Resend
   - `CONTACT_TO_EMAIL` — `info@rsgllp.co.uk`
   - `CONTACT_FROM_EMAIL` — `RSG Accountants <enquiries@rsgllp.co.uk>`
3. Click **Redeploy**. (Sending from your own address also needs your domain verified in Resend — do this after Step "buy a domain".)

### Your own domain (after you buy it)
1. Buy a domain (e.g. from Vercel, GoDaddy, Namecheap) — `rsgllp.co.uk` or similar.
2. In Vercel: **Project → Settings → Domains → Add**, type your domain, and follow the on-screen instructions.
3. Then open `src/lib/site.ts` and change `url` to your live domain (this fixes Google/search links). Commit and push, and Vercel redeploys automatically.

### Small finishing touches (whenever)
- Add the **CIOT** logo (drop the file into `public/logos` — ICAEW and ACCA are already in).
- Confirm the **"Audit registered"** wording with ICAEW.
- Replace the **RSG wordmark** with a real logo if you have one.

---

**Short version:** push to GitHub → import on Vercel → Deploy. Everything else (email sending, your own domain) can be added later without rebuilding anything.
