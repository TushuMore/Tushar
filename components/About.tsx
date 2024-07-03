import React from 'react'

import { Specialization } from '../components/ui/Specialization'
import { Education } from '../components/ui/Education'

const About = () => {
  return (
    <div className='relative' id='about'>

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
