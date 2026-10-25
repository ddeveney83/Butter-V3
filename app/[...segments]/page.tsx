import { notFound } from "next/navigation";
import { findRoute, routes } from "@/content/routes";
import { routeMetadata } from "@/lib/seo";

type Props = { params: Promise<{ segments: string[] }> };
export const dynamicParams = false;
export function generateStaticParams() {
  return routes
    .filter((route) => route.path !== "/")
    .map((route) => ({ segments: route.path.slice(1).split("/") }));
}
export async function generateMetadata({ params }: Props) {
  const route = findRoute("/" + (await params).segments.join("/"));
  return route ? routeMetadata(route) : {};
}
export default async function Scaffold({ params }: Props) {
  const route = findRoute("/" + (await params).segments.join("/"));
  if (!route) notFound();
  return (
    <main id="main" className="shell" tabIndex={-1}>
      <div className="reading">
        <p className="dev-label">Development only · Phase {route.phase}</p>
        <h1>{route.title}</h1>
        <p>{route.intent}.</p>
        <p>
          This is a route scaffold, not a completed service or published page.
          Implementation and owner approval are pending.
        </p>
        {route.path === "/contact" && (
          <p>
            Enquiries cannot be submitted here yet. The delivery provider and
            contact destination will be configured and tested in Phase 6.
          </p>
        )}
        {["/privacy", "/terms"].includes(route.path) && (
          <p>
            LEGAL COPY REQUIRED. Owner-approved text must reflect the actual
            processors and hosting.
          </p>
        )}
      </div>
    </main>
  );
}
