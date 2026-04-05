import CardTentang from '@/Components/Molecules/CardTentang/page'
import Statistik from '@/Components/Molecules/Statistik/page'
import React from 'react'
import { aboutCardIconMap } from '@/lib/content/icon-maps'
import type { AboutContent } from '@/lib/content/types'

type TentangProps = {
  content: AboutContent
}

const Tentang = ({ content }: TentangProps) => {
  return (
    <section id="tentang" className='bg-white px-4 py-12 sm:px-6 sm:py-14 md:px-8 md:py-16 lg:px-16 lg:py-20 xl:px-20'>
      <div className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-start'>
          <div className='animate-soft-rise'>
            <h3 className='mb-2 text-xs font-semibold tracking-[0.24em] text-emerald-600 sm:mb-3 sm:text-sm md:text-base'>
              {content.eyebrow}
            </h3>
            <h1 className='mb-3 text-2xl font-bold leading-tight text-slate-900 sm:mb-4 sm:text-3xl md:text-4xl'>
              {content.title}
            </h1>
            <p className='mb-6 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base'>
              {content.description}
            </p>

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4'>
              {content.cards.map((card) => {
                const Icon = aboutCardIconMap[card.icon]

                return (
                  <CardTentang
                    key={card.title}
                    icon={Icon ? <Icon className='w-5 h-5 sm:w-6 sm:h-6' /> : null}
                    title={card.title}
                    subtitle={card.subtitle}
                  />
                )
              })}
            </div>
          </div>
          <div className='animate-soft-rise-delay mt-8 sm:mt-6 lg:mt-0'>
            <Statistik stats={content.stats} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Tentang
