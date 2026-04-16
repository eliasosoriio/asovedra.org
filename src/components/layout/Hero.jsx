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
            <div className="w-full max-w-7xl text-center">
               <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 lg:gap-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.32em] text-slate-200/85">
                     Asovedra
                  </p>

                  <h1 className="mx-auto max-w-[12ch] text-4xl font-bold leading-[0.92] text-white sm:max-w-[13ch] sm:text-5xl md:text-[3.9rem] lg:max-w-[22ch] lg:text-[8.2rem] xl:max-w-[24ch] xl:text-[9.25rem]">
                     Acompañamiento para avanzar con estabilidad e integración.
                  </h1>

                  <div className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-yellow-400 via-blue-500 to-red-500"></div>

                  <div className="flex flex-col items-center justify-center gap-3 pt-3 sm:pt-4 lg:pt-5">
                     <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
                        <Link
                           to="/servicios"
                           className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-slate-950 transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-100"
                        >
                           Ver servicios
                           <FaArrowRight className="text-sm" />
                        </Link>
                        <a
                           href="tel:+34604016113"
                           className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-slate-950/30 px-8 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-950/45"
                        >
                           <FaPhone className="text-sm" />
                           604 016 113
                        </a>
                     </div>

                     <div className="flex flex-col items-center justify-center gap-2 text-center text-sm text-slate-100 sm:flex-row sm:flex-wrap sm:justify-center lg:max-w-5xl">
                        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/8 px-4 py-2 backdrop-blur-sm">
                           <FaCheckCircle className="text-blue-300" />
                           Orientación migratoria clara
                        </span>
                        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/8 px-4 py-2 backdrop-blur-sm">
                           <FaCheckCircle className="text-blue-300" />
                           Empleo y formación
                        </span>
                        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/8 px-4 py-2 backdrop-blur-sm">
                           <FaCheckCircle className="text-blue-300" />
                           Apoyo a personas y familias
                        </span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}

export default Hero;
