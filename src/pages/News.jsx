import React, { useState, useRef } from 'react'
import { NEWS_DATA } from '../constants/news'
import SEO from '../components/SEO'
import { FaArrowRight } from 'react-icons/fa'

function News() {
  const [currentPage, setCurrentPage] = useState(1)
  const newsPerPage = 6
  const newsContainerRef = useRef(null)

  // Ordenar automáticamente por fecha (desc)
  const newsData = [...NEWS_DATA].sort((a, b) => {
    const dA = new Date(a.isoDate || 0).getTime()
    const dB = new Date(b.isoDate || 0).getTime()
    return dB - dA
  })

  // Calcular paginación
  const totalPages = Math.ceil(newsData.length / newsPerPage)
  const indexOfLastNews = currentPage * newsPerPage
  const indexOfFirstNews = indexOfLastNews - newsPerPage
  const currentNews = newsData.slice(indexOfFirstNews, indexOfLastNews)

  const scrollToNews = () => {
    if (newsContainerRef.current) {
      newsContainerRef.current.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start',
        inline: 'nearest'
      })
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
      <main className='min-h-screen bg-gradient-to-b from-slate-50 to-white pt-20'>
        {/* Header Section */}
        <section className="!bg-gradient-to-br !from-[#1B2336] !via-slate-800 !to-slate-900 py-20 px-4 relative overflow-hidden">
          {/* Puntos decorativos */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-yellow-400/30 rounded-full"></div>
            <div className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-blue-500/30 rounded-full"></div>
            <div className="absolute top-2/3 right-1/4 w-2.5 h-2.5 bg-red-500/30 rounded-full"></div>
          </div>
          
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm !text-white rounded-full text-sm font-semibold mb-6">
              Actualidad
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 !text-white">Noticias y Actualidad</h1>
            <div className="w-24 h-1 !bg-gradient-to-r !from-yellow-400 !via-blue-600 !to-red-600 mx-auto mb-6"></div>
            <p className="text-xl !text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Mantente informado sobre las últimas noticias de la comunidad iberoamericana en España
            </p>
          </div>
        </section>

        {/* News Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div ref={newsContainerRef} className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Todas las Noticias</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Últimas actualizaciones y acontecimientos importantes
              </p>
            </div>

            <div className="grid gap-8 mb-12">
              {currentNews.map((news, index) => (
                <article 
                  key={news.url || indexOfFirstNews + index}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 lg:grid lg:grid-cols-2"
                >
                  <div className="relative h-80 lg:h-96 overflow-hidden">
                    <img 
                      src={news.image} 
                      alt={news.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-[#1B2336] text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {news.source}
                    </div>
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <div className="text-sm text-slate-500 mb-3">{news.date}</div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                      {news.title}
                    </h3>
                    <p className="text-slate-600 mb-6 line-clamp-3 leading-relaxed">
                      {news.description}
                    </p>
                    <a 
                      href={news.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[#1B2336] font-semibold hover:text-blue-600 transition-colors group/link"
                    >
                      Leer más
                      <FaArrowRight className="text-sm group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex flex-col items-center gap-6 mt-16">
              <div className="flex justify-center items-center space-x-3">
                <button 
                  onClick={prevPage}
                  disabled={currentPage === 1}
                  className={`p-3 rounded-lg font-medium transition-all ${
                    currentPage === 1 
                      ? 'bg-slate-200 text-slate-400 cursor-not-allowed' 
                      : 'bg-white border-2 border-[#1B2336] text-[#1B2336] hover:bg-[#1B2336] hover:text-white shadow-md'
                  }`}
                  aria-label="Página anterior"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <div className="flex space-x-2">
                  {[...Array(totalPages)].map((_, index) => {
                    const pageNumber = index + 1
                    return (
                      <button
                        key={pageNumber}
                        onClick={() => paginate(pageNumber)}
                        className={`w-12 h-12 rounded-lg font-semibold transition-all ${
                          currentPage === pageNumber
                            ? 'bg-[#1B2336] text-white shadow-lg scale-110'
                            : 'bg-white border-2 border-slate-200 text-slate-700 hover:border-[#1B2336] hover:text-[#1B2336]'
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
                  className={`p-3 rounded-lg font-medium transition-all ${
                    currentPage === totalPages 
                      ? 'bg-slate-200 text-slate-400 cursor-not-allowed' 
                      : 'bg-white border-2 border-[#1B2336] text-[#1B2336] hover:bg-[#1B2336] hover:text-white shadow-md'
                  }`}
                  aria-label="Página siguiente"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              
              {/* Page info */}
              <div className="text-center text-slate-600 text-sm">
                Mostrando {indexOfFirstNews + 1}-{Math.min(indexOfLastNews, newsData.length)} de {newsData.length} noticias
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default News

