import React from 'react'

function NewsCard({ title, image, description, date, source }) {
  return (
    <article className="flex gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
      <div className="flex-shrink-0 w-32 h-24 md:w-40 md:h-28">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-md"
        />
      </div>
      <div className="flex-1 flex flex-col justify-between text-left">
        <div>
          <h3 className="text-lg font-semibold text-primary-dark line-clamp-2 mb-2 hover:text-primary-blue transition-colors cursor-pointer">
            {title}
          </h3>
          <p className="text-sm text-gray-600 line-clamp-2 mb-2">
            {description}
          </p>
        </div>
        <div className="flex justify-between items-center text-xs text-gray-500">
          <span>{source}</span>
          <span>{date}</span>
        </div>
      </div>
    </article>
  )
}

export default NewsCard
