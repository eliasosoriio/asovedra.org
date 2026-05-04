import { useEffect, useState } from 'react'
import { FaTrash, FaPlus, FaKey } from 'react-icons/fa'
import { supabase } from '../../lib/supabase'

const DAYS = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo']

const inputCls = 'w-full rounded-lg border border-white/10 bg-white/[0.05] px-3 py-2 text-sm text-white outline-none focus:border-blue-400'

function PasswordChangeCard() {
  const [pwd, setPwd] = useState('')
  const [pwd2, setPwd2] = useState('')
  const [busy, setBusy] = useState(false)
  const [msg, setMsg] = useState(null)
  const [err, setErr] = useState(null)

  const submit = async (e) => {
    e.preventDefault()
    setErr(null); setMsg(null)
    if (pwd.length < 8) { setErr('La contraseña debe tener al menos 8 caracteres.'); return }
    if (pwd !== pwd2) { setErr('Las contraseñas no coinciden.'); return }
    setBusy(true)
    const { error } = await supabase.auth.updateUser({ password: pwd })
    setBusy(false)
    if (error) { setErr(error.message); return }
    setPwd(''); setPwd2('')
    setMsg('Contraseña actualizada correctamente.')
  }

  return (
    <section className="rounded-xl border border-white/10 bg-white/[0.04] p-5">
      <h3 className="mb-1 flex items-center gap-2 text-lg font-semibold text-white">
        <FaKey className="text-blue-300" /> Cambiar contraseña
      </h3>
      <p className="mb-4 text-xs text-slate-400">Mínimo 8 caracteres. Si entraste con tu DNI, cámbialo ahora por algo más seguro.</p>
      <form onSubmit={submit} className="grid gap-3 md:grid-cols-2">
        <div>
          <label className="mb-1 block text-xs text-slate-300">Nueva contraseña</label>
          <input type="password" autoComplete="new-password" className={inputCls} value={pwd} onChange={e => setPwd(e.target.value)} required minLength={8} />
        </div>
        <div>
          <label className="mb-1 block text-xs text-slate-300">Repetir contraseña</label>
          <input type="password" autoComplete="new-password" className={inputCls} value={pwd2} onChange={e => setPwd2(e.target.value)} required minLength={8} />
        </div>
        <div className="md:col-span-2 flex flex-wrap items-center gap-3">
          <button type="submit" disabled={busy} className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-slate-100 disabled:opacity-60">
            {busy ? 'Guardando…' : 'Actualizar contraseña'}
          </button>
          {msg && <span className="text-sm text-emerald-300">{msg}</span>}
          {err && <span className="text-sm text-red-300">{err}</span>}
        </div>
      </form>
    </section>
  )
}

