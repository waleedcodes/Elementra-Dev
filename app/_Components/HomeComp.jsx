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
        <div className="w-full bg-gradient-to-r from-primary to-primary/80 flex flex-col items-center justify-center overflow-hidden py-20 lg:h-[750px] xl:h-[1000px] h-auto">
          {/* Main container with responsive padding */}

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
                <span className="inline sm:hidden">React UI Components</span>
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
              components that you can copy and paste into your projects. It's
              not a traditional component library — you don't install it via npm
              or manage it as a dependency. Instead, it's a toolbox of building
              blocks designed to help you craft responsive, accessible, and
              visually stunning UIs with ease.
            </p>
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

              <Link href="/docs/Components/Alert">
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
