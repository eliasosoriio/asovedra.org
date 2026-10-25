import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const EMERGENCY_PATH = '/emergencia-terremoto-venezuela'

function EmergencyStrip() {
  const location = useLocation()
  if (location.pathname === EMERGENCY_PATH) return null

  return (
    <div className="bg-red text-white">
      <div className="mx-auto flex min-h-[42px] max-w-[1200px] items-center justify-center gap-2 px-5 py-2 text-center text-sm font-medium lg:px-10">
        <span className="hidden md:inline">
          Emergencia Venezuela · Apoyo psicológico gratuito y donaciones para los afectados por el terremoto.
        </span>
        <span className="md:hidden">Emergencia Venezuela ·</span>
        <Link to={EMERGENCY_PATH} className="font-bold underline underline-offset-[3px] hover:no-underline">
          Ver cómo ayudar
        </Link>
      </div>
    </div>
  )
}

export default EmergencyStrip
