"use client";

import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";

const SpecialThanks = () => {
  return (
    <>
       <div className='w-full flex flex-col items-center justify-center mt-[175px] sm:mt-[130px] xs:mt-[80px] z-50'>
          <h1 className='text-center text-7xl lg:text-6xl sm:text-5xl xs:text-4xl font-bold text-white'>Special Thanks</h1>
          <div className="w-[40rem] xl:w-[35rem] lg:w-[30rem] md:w-[25rem] relative mb-10 sm:mb-5">

            {/* Gradients */}
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
          </div>
        </div>

      <div className="rounded-md flex flex-col antialiased bg-black-100 dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden my-10">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </>
  );
}

export default SpecialThanks

const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea cum veniam corrupti, praesentium aliquid expedita aut voluptate ratione! Aliquid, consequuntur?",
    name: "Virat Kohli",
    title: "Indial Cricketor",
  },

];
