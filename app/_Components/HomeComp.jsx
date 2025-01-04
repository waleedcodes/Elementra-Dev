"use client";

import React from "react";
import { SparklesCore } from "@/components/ui/sparkles";
import { ContainerScroll } from "@/components/ui/container-scroll";
import Image from "next/image";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import { Navbar } from "./Navbar";

export function HomeComp() {
  return (
    <>
      <Navbar />
      <BackgroundBeamsWithCollision>
        <div className="w-full bg-gradient-to-r from-[#0f172a] to-[#334155] flex flex-col items-center justify-center overflow-hidden md:pb-20">
          {/* Main container with responsive padding */}
          <div className="flex flex-col overflow-hidden w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ContainerScroll
              titleComponent={
                <>
                  <div className="flex flex-col items-center space-y-6 py-12 md:py-16 lg:py-20">
                    {/* Badge with responsive sizing */}
                    <Badge
                      variant="outline"
                      className="text-white font-light text-sm md:text-md rounded-full border-primary px-3 md:px-5 py-1 whitespace-normal text-center"
                    >
                      <span className="hidden sm:inline">
                        Build Awesome React Reusable UI Components
                      </span>
                      <span className="inline sm:hidden">
                        React UI Components
                      </span>
                      <MoveRight
                        className="hidden sm:block ps-2 md:ps-3"
                        size={24}
                      />
                    </Badge>

                    {/* Responsive heading */}
                    <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-semibold text-center text-white relative z-20">
                      Elementra UI
                    </h1>

                    {/* Description with responsive padding and font size */}
                    <p className="text-white text-base sm:text-lg md:text-xl font-light max-w-3xl text-center px-4 sm:px-6">
                      Elementra is an innovative{" "}
                      <span className="bg-primary dark:bg-gray-900 px-2 md:px-4 rounded-full inline-block my-1 py-1">
                        component
                      </span>{" "}
                      library that streamlines your workflow and enhances the
                      creation of beautiful, accessible, and responsive user
                      interfaces. Developed using React.js, Tailwind CSS, and
                      Framer Motion, Elementra enables developers to
                      effortlessly build stunning UIs.
                    </p>

                    {/* Sparkles container with responsive width */}
                    <div className="w-full sm:w-3/4 md:w-1/2 h-20 relative">
                      {/* Gradients with responsive positioning */}
                      <div className="absolute inset-x-10 sm:inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                      <div className="absolute inset-x-10 sm:inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                      <div className="absolute inset-x-30 sm:inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                      <div className="absolute inset-x-30 sm:inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

                      {/* Core sparkles component */}
                      <SparklesCore
                        background="transparent"
                        minSize={0.4}
                        maxSize={1}
                        particleDensity={1200}
                        className="w-full h-full"
                        particleColor="#FFFFFF"
                      />

                      {/* Radial gradient mask */}
                      <div className="absolute inset-0 w-full h-full bg-transparent [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
                    </div>
                  </div>
                </>
              }
            >
              {/* Responsive image container */}
              <div className="w-full px-4 sm:px-2 ">
                <Image
                  src="/npmHome.png"
                  alt="hero"
                  height={720}
                  width={1400}
                  className="w-full rounded-none md:rounded-2xl object-cover h-[300px]  md:h-[500px] lg:h-[600px] object-left-top"
                  draggable={false}
                  priority
                />
              </div>
            </ContainerScroll>
          </div>

          {/* CTA button with responsive sizing */}
          <Link href="/docs" className="my-8 sm:my-10 md:my-12">
            <Button className="py-6 sm:py-7 md:py-8 px-6 sm:px-8 md:px-10 text-lg sm:text-xl md:text-2xl font-normal tracking-wider">
              Get Started
            </Button>
          </Link>
        </div>
      </BackgroundBeamsWithCollision>
    </>
  );
}
