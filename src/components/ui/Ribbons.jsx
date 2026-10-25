import React from 'react'

// Cintas del logo (cápsulas a ±45°). Siempre decorativas.
function Ribbons({ className = '', size = 'md' }) {
  const dims = size === 'lg'
    ? { w: 'w-[260px]', h: 'h-[72px]', w2: 'w-[220px]' }
    : { w: 'w-[180px]', h: 'h-[50px]', w2: 'w-[150px]' }

  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-0 ${className}`}>
      <span className={`absolute -left-[90px] top-[70px] ${dims.w} ${dims.h} -rotate-45 rounded-full bg-yellow`}></span>
      <span className={`absolute -right-[80px] bottom-[60px] ${dims.w2} ${dims.h} rotate-45 rounded-full bg-red`}></span>
    </div>
  )
}

export default Ribbons
