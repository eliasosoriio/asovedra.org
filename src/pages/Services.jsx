import React from 'react'
import ServiceCardModern from '../components/ui/ServiceCardModern'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { FaBalanceScale, FaBriefcase, FaClipboardList, FaBook, FaBrain, FaUsers, FaGraduationCap, FaHandshake, FaTheaterMasks, FaExclamationTriangle, FaArrowRight } from 'react-icons/fa'

function Services() {
  const services = [
    {
      title: "Asesoría Legal Migratoria",
      description: "Orientación jurídica especializada en temas migratorios, documentación y derechos legales para iberoamericanos en España.",
      icon: <FaBalanceScale />,
      color: "primary-blue",
      details: [
        "Orientación sobre estatus migratorio",
        "Tramitación de documentos",
        "Asesoramiento en procesos de regularización",
        "Orientación sobre derechos y deberes",
        "Representación legal en casos complejos"
      ]
    },
    {
      title: "Bolsa de Empleo",
      description: "Conectamos profesionales con oportunidades laborales acordes a su experiencia y formación en el mercado gallego principalmente.",
      icon: <FaBriefcase />,
      color: "primary-gray",
      details: [
        "Base de datos de ofertas laborales",
        "Orientación profesional personalizada",
        "Talleres de búsqueda de empleo",
        "Preparación para entrevistas",
        "Red de contactos empresariales"
      ]
    },
    {
      title: "Trámites Migratorios",
      description: "Asistencia integral en procesos de regularización, renovaciones, nacionalización y otros trámites oficiales, con el apoyo de profesionales de bufete colaboradores que nos asesoran en casos complejos.",
      icon: <FaClipboardList />,
      color: "primary-dark",
      details: [
        "Renovación de permisos de residencia",
        "Procesos de nacionalización",
        "Reagrupación familiar",
        "Tramitación de NIE y TIE",
        "Gestión de autorizaciones de trabajo"
      ]
    },
    {
      title: "Formación y Cursos",
      description: "Programas educativos para el desarrollo profesional, la integración laboral y el crecimiento personal.",
      icon: <FaBook />,
      color: "primary-light",
      details: [
        "Cursos de idiomas (español, gallego)",
        "Formación profesional especializada",
        "Talleres de emprendimiento",
        "Programas de capacitación digital",
        "Certificaciones profesionales"
      ]
    }
  ]

  const additionalServices = [
    {
      title: "Apoyo Psicológico",
      description: "Atención psicológica especializada en procesos migratorios y adaptación cultural.",
      icon: <FaBrain />
    },
    {
      title: "Orientación Familiar",
      description: "Apoyo integral para familias en procesos de reunificación y adaptación.",
      icon: <FaUsers />
    },
    {
      title: "Programas Juveniles",
      description: "Actividades y programas especiales dirigidos a jóvenes iberoamericanos.",
      icon: <FaGraduationCap />
    },
    {
      title: "Red de Voluntarios",
      description: "Programa de voluntariado para fortalecer la comunidad y brindar apoyo mutuo.",
      icon: <FaHandshake />
    },
    {
      title: "Eventos Culturales",
      description: "Organización de eventos para mantener y compartir la cultura iberoamericana.",
      icon: <FaTheaterMasks />
    },
    {
      title: "Asistencia de Emergencia",
      description: "Apoyo inmediato en situaciones de crisis o necesidades urgentes.",
      icon: <FaExclamationTriangle />
    }
  ]

  return (
    <>
      <SEO 
        title="Servicios"
        description="Descubre todos los servicios de Asovedra: asesoría legal migratoria, bolsa de empleo, trámites, formación, apoyo psicológico y más. ¡Contáctanos!"
        keywords="servicios asovedra, asesoría legal migratoria, empleo venezuela, trámites migratorios, formación, apoyo psicológico"
        canonical="/servicios"
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
            Lo que hacemos
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 !text-white">Nuestros Servicios</h1>
          <div className="w-24 h-1 !bg-gradient-to-r !from-yellow-400 !via-blue-600 !to-red-600 mx-auto mb-6"></div>
          <p className="text-xl !text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Ofrecemos una amplia gama de programas de acompañamiento para apoyar a la comunidad iberoamericana en España
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[#1B2336] text-white rounded-full text-sm font-semibold mb-4">
              Servicios Core
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Servicios Principales</h2>
            <div className="w-24 h-1 !bg-gradient-to-r !from-yellow-400 !via-blue-600 !to-red-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nuestros servicios core diseñados para cubrir las necesidades más importantes de nuestra comunidad
            </p>
          </div>

          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={index} className={`flex flex-col sm:flex-row ${index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'} items-center gap-8 sm:gap-12`}>
                <div className="w-full sm:w-1/2">
                  <ServiceCardModern
                    title={service.title}
                    description={service.description}
                    icon={service.icon}
                    color={service.color}
                  />
                </div>
                
                <div className="w-full sm:w-1/2 bg-white rounded-2xl shadow-lg p-6 sm:p-8">
                  <h3 className="text-2xl font-bold text-primary-dark mb-6">¿Qué incluye este servicio?</h3>
                  <ul className="space-y-3">
                    {service.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-primary-blue rounded-full mr-4"></div>
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <Link to="/contacto" className="btn-primary">
                      Solicitar información
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[#1B2336] text-white rounded-full text-sm font-semibold mb-4">
              Más servicios
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Servicios Adicionales</h2>
            <div className="w-24 h-1 !bg-gradient-to-r !from-yellow-400 !via-blue-600 !to-red-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Programas complementarios que enriquecen nuestra oferta de apoyo integral
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow border border-slate-200">
                <div className="text-4xl text-[#1B2336] mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-4">{service.description}</p>
                <Link to="/contacto" className="text-[#1B2336] font-semibold hover:text-blue-600 transition-colors">
                  Más información →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[#1B2336] text-white rounded-full text-sm font-semibold mb-4">
              Proceso
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">¿Cómo funciona?</h2>
            <div className="w-24 h-1 !bg-gradient-to-r !from-yellow-400 !via-blue-600 !to-red-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Un proceso sencillo para acceder a nuestros servicios
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-blue rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-lg font-bold text-primary-dark mb-2">Contacto inicial</h3>
              <p className="text-gray-600 text-sm">Ponte en contacto con nosotros por teléfono, email o presencialmente</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-blue rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-lg font-bold text-primary-dark mb-2">Evaluación</h3>
              <p className="text-gray-600 text-sm">Evaluamos tu situación y necesidades específicas</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-blue rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-lg font-bold text-primary-dark mb-2">Plan personalizado</h3>
              <p className="text-gray-600 text-sm">Diseñamos un plan de acción adaptado a tu caso</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-blue rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-lg font-bold text-primary-dark mb-2">Acompañamiento</h3>
              <p className="text-gray-600 text-sm">Te acompañamos durante todo el proceso hasta alcanzar los objetivos</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing/Fees */}
      <section className="py-20 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[#1B2336] text-white rounded-full text-sm font-semibold mb-4">
              Modalidades
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Programas y Modalidades de Apoyo</h2>
            <div className="w-24 h-1 !bg-gradient-to-r !from-yellow-400 !via-blue-600 !to-red-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Contamos con diversas modalidades de apoyo solidario, asesoría y acompañamiento, pensadas para promover la integración y el bienestar común.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8 text-center">
              <h3 className="text-xl font-bold text-primary-dark mb-4">Atención Básica Comunitaria</h3>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>• Orientación inicial</li>
                <li>• Información básica</li>
                <li>• Eventos comunitarios</li>
                <li>• Apoyo de emergencia</li>
              </ul>
              <Link to="/contacto" className="btn-secondary w-full">
                Acceder ahora
              </Link>
            </div>

            <div className="bg-primary-blue rounded-2xl p-8 text-center text-white relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-primary-dark px-4 py-1 rounded-full text-sm font-bold">
                Más popular
              </div>
              <h3 className="text-xl font-bold mb-4">Acompañamiento Avanzado</h3>
              <ul className="space-y-2 opacity-90 mb-6">
                <li>• Asesoría legal especializada</li>
                <li>• Gestión de trámites</li>
                <li>• Cursos de formación</li>
                <li>• Seguimiento personalizado</li>
              </ul>
              <Link to="tel:+34604016113" className="btn-light w-full">
                Más información
              </Link>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 text-center">
              <h3 className="text-xl font-bold text-primary-dark mb-4">Membresía Solidaria</h3>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>• Todos los servicios incluidos</li>
                <li>• Acceso prioritario</li>
                <li>• Participación en actividades especiales</li>
                <li>• Descuentos en eventos</li>
              </ul>
              <Link to="/contacto" className="btn-secondary w-full">
                Más información
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='w-full bg-gradient-to-br from-[#1B2336] via-slate-800 to-slate-900 py-20 lg:py-24 relative overflow-hidden'>
        {/* Puntos decorativos */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-yellow-400/30 rounded-full"></div>
          <div className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-blue-500/30 rounded-full"></div>
          <div className="absolute top-2/3 right-1/4 w-2.5 h-2.5 bg-red-500/30 rounded-full"></div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="mb-8">
            <div className="w-16 h-1 !bg-gradient-to-r !from-yellow-400 !via-blue-500 !to-red-600 mx-auto mb-6"></div>
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

export default Services

