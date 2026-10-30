import React from 'react'
import InternalPageHero from './InternalPageHero'
import ContentSurface from './ContentSurface'

function LegalDocumentLayout({ eyebrow, title, description, children }) {
  return (
    <main className="min-h-screen pb-20 lg:pb-24">
      <InternalPageHero eyebrow={eyebrow} title={title} description={description} pillTone="blue" />

      <section>
        <div className="mx-auto max-w-[1440px] px-6 lg:px-16">
          <ContentSurface className="p-7 md:p-12">
            <div className="legal-prose max-w-[860px]">
              {children}
            </div>
          </ContentSurface>
        </div>
      </section>
    </main>
  )
}

export default LegalDocumentLayout
