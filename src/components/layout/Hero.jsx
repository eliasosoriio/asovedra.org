import React from "react";
import { Link } from "react-router-dom";

function Hero() {
   return (
      <div className="hero-content flex flex-col items-center gap-12 mb-24 md:mb-16 px-4 pt-16 md:pt-20">
         <div className="text-center max-w-5xl mx-auto">
            <h1 className="text-white text-center font-bold text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight">ASOVEDRA</h1>
            <p className="text-white/90 text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
               Tu aliado en España. Brindamos apoyo integral a la comunidad
               venezolana con servicios especializados en migración, empleo y
               integración social.
            </p>
         </div>

         <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Link
               to="/servicios"
               className="btn-light text-lg px-8 py-4 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
               Descubre nuestros servicios
            </Link>
            <Link
               to="/contacto"
               className="btn-white-outline text-lg px-8 py-4 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
               Contactar ahora
            </Link>
         </div>

         {/* Estadísticas rápidas */}
         <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 mt-8 justify-center items-center">
            <div className="text-center text-white">
               <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
                  2000+
               </div>
               <div className="text-sm sm:text-base opacity-90">
                  Personas Atendidas
               </div>
            </div>
            <div className="text-center text-white">
               <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
                  20+
               </div>
               <div className="text-sm sm:text-base opacity-90">
                  Años de Experiencia
               </div>
            </div>
            <div className="text-center text-white">
               <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
                  100%
               </div>
               <div className="text-sm sm:text-base opacity-90">Compromiso</div>
            </div>
         </div>
      </div>
   );
}

export default Hero;
