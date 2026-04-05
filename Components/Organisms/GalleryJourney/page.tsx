import { Camera } from "lucide-react";

import GalleryFlowCard from "@/Components/Molecules/GalleryFlowCard/page";
import GalleryStoryNote from "@/Components/Molecules/GalleryStoryNote/page";
import SectionHeading from "@/Components/Molecules/SectionHeading/page";
import type { GalleryFlowItem } from "@/Components/Pages/Gallery/types";

type GalleryJourneyProps = {
  notesEyebrow: string;
  notesTitle: string;
  notesDescription: string;
  notes: string[];
  flowEyebrow: string;
  flowTitle: string;
  flowDescription: string;
  flowItems: GalleryFlowItem[];
};

export default function GalleryJourney({
  notesEyebrow,
  notesTitle,
  notesDescription,
  notes,
  flowEyebrow,
  flowTitle,
  flowDescription,
  flowItems,
}: GalleryJourneyProps) {
  return (
    <section className="px-4 pb-12 sm:px-6 sm:pb-14 md:px-8 md:pb-16 lg:px-16">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="animate-soft-rise rounded-[2rem] border border-slate-200 bg-[linear-gradient(160deg,#f8fffb_0%,#ffffff_62%)] p-6 shadow-[0_24px_50px_-42px_rgba(15,23,42,0.22)] sm:p-7 md:p-8">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
              <Camera className="h-5 w-5" />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-600">
                {notesEyebrow}
              </p>
              <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">{notesTitle}</h2>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            {notes.map((note, index) => (
              <GalleryStoryNote
                key={note}
                note={note}
                delayMs={index * 120}
              />
            ))}
          </div>

          <p className="mt-6 text-sm leading-relaxed text-slate-600">
            {notesDescription}
          </p>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_24px_50px_-42px_rgba(15,23,42,0.22)] sm:p-7 md:p-8">
          <SectionHeading
            eyebrow={flowEyebrow}
            title={flowTitle}
            description={flowDescription}
          />

          <div className="mt-6 grid gap-4">
            {flowItems.map((item, index) => (
              <GalleryFlowCard
                key={item.title}
                item={item}
                delayMs={index * 110}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
