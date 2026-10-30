import React from 'react'

// Titular de sección al estilo de la portada: antetítulo en navy, título semibold y subtítulo gris.
// `pill` se mantiene como nombre de la prop del antetítulo por compatibilidad con las páginas.
function SectionHeader({ pill, title, subtitle, align = 'left', as = 'h2', onDark = false, className = '' }) {
  const Heading = as
  const centered = align === 'center'

  return (
    <div className={`${centered ? 'mx-auto text-center' : ''} max-w-4xl ${className}`}>
      {pill && <p className={`text-[17px] font-semibold ${onDark ? 'text-yellow' : 'text-navy'}`}>{pill}</p>}
      <Heading
        className={`${pill ? 'mt-3' : ''} text-[34px] font-semibold leading-[1.08] tracking-[-0.02em] sm:text-[44px] lg:text-[56px] ${onDark ? 'text-white' : 'text-ink'}`}
      >
        {title}
      </Heading>
      {subtitle && (
        <p className={`mt-5 max-w-3xl text-[19px] leading-relaxed lg:text-[21px] ${centered ? 'mx-auto' : ''} ${onDark ? 'text-white/80' : 'text-muted'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}

export default SectionHeader
