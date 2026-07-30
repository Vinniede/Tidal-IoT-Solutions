import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export function Button({ href, children, variant = "primary", className = "" }: ButtonProps) {
  const shared = "inline-flex min-h-11 items-center justify-center rounded-full px-5 py-3 text-center text-sm font-semibold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";
  const variants = {
    primary: `${shared} bg-[#2563EB] text-white hover:bg-[#F97316] focus-visible:outline-[#2563EB] shadow-[0_12px_30px_rgba(37,99,235,0.18)]`,
    secondary: `${shared} border border-[#2563EB]/20 bg-white text-[#0B1F3A] hover:border-[#06B6D4] hover:bg-[#eef6ff] hover:text-[#0B1F3A] focus-visible:outline-[#06B6D4]`,
  };

  return (
    <Link href={href} className={`${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
