import React, { useState, useRef } from 'react'
import NewsCard from '../components/ui/NewsCard'
import { Header } from '../components/layout/Header'
import { NEWS_DATA } from '../constants/news'
import SEO from '../components/SEO'

function News() {
  const [currentPage, setCurrentPage] = useState(1)
  const newsPerPage = 5
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
      <main className='min-h-screen bg-gray-50'>
      {/* Header Section with Navigation */}
      <section className="nav-bg py-6 px-3 sticky top-0 z-50">
        <Header />
        <div className="max-w-6xl mx-auto px-4 text-center text-white pt-12 pb-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Noticias y Actualidad</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Mantente informado sobre las últimas noticias de la comunidad iberoamericana en España
          </p>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div ref={newsContainerRef} className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-primary-dark mb-2">Todas las Noticias</h2>
              <p className="text-gray-600">Últimas actualizaciones y acontecimientos importantes</p>
            </div>
            <div className="h-1 w-20 bg-primary-blue rounded"></div>
          </div>

          <div className="space-y-6 transition-all duration-300 ease-in-out">
            {currentNews.map((news, index) => (
              <NewsCard
                key={news.url || indexOfFirstNews + index}
                title={news.title}
                image={news.image}
                description={news.description}
                date={news.date}
                source={news.source}
                url={news.url}
              />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center space-x-4 mt-12">
            <button 
              onClick={prevPage}
              disabled={currentPage === 1}
              className={`p-3 rounded-lg font-medium transition-all ${
                currentPage === 1 
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                  : 'btn-secondary hover:bg-primary-blue hover:text-white hover:scale-110'
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
                    className={`w-10 h-10 rounded-lg font-medium transition-colors ${
                      currentPage === pageNumber
                        ? 'bg-primary-blue text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
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
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                  : 'btn-secondary hover:bg-primary-blue hover:text-white hover:scale-110'
              }`}
              aria-label="Página siguiente"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          {/* Page info */}
          <div className="text-center mt-4 text-gray-600">
            Mostrando {indexOfFirstNews + 1}-{Math.min(indexOfLastNews, newsData.length)} de {newsData.length} noticias
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      {/* <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold text-primary-dark mb-4">
            Suscríbete a nuestro boletín
          </h3>
          <p className="text-gray-600 mb-8">
            Recibe las últimas noticias y actualizaciones directamente en tu correo electrónico
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Tu correo electrónico"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue"
            />
            <button className="btn-primary">
              Suscribirse
            </button>
          </div>
        </div>
      </section> */}
    </main>
    </>
  )
}

export default News
