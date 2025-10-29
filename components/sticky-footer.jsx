"use client"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import Link from "next/link"
import { Github, Twitter, Heart, Sparkles, Code2, Book, Palette } from "lucide-react"

export function StickyFooter() {
  const [isAtBottom, setIsAtBottom] = useState(false)
  const [currentYear] = useState(new Date().getFullYear())

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollTop = window.scrollY
          const windowHeight = window.innerHeight
          const documentHeight = document.documentElement.scrollHeight
          const isNearBottom = scrollTop + windowHeight >= documentHeight - 100

          setIsAtBottom(isNearBottom)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // Check initial state
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

  const navigationLinks = [
    { href: "/", label: "Home", icon: Sparkles },
    { href: "/docs", label: "Documentation", icon: Book },
    { href: "/docs/Components", label: "Components", icon: Palette },
    { href: "/docs/Installation", label: "Installation", icon: Code2 },
  ]

  const socialLinks = [
    { href: "https://github.com/waleedcodes/Elementra-Dev", label: "GitHub", icon: Github },
    { href: "https://twitter.com", label: "Twitter", icon: Twitter },
    { href: "https://discord.gg", label: "Discord", icon: Heart },
  ]

  return (
    <AnimatePresence>
      {isAtBottom && (
        <motion.footer
          className="  w-full h-80 flex justify-center items-center backdrop-blur-xl border-t border-white/10"
          style={{ 
            background: "linear-gradient(135deg, #e78a53 0%, #d67043 100%)",
            boxShadow: "0 -20px 40px rgba(231, 138, 83, 0.3)"
          }}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}>
          
          {/* Animated background patterns */}
          <motion.div
            className="absolute inset-0 opacity-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-white/20 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.2, 0.8, 0.2],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </motion.div>

          <div className="relative overflow-hidden w-full h-full flex justify-between items-start px-8 md:px-16 py-8">
            
            {/* Navigation and Social Links */}
            <motion.div
              className="flex flex-col md:flex-row gap-8 md:gap-16 z-10"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Navigation Links */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white/90 mb-4 flex items-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  Elementra UI
                </h3>
                <ul className="space-y-3">
                  {navigationLinks.map((link, index) => (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                    >
                      <Link 
                        href={link.href}
                        className="group flex items-center gap-3 text-white/80 hover:text-white transition-all duration-200 hover:translate-x-1"
                      >
                        <link.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                        <span className="group-hover:underline">{link.label}</span>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white/90 mb-4">Community</h3>
                <ul className="space-y-3">
                  {socialLinks.map((link, index) => (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                    >
                      <Link 
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3 text-white/80 hover:text-white transition-all duration-200 hover:translate-x-1"
                      >
                        <link.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                        <span className="group-hover:underline">{link.label}</span>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Copyright and Version */}
            <motion.div
              className="hidden md:flex flex-col items-end text-right space-y-2 z-10"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="text-sm text-white/60">
                Made with <Heart className="w-4 h-4 inline mx-1 text-red-400" /> by WaleedCodes
              </div>
              <div className="text-sm text-white/60">
                © {currentYear} Elementra UI. All rights reserved.
              </div>
              <div className="text-xs text-white/40 font-mono">
                Version 1.0.0
              </div>
            </motion.div>

            {/* Large Version Text */}
            <motion.div
              className="absolute bottom-0 right-0 translate-y-1/3 pointer-events-none select-none"
              initial={{ opacity: 0, x: 100, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              <h2 
                className="text-[120px] md:text-[180px] lg:text-[220px] font-black text-white/5 leading-none tracking-tighter"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                UI
              </h2>
            </motion.div>

            {/* Decorative Elements */}
            <motion.div
              className="absolute top-4 left-4 w-3 h-3 bg-white/20 rounded-full"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.6, 0.2] 
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut" 
              }}
            />
            <motion.div
              className="absolute top-8 right-12 w-2 h-2 bg-white/15 rounded-full"
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.1, 0.5, 0.1] 
              }}
              transition={{ 
                duration: 2.5, 
                repeat: Infinity,
                delay: 0.7,
                ease: "easeInOut" 
              }}
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
          </div>
        </motion.footer>
      )}
    </AnimatePresence>
  );
}
