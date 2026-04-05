import Image from "next/image";

import type { GalleryMoment } from "@/Components/Pages/Gallery/types";
import { galleryMomentLayoutMap } from "@/lib/content/icon-maps";

type GalleryMomentCardProps = {
  moment: GalleryMoment;
  delayMs?: number;
};

export default function GalleryMomentCard({
  moment,
  delayMs = 0,
}: GalleryMomentCardProps) {
  const layoutClassName =
    galleryMomentLayoutMap[moment.layout] ?? galleryMomentLayoutMap.triptychLeft;

  return (
    <article
      className={`hover-lift animate-soft-rise group relative overflow-hidden rounded-[2rem] border border-emerald-100/80 bg-white shadow-[0_26px_60px_-46px_rgba(15,23,42,0.28)] ${layoutClassName}`}
      style={{ animationDelay: `${delayMs}ms` }}
    >
      <Image
        src={moment.imageSrc}
        alt={moment.imageAlt}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        style={{ objectPosition: moment.objectPosition }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.05)_5%,rgba(15,23,42,0.3)_42%,rgba(15,23,42,0.78)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2 p-5 text-white sm:p-6">
        <span className="inline-flex w-fit rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-100 backdrop-blur-sm">
          {moment.year}
        </span>
        <h3 className="max-w-xl text-lg font-semibold sm:text-xl">{moment.title}</h3>
        <p className="max-w-2xl text-sm leading-relaxed text-slate-100/88">
          {moment.description}
        </p>
      </div>
    </article>
  );
}
