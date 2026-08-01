import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const shared =
    "inline-flex min-h-11 items-center justify-center rounded-full px-5 py-3 text-center text-sm font-semibold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";
  const variants = {
    primary: `${shared} bg-[var(--brand-primary)] text-white hover:bg-[var(--brand-secondary)] focus-visible:outline-[var(--brand-primary)] shadow-[0_12px_30px_rgba(11,31,58,0.18)]`,
    secondary: `${shared} border border-[var(--border-default)] bg-white text-[var(--text-primary)] hover:border-[var(--brand-secondary)] hover:bg-[var(--surface-muted)] hover:text-[var(--text-primary)] focus-visible:outline-[var(--brand-secondary)]`,
  };

  return (
    <Link href={href} className={`${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
