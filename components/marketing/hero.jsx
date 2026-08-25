"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Sparkles,
  Zap,
  Copy,
  Github,
  ExternalLink,
  Terminal,
  Code2,
  Star,
  Download,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <style jsx>{`
        @keyframes gradient-x {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }
      `}</style>
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-500/5 via-gray-900 to-blue-500/5 min-h-screen flex items-center">
        {/* Background Effects */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 -left-4 w-48 sm:w-72 h-48 sm:h-72 bg-primary/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-0 -right-4 w-48 sm:w-72 h-48 sm:h-72 bg-secondary/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
          <div className="absolute -bottom-8 left-20 w-48 sm:w-72 h-48 sm:h-72 bg-accent/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 -z-10 opacity-[0.02]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgb(255,255,255) 1px, transparent 0)`,
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24 lg:py-32 relative z-10">
          <div className="mx-auto max-w-5xl text-center flex-1 flex flex-col justify-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mb-6 sm:mb-8"
            >
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6">
                <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="flex items-center justify-center w-3 sm:w-4 md:w-5 h-3 sm:h-4 md:h-5 rounded-full bg-primary/10">
                    <Sparkles className="h-2 sm:h-2.5 md:h-3 w-2 sm:w-2.5 md:w-3 text-primary animate-pulse" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-primary">
                    50+ React Components
                  </span>
                  <div className="w-1 sm:w-1.5 md:w-2 h-1 sm:h-1.5 md:h-2 bg-green-500 rounded-full animate-pulse"></div>
                </div>

                <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2 sm:px-2.5 md:px-3 py-1 rounded-full border border-yellow-500/20 bg-yellow-500/5 backdrop-blur-sm">
                  <Star className="h-2 sm:h-2.5 md:h-3 w-2 sm:w-2.5 md:w-3 text-yellow-500 fill-yellow-500" />
                  <span className="text-xs font-medium text-yellow-600 dark:text-yellow-400">
                    1.2k+ Stars
                  </span>
                </div>

                <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2 sm:px-2.5 md:px-3 py-1 rounded-full border border-green-500/20 bg-green-500/5 backdrop-blur-sm">
                  <Download className="h-2 sm:h-2.5 md:h-3 w-2 sm:w-2.5 md:w-3 text-green-500" />
                  <span className="text-xs font-medium text-green-600 dark:text-green-400">
                    10k+ Downloads
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="mb-6 sm:mb-8"
            >
              <h1
                id="main-title"
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight"
              >
                <div className="relative inline-block">
                  <span className="bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent bg-[length:200%_100%] animate-gradient-x font-extrabold">
                    Elementra UI
                  </span>
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg blur opacity-25 animate-pulse"></div>
                </div>
                <br />
                <span className="text-muted-foreground text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-normal mt-2 sm:mt-4 block">
                  Modern React Component Library
                </span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-8 sm:mb-10 md:mb-12"
            >
              <p className="mx-auto max-w-3xl sm:max-w-4xl text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed mb-4 sm:mb-6 px-4 sm:px-0">
                A comprehensive collection of{" "}
                <span className="text-primary font-semibold bg-primary/10 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-md">
                  accessible, customizable, and production-ready
                </span>{" "}
                React components. Built with Tailwind CSS, TypeScript, and
                modern best practices for developers who value quality and
                efficiency.
              </p>

              {/* Code Snippet Preview */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mx-auto max-w-xl sm:max-w-2xl px-4 sm:px-0"
              >
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative bg-slate-900 dark:bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700/50 p-2.5 sm:p-3 md:p-4 shadow-2xl">
                    <div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3">
                      <div className="flex gap-1 sm:gap-1.5">
                        <div className="w-1.5 sm:w-2 md:w-3 h-1.5 sm:h-2 md:h-3 rounded-full bg-red-500"></div>
                        <div className="w-1.5 sm:w-2 md:w-3 h-1.5 sm:h-2 md:h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-1.5 sm:w-2 md:w-3 h-1.5 sm:h-2 md:h-3 rounded-full bg-green-500"></div>
                      </div>
                      <div className="flex items-center gap-1 sm:gap-2 ml-auto">
                        <Terminal className="h-2 sm:h-2.5 md:h-3 w-2 sm:w-2.5 md:w-3 text-slate-400" />
                        <span className="text-xs text-slate-400 font-mono hidden sm:inline">
                          component.tsx
                        </span>
                      </div>
                    </div>
                    <pre className="text-xs sm:text-sm font-mono text-left overflow-x-auto">
                      <code className="text-slate-300">
                        <span className="text-purple-400">import</span>{" "}
                        <span className="text-yellow-300">{"{ Button }"}</span>{" "}
                        <span className="text-purple-400">from</span>{" "}
                        <span className="text-green-300">
                          "@/components/ui/button"
                        </span>
                        {"\n\n"}
                        <span className="text-purple-400">
                          export default function
                        </span>{" "}
                        <span className="text-blue-300">App</span>
                        <span className="text-slate-300">() {"{"}</span>
                        {"\n  "}
                        <span className="text-purple-400">return</span>{" "}
                        <span className="text-slate-300">(</span>
                        {"\n    "}
                        <span className="text-red-400">{"<Button"}</span>{" "}
                        <span className="text-yellow-300">variant</span>
                        <span className="text-slate-300">=</span>
                        <span className="text-green-300">"default"</span>{" "}
                        <span className="text-yellow-300">size</span>
                        <span className="text-slate-300">=</span>
                        <span className="text-green-300">"lg"</span>
                        <span className="text-red-400">{">"}</span>
                        {"\n      "}
                        <span className="text-slate-300">Get Started</span>
                        {"\n    "}
                        <span className="text-red-400">{"</Button>"}</span>
                        {"\n  "}
                        <span className="text-slate-300">)</span>
                        {"\n"}
                        <span className="text-slate-300">{"}"}</span>
                      </code>
                    </pre>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Feature Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-4 mb-12 sm:mb-14 md:mb-16 px-4 sm:px-0"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                className="group inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-semibold border border-primary/20 backdrop-blur-sm hover:bg-primary/20 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Copy className="h-3 sm:h-4 w-3 sm:w-4 group-hover:rotate-12 transition-transform duration-300" />
                <span className="hidden xs:inline">Copy & Paste</span>
                <span className="xs:hidden">Copy</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                className="group inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs sm:text-sm font-semibold border border-emerald-500/20 backdrop-blur-sm hover:bg-emerald-500/20 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <span className="text-base sm:text-lg group-hover:scale-110 transition-transform duration-300">
                  ♿
                </span>
                Accessible
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                className="group inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs sm:text-sm font-semibold border border-blue-500/20 backdrop-blur-sm hover:bg-blue-500/20 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <span className="text-base sm:text-lg group-hover:rotate-12 transition-transform duration-300">
                  🎨
                </span>
                <span className="hidden xs:inline">Customizable</span>
                <span className="xs:hidden">Custom</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                className="group inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 text-xs sm:text-sm font-semibold border border-purple-500/20 backdrop-blur-sm hover:bg-purple-500/20 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Code2 className="h-3 sm:h-4 w-3 sm:w-4 group-hover:scale-110 transition-transform duration-300" />
                TypeScript
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                className="group inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-400 text-xs sm:text-sm font-semibold border border-orange-500/20 backdrop-blur-sm hover:bg-orange-500/20 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Terminal className="h-3 sm:h-4 w-3 sm:w-4 group-hover:rotate-12 transition-transform duration-300" />
                CLI Ready
              </motion.div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-6 mb-12 sm:mb-16 md:mb-20 px-4 sm:px-0"
            >
              <Link href="/docs">
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative w-full sm:w-auto"
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-secondary/50 rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                  <Button
                    size="lg"
                    className="relative w-full sm:w-auto h-10 sm:h-12 md:h-14 px-4 sm:px-6 md:px-8 text-sm sm:text-base md:text-lg font-semibold bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-2xl hover:shadow-primary/25 transition-all duration-300 border-0 rounded-xl"
                  >
                    <Zap className="mr-1.5 sm:mr-2 md:mr-3 h-3 sm:h-4 md:h-5 w-3 sm:w-4 md:w-5 group-hover:rotate-12 transition-transform duration-300" />
                    Get Started
                    <ArrowRight className="ml-1 sm:ml-2 h-2.5 sm:h-3 md:h-4 w-2.5 sm:w-3 md:w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </motion.div>
              </Link>

              <Link href="/docs/Components/button">
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="group w-full sm:w-auto"
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto h-10 sm:h-12 md:h-14 px-4 sm:px-6 md:px-8 text-sm sm:text-base md:text-lg font-semibold border-2 border-primary/30 hover:border-primary/60 bg-background/80 backdrop-blur-sm hover:bg-primary/5 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-xl hover:text-white"
                  >
                    <span className="hidden sm:inline">Browse Components</span>
                    <span className="sm:hidden">Components</span>
                    <ExternalLink className="ml-1.5 sm:ml-2 md:ml-3 h-3 sm:h-4 md:h-5 w-3 sm:w-4 md:w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </Button>
                </motion.div>
              </Link>

              <Link
                href="https://github.com/waleedcodes/Elementra-Dev"
                target="_blank"
              >
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="group"
                >
                  <Button
                    variant="ghost"
                    size="lg"
                    className="w-full sm:w-auto h-12 sm:h-14 px-6 sm:px-8 text-base sm:text-lg font-semibold bg-muted/80 hover:bg-muted/100 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl hover:text-white"
                  >
                    <Github className="mr-2 sm:mr-3 h-4 sm:h-5 w-4 sm:w-5 group-hover:rotate-12 transition-transform duration-300" />
                    GitHub
                    <Star className="ml-1 sm:ml-2 h-3 sm:h-4 w-3 sm:w-4 text-yellow-500 group-hover:fill-yellow-500 transition-all duration-300" />
                  </Button>
                </motion.div>
              </Link>
            </motion.div>

            {/* Quick Install */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mx-auto max-w-2xl"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                {/* NPM Install */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="group relative p-4 sm:p-6 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative">
                    <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                      <div className="flex items-center justify-center w-6 sm:w-8 h-6 sm:h-8 rounded-lg bg-primary/10">
                        <svg
                          className="w-3 sm:w-4 h-3 sm:h-4 text-primary"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                        </svg>
                      </div>
                      <p className="text-sm sm:text-base font-semibold text-foreground">
                        Install Package
                      </p>
                    </div>
                    <div className="flex items-center justify-between p-3 sm:p-4 rounded-xl bg-muted/80 border border-border/50 group-hover:border-primary/30 transition-colors duration-300">
                      <code className="text-xs sm:text-sm font-mono text-foreground font-medium">
                        npm install elementra-ui
                      </code>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-1.5 sm:p-2 rounded-lg hover:bg-primary/10 transition-colors duration-200"
                        onClick={() =>
                          navigator.clipboard.writeText(
                            "npm install elementra-ui"
                          )
                        }
                      >
                        <Copy className="h-3 sm:h-4 w-3 sm:w-4 text-muted-foreground hover:text-primary transition-colors duration-200" />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>

                {/* CLI Usage */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="group relative p-4 sm:p-6 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative">
                    <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                      <div className="flex items-center justify-center w-6 sm:w-8 h-6 sm:h-8 rounded-lg bg-green-500/10">
                        <Terminal className="w-3 sm:w-4 h-3 sm:h-4 text-green-600 dark:text-green-400" />
                      </div>
                      <p className="text-sm sm:text-base font-semibold text-foreground">
                        CLI Add Component
                      </p>
                    </div>
                    <div className="flex items-center justify-between p-3 sm:p-4 rounded-xl bg-muted/80 border border-border/50 group-hover:border-green-500/30 transition-colors duration-300">
                      <code className="text-xs sm:text-sm font-mono text-foreground font-medium">
                        npx elementra-ui add button
                      </code>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-1.5 sm:p-2 rounded-lg hover:bg-green-500/10 transition-colors duration-200"
                        onClick={() =>
                          navigator.clipboard.writeText(
                            "npx elementra-ui add button"
                          )
                        }
                      >
                        <Copy className="h-3 sm:h-4 w-3 sm:w-4 text-muted-foreground hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200" />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-auto pt-16 pb-8"
          >
            <div className="text-center pt-10">
              <p className="text-base text-muted-foreground mb-8 font-medium">
                Powering modern development with cutting-edge technologies
              </p>
              <div className="flex flex-row gap-6 sm:gap-10 items-center justify-center max-w-7xl mx-auto flex-wrap">
                {/* React Logo */}
                <motion.div
                  whileHover={{ scale: 1.1, y: -4 }}
                  className="group opacity-60 grayscale hover:opacity-100 hover:grayscale-0 hover:drop-shadow-[0_0_20px_rgba(97,218,251,0.4)] transition-all duration-500 flex flex-col items-center gap-1 sm:gap-2"
                >
                  <div className="relative">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      className="h-8 sm:h-10 w-8 sm:w-10 fill-current text-[#61DAFB] group-hover:animate-spin"
                      style={{ animationDuration: "3s" }}
                    >
                      <path d="M12 10.11c1.03 0 1.87.84 1.87 1.89s-.84 1.89-1.87 1.89c-1.03 0-1.87-.84-1.87-1.89s.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 01-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9s-1.17 0-1.71.03c-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03s1.17 0 1.71-.03c.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68s-1.83 2.93-4.37 3.68c.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.37 1.95-1.47-.84-1.63-3.05-1.01-5.63-2.54-.75-4.37-1.99-4.37-3.68s1.83-2.93 4.37-3.68c-.62-2.58-.46-4.79 1.01-5.63 1.46-.84 3.45.12 5.37 1.95 1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26 2.1-.63 3.28-1.53 3.28-2.26S20.07 10.37 17.97 9.74c-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26-2.1.63-3.28 1.53-3.28 2.26s1.18 1.63 3.28 2.26c.25-.76.55-1.51.89-2.26M6.92 9.74c.25-.76.55-1.51.89-2.26-1.08-.21-2.06-.36-2.88-.45C4.51 7.79 4.21 8.54 4.09 9.35c.63.89 1.52 1.76 2.83 2.39m5.17-8.39C11.91.85 11.72.71 11.46.71c-.25 0-.45.14-.63.64-.18.5-.18 1.26 0 2.16.45-.02.91-.04 1.37-.04s.92.02 1.37.04c-.18-.9-.18-1.66 0-2.16M5.69 7.03c.82.09 1.8.24 2.88.45-.34-.75-.64-1.5-.89-2.26-1.31.63-2.2 1.5-2.83 2.39.18-.81.48-1.56.84-2.58M12 1.04c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5" />
                    </svg>
                    <div className="absolute inset-0 bg-[#61DAFB]/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  <span className="text-xs font-medium text-muted-foreground group-hover:text-[#61DAFB] transition-colors duration-300">
                    React
                  </span>
                </motion.div>

                {/* Next.js Logo */}
                <motion.div
                  whileHover={{ scale: 1.1, y: -4 }}
                  className="group opacity-60 grayscale hover:opacity-100 hover:grayscale-0 hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-500 flex flex-col items-center gap-2"
                >
                  <div className="relative">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 256 256"
                      className="h-10 w-10 fill-current text-foreground"
                    >
                      <path d="M119.616813,0.0688905149 C119.066276,0.118932037 117.314565,0.294077364 115.738025,0.419181169 C79.3775171,3.69690087 45.3192571,23.3131775 23.7481916,53.4631946 C11.7364614,70.2271045 4.05395894,89.2428829 1.15112414,109.384595 C0.12512219,116.415429 0,118.492153 0,128.025062 C0,137.557972 0.12512219,139.634696 1.15112414,146.665529 C8.10791789,194.730411 42.3163245,235.11392 88.7116325,250.076335 C97.0197458,252.753556 105.778299,254.580072 115.738025,255.680985 C119.616813,256.106338 136.383187,256.106338 140.261975,255.680985 C157.453763,253.779407 172.017986,249.525878 186.382014,242.194795 C188.584164,241.068861 189.00958,240.768612 188.709286,240.518404 C188.509091,240.36828 179.124927,227.782837 167.86393,212.570214 L147.393939,184.922273 L121.743891,146.965779 C107.630108,126.098464 96.0187683,109.034305 95.9186706,109.034305 C95.8185728,109.009284 95.7184751,125.873277 95.6684262,146.465363 C95.5933529,182.52028 95.5683284,183.971484 95.1178886,184.82219 C94.4672532,186.048207 93.9667644,186.548623 92.915738,187.099079 C92.114956,187.499411 91.4142717,187.574474 87.6355816,187.574474 L83.3063539,187.574474 L82.1552297,186.848872 C81.4044966,186.373477 80.8539589,185.747958 80.4785924,185.022356 L79.9530792,183.896422 L80.0031281,133.729796 L80.0782014,83.5381493 L80.8539589,82.5623397 C81.25435,82.0369037 82.1051808,81.3613431 82.7057674,81.0360732 C83.7317693,80.535658 84.1321603,80.4856165 88.4613881,80.4856165 C93.5663734,80.4856165 94.4172043,80.6857826 95.7434995,82.1369867 C96.1188661,82.5373189 110.007429,103.454675 126.623656,128.650581 C143.239883,153.846488 165.962072,188.250034 177.122972,205.139048 L197.392766,235.839522 L198.418768,235.163961 C207.502639,229.259062 217.112023,220.852086 224.719453,212.09482 C240.910264,193.504394 251.345455,170.835585 254.848876,146.665529 C255.874878,139.634696 256,137.557972 256,128.025062 C256,118.492153 255.874878,116.415429 254.848876,109.384595 C247.892082,61.3197135 213.683675,20.9362052 167.288368,5.97379012 C159.105376,3.32158945 150.396872,1.49507389 140.637341,0.394160408 C138.234995,0.143952798 121.693842,-0.131275573 119.616813,0.0688905149 Z M172.017986,77.4831252 C173.219159,78.0836234 174.195112,79.2345784 174.545455,80.435575 C174.74565,81.0861148 174.795699,94.9976579 174.74565,126.348671 L174.670577,171.336 L166.73783,159.17591 L158.780059,147.01582 L158.780059,114.313685 C158.780059,93.1711423 158.880156,81.2862808 159.030303,80.7108033 C159.430694,79.3096407 160.306549,78.2087272 161.507722,77.5581875 C162.533724,77.0327515 162.909091,76.98271 166.837928,76.98271 C170.541544,76.98271 171.19218,77.0327515 172.017986,77.4831252 Z" />
                    </svg>
                    <div className="absolute inset-0 bg-white/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    Next.js
                  </span>
                </motion.div>

                {/* Tailwind CSS Logo */}
                <motion.div
                  whileHover={{ scale: 1.1, y: -4 }}
                  className="group opacity-60 grayscale hover:opacity-100 hover:grayscale-0 hover:drop-shadow-[0_0_20px_rgba(56,189,248,0.4)] transition-all duration-500 flex flex-col items-center gap-2"
                >
                  <div className="relative">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 32 32"
                      className="h-10 w-10 fill-current text-[#38BDF8]"
                    >
                      <path d="M9,13.7q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q11.1,10.9,9,13.7ZM2,22.1q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q4.1,19.3,2,22.1Z" />
                    </svg>
                    <div className="absolute inset-0 bg-[#38BDF8]/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  <span className="text-xs font-medium text-muted-foreground group-hover:text-[#38BDF8] transition-colors duration-300">
                    Tailwind
                  </span>
                </motion.div>

                {/* TypeScript Logo */}
                <motion.div
                  whileHover={{ scale: 1.1, y: -4 }}
                  className="group opacity-60 grayscale hover:opacity-100 hover:grayscale-0 hover:drop-shadow-[0_0_20px_rgba(49,120,198,0.4)] transition-all duration-500 flex flex-col items-center gap-2"
                >
                  <div className="relative">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 32 32"
                      className="h-10 w-10"
                    >
                      <rect
                        width="28"
                        height="28"
                        x="2"
                        y="2"
                        fill="#3178c6"
                        rx="4"
                      />
                      <path
                        fill="#ffffff"
                        d="M18.245,23.759v3.068a6.492,6.492,0,0,0,1.764.575,11.56,11.56,0,0,0,2.146.192,9.968,9.968,0,0,0,2.088-.211,5.11,5.11,0,0,0,1.735-.7,3.542,3.542,0,0,0,1.181-1.266,4.469,4.469,0,0,0,.186-3.394,3.409,3.409,0,0,0-.717-1.117,5.236,5.236,0,0,0-1.123-.877,12.027,12.027,0,0,0-1.477-.734q-.6-.249-1.08-.484a5.5,5.5,0,0,1-.813-.479,2.089,2.089,0,0,1-.516-.518,1.091,1.091,0,0,1-.181-.618,1.039,1.039,0,0,1,.162-.571,1.4,1.4,0,0,1,.459-.436,2.439,2.439,0,0,1,.726-.283,4.211,4.211,0,0,1,.956-.1,5.942,5.942,0,0,1,.808.058,6.292,6.292,0,0,1,.856.177,5.994,5.994,0,0,1,.836.3,4.657,4.657,0,0,1,.751.422V13.9a7.509,7.509,0,0,0-1.525-.4,12.426,12.426,0,0,0-1.9-.129,8.767,8.767,0,0,0-2.064.235,5.239,5.239,0,0,0-1.716.733,3.655,3.655,0,0,0-1.171,1.271,3.731,3.731,0,0,0-.431,1.845,3.588,3.588,0,0,0,.789,2.34,6,6,0,0,0,2.395,1.639q.63.26,1.175.509a6.458,6.458,0,0,1,.942.517,2.463,2.463,0,0,1,.626.585,1.2,1.2,0,0,1,.23.719,1.1,1.1,0,0,1-.144.552,1.269,1.269,0,0,1-.435.441,2.381,2.381,0,0,1-.726.292,4.377,4.377,0,0,1-1.018.105,5.773,5.773,0,0,1-1.969-.35A5.874,5.874,0,0,1,18.245,23.759Zm-5.154-7.638h4V13.594H5.938v2.527H9.92V27.375h3.171Z"
                      />
                    </svg>
                    <div className="absolute inset-0 bg-[#3178c6]/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  <span className="text-xs font-medium text-muted-foreground group-hover:text-[#3178c6] transition-colors duration-300">
                    TypeScript
                  </span>
                </motion.div>

                {/* Framer Motion Logo */}
                <motion.div
                  whileHover={{ scale: 1.1, y: -4 }}
                  className="group opacity-60 grayscale hover:opacity-100 hover:grayscale-0 hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-500 flex flex-col items-center gap-2"
                >
                  <div className="relative">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      className="h-10 w-10 fill-current text-foreground"
                    >
                      <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" />
                    </svg>
                    <div className="absolute inset-0 bg-white/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    Framer
                  </span>
                </motion.div>

                {/* Radix UI Logo */}
                <motion.div
                  whileHover={{ scale: 1.1, y: -4 }}
                  className="group opacity-60 grayscale hover:opacity-100 hover:grayscale-0 hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-500 flex flex-col items-center gap-2"
                >
                  <div className="relative">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 25 25"
                      className="h-10 w-10 fill-current text-foreground"
                    >
                      <path d="M12 25C7.58172 25 4 21.4183 4 17C4 12.5817 7.58172 9 12 9V25Z" />
                      <path d="M12 0H4V8H12V0Z" />
                      <path d="M17 8C19.2091 8 21 6.20914 21 4C21 1.79086 19.2091 0 17 0C14.7909 0 13 1.79086 13 4C13 6.20914 14.7909 8 17 8Z" />
                    </svg>
                    <div className="absolute inset-0 bg-white/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    Radix UI
                  </span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
