import React from 'react'
import { Link } from 'react-router-dom'
import {
  LuArrowRight,
  LuBookOpen,
  LuBrain,
  LuBriefcase,
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

function Services() {
  const services = [
    {
      title: 'Orientación Legal y Derivación',
      description: 'Ofrecemos orientación general en temas migratorios, documentación y derechos, y derivamos a despachos y entidades especializadas cuando se requiere asesoramiento jurídico formal.',
      icon: LuScale,
      tile: 'bg-pill-blue text-navy',
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
      tile: 'bg-pill-red text-[#a10a22]',
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
      tile: 'bg-pill-yellow text-[#7a5a00]',
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
      tile: 'bg-[#EAF6EE] text-[#17663a]',
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
    { title: 'Apoyo Psicológico', description: 'Atención psicológica especializada en procesos migratorios y adaptación cultural.', icon: LuBrain },
    { title: 'Orientación Familiar', description: 'Apoyo integral para familias en procesos de reunificación y adaptación.', icon: LuUsers },
    { title: 'Programas Juveniles', description: 'Actividades y programas especiales dirigidos a jóvenes iberoamericanos.', icon: LuGraduationCap },
    { title: 'Red de Voluntarios', description: 'Programa de voluntariado para fortalecer la comunidad y brindar apoyo mutuo.', icon: LuHandshake },
    { title: 'Eventos Culturales', description: 'Organización de eventos para mantener y compartir la cultura iberoamericana.', icon: LuDrama },
    { title: 'Asistencia de Emergencia', description: 'Apoyo inmediato en situaciones de crisis o necesidades urgentes.', icon: LuTriangleAlert }
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

        <section className="mx-auto max-w-[1440px] space-y-5 px-6 pb-20 lg:px-16">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Card key={service.title} className="grid gap-8 p-7 sm:p-10 lg:grid-cols-[1.1fr_1fr] lg:gap-12">
                <div>
                  <span className={`grid h-14 w-14 place-items-center rounded-2xl ${service.tile}`}>
                    <Icon aria-hidden="true" className="h-7 w-7" />
                  </span>
                  <h2 className="mt-6 text-2xl font-medium tracking-[-0.02em] text-ink sm:text-3xl">{service.title}</h2>
                  <p className="mt-3 text-[17px] leading-relaxed text-muted">{service.description}</p>
                  <Link to="/contacto" className="mt-6 inline-flex items-center gap-2 font-bold text-navy hover:underline">
                    Solicitar información
                    <LuArrowRight aria-hidden="true" />
                  </Link>
                </div>
                <div className="rounded-[22px] bg-cream p-6 sm:p-7">
                  <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-muted">¿Qué incluye?</h3>
                  <ul className="mt-4 space-y-3">
                    {service.details.map((detail) => (
                      <li key={detail} className="flex gap-3 text-[15px] text-body">
                        <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-yellow"></span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            )
          })}
        </section>

        <section className="bg-sand py-20">
          <div className="mx-auto max-w-[1440px] px-6 lg:px-16">
            <SectionHeader
              pill="Además"
              pillTone="white"
              title="Servicios adicionales"
              subtitle="Programas complementarios que refuerzan nuestro acompañamiento integral."
            />
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {additionalServices.map((service) => {
                const Icon = service.icon
                return (
                  <Card key={service.title} className="p-7">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-pill-blue text-navy">
                      <Icon aria-hidden="true" className="h-6 w-6" />
                    </span>
                    <h3 className="mt-5 text-xl font-bold text-ink">{service.title}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-muted">{service.description}</p>
                    <Link to="/contacto" className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-navy hover:underline">
                      Más información
                      <LuArrowRight aria-hidden="true" />
                    </Link>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-[1440px] gap-5 px-6 py-20 lg:grid-cols-[1.4fr_1fr] lg:px-16">
          <Card className="p-8 sm:p-10">
            <h2 className="text-2xl font-medium tracking-[-0.02em] text-ink sm:text-3xl">¿Cómo funciona?</h2>
            <ol className="mt-8 grid gap-5 sm:grid-cols-2">
              {processSteps.map((step, index) => (
                <li key={step} className="flex items-center gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-yellow text-lg font-medium text-ink">
                    {index + 1}
                  </span>
                  <span className="text-lg font-bold text-ink">{step}</span>
                </li>
              ))}
            </ol>
          </Card>
          <Card tone="navy" className="p-8 sm:p-10">
            <h2 className="text-2xl font-medium tracking-[-0.02em] sm:text-3xl">¿Necesitas orientación?</h2>
            <p className="mt-3 text-[17px] leading-relaxed text-[#c9d3f0]">
              Nuestro equipo puede ayudarte a identificar el servicio adecuado y explicarte cómo empezar el proceso.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
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
