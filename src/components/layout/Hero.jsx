import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaPhone } from 'react-icons/fa';

function Hero() {
   return (
      <div className="w-full bg-white pt-20 relative overflow-hidden">
         {/* Decorative background elements */}
         <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            {/* Ondas suaves con los colores de Venezuela (amarillo, azul, rojo) */}
            <div className="absolute -top-40 -right-40 w-[800px] h-[800px] bg-gradient-to-br from-yellow-400/35 via-yellow-300/25 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute -bottom-40 -left-40 w-[700px] h-[700px] bg-gradient-to-tr from-blue-600/40 via-blue-500/30 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-gradient-to-bl from-red-600/35 to-transparent rounded-full blur-3xl"></div>
            
            {/* Muchos puntos decorativos con los colores de la bandera */}
            {/* Puntos amarillos */}
            <div className="absolute top-1/4 right-1/3 w-5 h-5 bg-yellow-500/50 rounded-full"></div>
            <div className="absolute top-1/3 right-1/2 w-4 h-4 bg-yellow-500/48 rounded-full"></div>
            <div className="absolute top-1/6 right-2/3 w-2.5 h-2.5 bg-yellow-500/40 rounded-full"></div>
            
            {/* Puntos azules */}
            <div className="absolute bottom-1/3 left-1/4 w-4 h-4 bg-blue-600/50 rounded-full"></div>
            <div className="absolute bottom-1/4 right-1/4 w-3.5 h-3.5 bg-blue-500/48 rounded-full"></div>
            <div className="absolute bottom-1/6 left-2/5 w-2.5 h-2.5 bg-blue-600/42 rounded-full"></div>
            
            {/* Puntos rojos */}
            <div className="absolute top-2/3 right-1/2 w-4.5 h-4.5 bg-red-600/50 rounded-full"></div>
            <div className="absolute top-1/2 left-1/5 w-3 h-3 bg-red-500/48 rounded-full"></div>
            <div className="absolute top-3/4 left-1/3 w-2.5 h-2.5 bg-red-600/42 rounded-full"></div>
         </div>
         
         {/* Hero Section */}
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 w-full min-h-[calc(100vh-5rem)] flex items-center relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
               
               {/* Left side - Content */}
               <div className="space-y-6 lg:space-y-8 text-center lg:text-left flex flex-col items-center lg:items-start">
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full border border-blue-100">
                     <div className="w-2 h-2 bg-primary-blue rounded-full animate-pulse"></div>
                     <span className="text-xs sm:text-sm text-primary-blue font-semibold">Asociación Sin Ánimo de Lucro</span>
                  </div>

                  {/* Main heading */}
                  <div className="w-full">
                     <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-800 leading-tight mb-4">
                        Asovedra
                     </h1>
                     <div className="w-24 h-1 bg-primary-blue mb-6 mx-auto lg:mx-0"></div>
                     <h2 className="text-3xl sm:text-4xl font-semibold text-slate-700">
                        Asociación de Venezolanos en Pontevedra
                     </h2>
                  </div>

                  {/* Description */}
                  <p className="text-xl text-gray-600 leading-relaxed">
                     Acompañamiento integral para la comunidad iberoamericana en Galicia. 
                     Brindamos orientación profesional en migración, empleo e integración social.
                  </p>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center lg:justify-start">
                     <Link
                        to="/servicios"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#1B2336] text-white rounded-lg font-semibold text-base hover:bg-slate-800 transition-all duration-200 shadow-lg hover:shadow-xl"
                     >
                        Nuestros Servicios
                        <FaArrowRight className="text-sm" />
                     </Link>
                     <a
                        href="tel:+34604016113"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border-2 border-slate-300 text-slate-900 rounded-lg font-semibold text-base hover:border-[#1B2336] hover:text-[#1B2336] transition-all duration-200"
                     >
                        <FaPhone className="text-sm" />
                        604 016 113
                     </a>
                  </div>
               </div>

               {/* Right side - Image */}
               <div className="relative">
                  <div className="relative rounded-xl lg:rounded-2xl overflow-hidden shadow-xl lg:shadow-2xl">
                     <img 
                        src="https://asovedra.org/assets/img/asovedra_hero.jpg" 
                        alt="Comunidad ASOVEDRA"
                        className="w-full h-auto object-cover"
                     />
                     {/* Overlay gradient */}
                     <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
                  </div>
                  {/* Decorative elements */}
                  <div className="hidden lg:block absolute -bottom-6 -right-6 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-30 -z-10"></div>
                  <div className="hidden lg:block absolute -top-6 -left-6 w-48 h-48 bg-cyan-100 rounded-full blur-3xl opacity-30 -z-10"></div>
               </div>

            </div>
         </div>
      </div>
   );
}

export default Hero;
