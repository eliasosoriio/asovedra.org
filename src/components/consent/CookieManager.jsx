import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { LuCookie, LuX } from 'react-icons/lu'
import {
  CONSENT_CATEGORIES,
  OPEN_SETTINGS_EVENT,
  acceptAll,
  applyConsentScripts,
  customConsent,
  readConsent,
  rejectAll,
  revokedScriptsLoaded,
  saveConsent
} from '../../lib/consent'

const primary = 'inline-flex min-h-12 flex-1 items-center justify-center whitespace-nowrap rounded-full bg-navy px-4 text-[15px] font-semibold text-white transition-colors hover:bg-navy-deep sm:flex-none sm:px-6 sm:text-[16px]'

// Interruptor accesible (role="switch")
function Toggle({ checked, disabled, onChange, labelledBy }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-labelledby={labelledBy}
      disabled={disabled}
      onClick={() => onChange(!checked)}
      className={`relative h-8 w-[52px] shrink-0 rounded-full transition-colors duration-200 disabled:cursor-not-allowed ${checked ? 'bg-navy' : 'bg-[#d2d2d7]'} ${disabled ? 'opacity-60' : ''}`}
    >
      <span className={`absolute top-1 h-6 w-6 rounded-full bg-white shadow transition-all duration-200 ${checked ? 'left-[24px]' : 'left-1'}`}></span>
    </button>
  )
}

