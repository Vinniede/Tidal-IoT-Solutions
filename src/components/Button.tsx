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
    primary: `${shared} bg-[var(--primary-navy)] text-white hover:bg-[var(--premium-gold)] focus-visible:outline-[var(--primary-navy)] shadow-[0_12px_30px_rgba(11,31,58,0.18)]`,
    secondary: `${shared} border border-[rgba(11,31,58,0.2)] bg-white text-[var(--primary-navy)] hover:border-[var(--iot-green-accent)] hover:bg-[var(--light-gray)] hover:text-[var(--primary-navy)] focus-visible:outline-[var(--iot-green-accent)]`,
  };

  return (
    <Link href={href} className={`${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
