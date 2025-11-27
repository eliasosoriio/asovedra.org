import React from 'react'
import { Link } from 'react-router-dom'
import ServiceCard from '../components/ui/ServiceCard'
import NewsCard from '../components/ui/NewsCard'
import ServiceCardModern from '../components/ui/ServiceCardModern'
import { STATS_ARRAY } from '../constants/stats'
import { NEWS_DATA } from '../constants/news'
import SEO from '../components/SEO'
import { FaMapMarkerAlt, FaBullseye, FaBriefcase, FaClipboardList, FaBook, FaBalanceScale, FaArrowRight, FaUsers, FaHandshake, FaHeart } from 'react-icons/fa'

function Home() {
  // Obtener las 5 noticias más recientes ordenadas por fecha
  const latestNews = [...NEWS_DATA]
    .sort((a, b) => {
      const dA = new Date(a.isoDate || 0).getTime()
      const dB = new Date(b.isoDate || 0).getTime()
      return dB - dA
    })
    .slice(0, 3)

  return (
    <>
      <SEO 
        title="Asovedra"
        description="Asovedra apoya a iberoamericanos en Pontevedra, Galicia y toda España con asesoría migratoria, legal y laboral. Te ayudamos en trámites y adaptación en España."
        keywords="asovedra, iberoamericanos españa, asociación iberoamericana, apoyo legal, empleo, pontevedra, galicia, inmigración, trámites migratorios"
        canonical="/"
      />
      <main className='flex flex-col items-center justify-center overflow-x-hidden'>
      
      {/* Estadísticas destacadas */}
      <section className='w-full !bg-gradient-to-br !from-[#1B2336] !via-slate-800 !to-slate-900 py-16 lg:py-20'>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            {STATS_ARRAY.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl lg:text-5xl font-bold !text-white mb-3 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-sm lg:text-base font-medium !text-slate-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Últimas Noticias - Rediseñado completamente */}
      <section className='w-full py-20 lg:py-24 bg-gradient-to-b from-white to-slate-50'>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[#1B2336] text-white rounded-full text-sm font-semibold mb-4">
              Actualidad
            </span>
            <h2 className='text-4xl lg:text-5xl font-bold text-slate-900 mb-4'>Últimas Noticias</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 via-blue-600 to-red-600 mx-auto mb-6"></div>
            <p className='text-xl text-slate-600 max-w-3xl mx-auto'>
              Mantente informado sobre nuestras actividades y novedades
            </p>
          </div>
          
          <div className='grid gap-8 mb-12'>
            {latestNews.map((news, index) => (
              <article 
                key={news.url || index}
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
          
          <div className="flex justify-center">
            <Link to="/noticias" className='inline-flex items-center gap-2 px-8 py-4 bg-[#1B2336] text-white rounded-lg font-semibold hover:bg-slate-800 transition-all duration-200 shadow-lg hover:shadow-xl'>
              Ver todas las noticias
              <FaArrowRight className="text-sm" />
            </Link>
          </div>
        </div>
      </section>

      {/* Nuestros Servicios */}
      <section className='w-full py-20 lg:py-24 bg-white'>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-semibold mb-4">
              Lo que hacemos
            </span>
            <h2 className='text-4xl lg:text-5xl font-bold text-slate-900 mb-4'>
              Nuestros Servicios
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 via-blue-600 to-red-600 mx-auto mb-6"></div>
            <p className='text-xl text-slate-600 max-w-3xl mx-auto'>
              Programas especializados de acompañamiento para la comunidad iberoamericana
            </p>
          </div>
          
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12'>
            <ServiceCardModern 
              title="Asesoría Legal" 
              description="Orientación jurídica especializada en temas migratorios y derechos legales."
              icon={<FaBalanceScale />}
            />
            <ServiceCardModern 
              title="Bolsa de Empleo" 
              description="Conectamos profesionales con oportunidades laborales."
              icon={<FaBriefcase />}
            />
            <ServiceCardModern 
              title="Trámites Migratorios" 
              description="Asistencia en procesos de regularización y renovaciones."
              icon={<FaClipboardList />}
            />
            <ServiceCardModern 
              title="Formación y Cursos" 
              description="Programas educativos para el desarrollo profesional."
              icon={<FaBook />}
            />
          </div>

          <div className="relative overflow-hidden rounded-2xl">
            {/* Fondo con gradiente de Venezuela */}
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-blue-600 to-red-600 opacity-10"></div>
            
            <div className="relative bg-white border-2 border-slate-200 rounded-2xl p-8 md:p-12 text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">¿Necesitas ayuda especializada?</h3>
              <p className="mb-8 text-slate-600 max-w-2xl mx-auto text-lg">
                Nuestro equipo está aquí para brindarte el apoyo que necesitas
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/servicios" className='inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#1B2336] text-white rounded-lg font-semibold hover:bg-slate-800 transition-all duration-200 shadow-lg hover:shadow-xl'>
                  Ver todos los servicios
                  <FaArrowRight className="text-sm" />
                </Link>
                <Link to="/contacto" className='inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border-2 border-[#1B2336] text-[#1B2336] rounded-lg font-semibold hover:bg-[#1B2336] hover:text-white transition-all duration-200'>
                  Contactar
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Nosotros - Rediseñado */}
      <section className="w-full py-20 lg:py-24 bg-slate-50 relative overflow-hidden">
        {/* Puntos decorativos de fondo */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-20 right-1/4 w-3 h-3 bg-yellow-400/40 rounded-full"></div>
          <div className="absolute bottom-32 left-1/3 w-4 h-4 bg-blue-600/40 rounded-full"></div>
          <div className="absolute top-1/2 right-1/3 w-2.5 h-2.5 bg-red-600/40 rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[#1B2336] text-white rounded-full text-sm font-semibold mb-4">
              Quiénes somos
            </span>
            <h2 className='text-4xl lg:text-5xl font-bold text-slate-900 mb-4'>Sobre Nosotros</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 via-blue-600 to-red-600 mx-auto mb-6"></div>
            <p className='text-xl text-slate-600 max-w-3xl mx-auto'>
              Comprometidos con el bienestar de la comunidad iberoamericana
            </p>
          </div>

          {/* Grid de Misión, Visión e Historia */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Misión */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FaMapMarkerAlt className="text-2xl text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 ml-4">Nuestra Misión</h3>
              </div>
              <p className='text-slate-700 leading-relaxed'>
                Promover la integración social, laboral y cultural de la comunidad venezolana e iberoamericana en Galicia, a través del acompañamiento, la orientación y la cooperación solidaria.
              </p>
            </div>
            
            {/* Visión */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FaBullseye className="text-2xl text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 ml-4">Nuestra Visión</h3>
              </div>
              <p className='text-slate-700 leading-relaxed'>
                Ser la organización de referencia para la comunidad iberoamericana en España, reconocida por la excelencia de nuestros servicios y el impacto positivo en cada vida.
              </p>
            </div>
          </div>

          {/* Historia con Imagen */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-slate-200">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-80 md:h-auto">
                <img
                  src="https://www.diariodepontevedra.es/asset/thumbnail,1280,720,center,center/media/diariodepontevedra/images/2025/07/22/2025072215310571656.jpg"
                  alt="Historia de Asovedra"
                  className='w-full h-full object-cover'
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Nuestra Historia</h3>
                <div className="w-16 h-1 bg-gradient-to-r from-yellow-400 via-blue-600 to-red-600 mb-6"></div>
                <p className='text-slate-700 leading-relaxed text-lg mb-6'>
                  Fundada en 2018, Asovedra nació de la necesidad de crear un espacio de apoyo para los venezolanos que llegaban a España buscando nuevas oportunidades.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <span className="text-slate-700 text-base">Fundada en 2018</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <span className="text-slate-700 text-base">Más de 4000 personas atendidas</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <span className="text-slate-700 text-base">Presencia en toda Galicia</span>
                  </li>
                </ul>
                <Link to="/sobre-nosotros" className='inline-flex items-center gap-2 text-[#1B2336] font-semibold hover:text-blue-600 transition-colors group self-start'>
                  Conoce más sobre nosotros
                  <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plan de Igualdad - Rediseñado */}
      <section className="w-full py-20 lg:py-24 bg-gradient-to-br from-purple-600 via-pink-500 to-purple-700 relative overflow-hidden">
        {/* Patrón decorativo */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white rounded-full"></div>
            <div className="absolute bottom-20 right-20 w-40 h-40 border-2 border-white rounded-lg rotate-45"></div>
            <div className="absolute top-1/2 left-1/3 w-24 h-24 border border-white rounded-full"></div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
            <FaBalanceScale className="text-5xl text-white" />
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Plan de Igualdad de Género 2025-2026
          </h2>
          <p className="text-xl text-white/95 mb-10 max-w-2xl mx-auto leading-relaxed">
            Conoce nuestro compromiso con la igualdad de oportunidades y la equidad de género en nuestra organización
          </p>
          <Link 
            to="/plan-de-igualdad" 
            className="inline-flex items-center gap-2 px-10 py-5 bg-white text-purple-700 rounded-xl font-bold text-lg hover:bg-slate-50 hover:scale-105 transition-all duration-200 shadow-2xl"
          >
            Ver Plan de Igualdad
            <FaArrowRight className="text-base" />
          </Link>
        </div>
      </section>

      {/* CTA Final - Rediseñado */}
      <section className='w-full bg-gradient-to-br from-[#1B2336] via-slate-800 to-slate-900 py-20 lg:py-24 relative overflow-hidden'>
        {/* Puntos decorativos */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-yellow-400/30 rounded-full"></div>
          <div className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-blue-500/30 rounded-full"></div>
          <div className="absolute top-2/3 right-1/4 w-2.5 h-2.5 bg-red-500/30 rounded-full"></div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="mb-8">
            <div className="w-16 h-1 bg-gradient-to-r from-yellow-400 via-blue-500 to-red-600 mx-auto mb-6"></div>
            <h2 className='text-3xl lg:text-5xl font-bold mb-4 leading-tight' style={{color: '#ffffff !important'}}>¿Necesitas más información?</h2>
            <p className='text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed' style={{color: '#cbd5e1 !important'}}>
              Nuestro equipo está disponible para responder tus preguntas y brindarte la orientación que necesitas
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link to="/contacto" className='inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#1B2336] text-white rounded-lg font-semibold hover:bg-slate-800 transition-all duration-200 shadow-lg hover:shadow-xl'>
              Contactar ahora
              <FaArrowRight className="text-sm" />
            </Link>
            <a href="tel:+34604016113" className='inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border-2 border-[#1B2336] text-[#1B2336] rounded-lg font-semibold hover:bg-[#1B2336] hover:text-white transition-all duration-200'>
              Llamar: 604 016 113
            </a>
          </div>
        </div>
      </section>
    </main>
    </>
  )
}

export default Home
