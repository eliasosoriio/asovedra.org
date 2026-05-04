import { useEffect, useMemo, useState } from 'react'
import { DayPicker } from 'react-day-picker'
import 'react-day-picker/dist/style.css'
import { es } from 'date-fns/locale'
import { startOfMonth, endOfMonth, addMonths } from 'date-fns'
import { supabase } from '../../lib/supabase'
import { formatHour, ymdInTz } from '../../lib/availability'
import AppointmentEditModal from './AppointmentEditModal'

export default function MyCalendar({ userId }) {
  const [month, setMonth] = useState(new Date())
  const [appts, setAppts] = useState([])
  const [selectedDay, setSelectedDay] = useState(new Date())
  const [editing, setEditing] = useState(null)

  const reload = async () => {
    const from = startOfMonth(month).toISOString()
    const to = endOfMonth(addMonths(month, 0)).toISOString()
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
  useEffect(() => { reload() }, [userId, month])

  const dayBuckets = useMemo(() => {
    const m = {}
    for (const a of appts) {
      const key = ymdInTz(a.starts_at)
      if (!m[key]) m[key] = []
      m[key].push(a)
    }
    return m
  }, [appts])

  const selectedKey = ymdInTz(selectedDay)
  const dayList = dayBuckets[selectedKey] ?? []

  const modifiers = {
    hasAppts: Object.keys(dayBuckets).map(k => new Date(k))
  }

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4 booking-daypicker">
        <DayPicker
          mode="single"
          locale={es}
          weekStartsOn={1}
          selected={selectedDay}
          onSelect={(d) => d && setSelectedDay(d)}
          month={month}
          onMonthChange={setMonth}
          modifiers={modifiers}
          modifiersClassNames={{ hasAppts: 'rdp-day_hasAppts' }}
        />
      </div>
      <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
        <h3 className="mb-3 text-lg font-semibold text-white">Citas del día</h3>
        {dayList.length === 0 && <p className="text-sm text-slate-400">No hay citas.</p>}
        <ul className="space-y-2">
          {dayList.map(a => (
            <li key={a.id}>
              <button onClick={() => setEditing(a)} className="flex w-full items-center justify-between rounded-lg border border-white/10 bg-white/[0.05] px-3 py-2 text-left hover:bg-white/[0.08]">
                <div>
                  <div className="text-sm font-semibold text-white">{formatHour(a.starts_at)} – {formatHour(a.ends_at)}</div>
                  <div className="text-xs text-slate-300">{a.client_first_name} {a.client_last_name} · {a.client_phone}</div>
                </div>
                <span className={`rounded-full px-2 py-1 text-[10px] font-semibold ${a.status === 'confirmed' ? 'bg-emerald-500/20 text-emerald-300' : 'bg-red-500/20 text-red-300'}`}>
                  {a.status === 'confirmed' ? 'Confirmada' : 'Cancelada'}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
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
