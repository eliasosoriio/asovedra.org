import React from 'react'

const TONES = {
  white: 'border border-line bg-white text-body',
  navy: 'bg-navy text-white'
}

function Card({ as = 'article', tone = 'white', className = '', children }) {
  const Tag = as
  return (
    <Tag className={`rounded-[24px] ${TONES[tone]} ${className}`}>
      {children}
    </Tag>
  )
}

export default Card
