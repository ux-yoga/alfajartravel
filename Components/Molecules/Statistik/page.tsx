import React from 'react'
import type { AboutStat } from '@/lib/content/types'

type StatistikProps = {
  stats: AboutStat[]
}

const Statistik = ({ stats }: StatistikProps) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6'>
      {stats.map((stat) => {
        const isDark = stat.variant === 'dark'
        return (
          <div
            key={stat.label}
            className={`hover-lift flex flex-col justify-center gap-1 rounded-2xl border p-4 shadow-[0_20px_45px_-38px_rgba(15,23,42,0.22)] sm:gap-2 sm:rounded-3xl sm:p-5 md:p-6 ${
              isDark
                ? 'border-emerald-800/20 bg-emerald-700 text-white shadow-[0_28px_60px_-42px_rgba(4,120,87,0.55)]'
                : 'border-slate-200 bg-white text-slate-900 hover:border-emerald-200'
            }`}
          >
            <span className='text-2xl sm:text-3xl md:text-4xl font-bold'>{stat.value}</span>
            <span className='text-xs sm:text-sm font-medium opacity-80'>{stat.label}</span>
          </div>
        )
      })}
    </div>
  )
}

export default Statistik
