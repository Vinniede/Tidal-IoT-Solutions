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
    primary: `${shared} bg-[#071A2F] text-white hover:bg-[#103B56] focus-visible:outline-[#071A2F]`,
    secondary: `${shared} border border-slate-200 bg-white text-slate-700 hover:border-[#00C4B3] hover:text-[#071A2F] focus-visible:outline-[#00C4B3]`,
  };

  return (
    <Link href={href} className={`${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
