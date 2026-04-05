import type { GalleryFlowItem } from "@/Components/Pages/Gallery/types";
import { galleryFlowIconMap } from "@/lib/content/icon-maps";

type GalleryFlowCardProps = {
  item: GalleryFlowItem;
  delayMs?: number;
};

export default function GalleryFlowCard({
  item,
  delayMs = 0,
}: GalleryFlowCardProps) {
  const Icon = galleryFlowIconMap[item.icon] ?? galleryFlowIconMap.heartHandshake;

  return (
    <article
      className="animate-soft-rise rounded-3xl border border-slate-200 bg-slate-50/60 p-5 shadow-[0_18px_40px_-34px_rgba(15,23,42,0.18)] transition-colors duration-300 hover:border-emerald-200 hover:bg-emerald-50/60"
      style={{ animationDelay: `${delayMs}ms` }}
    >
      <div className="flex items-start gap-4">
        <span className="inline-flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-white text-emerald-700 shadow-[0_12px_28px_-18px_rgba(4,120,87,0.45)]">
          <Icon className="h-5 w-5" />
        </span>
        <div>
          <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            {item.description}
          </p>
        </div>
      </div>
    </article>
  );
}
