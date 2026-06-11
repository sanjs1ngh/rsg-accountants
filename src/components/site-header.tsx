"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/logo";
import { ButtonLink } from "@/components/button";
import { MenuIcon, CloseIcon } from "@/components/icons";
import { nav } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);

  // Condense the header on scroll, and track reading progress for the nav line.
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      setScrolled(window.scrollY > 12);
      setProgress(max > 0 ? Math.min(window.scrollY / max, 1) : 0);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  // Close the mobile menu on route change.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock scroll + allow Escape to close while the mobile menu is open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-refined ${
        scrolled
          ? "border-b border-line/70 bg-paper/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      {/* Scroll-progress line, sitting on the header's bottom edge */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-[var(--header-h)] h-[2px] -translate-y-full overflow-hidden"
      >
        <div
          className="h-full origin-left bg-accent/70"
          style={{ transform: `scaleX(${progress})` }}
        />
      </div>

      <div className="container-x flex h-[76px] items-center justify-between">
        <Logo />

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`relative text-sm font-medium transition-colors duration-200 hover:text-ink ${
                isActive(item.href) ? "text-ink" : "text-slate"
              }`}
            >
              {item.label}
              <span
                className={`absolute -bottom-1.5 left-0 h-px bg-accent transition-all duration-300 ease-refined ${
                  isActive(item.href) ? "w-full" : "w-0"
                }`}
              />
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <ButtonLink href="/contact" variant="primary" withArrow>
            Book a free consultation
          </ButtonLink>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full text-ink transition-colors hover:bg-ink/[0.05] md:hidden"
        >
          {open ? (
            <CloseIcon className="h-6 w-6" />
          ) : (
            <MenuIcon className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="border-t border-line bg-paper-light md:hidden"
      >
        <nav aria-label="Mobile" className="container-x flex flex-col py-4">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`border-b border-line/70 py-3.5 text-base font-medium ${
                isActive(item.href) ? "text-accent" : "text-ink"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <ButtonLink href="/contact" variant="primary" withArrow className="mt-5">
            Book a free consultation
          </ButtonLink>
        </nav>
      </div>
    </header>
  );
}
