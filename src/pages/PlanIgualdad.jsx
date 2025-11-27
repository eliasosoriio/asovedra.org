import React from 'react'
import SEO from '../components/SEO'
import { FaBalanceScale, FaUsers, FaBullseye, FaHandshake, FaChartLine, FaGavel, FaHeart, FaDownload } from 'react-icons/fa'
import jsPDF from 'jspdf'

function PlanIgualdad() {
  const objetivos = [
    {
      icon: <FaBalanceScale />,
      titulo: "Igualdad de Oportunidades",
      descripcion: "Garantizar igualdad de acceso a todos los servicios sin discriminación por género."
    },
    {
      icon: <FaUsers />,
      titulo: "Participación Equilibrada",
      descripcion: "Promover la representación equitativa en todos los niveles de la organización."
    },
    {
      icon: <FaChartLine />,
      titulo: "Desarrollo Profesional",
      descripcion: "Facilitar el crecimiento profesional sin barreras de género."
    },
    {
      icon: <FaHeart />,
      titulo: "Conciliación",
      descripcion: "Fomentar la conciliación de la vida personal, familiar y laboral."
    }
  ]

  const ejes = [
    {
      numero: "1",
      titulo: "Acceso al Empleo",
      descripcion: "Promover la igualdad en los procesos de selección y contratación",
      medidas: [
        "Uso de lenguaje inclusivo en ofertas de trabajo",
        "Procesos de selección objetivos y transparentes",
        "Eliminación de sesgos de género en la evaluación",
        "Promoción de la diversidad en la bolsa de empleo"
      ]
    },
    {
      numero: "2",
      titulo: "Clasificación Profesional",
      descripcion: "Garantizar la equidad en la valoración de puestos de trabajo",
      medidas: [
        "Revisión de las descripciones de puestos",
        "Análisis de brechas salariales",
        "Eliminación de estereotipos de género",
        "Promoción basada en méritos objetivos"
      ]
    },
    {
      numero: "3",
      titulo: "Formación y Desarrollo",
      descripcion: "Facilitar el acceso equitativo a la formación",
      medidas: [
        "Programas de formación accesibles para todos",
        "Cursos de sensibilización en igualdad",
        "Capacitación en liderazgo sin sesgos",
        "Mentorías y desarrollo profesional"
      ]
    },
    {
      numero: "4",
      titulo: "Retribución",
      descripcion: "Asegurar la equidad salarial entre hombres y mujeres",
      medidas: [
        "Auditoría salarial periódica",
        "Transparencia en las políticas retributivas",
        "Corrección de desigualdades detectadas",
        "Sistema de evaluación objetivo"
      ]
    },
    {
      numero: "5",
      titulo: "Conciliación",
      descripcion: "Facilitar el equilibrio entre vida personal y profesional",
      medidas: [
        "Flexibilidad horaria cuando sea posible",
        "Apoyo en períodos de maternidad/paternidad",
        "Políticas de teletrabajo inclusivas",
        "Respeto a los permisos y licencias"
      ]
    },
    {
      numero: "6",
      titulo: "Prevención del Acoso",
      descripcion: "Crear entornos seguros y respetuosos",
      medidas: [
        "Protocolo de actuación ante el acoso",
        "Canales de denuncia confidenciales",
        "Formación en prevención del acoso",
        "Actuación inmediata ante casos reportados"
      ]
    }
  ]

  const compromisos = [
    "Integrar la perspectiva de género en todas las políticas y programas",
    "Promover la participación equilibrada de mujeres y hombres",
    "Garantizar la igualdad salarial por trabajos de igual valor",
    "Facilitar la conciliación de la vida personal, familiar y laboral",
    "Prevenir y actuar contra cualquier forma de discriminación o acoso",
    "Formar y sensibilizar a todo el equipo en materia de igualdad"
  ]

  const generarPDF = () => {
    const doc = new jsPDF()
    const pageWidth = doc.internal.pageSize.getWidth()
    const pageHeight = doc.internal.pageSize.getHeight()
    const margin = 20
    const contentWidth = pageWidth - 2 * margin
    let yPos = margin

    // Colores del tema
    const primaryBlue = [41, 128, 185]
    const darkBlue = [21, 67, 96]
    const lightGray = [236, 240, 241]

    // Función auxiliar para agregar nueva página si es necesario
    const checkNewPage = (requiredSpace) => {
      if (yPos + requiredSpace > pageHeight - margin) {
        doc.addPage()
        yPos = margin
        return true
      }
      return false
    }

    // Función para añadir texto con wrap
    const addWrappedText = (text, fontSize, maxWidth, isBold = false) => {
      doc.setFontSize(fontSize)
      doc.setFont('helvetica', isBold ? 'bold' : 'normal')
      const lines = doc.splitTextToSize(text, maxWidth)
      lines.forEach(line => {
        checkNewPage(fontSize * 0.5)
        doc.text(line, margin, yPos)
        yPos += fontSize * 0.5
      })
    }

    // Portada con gradiente simulado
    doc.setFillColor(...primaryBlue)
    doc.rect(0, 0, pageWidth, 95, 'F')
    
    // Añadir logo desde archivo local
    const logoUrl = '/favicon.png'
    const logoSize = 30
    const logoX = pageWidth / 2 - logoSize / 2
    doc.addImage(logoUrl, 'PNG', logoX, 15, logoSize, logoSize)
    
    doc.setTextColor(255, 255, 255)
    doc.setFontSize(28)
    doc.setFont('helvetica', 'bold')
    doc.text('PLAN DE IGUALDAD', pageWidth / 2, 55, { align: 'center' })
    doc.text('DE GÉNERO', pageWidth / 2, 70, { align: 'center' })
    
    doc.setFontSize(16)
    doc.text('2025-2026', pageWidth / 2, 85, { align: 'center' })
    
    doc.setTextColor(0, 0, 0)
    yPos = 110

    // Logo/Nombre organización
    doc.setFillColor(...lightGray)
    doc.roundedRect(margin, yPos, contentWidth, 25, 3, 3, 'F')
    doc.setFontSize(18)
    doc.setFont('helvetica', 'bold')
    doc.setTextColor(...darkBlue)
    doc.text('ASOVEDRA', pageWidth / 2, yPos + 17, { align: 'center' })
    
    yPos += 40

    // Introducción
    doc.setFontSize(16)
    doc.setFont('helvetica', 'bold')
    doc.setTextColor(...primaryBlue)
    doc.text('Nuestro Compromiso con la Igualdad', margin, yPos)
    yPos += 8

    doc.setTextColor(0, 0, 0)
    const intro = 'En ASOVEDRA estamos firmemente comprometidos con la promoción de la igualdad de género y la no discriminación. Este Plan de Igualdad establece las bases de nuestro trabajo para garantizar que todas las personas, independientemente de su género, tengan las mismas oportunidades de desarrollo personal y profesional.'
    addWrappedText(intro, 10, contentWidth)
    yPos += 3

    // Nueva página para objetivos
    doc.addPage()
    yPos = margin

    // Objetivos Estratégicos
    doc.setFillColor(...primaryBlue)
    doc.rect(0, yPos, pageWidth, 15, 'F')
    doc.setTextColor(255, 255, 255)
    doc.setFontSize(16)
    doc.setFont('helvetica', 'bold')
    doc.text('OBJETIVOS ESTRATÉGICOS', pageWidth / 2, yPos + 10, { align: 'center' })
    yPos += 20

    doc.setTextColor(0, 0, 0)
    objetivos.forEach((objetivo, index) => {
      checkNewPage(35)
      
      // Recuadro para cada objetivo
      doc.setFillColor(...lightGray)
      doc.roundedRect(margin, yPos, contentWidth, 30, 3, 3, 'F')
      
      doc.setFontSize(11)
      doc.setFont('helvetica', 'bold')
      doc.setTextColor(...primaryBlue)
      doc.text(`${index + 1}. ${objetivo.titulo}`, margin + 5, yPos + 9)
      
      doc.setFontSize(9)
      doc.setFont('helvetica', 'normal')
      doc.setTextColor(60, 60, 60)
      const objLines = doc.splitTextToSize(objetivo.descripcion, contentWidth - 10)
      objLines.forEach((line, idx) => {
        doc.text(line, margin + 5, yPos + 17 + (idx * 4))
      })
      
      yPos += 34
    })

    // Nueva página para Ejes
    doc.addPage()
    yPos = margin

    // Ejes de Actuación
    doc.setFillColor(...primaryBlue)
    doc.rect(0, yPos, pageWidth, 15, 'F')
    doc.setTextColor(255, 255, 255)
    doc.setFontSize(16)
    doc.setFont('helvetica', 'bold')
    doc.text('EJES DE ACTUACIÓN', pageWidth / 2, yPos + 10, { align: 'center' })
    yPos += 20

    doc.setTextColor(0, 0, 0)
    ejes.forEach((eje, index) => {
      const requiredSpace = 45 + (eje.medidas.length * 4)
      checkNewPage(requiredSpace)
      
      // Número del eje con círculo
      doc.setFillColor(...primaryBlue)
      doc.circle(margin + 7, yPos + 7, 7, 'F')
      doc.setTextColor(255, 255, 255)
      doc.setFontSize(12)
      doc.setFont('helvetica', 'bold')
      doc.text(eje.numero, margin + 7, yPos + 10, { align: 'center' })
      
      // Título del eje (alineado verticalmente con el círculo)
      doc.setTextColor(...darkBlue)
      doc.setFontSize(12)
      doc.text(eje.titulo, margin + 18, yPos + 10)
      
      yPos += 18
      
      // Descripción (comienza después del círculo y título)
      doc.setTextColor(60, 60, 60)
      doc.setFontSize(9)
      doc.setFont('helvetica', 'italic')
      const descLines = doc.splitTextToSize(eje.descripcion, contentWidth - 5)
      descLines.forEach(line => {
        doc.text(line, margin + 5, yPos)
        yPos += 4
      })
      
      yPos += 3
      
      // Medidas
      doc.setFont('helvetica', 'bold')
      doc.setTextColor(...primaryBlue)
      doc.setFontSize(9)
      doc.text('Medidas implementadas:', margin + 5, yPos)
      yPos += 5
      
      doc.setFont('helvetica', 'normal')
      doc.setTextColor(60, 60, 60)
      doc.setFontSize(8)
      eje.medidas.forEach(medida => {
        const medidaLines = doc.splitTextToSize(`• ${medida}`, contentWidth - 10)
        medidaLines.forEach(line => {
          checkNewPage(4)
          doc.text(line, margin + 8, yPos)
          yPos += 4
        })
      })
      
      yPos += 6
    })

    // Nueva página para Compromisos
    doc.addPage()
    yPos = margin

    doc.setFillColor(...primaryBlue)
    doc.rect(0, yPos, pageWidth, 15, 'F')
    doc.setTextColor(255, 255, 255)
    doc.setFontSize(16)
    doc.setFont('helvetica', 'bold')
    doc.text('NUESTROS COMPROMISOS', pageWidth / 2, yPos + 10, { align: 'center' })
    yPos += 20

    doc.setTextColor(0, 0, 0)
    compromisos.forEach((compromiso, index) => {
      checkNewPage(12)
      
      doc.setFillColor(...lightGray)
      const boxHeight = 10
      doc.roundedRect(margin, yPos, contentWidth, boxHeight, 2, 2, 'F')
      
      doc.setFontSize(9)
      doc.setFont('helvetica', 'normal')
      doc.setTextColor(40, 40, 40)
      const compLines = doc.splitTextToSize(`${index + 1}. ${compromiso}`, contentWidth - 10)
      compLines.forEach((line, idx) => {
        doc.text(line, margin + 5, yPos + 6 + (idx * 4))
      })
      
      yPos += boxHeight + 3
    })

    // Seguimiento y evaluación
    yPos += 8
    checkNewPage(60)
    
    doc.setFillColor(...primaryBlue)
    doc.rect(0, yPos, pageWidth, 15, 'F')
    doc.setTextColor(255, 255, 255)
    doc.setFontSize(16)
    doc.setFont('helvetica', 'bold')
    doc.text('SEGUIMIENTO Y EVALUACIÓN', pageWidth / 2, yPos + 10, { align: 'center' })
    yPos += 20

    doc.setTextColor(0, 0, 0)
    doc.setFontSize(10)
    doc.setFont('helvetica', 'bold')
    doc.text('Monitoreo Continuo', margin, yPos)
    yPos += 6
    
    doc.setFontSize(9)
    doc.setFont('helvetica', 'normal')
    addWrappedText('Realizamos un seguimiento periódico de la implementación de las medidas establecidas en este plan, con evaluaciones trimestrales de los indicadores de igualdad.', 9, contentWidth)
    yPos += 3

    doc.setFontSize(10)
    doc.setFont('helvetica', 'bold')
    doc.text('Indicadores de Progreso', margin, yPos)
    yPos += 6
    
    doc.setFontSize(8)
    doc.setFont('helvetica', 'normal')
    const indicadores = [
      'Porcentaje de participación por género en programas y servicios',
      'Número de formaciones en igualdad realizadas',
      'Grado de satisfacción con las medidas implementadas',
      'Análisis de brechas y evolución de las mismas'
    ]
    
    indicadores.forEach(ind => {
      checkNewPage(4)
      doc.text(`• ${ind}`, margin + 5, yPos)
      yPos += 4
    })

    // Footer con info de vigencia
    doc.addPage()
    yPos = pageHeight / 2 - 20

    doc.setFillColor(...lightGray)
    doc.roundedRect(margin, yPos, contentWidth, 60, 3, 3, 'F')
    
    doc.setFontSize(14)
    doc.setFont('helvetica', 'bold')
    doc.setTextColor(...primaryBlue)
    doc.text('Vigencia del Plan', pageWidth / 2, yPos + 15, { align: 'center' })
    
    doc.setFontSize(11)
    doc.setFont('helvetica', 'normal')
    doc.setTextColor(40, 40, 40)
    doc.text('Este Plan de Igualdad tiene una vigencia de 2 años (2025-2026)', pageWidth / 2, yPos + 28, { align: 'center' })
    doc.text('y será revisado y actualizado al finalizar este periodo.', pageWidth / 2, yPos + 36, { align: 'center' })
    
    doc.setFontSize(9)
    doc.setTextColor(100, 100, 100)
    doc.text('Aprobado: Octubre 2025 | Próxima revisión: Octubre 2027', pageWidth / 2, yPos + 50, { align: 'center' })

    // Guardar PDF
    doc.save('Plan_Igualdad_ASOVEDRA_2025-2026.pdf')
  }

  return (
    <>
      <SEO 
        title="Plan de Igualdad de Género"
        description="Plan de Igualdad de Género 2025-2026 de ASOVEDRA. Nuestro compromiso con la igualdad de oportunidades y la no discriminación."
        keywords="plan igualdad, género, asovedra, igualdad oportunidades, no discriminación"
        canonical="/plan-de-igualdad"
      />
      <main className='min-h-screen bg-gray-50'>
        {/* Header Section */}
        <section className="nav-bg py-6 px-3 sticky top-0 z-50 pt-20">
          <Header />
          <div className="max-w-6xl mx-auto px-4 text-center text-white pt-12 pb-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Plan de Igualdad de Género</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              2025-2026
            </p>
          </div>
        </section>

        {/* Introducción */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary-dark mb-6">Nuestro Compromiso con la Igualdad</h2>
              <div className="h-1 w-20 bg-primary-blue rounded mx-auto mb-8"></div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6 text-center">
                En <strong>ASOVEDRA</strong> estamos firmemente comprometidos con la promoción de la igualdad 
                de género y la no discriminación. Este Plan de Igualdad establece las bases de nuestro trabajo 
                para garantizar que todas las personas, independientemente de su género, tengan las mismas 
                oportunidades de desarrollo personal y profesional.
              </p>

              <div className="bg-gradient-to-r from-primary-blue to-blue-700 rounded-xl p-8 text-white text-center my-12">
                <FaGavel className="text-5xl mx-auto mb-4" />
                <p className="text-xl font-medium">
                  "La igualdad de género no es solo un derecho humano fundamental, 
                  sino la base necesaria para un mundo pacífico, próspero y sostenible"
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Objetivos */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary-dark mb-4">Objetivos Estratégicos</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Los pilares fundamentales de nuestro Plan de Igualdad
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {objetivos.map((objetivo, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="text-4xl text-primary-blue mb-4 flex justify-center">
                    {objetivo.icon}
                  </div>
                  <h3 className="text-lg font-bold text-primary-dark mb-3 text-center">
                    {objetivo.titulo}
                  </h3>
                  <p className="text-gray-600 text-sm text-center">
                    {objetivo.descripcion}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ejes de Actuación */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary-dark mb-4">Ejes de Actuación</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Áreas estratégicas donde implementamos medidas concretas para la igualdad
              </p>
            </div>

            <div className="space-y-8">
              {ejes.map((eje, index) => (
                <div key={index} className="bg-gradient-to-r from-gray-50 to-white rounded-xl shadow-lg p-8 border-l-4 border-primary-blue">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-primary-blue rounded-full flex items-center justify-center text-white text-2xl font-bold">
                        {eje.numero}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold text-primary-dark mb-3">{eje.titulo}</h3>
                      <p className="text-gray-700 mb-4 font-medium">{eje.descripcion}</p>
                      <div className="space-y-2">
                        <p className="text-sm font-semibold text-primary-blue mb-2">Medidas implementadas:</p>
                        <ul className="grid md:grid-cols-2 gap-2">
                          {eje.medidas.map((medida, idx) => (
                            <li key={idx} className="flex items-start text-gray-600 text-sm">
                              <span className="text-primary-blue mr-2">•</span>
                              <span>{medida}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
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
                Declaraciones de principios que guían nuestras acciones
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {compromisos.map((compromiso, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <FaHandshake className="text-3xl text-primary-blue" />
                    </div>
                    <p className="text-lg leading-relaxed text-gray-700">{compromiso}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Seguimiento y Evaluación */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary-dark mb-4">Seguimiento y Evaluación</h2>
              <div className="h-1 w-20 bg-primary-blue rounded mx-auto"></div>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-primary-dark mb-3 flex items-center gap-2">
                    <FaChartLine className="text-primary-blue" />
                    Monitoreo Continuo
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Realizamos un seguimiento periódico de la implementación de las medidas establecidas 
                    en este plan, con evaluaciones trimestrales de los indicadores de igualdad.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-primary-dark mb-3 flex items-center gap-2">
                    <FaBullseye className="text-primary-blue" />
                    Indicadores de Progreso
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-primary-blue mr-2">•</span>
                      <span>Porcentaje de participación por género en programas y servicios</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-blue mr-2">•</span>
                      <span>Número de formaciones en igualdad realizadas</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-blue mr-2">•</span>
                      <span>Grado de satisfacción con las medidas implementadas</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-blue mr-2">•</span>
                      <span>Análisis de brechas y evolución de las mismas</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-primary-dark mb-3 flex items-center gap-2">
                    <FaUsers className="text-primary-blue" />
                    Revisión Participativa
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    El plan se revisa anualmente con la participación de todo el equipo y los usuarios 
                    de nuestros servicios, incorporando sus sugerencias y experiencias para la mejora continua.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Información adicional */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-primary-light rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold text-primary-dark mb-4">
                Vigencia del Plan
              </h3>
              <p className="text-gray-700 text-lg mb-6">
                Este Plan de Igualdad tiene una vigencia de <strong>2 años (2025-2026)</strong> 
                y será revisado y actualizado al finalizar este periodo.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={generarPDF}
                  className="btn-primary inline-flex items-center justify-center gap-2"
                >
                  <FaDownload />
                  Descargar Plan Completo (PDF)
                </button>
                <a 
                  href="/contacto" 
                  className="btn-secondary inline-flex items-center justify-center gap-2"
                >
                  Más Información
                </a>
              </div>
            </div>

            <div className="mt-8 text-center text-sm text-gray-600">
              <p>
                <strong>Aprobado:</strong> Octubre 2025 | 
                <strong className="ml-2">Próxima revisión:</strong> Octubre 2027
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default PlanIgualdad