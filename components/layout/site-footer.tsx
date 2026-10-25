import Link from "next/link";
import { Wordmark } from "@/components/ui/primitives";
import { findRoute, primaryNavigation } from "@/content/routes";
export function SiteFooter() {
  return (
    <footer className="site-footer shell">
      <div className="footer-row">
        <div className="footer-brand">
          <Wordmark />
          <span>Better learning. By design.</span>
        </div>
        <nav aria-label="Footer">
          {primaryNavigation.map((path) => (
            <Link key={path} href={path}>
              {findRoute(path)!.title}
            </Link>
          ))}
          <Link href="/contact">Contact</Link>
        </nav>
        <div className="footer-legal">
          <span>© {new Date().getFullYear()} Butter.</span>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
        </div>
      </div>
      <p className="development-note">
        Development preview · Content and assets awaiting approval · Not for
        public launch
      </p>
    </footer>
  );
}
