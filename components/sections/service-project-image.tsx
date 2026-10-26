import Image from "next/image";
import Link from "next/link";
import type { CaseStudy } from "@/content/case-studies";
export function ServiceProjectImage({
  study,
  image = study.hero,
  preload = false,
}: {
  study: CaseStudy;
  image?: CaseStudy["hero"];
  preload?: boolean;
}) {
  if (!image) return null;
  return (
    <figure className="service-project-image">
      <Link
        href={`/work/${study.slug}`}
        aria-label={`Explore ${study.title} case study`}
      >
        <Image
          src={image.src}
          alt={image.alt}
          width={1200}
          height={800}
          sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 45vw"
          preload={preload}
        />
      </Link>
      <figcaption>
        <Link href={`/work/${study.slug}`}>
          {study.title} <span aria-hidden="true">↗</span>
        </Link>
        <span>{study.organisation}</span>
      </figcaption>
    </figure>
  );
}
