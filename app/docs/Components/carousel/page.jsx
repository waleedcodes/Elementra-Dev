"use client";
import React, { useState } from "react";
import { Copy, CopyIcon, Play, Pause, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { motion } from "framer-motion";

const CarouselDocPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { title: "Modern Design Systems", subtitle: "Crafted with Tailwind CSS & Framer Motion", bg: "bg-primary/10 text-primary" },
    { title: "Accessible & Responsive", subtitle: "Keyboard navigation & touch gestures out of the box", bg: "bg-secondary text-secondary-foreground" },
    { title: "Zero Dependencies", subtitle: "Pure React state management with fluid transitions", bg: "bg-accent text-accent-foreground" },
  ];

  const codeExample = `import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselIndicators,
} from "@/components/ui/carousel";

export default function CarouselDemo() {
  return (
    <Carousel opts={{ loop: true, autoplay: true }}>
      <CarouselContent>
        <CarouselItem>
          <div className="p-8 bg-card border border-border rounded-xl text-center">
            <h3 className="text-xl font-bold">Slide 1</h3>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="p-8 bg-card border border-border rounded-xl text-center">
            <h3 className="text-xl font-bold">Slide 2</h3>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
      <CarouselIndicators />
    </Carousel>
  );
}`;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Page Header */}
      <div className="mb-8 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 text-foreground">Carousel</h1>
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
          A touch-friendly, responsive slideshow slider for images, testimonials, and feature highlights.
        </p>
      </div>

      <div className="space-y-8 sm:space-y-12">
        {/* Step 1: Installation */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-semibold flex items-center gap-3 text-foreground">
            <span className="flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-primary text-primary-foreground text-sm font-bold">1</span>
            Installation
          </h2>
          <div className="bg-card border border-border rounded-lg p-4 font-mono text-sm overflow-x-auto text-foreground">
            <code>npm i elementra-ui</code>
          </div>
        </section>

        {/* Step 2: Add Component CLI */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-semibold flex items-center gap-3 text-foreground">
            <span className="flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-primary text-primary-foreground text-sm font-bold">2</span>
            Add Component CLI
          </h2>
          <div className="bg-card border border-border rounded-lg p-4 font-mono text-sm overflow-x-auto text-foreground">
            <code>npx elementra-ui add carousel</code>
          </div>
        </section>

        {/* Step 3: Interactive Sandbox */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-semibold flex items-center gap-3 text-foreground">
            <span className="flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-primary text-primary-foreground text-sm font-bold">3</span>
            Interactive Preview
          </h2>

          <div className="bg-card border border-border rounded-xl p-6 sm:p-8 space-y-6">
            {/* Live Slider Preview */}
            <div className="relative overflow-hidden rounded-xl border border-border">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {slides.map((slide, idx) => (
                  <div
                    key={idx}
                    className={`min-w-full flex-shrink-0 p-8 sm:p-12 text-center flex flex-col items-center justify-center ${slide.bg} h-64`}
                  >
                    <h3 className="text-xl sm:text-2xl font-bold mb-2">{slide.title}</h3>
                    <p className="text-sm sm:text-base opacity-80">{slide.subtitle}</p>
                  </div>
                ))}
              </div>

              {/* Prev / Next Buttons */}
              <button
                type="button"
                onClick={() => setCurrentSlide((prev) => (prev > 0 ? prev - 1 : slides.length - 1))}
                className="absolute left-4 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-background/80 border border-border text-foreground backdrop-blur-sm hover:bg-accent transition-all"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => setCurrentSlide((prev) => (prev < slides.length - 1 ? prev + 1 : 0))}
                className="absolute right-4 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-background/80 border border-border text-foreground backdrop-blur-sm hover:bg-accent transition-all"
              >
                <ChevronRight className="h-4 w-4" />
              </button>

              {/* Indicator Dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === currentSlide ? "w-6 bg-primary" : "w-2 bg-muted-foreground/40"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Step 4: Code Usage */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground">Code Usage</h2>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                navigator.clipboard.writeText(codeExample);
                toast.success("Code copied to clipboard!");
              }}
              className="flex items-center gap-2"
            >
              <Copy className="h-4 w-4" />
              Copy Code
            </Button>
          </div>

          <div className="bg-card border border-border rounded-lg p-4 font-mono text-sm overflow-x-auto text-foreground">
            <pre>{codeExample}</pre>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CarouselDocPage;
