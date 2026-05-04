import { Navigate } from 'react-router-dom'
import { useAuth } from '../../context/useAuth'

export default function RequireAuth({ children }) {
  const { user, loading } = useAuth()
  if (loading) return <div className="min-h-screen bg-[#0f172a] p-12 text-slate-300">Cargando…</div>
  if (!user) return <Navigate to="/portal/login" replace />
  return children
}
