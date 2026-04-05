import { readFile } from "node:fs/promises";
import path from "node:path";
import { load } from "js-yaml";

import { buildWhatsAppLink } from "@/lib/utils";
import type {
  FooterContent,
  GalleryPageContent,
  HomePageContent,
  NavbarContent,
  SiteContent,
  AboutContent,
  HeroContent,
  PricingContent,
  TestimonialsContent,
} from "@/lib/content/types";

const contentsRoot = path.join(process.cwd(), "contents");

function normalizeStringList(
  value: unknown,
  nestedKey?: string,
): string[] {
  if (!Array.isArray(value)) {
    return [];
  }

  return value
    .map((item) => {
      if (typeof item === "string") {
        return item;
      }

      if (nestedKey && item && typeof item === "object" && nestedKey in item) {
        const nestedValue = (item as Record<string, unknown>)[nestedKey];
        return typeof nestedValue === "string" ? nestedValue : null;
      }

      return null;
    })
    .filter((item): item is string => Boolean(item));
}

function sanitizePricingContent(content: PricingContent): PricingContent {
  return {
    ...content,
    cards: Array.isArray(content.cards)
      ? content.cards.map((card) => ({
          ...card,
          features: normalizeStringList(card.features, "feature"),
          button: card.button ?? {
            label: "Pilih Paket",
            href: buildWhatsAppLink(
              `Assalamualaikum, saya tertarik dengan paket ${card.title} seharga ${card.price}. Bisa memberikan informasi lebih lanjut? Terima kasih.`,
            ),
          },
        }))
      : [],
  };
}

function sanitizeGalleryContent(content: GalleryPageContent): GalleryPageContent {
  return {
    ...content,
    hero: {
      ...content.hero,
      highlights: normalizeStringList(content.hero.highlights, "highlight"),
    },
    journey: {
      ...content.journey,
      notes: normalizeStringList(content.journey.notes, "note"),
      flowItems: Array.isArray(content.journey.flowItems)
        ? content.journey.flowItems
        : [],
    },
    moments: {
      ...content.moments,
      items: Array.isArray(content.moments.items) ? content.moments.items : [],
    },
  };
}

function parseFrontmatter<T>(fileContents: string): T {
  const frontmatterMatch = fileContents.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/);

  if (!frontmatterMatch) {
    throw new Error("Markdown content is missing YAML frontmatter.");
  }

  return load(frontmatterMatch[1]) as T;
}

async function readMarkdownFile<T>(relativePath: string): Promise<T> {
  const filePath = path.join(contentsRoot, relativePath);
  const fileContents = await readFile(filePath, "utf8");

  return parseFrontmatter<T>(fileContents);
}

export async function getSiteContent(): Promise<SiteContent> {
  const [navbar, footer] = await Promise.all([
    readMarkdownFile<NavbarContent>("site/navbar.md"),
    readMarkdownFile<FooterContent>("site/footer.md"),
  ]);

  return { navbar, footer };
}

export async function getHomePageContent(): Promise<HomePageContent> {
  const [{ navbar, footer }, hero, about, pricing, testimonials] =
    await Promise.all([
      getSiteContent(),
      readMarkdownFile<HeroContent>("home/hero.md"),
      readMarkdownFile<AboutContent>("home/about.md"),
      readMarkdownFile<PricingContent>("home/pricing.md"),
      readMarkdownFile<TestimonialsContent>("home/testimonials.md"),
    ]);

  return {
    navbar,
    hero,
    about,
    pricing: sanitizePricingContent(pricing),
    testimonials,
    footer,
  };
}

export async function getGalleryPageContent(): Promise<{
  navbar: NavbarContent;
  gallery: GalleryPageContent;
  footer: FooterContent;
}> {
  const [{ navbar, footer }, gallery] = await Promise.all([
    getSiteContent(),
    readMarkdownFile<GalleryPageContent>("gallery/page.md"),
  ]);

  return { navbar, gallery: sanitizeGalleryContent(gallery), footer };
}
