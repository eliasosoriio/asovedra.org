import jsPDF from 'jspdf'
import { formatLongDate, formatHour } from './availability'

async function loadImageAsDataUrl(url) {
  const res = await fetch(url)
  const blob = await res.blob()
  return await new Promise((resolve, reject) => {
    const r = new FileReader()
    r.onload = () => resolve(r.result)
    r.onerror = reject
    r.readAsDataURL(blob)
  })
}

export async function downloadAppointmentPdf({ appointment, staffName, staffRole }) {
  const doc = new jsPDF({ unit: 'mm', format: 'a4' })
  const w = doc.internal.pageSize.getWidth()

  // Header band (blanca, así no choca con los colores del logo)
  doc.setFillColor(255, 255, 255)
  doc.rect(0, 0, w, 50, 'F')

  // Logo (favicon.png) arriba a la izquierda
  try {
    const logo = await loadImageAsDataUrl('/favicon.png')
    const logoSize = 18
    doc.addImage(logo, 'PNG', 20, 6, logoSize, logoSize)
  } catch {
    // si no se puede cargar, seguimos sin logo
  }

  doc.setTextColor(0, 30, 119)
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(20)
  doc.text('ASOVEDRA', 44, 18)
  doc.setFontSize(11)
  doc.setFont('helvetica', 'normal')
  doc.setTextColor(71, 85, 105)
  doc.text('Asociación de Venezolanos en Pontevedra', 44, 26)

  // Title
  doc.setTextColor(15, 23, 42)
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(18)
  doc.text('Justificante de cita', 20, 70)

  // Body lines
  doc.setFont('helvetica', 'normal')
  doc.setFontSize(12)
  const date = new Date(appointment.starts_at)
  const dateStr = formatLongDate(date)
  const start = formatHour(appointment.starts_at)
  const end = formatHour(appointment.ends_at)

  let y = 88
  const line = (label, value) => {
    doc.setFont('helvetica', 'bold')
    doc.text(`${label}:`, 20, y)
    doc.setFont('helvetica', 'normal')
    doc.text(String(value), 70, y)
    y += 9
  }

  line('Cliente', `${appointment.client_first_name} ${appointment.client_last_name}`)
  line('Email', appointment.client_email)
  line('Teléfono', appointment.client_phone)
  line('Atendido por', staffName + (staffRole ? ` (${staffRole})` : ''))
  line('Fecha', dateStr)
  line('Hora', `${start} - ${end}`)
  if (appointment.reason) {
    doc.setFont('helvetica', 'bold')
    doc.text('Motivo:', 20, y)
    doc.setFont('helvetica', 'normal')
    const wrappedReason = doc.splitTextToSize(String(appointment.reason), w - 90)
    doc.text(wrappedReason, 70, y)
    y += 9 * Math.max(1, wrappedReason.length)
  }
  line('Referencia', appointment.id)

  y += 6
  doc.setFontSize(10)
  doc.setTextColor(71, 85, 105)
  const footerText =
    'Para cancelar o modificar su cita póngase en contacto con info@asovedra.org o al +34 604 016 113. ' +
    'Le recordamos llegar con 5 minutos de antelación.'
  const wrapped = doc.splitTextToSize(footerText, w - 40)
  doc.text(wrapped, 20, y)

  // Bottom band
  doc.setFillColor(15, 23, 42)
  doc.rect(0, 287, w, 10, 'F')
  doc.setTextColor(255, 255, 255)
  doc.setFontSize(9)
  doc.text('asovedra.org', 20, 294)

  doc.save(`cita-asovedra-${appointment.id.slice(0, 8)}.pdf`)
}
