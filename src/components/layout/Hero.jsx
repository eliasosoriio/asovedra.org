import React from 'react'
import { Button } from "flowbite-react";

function Hero() {
  return (
    <div className='flex flex-col gap-10 mb-24 md:mb-10'>
        <p className='text-white text-center font-bold text-5xl w-full max-w-lvw mx-auto sm:max-w-sm md:max-w-2xl lg:max-w-6xl sm:px-4'>
        Bienvenido/a al portal de{' '}
        <span className='' style={{
                        background: "linear-gradient(to right, #FFD700 0%, #FFD700 30%, #0057B8 35%, #0057B8 65%, #FF0000 70%, #FF0000 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent"
                    }}>Asovedra
        </span>
        </p>
        <div className='flex justify-center items-center'>
        <Button className="bg-primary-gray hover:text-white hover:bg-primary-dark transition-transform cursor-pointer rounded-default md:mr-0 sm:mr-3 h-11">
            Descubre más
        </Button>
        </div>
    </div>
  )
}

export default Hero
