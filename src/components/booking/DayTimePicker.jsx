import { useEffect, useMemo, useState } from 'react'
import { DayPicker } from 'react-day-picker'
import 'react-day-picker/dist/style.css'
import { es } from 'date-fns/locale'
import { addMonths, startOfMonth, endOfMonth } from 'date-fns'
import { buildSlotsForDay, filterFreeSlots, formatHour, ymdInTz } from '../../lib/availability'
import { unionFreeSlotsForDay } from '../../lib/randomAssignment'
import { fetchBusyRanges, fetchStaffBlockedDays, fetchStaffWeeklySlots } from '../../lib/bookingData'

export default function DayTimePicker({ staff, selectedStaffId, onSelectSlot }) {
  const candidates = useMemo(() => {
    if (selectedStaffId === 'any') return staff.filter(s => s.accepts_random)
    return staff.filter(s => s.id === selectedStaffId)
  }, [staff, selectedStaffId])

  const [enriched, setEnriched] = useState([]) // candidates with weeklySlots/blockedDates/busyRanges
  const [loading, setLoading] = useState(true)
  const [selectedDay, setSelectedDay] = useState(null)
  const [month, setMonth] = useState(new Date())

  useEffect(() => {
    let alive = true
    setLoading(true)
    const ids = candidates.map(c => c.id)
    if (!ids.length) { setEnriched([]); setLoading(false); return }
    const from = startOfMonth(month).toISOString()
    const to = endOfMonth(addMonths(month, 1)).toISOString()
    Promise.all([
      fetchStaffWeeklySlots(ids),
      fetchStaffBlockedDays(ids),
      Promise.all(ids.map(id => fetchBusyRanges(id, from, to).then(busy => [id, busy])))
    ]).then(([weekly, blocked, busyPairs]) => {
      if (!alive) return
      const busyMap = Object.fromEntries(busyPairs)
      const blockedByStaff = {}
      for (const b of blocked) {
        if (!blockedByStaff[b.staff_id]) blockedByStaff[b.staff_id] = new Set()
        blockedByStaff[b.staff_id].add(b.date)
      }
      const result = candidates.map(c => ({
        ...c,
        weeklySlots: weekly.filter(w => w.staff_id === c.id),
        blockedDates: blockedByStaff[c.id] ?? new Set(),
        busyRanges: busyMap[c.id] ?? []
      }))
      setEnriched(result)
      setLoading(false)
    }).catch(() => { if (alive) setLoading(false) })
    return () => { alive = false }
  }, [candidates, month])

  const slotsForSelectedDay = useMemo(() => {
    if (!selectedDay || !enriched.length) return []
    if (selectedStaffId === 'any') {
      return unionFreeSlotsForDay({ candidates: enriched, date: selectedDay })
    }
    const c = enriched[0]
    if (!c) return []
    const ymd = ymdInTz(selectedDay)
    const slots = buildSlotsForDay({
      date: selectedDay,
      weeklySlots: c.weeklySlots,
      appointmentMinutes: c.appointment_minutes
    })
    const free = filterFreeSlots({
      slots,
      busyRanges: c.busyRanges,
      blockedDates: c.blockedDates,
      dateYmd: ymd
    })
    return free.map(s => ({ ...s, staffIds: [c.id] }))
  }, [selectedDay, enriched, selectedStaffId])

  const today = new Date()
  today.setHours(0, 0, 0, 0)

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4 booking-daypicker">
        <DayPicker
          mode="single"
          locale={es}
          selected={selectedDay}
          onSelect={setSelectedDay}
          month={month}
          onMonthChange={setMonth}
          disabled={{ before: today }}
          weekStartsOn={1}
        />
      </div>
      <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
        <h3 className="mb-4 text-lg font-semibold text-white">
          {selectedDay ? 'Selecciona una hora' : 'Selecciona primero un día'}
        </h3>
        {loading && <p className="text-sm text-slate-400">Cargando disponibilidad…</p>}
        {!loading && selectedDay && slotsForSelectedDay.length === 0 && (
          <p className="text-sm text-slate-400">No hay huecos disponibles ese día.</p>
        )}
        <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
          {slotsForSelectedDay.map(s => (
            <button
              key={s.start.toISOString()}
              type="button"
              onClick={() => onSelectSlot(s)}
              className="rounded-lg border border-white/10 bg-white/[0.06] px-3 py-2 text-sm font-medium text-white transition hover:border-blue-400 hover:bg-blue-500/15"
            >
              {formatHour(s.start)}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
