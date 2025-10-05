import React from 'react'
import { Header } from '../components/layout/Header'
import { Link } from 'react-router-dom'

function About() {
  const teamMembers = [
    {
      name: "Manuel Osorio Lozano",
      position: "Presidente",
      image: "https://i.ytimg.com/vi/1lUMjHbRK08/maxresdefault.jpg",
      description: "Más de 7 años de experiencia con la comunidad venezolana y su integración en España."
    },
    {
      name: "No disponible",
      position: "Vicepresidente",
      image: "https://glomastore.s3.amazonaws.com/img/sin_imagen.png",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit dolor sit amet."
    },
    {
      name: "No disponible",
      position: "Secretaria",
      image: "https://glomastore.s3.amazonaws.com/img/sin_imagen.png",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit dolor sit amet."
    },
    {
      name: "No disponible",
      position: "Asesor Legal",
      image: "https://glomastore.s3.amazonaws.com/img/sin_imagen.png",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit dolor sit amet."
    }
  ]

  const milestones = [
    { year: "2018", event: "Fundación de Asovedra", description: "Nace la asociación con el objetivo de apoyar a los venezolanos que llegaban a Pontevedra." },
    { year: "2020", event: "Programa Reinvéntate y Trabaja", description: "Una iniciativa que tiene como objetivo principal conocer la realidad de los venezolanos, retornados y personas de países iberoamericanos, para facilitar su inclusión en el mercado laboral. Se da prioridad a quienes están en riesgo de exclusión social, brindando apoyo para integrarse plenamente en el entorno laboral y alcanzar una estabilidad económica." },
    { year: "2021", event: "Expansión a toda Galicia y península", description: "Asovedra extiende sus servicios a las cuatro provincias gallegas y a la península para apoyar a la comunidad venezolana en su proceso de integración." },
    { year: "2022", event: "Eventos", description: "Se llevan a cabo diversos eventos para fomentar la integración y visibilidad de la comunidad. Desde paseos y viajes hasta cenas." },
    { year: "2023", event: "Galicia Activa", description: "Movimiento que busca promover la participación activa de la comunidad no sólo venezolana sino también de otros colectivos en Galicia." },
    { year: "2025", event: "GLC Abogados", description: "Acuerdo de colaboración para brindar asesoría legal a la comunidad." }
  ]

  return (
    <main className='min-h-screen bg-gray-50'>
      {/* Header Section with Navigation */}
      <section className="nav-bg py-6 px-3 sticky top-0 z-50">
        <Header />
        <div className="max-w-6xl mx-auto px-4 text-center text-white pt-12 pb-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Sobre Nosotros</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Conoce nuestra historia, misión y el equipo que trabaja día a día por la comunidad venezolana en España
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-dark mb-4">Nuestra Misión y Visión</h2>
            <div className="h-1 w-20 bg-primary-blue rounded mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-primary-blue to-blue-700 rounded-2xl p-8 text-white">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold mb-4">Misión</h3>
              <p className="text-lg leading-relaxed opacity-90">
                Brindar apoyo integral y servicios especializados a la comunidad venezolana en España, 
                facilitando su integración social, laboral y cultural, mientras preservamos nuestras 
                raíces y valores, promoviendo la solidaridad y el desarrollo mutuo.
              </p>
            </div>

            <div className="bg-gradient-to-br from-primary-dark to-gray-800 rounded-2xl p-8 text-primary-dark">
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="text-2xl font-bold mb-4">Visión</h3>
              <p className="text-lg leading-relaxed opacity-90">
                Ser la organización de referencia para la comunidad venezolana en España, 
                reconocida por la excelencia de nuestros servicios, nuestro compromiso con 
                la integración exitosa y nuestro aporte al desarrollo social y económico del país.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-dark mb-4">Nuestros Valores</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Los principios que guían nuestro trabajo y definen nuestra identidad como organización
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-primary-dark mb-3">Solidaridad</h3>
              <p className="text-gray-600">
                Trabajamos unidos para apoyar a cada miembro de nuestra comunidad en sus necesidades y desafíos.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">⚖️</div>
              <h3 className="text-xl font-bold text-primary-dark mb-3">Transparencia</h3>
              <p className="text-gray-600">
                Actuamos con honestidad y claridad en todos nuestros procesos y decisiones.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-xl font-bold text-primary-dark mb-3">Excelencia</h3>
              <p className="text-gray-600">
                Nos esforzamos por brindar servicios de la más alta calidad y profesionalismo.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-bold text-primary-dark mb-3">Integración</h3>
              <p className="text-gray-600">
                Promovemos la integración positiva respetando tanto nuestras raíces como la cultura local.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">💪</div>
              <h3 className="text-xl font-bold text-primary-dark mb-3">Empoderamiento</h3>
              <p className="text-gray-600">
                Capacitamos a las personas para que sean protagonistas de su propio desarrollo.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">❤️</div>
              <h3 className="text-xl font-bold text-primary-dark mb-3">Compromiso</h3>
              <p className="text-gray-600">
                Mantenemos una dedicación constante hacia el bienestar de nuestra comunidad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-dark mb-4">Nuestra Historia</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Un recorrido por los momentos más importantes de nuestros 7 años de servicio
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-primary-blue h-full"></div>
            
            {milestones.map((milestone, index) => (
              <div key={index} className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-primary-blue">
                    <div className="text-2xl font-bold text-primary-blue mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-bold text-primary-dark mb-3">{milestone.event}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
                
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-primary-blue rounded-full flex items-center justify-center">
                    <div className="w-6 h-6 bg-white rounded-full"></div>
                  </div>
                </div>
                
                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-dark mb-4">Nuestro Equipo</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Conoce a las personas que lideran y hacen posible el trabajo de Asovedra
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary-dark mb-2">{member.name}</h3>
                  <p className="text-primary-blue font-medium mb-3">{member.position}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-gradient-to-r from-primary-blue to-blue-700">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Nuestro Impacto</h2>
            <p className="text-white opacity-90 max-w-2xl mx-auto">
              Cifras que reflejan nuestro compromiso y los resultados de nuestro trabajo
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center text-white">
              <div className="text-4xl font-bold mb-2">4,000+</div>
              <div className="opacity-90">Personas Atendidas</div>
            </div>
            <div className="text-center text-white">
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="opacity-90">Casos Legales Resueltos</div>
            </div>
            <div className="text-center text-white">
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="opacity-90">Empleos Conseguidos</div>
            </div>
            <div className="text-center text-white">
              <div className="text-4xl font-bold mb-2">7</div>
              <div className="opacity-90">Años de Servicio</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold text-primary-dark mb-4">
            ¿Quieres formar parte de nuestro equipo?
          </h3>
          <p className="text-gray-600 mb-8">
            Siempre estamos buscando voluntarios y colaboradores comprometidos con nuestra causa
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to='tel:+34604016113' className="btn-primary">
              Únete como voluntario
            </Link>
            <Link to='/contacto' className="btn-secondary">
              Contacta con nosotros
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default About
