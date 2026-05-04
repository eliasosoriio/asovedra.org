import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import InternalPageHero from '../components/layout/InternalPageHero'
import SEO from '../components/SEO'
import { supabase } from '../lib/supabase'

export default function BookingCancel() {
  const { token } = useParams()
  const [state, setState] = useState('idle') // idle | pending | done | error
  const [errorMsg, setErrorMsg] = useState(null)

  const cancel = async () => {
    setState('pending')
    const { data, error } = await supabase.rpc('cancel_appointment_by_token', { p_token: token })
    if (error) { setErrorMsg(error.message); setState('error'); return }
    if (!data) { setErrorMsg('La cita ya estaba cancelada o el enlace no es válido.'); setState('error'); return }
    setState('done')
  }

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(to bottom, #020617, #0f172a, #020617)' }}>
      <SEO pageTitle="Cancelar cita" />
      <InternalPageHero eyebrow="Cancelar cita" title="Cancelar tu cita" />
      <section className="px-4 pb-24">
        <div className="mx-auto max-w-xl rounded-[1.8rem] border border-white/8 bg-white/[0.04] p-8 backdrop-blur-sm">
          {state === 'idle' && (
            <>
              <p className="mb-6 text-slate-200">¿Confirmas la cancelación de tu cita?</p>
              <button onClick={cancel} className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-950 hover:bg-slate-100">
                Sí, cancelar cita
              </button>
            </>
          )}
          {state === 'pending' && <p className="text-slate-200">Cancelando…</p>}
          {state === 'done' && (
            <>
              <p className="mb-4 text-emerald-300">Tu cita ha sido cancelada correctamente.</p>
              <Link to="/" className="text-sm text-slate-300 underline hover:text-white">Volver al inicio</Link>
            </>
          )}
          {state === 'error' && (
            <>
              <p className="mb-4 text-red-300">{errorMsg}</p>
              <Link to="/" className="text-sm text-slate-300 underline hover:text-white">Volver al inicio</Link>
            </>
          )}
        </div>
      </section>
    </div>
  )
}
