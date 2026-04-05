import Image from "next/image";

import GalleryHighlightPill from "@/Components/Molecules/GalleryHighlightPill/page";

type GalleryHeroProps = {
  badge: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  highlights: string[];
};

export default function GalleryHero({
  badge,
  title,
  description,
  imageSrc,
  imageAlt,
  highlights,
}: GalleryHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-slate-200/70">
      <div className="absolute inset-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(108deg,rgba(15,23,42,0.88)_10%,rgba(15,23,42,0.7)_45%,rgba(15,23,42,0.18)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.12),transparent_26%)]" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col gap-8 px-4 py-14 sm:px-6 sm:py-16 md:px-8 lg:px-16 lg:py-20">
        <div className="animate-soft-rise max-w-4xl">
          <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.26em] text-emerald-100 backdrop-blur-sm sm:text-sm">
            {badge}
          </span>
          <h1 className="mt-5 max-w-4xl text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-slate-100/90 sm:text-base md:text-lg">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {highlights.map((highlight, index) => (
            <GalleryHighlightPill
              key={highlight}
              text={highlight}
              delayMs={index * 120}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
