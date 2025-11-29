import React, { useState } from 'react'
import SEO from '../components/SEO'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaCar, FaBus, FaWalking } from 'react-icons/fa'

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
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aquí irá la lógica de envío del formulario
    console.log('Datos del formulario:', formData)
    alert('¡Gracias por tu mensaje! Te contactaremos pronto.')
  }

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt />,
      title: "Dirección",
      details: ["Rúa Sor Lucía 4, Oficina 50", "36002 Pontevedra, España"],
      link: "https://maps.google.com/?q=Rúa+Sor+Lucía+4,+Oficina+50,+36002+Pontevedra"
    },
    {
      icon: <FaPhone />,
      title: "Teléfono",
      details: ["+34 604 016 113", "Llamadas y WhatsApp"],
      link: "tel:+34604016113"
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      details: ["info@asovedra.org"],
      link: "mailto:info@asovedra.org"
    },
    {
      icon: <FaClock />,
      title: "Horarios",
      details: ["Lunes, Miércoles: 10:00-14:00", "Martes: 17:00-19:00", "Jueves: 10:00-14:00, 17:00-19:00", "Fin de semana: Cerrado"],
      link: null
    }
  ]

  const services = [
    "Asesoría Legal Migratoria",
    "Bolsa de Empleo",
    "Trámites Migratorios",
    "Formación y Cursos",
    "Apoyo Psicológico",
    "Orientación Familiar",
    "Otro"
  ]

  return (
    <>
      <SEO 
        title="Contacto"
        description="Contacta con Asovedra para recibir apoyo y asesoría. Teléfono: +34 604 016 113. Email: info@asovedra.org. Oficina en Pontevedra, España."
        keywords="contacto asovedra, teléfono asovedra, email asovedra, oficina pontevedra, consulta gratuita, asesoría legal"
        canonical="/contacto"
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
            Contáctanos
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 !text-white">Contacto</h1>
          <div className="w-24 h-1 !bg-gradient-to-r !from-yellow-400 !via-blue-600 !to-red-600 mx-auto mb-6"></div>
          <p className="text-xl !text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Estamos aquí para ayudarte. Contáctanos y te responderemos lo antes posible
          </p>
        </div>
      </section>



      {/* Contact Form & Map */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h3 className="text-2xl font-bold text-primary-dark mb-6">Envíanos un mensaje</h3>
              
              {/* Aviso temporal */}
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
                <div className="flex items-start">
                  <div className="text-amber-600 mr-3 text-xl">⚠️</div>
                  <div>
                    <h4 className="text-amber-800 font-medium mb-2">Formulario temporalmente no disponible</h4>
                    <p className="text-amber-700 text-sm">
                      Actualmente estamos trabajando en mejorar nuestro sistema de contacto. 
                      Mientras tanto, por favor <strong>llámanos al +34 604 016 113</strong> o 
                      escríbenos directamente a <strong>info@asovedra.org</strong>
                    </p>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6 opacity-75 pointer-events-none">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                      placeholder="Tu nombre completo"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Correo electrónico *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                      placeholder="+34 XXX XXX XXX"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Servicio de interés
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                    >
                      <option value="">Selecciona un servicio</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Asunto *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                    placeholder="¿En qué podemos ayudarte?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent resize-vertical"
                    placeholder="Describe tu consulta o necesidad..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled
                  className="btn-primary w-full opacity-50 cursor-not-allowed"
                >
                  Formulario no disponible
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-2xl font-bold text-primary-dark mb-6">Información de Contacto</h3>
                <div className="space-y-4 text-sm text-gray-600">
                  <div className="flex items-start">
                    <div className="text-primary-blue mr-3 text-xl"><FaMapMarkerAlt /></div>
                    <div>
                      <p className="font-medium text-primary-dark">Dirección:</p>
                      <p>Rúa Sor Lucía 4, Oficina 50</p>
                      <p>36002 Pontevedra, España</p>
                      <a href="https://maps.google.com/?q=Rúa+Sor+Lucía+4,+Oficina+50,+36002+Pontevedra" 
                         className="text-primary-blue hover:underline mt-1 inline-block">
                        Ver en Google Maps
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-primary-blue mr-3 text-xl"><FaPhone /></div>
                    <div>
                      <p className="font-medium text-primary-dark">Teléfono:</p>
                      <p>
                        <a href="tel:+34604016113" className="text-primary-blue hover:underline">
                          +34 604 016 113
                        </a>
                      </p>
                      <p>Llamadas y WhatsApp</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-primary-blue mr-3 text-xl"><FaEnvelope /></div>
                    <div>
                      <p className="font-medium text-primary-dark">Email:</p>
                      <p>
                        <a href="mailto:info@asovedra.org" className="text-primary-blue hover:underline">
                          info@asovedra.org
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="text-primary-blue mr-3 text-xl"><FaClock /></div>
                    <div>
                      <p className="font-medium text-primary-dark">Horarios:</p>
                      <p>Lunes, Miércoles: 10:00-14:00</p>
                      <p>Martes: 17:00-19:00</p>
                      <p>Jueves: 10:00-14:00, 17:00-19:00</p>
                      <p>Fin de semana: Cerrado</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary-light rounded-xl p-6">
                <h4 className="text-lg font-bold text-primary-dark mb-4">¿Necesitas ayuda urgente?</h4>
                <p className="text-gray-700 mb-4">
                  Si tienes una emergencia o necesitas asistencia inmediata, no dudes en llamarnos directamente.
                </p>
                <a 
                  href="tel:+34604016113"
                  className="btn-primary inline-block"
                >
                  Llamar ahora: +34 604 016 113
                </a>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h4 className="text-lg font-bold text-primary-dark mb-4">Cómo llegar</h4>
                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex items-start">
                    <div className="text-primary-blue mr-2"><FaCar /></div>
                    <div>
                      <p className="font-medium">En coche:</p>
                      <p>Aparcamiento disponible en las proximidades</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-primary-blue mr-2"><FaBus /></div>
                    <div>
                      <p className="font-medium">En transporte público:</p>
                      <p>Líneas de autobús urbano con parada cercana</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-primary-blue mr-2"><FaWalking /></div>
                    <div>
                      <p className="font-medium">A pie:</p>
                      <p>Centro histórico de Pontevedra, zona peatonal</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[#1B2336] text-white rounded-full text-sm font-semibold mb-4">
              Ayuda
            </span>
            <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Preguntas Frecuentes</h3>
            <div className="w-24 h-1 !bg-gradient-to-r !from-yellow-400 !via-blue-600 !to-red-600 mx-auto mb-6"></div>
            <p className="text-gray-600">
              Encuentra respuestas rápidas a las preguntas más comunes
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h4 className="font-bold text-primary-dark mb-2">¿Cuánto tiempo tardan en responder?</h4>
              <p className="text-gray-600">Normalmente respondemos en un plazo de 24-48 horas laborables. Para situaciones urgentes, recomendamos llamar directamente.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h4 className="font-bold text-primary-dark mb-2">¿Los servicios tienen costo?</h4>
              <p className="text-gray-600">Ofrecemos servicios básicos y premium. La orientación inicial y la información básica están incluidas en nuestros servicios básicos.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h4 className="font-bold text-primary-dark mb-2">¿Necesito cita previa?</h4>
              <p className="text-gray-600">Para una atención más personalizada recomendamos solicitar cita previa, aunque también atendemos sin cita según disponibilidad.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h4 className="font-bold text-primary-dark mb-2">¿Atienden solo a iberoamericanos?</h4>
              <p className="text-gray-600">Nos especializamos en la comunidad iberoamericana, pero brindamos apoyo a cualquier persona que necesite nuestros servicios de migración e integración.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  )
}

export default Contact

