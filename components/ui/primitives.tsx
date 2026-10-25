import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

export function ActionLink({
  href,
  children,
  variant = "text",
}: {
  href: string;
  children: ReactNode;
  variant?: "text" | "pill";
}) {
  return (
    <Link
      className={variant === "pill" ? "pill-button" : "text-link"}
      href={href}
    >
      {children}
      <ArrowUpRight size={16} aria-hidden="true" />
    </Link>
  );
}
export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}
export function AssetPlaceholder({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <div className={`asset-placeholder ${className}`}>
      <span className="eyebrow">Development placeholder</span>
      <p>{label}</p>
      <small>Approved source asset required</small>
    </div>
  );
}
export function Wordmark() {
  // Provisional text treatment only; replace with approved official SVG.
  return (
    <Link
      href="/"
      className="wordmark"
      aria-label="Butter home"
      title="Provisional wordmark; official source required"
    >
      butter<span aria-hidden="true">.</span>
    </Link>
  );
}
export function BottomCTA() {
  return (
    <section className="bottom-cta" aria-labelledby="conversation-heading">
      <div className="shell cta-grid">
        <div>
          <Eyebrow>Have a learning challenge?</Eyebrow>
          <h2 id="conversation-heading">Let’s start a conversation.</h2>
        </div>
        <div>
          <p>
            Big project, small idea or somewhere in between.
            <br />
            We’d love to hear what you’re working on.
          </p>
          <ActionLink href="/contact" variant="pill">
            Let’s talk
          </ActionLink>
        </div>
        <div className="mascot-gap">
          <span className="eyebrow">Mascot asset required</span>
        </div>
      </div>
    </section>
  );
}
