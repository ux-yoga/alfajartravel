import React, { ReactNode } from 'react'

type CardTentangProps = {
  icon?: ReactNode
  title: string
  subtitle: string
}

const CardTentang = ({ icon, title, subtitle }: CardTentangProps) => {
  return (
    <div className='hover-lift w-full max-w-sm rounded-[1.75rem] border border-slate-200 bg-white p-4 shadow-[0_20px_45px_-38px_rgba(15,23,42,0.22)] sm:p-5 md:p-6 hover:border-emerald-200 hover:shadow-[0_26px_55px_-42px_rgba(4,120,87,0.28)]'>
      <div className='flex flex-row items-start gap-3 sm:gap-4'>
        <div className='flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700 sm:h-12 sm:w-12'>
          {icon}
        </div>

        <div>
          <p className='text-base font-semibold text-slate-900 sm:text-lg'>{title}</p>
          <p className='mt-1 text-xs text-slate-600 sm:text-sm'>{subtitle}</p>
        </div>
      </div>
    </div>
  )
}

export default CardTentang
