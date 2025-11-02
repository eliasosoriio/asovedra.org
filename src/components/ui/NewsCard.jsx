import React from 'react'

function NewsCard({ title, image, description, date, source, url }) {
  return (
    <article className="flex flex-col md:flex-row gap-4 md:gap-5 p-4 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 group">
      {/* Imagen */}
      <div className="flex-shrink-0 w-full md:w-48 lg:w-52 h-48 md:h-32 lg:h-36 overflow-hidden rounded-lg">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      {/* Contenido */}
      <div className="flex-1 flex flex-col justify-between min-w-0">
        <div className="flex-1 overflow-hidden">
          {/* Título */}
          <h3 className="text-base md:text-lg font-bold text-primary-dark line-clamp-2 mb-2 group-hover:text-primary-blue transition-colors text-center md:!text-left">
            {title}
          </h3>
          
          {/* Descripción */}
          <p className="text-sm text-gray-600 line-clamp-2 md:line-clamp-3 leading-relaxed text-center md:!text-left">
            {description}
          </p>
        </div>
        
        {/* Footer */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 mt-3 pt-3 border-t border-gray-100">
          <div className="flex items-center justify-center md:justify-start gap-2 text-xs text-gray-500">
            <span className="font-semibold text-primary-blue">{source}</span>
            <span className="hidden md:inline">•</span>
            <span className="hidden md:inline">{date}</span>
          </div>
          {url && (
            <a 
              href={url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center md:justify-start gap-1 text-sm text-primary-blue hover:text-primary-dark transition-colors font-medium group-hover:gap-2"
            >
              Leer más
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

export default NewsCard
