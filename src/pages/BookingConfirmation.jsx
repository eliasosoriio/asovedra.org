import { useEffect, useState } from 'react'
import { useParams, useLocation, Link } from 'react-router-dom'
import { FaCheckCircle, FaCalendarPlus, FaFilePdf } from 'react-icons/fa'
import InternalPageHero from '../components/layout/InternalPageHero'
import SEO from '../components/SEO'
import { buildIcs, downloadIcs } from '../lib/ics'
import { downloadAppointmentPdf } from '../lib/appointmentPdf'
import { formatHour, formatLongDate } from '../lib/availability'

export default function BookingConfirmation() {
  const { appointmentId } = useParams()
  const location = useLocation()
  const stateData = location.state
  const [appt, setAppt] = useState(stateData?.appointment ?? null)
  const [staff, setStaff] = useState(stateData?.staff ?? null)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!appt) {
      setError('No se ha podido cargar la cita. Si necesitas un justificante, contacta con info@asovedra.org indicando la referencia ' + appointmentId)
    }
  }, [appt, appointmentId])

  const handleIcs = () => {
    const ics = buildIcs({
      uid: `${appt.id}@asovedra.org`,
      start: appt.starts_at,
      end: appt.ends_at,
      title: `Cita ASOVEDRA - ${staff?.full_name ?? ''}`,
      description: `Cita con ${staff?.full_name ?? ''}. Cliente: ${appt.client_first_name} ${appt.client_last_name}.${appt.reason ? ' Motivo: ' + appt.reason : ''}`,
      location: 'ASOVEDRA, Pontevedra'
    })
    downloadIcs(`cita-asovedra-${appt.id.slice(0,8)}.ics`, ics)
  }

  const handlePdf = async () => {
    await downloadAppointmentPdf({ appointment: appt, staffName: staff?.full_name ?? '', staffRole: staff?.role })
  }

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(to bottom, #020617, #0f172a, #020617)' }}>
      <SEO pageTitle="Cita confirmada" description="Confirmación de cita en ASOVEDRA." />
      <InternalPageHero eyebrow="Cita confirmada" title="¡Tu cita está reservada!" description="Te hemos enviado un correo con los detalles." />
      <section className="px-4 pb-24">
        <div className="mx-auto max-w-3xl">
          {error && <p className="rounded-xl border border-red-400/40 bg-red-500/10 p-4 text-sm text-red-200">{error}</p>}
          {!appt && !error && <p className="text-slate-300">Cargando…</p>}
          {appt && (
            <div className="rounded-[1.8rem] border border-white/8 bg-white/[0.04] p-8 backdrop-blur-sm">
              <FaCheckCircle className="mb-4 text-5xl text-emerald-400" />
              <div className="space-y-2 text-slate-200">
                <Row label="Fecha" value={formatLongDate(appt.starts_at)} />
                <Row label="Hora" value={`${formatHour(appt.starts_at)} – ${formatHour(appt.ends_at)}`} />
                <Row label="Profesional" value={staff?.full_name ?? '—'} />
                <Row label="A nombre de" value={`${appt.client_first_name} ${appt.client_last_name}`} />
                <Row label="Email" value={appt.client_email} />
                <Row label="Teléfono" value={appt.client_phone} />
                {appt.reason && <Row label="Motivo" value={appt.reason} />}
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <button onClick={handleIcs} className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100">
                  <FaCalendarPlus /> Añadir al calendario
                </button>
                <button onClick={handlePdf} className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.06] px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/[0.1]">
                  <FaFilePdf /> Descargar justificante
                </button>
              </div>

              <p className="mt-6 text-xs text-slate-400">
                Si necesitas cancelar, usa el enlace que te hemos enviado por email o
                {' '}
                <Link to={`/agendar/cancelar/${appt.cancel_token}`} className="underline hover:text-white">
                  cancela aquí
                </Link>.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

function Row({ label, value }) {
  return (
    <div className="grid grid-cols-[110px_1fr] gap-4 border-b border-white/5 py-2 text-sm">
      <span className="text-slate-400">{label}</span>
      <span className="break-words text-white">{value}</span>
    </div>
  )
}
