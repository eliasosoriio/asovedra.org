import React from 'react'
import ServiceCardModern from '../components/ui/ServiceCardModern'
import { Header } from '../components/layout/Header'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

function Services() {
  const services = [
    {
      title: "Asesoría Legal Migratoria",
      description: "Orientación jurídica especializada en temas migratorios, documentación y derechos legales para venezolanos en España.",
      icon: "⚖️",
      color: "primary-blue",
      details: [
        "Consultas sobre estatus migratorio",
        "Tramitación de documentos",
        "Asesoramiento en procesos de regularización",
        "Orientación sobre derechos y deberes",
        "Representación legal en casos complejos"
      ]
    },
    {
      title: "Bolsa de Empleo",
      description: "Conectamos profesionales con oportunidades laborales acordes a su experiencia y formación en el mercado español.",
      icon: "💼",
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
      description: "Asistencia integral en procesos de regularización, renovaciones, nacionalización y otros trámites oficiales.",
      icon: "📋",
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
      icon: "📚",
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
      icon: "🧠"
    },
    {
      title: "Orientación Familiar",
      description: "Apoyo integral para familias en procesos de reunificación y adaptación.",
      icon: "👨‍👩‍👧‍👦"
    },
    {
      title: "Programas Juveniles",
      description: "Actividades y programas especiales dirigidos a jóvenes venezolanos.",
      icon: "🎓"
    },
    {
      title: "Red de Voluntarios",
      description: "Programa de voluntariado para fortalecer la comunidad y brindar apoyo mutuo.",
      icon: "🤝"
    },
    {
      title: "Eventos Culturales",
      description: "Organización de eventos para mantener y compartir la cultura venezolana.",
      icon: "🎭"
    },
    {
      title: "Asistencia de Emergencia",
      description: "Apoyo inmediato en situaciones de crisis o necesidades urgentes.",
      icon: "🚨"
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
      <main className='min-h-screen bg-gray-50'>
      {/* Header Section with Navigation */}
      <section className="nav-bg py-6 px-3 sticky top-0 z-50">
        <Header />
        <div className="max-w-6xl mx-auto px-4 text-center text-white pt-12 pb-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nuestros Servicios</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Ofrecemos una amplia gama de servicios especializados para apoyar a la comunidad venezolana en España
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-dark mb-4">Servicios Principales</h2>
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
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-dark mb-4">Servicios Adicionales</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Programas complementarios que enriquecen nuestra oferta de apoyo integral
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-primary-dark mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <button className="text-primary-blue font-medium hover:underline">
                  Más información →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-dark mb-4">¿Cómo funciona?</h2>
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
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-dark mb-4">Modalidades de Servicio</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ofrecemos diferentes modalidades para adaptarnos a tus necesidades y posibilidades
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8 text-center">
              <h3 className="text-xl font-bold text-primary-dark mb-4">Servicios Gratuitos</h3>
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
              <h3 className="text-xl font-bold mb-4">Servicios Premium</h3>
              <ul className="space-y-2 opacity-90 mb-6">
                <li>• Asesoría legal especializada</li>
                <li>• Gestión de trámites</li>
                <li>• Cursos de formación</li>
                <li>• Seguimiento personalizado</li>
              </ul>
              <Link to="tel:+34604016113" className="btn-light w-full">
                Consultar tarifas
              </Link>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 text-center">
              <h3 className="text-xl font-bold text-primary-dark mb-4">Membresía Anual</h3>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li>• Todos los servicios incluidos</li>
                <li>• Descuentos especiales</li>
                <li>• Acceso prioritario</li>
                <li>• Eventos exclusivos</li>
              </ul>
              <Link to="/contacto" className="btn-secondary w-full">
                Más información
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary-light to-blue-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-primary-dark mb-4">
            ¿Necesitas alguno de nuestros servicios?
          </h3>
          <p className="text-gray-700 mb-8 text-lg">
            Nuestro equipo de profesionales está listo para ayudarte. Contáctanos y comencemos a trabajar juntos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="tel:+34604016113" className="btn-primary">
              Solicitar consulta gratuita
            </Link>
            <Link to="/contacto" className="btn-secondary">
              Ver horarios de atención
            </Link>
          </div>
        </div>
      </section>
    </main>
    </>
  )
}

export default Services
