'use client'

import { useEffect, useRef, useState } from 'react'
import { stats } from '@/lib/data'

function AnimatedStat({ value, suffix, label }: { value: string; suffix: string; label: string }) {
  const [displayed, setDisplayed] = useState('0')
  const ref = useRef<HTMLDivElement>(null)
  const animated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true
          const target = parseInt(value)
          const duration = 1800
          const start = performance.now()

          const tick = (now: number) => {
            const elapsed = now - start
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setDisplayed(Math.floor(eased * target).toString())
            if (progress < 1) requestAnimationFrame(tick)
          }

          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value])

  return (
    <div ref={ref} className="text-center px-6 py-6">
      <p className="text-4xl lg:text-5xl font-black text-white leading-none">
        {displayed}
        <span className="text-mac-red">{suffix}</span>
      </p>
      <p className="text-gray-400 text-xs uppercase tracking-widest mt-2 font-medium">{label}</p>
    </div>
  )
}

export default function StatsBar() {
  return (
    <section className="bg-mac-gray border-t border-b border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-mac-red/0 via-mac-red to-mac-red/0" />
        <div className="absolute top-0 left-2/4 w-px h-full bg-gradient-to-b from-mac-red/0 via-mac-red to-mac-red/0" />
        <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-mac-red/0 via-mac-red to-mac-red/0" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/5 divide-y lg:divide-y-0">
          {stats.map((stat) => (
            <AnimatedStat
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
