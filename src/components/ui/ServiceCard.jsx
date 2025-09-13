import React from 'react'

function ServiceCard({ title, image }) {
  return (
    <article
      className="relative rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 h-64 flex items-end w-full max-w-lg min-w-70 px-5"
      style={{
        backgroundImage: `
          linear-gradient(to bottom, rgba(0,0,0,0) 60%, rgba(0,0,0,0.7) 100%),
          url(${image})
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <h3 className="text-white text-lg font-semibold mb-4 w-full text-center z-10">
        {title}
      </h3>
    </article>
  )
}

export default ServiceCard
