import React from 'react'
import { Link } from 'react-router-dom'

function ServiceCardModern({ title, description, icon }) {
  return (
    <div className="group bg-white border border-slate-200 p-8 rounded-xl hover:shadow-lg hover:border-slate-300 transition-all duration-300 flex flex-col h-full">
      <div className="flex flex-col items-center text-center flex-grow">
        <div className="w-14 h-14 bg-slate-100 rounded-xl flex items-center justify-center text-slate-700 text-2xl mb-4 group-hover:bg-slate-200 transition-colors">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-3">
          {title}
        </h3>
        <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
          {description}
        </p>
      </div>
      <Link to="/contacto" className="inline-flex items-center justify-center text-blue-600 text-sm font-semibold hover:text-blue-700 transition-colors group-hover:translate-x-1 transform duration-300 mt-auto">
        Consúltanos
        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  )
}

export default ServiceCardModern
