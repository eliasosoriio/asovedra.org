import React from 'react'
import { Header } from '../components/layout/Header'
import SEO from '../components/SEO'
import { FaHeart, FaHandshake, FaUsers, FaBalanceScale, FaStar, FaLeaf, FaDownload, FaFileAlt } from 'react-icons/fa'

function DeclaracionValores() {
  const valores = [
    {
      icon: <FaHeart />,
      titulo: "Solidaridad",
      descripcion: "Nos apoyamos mutuamente, construyendo una red de ayuda donde cada persona cuenta y nadie queda atrás."
    },
    {
      icon: <FaHandshake />,
      titulo: "Respeto",
      descripcion: "Valoramos la diversidad y tratamos a cada persona con dignidad, independientemente de su origen o circunstancias."
    },
    {
      icon: <FaUsers />,
      titulo: "Inclusión",
      descripcion: "Promovemos espacios donde todas las personas son bienvenidas y pueden participar activamente."
    },
    {
      icon: <FaBalanceScale />,
      titulo: "Transparencia",
      descripcion: "Actuamos con honestidad y claridad en todas nuestras acciones y decisiones."
    },
    {
      icon: <FaStar />,
      titulo: "Compromiso",
      descripcion: "Nos dedicamos plenamente al bienestar de nuestra comunidad y al cumplimiento de nuestra misión."
    },
    {
      icon: <FaLeaf />,
      titulo: "Responsabilidad Social",
      descripcion: "Trabajamos por el bien común y el desarrollo sostenible de nuestra comunidad."
    }
  ]

  const principios = [
    {
      titulo: "Dignidad Humana",
      descripcion: "Reconocemos y defendemos la dignidad inherente a cada persona, sin importar su situación migratoria, origen o condición social."
    },
    {
      titulo: "No Discriminación",
      descripcion: "Rechazamos toda forma de discriminación por motivos de nacionalidad, género, edad, orientación sexual, religión o cualquier otra condición."
    },
    {
      titulo: "Participación Activa",
      descripcion: "Fomentamos la participación de todas las personas usuarias y socias en las actividades y decisiones de la asociación."
    },
    {
      titulo: "Trabajo en Red",
      descripcion: "Colaboramos con otras organizaciones e instituciones para maximizar el impacto de nuestras acciones."
    },
    {
      titulo: "Mejora Continua",
      descripcion: "Nos comprometemos a evaluar y mejorar constantemente nuestros programas y servicios."
    },
    {
      titulo: "Sostenibilidad",
      descripcion: "Trabajamos por el desarrollo sostenible de nuestra comunidad y del entorno donde operamos."
    }
  ]

  return (
    <>
      <SEO 
        title="Declaración de Valores"
        description="Declaración de Valores de ASOVEDRA. Conoce los principios y valores que guían nuestro trabajo con la comunidad iberoamericana."
        keywords="valores asovedra, principios, ética, solidaridad, inclusión, transparencia"
        canonical="/declaracion-valores"
      />
      <main className='min-h-screen bg-gray-50'>
        {/* Header Section */}
        <section className="nav-bg py-6 px-3 sticky top-0 z-50">
          <Header />
          <div className="max-w-6xl mx-auto px-4 text-center text-white pt-12 pb-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Declaración de Valores</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Los principios que guían nuestro trabajo y nuestra comunidad
            </p>
          </div>
        </section>

        {/* Introducción */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-12">
              <FaHeart className="text-6xl text-primary-blue mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-primary-dark mb-6">Nuestro Compromiso</h2>
              <div className="h-1 w-20 bg-primary-blue rounded mx-auto mb-8"></div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6 text-center">
                En <strong>ASOVEDRA</strong>, nuestros valores son la base de todo lo que hacemos. 
                Esta declaración establece los principios éticos y morales que orientan nuestras 
                acciones, decisiones y relaciones con la comunidad a la que servimos.
              </p>

              <div className="bg-gradient-to-r from-primary-blue to-blue-700 rounded-xl p-8 text-white text-center my-12">
                <FaUsers className="text-5xl mx-auto mb-4" />
                <p className="text-xl font-medium">
                  "Construimos una comunidad basada en el respeto, la solidaridad y el compromiso 
                  con el bienestar de todas las personas"
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Valores Fundamentales */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary-dark mb-4">Valores Fundamentales</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Los valores que definen nuestra identidad y guían nuestro día a día
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {valores.map((valor, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="text-4xl text-primary-blue mb-4 flex justify-center">
                    {valor.icon}
                  </div>
                  <h3 className="text-xl font-bold text-primary-dark mb-3 text-center">
                    {valor.titulo}
                  </h3>
                  <p className="text-gray-600 text-center">
                    {valor.descripcion}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Principios de Actuación */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary-dark mb-4">Principios de Actuación</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Los criterios que orientan nuestras decisiones y acciones diarias
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {principios.map((principio, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-lg p-6 border-l-4 border-primary-blue">
                  <h3 className="text-xl font-bold text-primary-dark mb-3">{principio.titulo}</h3>
                  <p className="text-gray-700 leading-relaxed">{principio.descripcion}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compromisos */}
        <section className="py-16 bg-gradient-to-br from-primary-blue to-blue-700">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Nuestros Compromisos</h2>
              <p className="text-white opacity-90 max-w-2xl mx-auto">
                Las promesas que hacemos a nuestra comunidad
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-start gap-4">
                  <FaHandshake className="text-3xl text-primary-blue flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-primary-dark mb-2">Con la Comunidad</h4>
                    <p className="text-gray-700 text-sm">
                      Escuchar activamente las necesidades, trabajar de manera transparente 
                      y rendir cuentas de nuestras acciones.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-start gap-4">
                  <FaBalanceScale className="text-3xl text-primary-blue flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-primary-dark mb-2">Con la Ética</h4>
                    <p className="text-gray-700 text-sm">
                      Actuar siempre con integridad, honestidad y respeto a los derechos 
                      humanos fundamentales.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-start gap-4">
                  <FaUsers className="text-3xl text-primary-blue flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-primary-dark mb-2">Con la Inclusión</h4>
                    <p className="text-gray-700 text-sm">
                      Promover la participación de todas las personas, especialmente 
                      de aquellas en situación de mayor vulnerabilidad.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-start gap-4">
                  <FaStar className="text-3xl text-primary-blue flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-primary-dark mb-2">Con la Excelencia</h4>
                    <p className="text-gray-700 text-sm">
                      Buscar continuamente la mejora de nuestros programas y la 
                      profesionalización de nuestro equipo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Descarga del documento */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-gradient-to-br from-primary-blue to-blue-700 rounded-xl p-8 md:p-12 text-white text-center shadow-xl">
              <FaFileAlt className="text-6xl mx-auto mb-6" />
              <h3 className="text-3xl font-bold mb-4">
                Consulta la Declaración Completa
              </h3>
              <p className="text-lg mb-8 opacity-90">
                Descarga el documento completo de nuestra Declaración de Valores en formato PDF
              </p>
              <a 
                href="https://asovedra.org/assets/docs/declaracion_valores_asovedra.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-primary-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
              >
                <FaDownload className="text-2xl" />
                Descargar Declaración de Valores (PDF)
              </a>
              <p className="text-sm mt-6 opacity-75">
                Actualizado: 2025
              </p>
            </div>
          </div>
        </section>

        {/* Información adicional */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-gray-100 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-primary-dark mb-4 text-center">
                Vive Nuestros Valores
              </h3>
              <p className="text-gray-700 text-center mb-6">
                Estos valores no son solo palabras, sino principios que guían cada acción de ASOVEDRA. 
                Te invitamos a conocerlos, compartirlos y vivirlos con nosotros.
              </p>
              <div className="flex justify-center">
                <a 
                  href="/contacto" 
                  className="btn-primary inline-flex items-center justify-center gap-2"
                >
                  Únete a Nuestra Comunidad
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default DeclaracionValores
