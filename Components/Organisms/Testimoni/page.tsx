import Testicard from '@/Components/Molecules/Testicard/page'
import React from 'react'
import type { TestimonialsContent } from '@/lib/content/types'

type TestimoniProps = {
  content: TestimonialsContent
}

const Testimoni = ({ content }: TestimoniProps) => {
  return (
    <section id="testimoni" className='flex flex-col gap-8 bg-[linear-gradient(135deg,#0f2f23_0%,#11523a_55%,#166a4b_100%)] px-4 py-12 sm:px-6 sm:py-14 md:px-8 md:py-16 lg:px-16 lg:py-20 xl:px-20'>
        <div className="max-w-7xl mx-auto flex flex-col gap-3 sm:gap-4">
            <label className="text-center text-xs font-semibold tracking-[0.24em] text-emerald-200 sm:text-sm">{content.eyebrow}</label>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-[#fafafa] font-bold text-center">{content.title}</h2>
            <p className="text-center text-sm text-emerald-50/80 sm:text-base">{content.description}</p>
        </div>
        <div>
            <Testicard testimonials={content.items} />
        </div>
    </section>
  )
}

export default Testimoni
