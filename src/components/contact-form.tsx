"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, CheckIcon } from "@/components/icons";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

const businessTypes = [
  "Sole trader",
  "Limited company",
  "Partnership / LLP",
  "Landlord / property",
  "Startup",
  "Charity / not-for-profit",
  "Other",
];

type Status = "idle" | "submitting" | "success" | "error";
type Errors = Partial<Record<"name" | "email" | "message", string>>;

const fieldBase =
  "w-full rounded-xl border bg-paper-light px-4 py-3 text-ink placeholder:text-slate-light/70 transition-colors duration-200 focus:border-accent focus:outline-none focus-visible:outline-none";

function emailLooksValid(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    // Honeypot — bots fill hidden fields, humans don't.
    if (data.get("company_website")) return;

    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const nextErrors: Errors = {};
    if (!name) nextErrors.name = "Please enter your name.";
    if (!email) nextErrors.email = "Please enter your email.";
    else if (!emailLooksValid(email))
      nextErrors.email = "Please enter a valid email address.";
    if (!message) nextErrors.message = "Please add a short message.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      form.querySelector<HTMLElement>(
        `[name="${Object.keys(nextErrors)[0]}"]`,
      )?.focus();
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(data.entries())),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="flex flex-col items-start rounded-2xl border border-accent/30 bg-accent-soft/60 p-8"
      >
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent text-paper-light">
          <CheckIcon className="h-6 w-6" />
        </span>
        <h3 className="mt-5 font-display text-xl font-medium text-ink">
          Thank you. Your message is on its way.
        </h3>
        <p className="mt-2 text-pretty text-sm leading-relaxed text-slate">
          We aim to respond within one working day. If your enquiry is urgent,
          please call us on{" "}
          <a
            href={`tel:${site.contact.phoneHref}`}
            className="font-medium text-accent"
          >
            {site.contact.phoneDisplay}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-medium text-accent underline-offset-4 hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Honeypot */}
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label htmlFor="company_website">Do not fill this in</label>
        <input
          id="company_website"
          name="company_website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Name"
          name="name"
          required
          error={errors.name}
          autoComplete="name"
        />
        <Field
          label="Email"
          name="email"
          type="email"
          required
          error={errors.email}
          autoComplete="email"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Phone"
          name="phone"
          type="tel"
          optional
          autoComplete="tel"
        />
        <SelectField label="Business type" name="business_type" optional>
          <option value="">Select…</option>
          {businessTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </SelectField>
      </div>

      <SelectField label="Service needed" name="service" optional>
        <option value="">Select…</option>
        {services.map((service) => (
          <option key={service.slug} value={service.title}>
            {service.title}
          </option>
        ))}
        <option value="Not sure yet">Not sure yet</option>
      </SelectField>

      <div>
        <FieldLabel htmlFor="message" label="Message" />
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? "message-error" : undefined}
          placeholder="Tell us a little about your business and how we can help…"
          className={`${fieldBase} resize-y ${
            errors.message ? "border-red-400" : "border-line"
          }`}
        />
        {errors.message && <FieldError id="message-error" text={errors.message} />}
      </div>

      {status === "error" && (
        <p
          role="alert"
          className="rounded-xl border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-700"
        >
          Something went wrong sending your message. Please try again, or email
          us directly at{" "}
          <a href={`mailto:${site.contact.email}`} className="font-medium underline">
            {site.contact.email}
          </a>
          .
        </p>
      )}

      <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="group inline-flex items-center justify-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper-light shadow-card transition-all duration-300 ease-refined hover:-translate-y-0.5 hover:bg-ink-soft hover:shadow-card-hover disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "submitting" ? "Sending…" : "Send message"}
          {status !== "submitting" && (
            <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-refined group-hover:translate-x-1" />
          )}
        </button>
        <p className="text-xs leading-relaxed text-slate-light">
          By submitting, you agree we may contact you about your enquiry.
        </p>
      </div>
    </form>
  );
}

/* ── Field primitives ─────────────────────────────────────── */

function FieldLabel({
  htmlFor,
  label,
  optional,
}: {
  htmlFor: string;
  label: string;
  optional?: boolean;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="mb-1.5 flex items-baseline justify-between text-sm font-medium text-ink"
    >
      {label}
      {optional && (
        <span className="text-xs font-normal text-slate-light">Optional</span>
      )}
    </label>
  );
}

function FieldError({ id, text }: { id: string; text: string }) {
  return (
    <p id={id} className="mt-1.5 text-sm text-red-600">
      {text}
    </p>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  optional,
  error,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  optional?: boolean;
  error?: string;
  autoComplete?: string;
}) {
  return (
    <div>
      <FieldLabel htmlFor={name} label={label} optional={optional} />
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${name}-error` : undefined}
        className={`${fieldBase} ${error ? "border-red-400" : "border-line"}`}
      />
      {error && <FieldError id={`${name}-error`} text={error} />}
    </div>
  );
}

function SelectField({
  label,
  name,
  optional,
  children,
}: {
  label: string;
  name: string;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <FieldLabel htmlFor={name} label={label} optional={optional} />
      <select
        id={name}
        name={name}
        defaultValue=""
        className={`${fieldBase} border-line appearance-none bg-[length:1.1rem] bg-[right_0.9rem_center] bg-no-repeat pr-10`}
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23566173' stroke-width='1.6' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")",
        }}
      >
        {children}
      </select>
    </div>
  );
}
