"use client";
import { useState, useEffect } from "react";
import Hero from "@/components/home/hero";
import Features from "@/components/features";
import { InteractiveDemo } from "@/components/interactive-demo";
import { ComponentStats } from "@/components/component-stats";
import { CodeShowcase } from "@/components/code-showcase";
import { TestimonialsSection } from "@/components/testimonials-section";
import Link from "next/link";
import Image from "next/image";
import NewsletterSection from "@/components/newsletter-section";
import Footer from "./_Components/Footer";
import { Github } from "lucide-react";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "system");
    root.classList.add("dark");
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMobileNavClick = (elementId) => {
    setIsMobileMenuOpen(false);
    setTimeout(() => {
      const element = document.getElementById(elementId);
      if (element) {
        const headerOffset = 120; // Account for sticky header height + margin
        const elementPosition =
          element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen">
      {/* Desktop Header */}
      <header
        className={`fixed top-2 sm:top-4 z-[9999] mx-auto hidden w-full flex-row items-center justify-between self-start rounded-full bg-background/90 md:flex backdrop-blur-md border border-border/50 shadow-lg transition-all duration-300 ${
          isScrolled
            ? "max-w-2xl sm:max-w-3xl px-2 sm:px-3"
            : "max-w-4xl sm:max-w-5xl px-3 sm:px-4"
        } py-2 left-1/2 transform -translate-x-1/2`}
        style={{
          willChange: "transform",
          backfaceVisibility: "hidden",
          perspective: "1000px",
        }}
      >
        <Link
          className={`z-50 flex items-center justify-center gap-2 transition-all duration-300 ${
            isScrolled ? "ml-2 sm:ml-4" : ""
          }`}
          href="#"
          aria-label="Elementra UI Logo"
        >
          <Image
            src="/icon2.png"
            alt="Elementra UI Logo"
            width={isScrolled ? 40 : 50}
            height={isScrolled ? 40 : 50}
            className="rounded-full transition-all duration-300"
          />
        </Link>

        <div className="absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-1 sm:space-x-2 text-sm font-medium text-muted-foreground transition duration-200 hover:text-foreground md:flex">
          <a
            className="relative px-2 sm:px-3 py-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer text-xs sm:text-sm"
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById("features");
              if (element) {
                const headerOffset = 120;
                const elementPosition =
                  element.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - headerOffset;
                window.scrollTo({ top: offsetPosition, behavior: "smooth" });
              }
            }}
          >
            <span className="relative z-20">Features</span>
          </a>
          <Link
            href="/docs"
            className="relative px-2 sm:px-3 py-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer text-xs sm:text-sm"
          >
            <span className="relative z-20">Docs</span>
          </Link>
          <a
            className="relative px-2 sm:px-3 py-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer text-xs sm:text-sm"
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById("testimonials");
              if (element) {
                const headerOffset = 120;
                const elementPosition =
                  element.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - headerOffset;
                window.scrollTo({ top: offsetPosition, behavior: "smooth" });
              }
            }}
          >
            <span className="relative z-20">Reviews</span>
          </a>
        </div>

        <Link className="cursor-pointer z-10" href="https://github.com/waleedcodes/Elementra-Dev" target="_blank" rel="noopener noreferrer">
          <Github
            size={25}
            className="text-muted-foreground hover:text-foreground transition-colorsmr-2"
          />
        </Link>
      </header>
      {/* Mobile Header */}
      <header className="fixed top-2 z-[9999] mx-2 sm:mx-4 flex w-auto flex-row items-center justify-between rounded-full bg-background/90 backdrop-blur-md border border-border/50 shadow-lg md:hidden px-3 sm:px-4 py-2.5 sm:py-3 left-1/2 transform -translate-x-1/2 min-w-[calc(100vw-1rem)] sm:min-w-[calc(100vw-2rem)]">
        <Link
          href="#"
          className="flex items-center justify-center"
          aria-label="Elementra UI Logo"
        >
          <Image
            src="/icon2.png"
            alt="Elementra UI Logo"
            width={32}
            height={32}
            className="rounded-full"
          />
        </Link>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="flex items-center justify-center w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-background/50 border border-border/50 transition-colors hover:bg-background/80"
          aria-label="Toggle menu"
        >
          <div className="flex flex-col items-center justify-center w-4 sm:w-5 h-4 sm:h-5 space-y-1">
            <span
              className={`block w-3 sm:w-4 h-0.5 bg-foreground transition-all duration-300 ${
                isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></span>
            <span
              className={`block w-3 sm:w-4 h-0.5 bg-foreground transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-3 sm:w-4 h-0.5 bg-foreground transition-all duration-300 ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            ></span>
          </div>
        </button>
      </header>
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[9998] bg-black/50 backdrop-blur-sm md:hidden">
          <div className="absolute top-16 sm:top-20 left-2 sm:left-4 right-2 sm:right-4 bg-background/95 backdrop-blur-md border border-border/50 rounded-2xl shadow-2xl p-4 sm:p-6">
            <nav className="flex flex-col space-y-3 sm:space-y-4">
              <button
                onClick={() => handleMobileNavClick("features")}
                className="text-left px-3 sm:px-4 py-2 sm:py-3 text-base sm:text-lg font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-background/50"
              >
                Features
              </button>
              <Link
                href="/docs"
                className="text-left px-3 sm:px-4 py-2 sm:py-3 text-base sm:text-lg font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-background/50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Documentation
              </Link>
              <button
                onClick={() => handleMobileNavClick("testimonials")}
                className="text-left px-3 sm:px-4 py-2 sm:py-3 text-base sm:text-lg font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-background/50"
              >
                Reviews
              </button>
              <div className="border-t border-border/50 pt-3 sm:pt-4 mt-3 sm:mt-4 flex flex-col space-y-2 sm:space-y-3">
                <a
                  href="/login"
                  className="px-3 sm:px-4 py-2 sm:py-3 text-base sm:text-lg font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-background/50 cursor-pointer"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Log In
                </a>
                <a
                  href="/signup"
                  className="px-3 sm:px-4 py-2 sm:py-3 text-base sm:text-lg font-bold text-center bg-gradient-to-b from-primary to-primary/80 text-primary-foreground rounded-lg shadow-lg hover:-translate-y-0.5 transition-all duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Sign Up
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
      {/* Hero Section */}
      <div className="pt-16 sm:pt-20">
        <Hero />
      </div>

      {/* Component Stats Section */}
      <ComponentStats />

      {/* Features Section */}
      <div id="features">
        <Features />
      </div>

      {/* Interactive Demo Section */}
      <InteractiveDemo />

      {/* Code Showcase Section */}
      <CodeShowcase />

      {/* Testimonials Section */}
      <div id="testimonials">
        <TestimonialsSection />
      </div>

      {/* Newsletter Section */}
      <NewsletterSection />

      <Footer />
    </div>
  );
}
