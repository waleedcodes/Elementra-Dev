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
    <div className="">
      {/* Desktop Header */}
      <header
        className={`sticky top-4 z-[9999] mx-auto hidden w-full flex-row items-center justify-between self-start rounded-full bg-background/80 md:flex backdrop-blur-sm border border-border/50 shadow-lg transition-all duration-300 ${
          isScrolled ? "max-w-3xl px-2" : "max-w-5xl px-4"
        } py-2`}
        style={{
          willChange: "transform",
          transform: "translateZ(0)",
          backfaceVisibility: "hidden",
          perspective: "1000px",
        }}
      >
        <Link
          className={`z-50 flex items-center justify-center gap-2 transition-all duration-300 ${
            isScrolled ? "ml-4" : ""
          }`}
          href="#"
          aria-label="Elementra UI Logo"
        >
          <Image
            src="/icon2.png"
            alt="Elementra UI Logo"
            width={50}
            height={50}
            className="rounded-full"
          />
        </Link>

        <div className="absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium text-muted-foreground transition duration-200 hover:text-foreground md:flex md:space-x-2">
          <a
            className="relative px-3 py-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
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
            className="relative px-3 py-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
          >
            <span className="relative z-20">Docs</span>
          </Link>
          <a
            className="relative px-3 py-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
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

        <div className="flex items-center gap-4">
          <a
            href="/login"
            className="font-medium transition-colors hover:text-foreground text-muted-foreground text-sm cursor-pointer"
          >
            Log In
          </a>

          <a
            href="/signup"
            className="rounded-md font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center bg-gradient-to-b from-primary to-primary/80 text-primary-foreground shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset] px-4 py-2 text-sm"
          >
            Sign Up
          </a>
        </div>
      </header>
      {/* Mobile Header */}
      <header className="sticky top-4 z-[9999] mx-4 flex w-auto flex-row items-center justify-between rounded-full bg-background/80 backdrop-blur-sm border border-border/50 shadow-lg md:hidden px-4 py-3">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-background/50 border border-border/50 transition-colors hover:bg-background/80"
          aria-label="Toggle menu"
        >
          <div className="flex flex-col items-center justify-center w-5 h-5 space-y-1">
            <span
              className={`block w-4 h-0.5 bg-foreground transition-all duration-300 ${
                isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></span>
            <span
              className={`block w-4 h-0.5 bg-foreground transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-4 h-0.5 bg-foreground transition-all duration-300 ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            ></span>
          </div>
        </button>
      </header>
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[9998] bg-black/50 backdrop-blur-sm md:hidden">
          <div className="absolute top-20 left-4 right-4 bg-background/95 backdrop-blur-md border border-border/50 rounded-2xl shadow-2xl p-6">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => handleMobileNavClick("features")}
                className="text-left px-4 py-3 text-lg font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-background/50"
              >
                Features
              </button>
              <Link
                href="/docs"
                className="text-left px-4 py-3 text-lg font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-background/50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Documentation
              </Link>
              <button
                onClick={() => handleMobileNavClick("testimonials")}
                className="text-left px-4 py-3 text-lg font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-background/50"
              >
                Reviews
              </button>
              <button
                onClick={() => handleMobileNavClick("faq")}
                className="text-left px-4 py-3 text-lg font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-background/50"
              >
                FAQ
              </button>
              <div className="border-t border-border/50 pt-4 mt-4 flex flex-col space-y-3">
                <a
                  href="/login"
                  className="px-4 py-3 text-lg font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-background/50 cursor-pointer"
                >
                  Log In
                </a>
                <a
                  href="/signup"
                  className="px-4 py-3 text-lg font-bold text-center bg-gradient-to-b from-primary to-primary/80 text-primary-foreground rounded-lg shadow-lg hover:-translate-y-0.5 transition-all duration-200"
                >
                  Sign Up
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
      {/* Hero Section */}
      <Hero />

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
