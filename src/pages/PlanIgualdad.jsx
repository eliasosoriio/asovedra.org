import React from 'react'
import SEO from '../components/SEO'
import { FaBalanceScale, FaBullseye, FaChartLine, FaDownload, FaGavel, FaHandshake, FaHeart, FaUsers } from 'react-icons/fa'
import jsPDF from 'jspdf'
import ContentSurface from '../components/layout/ContentSurface'
import InternalPageHero from '../components/layout/InternalPageHero'

function PlanIgualdad() {
  const objetivos = [
    {
      icon: <FaBalanceScale />,
      titulo: 'Igualdad de oportunidades',
      descripcion: 'Garantizar igualdad de acceso a todos los servicios sin discriminación por género.'
    },
    {
      icon: <FaUsers />,
      titulo: 'Participación equilibrada',
      descripcion: 'Promover la representación equitativa en todos los niveles de la organización.'
    },
    {
      icon: <FaChartLine />,
      titulo: 'Desarrollo profesional',
      descripcion: 'Facilitar el crecimiento profesional sin barreras de género.'
    },
    {
      icon: <FaHeart />,
      titulo: 'Conciliación',
      descripcion: 'Fomentar la conciliación de la vida personal, familiar y laboral.'
    }
  ]

  const ejes = [
    {
      numero: '1',
      titulo: 'Acceso al empleo',
      descripcion: 'Promover la igualdad en los procesos de selección y contratación',
      medidas: [
        'Uso de lenguaje inclusivo en ofertas de trabajo',
        'Procesos de selección objetivos y transparentes',
        'Eliminación de sesgos de género en la evaluación',
        'Promoción de la diversidad en la bolsa de empleo'
      ]
    },
    {
      numero: '2',
      titulo: 'Clasificación profesional',
      descripcion: 'Garantizar la equidad en la valoración de puestos de trabajo',
      medidas: [
        'Revisión de las descripciones de puestos',
        'Análisis de brechas salariales',
        'Eliminación de estereotipos de género',
        'Promoción basada en méritos objetivos'
      ]
    },
    {
      numero: '3',
      titulo: 'Formación y desarrollo',
      descripcion: 'Facilitar el acceso equitativo a la formación',
      medidas: [
        'Programas de formación accesibles para todos',
        'Cursos de sensibilización en igualdad',
        'Capacitación en liderazgo sin sesgos',
        'Mentorías y desarrollo profesional'
      ]
    },
    {
      numero: '4',
      titulo: 'Retribución',
      descripcion: 'Asegurar la equidad salarial entre hombres y mujeres',
      medidas: [
        'Auditoría salarial periódica',
        'Transparencia en las políticas retributivas',
        'Corrección de desigualdades detectadas',
        'Sistema de evaluación objetivo'
      ]
    },
    {
      numero: '5',
      titulo: 'Conciliación',
      descripcion: 'Facilitar el equilibrio entre vida personal y profesional',
      medidas: [
        'Flexibilidad horaria cuando sea posible',
        'Apoyo en periodos de maternidad y paternidad',
        'Políticas de teletrabajo inclusivas',
        'Respeto a los permisos y licencias'
      ]
    },
    {
      numero: '6',
      titulo: 'Prevención del acoso',
      descripcion: 'Crear entornos seguros y respetuosos',
      medidas: [
        'Protocolo de actuación ante el acoso',
        'Canales de denuncia confidenciales',
        'Formación en prevención del acoso',
        'Actuación inmediata ante casos reportados'
      ]
    }
  ]

  const compromisos = [
    'Integrar la perspectiva de género en todas las políticas y programas',
    'Promover la participación equilibrada de mujeres y hombres',
    'Garantizar la igualdad salarial por trabajos de igual valor',
    'Facilitar la conciliación de la vida personal, familiar y laboral',
    'Prevenir y actuar contra cualquier forma de discriminación o acoso',
    'Formar y sensibilizar a todo el equipo en materia de igualdad'
  ]

  const generarPDF = () => {
    const doc = new jsPDF()
    const pageWidth = doc.internal.pageSize.getWidth()
    const pageHeight = doc.internal.pageSize.getHeight()
    const margin = 20
    const contentWidth = pageWidth - 2 * margin
    let yPos = margin
    const primaryBlue = [41, 128, 185]
    const darkBlue = [21, 67, 96]
    const lightGray = [236, 240, 241]

    const checkNewPage = (requiredSpace) => {
      if (yPos + requiredSpace > pageHeight - margin) {
        doc.addPage()
        yPos = margin
        return true
      }
      return false
    }

    const addWrappedText = (text, fontSize, maxWidth, isBold = false) => {
      doc.setFontSize(fontSize)
      doc.setFont('helvetica', isBold ? 'bold' : 'normal')
      const lines = doc.splitTextToSize(text, maxWidth)
      lines.forEach((line) => {
        checkNewPage(fontSize * 0.5)
        doc.text(line, margin, yPos)
        yPos += fontSize * 0.5
      })
    }

    doc.setFillColor(...primaryBlue)
    doc.rect(0, 0, pageWidth, 95, 'F')
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

    doc.setFillColor(...lightGray)
    doc.roundedRect(margin, yPos, contentWidth, 25, 3, 3, 'F')
    doc.setFontSize(18)
    doc.setFont('helvetica', 'bold')
    doc.setTextColor(...darkBlue)
    doc.text('ASOVEDRA', pageWidth / 2, yPos + 17, { align: 'center' })
    yPos += 40

    doc.setFontSize(16)
    doc.setFont('helvetica', 'bold')
    doc.setTextColor(...primaryBlue)
    doc.text('Nuestro Compromiso con la Igualdad', margin, yPos)
    yPos += 8
    doc.setTextColor(0, 0, 0)
    addWrappedText('En ASOVEDRA estamos firmemente comprometidos con la promoción de la igualdad de género y la no discriminación. Este Plan de Igualdad establece las bases de nuestro trabajo para garantizar que todas las personas, independientemente de su género, tengan las mismas oportunidades de desarrollo personal y profesional.', 10, contentWidth)
    yPos += 3

    doc.addPage()
    yPos = margin
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
        doc.text(line, margin + 5, yPos + 17 + idx * 4)
      })
      yPos += 34
    })

    doc.addPage()
    yPos = margin
    doc.setFillColor(...primaryBlue)
    doc.rect(0, yPos, pageWidth, 15, 'F')
    doc.setTextColor(255, 255, 255)
    doc.setFontSize(16)
    doc.setFont('helvetica', 'bold')
    doc.text('EJES DE ACTUACIÓN', pageWidth / 2, yPos + 10, { align: 'center' })
    yPos += 20

    doc.setTextColor(0, 0, 0)
    ejes.forEach((eje) => {
      const requiredSpace = 45 + eje.medidas.length * 4
      checkNewPage(requiredSpace)
      doc.setFillColor(...primaryBlue)
      doc.circle(margin + 7, yPos + 7, 7, 'F')
      doc.setTextColor(255, 255, 255)
      doc.setFontSize(12)
      doc.setFont('helvetica', 'bold')
      doc.text(eje.numero, margin + 7, yPos + 10, { align: 'center' })
      doc.setTextColor(...darkBlue)
      doc.text(eje.titulo, margin + 18, yPos + 10)
      yPos += 18
      doc.setTextColor(60, 60, 60)
      doc.setFontSize(9)
      doc.setFont('helvetica', 'italic')
      const descLines = doc.splitTextToSize(eje.descripcion, contentWidth - 5)
      descLines.forEach((line) => {
        doc.text(line, margin + 5, yPos)
        yPos += 4
      })
      yPos += 3
      doc.setFont('helvetica', 'bold')
      doc.setTextColor(...primaryBlue)
      doc.text('Medidas implementadas:', margin + 5, yPos)
      yPos += 5
      doc.setFont('helvetica', 'normal')
      doc.setTextColor(60, 60, 60)
      doc.setFontSize(8)
      eje.medidas.forEach((medida) => {
        const medidaLines = doc.splitTextToSize(`• ${medida}`, contentWidth - 10)
        medidaLines.forEach((line) => {
          checkNewPage(4)
          doc.text(line, margin + 8, yPos)
          yPos += 4
        })
      })
      yPos += 6
    })

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
      doc.roundedRect(margin, yPos, contentWidth, 10, 2, 2, 'F')
      doc.setFontSize(9)
      doc.setFont('helvetica', 'normal')
      doc.setTextColor(40, 40, 40)
      const compLines = doc.splitTextToSize(`${index + 1}. ${compromiso}`, contentWidth - 10)
      compLines.forEach((line, idx) => {
        doc.text(line, margin + 5, yPos + 6 + idx * 4)
      })
      yPos += 13
    })

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
    ;[
      'Porcentaje de participación por género en programas y servicios',
      'Número de formaciones en igualdad realizadas',
      'Grado de satisfacción con las medidas implementadas',
      'Análisis de brechas y evolución de las mismas'
    ].forEach((ind) => {
      checkNewPage(4)
      doc.text(`• ${ind}`, margin + 5, yPos)
      yPos += 4
    })

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
    doc.save('Plan_Igualdad_ASOVEDRA_2025-2026.pdf')
  }

  return (
    <>
      <SEO
        title="Plan de Igualdad de Género"
        description="Plan de Igualdad de Género 2025-2026 de ASOVEDRA. Nuestro compromiso con la igualdad de oportunidades y la no discriminación."
        keywords="plan igualdad, genero, asovedra, igualdad oportunidades, no discriminacion"
        canonical="/plan-de-igualdad"
      />

      <main className="min-h-screen bg-[linear-gradient(180deg,#020617_0%,#0f172a_38%,#111827_100%)] pt-24 text-white">
        <InternalPageHero
          eyebrow="Compromiso con la igualdad"
          title="Plan de Igualdad de Género"
          description="Marco de actuación 2025-2026 para impulsar igualdad de oportunidades, prevención de discriminaciones y mejora continua."
        />

        <section className="px-4 pb-20 lg:pb-24">
          <div className="mx-auto max-w-4xl">
            <ContentSurface className="p-8 text-center lg:p-10">
              <FaGavel className="mx-auto text-5xl text-blue-300" />
              <h2 className="mt-6 text-3xl font-bold text-white">Nuestro compromiso con la igualdad</h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                Este plan establece una hoja de ruta clara para garantizar igualdad de oportunidades, participación equilibrada y entornos de trabajo respetuosos.
              </p>
            </ContentSurface>
          </div>
        </section>

        <section className="px-4 pb-20 lg:pb-24">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <h2 className="text-3xl font-bold text-white lg:text-4xl">Objetivos estratégicos</h2>
              <p className="mt-4 text-base leading-7 text-slate-300 lg:text-lg">Los pilares fundamentales del Plan de Igualdad.</p>
            </div>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {objetivos.map((objetivo) => (
                <ContentSurface key={objetivo.titulo} className="p-6 text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-white/[0.08] text-xl text-blue-300">
                    {objetivo.icon}
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-white">{objetivo.titulo}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">{objetivo.descripcion}</p>
                </ContentSurface>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 pb-20 lg:pb-24">
          <div className="mx-auto max-w-7xl space-y-5">
            {ejes.map((eje) => (
              <ContentSurface key={eje.numero} className="p-6 sm:p-8">
                <div className="flex flex-col gap-5 lg:flex-row lg:items-start">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-700 text-lg font-bold text-white">
                    {eje.numero}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white">{eje.titulo}</h3>
                    <p className="mt-2 text-base font-medium text-slate-300">{eje.descripcion}</p>
                    <div className="mt-5 grid gap-3 md:grid-cols-2">
                      {eje.medidas.map((medida) => (
                        <div key={medida} className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3 text-sm leading-6 text-slate-300">
                          {medida}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </ContentSurface>
            ))}
          </div>
        </section>

        <section className="px-4 pb-20 lg:pb-24">
          <div className="mx-auto max-w-7xl grid gap-6 lg:grid-cols-[1fr_0.95fr]">
            <ContentSurface className="p-8 lg:p-10">
              <h2 className="text-3xl font-bold text-white">Nuestros compromisos</h2>
              <div className="mt-6 grid gap-4">
                {compromisos.map((compromiso) => (
                  <div key={compromiso} className="flex items-start gap-4 rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-4">
                    <FaHandshake className="mt-1 text-xl text-blue-300" />
                    <p className="text-base leading-7 text-slate-300">{compromiso}</p>
                  </div>
                ))}
              </div>
            </ContentSurface>

            <div className="space-y-6">
              <ContentSurface className="p-8">
                <h2 className="text-2xl font-bold text-white">Seguimiento y evaluación</h2>
                <div className="mt-6 space-y-6">
                  <div>
                    <h3 className="flex items-center gap-2 text-lg font-semibold text-white">
                      <FaChartLine className="text-blue-300" />
                      Monitoreo continuo
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-slate-300">
                      Se realiza seguimiento periódico de las medidas con evaluaciones trimestrales de indicadores de igualdad.
                    </p>
                  </div>
                  <div>
                    <h3 className="flex items-center gap-2 text-lg font-semibold text-white">
                      <FaBullseye className="text-blue-300" />
                      Indicadores de progreso
                    </h3>
                    <div className="mt-3 grid gap-3">
                      {[
                        'Porcentaje de participación por género en programas y servicios',
                        'Número de formaciones en igualdad realizadas',
                        'Grado de satisfacción con las medidas implementadas',
                        'Análisis de brechas y evolución de las mismas'
                      ].map((indicador) => (
                        <div key={indicador} className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3 text-sm leading-6 text-slate-300">
                          {indicador}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="flex items-center gap-2 text-lg font-semibold text-white">
                      <FaUsers className="text-blue-300" />
                      Revisión participativa
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-slate-300">
                      El plan se revisa anualmente con la participación del equipo y de las personas usuarias de los servicios.
                    </p>
                  </div>
                </div>
              </ContentSurface>

              <ContentSurface className="p-8 text-center">
                <h2 className="text-2xl font-bold text-white">Vigencia del plan</h2>
                <p className="mt-4 text-base leading-7 text-slate-300">
                  Este plan tiene una vigencia de 2 años, entre 2025 y 2026, y será revisado al finalizar el periodo.
                </p>
                <button
                  onClick={generarPDF}
                  className="mt-6 inline-flex items-center gap-3 rounded-xl bg-white px-7 py-4 text-sm font-semibold text-slate-950 hover:bg-slate-100"
                >
                  <FaDownload className="text-lg" />
                  Descargar plan completo
                </button>
                <p className="mt-5 text-sm text-slate-400">Aprobado: Octubre 2025 | Próxima revisión: Octubre 2027</p>
              </ContentSurface>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default PlanIgualdad
