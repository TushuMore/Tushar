"use client";

import React from "react";
import { ProjectsCards } from "../components/ui/ProjectsCards";

export const projects = [
  {
    title: "Stripe",
    src: "/project.jpg",
    link: "https://stripe.com",
  },
  {
    title: "Netflix",
    src: "/project.jpg",
    link: "https://stripe.com",
  },
  {
    title: "Google",
    src: "/project.jpg",
    link: "https://stripe.com",
  },
  {
    title: "Meta",
    src: "/project.jpg",
    link: "https://stripe.com",
  },
  {
    title: "Amazon",
    src: "/project.jpg",
    link: "https://stripe.com",
  },
  {
    title: "Microsoft",
    src: "/project.jpg",
    link: "https://stripe.com",
  },
];

const Projects = () => {
  return (
    <>
      <div className=" w-full bg-black-100 flex flex-col items-center justify-center overflow-hidden rounded-md " id="projects">
        <div className='w-full flex flex-col items-center text-white justify-center pb-10 mt-[100px]'>
          <h1 className='text-center text-7xl lg:text-6xl sm:text-5xl font-bold'>Projects</h1>
          <div className="w-[40rem] xl:w-[35rem] lg:w-[30rem] md:w-[25rem] relative mb-10 sm:mb-5">

            {/* Gradients */}
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
          </div>
        </div>

      </div>

      <ProjectsCards />

    </>

  );
}

export default Projects