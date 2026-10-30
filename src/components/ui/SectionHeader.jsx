import React from 'react'
import Pill from './Pill'

function SectionHeader({ pill, pillTone = 'outline', title, subtitle, align = 'left', as = 'h2', className = '' }) {
  const Heading = as
  const centered = align === 'center'
  const size = as === 'h1' ? 'big-headline' : 'text-4xl sm:text-5xl lg:text-[64px] font-medium leading-[1.15] tracking-[-0.01em]'

  return (
    <div className={`${centered ? 'mx-auto text-center' : ''} max-w-4xl ${className}`}>
      {pill && <Pill tone={pillTone}>{pill}</Pill>}
      <Heading className={`${pill ? 'mt-6' : ''} text-ink ${size}`}>
        {title}
      </Heading>
      {subtitle && (
        <p className={`mt-6 text-xl leading-relaxed text-muted lg:text-[22px] ${centered ? 'mx-auto' : ''} max-w-3xl`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}

export default SectionHeader
