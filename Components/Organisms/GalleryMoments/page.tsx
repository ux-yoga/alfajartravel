import GalleryMomentCard from "@/Components/Molecules/GalleryMomentCard/page";
import SectionHeading from "@/Components/Molecules/SectionHeading/page";
import type { GalleryMoment } from "@/Components/Pages/Gallery/types";

type GalleryMomentsProps = {
  eyebrow: string;
  title: string;
  description: string;
  moments: GalleryMoment[];
};

export default function GalleryMoments({
  eyebrow,
  title,
  description,
  moments,
}: GalleryMomentsProps) {
  return (
    <section className="px-4 py-12 sm:px-6 sm:py-14 md:px-8 md:py-16 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={description}
          className="mb-8 sm:mb-10 md:mb-12"
        />

        <div className="grid auto-rows-[220px] grid-cols-1 gap-4 md:grid-cols-12 md:auto-rows-[210px]">
          {moments.map((moment, index) => (
            <GalleryMomentCard
              key={moment.title}
              moment={moment}
              delayMs={index * 110}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
