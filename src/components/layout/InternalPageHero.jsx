import React from 'react'

function DarkHero({ eyebrow, title, description }) {
  return (
    <section className="relative overflow-hidden px-4 pt-36 pb-20 lg:pt-44 lg:pb-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.14),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(250,204,21,0.08),transparent_24%)]"></div>
      <div className="relative mx-auto max-w-6xl text-center text-white">
        {eyebrow && (
          <span className="inline-flex rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm font-semibold text-slate-200">
            {eyebrow}
          </span>
        )}
        <h1 className="mt-6 text-4xl font-bold leading-tight text-white md:text-6xl">{title}</h1>
        <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-yellow-400 via-blue-500 to-red-500"></div>
        {description && (
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300 lg:text-xl">
            {description}
          </p>
        )}
      </div>
    </section>
  )
}

// Cabecera de las páginas internas: navy como el hero de la portada, título grande en blanco
function InternalPageHero({ eyebrow, title, description, variant = 'light', children }) {
  if (variant === 'dark') {
    return <DarkHero eyebrow={eyebrow} title={title} description={description} />
  }

  return (
    <section className="mb-20 bg-navy text-white lg:mb-28">
      <div className="mx-auto max-w-[1440px] px-6 pb-16 pt-36 lg:px-16 lg:pb-24 lg:pt-[170px]">
        {eyebrow && <p className="text-[17px] font-semibold text-yellow">{eyebrow}</p>}
        <h1 className="mt-4 max-w-5xl text-[40px] font-medium leading-[1.08] tracking-[-0.02em] sm:text-[56px] lg:text-[72px]">
          {title}
        </h1>
        {description && (
          <p className="mt-6 max-w-3xl text-[19px] leading-relaxed text-white/80 lg:text-[22px]">{description}</p>
        )}
        {children}
      </div>
    </section>
  )
}

export default InternalPageHero