// Panel de configuración por categorías
function SettingsDialog({ record, onSave, onClose }) {
  const dialogRef = useRef(null)
  const [choices, setChoices] = useState(() => customConsent(record?.choices || {}).choices)

  // Foco dentro del panel mientras está abierto; Escape lo cierra
  useEffect(() => {
    const dialog = dialogRef.current
    const previous = document.activeElement
    dialog?.querySelector('button')?.focus()
    const handleKey = (event) => {
      if (event.key === 'Escape') { onClose(); return }
      if (event.key !== 'Tab' || !dialog) return
      const focusable = [...dialog.querySelectorAll('button:not([disabled]), a[href]')]
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus() }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus() }
    }
    document.addEventListener('keydown', handleKey)
    return () => {
      document.removeEventListener('keydown', handleKey)
      previous?.focus?.()
    }
  }, [onClose])

  return (
    <div className="fixed inset-0 z-[80] flex items-end justify-center bg-ink/50 p-0 sm:items-center sm:p-6" onMouseDown={(e) => { if (e.target === e.currentTarget) onClose() }}>
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cookies-titulo"
        className="max-h-[90svh] w-full max-w-[620px] overflow-y-auto rounded-t-[28px] bg-white p-7 sm:rounded-[28px] sm:p-10"
      >
        <div className="flex items-start justify-between gap-6">
          <h2 id="cookies-titulo" className="text-[28px] font-semibold leading-tight tracking-[-0.02em] text-ink">Configurar cookies</h2>
          <button type="button" onClick={onClose} aria-label="Cerrar" className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-cloud text-ink hover:bg-[#e8e8ed]">
            <LuX aria-hidden="true" className="h-5 w-5" />
          </button>
        </div>
        <p className="mt-3 text-[17px] leading-relaxed text-muted">
          Elige qué cookies aceptas. Puedes cambiarlo cuando quieras desde el botón de la galleta, abajo a la izquierda.
        </p>

        <ul className="mt-7 space-y-3">
          {CONSENT_CATEGORIES.map((category) => (
            <li key={category.id} className="rounded-[20px] bg-cloud p-5">
              <div className="flex items-center justify-between gap-5">
                <span id={`cookies-${category.id}`} className="text-[19px] font-semibold text-ink">{category.title}</span>
                <span className="flex items-center gap-3">
                  {category.required && <span className="text-[14px] font-medium text-muted">Siempre activas</span>}
                  <Toggle
                    checked={choices[category.id]}
                    disabled={category.required}
                    labelledBy={`cookies-${category.id}`}
                    onChange={(value) => setChoices((prev) => ({ ...prev, [category.id]: value }))}
                  />
                </span>
              </div>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">{category.description}</p>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <button type="button" onClick={() => onSave(rejectAll())} className={primary}>Rechazar todas</button>
          <button type="button" onClick={() => onSave(acceptAll())} className={primary}>Aceptar todas</button>
          <button
            type="button"
            onClick={() => onSave(customConsent(choices))}
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-navy px-6 text-[16px] font-semibold text-navy transition-colors hover:bg-cloud sm:ml-auto"
          >
            Guardar selección
          </button>
        </div>
        <p className="mt-6 text-[15px] text-muted">
          Más información en la <Link to="/politica-cookies" onClick={onClose} className="text-navy underline underline-offset-4">política de cookies</Link>.
        </p>
      </div>
    </div>
  )
}

// Gestor propio de cookies: aviso en la primera visita, panel de configuración y botón
// fijo abajo a la izquierda para cambiar la elección en cualquier momento.
function CookieManager() {
  const [record, setRecord] = useState(() => readConsent())
  const [settingsOpen, setSettingsOpen] = useState(false)

  // Al cargar, activa lo que ya estuviera permitido
  useEffect(() => { applyConsentScripts(record) }, [record])

  useEffect(() => {
    const open = () => setSettingsOpen(true)
    window.addEventListener(OPEN_SETTINGS_EVENT, open)
    return () => window.removeEventListener(OPEN_SETTINGS_EVENT, open)
  }, [])

  const save = useCallback((next) => {
    saveConsent(next)
    setRecord(next)
    setSettingsOpen(false)
    // Si se retira un permiso, se recarga para quitar lo que ya se hubiera cargado
    if (revokedScriptsLoaded(next)) window.location.reload()
  }, [])

  const closeSettings = useCallback(() => setSettingsOpen(false), [])

  return (
    <>
      {!record && !settingsOpen && (
        <section
          aria-label="Aviso de cookies"
          className="fixed inset-x-0 bottom-0 z-[75] p-3 sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-[460px] sm:p-0"
        >
          <div className="rounded-[28px] bg-white p-6 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.45)] ring-1 ring-black/5 sm:p-7">
            <p className="flex items-center gap-3 text-[19px] font-semibold text-ink">
              <LuCookie aria-hidden="true" className="h-6 w-6 text-navy" strokeWidth={1.75} />
              Tu privacidad
            </p>
            <p className="mt-3 text-[15px] leading-relaxed text-muted">
              Usamos solo las cookies necesarias para que la web funcione. Con tu permiso podríamos usar otras de analítica o
              marketing; ahora mismo no usamos ninguna. Puedes aceptarlas, rechazarlas o elegir.{' '}
              <Link to="/politica-cookies" className="text-navy underline underline-offset-4">Política de cookies</Link>
            </p>
            <div className="mt-5 flex gap-3">
              <button type="button" onClick={() => save(rejectAll())} className={primary}>Rechazar todas</button>
              <button type="button" onClick={() => save(acceptAll())} className={primary}>Aceptar todas</button>
            </div>
            <button type="button" onClick={() => setSettingsOpen(true)} className="mt-4 text-[15px] font-semibold text-navy underline-offset-4 hover:underline">
              Configurar
            </button>
          </div>
        </section>
      )}

      {record && !settingsOpen && (
        <button
          type="button"
          onClick={() => setSettingsOpen(true)}
          aria-label="Configurar cookies"
          title="Configurar cookies"
          className="fixed bottom-6 left-6 z-40 grid h-11 w-11 place-items-center rounded-full bg-white text-navy shadow-pill transition-colors hover:bg-navy hover:text-white lg:left-16"
        >
          <LuCookie aria-hidden="true" className="h-5 w-5" strokeWidth={1.75} />
        </button>
      )}

      {settingsOpen && <SettingsDialog record={record} onSave={save} onClose={closeSettings} />}
    </>
  )
}

export default CookieManager
