import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Cards = () => {
    return(
      <div className='w-[280px] h-[340px] bg-black-300 rounded-md p-2'>
        {/* Project Image  */}
        <Image src={"/project.jpg"} alt='project_Image' width={5000} height={5000} className='w-full'/>

        {/* Project Title  */}
        <h2 className='text-2xl font-bold py-2 text-white'>Title</h2>
        <p className='min-h-[90px] text-sm font-semibold text-white-100 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores delectus recusandae</p>

        <Link href={'/'} className='underline text-lg text-blue-700 py-2'>View</Link>
      </div>
    )
}

export function ProjectsCards() {
  return (
    <div className='grid grid-cols-3 gap-5 w-max lg:grid-cols-2 sm:grid-cols-1 h-max mx-auto mb-5'>
      <h1 className='text-4xl lg:text-3xl sm:text-2xl xs:text-xl col-span-3 text-gray-700'>Nothing to show you right now.</h1>
    </div>
  )
}


