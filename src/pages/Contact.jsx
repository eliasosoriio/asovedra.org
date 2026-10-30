import React from 'react'
import { LuBus, LuCar, LuClock, LuFootprints, LuMail, LuMapPin, LuPhone } from 'react-icons/lu'
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

        <section className="mx-auto grid max-w-[1440px] gap-5 px-6 pb-20 lg:grid-cols-[1fr_1.15fr] lg:px-16">
          <Card tone="navy" className="p-8 sm:p-10">
            <h2 className="text-2xl font-medium tracking-[-0.02em] sm:text-3xl">Habla con nosotros</h2>
            <p className="mt-3 text-[17px] leading-relaxed text-[#c9d3f0]">
              La forma más rápida de contactar con un miembro del equipo es llamando o escribiendo directamente.
              Te orientaremos y, si corresponde, coordinaremos una cita presencial con el profesional adecuado.
            </p>
            <ol className="mt-7 space-y-4">
              {steps.map((step, index) => (
                <li key={step} className="flex gap-3 text-[15px] text-[#dfe6fa]">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-yellow text-sm font-medium text-ink">
                    {index + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={`tel:${CONTACT.phone}`} variant="yellow">Llamar: {CONTACT.phoneDisplay}</Button>
              <Button href={`mailto:${CONTACT.email}`} variant="white">Escribir a {CONTACT.email}</Button>
            </div>
          </Card>

          <div className="grid gap-5">
            <div className="grid gap-5 sm:grid-cols-2">
              {contactCards.map((item) => {
                const Icon = item.icon
                return (
                  <Card key={item.title} className="p-6">
                    <span className="grid h-11 w-11 place-items-center rounded-2xl bg-pill-blue text-navy">
                      <Icon aria-hidden="true" className="h-5 w-5" />
                    </span>
                    <h3 className="mt-4 text-lg font-bold text-ink">{item.title}</h3>
                    <div className="mt-1 space-y-0.5 text-[15px] text-muted">
                      {item.details.map((detail) => <p key={detail}>{detail}</p>)}
                    </div>
                    {item.link && (
                      <a
                        href={item.link}
                        className="mt-3 inline-block text-sm font-bold text-navy hover:underline"
                        {...(item.link.startsWith('https:') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      >
                        {item.action}
                      </a>
                    )}
                  </Card>
                )
              })}
            </div>

            <Card className="p-6 sm:p-7">
              <h3 className="text-lg font-bold text-ink">Cómo llegar</h3>
              <ul className="mt-4 grid gap-4 sm:grid-cols-3">
                {arrival.map((item) => {
                  const Icon = item.icon
                  return (
                    <li key={item.title} className="flex gap-3">
                      <Icon aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red" />
                      <div>
                        <p className="font-semibold text-ink">{item.title}</p>
                        <p className="text-sm text-muted">{item.text}</p>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </Card>
          </div>
        </section>

        <section className="bg-sand py-20">
          <div className="mx-auto max-w-[1440px] px-6 lg:px-16">
            <SectionHeader
              align="center"
              pill="Dudas"
              pillTone="white"
              title="Preguntas frecuentes"
              subtitle="Respuestas rápidas a algunas dudas habituales antes de contactarnos."
            />
            <div className="mx-auto mt-10 grid max-w-5xl gap-5 md:grid-cols-2">
              {faqItems.map((item) => (
                <Card key={item.question} className="p-7">
                  <h3 className="text-lg font-bold text-ink">{item.question}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted">{item.answer}</p>
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
