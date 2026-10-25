import Image from "next/image";
import {
  placeholderImages,
  type PlaceholderImage,
} from "@/content/placeholder-images";
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
  image = "laptop",
  preload = false,
}: {
  label: string;
  className?: string;
  image?: PlaceholderImage;
  preload?: boolean;
}) {
  const asset = placeholderImages[image];
  return (
    <figure
      className={`asset-placeholder image-placeholder ${className}`}
      data-placeholder-image={image}
    >
      <Image
        src={asset.src}
        alt=""
        fill
        sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 45vw"
        preload={preload}
      />
      <figcaption>
        <span className="placeholder-badge">AI-generated placeholder</span>
        <span className="sr-only">
          {asset.description}. {label}. Temporary illustration only; approved
          source asset still required.
        </span>
      </figcaption>
    </figure>
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
export function BottomCTA({
  heading = "Let’s start a conversation.",
}: {
  heading?: string;
}) {
  return (
    <section className="bottom-cta" aria-labelledby="conversation-heading">
      <div className="shell cta-grid">
        <div>
          <Eyebrow>Have a learning challenge?</Eyebrow>
          <h2 id="conversation-heading">{heading}</h2>
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
