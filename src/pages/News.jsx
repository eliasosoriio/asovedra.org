import React, { useRef, useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import SEO from '../components/SEO'
import InternalPageHero from '../components/layout/InternalPageHero'
import { NEWS_DATA } from '../constants/news'

function News() {
  const [currentPage, setCurrentPage] = useState(1)
  const newsPerPage = 6
  const newsContainerRef = useRef(null)

  const newsData = [...NEWS_DATA].sort((a, b) => {
    const dA = new Date(a.isoDate || 0).getTime()
    const dB = new Date(b.isoDate || 0).getTime()
    return dB - dA
  })

  const totalPages = Math.ceil(newsData.length / newsPerPage)
  const indexOfLastNews = currentPage * newsPerPage
  const indexOfFirstNews = indexOfLastNews - newsPerPage
  const currentNews = newsData.slice(indexOfFirstNews, indexOfLastNews)

  const scrollToNews = () => {
    if (newsContainerRef.current) {
      newsContainerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
    setTimeout(scrollToNews, 100)
  }

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
      setTimeout(scrollToNews, 100)
    }
  }

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
      setTimeout(scrollToNews, 100)
    }
  }

  return (
    <>
      <SEO
        title="Noticias"
        description="Mantente informado con las últimas noticias de la comunidad iberoamericana en España. Cobertura de eventos, logros y actualidad migratoria."
        keywords="noticias iberoamericanos españa, actualidad, comunidad iberoamericana, noticias asovedra, eventos"
        canonical="/noticias"
      />

      <main className="min-h-screen bg-[linear-gradient(180deg,#020617_0%,#0f172a_38%,#111827_100%)] pt-24 text-white">
        <InternalPageHero
          eyebrow="Actualidad"
          title="Noticias y actualidad"
          description="Seguimiento de iniciativas, colaboraciones y temas de interes para la comunidad iberoamericana."
        />

        <section className="px-4 pb-20 lg:pb-24">
          <div className="mx-auto max-w-7xl" ref={newsContainerRef}>
            <div className="grid gap-6">
              {currentNews.map((news, index) => (
                <article
                  key={news.url || indexOfFirstNews + index}
                  className="group overflow-hidden rounded-[1.8rem] border border-white/8 bg-white/[0.04] shadow-[0_24px_50px_-30px_rgba(15,23,42,0.9)] backdrop-blur-sm lg:grid lg:grid-cols-[0.95fr_1.05fr]"
                >
                  <div className="relative h-72 overflow-hidden lg:h-full lg:min-h-[20rem]">
                    <img
                      src={news.image}
                      alt={news.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent"></div>
                    <div className="absolute left-5 top-5 rounded-full border border-white/14 bg-slate-950/72 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                      {news.source}
                    </div>
                  </div>

                  <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
                    <p className="text-sm font-medium text-slate-400">{news.date}</p>
                    <h2 className="mt-3 text-2xl font-bold text-white transition-colors duration-200 group-hover:text-blue-300 lg:text-3xl">
                      {news.title}
                    </h2>
                    <p className="mt-4 line-clamp-3 text-base leading-7 text-slate-300">
                      {news.description}
                    </p>
                    <a
                      href={news.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors duration-200 hover:text-blue-300"
                    >
                      Leer noticia completa
                      <FaArrowRight className="text-xs transition-transform duration-200 group-hover:translate-x-1" />
                    </a>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-14 flex flex-col items-center gap-6">
              <div className="flex items-center justify-center gap-3">
                <button
                  onClick={prevPage}
                  disabled={currentPage === 1}
                  className={`flex h-11 w-11 items-center justify-center rounded-xl border text-sm font-semibold transition-all duration-200 ${
                    currentPage === 1
                      ? 'cursor-not-allowed border-white/6 bg-white/[0.03] text-slate-500'
                      : 'border-white/10 bg-white/[0.05] text-white hover:bg-white/[0.08]'
                  }`}
                  aria-label="Pagina anterior"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <div className="flex gap-2">
                  {[...Array(totalPages)].map((_, index) => {
                    const pageNumber = index + 1
                    return (
                      <button
                        key={pageNumber}
                        onClick={() => paginate(pageNumber)}
                        className={`flex h-11 w-11 items-center justify-center rounded-xl text-sm font-semibold transition-all duration-200 ${
                          currentPage === pageNumber
                            ? 'bg-gradient-to-r from-blue-700 to-blue-600 text-white shadow-[0_14px_28px_-18px_rgba(37,99,235,0.95)]'
                            : 'border border-white/10 bg-white/[0.05] text-slate-300 hover:bg-white/[0.08] hover:text-white'
                        }`}
                      >
                        {pageNumber}
                      </button>
                    )
                  })}
                </div>

                <button
                  onClick={nextPage}
                  disabled={currentPage === totalPages}
                  className={`flex h-11 w-11 items-center justify-center rounded-xl border text-sm font-semibold transition-all duration-200 ${
                    currentPage === totalPages
                      ? 'cursor-not-allowed border-white/6 bg-white/[0.03] text-slate-500'
                      : 'border-white/10 bg-white/[0.05] text-white hover:bg-white/[0.08]'
                  }`}
                  aria-label="Pagina siguiente"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              <p className="text-sm text-slate-400">
                Mostrando {indexOfFirstNews + 1}-{Math.min(indexOfLastNews, newsData.length)} de {newsData.length} noticias
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default News
