import React from 'react'
import { Link } from 'react-router-dom'
import ServiceCard from '../components/ui/ServiceCard'
import NewsCard from '../components/ui/NewsCard'
import ServiceCardModern from '../components/ui/ServiceCardModern'
import { STATS_ARRAY } from '../constants/stats'
import { NEWS_DATA } from '../constants/news'
import SEO from '../components/SEO'

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
        description="Asovedra apoya a venezolanos en Pontevedra, Galicia y toda España con asesoría migratoria, legal y laboral. Te ayudamos en trámites y adaptación en España."
        keywords="asovedra, venezolanos españa, asociación venezolana, apoyo legal, empleo venezuela, pontevedra, galicia, inmigración, trámites migratorios"
        canonical="/"
      />
      <main className='flex flex-col items-center justify-center text-center px-3 py-8 gap-10 overflow-x-hidden'>
      <section className='actualidad w-full bg-gray-50 py-8 rounded-lg'>
        <div className="max-w-6xl mx-auto w-full px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className='text-3xl text-primary-dark font-bold'>Últimas Noticias</h2>
            <div className="h-1 w-20 bg-primary-blue rounded"></div>
          </div>
          
          <div className='space-y-4'>
            {latestNews.map((news, index) => (
              <NewsCard 
                key={news.url || index}
                title={news.title}
                image={news.image}
                description={news.description}
                date={news.date}
                source={news.source}
                url={news.url}
              />
            ))}
          </div>
          
          <div className="flex justify-center mt-8">
            <Link to="/noticias" className='btn-primary'>
              Ver todas las noticias
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto w-full px-4">
          <div className="text-center mb-12">
            <h2 className='text-3xl text-primary-dark font-bold mb-4'>Sobre Nosotros</h2>
            <div className="h-1 w-20 bg-primary-blue rounded mx-auto mb-6"></div>
            <p className='text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed'>
              Somos una organización comprometida con el bienestar y la integración exitosa de la comunidad venezolana en España
            </p>
          </div>

          {/* Historia y Misión */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary-blue rounded-full flex items-center justify-center text-white text-xl font-bold">
                    📍
                  </div>
                  <h3 className="text-xl font-bold text-primary-dark ml-4">Nuestra Misión</h3>
                </div>
                <p className='text-gray-700 leading-relaxed'>
                  Brindar apoyo integral y servicios especializados a la comunidad venezolana, facilitando su integración social, laboral y cultural en España, mientras preservamos nuestras raíces y valores.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary-gray rounded-full flex items-center justify-center text-white text-xl font-bold">
                    🎯
                  </div>
                  <h3 className="text-xl font-bold text-primary-dark ml-4">Nuestra Visión</h3>
                </div>
                <p className='text-gray-700 leading-relaxed'>
                  Ser la organización de referencia para la comunidad venezolana en España, reconocida por la excelencia de nuestros servicios y nuestro compromiso con la integración exitosa.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://www.diariodepontevedra.es/asset/thumbnail,1280,720,center,center/media/diariodepontevedra/images/2024/09/15/2024091518564641803.jpg"
                alt="Comunidad Asovedra"
                className='w-full rounded-2xl shadow-xl h-80 object-cover'
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-blue/20 to-transparent rounded-2xl"></div>
            </div>
          </div>

          {/* Estadísticas */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {STATS_ARRAY.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-primary-blue mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Historia */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div className="order-2 md:order-1">
              <img
                src="https://www.diariodepontevedra.es/asset/thumbnail,1280,720,center,center/media/diariodepontevedra/images/2025/07/22/2025072215310571656.jpg"
                alt="Historia de Asovedra"
                className='w-full rounded-2xl shadow-xl h-80 object-cover'
              />
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <h3 className="text-2xl font-bold text-primary-dark">Nuestra Historia</h3>
              <p className='text-gray-700 leading-relaxed'>
                Fundada en 2018, Asovedra nació de la necesidad de crear un espacio de apoyo y orientación para los venezolanos que llegaban a España buscando nuevas oportunidades.
              </p>
              <p className='text-gray-700 leading-relaxed'>
                A lo largo de estos años, hemos crecido hasta convertirnos en un referente en el sector, gracias a nuestro enfoque centrado en las necesidades reales de nuestra comunidad y nuestro equipo de profesionales altamente capacitados.
              </p>
              <div className="flex items-center space-x-4 text-primary-blue">
                <div className="w-2 h-2 bg-primary-blue rounded-full"></div>
                <span className="font-medium">Fundada en 2018</span>
              </div>
              <div className="flex items-center space-x-4 text-primary-blue">
                <div className="w-2 h-2 bg-primary-blue rounded-full"></div>
                <span className="font-medium">Más de 4000 personas atendidas</span>
              </div>
              <div className="flex items-center space-x-4 text-primary-blue">
                <div className="w-2 h-2 bg-primary-blue rounded-full"></div>
                <span className="font-medium">Presencia en toda Galicia</span>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <Link to="/sobre-nosotros" className='btn-primary'>
              Conoce más sobre nosotros
            </Link>
          </div>
        </div>
      </section>

      <section className='servicios w-full py-16 bg-white'>
        <div className="max-w-6xl mx-auto w-full px-4">
          <div className="text-center mb-12">
            <h2 className='text-3xl text-primary-dark font-bold mb-4'>Nuestros Servicios</h2>
            <p className='text-gray-600 max-w-2xl mx-auto'>
              Ofrecemos una amplia gama de servicios especializados para apoyar a la comunidad venezolana en España
            </p>
          </div>
          
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
            <ServiceCardModern 
              title="Asesoría Legal" 
              description="Orientación jurídica especializada en temas migratorios, documentación y derechos legales."
              icon="⚖️"
              color="primary-blue"
            />
            <ServiceCardModern 
              title="Bolsa de Empleo" 
              description="Conectamos profesionales con oportunidades laborales acordes a su experiencia y formación."
              icon="💼"
              color="primary-gray"
            />
            <ServiceCardModern 
              title="Trámites Migratorios" 
              description="Asistencia integral en procesos de regularización, renovaciones y nacionalización, con el apoyo de profesionales de bufete colaboradores."
              icon="📋"
              color="primary-dark"
            />
            <ServiceCardModern 
              title="Formación y Cursos" 
              description="Programas educativos para el desarrollo profesional y la integración laboral."
              icon="📚"
              color="primary-light"
            />
          </div>

          <div className="mt-16 bg-gradient-to-r from-primary-blue to-blue-700 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">¿Necesitas ayuda especializada?</h3>
            <p className="mb-6 opacity-90">
              Nuestro equipo de profesionales está aquí para brindarte el apoyo que necesitas
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/servicios" className='btn-light'>
                Ver todos los servicios
              </Link>
              <Link to="/contacto" className='btn-white-outline'>
                Solicitar consulta
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className='mt-16 bg-gradient-to-br from-primary-light to-blue-50 p-12 rounded-2xl w-full'>
        <div className="max-w-6xl mx-auto w-full text-center">
          <h2 className='text-3xl text-primary-dark font-bold mb-4'>¿Necesitas más información?</h2>
          <p className='text-primary-dark mb-8 text-lg max-w-2xl mx-auto'>
            Nuestro equipo está disponible para responder todas tus preguntas y brindarte la orientación que necesitas
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contacto" className='btn-primary'>
              Contactar ahora
            </Link>
            <span className="text-gray-500">o</span>
            <Link to="tel:+34604016113" className='btn-secondary'>
              Solicitar cita
            </Link>
          </div>
        </div>
      </section>
    </main>
    </>
  )
}

export default Home
