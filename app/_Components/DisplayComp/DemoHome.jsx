"use client";

import React from "react";
import { SparklesCore } from "@/components/ui/sparkles";
import { ContainerScroll } from "@/components/ui/container-scroll";
import Image from "next/image";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, MoveRight } from "lucide-react";
import Link from "next/link";
import { Navbar } from "./Navbar";
import { motion } from "framer-motion";

export function HomeComp() {
  return (
    <>
      <Navbar />
      <BackgroundBeamsWithCollision>
        <div className="w-full bg-gradient-to-r from-primary to-primary/80 flex flex-col items-center justify-center overflow-hidden md:pb-20">
          {/* Main container with responsive padding */}
          <div className="flex flex-col overflow-hidden w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ContainerScroll
              titleComponent={
                <>
                  <div className="flex flex-col items-center space-y-8 py-12 md:py-16 lg:py-20">
                    {/* Enhanced Badge with better styling and glow effect */}
                    <div className="relative">
                      <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-indigo-500/30 rounded-full blur-md opacity-70 animate-pulse"></div>
                      <Badge
                        variant="outline"
                        className="relative text-white font-medium text-sm md:text-md rounded-full border-primary/70 px-4 md:px-6 py-1.5 whitespace-normal text-center bg-black/20 backdrop-blur-sm shadow-[0_0_15px_rgba(99,102,241,0.3)]"
                      >
                        <span className="hidden sm:inline">
                          Build Awesome React Reusable UI Components
                        </span>
                        <span className="inline sm:hidden">
                          React UI Components
                        </span>
                        <MoveRight
                          className="hidden sm:block ps-2 md:ps-3 text-primary animate-pulse"
                          style={{ animationDuration: "3s" }}
                          size={20}
                        />
                      </Badge>
                    </div>

                    {/* Enhanced heading with gradient text and glow effect */}
                    <div className="relative">
                      <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-[10rem] font-bold text-center relative z-20 tracking-tight">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-primary-foreground to-white">
                          Elementra UI
                        </span>
                      </h1>
                      <div className="absolute -inset-x-20 -inset-y-10 bg-primary/5 blur-3xl rounded-full z-10 opacity-50"></div>
                    </div>

                    {/* Enhanced description with better typography and highlight */}
                    <p className="text-white/90 text-base sm:text-lg font-light max-w-5xl text-center px-4 sm:px-6 leading-relaxed">
                      Elementra UI is a collection of
                      <span className="relative inline-flex items-center px-3 md:px-4 py-1 mx-2 my-1 rounded-full bg-gradient-to-r from-primary/80 to-indigo-500/70 text-white font-medium shadow-lg">
                        <span className="absolute -inset-1 bg-primary/20 blur-md rounded-full animate-pulse opacity-70"></span>
                        <span className="relative z-10 flex items-center">
                          <svg
                            className="w-4 h-4 mr-1.5 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                            />
                          </svg>
                          reusable ui
                        </span>
                      </span>
                      components that you can copy and paste into your projects.
                      It's not a traditional component library — you don't
                      install it via npm or manage it as a dependency. Instead,
                      it's a toolbox of building blocks designed to help you
                      craft responsive, accessible, and visually stunning UIs
                      with ease.
                    </p>

                    {/* Enhanced sparkles container with better effects */}
                    <div className="w-full sm:w-3/4 md:w-1/2 h-24 relative">
                      {/* Improved gradients with animation */}
                      <div className="absolute inset-x-10 sm:inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm animate-pulse" />
                      <div className="absolute inset-x-10 sm:inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                      <div
                        className="absolute inset-x-30 sm:inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm animate-pulse"
                        style={{ animationDelay: "500ms" }}
                      />
                      <div className="absolute inset-x-30 sm:inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

                      {/* Additional animated lines for more visual interest */}
                      <div
                        className="absolute left-1/4 top-1/2 bg-gradient-to-r from-transparent via-primary/50 to-transparent h-[3px] w-1/2 blur-md animate-pulse"
                        style={{
                          animationDelay: "1s",
                          animationDuration: "3s",
                        }}
                      />
                      <div
                        className="absolute right-1/4 top-3/4 bg-gradient-to-r from-transparent via-indigo-400/50 to-transparent h-[2px] w-1/3 blur-sm animate-pulse"
                        style={{
                          animationDelay: "1.5s",
                          animationDuration: "4s",
                        }}
                      />

                      {/* Enhanced sparkles with better configuration */}
                      <SparklesCore
                        background="transparent"
                        minSize={0.4}
                        maxSize={1.2}
                        particleDensity={1400}
                        className="w-full h-full"
                        particleColor="#FFFFFF"
                      />

                      {/* Improved radial gradient mask */}
                      <div className="absolute inset-0 w-full h-full bg-transparent [mask-image:radial-gradient(400px_250px_at_top,transparent_20%,white)]"></div>
                    </div>
                  </div>
                </>
              }
            >
              {/* Enhanced image container with better styling */}
              <div className="w-full px-4 sm:px-2 relative group">
                {/* Image glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-indigo-500/20 to-primary/20 rounded-2xl opacity-0 group-hover:opacity-70 transition-opacity duration-500 blur-xl"></div>

                {/* Image container with better styling */}
                <div className="relative rounded-none md:rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                  {/* Overlay gradient for better contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 z-10"></div>

                  <Image
                    src="/npmHome.png"
                    alt="Elementra UI Components"
                    height={720}
                    width={1400}
                    className="w-full rounded-none md:rounded-2xl object-cover h-[300px] md:h-[500px] lg:h-[600px] object-left-top transition-transform duration-700 group-hover:scale-105"
                    draggable={false}
                    priority
                  />

                  {/* Floating code snippet */}
                  <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 bg-black/60 backdrop-blur-md rounded-lg p-3 border border-white/10 z-20 hidden md:block opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
                    <code className="text-xs md:text-sm text-white/90 font-mono">
                      <span className="text-blue-400">import</span>{" "}
                      <span className="text-green-400">
                        &#123; Button &#125;
                      </span>{" "}
                      <span className="text-blue-400">from</span>{" "}
                      <span className="text-yellow-400">"elementra-ui"</span>;
                    </code>
                  </div>

                  {/* Component count badge */}
                  <div className="absolute top-4 left-4 md:top-8 md:left-8 bg-black/60 backdrop-blur-md rounded-full px-3 py-1 border border-white/10 z-20 hidden md:flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
                    <div className="h-2 w-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-xs text-white/90 font-medium">
                      50+ Components
                    </span>
                  </div>
                </div>
              </div>
            </ContainerScroll>
          </div>

          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 items-center"
            >
              <Link href="/docs">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground px-8 py-6 text-lg font-medium rounded-full shadow-[0_0_20px_rgba(99,102,241,0.5)] hover:shadow-[0_0_30px_rgba(99,102,241,0.7)] transition-all duration-300 hover:-translate-y-1 group"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </Link>

              <Link href="/components">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/10 bg-white/5 hover:bg-white/10 text-white px-6 py-6 text-lg font-medium rounded-full backdrop-blur-sm transition-all duration-300 hover:-translate-y-1"
                >
                  Browse Components
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </BackgroundBeamsWithCollision>
    </>
  );
}
