import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import InternalPageHero from '../components/layout/InternalPageHero'
import SEO from '../components/SEO'
import { useAuth } from '../context/useAuth'

const inputCls =
  'w-full rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3 text-white outline-none placeholder:text-slate-400 focus:border-blue-400'

export default function PortalLogin() {
  const { user, loading, signIn } = useAuth()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState(null)

  if (!loading && user) return <Navigate to="/portal" replace />

  const onSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true); setError(null)
    const { error } = await signIn(email, password)
    setSubmitting(false)
    if (error) { setError(error.message); return }
    navigate('/portal', { replace: true })
  }

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(to bottom, #020617, #0f172a, #020617)' }}>
      <SEO pageTitle="Portal de empleados" description="Acceso para miembros de ASOVEDRA." />
      <InternalPageHero eyebrow="Portal interno" title="Acceso para empleados" description="Inicia sesión para gestionar tus citas." />
      <section className="px-4 pb-24">
        <form onSubmit={onSubmit} className="mx-auto max-w-md rounded-[1.8rem] border border-white/8 bg-white/[0.04] p-8 backdrop-blur-sm">
          <label className="mb-2 block text-sm text-slate-300">Email</label>
          <input className={inputCls} type="email" required value={email} onChange={e => setEmail(e.target.value)} />
          <label className="mb-2 mt-4 block text-sm text-slate-300">Contraseña</label>
          <input className={inputCls} type="password" required value={password} onChange={e => setPassword(e.target.value)} />
          {error && <p className="mt-3 text-sm text-red-300">{error}</p>}
          <button type="submit" disabled={submitting} className="mt-6 w-full rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100 disabled:opacity-60">
            {submitting ? 'Entrando…' : 'Iniciar sesión'}
          </button>
        </form>
      </section>
    </div>
  )
}
