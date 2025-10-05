import React, { useState, useRef } from 'react'
import NewsCard from '../components/ui/NewsCard'

function News() {
  const [currentPage, setCurrentPage] = useState(1)
  const newsPerPage = 5
  const newsContainerRef = useRef(null)
  const newsData = [
    {
      title: "Asovedra calcula que 2.000 venezolanos llegaron a Pontevedra desde el año 2017",
      image: "https://www.diariodepontevedra.es/asset/thumbnail,1280,720,center,center/media/diariodepontevedra/images/2019/08/03/2019080312114328443.jpg",
      description: "La Asociación de Venezolanos en Pontevedra presenta un informe detallado sobre la llegada de migrantes venezolanos a la provincia en los últimos años.",
      date: "3 de agosto, 2019",
      source: "Diario de Pontevedra"
    },
    {
      title: "Venimos a trabajar, no a quitar nada a nadie, es hora de acabar con ese famoso mito",
      image: "https://www.diariodepontevedra.es/asset/thumbnail,1280,720,center,center/media/diariodepontevedra/images/2025/07/22/2025072215310571656.jpg",
      description: "Representantes de la comunidad venezolana desmienten prejuicios y explican su contribución positiva a la sociedad gallega.",
      date: "22 de julio, 2025",
      source: "Diario de Pontevedra"
    },
    {
      title: "GLC Abogados y ASOVEDRA en el Congreso de los Diputados",
      image: "https://glcabogados.es/wp-content/uploads/2025/05/GLCAbogados-y-Asovedra-en-Congreso-diputados-1080x675.jpeg",
      description: "Importante reunión para abordar temas migratorios y derechos de los venezolanos residentes en España.",
      date: "Mayo, 2025",
      source: "GLC Abogados"
    },
    {
      title: "El colectivo de venezolanos habla: España necesita médicos, ingenieros...",
      image: "https://estaticos-cdn.prensaiberica.es/clip/128d1d7f-3ffd-45af-bd37-453f77b15536_16-9-discover-aspect-ratio_default_0.jpg",
      description: "Profesionales venezolanos destacan la necesidad de España de cubrir puestos especializados y su disposición a contribuir.",
      date: "Septiembre, 2025",
      source: "Prensa Ibérica"
    },
    {
      title: "Asovedra organiza jornada de orientación laboral para profesionales venezolanos",
      image: "https://www.diariodepontevedra.es/asset/thumbnail,1280,720,center,center/media/diariodepontevedra/images/2019/08/03/2019080312114328443.jpg",
      description: "Más de 150 profesionales participaron en las jornadas de orientación laboral organizadas por Asovedra en colaboración con empresas locales.",
      date: "15 de septiembre, 2025",
      source: "Asovedra"
    },
    {
      title: "Nuevo convenio entre Asovedra y el Ayuntamiento de Pontevedra",
      image: "https://www.diariodepontevedra.es/asset/thumbnail,1280,720,center,center/media/diariodepontevedra/images/2025/07/22/2025072215310571656.jpg",
      description: "El acuerdo facilitará la integración de familias venezolanas mediante programas de apoyo social y educativo.",
      date: "10 de septiembre, 2025",
      source: "Ayuntamiento de Pontevedra"
    },
    {
      title: "Exitosa campaña de regularización documental beneficia a 200 venezolanos",
      image: "https://glcabogados.es/wp-content/uploads/2025/05/GLCAbogados-y-Asovedra-en-Congreso-diputados-1080x675.jpeg",
      description: "La campaña de asesoría legal gratuita logró regularizar la situación de más de 200 venezolanos en la región.",
      date: "5 de agosto, 2025",
      source: "Asovedra"
    },
    {
      title: "Asovedra presenta estudio sobre integración laboral de venezolanos en Galicia",
      image: "https://estaticos-cdn.prensaiberica.es/clip/128d1d7f-3ffd-45af-bd37-453f77b15536_16-9-discover-aspect-ratio_default_0.jpg",
      description: "El estudio revela que el 78% de los venezolanos en Galicia ha conseguido empleo en sectores acordes a su formación profesional.",
      date: "20 de julio, 2025",
      source: "Universidad de Santiago"
    },
    {
      title: "Programa de mentoría conecta a profesionales venezolanos con empresarios gallegos",
      image: "https://www.diariodepontevedra.es/asset/thumbnail,1280,720,center,center/media/diariodepontevedra/images/2019/08/03/2019080312114328443.jpg",
      description: "La iniciativa ha facilitado la creación de una red de apoyo profesional que beneficia tanto a migrantes como a empresas locales.",
      date: "12 de julio, 2025",
      source: "Cámara de Comercio"
    },
    {
      title: "Asovedra celebra su vigésimo aniversario con una gala benéfica",
      image: "https://www.diariodepontevedra.es/asset/thumbnail,1280,720,center,center/media/diariodepontevedra/images/2025/07/22/2025072215310571656.jpg",
      description: "La celebración reunió a más de 300 personas y recaudó fondos para programas de apoyo a familias venezolanas en situación vulnerable.",
      date: "30 de junio, 2025",
      source: "Asovedra"
    }
  ]

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
    setTimeout(scrollToNews, 100) // Pequeño delay para asegurar que el contenido se actualice primero
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
    <main className='min-h-screen bg-gray-50'>
      {/* Hero Section */}
      <section className="nav-bg py-16 -mt-6">
        <div className="max-w-6xl mx-auto px-4 text-center text-white pt-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Noticias y Actualidad</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Mantente informado sobre las últimas noticias de la comunidad venezolana en España
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
                key={indexOfFirstNews + index}
                title={news.title}
                image={news.image}
                description={news.description}
                date={news.date}
                source={news.source}
              />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center space-x-4 mt-12">
            <button 
              onClick={prevPage}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                currentPage === 1 
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                  : 'btn-secondary hover:bg-primary-blue hover:text-white'
              }`}
            >
              ← Anterior
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
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                currentPage === totalPages 
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                  : 'btn-secondary hover:bg-primary-blue hover:text-white'
              }`}
            >
              Siguiente →
            </button>
          </div>
          
          {/* Page info */}
          <div className="text-center mt-4 text-gray-600">
            Mostrando {indexOfFirstNews + 1}-{Math.min(indexOfLastNews, newsData.length)} de {newsData.length} noticias
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-white py-16">
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
      </section>
    </main>
  )
}

export default News
