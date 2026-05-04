import React from 'react'
import { Link } from 'react-router-dom'
import {
  FaArrowRight,
  FaBalanceScale,
  FaBook,
  FaBrain,
  FaBriefcase,
  FaClipboardList,
  FaExclamationTriangle,
  FaGraduationCap,
  FaHandshake,
  FaTheaterMasks,
  FaUsers
} from 'react-icons/fa'
import SEO from '../components/SEO'
import ContentSurface from '../components/layout/ContentSurface'
import InternalPageHero from '../components/layout/InternalPageHero'

function Services() {
  const services = [
    {
      title: 'Orientación Legal y Derivación',
      description: 'Ofrecemos orientación general en temas migratorios, documentación y derechos, y derivamos a despachos y entidades especializadas cuando se requiere asesoramiento jurídico formal.',
      icon: <FaBalanceScale />,
      details: [
        'Orientación general sobre estatus migratorio',
        'Acompañamiento en la preparación de documentación',
        'Información sobre procesos de regularización',
        'Orientación sobre derechos y deberes',
        'Derivación a profesionales y entidades especializadas'
      ]
    },
    {
      title: 'Bolsa de Empleo',
      description: 'Conectamos profesionales con oportunidades laborales acordes a su experiencia y formación en el mercado gallego.',
      icon: <FaBriefcase />,
      details: [
        'Base de datos de ofertas laborales',
        'Orientación profesional personalizada',
        'Talleres de búsqueda de empleo',
        'Preparación para entrevistas',
        'Red de contactos empresariales'
      ]
    },
    {
      title: 'Trámites Migratorios',
      description: 'Asistencia integral en procesos de regularización, renovaciones, nacionalización y otros trámites oficiales.',
      icon: <FaClipboardList />,
      details: [
        'Renovación de permisos de residencia',
        'Procesos de nacionalización',
        'Reagrupación familiar',
        'Tramitación de NIE y TIE',
        'Gestión de autorizaciones de trabajo'
      ]
    },
    {
      title: 'Formación y Cursos',
      description: 'Programas educativos para el desarrollo profesional, la integración laboral y el crecimiento personal.',
      icon: <FaBook />,
      details: [
        'Cursos de idiomas',
        'Formación profesional especializada',
        'Talleres de emprendimiento',
        'Programas de capacitación digital',
        'Certificaciones profesionales'
      ]
    }
  ]

  const additionalServices = [
    { title: 'Apoyo Psicológico', description: 'Atención psicológica especializada en procesos migratorios y adaptación cultural.', icon: <FaBrain /> },
    { title: 'Orientación Familiar', description: 'Apoyo integral para familias en procesos de reunificación y adaptación.', icon: <FaUsers /> },
    { title: 'Programas Juveniles', description: 'Actividades y programas especiales dirigidos a jóvenes iberoamericanos.', icon: <FaGraduationCap /> },
    { title: 'Red de Voluntarios', description: 'Programa de voluntariado para fortalecer la comunidad y brindar apoyo mutuo.', icon: <FaHandshake /> },
    { title: 'Eventos Culturales', description: 'Organización de eventos para mantener y compartir la cultura iberoamericana.', icon: <FaTheaterMasks /> },
    { title: 'Asistencia de Emergencia', description: 'Apoyo inmediato en situaciones de crisis o necesidades urgentes.', icon: <FaExclamationTriangle /> }
  ]

  const processSteps = [
    'Contacto inicial',
    'Evaluación de necesidades',
    'Plan personalizado',
    'Acompañamiento y seguimiento'
  ]

  return (
    <>
      <SEO
        title="Servicios"
        description="Descubre todos los servicios de Asovedra: asesoría legal migratoria, bolsa de empleo, trámites, formación, apoyo psicológico y más. ¡Contáctanos!"
        keywords="servicios asovedra, asesoría legal migratoria, empleo venezuela, trámites migratorios, formación, apoyo psicológico"
        canonical="/servicios"
      />

      <main className="min-h-screen bg-[linear-gradient(180deg,#020617_0%,#0f172a_38%,#111827_100%)] pt-24 text-white">
        <InternalPageHero
          eyebrow="Servicios"
          title="Acompañamiento en cada etapa del proceso"
          description="Recursos, orientación y programas diseñados para responder a necesidades reales con una atención clara y cercana."
        />

        <section className="px-4 pb-20 lg:pb-24">
          <div className="mx-auto max-w-7xl space-y-6">
            {services.map((service, index) => (
              <div key={service.title} className={`grid gap-6 lg:grid-cols-2 ${index % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
                <ContentSurface className="p-6 sm:p-8">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/[0.08] text-2xl text-blue-300">
                    {service.icon}
                  </div>
                  <h2 className="mt-5 text-2xl font-bold text-white lg:text-3xl">{service.title}</h2>
                  <p className="mt-4 text-base leading-7 text-slate-300">{service.description}</p>
                  <Link
                    to="/contacto"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors duration-200 hover:text-blue-300"
                  >
                    Solicitar información
                    <FaArrowRight className="text-xs" />
                  </Link>
                </ContentSurface>

                <ContentSurface className="p-6 sm:p-8">
                  <h3 className="text-xl font-bold text-white">¿Qué incluye este servicio?</h3>
                  <ul className="mt-5 grid gap-3">
                    {service.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-3 rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3 text-sm leading-6 text-slate-300">
                        <span className="mt-2 h-2 w-2 rounded-full bg-blue-400"></span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </ContentSurface>
              </div>
            ))}
          </div>
        </section>

        <section className="px-4 pb-20 lg:pb-24">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <h2 className="text-3xl font-bold text-white lg:text-4xl">Servicios adicionales</h2>
              <p className="mt-4 text-base leading-7 text-slate-300 lg:text-lg">
                Programas complementarios que refuerzan nuestro acompañamiento integral.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {additionalServices.map((service) => (
                <ContentSurface key={service.title} className="p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/[0.08] text-xl text-blue-300">
                    {service.icon}
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-white">{service.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{service.description}</p>
                  <Link to="/contacto" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-blue-300">
                    Más información
                    <FaArrowRight className="text-xs" />
                  </Link>
                </ContentSurface>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 pb-20 lg:pb-24">
          <div className="mx-auto max-w-7xl grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <ContentSurface className="p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-white lg:text-3xl">¿Cómo funciona?</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {processSteps.map((step, index) => (
                  <div key={step} className="rounded-2xl border border-white/8 bg-white/[0.03] p-5 text-left">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-700 text-sm font-bold text-white">
                      {index + 1}
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-white">{step}</h3>
                  </div>
                ))}
              </div>
            </ContentSurface>

            <ContentSurface className="p-6 text-center sm:p-8 lg:p-10">
              <h2 className="text-2xl font-bold text-white lg:text-3xl">¿Necesitas orientación?</h2>
              <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-300 lg:text-lg">
                Nuestro equipo puede ayudarte a identificar el servicio adecuado y explicarte cómo empezar el proceso.
              </p>
              <div className="mt-6 flex flex-col justify-center gap-4 sm:flex-row">
                <Link
                  to="/contacto"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 text-sm font-semibold text-slate-950 transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-100"
                >
                  Contactar ahora
                  <FaArrowRight className="text-sm" />
                </Link>
                <a
                  href="tel:+34604016113"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/14 bg-white/[0.05] px-8 py-4 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/[0.08]"
                >
                  Llamar: 604 016 113
                </a>
              </div>
            </ContentSurface>
          </div>
        </section>
      </main>
    </>
  )
}

export default Services
