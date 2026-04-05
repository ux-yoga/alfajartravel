import Link from "next/link"

import { Button } from "@/Components/ui/button"
import type { PricingContent } from "@/lib/content/types"

type PriceProps = {
  content: PricingContent
}

const Price = ({ content }: PriceProps) => {
  return (
    <section id="paket" className="bg-white px-4 py-12 sm:px-6 sm:py-14 md:px-8 md:py-16 lg:px-16 lg:py-20 xl:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-10 md:mb-12">
          <div>
            <h2 className="mb-2 text-xs font-semibold tracking-[0.24em] text-emerald-600 sm:mb-3 sm:text-sm md:text-base">
              {content.eyebrow}
            </h2>
            <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl md:text-4xl">
              {content.title}
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
              {content.description}
            </p>
          </div>
        </div>

        <div className="mb-4 flex items-center justify-between gap-3 sm:mb-5">
          <p className="text-xs text-slate-500 sm:text-sm">
            Geser kartu untuk melihat paket lainnya.
          </p>
        </div>

        <div>
          <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-1 pt-3 pb-4 sm:gap-5 sm:pt-4 md:gap-6 md:pb-5 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {content.cards.map((card) => (
              <div
                key={card.title}
                className={`hover-lift relative flex min-w-[84%] snap-start flex-col gap-4 overflow-hidden rounded-2xl border p-4 shadow-[0_22px_50px_-40px_rgba(15,23,42,0.2)] hover:shadow-[0_34px_70px_-44px_rgba(15,23,42,0.24)] sm:min-w-[24rem] sm:gap-5 sm:rounded-3xl sm:p-5 md:min-w-[calc((100%-1.5rem)/2)] md:gap-6 md:p-6 xl:min-w-[calc((100%-3rem)/3)] ${
                  card.highlight
                    ? "border-emerald-300 bg-white shadow-[0_28px_55px_-42px_rgba(4,120,87,0.34)] hover:shadow-[0_40px_76px_-46px_rgba(4,120,87,0.34)]"
                    : "border-slate-200 bg-white hover:border-emerald-200"
                }`}
              >
                <span
                  className={`inline-flex items-center justify-left rounded-full py-1 text-xs font-semibold tracking-wide ${
                    card.highlight
                      ? "bg-transparent text-emerald-700"
                      : "bg-transparent text-slate-500"
                  }`}
                >
                  {card.badge}
                </span>

                <div>
                  <h3
                    className={`text-xl font-bold sm:text-2xl ${
                      card.highlight ? "text-emerald-800" : "text-slate-900"
                    }`}
                  >
                    {card.title}
                  </h3>
                  <p className="mt-1 text-xs text-slate-500 sm:text-sm">{card.priceSuffix}</p>
                </div>

                <div>
                  <p className="text-2xl font-bold text-slate-900 sm:text-3xl">{card.price}</p>
                </div>

                <ul className="flex flex-col gap-2 text-xs text-slate-600 sm:text-sm">
                  {(card.features ?? []).map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-emerald-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {card.button && (
                  <Button
                    asChild
                    variant={card.highlight ? "secondary" : "default"}
                    className={`mt-auto cursor-pointer rounded-full px-4 py-2 text-sm font-semibold sm:px-6 sm:py-3 transition-all ${
                      card.highlight
                        ? "bg-emerald-700 text-white hover:bg-emerald-800"
                        : "border border-slate-200 bg-white text-slate-800 hover:border-emerald-700 hover:bg-emerald-700 hover:text-white"
                    }`}
                  >
                    <Link href={card.button.href} target="_blank" rel="noreferrer">
                      {card.button.label}
                    </Link>
                  </Button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Price
