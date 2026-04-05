import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/Components/ui/button";
import type { SiteCta } from "@/lib/content/types";

type GalleryCtaProps = {
  eyebrow: string;
  title: string;
  description: string;
  packageButton: SiteCta;
  consultationButton: SiteCta;
};

export default function GalleryCta({
  eyebrow,
  title,
  description,
  packageButton,
  consultationButton,
}: GalleryCtaProps) {
  return (
    <section className="px-4 pb-12 sm:px-6 sm:pb-14 md:px-8 md:pb-16 lg:px-16">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-emerald-100 bg-[linear-gradient(135deg,#f5fff9_0%,#ffffff_56%,#eefaf3_100%)] p-6 shadow-[0_30px_70px_-52px_rgba(15,23,42,0.3)] sm:p-8 md:p-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-600 sm:text-sm">
              {eyebrow}
            </span>
            <h2 className="mt-3 text-2xl font-bold text-slate-900 sm:text-3xl">
              {title}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
              {description}
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              variant="secondary"
              size="lg"
              className="rounded-full bg-emerald-700 px-6 text-sm font-semibold text-white motion-smooth hover:bg-emerald-800"
            >
              <Link href={packageButton.href}>
                {packageButton.label}
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full border border-slate-200 bg-white px-6 text-sm font-semibold text-slate-800 motion-smooth hover:border-emerald-700 hover:bg-emerald-700 hover:text-white"
            >
              <Link href={consultationButton.href} target="_blank" rel="noreferrer">
                {consultationButton.label}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
