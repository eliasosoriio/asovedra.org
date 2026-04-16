import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaCheckCircle, FaPhone } from 'react-icons/fa';

function Hero() {
   return (
      <section className="relative flex min-h-screen w-full items-center overflow-hidden bg-slate-50 pt-20 lg:min-h-[100svh] lg:pt-20">
         <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-slate-100 to-transparent"></div>
            <div className="absolute left-0 top-32 h-72 w-72 rounded-full bg-blue-200/35 blur-3xl"></div>
            <div className="absolute right-0 top-20 h-64 w-64 rounded-full bg-yellow-100/70 blur-3xl"></div>
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
         </div>

         <div className="relative z-10 mx-auto flex w-full max-w-7xl items-center px-4 py-10 sm:px-6 lg:px-8 lg:py-8">
            <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-14">
               <div className="text-center lg:text-left">
                  <div className="space-y-4 lg:space-y-5">
                     <div className="space-y-2.5">
                        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
                           Asovedra
                        </p>
                        <h1 className="mx-auto max-w-[16ch] text-4xl font-bold leading-[1.02] text-slate-900 sm:max-w-[18ch] sm:text-5xl lg:mx-0 lg:max-w-[15ch] lg:text-[4.25rem]">
                           Acompañamiento cercano para construir estabilidad e integración.
                        </h1>
                     </div>

                     <div className="h-1 w-24 rounded-full bg-gradient-to-r from-yellow-400 via-blue-700 to-red-600 mx-auto lg:mx-0"></div>

                     <p className="mx-auto max-w-xl text-lg leading-8 text-slate-600 lg:mx-0">
                        Apoyamos a la comunidad venezolana e iberoamericana en Galicia con orientación profesional en migración, empleo, formación e integración social.
                     </p>
                  </div>

                  <div className="mt-6 grid gap-3 sm:grid-cols-3">
                     <div className="rounded-2xl border border-slate-200 bg-white p-4 text-left shadow-sm">
                        <p className="text-sm font-semibold text-slate-900">Orientación migratoria</p>
                        <p className="mt-1 text-sm text-slate-600">Información clara para cada trámite y proceso.</p>
                     </div>
                     <div className="rounded-2xl border border-slate-200 bg-white p-4 text-left shadow-sm">
                        <p className="text-sm font-semibold text-slate-900">Empleo y formación</p>
                        <p className="mt-1 text-sm text-slate-600">Recursos para mejorar acceso laboral y autonomía.</p>
                     </div>
                     <div className="rounded-2xl border border-slate-200 bg-white p-4 text-left shadow-sm">
                        <p className="text-sm font-semibold text-slate-900">Red de apoyo</p>
                        <p className="mt-1 text-sm text-slate-600">Acompañamiento humano para una integración real.</p>
                     </div>
                  </div>

                  <div className="mt-6 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
                     <Link
                        to="/servicios"
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#1B2336] px-8 py-4 text-base font-semibold text-white shadow-lg shadow-slate-900/15 transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-800"
                     >
                        Ver servicios
                        <FaArrowRight className="text-sm" />
                     </Link>
                     <a
                        href="tel:+34604016113"
                        className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-8 py-4 text-base font-semibold text-slate-900 transition-all duration-200 hover:border-slate-900 hover:-translate-y-0.5"
                     >
                        <FaPhone className="text-sm" />
                        604 016 113
                     </a>
                  </div>

                  <div className="mt-6 flex w-full flex-col items-center justify-center gap-3 text-center text-sm text-slate-600 sm:flex-row sm:flex-wrap sm:justify-center">
                     <span className="inline-flex items-center gap-2">
                        <FaCheckCircle className="text-blue-700" />
                        Atención cercana y profesional
                     </span>
                     <span className="hidden h-4 w-px bg-slate-300 sm:block"></span>
                     <span className="inline-flex items-center gap-2">
                        <FaCheckCircle className="text-blue-700" />
                        Apoyo a personas y familias
                     </span>
                  </div>
               </div>

               <div className="relative">
                  <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-[2rem] bg-gradient-to-br from-blue-100 via-white to-yellow-50 lg:translate-x-4 lg:translate-y-4"></div>
                  <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-2xl shadow-slate-900/10">
                     <div className="grid gap-0 lg:grid-rows-[minmax(0,1fr)_auto]">
                        <div className="relative min-h-[300px] sm:min-h-[360px] lg:min-h-[390px]">
                           <img
                              src="https://asovedra.org/assets/img/asovedra_hero.jpg"
                              alt="Comunidad ASOVEDRA"
                              className="absolute inset-0 h-full w-full object-cover"
                           />
                           <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-900/10 to-white/5"></div>

                           <div className="absolute left-4 top-4 max-w-[15rem] rounded-2xl border border-white/35 bg-white/88 p-4 shadow-lg backdrop-blur-sm sm:left-5 sm:top-5 sm:max-w-[16rem]">
                              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Asociación de Venezolanos en Pontevedra</p>
                              <p className="mt-2 text-sm leading-6 text-slate-700">
                                 Un espacio de orientación, acompañamiento y vínculo con la comunidad.
                              </p>
                           </div>
                        </div>

                        <div className="grid gap-4 border-t border-slate-200 bg-white px-5 py-5 sm:grid-cols-[1.1fr_0.9fr] sm:px-7">
                           <div>
                              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Nuestra labor</p>
                              <p className="mt-2 text-lg font-semibold text-slate-900">
                                 Orientamos procesos, conectamos recursos y fortalecemos la integración.
                              </p>
                           </div>
                           <div className="border-t border-slate-200 pt-4 sm:border-l sm:border-t-0 sm:pl-5 sm:pt-0">
                              <p className="text-sm font-semibold text-slate-900">Atención telefónica</p>
                              <a href="tel:+34604016113" className="mt-2 inline-flex items-center gap-2 text-lg font-bold text-blue-800 hover:text-slate-900 transition-colors duration-200">
                                 <FaPhone className="text-sm" />
                                 604 016 113
                              </a>
                              <p className="mt-2 text-sm leading-6 text-slate-600">
                                 Pontevedra y Galicia, con atención enfocada en soluciones prácticas.
                              </p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}

export default Hero;
