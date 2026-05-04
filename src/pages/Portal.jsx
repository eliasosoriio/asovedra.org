import { useEffect, useState } from 'react'
import { FaCalendarAlt, FaListAlt, FaCog, FaSignOutAlt } from 'react-icons/fa'
import InternalPageHero from '../components/layout/InternalPageHero'
import SEO from '../components/SEO'
import RequireAuth from '../components/portal/RequireAuth'
import MyCalendar from '../components/portal/MyCalendar'
import DayAgenda from '../components/portal/DayAgenda'
import ScheduleEditor from '../components/portal/ScheduleEditor'
import { useAuth } from '../context/useAuth'
import { supabase } from '../lib/supabase'

const TABS = [
  { id: 'calendar', label: 'Calendario', icon: FaCalendarAlt },
  { id: 'agenda', label: 'Agenda diaria', icon: FaListAlt },
  { id: 'schedule', label: 'Mi horario', icon: FaCog }
]

export default function Portal() {
  return (
    <RequireAuth>
      <PortalInner />
    </RequireAuth>
  )
}

function PortalInner() {
  const { user, signOut } = useAuth()
  const [tab, setTab] = useState('calendar')
  const [name, setName] = useState('')

  useEffect(() => {
    if (!user) return
    supabase.from('staff_profiles').select('full_name').eq('id', user.id).single().then(({ data }) => {
      setName(data?.full_name ?? user.email)
    })
  }, [user])

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(to bottom, #020617, #0f172a, #020617)' }}>
      <SEO pageTitle="Portal de empleados" />
      <InternalPageHero eyebrow={`Hola, ${name}`} title="Portal de empleados" description="Gestiona tus citas y tu horario." />
      <section className="px-4 pb-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap gap-2">
              {TABS.map(t => {
                const Icon = t.icon
                return (
                  <button key={t.id} onClick={() => setTab(t.id)}
                    className={`inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm transition ${
                      tab === t.id ? 'border-blue-400 bg-blue-500/15 text-white' : 'border-white/10 bg-white/[0.04] text-slate-300 hover:bg-white/[0.08]'
                    }`}>
                    <Icon /> {t.label}
                  </button>
                )
              })}
            </div>
            <button onClick={signOut} className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-300 hover:bg-white/[0.08]">
              <FaSignOutAlt /> Cerrar sesión
            </button>
          </div>
          <div className="rounded-[1.8rem] border border-white/8 bg-white/[0.04] p-6 backdrop-blur-sm">
            {tab === 'calendar' && <MyCalendar userId={user.id} />}
            {tab === 'agenda' && <DayAgenda userId={user.id} />}
            {tab === 'schedule' && <ScheduleEditor userId={user.id} />}
          </div>
        </div>
      </section>
    </div>
  )
}
