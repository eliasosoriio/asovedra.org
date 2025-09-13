import React from 'react'
import ServiceCard from '../components/ui/ServiceCard'

function Home() {
  return (
    <main className='flex flex-col items-center justify-center text-center px-3 py-8 gap-10'>
      <section className='actualidad w-full'>
        <div className="max-w-6xl mx-auto w-full">
          <h2 className='text-2xl text-primary-dark font-bold mb-6'>Actualidad</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6'>
            <ServiceCard title={"Asovedra calcula que 2.000 venezolanos llegaron a Pontevedra desde el año 2017"} image={"https://www.diariodepontevedra.es/asset/thumbnail,1280,720,center,center/media/diariodepontevedra/images/2019/08/03/2019080312114328443.jpg"} />
            <ServiceCard title={'"Venimos a trabajar, no a quitar nada a nadie, es hora de acabar con ese famoso mito”'} image={"https://www.diariodepontevedra.es/asset/thumbnail,1280,720,center,center/media/diariodepontevedra/images/2025/07/22/2025072215310571656.jpg"} />
            <ServiceCard title={"GLC Abogados y ASOVEDRA en el Congreso de los Diputados"} image={"https://glcabogados.es/wp-content/uploads/2025/05/GLCAbogados-y-Asovedra-en-Congreso-diputados-1080x675.jpeg"} />
            <ServiceCard title={"El colectivo de venezolanos habla: “España necesita médicos, ingenieros...”"} image={"https://estaticos-cdn.prensaiberica.es/clip/128d1d7f-3ffd-45af-bd37-453f77b15536_16-9-discover-aspect-ratio_default_0.jpg"} />
          </div>
          <button className='mt-8 px-6 py-3 bg-primary-gray text-white rounded-lg hover:bg-primary-dark transition-colors cursor-pointer'>
            Ver todas las noticias
          </button>
        </div>
      </section>

      <section>
        <div className="max-w-6xl mx-auto w-full">
          <h2 className='text-2xl text-primary-dark font-bold mb-6'>Sobre Nosotros</h2>
          <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto gap-8 mb-8">
            <p className='text-primary-dark md:w-1/2 w-full text-left'>
              Asovedra es una asociación dedicada a brindar servicios de alta calidad a nuestros miembros. Nuestro compromiso es ofrecer soluciones innovadoras y efectivas para satisfacer las necesidades de nuestra comunidad.
            </p>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT04GklVje8B_FjyfrTZkJNxPMDFj4dlR1SGOcdtPyY_ldTRl1kJC8jy-zsjNG6W6yKjG4&usqp=CAU"
              alt="Sobre Asovedra"
              className='md:w-1/2 w-full rounded-lg shadow-md h-56 md:h-64 object-cover'
            />
          </div>
          <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto gap-8 mb-8">
            <img
              src="https://estaticos-cdn.prensaiberica.es/clip/6ca270d8-4225-483d-9f2d-3f2c7b94f1ba_16-9-discover-aspect-ratio_default_0.jpg"
              alt="Sobre Asovedra"
              className='md:w-1/2 w-full rounded-lg shadow-md h-56 md:h-64 object-cover'
            />
            <p className='text-primary-dark md:w-1/2 w-full text-left'>
              Fundada en 2005, Asovedra ha crecido hasta convertirse en un referente en el sector, gracias a nuestro enfoque centrado en el cliente y a nuestro equipo de profesionales altamente capacitados.
            </p>
          </div>
          <div className="flex justify-center">
            <button className='mt-2 px-6 py-3 bg-primary-gray text-white rounded-lg hover:bg-primary-dark transition-colors cursor-pointer'>
              Aprende más sobre nosotros
            </button>
          </div>
        </div>
      </section>

      <section className='servicios w-full'>
        <div className="max-w-6xl mx-auto w-full">
          <h2 className='text-2xl text-primary-dark font-bold mb-6'>Servicios</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
            <ServiceCard title={"Ayuda Legal"} image={"https://www.diariodepontevedra.es/asset/thumbnail,1280,720,center,center/media/diariodepontevedra/images/2019/08/03/2019080312114328443.jpg"} />
            <ServiceCard title={"Empleo"} image={"https://www.diariodepontevedra.es/asset/thumbnail,1280,720,center,center/media/diariodepontevedra/images/2025/07/22/2025072215310571656.jpg"} />
            <ServiceCard title={"Migración"} image={"https://glcabogados.es/wp-content/uploads/2025/05/GLCAbogados-y-Asovedra-en-Congreso-diputados-1080x675.jpeg"} />
            <ServiceCard title={"Cursos"} image={"https://estaticos-cdn.prensaiberica.es/clip/128d1d7f-3ffd-45af-bd37-453f77b15536_16-9-discover-aspect-ratio_default_0.jpg"} />
          </div>
          <button className='mt-8 px-6 py-3 bg-primary-gray text-white rounded-lg hover:bg-primary-dark transition-colors cursor-pointer'>
            Ver todos los servicios
          </button>
        </div>
      </section>

      <section className='mt-16 p-6 rounded-lg w-full'>
        <div className="max-w-6xl mx-auto w-full">
          <h2 className='text-2xl text-primary-dark font-bold mb-6'>¿Necesitas más información?</h2>
          <p className='text-primary-dark mb-4'>Contáctanos y estaremos encantados de ayudarte.</p>
          <button className='mt-4 px-6 py-3 bg-primary-gray text-white rounded-lg hover:bg-primary-dark transition-colors cursor-pointer'>
            Contactar
          </button>
        </div>
      </section>

      <footer className='mt-16 text-sm text-gray-500 max-w-6xl mx-auto w-full'>
        &copy; 2024 Asovedra. Todos los derechos reservados.
      </footer>
    </main>
  )
}

export default Home
