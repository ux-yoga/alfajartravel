import Image from 'next/image'
import React from 'react'
import type { TestimonialItem } from '@/lib/content/types'

type TesticardProps = {
    testimonials: TestimonialItem[]
}

const Testicard = ({ testimonials }: TesticardProps) => {
    return (
        <div>
            <div className="max-w-7xl mx-auto flex flex-col gap-4 sm:gap-5 md:gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
                    {testimonials.map((item) => (
                        <div
                            key={item.name}
                            className="hover-lift flex h-full flex-col justify-between rounded-[1.75rem] border border-white/10 bg-white/10 p-4 shadow-[0_22px_55px_-40px_rgba(15,23,42,0.35)] backdrop-blur-md sm:p-5 md:p-6 hover:border-emerald-200/35 hover:bg-white/14"
                        >
                            <p className="mb-4 text-sm leading-relaxed text-emerald-50/85 sm:text-base">&ldquo;{item.quote}&rdquo;</p>
                            <div className='flex gap-3'>
                                {item.imageSrc ? (
                                    <div className="relative h-10 w-10 flex-shrink-0 overflow-hidden rounded-2xl">
                                        <Image src={item.imageSrc} alt={item.name} fill className="object-cover" />
                                    </div>
                                ) : (
                                    <div className="h-10 w-10 flex-shrink-0 rounded-2xl bg-emerald-400/90" />
                                )}
                                <span>
                                    <h3 className="text-sm font-semibold text-white">{item.name}</h3>
                                    <p className='text-xs text-emerald-100/75 sm:text-sm'>{item.location}</p>
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Testicard
