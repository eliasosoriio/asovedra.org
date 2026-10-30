import React, { useRef, useState } from 'react'
import { LuArrowRight, LuChevronLeft, LuChevronRight } from 'react-icons/lu'
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

  const arrowClass = (disabled) =>
    `grid h-11 w-11 place-items-center rounded-full border transition-colors ${
      disabled ? 'cursor-not-allowed border-line text-[#b9b2a3]' : 'border-line bg-white text-ink hover:border-navy hover:text-navy'
    }`

  return (
    <>
      <SEO
        title="Noticias"
        description="Mantente informado con las últimas noticias de la comunidad iberoamericana en España. Cobertura de eventos, logros y actualidad migratoria."
        keywords="noticias iberoamericanos españa, actualidad, comunidad iberoamericana, noticias asovedra, eventos"
        canonical="/noticias"
      />

      <main className="min-h-screen">
        <InternalPageHero
          eyebrow="Actualidad"
          title="Noticias y actualidad"
          description="Seguimiento de iniciativas, colaboraciones y temas de interés para la comunidad iberoamericana."
        />

        <section className="pb-24">
          <div id="listado-noticias" className="mx-auto max-w-[1440px] px-6 lg:px-16" ref={newsContainerRef}>
            <div className="grid gap-5">
              {currentNews.map((news, index) => (
                <article
                  key={news.url || indexOfFirstNews + index}
                  className="group overflow-hidden rounded-[28px] border border-line bg-white lg:grid lg:grid-cols-[0.9fr_1.1fr]"
                >
                  <div className="relative h-64 overflow-hidden bg-line lg:h-full lg:min-h-[18rem]">
                    {news.image ? (
                      <img
                        src={news.image}
                        alt=""
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                      />
                    ) : (
                      // Noticias sin foto del medio: fondo de marca con el logo
                      <div className="grid h-full w-full place-items-center bg-navy">
                        <img src="/favicon.png" alt="" className="h-20 w-20 rounded-full bg-white object-contain p-3" />
                      </div>
                    )}
                    <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-bold text-red shadow-sm">
                      {news.source}
                    </span>
                  </div>

                  <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
                    <p className="text-sm font-semibold text-muted">{news.date}</p>
                    <h2 className="mt-2 text-2xl font-medium leading-snug tracking-[-0.015em] text-ink transition-colors group-hover:text-navy lg:text-[26px]">
                      {news.title}
                    </h2>
                    <p className="mt-3 line-clamp-3 text-base leading-7 text-muted">
                      {news.description}
                    </p>
                    <a
                      href={news.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-navy hover:underline"
                    >
                      Leer noticia completa
                      <LuArrowRight aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </article>
              ))}
            </div>

            <nav aria-label="Paginación de noticias" className="mt-12 flex flex-col items-center gap-5">
              <div className="flex flex-wrap items-center justify-center gap-2">
                <button type="button" onClick={prevPage} disabled={currentPage === 1} className={arrowClass(currentPage === 1)} aria-label="Página anterior">
                  <LuChevronLeft aria-hidden="true" className="h-5 w-5" />
                </button>

                {[...Array(totalPages)].map((_, index) => {
                  const pageNumber = index + 1
                  const active = currentPage === pageNumber
                  return (
                    <button
                      key={pageNumber}
                      type="button"
                      onClick={() => paginate(pageNumber)}
                      aria-current={active ? 'page' : undefined}
                      className={`grid h-11 w-11 place-items-center rounded-full text-sm font-bold transition-colors ${
                        active ? 'bg-navy text-white' : 'border border-line bg-white text-ink hover:border-navy hover:text-navy'
                      }`}
                    >
                      {pageNumber}
                    </button>
                  )
                })}

                <button type="button" onClick={nextPage} disabled={currentPage === totalPages} className={arrowClass(currentPage === totalPages)} aria-label="Página siguiente">
                  <LuChevronRight aria-hidden="true" className="h-5 w-5" />
                </button>
              </div>

              <p className="text-sm text-muted">
                Mostrando {indexOfFirstNews + 1}-{Math.min(indexOfLastNews, newsData.length)} de {newsData.length} noticias
              </p>
            </nav>
          </div>
        </section>
      </main>
    </>
  )
}

export default News
