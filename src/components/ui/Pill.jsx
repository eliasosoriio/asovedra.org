import React from 'react'

// Etiquetas en mayúsculas: con borde (rótulo de sección) o blancas con sombra (chips)
const TONES = {
  outline: 'border border-ink text-ink',
  chip: 'bg-white text-ink shadow-pill',
  onNavy: 'border border-white/70 text-white',
  red: 'border border-red text-red'
}

// Los tonos antiguos de «Cercana» se reasignan para no romper las páginas
const ALIASES = { yellow: 'outline', blue: 'outline', white: 'chip' }

function Pill({ tone = 'outline', className = '', children }) {
  const resolved = TONES[tone] ? tone : ALIASES[tone] || 'outline'
  return (
    <span className={`inline-flex min-h-11 items-center gap-2 rounded-full px-6 py-2 text-sm font-medium uppercase tracking-[0.02em] ${TONES[resolved]} ${className}`}>
      {children}
    </span>
  )
}

export default Pill
