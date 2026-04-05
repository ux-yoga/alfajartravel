import GalleryTemplate from "@/Components/Templates/Gallery/page";
import type { FooterContent, GalleryPageContent, NavbarContent } from "@/lib/content/types";

type GalleryPageProps = {
  navbar: NavbarContent;
  content: GalleryPageContent;
  footer: FooterContent;
};

export default function GalleryPage({ navbar, content, footer }: GalleryPageProps) {
  return <GalleryTemplate navbar={navbar} content={content} footer={footer} />;
}
