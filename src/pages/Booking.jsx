import { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import InternalPageHero from '../components/layout/InternalPageHero'
import SEO from '../components/SEO'
import StaffPicker from '../components/booking/StaffPicker'
import DayTimePicker from '../components/booking/DayTimePicker'
import ClientForm from '../components/booking/ClientForm'
import { fetchActiveStaff, createAppointment, fetchBusyRanges } from '../lib/bookingData'
import { supabase } from '../lib/supabase'
import { formatHour, formatLongDate } from '../lib/availability'

const STEPS = ['Profesional', 'Día y hora', 'Tus datos']

export default function Booking() {
  const navigate = useNavigate()
  const [staff, setStaff] = useState([])
  const [loading, setLoading] = useState(true)
  const [step, setStep] = useState(0)
  const [selectedStaffId, setSelectedStaffId] = useState(null) // 'any' | uuid
  const [selectedSlot, setSelectedSlot] = useState(null) // { start, end, staffIds }
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchActiveStaff().then(s => { setStaff(s); setLoading(false) }).catch(e => { setError(e.message); setLoading(false) })
  }, [])

  const selectedStaff = useMemo(() => {
    if (!selectedSlot) return null
    if (selectedStaffId !== 'any') return staff.find(s => s.id === selectedStaffId) ?? null
    const id = selectedSlot.staffIds[0]
    return staff.find(s => s.id === id) ?? null
  }, [selectedSlot, selectedStaffId, staff])

  const handleConfirm = async (formValues) => {
    setSubmitting(true)
    setError(null)
    try {
      let staffId
      if (selectedStaffId === 'any') {
        // Re-fetch busy ranges to assign to a still-free random staff
        const candidates = staff.filter(s => s.accepts_random && selectedSlot.staffIds.includes(s.id))
        const enriched = await Promise.all(candidates.map(async c => {
          const busy = await fetchBusyRanges(c.id, selectedSlot.start.toISOString(), selectedSlot.end.toISOString())
          return { ...c, weeklySlots: [], blockedDates: new Set(), busyRanges: busy }
        }))
        // skip schedule check (already validated)
        const free = enriched.filter(c => c.busyRanges.length === 0)
        const chosen = free[Math.floor(Math.random() * free.length)]
        if (!chosen) {
          setError('Lo sentimos, ese hueco se acaba de ocupar. Por favor elige otro.')
          setSubmitting(false)
          return
        }
        staffId = chosen.id
      } else {
        staffId = selectedStaffId
      }

      const appt = await createAppointment({
        staff_id: staffId,
        starts_at: selectedSlot.start.toISOString(),
        ends_at: selectedSlot.end.toISOString(),
        client_first_name: formValues.client_first_name,
        client_last_name: formValues.client_last_name,
        client_email: formValues.client_email,
        client_phone: formValues.client_phone,
        reason: formValues.reason?.trim() || null
      })
      // Fire-and-forget email notifications
      supabase.functions.invoke('send-booking-emails', { body: { appointmentId: appt.id } })
        .then(r => console.log('[booking-emails]', r))
        .catch(err => console.error('[booking-emails] error', err))
      const staffName = (staff.find(s => s.id === staffId) ?? {}).full_name ?? ''
      const staffRole = (staff.find(s => s.id === staffId) ?? {}).role ?? null
      navigate(`/agendar/confirmacion/${appt.id}`, { state: { appointment: appt, staff: { full_name: staffName, role: staffRole } } })
    } catch (e) {
      setError(e.message?.includes('duplicate') ? 'Ese hueco se acaba de ocupar. Por favor elige otro.' : e.message)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(to bottom, #020617, #0f172a, #020617)' }}>
      <SEO pageTitle="Reservar cita" description="Agenda una cita con un profesional de ASOVEDRA." />
      <InternalPageHero
        eyebrow="Atención personalizada"
        title="Reservar una cita"
        description="Tres pasos: elige profesional, selecciona día y hora, e introduce tus datos."
      />
      <section className="px-4 pb-24">
        <div className="mx-auto max-w-5xl">
          <Stepper step={step} />

          {loading && <p className="mt-6 text-slate-300">Cargando…</p>}
          {error && <p className="mt-6 rounded-xl border border-red-400/40 bg-red-500/10 p-4 text-sm text-red-200">{error}</p>}

          {!loading && step === 0 && (
            <div className="mt-8 rounded-[1.8rem] border border-white/8 bg-white/[0.04] p-6 backdrop-blur-sm">
              <h2 className="mb-4 text-xl font-semibold text-white">¿Con quién quieres tu cita?</h2>
              <StaffPicker
                staff={staff}
                value={selectedStaffId}
                onChange={(id) => { setSelectedStaffId(id); setSelectedSlot(null) }}
              />
              <div className="mt-6 flex justify-end">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  disabled={!selectedStaffId}
                  className="rounded-xl bg-white px-7 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100 disabled:opacity-60"
                >
                  Continuar
                </button>
              </div>
            </div>
          )}

          {!loading && step === 1 && (
            <div className="mt-8 rounded-[1.8rem] border border-white/8 bg-white/[0.04] p-6 backdrop-blur-sm">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-xl font-semibold text-white">Elige día y hora</h2>
                <button onClick={() => setStep(0)} className="text-sm text-slate-300 hover:text-white">
                  ← Cambiar profesional
                </button>
              </div>
              <DayTimePicker
                staff={staff}
                selectedStaffId={selectedStaffId}
                onSelectSlot={(slot) => { setSelectedSlot(slot); setStep(2) }}
              />
            </div>
          )}

          {!loading && step === 2 && selectedSlot && (
            <div className="mt-8 rounded-[1.8rem] border border-white/8 bg-white/[0.04] p-6 backdrop-blur-sm">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-xl font-semibold text-white">Tus datos</h2>
                <button onClick={() => setStep(1)} className="text-sm text-slate-300 hover:text-white">
                  ← Cambiar hora
                </button>
              </div>
              <div className="mb-6 rounded-xl border border-white/10 bg-white/[0.05] p-4 text-sm text-slate-200">
                <div><strong>Fecha:</strong> {formatLongDate(selectedSlot.start)}</div>
                <div><strong>Hora:</strong> {formatHour(selectedSlot.start)} – {formatHour(selectedSlot.end)}</div>
                {selectedStaff && <div><strong>Profesional:</strong> {selectedStaffId === 'any' ? 'Sin preferencia' : selectedStaff.full_name}</div>}
              </div>
              <ClientForm submitting={submitting} onSubmit={handleConfirm} />
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

function Stepper({ step }) {
  return (
    <ol className="flex items-center justify-center gap-2 text-xs sm:text-sm">
      {STEPS.map((label, i) => (
        <li key={label} className="flex items-center gap-2">
          <span className={`flex h-7 w-7 items-center justify-center rounded-full border ${
            i <= step ? 'border-blue-400 bg-blue-500/20 text-white' : 'border-white/15 text-slate-400'
          }`}>{i + 1}</span>
          <span className={i <= step ? 'text-white' : 'text-slate-400'}>{label}</span>
          {i < STEPS.length - 1 && <span className="mx-2 h-px w-8 bg-white/10" />}
        </li>
      ))}
    </ol>
  )
}
