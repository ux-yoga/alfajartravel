export type AboutCardIconKey = "shieldCheck" | "userCheck";

export type SocialPlatformKey = "facebook" | "instagram";

export type GalleryFlowIconKey =
  | "planeTakeoff"
  | "mapPinned"
  | "calendarDays"
  | "heartHandshake";

export type GalleryMomentLayoutKey =
  | "feature"
  | "stackTop"
  | "stackBottom"
  | "triptychLeft"
  | "triptychCenter"
  | "triptychRight";

export type SiteNavItem = {
  label: string;
  href: string;
};

export type SiteCta = {
  label: string;
  href: string;
};

export type NavbarContent = {
  logoSrc: string;
  logoAlt: string;
  items: SiteNavItem[];
  contactCta: SiteCta;
};

export type FooterContactItem = {
  label: string;
  value: string;
  href?: string;
};

export type FooterSocialItem = {
  platform: SocialPlatformKey;
  url: string;
  label: string;
};

export type FooterContent = {
  logoSrc: string;
  logoAlt: string;
  description: string;
  quickLinks: SiteNavItem[];
  contacts: FooterContactItem[];
  socials: FooterSocialItem[];
  copyright: string;
};

export type HeroContent = {
  badge: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  primaryCta: SiteCta;
};

export type AboutCard = {
  icon: AboutCardIconKey;
  title: string;
  subtitle: string;
};

export type AboutStat = {
  value: string;
  label: string;
  variant?: "light" | "dark";
};

export type AboutContent = {
  eyebrow: string;
  title: string;
  description: string;
  cards: AboutCard[];
  stats: AboutStat[];
};

export type PricingCard = {
  badge: string;
  title: string;
  price: string;
  priceSuffix: string;
  features: string[];
  highlight?: boolean;
  button?: SiteCta;
};

export type PricingContent = {
  eyebrow: string;
  title: string;
  description: string;
  cards: PricingCard[];
};

export type TestimonialItem = {
  quote: string;
  name: string;
  location: string;
  imageSrc?: string;
};

export type TestimonialsContent = {
  eyebrow: string;
  title: string;
  description: string;
  items: TestimonialItem[];
};

export type HomePageContent = {
  navbar: NavbarContent;
  hero: HeroContent;
  about: AboutContent;
  pricing: PricingContent;
  testimonials: TestimonialsContent;
  footer: FooterContent;
};

export type GalleryMoment = {
  year: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  objectPosition: string;
  layout: GalleryMomentLayoutKey;
};

export type GalleryFlowItem = {
  icon: GalleryFlowIconKey;
  title: string;
  description: string;
};

export type GalleryPageContent = {
  metadata: {
    title: string;
    description: string;
  };
  hero: {
    badge: string;
    title: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
    highlights: string[];
  };
  moments: {
    eyebrow: string;
    title: string;
    description: string;
    items: GalleryMoment[];
  };
  journey: {
    notesEyebrow: string;
    notesTitle: string;
    notesDescription: string;
    notes: string[];
    flowEyebrow: string;
    flowTitle: string;
    flowDescription: string;
    flowItems: GalleryFlowItem[];
  };
  cta: {
    eyebrow: string;
    title: string;
    description: string;
    packageButton: SiteCta;
    consultationButton: SiteCta;
  };
};

export type SiteContent = {
  navbar: NavbarContent;
  footer: FooterContent;
};
