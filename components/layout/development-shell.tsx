import Link from "next/link";
import { findRoute, primaryNavigation } from "@/content/routes";

// Development route access only. Phase 1 builds the reference-matched navigation.
export function DevelopmentHeader() {
  return (
    <header className="shell dev-header">
      <Link href="/" aria-label="Butter development home">
        Butter
      </Link>
      <nav aria-label="Primary">
        {primaryNavigation.map((path) => (
          <Link key={path} href={path}>
            {findRoute(path)!.title}
          </Link>
        ))}
      </nav>
      <Link href="/contact">Let’s talk</Link>
      <span className="dev-label">Development only · Phase 0</span>
    </header>
  );
}
export function DevelopmentFooter() {
  return (
    <footer className="shell">
      <p>Butter · Based in Devon, working across the South West and UK-wide.</p>
      <nav aria-label="Footer">
        <Link href="/contact">Contact</Link>
        <Link href="/privacy">Privacy</Link>
        <Link href="/terms">Terms</Link>
      </nav>
      <p>Foundations under review. This is not the finished website.</p>
    </footer>
  );
}
