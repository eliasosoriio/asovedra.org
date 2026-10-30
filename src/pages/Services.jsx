import React from 'react'
import { Link } from 'react-router-dom'
import {
  LuBookOpen,
  LuBrain,
  LuBriefcase,
  LuCheck,
  LuChevronRight,
  LuClipboardList,
  LuDrama,
  LuGraduationCap,
  LuHandshake,
  LuScale,
  LuTriangleAlert,
  LuUsers
} from 'react-icons/lu'
import SEO from '../components/SEO'
import InternalPageHero from '../components/layout/InternalPageHero'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import SectionHeader from '../components/ui/SectionHeader'
import { CONTACT } from '../constants/site'

// Enlace secundario al estilo de la portada: texto navy con chevron
const LINK_CLASS = 'group inline-flex items-center gap-1 text-[17px] text-navy hover:underline'

function Services() {
  const services = [
    {
      title: 'Orientación Legal y Derivación',
      description: 'Ofrecemos orientación general en temas migratorios, documentación y derechos, y derivamos a despachos y entidades especializadas cuando se requiere asesoramiento jurídico formal.',
      icon: LuScale,
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
      icon: LuBriefcase,
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
      icon: LuClipboardList,
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
      icon: LuBookOpen,
      details: [
        'Cursos de idiomas',
        'Formación profesional especializada',
        'Talleres de emprendimiento',
        'Programas de capacitación digital',
        'Certificaciones profesionales'
      ]
    }
  ]

  // `emergency` pinta el icono en rojo: es el único contenido de urgencia de la página
  const additionalServices = [
    { title: 'Apoyo Psicológico', description: 'Atención psicológica especializada en procesos migratorios y adaptación cultural.', icon: LuBrain },
    { title: 'Orientación Familiar', description: 'Apoyo integral para familias en procesos de reunificación y adaptación.', icon: LuUsers },
    { title: 'Programas Juveniles', description: 'Actividades y programas especiales dirigidos a jóvenes iberoamericanos.', icon: LuGraduationCap },
    { title: 'Red de Voluntarios', description: 'Programa de voluntariado para fortalecer la comunidad y brindar apoyo mutuo.', icon: LuHandshake },
    { title: 'Eventos Culturales', description: 'Organización de eventos para mantener y compartir la cultura iberoamericana.', icon: LuDrama },
    { title: 'Asistencia de Emergencia', description: 'Apoyo inmediato en situaciones de crisis o necesidades urgentes.', icon: LuTriangleAlert, emergency: true }
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

      <main className="min-h-screen">
        <InternalPageHero
          eyebrow="Servicios"
          title="Acompañamiento en cada etapa del proceso"
          description="Recursos, orientación y programas diseñados para responder a necesidades reales con una atención clara y cercana."
        />

        {/* Servicios principales: primera sección blanca, la cabecera ya deja el margen superior */}
        <section className="mx-auto max-w-[1440px] px-6 pb-24 lg:px-16 lg:pb-32">
          <SectionHeader pill="Servicios principales" title="Lo que hacemos." />
          <div className="mt-14 space-y-5 lg:mt-16">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <Card key={service.title} className="grid gap-8 p-8 lg:grid-cols-[1.1fr_1fr] lg:gap-12 lg:p-9">
                  <div>
                    <Icon aria-hidden="true" className="h-9 w-9 text-navy" />
                    <h3 className="mt-8 text-[24px] font-semibold tracking-[-0.01em] text-ink">{service.title}</h3>
                    <p className="mt-3 text-[17px] leading-snug text-muted">{service.description}</p>
                    <Link to="/contacto" className={`mt-6 ${LINK_CLASS}`}>
                      Solicitar información
                      <LuChevronRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                  <div className="rounded-[22px] bg-white p-7">
                    <h4 className="text-[17px] font-semibold text-ink">¿Qué incluye?</h4>
                    <ul className="mt-4 space-y-3">
                      {service.details.map((detail) => (
                        <li key={detail} className="flex gap-3 text-[17px] leading-snug text-muted">
                          <LuCheck aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-navy" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              )
            })}
          </div>
        </section>

        <section className="bg-cloud py-24 lg:py-32">
          <div className="mx-auto max-w-[1440px] px-6 lg:px-16">
            <SectionHeader
              pill="Además"
              title="Servicios adicionales"
              subtitle="Programas complementarios que refuerzan nuestro acompañamiento integral."
            />
            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
              {additionalServices.map((service) => {
                const Icon = service.icon
                return (
                  <Card key={service.title} tone="white" className="flex flex-col p-8 lg:p-9">
                    <Icon aria-hidden="true" className={`h-9 w-9 ${service.emergency ? 'text-red' : 'text-navy'}`} />
                    <h3 className="mt-8 text-[24px] font-semibold tracking-[-0.01em] text-ink">{service.title}</h3>
                    <p className="mt-3 text-[17px] leading-snug text-muted">{service.description}</p>
                    <Link to="/contacto" className={`mt-auto self-start pt-6 ${LINK_CLASS}`}>
                      Más información
                      <LuChevronRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Cómo funciona y llamada final */}
        <section className="mx-auto max-w-[1440px] px-6 py-24 lg:px-16 lg:py-32">
          <SectionHeader title="¿Cómo funciona?" />
          <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <li key={step} className="rounded-[28px] bg-cloud p-8 lg:p-9">
                <p className="text-[15px] font-semibold text-muted">Paso {index + 1}</p>
                <h3 className="mt-1 text-[24px] font-semibold leading-tight tracking-[-0.01em] text-ink">{step}</h3>
              </li>
            ))}
          </ol>

          <Card as="div" tone="navy" className="mt-16 px-8 py-14 text-center lg:mt-20 lg:px-16 lg:py-20">
            <SectionHeader
              onDark
              align="center"
              title="¿Necesitas orientación?"
              subtitle="Nuestro equipo puede ayudarte a identificar el servicio adecuado y explicarte cómo empezar el proceso."
            />
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Button to="/contacto" variant="yellow">Contactar ahora</Button>
              <Button href={`tel:${CONTACT.phone}`} variant="white">Llamar: {CONTACT.phoneDisplay}</Button>
            </div>
          </Card>
        </section>
      </main>
    </>
  )
}

export default Services
