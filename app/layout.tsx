import type { Metadata } from "next";
import localFont from "next/font/local";
import {
  DevelopmentHeader,
  DevelopmentFooter,
} from "@/components/layout/development-shell";
import "./globals.css";

// Licensed provisional fonts; exact Butter brand font remains ASSET REQUIRED.
const body = localFont({
  src: "../node_modules/@fontsource-variable/inter/files/inter-latin-wght-normal.woff2",
  variable: "--font-body",
  display: "swap",
});
const heading = localFont({
  src: "../node_modules/@fontsource-variable/inter-tight/files/inter-tight-latin-wght-normal.woff2",
  variable: "--font-heading",
  display: "swap",
});
export const metadata: Metadata = {
  title: "Butter — development foundations",
  robots: { index: false, follow: false },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" className={`${body.variable} ${heading.variable}`}>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <DevelopmentHeader />
        {children}
        <DevelopmentFooter />
      </body>
    </html>
  );
}
