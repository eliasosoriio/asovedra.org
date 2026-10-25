import React from 'react'
import { Link } from 'react-router-dom'
import { LuHeart } from 'react-icons/lu'

function ColaboraButton({ className = '' }) {
  return (
    <Link
      to="/colabora"
      className={`group inline-flex h-12 shrink-0 items-center gap-2.5 rounded-full bg-yellow pl-1.5 pr-5 text-[15px] font-extrabold text-ink shadow-[inset_0_-2px_0_rgba(0,0,0,0.1),0_8px_20px_-10px_rgba(184,134,11,0.6)] transition-all duration-150 hover:-translate-y-px hover:bg-yellow-soft motion-reduce:transform-none ${className}`}
    >
      <span className="animate-heartbeat-hover grid h-9 w-9 place-items-center rounded-full bg-white text-red">
        <LuHeart aria-hidden="true" className="h-4 w-4 fill-current" />
      </span>
      Colabora
    </Link>
  )
}

export default ColaboraButton
