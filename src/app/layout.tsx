import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tidal IoT Solutions | Intelligent Infrastructure for East Africa",
  description:
    "Tidal IoT Solutions designs resilient connectivity, secure communications, and intelligent infrastructure for enterprise growth across East Africa.",
  metadataBase: new URL("https://tidal-iot.com"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/Tidal Favicon.svg", type: "image/svg+xml" },
      { url: "/Tidal Favicon.ico", type: "image/x-icon" },
    ],
    shortcut: "/Tidal Favicon.svg",
    apple: "/Tidal Favicon.ico",
  },
  openGraph: {
    title: "Tidal IoT Solutions",
    description:
      "Enterprise-grade intelligent infrastructure for secure, scalable growth.",
    url: "https://tidal-iot.com",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tidal IoT Solutions",
    description:
      "Enterprise-grade intelligent infrastructure for secure, scalable growth.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#F5F6F8] text-slate-700">{children}</body>
    </html>
  );
}
