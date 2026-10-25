import Link from "next/link";
import { routes } from "@/content/routes";
import { routeMetadata } from "@/lib/seo";
export const metadata = routeMetadata(routes[0]);
export default function Home() {
  return (
    <main id="main" className="shell" tabIndex={-1}>
      <div className="reading">
        <p className="dev-label">Phase 0 · foundations</p>
        <h1>Butter website foundations</h1>
        <p>
          This development shell inventories the planned website. The
          reference-matched homepage begins in Phase 1 after foundation review.
        </p>
        <p>
          Butter is an independent digital learning studio based in Devon,
          working across the South West and UK-wide.
        </p>
        <h2>Development route inventory</h2>
        <p>
          Every destination below is a labelled scaffold. No page is approved
          for public release.
        </p>
      </div>
      <ul className="route-list">
        {routes.slice(1).map((route) => (
          <li key={route.path}>
            <Link href={route.path}>{route.title}</Link>
            <p>{route.intent}</p>
            <small>Phase {route.phase} · draft</small>
          </li>
        ))}
      </ul>
    </main>
  );
}
