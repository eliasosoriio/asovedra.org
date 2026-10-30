import React from 'react'

// Flecha fina y alargada de los botones en cápsula
function ArrowIcon({ long = false, className = '' }) {
  const width = long ? 82 : 38
  return (
    <svg
      aria-hidden="true"
      width={width}
      height="20"
      viewBox={`0 0 ${width} 20`}
      fill="none"
      className={`shrink-0 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transform-none ${className}`}
    >
      <path d={`M0 10H${width - 2}M${width - 11} 1l9 9-9 9`} stroke="currentColor" strokeWidth="1.6" />
    </svg>
  )
}

export default ArrowIcon
