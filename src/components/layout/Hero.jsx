import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaCheckCircle, FaPhone } from 'react-icons/fa';

function Hero() {
   return (
      <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-slate-950 pt-28 lg:min-h-[100svh] lg:pt-32">
         <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
         >
            <source src="/video/video_hero.mp4" type="video/mp4" />
         </video>

         <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.35)_0%,rgba(2,6,23,0.62)_20%,rgba(2,6,23,0.78)_60%,rgba(2,6,23,0.88)_100%)]"></div>
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_32%),radial-gradient(circle_at_right,rgba(250,204,21,0.12),transparent_28%)]"></div>

         <div className="relative z-10 mx-auto flex w-full justify-center px-3 py-12 sm:px-4 lg:px-6">
            <div className="w-full max-w-7xl rounded-[2rem] border border-white/12 bg-slate-950/36 px-5 py-6 text-center shadow-[0_32px_80px_-36px_rgba(2,6,23,0.95)] backdrop-blur-md sm:px-7 lg:px-10 lg:py-8">
               <div className="mx-auto max-w-3xl">
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-slate-200/90">
                     Asovedra
                  </p>

                  <h1 className="mx-auto mt-3 max-w-[17ch] text-3xl font-bold leading-[1.06] text-white sm:max-w-[18ch] sm:text-[2.55rem] lg:max-w-[19ch] lg:text-[3.15rem]">
                     Acompañamiento para avanzar con estabilidad e integración.
                  </h1>

                  <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-yellow-400 via-blue-500 to-red-500"></div>
               </div>

               <div className="mx-auto mt-6 grid max-w-6xl gap-2.5 text-left sm:grid-cols-2 lg:grid-cols-3">
                  <div className="rounded-2xl border border-white/12 bg-white/10 p-4 shadow-lg shadow-slate-950/20 backdrop-blur-sm">
                     <p className="text-sm font-semibold text-white">Orientación migratoria</p>
                     <p className="mt-1.5 text-sm leading-6 text-slate-200">Información clara para cada trámite y proceso.</p>
                  </div>
                  <div className="rounded-2xl border border-white/12 bg-white/10 p-4 shadow-lg shadow-slate-950/20 backdrop-blur-sm">
                     <p className="text-sm font-semibold text-white">Empleo y formación</p>
                     <p className="mt-1.5 text-sm leading-6 text-slate-200">Recursos para mejorar acceso laboral y autonomía.</p>
                  </div>
                  <div className="rounded-2xl border border-white/12 bg-white/10 p-4 shadow-lg shadow-slate-950/20 backdrop-blur-sm sm:col-span-2 lg:col-span-1">
                     <p className="text-sm font-semibold text-white">Red de apoyo</p>
                     <p className="mt-1.5 text-sm leading-6 text-slate-200">Acompañamiento humano para una integración real.</p>
                  </div>
               </div>

               <div className="mt-6 flex flex-col items-center justify-center gap-3 lg:flex-row lg:items-center lg:justify-center lg:gap-6">
                  <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
                     <Link
                        to="/servicios"
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 text-sm font-semibold text-slate-950 transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-100"
                     >
                        Ver servicios
                        <FaArrowRight className="text-sm" />
                     </Link>
                     <a
                        href="tel:+34604016113"
                        className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-blue-700/70 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-700/85"
                     >
                        <FaPhone className="text-sm" />
                        604 016 113
                     </a>
                  </div>

                  <div className="flex flex-col items-center justify-center gap-2 text-center text-sm text-slate-100 sm:flex-row sm:flex-wrap sm:justify-center">
                     <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/8 px-4 py-2 backdrop-blur-sm">
                        <FaCheckCircle className="text-blue-300" />
                        Atención cercana y profesional
                     </span>
                     <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/8 px-4 py-2 backdrop-blur-sm">
                        <FaCheckCircle className="text-blue-300" />
                        Apoyo a personas y familias
                     </span>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}

export default Hero;
