import React from 'react'

const TONES = {
  white: 'bg-white text-body shadow-[0_20px_45px_-30px_rgba(0,0,0,0.25)]',
  navy: 'bg-navy text-white'
}

function Card({ as = 'article', tone = 'white', className = '', children }) {
  const Tag = as
  return (
    <Tag className={`rounded-[20px] ${TONES[tone]} ${className}`}>
      {children}
    </Tag>
  )
}

export default Card
