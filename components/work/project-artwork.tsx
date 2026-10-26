import Image from "next/image";
import {
  Sprout,
  ShieldCheck,
  Layers,
  Lightbulb,
  Compass,
  Clapperboard,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import type { CaseImage, WorkPresentation } from "@/content/case-studies";
const icons = {
  sprout: Sprout,
  shield: ShieldCheck,
  layers: Layers,
  bulb: Lightbulb,
  compass: Compass,
  film: Clapperboard,
};
export function ProjectArtwork({
  image,
  presentation,
  title,
}: {
  image: CaseImage | null;
  presentation?: WorkPresentation;
  title: string;
}) {
  const screen = presentation?.screen ?? image;
  const Icon = icons[presentation?.icon ?? "bulb"];
  return (
    <div
      className="project-artwork"
      data-tone={presentation?.tone ?? "yellow"}
      data-tilt={presentation?.tilt ?? "left"}
    >
      <span className="project-orbit" aria-hidden="true" />
      <div className="project-window">
        <div className="project-window-bar" aria-hidden="true">
          <span className="project-window-brand">
            butter<span>·</span>
          </span>
          <span className="project-window-dots">
            <i />
            <i />
            <i />
          </span>
        </div>
        <div className="project-screen">
          {screen ? (
            <Image
              src={screen.src}
              alt={screen.alt}
              fill
              sizes="(max-width: 767px) 85vw, 40vw"
            />
          ) : (
            <div className="project-screen-pending">
              <span>Image pending</span>
              <p>
                Original project imagery
                <br />
                is being prepared.
              </p>
            </div>
          )}
        </div>
      </div>
      <span className="project-symbol" aria-hidden="true">
        <Icon strokeWidth={1.6} />
      </span>
      <Sparkles
        className="project-spark"
        aria-hidden="true"
        strokeWidth={1.2}
      />
      <span className="project-artwork-arrow" aria-hidden="true">
        <ArrowUpRight strokeWidth={1.5} />
      </span>
      {!screen && (
        <span className="project-image-label">Imagery pending · {title}</span>
      )}
    </div>
  );
}
