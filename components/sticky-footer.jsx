"use client"
import { useState } from "react"

export default function StickyFooter() {
  // Footer now rendered as a normal element (not fixed). Keep current year state.
  const [currentYear] = useState(new Date().getFullYear())

  const navigationLinks = [
    { href: "/", label: "Home", icon: "✨" },
    { href: "/docs", label: "Documentation", icon: "📖" },
    { href: "/docs/Components", label: "Components", icon: "🎨" },
    { href: "/docs/Installation", label: "Installation", icon: "💻" },
  ]

  const socialLinks = [
    { href: "https://github.com/waleedcodes/Elementra-Dev", label: "GitHub", icon: "💻" },
    { href: "https://twitter.com", label: "Twitter", icon: "🐦" },
    { href: "https://discord.gg", label: "Discord", icon: "💬" },
  ]

  return (
    <footer
      className="w-full backdrop-blur-xl border-t border-white/10"
      style={{ 
        background: "linear-gradient(135deg, #e78a53 0%, #d67043 100%)",
        boxShadow: "0 -20px 40px rgba(231, 138, 83, 0.12)"
      }}>
      
      <style jsx>{`
        /* slideUp animation removed for normal footer */
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
            opacity: 0.2;
          }
          50% {
            transform: translateY(-20px);
            opacity: 0.8;
          }
        }
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.2;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.6;
          }
        }
        .float-particle {
          animation: float 5s ease-in-out infinite;
        }
        .pulse-dot {
          animation: pulse 2s ease-in-out infinite;
        }
      `}</style>

      {/* Animated background patterns */}
      <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden ">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full float-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative overflow-hidden w-full">
        <div className="container mx-auto px-6 sm:px-8 lg:px-16 py-6 sm:py-8">
          <div className="flex flex-wrap justify-between items-start gap-8 lg:gap-16 relative z-10">
            
            {/* Navigation Links */}
            <div className="flex-shrink-0 min-w-[200px]">
              <h3 className="text-base sm:text-lg font-semibold text-white/90 mb-3 sm:mb-4 flex items-center gap-2">
                <span className="text-xl">✨</span>
                Elementra UI
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                {navigationLinks.map((link) => (
                  <li key={link.href}>
                    <a 
                      href={link.href}
                      className="group flex items-center gap-2 sm:gap-3 text-sm text-white/70 hover:text-white transition-all duration-200 hover:translate-x-1"
                    >
                      <span className="text-sm group-hover:scale-110 transition-transform inline-block">
                        {link.icon}
                      </span>
                      <span className="group-hover:underline">{link.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Links */}
            <div className="flex-shrink-0 min-w-[200px]">
              <h3 className="text-base sm:text-lg font-semibold text-white/90 mb-3 sm:mb-4">Community</h3>
              <ul className="space-y-2 sm:space-y-3">
                {socialLinks.map((link) => (
                  <li key={link.href}>
                    <a 
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-2 sm:gap-3 text-sm text-white/70 hover:text-white transition-all duration-200 hover:translate-x-1"
                    >
                      <span className="text-sm group-hover:scale-110 transition-transform inline-block">
                        {link.icon}
                      </span>
                      <span className="group-hover:underline">{link.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Copyright and Version */}
            <div className="flex-shrink-0 flex flex-col justify-start text-left lg:text-right space-y-1 sm:space-y-2 z-10 min-w-[200px] lg:ml-auto">
              <div className="text-xs text-white/60 flex items-center gap-1 lg:justify-end">
                Made with <span className="text-red-400 inline-block">❤️</span> by WaleedCodes
              </div>
              <div className="text-xs text-white/60">
                © {currentYear} Elementra UI. All rights reserved.
              </div>
              <div className="text-xs text-white/40 font-mono">
                Version 1.0.0
              </div>
            </div>
          </div>
        </div>

        {/* Large Version Text - Hidden on mobile, visible on larger screens */}
        <div className="hidden xl:block absolute bottom-0 right-0 translate-y-1/4 pointer-events-none select-none overflow-hidden">
          <h2 
            className="text-[140px] xl:text-[160px] 2xl:text-[180px] font-black text-white/5 leading-none tracking-tighter"
            style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
          >
            UI
          </h2>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-4 left-4 w-3 h-3 bg-white/20 rounded-full pulse-dot" />
        <div 
          className="absolute top-8 right-12 w-2 h-2 bg-white/15 rounded-full pulse-dot"
          style={{ animationDelay: "0.7s", animationDuration: "2.5s" }}
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
      </div>
    </footer>
  );
}