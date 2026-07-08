import { NextResponse } from "next/server";

/**
 * Contact endpoint.
 *
 * Sends enquiries to the firm's inbox via Resend (https://resend.com) when
 * RESEND_API_KEY is configured. Without a key it validates and logs the
 * enquiry so the form still works end-to-end in local development.
 *
 * Environment variables (see .env.example):
 *   RESEND_API_KEY      Resend API key. If unset, the route logs only.
 *   CONTACT_TO_EMAIL    Recipient inbox. Defaults to admin@rsgllp.co.uk.
 *   CONTACT_FROM_EMAIL  Verified sender. Must be on a domain verified in Resend.
 */

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  business_type?: string;
  service?: string;
  message?: string;
  company_website?: string; // honeypot
};

const TO_EMAIL = process.env.CONTACT_TO_EMAIL || "admin@rsgllp.co.uk";
const FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL || "RSG Accountants <onboarding@resend.dev>";

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

async function sendViaResend(fields: Record<string, string>) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn("[contact] RESEND_API_KEY not set — enquiry logged only:", fields);
    return true;
  }

  const rows = [
    ["Name", fields.name],
    ["Email", fields.email],
    ["Phone", fields.phone || "—"],
    ["Business type", fields.business_type || "—"],
    ["Service needed", fields.service || "—"],
    ["Message", fields.message],
  ]
    .map(
      ([label, value]) =>
        `<tr><td style="padding:6px 16px 6px 0;color:#566173;vertical-align:top">${label}</td><td style="padding:6px 0;color:#0F1C32">${escapeHtml(
          value ?? "",
        ).replace(/\n/g, "<br>")}</td></tr>`,
    )
    .join("");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      reply_to: fields.email,
      subject: `New website enquiry: ${fields.name}`,
      html: `<div style="font-family:Arial,sans-serif"><h2 style="color:#0F1C32">New enquiry via rsgllp.co.uk</h2><table style="border-collapse:collapse">${rows}</table></div>`,
    }),
  });

  if (!res.ok) {
    const detail = await res.text();
    console.error("[contact] Resend error", res.status, detail);
    return false;
  }
  return true;
}

export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: silently accept so bots get no feedback.
  if (body.company_website) {
    return NextResponse.json({ ok: true });
  }

  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim();
  const message = (body.message ?? "").trim();

  if (!name || !email || !message || !isValidEmail(email)) {
    return NextResponse.json(
      { error: "Please complete the required fields." },
      { status: 422 },
    );
  }

  const sent = await sendViaResend({
    name,
    email,
    message,
    phone: (body.phone ?? "").trim(),
    business_type: (body.business_type ?? "").trim(),
    service: (body.service ?? "").trim(),
  });

  if (!sent) {
    return NextResponse.json(
      { error: "We couldn’t send your message. Please email us directly." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
