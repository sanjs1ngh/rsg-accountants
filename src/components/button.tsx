import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import { ArrowRight } from "@/components/icons";

type Variant = "primary" | "secondary" | "ghost" | "light";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full text-sm font-semibold tracking-tight transition-all duration-300 ease-refined focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-60";

const sizes = "px-6 py-3";

const variants: Record<Variant, string> = {
  // Solid navy — primary action on light backgrounds
  primary:
    "bg-ink text-paper-light shadow-card hover:bg-ink-soft hover:shadow-card-hover hover:-translate-y-0.5",
  // Outlined — secondary action on light backgrounds
  secondary:
    "border border-ink/15 bg-transparent text-ink hover:border-ink/40 hover:bg-ink/[0.03]",
  // Quiet text-style button
  ghost: "text-ink hover:text-accent",
  // For use on dark navy sections
  light:
    "bg-paper-light text-ink shadow-soft hover:bg-white hover:-translate-y-0.5",
};

type ButtonLinkProps = {
  href: string;
  variant?: Variant;
  children: ReactNode;
  withArrow?: boolean;
  className?: string;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export function ButtonLink({
  href,
  variant = "primary",
  children,
  withArrow = false,
  className = "",
  ...props
}: ButtonLinkProps) {
  const isExternal = /^(https?:|mailto:|tel:)/.test(href);
  const content = (
    <>
      {children}
      {withArrow && (
        <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-refined group-hover:translate-x-1" />
      )}
    </>
  );
  const classes = `${base} ${sizes} ${variants[variant]} ${className}`;

  if (isExternal) {
    return (
      <a href={href} className={classes} {...props}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...props}>
      {content}
    </Link>
  );
}
