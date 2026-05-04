import { useEffect, useState } from 'react'
import { addDays, format } from 'date-fns'
import { fromZonedTime } from 'date-fns-tz'
import { supabase, TIMEZONE } from '../../lib/supabase'
import { formatHour, formatLongDate } from '../../lib/availability'
import AppointmentEditModal from './AppointmentEditModal'

export default function DayAgenda({ userId }) {
  const [day, setDay] = useState(new Date())
  const [appts, setAppts] = useState([])
  const [editing, setEditing] = useState(null)

  const reload = async () => {
    const ymd = format(day, 'yyyy-MM-dd')
    const from = fromZonedTime(`${ymd}T00:00:00`, TIMEZONE).toISOString()
    const to = fromZonedTime(`${ymd}T23:59:59`, TIMEZONE).toISOString()
    const { data } = await supabase
      .from('appointments')
      .select('*')
      .eq('staff_id', userId)
      .gte('starts_at', from)
      .lte('starts_at', to)
      .order('starts_at')
    setAppts(data ?? [])
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { reload() }, [userId, day])

  return (
    <div>
      <div className="mb-4 flex flex-wrap items-center gap-3">
        <button onClick={() => setDay(d => addDays(d, -1))} className="rounded-lg border border-white/10 bg-white/[0.05] px-3 py-2 text-sm text-white hover:bg-white/[0.08]">← Día anterior</button>
        <input type="date" value={format(day, 'yyyy-MM-dd')} onChange={e => setDay(new Date(e.target.value))} className="rounded-lg border border-white/10 bg-white/[0.05] px-3 py-2 text-sm text-white" />
        <button onClick={() => setDay(d => addDays(d, 1))} className="rounded-lg border border-white/10 bg-white/[0.05] px-3 py-2 text-sm text-white hover:bg-white/[0.08]">Día siguiente →</button>
        <button onClick={() => setDay(new Date())} className="rounded-lg border border-blue-400/30 bg-blue-500/15 px-3 py-2 text-sm text-blue-100 hover:bg-blue-500/25">Hoy</button>
      </div>
      <h3 className="mb-3 text-lg font-semibold text-white capitalize">{formatLongDate(day)}</h3>
      {appts.length === 0 && <p className="text-sm text-slate-400">Sin citas para este día.</p>}
      <ul className="space-y-2">
        {appts.map(a => (
          <li key={a.id}>
            <button onClick={() => setEditing(a)} className="flex w-full items-center justify-between rounded-lg border border-white/10 bg-white/[0.05] px-4 py-3 text-left hover:bg-white/[0.08]">
              <div>
                <div className="text-sm font-semibold text-white">{formatHour(a.starts_at)} – {formatHour(a.ends_at)}</div>
                <div className="text-xs text-slate-300">{a.client_first_name} {a.client_last_name} · {a.client_email} · {a.client_phone}</div>
                {a.reason && <div className="mt-1 text-xs text-blue-200"><span className="font-semibold">Motivo:</span> {a.reason}</div>}
                {a.notes && <div className="mt-1 text-xs text-slate-400">{a.notes}</div>}
              </div>
              <span className={`rounded-full px-2 py-1 text-[10px] font-semibold ${a.status === 'confirmed' ? 'bg-emerald-500/20 text-emerald-300' : 'bg-red-500/20 text-red-300'}`}>
                {a.status === 'confirmed' ? 'Confirmada' : 'Cancelada'}
              </span>
            </button>
          </li>
        ))}
      </ul>
      {editing && (
        <AppointmentEditModal
          appointment={editing}
          onClose={() => setEditing(null)}
          onChanged={() => { setEditing(null); reload() }}
        />
      )}
    </div>
  )
}
