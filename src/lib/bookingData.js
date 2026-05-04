import { supabase } from './supabase'

export async function fetchActiveStaff() {
  const { data, error } = await supabase
    .from('staff_profiles')
    .select('id, full_name, role, appointment_minutes, accepts_random')
    .eq('is_active', true)
    .order('full_name')
  if (error) throw error
  return data ?? []
}

export async function fetchStaffWeeklySlots(staffIds) {
  if (!staffIds.length) return []
  const { data, error } = await supabase
    .from('weekly_slots')
    .select('id, staff_id, weekday, start_time, end_time')
    .in('staff_id', staffIds)
  if (error) throw error
  return data ?? []
}

export async function fetchStaffBlockedDays(staffIds) {
  if (!staffIds.length) return []
  const { data, error } = await supabase
    .from('blocked_days')
    .select('id, staff_id, date')
    .in('staff_id', staffIds)
  if (error) throw error
  return data ?? []
}

export async function fetchBusyRanges(staffId, fromIso, toIso) {
  const { data, error } = await supabase.rpc('staff_busy_ranges', {
    p_staff_id: staffId,
    p_from: fromIso,
    p_to: toIso
  })
  if (error) throw error
  return data ?? []
}

export async function createAppointment(payload) {
  // Generate id + cancel_token client-side so we don't need SELECT-after-INSERT
  // (anon role has no SELECT on appointments — only INSERT).
  const full = {
    id: crypto.randomUUID(),
    cancel_token: crypto.randomUUID(),
    status: 'confirmed',
    ...payload
  }
  const { error } = await supabase.from('appointments').insert(full)
  if (error) throw error
  return full
}

export async function fetchAppointmentById(id) {
  const { data, error } = await supabase
    .from('appointments')
    .select('id, staff_id, starts_at, ends_at, client_first_name, client_last_name, client_email, client_phone, status, cancel_token, notes')
    .eq('id', id)
    .single()
  if (error) throw error
  return data
}
