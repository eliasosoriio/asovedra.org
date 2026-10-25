import React from 'react'
import Pill from './Pill'

function SectionHeader({ pill, pillTone = 'yellow', title, subtitle, align = 'left', as = 'h2', className = '' }) {
  const Heading = as
  const centered = align === 'center'
  const size = as === 'h1'
    ? 'text-4xl sm:text-5xl lg:text-6xl'
    : 'text-3xl sm:text-4xl lg:text-[42px]'

  return (
    <div className={`${centered ? 'mx-auto text-center' : ''} max-w-3xl ${className}`}>
      {pill && <Pill tone={pillTone}>{pill}</Pill>}
      <Heading className={`${pill ? 'mt-4' : ''} font-extrabold leading-[1.08] tracking-[-0.025em] text-ink ${size}`}>
        {title}
      </Heading>
      {subtitle && (
        <p className={`mt-4 text-lg leading-relaxed text-muted ${centered ? 'mx-auto' : ''} max-w-2xl`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}

export default SectionHeader
