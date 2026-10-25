import React from 'react'

const TONES = {
  yellow: 'bg-pill-yellow text-[#5c4500]',
  blue: 'bg-pill-blue text-navy',
  red: 'bg-pill-red text-[#a10a22]',
  white: 'bg-white text-[#5c4500]',
  onNavy: 'bg-white/10 text-[#FBD96A]'
}

function Pill({ tone = 'yellow', className = '', children }) {
  return (
    <span className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-sm font-semibold ${TONES[tone]} ${className}`}>
      {children}
    </span>
  )
}

export default Pill
