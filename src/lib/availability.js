import { fromZonedTime, toZonedTime } from 'date-fns-tz'
import { addMinutes, format, isBefore, isEqual } from 'date-fns'
import { es } from 'date-fns/locale'
import { TIMEZONE } from './supabase'

// weekday: 0=Mon ... 6=Sun (matches schema)
export function jsDayToWeekday(d) {
  const dow = d.getDay() // 0=Sun..6=Sat
  return (dow + 6) % 7
}

// Build candidate slots for a given calendar day (Europe/Madrid) given staff's weekly slots.
// Returns array of { start: Date (UTC), end: Date (UTC) } that fit appointmentMinutes.
export function buildSlotsForDay({ date, weeklySlots, appointmentMinutes }) {
  const zoned = toZonedTime(date, TIMEZONE)
  const weekday = jsDayToWeekday(zoned)
  const ymd = format(zoned, 'yyyy-MM-dd')
  const ranges = weeklySlots.filter(s => s.weekday === weekday)
  const out = []
  for (const r of ranges) {
    let cursorLocal = fromZonedTime(`${ymd}T${r.start_time.slice(0,5)}:00`, TIMEZONE)
    const endLocal = fromZonedTime(`${ymd}T${r.end_time.slice(0,5)}:00`, TIMEZONE)
    while (true) {
      const slotEnd = addMinutes(cursorLocal, appointmentMinutes)
      if (isBefore(endLocal, slotEnd)) break
      out.push({ start: cursorLocal, end: slotEnd })
      cursorLocal = slotEnd
    }
  }
  return out
}

export function filterFreeSlots({ slots, busyRanges, blockedDates, dateYmd }) {
  if (blockedDates && blockedDates.has(dateYmd)) return []
  return slots.filter(slot => {
    for (const b of busyRanges) {
      const bs = new Date(b.starts_at).getTime()
      const be = new Date(b.ends_at).getTime()
      if (slot.start.getTime() < be && slot.end.getTime() > bs) return false
    }
    return true
  })
}

export function ymdInTz(date) {
  return format(toZonedTime(date, TIMEZONE), 'yyyy-MM-dd')
}

export function formatHour(date) {
  return format(toZonedTime(date, TIMEZONE), 'HH:mm')
}

export function formatLongDate(date) {
  const zoned = toZonedTime(date, TIMEZONE)
  return format(zoned, "EEEE d 'de' MMMM yyyy", { locale: es })
}

// Returns true if day-of-week has any weekly slots configured
export function hasWeeklySchedule(weeklySlots, date) {
  const wd = jsDayToWeekday(toZonedTime(date, TIMEZONE))
  return weeklySlots.some(s => s.weekday === wd)
}

export const isSameSlot = (a, b) => isEqual(a.start, b.start) && isEqual(a.end, b.end)
