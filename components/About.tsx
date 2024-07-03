import React from 'react'

import { Specialization } from '../components/ui/Specialization'
import { Education } from '../components/ui/Education'

const About = () => {
  return (
    <div className='relative' id='about'>

      {/* Background doted */}
      <div className="h-[70rem] sm:h-[65rem] xs:h-[60rem] w-full  dark:bg-dot-white/[0.01] bg-dot-white/[0.2] absolute left-0 top-20 flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-black-100 [mask-image:radial-gradient(ellipse_at_center,transparent_40%,black)] hidden"></div>
      </div>


      <div className='w-[870px] xl:w-[750px] lg:w-[650px] md:w-[550px] sm:w-[450px] xs:w-[320px] my-20 mx-auto text-white'>

        <div className='w-full flex flex-col items-center justify-center'>
          <h1 className='text-center text-7xl lg:text-6xl sm:text-5xl font-bold'>About Me</h1>
          <div className="w-[40rem] xl:w-[35rem] lg:w-[30rem] md:w-[25rem] relative mb-10 sm:mb-5">

            {/* Gradients */}
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
          </div>
        </div>


        <Specialization/>
        <Education />
      </div>
    </div>
  )
}

export default About
