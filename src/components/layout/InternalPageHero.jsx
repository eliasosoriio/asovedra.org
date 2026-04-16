import React from 'react'

function InternalPageHero({ eyebrow, title, description }) {
  return (
    <section className="relative overflow-hidden px-4 py-20 lg:py-24">
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

export default InternalPageHero
