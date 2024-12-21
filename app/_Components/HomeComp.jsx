"use client";

import React from "react";
import { SparklesCore } from "@/components/ui/sparkles";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { ContainerScroll } from "@/components/ui/container-scroll";
import Image from "next/image";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams";

export function HomeComp() {
  return (
    <>
      <BackgroundBeamsWithCollision>
        {/* ******************************** */}
        <div className="w-full bg-gradient-to-r from-[#0f172a]  to-[#334155] flex flex-col items-center justify-center overflow-hidden rounded-md py-20">
          <div className="flex flex-col overflow-hidden ">
            <ContainerScroll
              titleComponent={
                <>
                  <div className="mb-28">
                    <h1 className="md:text-7xl text-3xl lg:text-9xl font-semibold text-center text-white relative z-20">
                      Elementra UI
                    </h1>
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
                        className="text-xl px-4 md:text-2xl lg:text-3xl font-medium text-white max-w-4xl leading-relaxed lg:leading-relaxed text-center mx-auto py-10"
                      >
                        Build Awesome
                        <Highlight className="text-white mx-4 px-6 py-2 rounded-full">
                          React Reusable UI
                        </Highlight>
                        Components!
                      </motion.h1>
                    </HeroHighlight>
                    {/* <TypewriterEffect /> */}

                    <div className="flex justify-center">
                      <div className="w-1/2 h-20 relative justify-end">
                        {/* Gradients */}
                        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

                        {/* Core component */}
                        <SparklesCore
                          background="transparent"
                          minSize={0.4}
                          maxSize={1}
                          particleDensity={1200}
                          className="w-full h-full"
                          particleColor="#FFFFFF"
                        />

                        {/* Radial Gradient to prevent sharp edges */}
                        <div className="absolute inset-0 w-full h-full bg-transparent [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
                      </div>
                    </div>
                  </div>
                </>
              }
            >
              <Image
                src="/MainHome.png"
                alt="hero"
                height={720}
                width={1400}
                className="mx-auto rounded-2xl object-cover h-full object-left-top"
                draggable={false}
              />
            </ContainerScroll>
          </div>
        </div>
        {/* ******************************** */}
      </BackgroundBeamsWithCollision>
      {/* ******************************** */}
    </>
  );
}
