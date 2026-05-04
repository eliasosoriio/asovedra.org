import { buildSlotsForDay, filterFreeSlots } from './availability'

// Given a list of staff (with weeklySlots, blockedDates, busyRanges) and an appointment slot,
// pick a random staff that is free for that slot.
export function pickRandomAvailableStaff({ candidates, slotStart, slotEnd, dateYmd }) {
  const free = candidates.filter(c => {
    if (c.blockedDates?.has(dateYmd)) return false
    for (const b of c.busyRanges) {
      const bs = new Date(b.starts_at).getTime()
      const be = new Date(b.ends_at).getTime()
      if (slotStart.getTime() < be && slotEnd.getTime() > bs) return false
    }
    // Slot must be inside one of the candidate's weekly slots
    const slots = buildSlotsForDay({ date: slotStart, weeklySlots: c.weeklySlots, appointmentMinutes: c.appointment_minutes })
    return slots.some(s => s.start.getTime() === slotStart.getTime() && s.end.getTime() === slotEnd.getTime())
  })
  if (!free.length) return null
  return free[Math.floor(Math.random() * free.length)]
}

// Compute the union of free slot starts across multiple staff for a given day.
// Returns Map<startISO, { start, end, staffIds: string[] }>
export function unionFreeSlotsForDay({ candidates, date }) {
  const map = new Map()
  for (const c of candidates) {
    const slots = buildSlotsForDay({ date, weeklySlots: c.weeklySlots, appointmentMinutes: c.appointment_minutes })
    const dateYmd = date.toISOString().slice(0,10) // approximate; only used for blocked lookup separately
    const free = filterFreeSlots({
      slots,
      busyRanges: c.busyRanges,
      blockedDates: c.blockedDates,
      dateYmd
    })
    for (const s of free) {
      const key = s.start.toISOString() + '|' + s.end.toISOString()
      if (!map.has(key)) map.set(key, { start: s.start, end: s.end, staffIds: [] })
      map.get(key).staffIds.push(c.id)
    }
  }
  return [...map.values()].sort((a, b) => a.start - b.start)
}
