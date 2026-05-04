import React, { useState } from 'react'
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
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    service: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Datos del formulario:', formData)
    alert('Gracias por tu mensaje. Te contactaremos pronto.')
  }

  const services = [
    'Orientación Legal y Derivación',
    'Bolsa de Empleo',
    'Trámites Migratorios',
    'Formación y Cursos',
    'Apoyo Psicológico',
    'Orientación Familiar',
    'Otro'
  ]

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
              <h2 className="text-2xl font-bold text-white lg:text-3xl">Envíanos un mensaje</h2>

              <div className="mt-6 rounded-2xl border border-amber-400/20 bg-amber-400/10 p-4 text-amber-50">
                <h3 className="text-base font-semibold">Formulario temporalmente no disponible</h3>
                <p className="mt-2 text-sm leading-6 text-amber-100/90">
                  Estamos mejorando el sistema de contacto. Mientras tanto, llámanos al +34 604 016 113 o escríbenos a info@asovedra.org.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5 opacity-70 pointer-events-none">
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-200">Nombre completo *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3 text-white outline-none placeholder:text-slate-400"
                      placeholder="Tu nombre completo"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-200">Correo electrónico *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3 text-white outline-none placeholder:text-slate-400"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className="mb-2 block text-sm font-medium text-slate-200">Teléfono</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3 text-white outline-none placeholder:text-slate-400"
                      placeholder="+34 XXX XXX XXX"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="mb-2 block text-sm font-medium text-slate-200">Servicio de interés</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3 text-white outline-none"
                    >
                      <option value="">Selecciona un servicio</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="mb-2 block text-sm font-medium text-slate-200">Asunto *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3 text-white outline-none placeholder:text-slate-400"
                    placeholder="¿En qué podemos ayudarte?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-200">Mensaje *</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3 text-white outline-none placeholder:text-slate-400"
                    placeholder="Describe tu consulta o necesidad..."
                  ></textarea>
                </div>

                <button type="submit" disabled className="w-full rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 opacity-60">
                  Formulario no disponible
                </button>
              </form>
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
