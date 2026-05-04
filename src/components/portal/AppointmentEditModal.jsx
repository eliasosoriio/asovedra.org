import { useState } from 'react'
import { supabase } from '../../lib/supabase'
import { formatHour, formatLongDate } from '../../lib/availability'

const inputCls = 'w-full rounded-lg border border-white/10 bg-white/[0.05] px-3 py-2 text-sm text-white outline-none focus:border-blue-400'

function toLocalInput(iso) {
  // Convierte timestamp ISO a formato datetime-local (zona local del navegador)
  const d = new Date(iso)
  const pad = (n) => String(n).padStart(2, '0')
  return `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`
}

function notify(appointmentId, event, extra = {}) {
  return supabase.functions
    .invoke('send-booking-emails', { body: { appointmentId, event, ...extra } })
    .then(r => console.log('[booking-emails]', event, r))
    .catch(e => console.error('[booking-emails] error', e))
}

export default function AppointmentEditModal({ appointment, onClose, onChanged }) {
  const [notes, setNotes] = useState(appointment.notes ?? '')
  const [phone, setPhone] = useState(appointment.client_phone)
  const [email, setEmail] = useState(appointment.client_email)
  const [first, setFirst] = useState(appointment.client_first_name)
  const [last, setLast] = useState(appointment.client_last_name)
  const [startsAt, setStartsAt] = useState(toLocalInput(appointment.starts_at))
  const [duration, setDuration] = useState(Math.round((new Date(appointment.ends_at) - new Date(appointment.starts_at)) / 60000))
  const [busy, setBusy] = useState(false)

  const save = async () => {
    setBusy(true)
    const newStart = new Date(startsAt)
    const newEnd = new Date(newStart.getTime() + duration * 60000)
    const previousStartsAt = appointment.starts_at
    const dateChanged = newStart.toISOString() !== new Date(appointment.starts_at).toISOString()
                       || newEnd.toISOString() !== new Date(appointment.ends_at).toISOString()

    await supabase.from('appointments').update({
      notes,
      client_phone: phone,
      client_email: email,
      client_first_name: first,
      client_last_name: last,
      starts_at: newStart.toISOString(),
      ends_at: newEnd.toISOString()
    }).eq('id', appointment.id)

    if (dateChanged && appointment.status === 'confirmed') {
      await notify(appointment.id, 'rescheduled', { previousStartsAt })
    }

    setBusy(false)
    onChanged()
  }

  const cancel = async () => {
    if (!window.confirm('¿Cancelar esta cita? Se enviará un email al cliente avisándole.')) return
    setBusy(true)
    await supabase.from('appointments').update({ status: 'cancelled' }).eq('id', appointment.id)
    await notify(appointment.id, 'cancelled')
    setBusy(false)
    onChanged()
  }

  const remove = async () => {
    if (!window.confirm('Eliminar definitivamente esta cita? El cliente NO recibirá email.')) return
    setBusy(true)
    await supabase.from('appointments').delete().eq('id', appointment.id)
    setBusy(false)
    onChanged()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
      <div className="w-full max-w-lg rounded-2xl border border-white/10 bg-[#0f172a] p-6">
        <div className="mb-4 flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold text-white">Editar cita</h3>
            <p className="text-sm text-slate-400">
              {formatLongDate(appointment.starts_at)} · {formatHour(appointment.starts_at)} – {formatHour(appointment.ends_at)}
            </p>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-white">✕</button>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="col-span-2 grid grid-cols-2 gap-3 rounded-lg border border-white/10 bg-white/[0.04] p-3">
            <div>
              <label className="mb-1 block text-xs text-slate-300">Fecha y hora de inicio</label>
              <input type="datetime-local" className={inputCls} value={startsAt} onChange={e => setStartsAt(e.target.value)} />
            </div>
            <div>
              <label className="mb-1 block text-xs text-slate-300">Duración (min)</label>
              <input type="number" min={5} step={5} className={inputCls} value={duration} onChange={e => setDuration(parseInt(e.target.value, 10) || 30)} />
            </div>
          </div>
          <div><label className="mb-1 block text-xs text-slate-300">Nombre</label><input className={inputCls} value={first} onChange={e => setFirst(e.target.value)} /></div>
          <div><label className="mb-1 block text-xs text-slate-300">Apellidos</label><input className={inputCls} value={last} onChange={e => setLast(e.target.value)} /></div>
          <div><label className="mb-1 block text-xs text-slate-300">Email</label><input className={inputCls} value={email} onChange={e => setEmail(e.target.value)} /></div>
          <div><label className="mb-1 block text-xs text-slate-300">Teléfono</label><input className={inputCls} value={phone} onChange={e => setPhone(e.target.value)} /></div>
          {appointment.reason && (
            <div className="col-span-2"><label className="mb-1 block text-xs text-slate-300">Motivo indicado por el cliente</label><div className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-slate-200 whitespace-pre-wrap">{appointment.reason}</div></div>
          )}
          <div className="col-span-2"><label className="mb-1 block text-xs text-slate-300">Notas internas</label><textarea rows={3} className={inputCls} value={notes} onChange={e => setNotes(e.target.value)} /></div>
        </div>
        <div className="mt-5 flex flex-wrap items-center justify-between gap-2">
          <div className="flex gap-2">
            {appointment.status === 'confirmed' && (
              <button disabled={busy} onClick={cancel} className="rounded-lg border border-red-400/30 bg-red-500/15 px-3 py-2 text-sm text-red-200 hover:bg-red-500/25">Cancelar cita</button>
            )}
            <button disabled={busy} onClick={remove} className="rounded-lg border border-white/10 bg-white/[0.05] px-3 py-2 text-sm text-slate-300 hover:bg-white/[0.08]">Eliminar</button>
          </div>
          <div className="flex gap-2">
            <button onClick={onClose} className="rounded-lg border border-white/10 bg-white/[0.05] px-3 py-2 text-sm text-white hover:bg-white/[0.08]">Cerrar</button>
            <button disabled={busy} onClick={save} className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-slate-100">Guardar</button>
          </div>
        </div>
      </div>
    </div>
  )
}
