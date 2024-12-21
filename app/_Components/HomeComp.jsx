"use client";

import React from "react";
import { SparklesCore } from "@/components/ui/sparkles";
import { ContainerScroll } from "@/components/ui/container-scroll";
import Image from "next/image";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MoveRight } from "lucide-react";

export function HomeComp() {
  return (
    <>
      <BackgroundBeamsWithCollision>
        {/* ******************************** */}
        <div className="w-full bg-gradient-to-r from-[#0f172a] to-[#334155] flex flex-col items-center justify-center overflow-hidden rounded-md py-20 mask-image[radial-gradient(100% 100% at top right, white, transparent)]">
          <div className="flex flex-col overflow-hidden ">
            <ContainerScroll
              titleComponent={
                <>
                  <div className="mb-28">
                    <Badge
                      variant="outline"
                      className="text-white font-light text-md rounded-full border-primary px-5 py-1"
                    >
                      Build Awesome React Reusable UI Components
                      <MoveRight className="ps-3" size={32} />
                    </Badge>
                    <h1 className="md:text-7xl text-3xl lg:text-9xl font-semibold text-center text-white relative z-20">
                      Elementra UI
                    </h1>

                    <p className="text-white text-xl font-light">
                      Elementra is a modern, reusable component library designed
                      to simplify your workflow and accelerate the development
                      of stunning, accessible, and responsive user interfaces.
                      Built with React.js, Tailwind CSS, and Framer Motion,
                      Elementra empowers developers to craft beautiful UIs with
                      ease.
                    </p>
                    {/* <TypewriterEffect /> */}
                    <div className="flex justify-center mt-10">
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
          {/* ****************** */}
          <Button className="py-8 px-10 my-10 text-2xl font-normal tracking-wider">
            Get Started
          </Button>

          {/* ****************** */}
        </div>
        {/* ******************************** */}
      </BackgroundBeamsWithCollision>
      {/* ******************************** */}
    </>
  );
}
