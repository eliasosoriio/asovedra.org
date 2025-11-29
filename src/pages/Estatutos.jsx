import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { FaFileAlt, FaDownload, FaBalanceScale, FaUsers, FaHandshake, FaGavel } from 'react-icons/fa'

function Estatutos() {
  return (
    <>
      <SEO 
        title="Estatutos"
        description="Estatutos de ASOVEDRA - Asociación Iberoamericana en el Principado de Asturias. Consulta nuestros estatutos y normativa interna."
        keywords="estatutos asovedra, normativa, asociación iberoamericana, reglamento, documentos legales"
        canonical="/estatutos"
      />
      <main className='min-h-screen bg-white pt-20'>
        {/* Header Section */}
        <section className="!bg-gradient-to-br !from-[#1B2336] !via-slate-800 !to-slate-900 py-20 lg:py-24 px-4 relative overflow-hidden">
          {/* Puntos decorativos */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-yellow-400/30 rounded-full"></div>
            <div className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-blue-500/30 rounded-full"></div>
            <div className="absolute top-2/3 right-1/4 w-2.5 h-2.5 bg-red-500/30 rounded-full"></div>
          </div>

          {/* Badge */}
          <div className="max-w-6xl mx-auto mb-8 text-center relative z-10">
            <span className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-white border border-white/20">
              Marco normativo
            </span>
          </div>

          {/* Línea decorativa Venezuela */}
          <div className="w-24 h-1 !bg-gradient-to-r !from-yellow-400 !via-blue-500 !to-red-600 mx-auto mb-8"></div>

          <div className="max-w-6xl mx-auto text-center text-white relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">Estatutos de ASOVEDRA</h1>
            <p className="text-xl lg:text-2xl opacity-90 max-w-3xl mx-auto leading-relaxed">
              Marco normativo y organizativo de nuestra asociación
            </p>
          </div>
        </section>

        {/* Introducción */}
        <section className="py-20 lg:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-12">
              <span className="inline-block bg-slate-100 px-4 py-2 rounded-full text-sm font-medium text-slate-700 mb-4">
                Transparencia y normativa
              </span>
              <div className="w-16 h-1 !bg-gradient-to-r !from-yellow-400 !via-blue-500 !to-red-600 mx-auto mb-6"></div>
              <FaBalanceScale className="text-6xl text-blue-600 mx-auto mb-6" />
              <h2 className="text-3xl lg:text-4xl font-bold text-[#1B2336] mb-6">Transparencia y Normativa</h2>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6 text-center">
                Los estatutos de <strong>ASOVEDRA</strong> establecen las bases de nuestra organización, 
                definen nuestros objetivos, estructura, derechos y obligaciones de los asociados, 
                así como los procedimientos para la toma de decisiones y el funcionamiento de la asociación.
              </p>

              <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 text-white text-center my-12">
                <FaGavel className="text-5xl mx-auto mb-4" />
                <p className="text-xl font-medium">
                  "Comprometidos con la transparencia y el buen gobierno asociativo"
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contenido de los Estatutos */}
        <section className="py-20 lg:py-24 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <span className="inline-block bg-white px-4 py-2 rounded-full text-sm font-medium text-slate-700 mb-4 shadow-sm">
                Estructura organizativa
              </span>
              <div className="w-16 h-1 !bg-gradient-to-r !from-yellow-400 !via-blue-500 !to-red-600 mx-auto mb-6"></div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#1B2336] mb-4">Contenido de los Estatutos</h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                Principales aspectos regulados en nuestros estatutos
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <FaUsers className="text-4xl text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1B2336] mb-3">Asociados</h3>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Requisitos y procedimiento de admisión</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Derechos y obligaciones</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Tipos de socios</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Causas de baja</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <FaBalanceScale className="text-4xl text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1B2336] mb-3">Órganos de Gobierno</h3>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Asamblea General</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Junta Directiva</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Composición y funciones</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Procedimientos de elección</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <FaHandshake className="text-4xl text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1B2336] mb-3">Régimen Económico</h3>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Patrimonio y recursos</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Cuotas de socios</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Gestión económica</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Presupuestos y rendición de cuentas</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <FaGavel className="text-4xl text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1B2336] mb-3">Modificación y Disolución</h3>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Procedimiento de reforma</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Causas de disolución</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Liquidación del patrimonio</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Destino de bienes</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Descarga del documento */}
        <section className="py-20 lg:py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-8 md:p-12 text-white text-center shadow-xl">
              <FaFileAlt className="text-6xl mx-auto mb-6" />
              <h3 className="text-3xl font-bold mb-4">
                Consulta Nuestros Estatutos
              </h3>
              <p className="text-lg mb-8 opacity-90">
                Descarga el documento completo en formato PDF para conocer todos los detalles de nuestra organización
              </p>
              <a 
                href="https://asovedra.org/assets/docs/estatutos_asovedra.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
              >
                <FaDownload className="text-2xl" />
                Descargar Estatutos (PDF)
              </a>
              <p className="text-sm mt-6 opacity-75">
                Última actualización: 2025
              </p>
            </div>
          </div>
        </section>

        {/* Información adicional */}
        <section className="py-20 lg:py-24 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-gray-100 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-[#1B2336] mb-4 text-center">
                ¿Tienes dudas sobre los estatutos?
              </h3>
              <p className="text-gray-700 text-center mb-6">
                Si necesitas aclaraciones sobre cualquier aspecto de nuestros estatutos o sobre el funcionamiento 
                de la asociación, no dudes en contactarnos.
              </p>
              <div className="flex justify-center">
                <Link 
                  to="/contacto" 
                  className="btn-primary inline-flex items-center justify-center gap-2"
                >
                  Contactar con la Junta Directiva
                </Link>
              </div>
            </div>

            <div className="mt-8 text-center text-sm text-gray-600">
              <p>
                Los estatutos están inscritos en el Registro de Asociaciones del Principado de Asturias
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Estatutos




