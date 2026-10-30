import React from 'react'
import { LuBus, LuCar, LuChevronRight, LuClock, LuFootprints, LuMail, LuMapPin, LuPhone } from 'react-icons/lu'
import SEO from '../components/SEO'
import InternalPageHero from '../components/layout/InternalPageHero'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import SectionHeader from '../components/ui/SectionHeader'
import { CONTACT } from '../constants/site'

function Contact() {
  const faqItems = [
    {
      question: '¿Cuánto tiempo tardan en responder?',
      answer: 'Normalmente respondemos en un plazo de 24-48 horas laborables. Para situaciones urgentes, recomendamos llamar directamente.'
    },
    {
      question: '¿Los servicios tienen costo?',
      answer: 'Ofrecemos diferentes modalidades de apoyo. La orientación inicial y la información básica forman parte del primer acompañamiento.'
    },
    {
      question: '¿Necesito cita previa?',
      answer: 'Para una atención más personalizada recomendamos solicitar cita, aunque también atendemos según disponibilidad.'
    },
    {
      question: '¿Atienden solo a iberoamericanos?',
      answer: 'Estamos especializados en la comunidad iberoamericana, pero apoyamos a cualquier persona que necesite orientación en migración e integración.'
    }
  ]

  const contactCards = [
    {
      icon: LuMapPin,
      title: 'Dirección',
      details: [CONTACT.address, `${CONTACT.city}, España`],
      action: 'Ver en Google Maps',
      link: 'https://maps.google.com/?q=Rúa+Sor+Lucía+4,+Oficina+50,+36002+Pontevedra'
    },
    {
      icon: LuPhone,
      title: 'Teléfono',
      details: [`+34 ${CONTACT.phoneDisplay}`, 'Llamadas y WhatsApp'],
      action: 'Llamar ahora',
      link: `tel:${CONTACT.phone}`
    },
    {
      icon: LuMail,
      title: 'Email',
      details: [CONTACT.email],
      action: 'Escribir correo',
      link: `mailto:${CONTACT.email}`
    },
    {
      icon: LuClock,
      title: 'Horarios',
      details: [...CONTACT.hours, 'Fin de semana: cerrado']
    }
  ]

  const arrival = [
    { icon: LuCar, title: 'En coche', text: 'Aparcamiento disponible en las proximidades.' },
    { icon: LuBus, title: 'En transporte público', text: 'Líneas de autobús urbano con parada cercana.' },
    { icon: LuFootprints, title: 'A pie', text: 'Centro histórico de Pontevedra, zona peatonal.' }
  ]

  const steps = [
    'Llámanos o escríbenos contándonos brevemente tu situación.',
    'Te orientamos y valoramos qué tipo de apoyo necesitas.',
    'Coordinamos, si es necesario, una cita con el profesional más adecuado.'
  ]

  return (
    <>
      <SEO
        title="Contacto"
        description="Contacta con Asovedra para recibir apoyo y asesoría. Teléfono: +34 604 016 113. Email: info@asovedra.org. Oficina en Pontevedra, España."
        keywords="contacto asovedra, teléfono asovedra, email asovedra, oficina pontevedra, consulta gratuita, asesoría legal"
        canonical="/contacto"
      />

      <main className="min-h-screen">
        <InternalPageHero
          eyebrow="Contacto"
          title="Estamos aquí para ayudarte"
          description="Respondemos consultas, orientamos procesos y facilitamos el acceso a los servicios de Asovedra."
        />

        {/* Primera sección blanca: la cabecera ya deja el margen superior */}
        <section className="mx-auto max-w-[1440px] px-6 pb-24 lg:px-16 lg:pb-32">
          <SectionHeader
            title="Habla con nosotros"
            subtitle="La forma más rápida de contactar con un miembro del equipo es llamando o escribiendo directamente. Te orientaremos y, si corresponde, coordinaremos una cita presencial con el profesional adecuado."
          />

          <div className="mt-14 grid gap-5 lg:mt-16 lg:grid-cols-[1fr_1.15fr]">
            {/* Pasos y acción principal */}
            <Card as="div" tone="navy" className="flex flex-col p-8 lg:p-9">
              <ol className="space-y-6">
                {steps.map((step, index) => (
                  <li key={step} className="flex gap-4">
                    <span aria-hidden="true" className="w-6 shrink-0 text-[24px] font-semibold leading-none tracking-[-0.02em] text-yellow">
                      {index + 1}
                    </span>
                    <span className="text-[17px] leading-snug text-white">{step}</span>
                  </li>
                ))}
              </ol>
              <div className="mt-auto flex flex-wrap gap-3 pt-10">
                <Button href={`tel:${CONTACT.phone}`} variant="yellow">Llamar: {CONTACT.phoneDisplay}</Button>
                <Button href={`mailto:${CONTACT.email}`} variant="white">Escribir a {CONTACT.email}</Button>
              </div>
            </Card>

            <div className="grid gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                {contactCards.map((item) => {
                  const Icon = item.icon
                  return (
                    <Card key={item.title} className="p-8 lg:p-9">
                      <Icon aria-hidden="true" className="h-9 w-9 text-navy" />
                      <h3 className="mt-8 text-[22px] font-semibold tracking-[-0.01em] text-ink">{item.title}</h3>
                      <div className="mt-2 space-y-0.5 text-[17px] leading-snug text-muted">
                        {item.details.map((detail) => <p key={detail}>{detail}</p>)}
                      </div>
                      {item.link && (
                        <a
                          href={item.link}
                          className="group mt-4 inline-flex items-center gap-1 text-[17px] text-navy hover:underline"
                          {...(item.link.startsWith('https:') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                        >
                          {item.action}
                          <LuChevronRight aria-hidden="true" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                        </a>
                      )}
                    </Card>
                  )
                })}
              </div>

              <Card className="p-8 lg:p-9">
                <h3 className="text-[22px] font-semibold tracking-[-0.01em] text-ink">Cómo llegar</h3>
                <ul className="mt-6 grid gap-6 sm:grid-cols-3">
                  {arrival.map((item) => {
                    const Icon = item.icon
                    return (
                      <li key={item.title}>
                        <Icon aria-hidden="true" className="h-7 w-7 text-navy" />
                        <p className="mt-3 text-[17px] font-semibold text-ink">{item.title}</p>
                        <p className="mt-1 text-[15px] leading-snug text-muted">{item.text}</p>
                      </li>
                    )
                  })}
                </ul>
              </Card>
            </div>
          </div>
        </section>

        <section className="bg-cloud py-24 lg:py-32">
          <div className="mx-auto max-w-[1440px] px-6 lg:px-16">
            <SectionHeader
              align="center"
              pill="Dudas"
              title="Preguntas frecuentes"
              subtitle="Respuestas rápidas a algunas dudas habituales antes de contactarnos."
            />
            <div className="mt-14 grid gap-5 md:grid-cols-2 lg:mt-16">
              {faqItems.map((item) => (
                <Card key={item.question} tone="white" className="p-8 lg:p-9">
                  <h3 className="text-[22px] font-semibold tracking-[-0.01em] text-ink">{item.question}</h3>
                  <p className="mt-3 text-[17px] leading-snug text-muted">{item.answer}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Contact