export default function ScheduleEditor({ userId }) {
  const [slots, setSlots] = useState([])
  const [profile, setProfile] = useState(null)
  const [blocked, setBlocked] = useState([])
  const [newBlockedDate, setNewBlockedDate] = useState('')
  const [saving, setSaving] = useState(false)

  const reload = async () => {
    const { data: w } = await supabase.from('weekly_slots').select('*').eq('staff_id', userId).order('weekday').order('start_time')
    setSlots(w ?? [])
    const { data: p } = await supabase.from('staff_profiles').select('*').eq('id', userId).single()
    setProfile(p)
    const { data: b } = await supabase.from('blocked_days').select('*').eq('staff_id', userId).order('date')
    setBlocked(b ?? [])
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { reload() }, [userId])

  const addSlot = (weekday) => setSlots(s => [...s, { _new: crypto.randomUUID(), staff_id: userId, weekday, start_time: '09:00', end_time: '10:00' }])
  const updateSlot = (key, patch) => setSlots(s => s.map(x => (x.id ?? x._new) === key ? { ...x, ...patch } : x))
  const removeSlot = (key) => setSlots(s => s.filter(x => (x.id ?? x._new) !== key))

  const saveSchedule = async () => {
    setSaving(true)
    // Strategy: delete all and reinsert
    await supabase.from('weekly_slots').delete().eq('staff_id', userId)
    if (slots.length) {
      const payload = slots.map(s => ({
        staff_id: userId,
        weekday: s.weekday,
        start_time: s.start_time.length === 5 ? s.start_time + ':00' : s.start_time,
        end_time: s.end_time.length === 5 ? s.end_time + ':00' : s.end_time
      }))
      await supabase.from('weekly_slots').insert(payload)
    }
    setSaving(false)
    reload()
  }

  const saveProfile = async (patch) => {
    setProfile(p => ({ ...p, ...patch }))
    await supabase.from('staff_profiles').update(patch).eq('id', userId)
  }

  const addBlocked = async () => {
    if (!newBlockedDate) return
    await supabase.from('blocked_days').insert({ staff_id: userId, date: newBlockedDate })
    setNewBlockedDate('')
    reload()
  }
  const removeBlocked = async (id) => {
    await supabase.from('blocked_days').delete().eq('id', id)
    reload()
  }

  if (!profile) return <p className="text-slate-300">Cargando…</p>

  return (
    <div className="space-y-8">
      <section className="rounded-xl border border-white/10 bg-white/[0.04] p-5">
        <h3 className="mb-4 text-lg font-semibold text-white">Mi perfil</h3>
        <div className="grid gap-4 md:grid-cols-3">
          <div>
            <label className="mb-1 block text-xs text-slate-300">Duración por cita (min)</label>
            <input type="number" min={5} max={240} step={5} value={profile.appointment_minutes}
              onChange={e => saveProfile({ appointment_minutes: parseInt(e.target.value, 10) || 30 })}
              className="w-full rounded-lg border border-white/10 bg-white/[0.05] px-3 py-2 text-sm text-white" />
          </div>
          <label className="flex items-center gap-2 text-sm text-slate-200">
            <input type="checkbox" checked={profile.is_active} onChange={e => saveProfile({ is_active: e.target.checked })} />
            Estoy activa/o (recibir citas)
          </label>
          <label className="flex items-center gap-2 text-sm text-slate-200">
            <input type="checkbox" checked={profile.accepts_random} onChange={e => saveProfile({ accepts_random: e.target.checked })} />
            Aceptar citas "sin preferencia"
          </label>
        </div>
      </section>

      <PasswordChangeCard />

      <section className="rounded-xl border border-white/10 bg-white/[0.04] p-5">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-white">Horario semanal</h3>
          <button onClick={saveSchedule} disabled={saving} className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-slate-100 disabled:opacity-60">
            {saving ? 'Guardando…' : 'Guardar horario'}
          </button>
        </div>
        <div className="space-y-4">
          {DAYS.map((label, i) => {
            const daySlots = slots.filter(s => s.weekday === i)
            return (
              <div key={i} className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
                <div className="mb-2 flex items-center justify-between">
                  <span className="font-semibold text-white">{label}</span>
                  <button onClick={() => addSlot(i)} className="inline-flex items-center gap-1 rounded border border-white/10 bg-white/[0.05] px-2 py-1 text-xs text-slate-200 hover:bg-white/[0.08]">
                    <FaPlus /> Añadir franja
                  </button>
                </div>
                {daySlots.length === 0 && <p className="text-xs text-slate-400">Sin franjas — ese día no se aceptan citas.</p>}
                <div className="space-y-2">
                  {daySlots.map(s => {
                    const key = s.id ?? s._new
                    return (
                      <div key={key} className="flex items-center gap-2">
                        <input type="time" value={s.start_time.slice(0,5)} onChange={e => updateSlot(key, { start_time: e.target.value })}
                          className="rounded border border-white/10 bg-white/[0.05] px-2 py-1 text-sm text-white" />
                        <span className="text-slate-400">a</span>
                        <input type="time" value={s.end_time.slice(0,5)} onChange={e => updateSlot(key, { end_time: e.target.value })}
                          className="rounded border border-white/10 bg-white/[0.05] px-2 py-1 text-sm text-white" />
                        <button onClick={() => removeSlot(key)} className="ml-auto text-slate-400 hover:text-red-300"><FaTrash /></button>
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <section className="rounded-xl border border-white/10 bg-white/[0.04] p-5">
        <h3 className="mb-4 text-lg font-semibold text-white">Días bloqueados</h3>
        <div className="mb-3 flex items-center gap-2">
          <input type="date" value={newBlockedDate} onChange={e => setNewBlockedDate(e.target.value)}
            className="rounded border border-white/10 bg-white/[0.05] px-3 py-2 text-sm text-white" />
          <button onClick={addBlocked} className="rounded-lg bg-white px-3 py-2 text-sm font-semibold text-slate-950 hover:bg-slate-100">Bloquear fecha</button>
        </div>
        <ul className="space-y-1">
          {blocked.map(b => (
            <li key={b.id} className="flex items-center justify-between rounded border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-slate-200">
              {b.date}
              <button onClick={() => removeBlocked(b.id)} className="text-slate-400 hover:text-red-300"><FaTrash /></button>
            </li>
          ))}
          {blocked.length === 0 && <li className="text-sm text-slate-400">Sin días bloqueados.</li>}
        </ul>
      </section>
    </div>
  )
}
