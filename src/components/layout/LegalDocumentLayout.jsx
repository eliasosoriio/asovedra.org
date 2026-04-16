import React from 'react'
import InternalPageHero from './InternalPageHero'
import ContentSurface from './ContentSurface'

function LegalDocumentLayout({ eyebrow, title, description, children }) {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#020617_0%,#0f172a_38%,#111827_100%)] pt-24 text-white">
      <InternalPageHero eyebrow={eyebrow} title={title} description={description} />

      <section className="px-4 pb-20 lg:pb-24">
        <div className="mx-auto max-w-4xl">
          <ContentSurface className="p-8 md:p-12">
            <div className="prose prose-lg prose-invert max-w-none prose-headings:text-white prose-p:text-slate-300 prose-li:text-slate-300 prose-strong:text-white prose-a:text-blue-300 hover:prose-a:text-blue-200 prose-h2:mb-4 prose-h2:text-2xl prose-h3:mb-3 prose-h3:text-xl prose-h4:mb-3 prose-h4:text-lg">
              {children}
            </div>
          </ContentSurface>
        </div>
      </section>
    </main>
  )
}

export default LegalDocumentLayout
