import React from 'react'

function ContentSurface({ children, className = '' }) {
  return (
    <div className={`rounded-[1.8rem] border border-white/8 bg-white/[0.04] shadow-[0_24px_56px_-34px_rgba(15,23,42,0.95)] backdrop-blur-sm ${className}`}>
      {children}
    </div>
  )
}

export default ContentSurface
