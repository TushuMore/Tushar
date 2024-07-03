"use client";
import React from "react";
import { BackgroundBeams } from "../components/ui/background-beams";
import { FlipWords } from "../components/ui/flip-words";
import { IconDownload } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../components/ui/hero-highlight";
import Link from "next/link";

const Hero = () => {

  const words = ["Web Developer", "Web Designer", "Content Creator"];

  return (
    <div className="h-max w-full rounded-md bg-black-100 relative flex flex-col items-center justify-center antialiased my-auto pt-10 mt-40 sm:mt-[130px]" id="home">
      <div className="mx-auto ">
        <h1 className="relative z-10 text-8xl md:text-7xl sm:text-6xl xs:text-[40px]  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Open Your Wing&apos;s
        </h1>

        <div className="flex justify-start w-full items-center py-5">
          <div className="text-5xl md:text-4xl sm:text-3xl xs:text-[24px] text-center mx-auto font-normal text-white-200 dark:text-white-200">
            <HeroHighlight>
              <motion.h1
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: [20, -5, 0],
                }}
                transition={{
                  duration: 0.5,
                  ease: [0.4, 0.0, 0.2, 1],
                }}
                className="5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
              >
                I am{" "}
                <Highlight className="text-black-100 dark:text-white">
                  Tushar More {" "}
                </Highlight>
                a
              </motion.h1>
            </HeroHighlight>
            <FlipWords words={words} className="text-white" />

          </div>
        </div>

        <div className="flex gap-5 justify-center mt-5 w-full sm:mb-10">
          {/* // Button code */}
          <Link href={'/resume.pdf'} download className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-12 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 cursor-pointer z-10">
            Resume <IconDownload stroke={2} className="pl-2 font-bold" />
          </Link>
        </div>
      </div>

      <BackgroundBeams />

    </div>
  )
}

export default Hero
