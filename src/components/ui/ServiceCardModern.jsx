import React from 'react'

function ServiceCardModern({ title, description, icon, color = "primary-blue" }) {
  const colorClasses = {
    'primary-blue': 'bg-primary-blue text-white hover:bg-blue-700',
    'primary-gray': 'bg-primary-gray text-white hover:bg-gray-700',
    'primary-dark': 'bg-primary-dark text-white hover:bg-gray-800',
    'primary-light': 'bg-primary-light text-primary-dark hover:bg-blue-100'
  }

  return (
    <div className={`group relative p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer h-80 ${colorClasses[color] || colorClasses['primary-blue']}`}>
      <div className="flex flex-col items-center text-center h-full">
        <div className="text-4xl mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-4">
          {title}
        </h3>
        <p className="text-sm opacity-90 leading-relaxed flex-grow mb-6">
          {description}
        </p>
        <div className="mt-auto inline-flex items-center text-sm font-medium group-hover:translate-x-1 transition-transform">
          Más información
          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default ServiceCardModern
