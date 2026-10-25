import React from 'react'
import InternalPageHero from './InternalPageHero'
import ContentSurface from './ContentSurface'

function LegalDocumentLayout({ eyebrow, title, description, children }) {
  return (
    <main className="min-h-screen pb-20 lg:pb-24">
      <InternalPageHero eyebrow={eyebrow} title={title} description={description} pillTone="blue" />

      <section className="px-5 lg:px-10">
        <div className="mx-auto max-w-4xl">
          <ContentSurface className="p-7 md:p-12">
            <div className="legal-prose">
              {children}
            </div>
          </ContentSurface>
        </div>
      </section>
    </main>
  )
}

export default LegalDocumentLayout
