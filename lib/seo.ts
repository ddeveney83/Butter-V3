import type { Metadata } from "next";
import type { RouteRecord } from "../content/routes";
import { canonicalOrigin } from "./site-config";

export function routeMetadata(route: RouteRecord): Metadata {
  const origin = canonicalOrigin();
  return {
    title: `${route.title} | Butter — development`,
    description: route.description,
    robots: { index: false, follow: false },
    ...(origin
      ? { alternates: { canonical: new URL(route.path, origin).href } }
      : {}),
  };
}
