import React from 'react'

function ContentSurface({ children, className = '' }) {
  return (
    <div className={`rounded-[20px] bg-white shadow-[0_20px_45px_-30px_rgba(0,0,0,0.25)] ${className}`}>
      {children}
    </div>
  )
}

export default ContentSurface
