import React from 'react'
import InternalPageHero from './InternalPageHero'

// Documento legal: cabecera navy y texto en blanco con un ancho de lectura cómodo
function LegalDocumentLayout({ eyebrow, title, description, children }) {
  return (
    <main className="min-h-screen">
      <InternalPageHero eyebrow={eyebrow} title={title} description={description} />

      <section className="mx-auto max-w-[1440px] px-6 pb-24 lg:px-16 lg:pb-32">
        <div className="legal-prose max-w-[860px] text-[17px] leading-relaxed">
          {children}
        </div>
      </section>
    </main>
  )
}

export default LegalDocumentLayout
