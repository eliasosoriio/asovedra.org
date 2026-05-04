import { createClient } from '@supabase/supabase-js'

const url = import.meta.env.VITE_SUPABASE_URL
const key =
  import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY ||
  import.meta.env.VITE_SUPABASE_ANON_KEY

if (!url || !key) {
  console.warn('[supabase] Faltan VITE_SUPABASE_URL o VITE_SUPABASE_PUBLISHABLE_KEY. Las funciones de citas y portal no funcionarán.')
}

export const supabase = createClient(url ?? 'http://localhost', key ?? 'public-anon', {
  auth: { persistSession: true, autoRefreshToken: true }
})

export const TIMEZONE = 'Europe/Madrid'
