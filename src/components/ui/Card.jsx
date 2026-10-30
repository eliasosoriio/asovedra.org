import React from 'react'

// Tarjeta plana al estilo de la portada: gris claro sobre fondo blanco, blanca sobre fondo gris
const TONES = {
  grey: 'bg-cloud text-body',
  white: 'bg-white text-body',
  navy: 'bg-navy text-white'
}

function Card({ as = 'article', tone = 'grey', className = '', children }) {
  const Tag = as
  return (
    <Tag className={`rounded-[28px] ${TONES[tone] || TONES.grey} ${className}`}>
      {children}
    </Tag>
  )
}

export default Card
