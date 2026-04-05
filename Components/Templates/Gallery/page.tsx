import Navbar from "@/Components/Molecules/Navbar/page";
import Footer from "@/Components/Organisms/Footer/page";
import GalleryCta from "@/Components/Organisms/GalleryCta/page";
import GalleryHero from "@/Components/Organisms/GalleryHero/page";
import GalleryJourney from "@/Components/Organisms/GalleryJourney/page";
import GalleryMoments from "@/Components/Organisms/GalleryMoments/page";
import type {
  FooterContent,
  GalleryPageContent,
  NavbarContent,
} from "@/lib/content/types";

type GalleryTemplateProps = {
  navbar: NavbarContent;
  content: GalleryPageContent;
  footer: FooterContent;
};

export default function GalleryTemplate({
  navbar,
  content,
  footer,
}: GalleryTemplateProps) {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Navbar content={navbar} basePath="/" activePath="/gallery" />

      <GalleryHero {...content.hero} />
      <GalleryMoments
        eyebrow={content.moments.eyebrow}
        title={content.moments.title}
        description={content.moments.description}
        moments={content.moments.items}
      />
      <GalleryJourney
        notesEyebrow={content.journey.notesEyebrow}
        notesTitle={content.journey.notesTitle}
        notesDescription={content.journey.notesDescription}
        notes={content.journey.notes}
        flowEyebrow={content.journey.flowEyebrow}
        flowTitle={content.journey.flowTitle}
        flowDescription={content.journey.flowDescription}
        flowItems={content.journey.flowItems}
      />
      <GalleryCta {...content.cta} />

      <Footer content={footer} basePath="/" />
    </main>
  );
}
