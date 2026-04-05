import type { Metadata } from "next";

import GalleryPage from "@/Components/Pages/Gallery/page";
import { getGalleryPageContent } from "@/lib/content/loaders";

export async function generateMetadata(): Promise<Metadata> {
  const { gallery } = await getGalleryPageContent();

  return {
    title: gallery.metadata.title,
    description: gallery.metadata.description,
  };
}

export default async function GalleryRoute() {
  const { navbar, gallery, footer } = await getGalleryPageContent();

  return <GalleryPage navbar={navbar} content={gallery} footer={footer} />;
}
