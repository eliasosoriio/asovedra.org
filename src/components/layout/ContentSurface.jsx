import React from 'react'

function ContentSurface({ children, className = '' }) {
  return (
    <div className={`rounded-[24px] border border-line bg-white ${className}`}>
      {children}
    </div>
  )
}

export default ContentSurface
