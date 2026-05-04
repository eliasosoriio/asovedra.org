import React from 'react'
import { Link } from 'react-router-dom'
import {
  FaBus,
  FaCar,
  FaClock,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaWalking
} from 'react-icons/fa'
import SEO from '../components/SEO'
import ContentSurface from '../components/layout/ContentSurface'
import InternalPageHero from '../components/layout/InternalPageHero'

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
      icon: <FaMapMarkerAlt />,
      title: 'Dirección',
      details: ['Rúa Sor Lucía 4, Oficina 50', '36002 Pontevedra, España'],
      action: 'Ver en Google Maps',
      link: 'https://maps.google.com/?q=Rúa+Sor+Lucía+4,+Oficina+50,+36002+Pontevedra'
    },
    {
      icon: <FaPhone />,
      title: 'Teléfono',
      details: ['+34 604 016 113', 'Llamadas y WhatsApp'],
      action: 'Llamar ahora',
      link: 'tel:+34604016113'
    },
    {
      icon: <FaEnvelope />,
      title: 'Email',
      details: ['info@asovedra.org'],
      action: 'Escribir correo',
      link: 'mailto:info@asovedra.org'
    },
    {
      icon: <FaClock />,
      title: 'Horarios',
      details: ['Lunes, Miércoles: 10:00-14:00', 'Martes: 17:00-19:00', 'Jueves: 10:00-14:00, 17:00-19:00', 'Fin de semana: Cerrado']
    }
  ]

  return (
    <>
      <SEO
        title="Contacto"
        description="Contacta con Asovedra para recibir apoyo y asesoría. Teléfono: +34 604 016 113. Email: info@asovedra.org. Oficina en Pontevedra, España."
        keywords="contacto asovedra, teléfono asovedra, email asovedra, oficina pontevedra, consulta gratuita, asesoría legal"
        canonical="/contacto"
      />

      <main className="min-h-screen bg-[linear-gradient(180deg,#020617_0%,#0f172a_38%,#111827_100%)] pt-24 text-white">
        <InternalPageHero
          eyebrow="Contacto"
          title="Estamos aquí para ayudarte"
          description="Respondemos consultas, orientamos procesos y facilitamos el acceso a los servicios de Asovedra."
        />

        <section className="px-4 pb-20 lg:pb-24">
          <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <ContentSurface className="p-6 sm:p-8 lg:p-10">
              <h2 className="text-2xl font-bold text-white lg:text-3xl">Reserva una cita con nosotros</h2>
              <p className="mt-4 text-sm leading-7 text-slate-300 lg:text-base">
                La forma más cómoda de hablar con un miembro del equipo es agendar una cita en línea.
                Elige al profesional que prefieras (o déjanos asignarte uno disponible), selecciona el día y la hora
                que mejor te vengan e introduce tus datos.
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-300 lg:text-base">
                Recibirás un correo de confirmación con un enlace para añadir la cita a tu calendario y un justificante en PDF.
              </p>

              <ul className="mt-6 grid gap-3 text-sm text-slate-200">
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-500/15 text-xs font-bold text-blue-200">1</span>
                  <span>Elige profesional o marca <strong>"Sin preferencia"</strong> para asignación automática.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-500/15 text-xs font-bold text-blue-200">2</span>
                  <span>Selecciona día y hora dentro de la disponibilidad real.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-500/15 text-xs font-bold text-blue-200">3</span>
                  <span>Introduce tus datos y opcionalmente el motivo de la consulta.</span>
                </li>
              </ul>

              <Link
                to="/agendar"
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-slate-100 sm:w-auto"
              >
                Reservar cita ahora
              </Link>

              <p className="mt-6 text-xs leading-6 text-slate-400">
                ¿Prefieres otro canal? Llámanos al <a href="tel:+34604016113" className="underline hover:text-white">+34 604 016 113</a> o
                escríbenos a <a href="mailto:info@asovedra.org" className="underline hover:text-white">info@asovedra.org</a>.
              </p>
            </ContentSurface>

            <div className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                {contactCards.map((item) => (
                  <ContentSurface key={item.title} className="p-5">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/[0.08] text-lg text-blue-300">
                      {item.icon}
                    </div>
                    <h3 className="mt-4 text-lg font-bold text-white">{item.title}</h3>
                    <div className="mt-3 space-y-1 text-sm leading-6 text-slate-300">
                      {item.details.map((detail) => (
                        <p key={detail}>{detail}</p>
                      ))}
                    </div>
                    {item.link && (
                      <a href={item.link} className="mt-4 inline-flex text-sm font-semibold text-blue-300 hover:text-blue-200">
                        {item.action}
                      </a>
                    )}
                  </ContentSurface>
                ))}
              </div>

              <ContentSurface className="p-6 sm:p-8">
                <h3 className="text-xl font-bold text-white">Cómo llegar</h3>
                <div className="mt-5 space-y-4 text-sm leading-6 text-slate-300">
                  <div className="flex items-start gap-3">
                    <FaCar className="mt-1 text-blue-300" />
                    <div>
                      <p className="font-semibold text-white">En coche</p>
                      <p>Aparcamiento disponible en las proximidades.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaBus className="mt-1 text-blue-300" />
                    <div>
                      <p className="font-semibold text-white">En transporte público</p>
                      <p>Líneas de autobús urbano con parada cercana.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaWalking className="mt-1 text-blue-300" />
                    <div>
                      <p className="font-semibold text-white">A pie</p>
                      <p>Centro histórico de Pontevedra, zona peatonal.</p>
                    </div>
                  </div>
                </div>
              </ContentSurface>
            </div>
          </div>
        </section>

        <section className="px-4 pb-20 lg:pb-24">
          <div className="mx-auto max-w-5xl">
            <ContentSurface className="p-6 sm:p-8 lg:p-10">
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="text-2xl font-bold text-white lg:text-3xl">Preguntas frecuentes</h2>
                <p className="mt-4 text-base leading-7 text-slate-300">
                  Respuestas rápidas a algunas dudas habituales antes de contactarnos.
                </p>
              </div>

              <div className="mt-8 grid gap-4">
                {faqItems.map((item) => (
                  <div key={item.question} className="rounded-2xl border border-white/8 bg-white/[0.03] p-5">
                    <h3 className="text-base font-semibold text-white">{item.question}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-300">{item.answer}</p>
                  </div>
                ))}
              </div>
            </ContentSurface>
          </div>
        </section>
      </main>
    </>
  )
}

export default Contact
