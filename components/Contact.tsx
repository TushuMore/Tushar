import { IconBrandInstagram, IconBrandLinkedin, IconBrandYoutube, IconPhone } from '@tabler/icons-react'
import Link from 'next/link'
import React from 'react'

const Contact = () => {
  return (
    <>
      <div className='w-full flex flex-col items-center justify-center mt-20' id='contact'>
          <h1 className='text-center text-7xl lg:text-6xl text-white sm:text-5xl font-bold'>Contact Me</h1>
          <div className="w-[40rem] xl:w-[35rem] lg:w-[30rem] md:w-[25rem] relative mb-10 sm:mb-5">

            {/* Gradients */}
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
          </div>
        </div>

        <div className='w-max grid grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-5 place-content-center text-white mx-auto my-10'>

            <Link href={'https://www.instagram.com/tushu_more/'} className='col-span-1 flex gap-1 items-center justify-center bg-black-200 px-3 py-2 rounded-sm hover:bg-gray-800 transition-all duration-50'>
              <IconBrandInstagram className='w-8 h-8 sm:w-6 sm:h-6 xs:w-4 xs:h-4 text-pink-600'/>
              <span className='text-xl sm:text-lg xs:text-[16px]'>tushu_more</span>
            </Link>

            <Link href={'https://www.linkedin.com/in/tushar-more-987a69258/'} className='col-span-1 flex gap-1 items-center justify-center bg-black-200 px-3 py-2 rounded-sm hover:bg-gray-800 transition-all duration-50'>
              <IconBrandLinkedin className='w-8 h-8 sm:w-6 sm:h-6 xs:w-4 xs:h-4 text-blue-600'/>
              <span className='text-xl sm:text-lg xs:text-[16px]'>Tushar More</span>
            </Link>
            
            <Link href={'https://www.youtube.com/channel/UCV3otm7QB8tO0pDmxMs3Xxw'} className='col-span-1 flex gap-1 items-center justify-center bg-black-200 px-3 py-2 rounded-sm hover:bg-gray-800 transition-all duration-50'>
              <IconBrandYoutube className='w-8 h-8 sm:w-6 sm:h-6 xs:w-4 xs:h-4 text-red-600'/>
              <span className='text-xl sm:text-lg xs:text-[16px]'>Tushar More</span>
            </Link>

            <Link href={'tel:9011476615'} className='col-span-1 flex gap-1 items-center justify-center bg-black-200 px-3 py-2 rounded-sm hover:bg-gray-800 transition-all duration-50'>
              <IconPhone className='w-8 h-8 sm:w-6 sm:h-6 xs:w-4 xs:h-4 text-yellow-600'/>
              <span className='text-xl sm:text-lg xs:text-[16px]'>+91 9011476615</span>
            </Link>
            
        </div>
    </>
  )
}

export default Contact
