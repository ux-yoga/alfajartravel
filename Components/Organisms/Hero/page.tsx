import { Button } from "@/Components/ui/button";
import Image from "next/image";
import Link from "next/link";

import type { HeroContent } from "@/lib/content/types";

type HeroProps = {
  content: HeroContent;
};

export default function Hero({ content }: HeroProps) {
  return (
    <section id="beranda" className="relative min-h-[42rem] w-full overflow-hidden bg-white">
      <Image
        src={content.imageSrc}
        alt={content.imageAlt}
        fill
        className="object-cover"
        priority
      />

      <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(15,23,42,0.82)_8%,rgba(15,23,42,0.6)_42%,rgba(15,23,42,0.22)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.16),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.1),transparent_24%)]" />

      <div className="absolute inset-0 flex items-center justify-start">
        <div className="animate-soft-rise max-w-5xl w-full px-4 text-white sm:px-6 md:px-8 lg:px-16 xl:px-20">
          <div className="mb-5 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] text-emerald-100 backdrop-blur-sm sm:text-sm">
            {content.badge}
          </div>

          <h1 className="mb-4 max-w-4xl text-3xl font-bold leading-tight sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl">
            {content.title}
          </h1>

          <p className="mb-6 max-w-2xl text-sm leading-relaxed text-slate-100/90 sm:mb-8 sm:text-base md:text-lg">
            {content.description}
          </p>

            <Button
              asChild
              variant="secondary"
              size="lg"
              className="rounded-full bg-emerald-700 px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_38px_-24px_rgba(4,120,87,0.8)] hover:bg-emerald-800 sm:px-7 sm:text-base"
            >
              <Link href={content.primaryCta.href} target="_blank" rel="noreferrer">
                {content.primaryCta.label}
              </Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
