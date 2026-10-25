import Link from "next/link";
export default function NotFound() {
  return (
    <main id="main" className="shell" tabIndex={-1}>
      <h1>Page not found</h1>
      <p>
        This route is unavailable. Unapproved case studies, articles and the
        optional regional page are not published.
      </p>
      <Link href="/">Return to development home</Link>
    </main>
  );
}
