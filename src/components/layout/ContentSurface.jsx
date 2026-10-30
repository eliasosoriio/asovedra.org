import React from 'react'

// Superficie de contenido plana (gris claro sobre el fondo blanco de la página)
function ContentSurface({ children, tone = 'grey', className = '' }) {
  return (
    <div className={`rounded-[28px] ${tone === 'white' ? 'bg-white' : 'bg-cloud'} ${className}`}>
      {children}
    </div>
  )
}

export default ContentSurface
