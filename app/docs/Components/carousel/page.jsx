"use client";

import React, { useState } from "react";
import { Copy, Layers, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselIndicators,
} from "@/src/components/ui/carousel";
import { PlaygroundStage3D } from "@/components/DocsComp/playground-stage-3d";
import { SpotlightCard } from "@/components/DocsComp/spotlight-card";

const CarouselDocPage = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [mounted, setMounted] = useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const handleCopy = (text) => {
    if (text) {
      navigator.clipboard.writeText(text);
      toast.success("Copied to clipboard");
    }
  };

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "examples", label: "Examples" },
    { id: "api", label: "API Reference" },
  ];

  const showcaseSlides = [
    {
      title: "Elementra 3D Core",
      desc: "Pixel-perfect components crafted for maximum visual fidelity and responsiveness.",
      gradient: "from-blue-600/30 via-indigo-600/30 to-purple-600/30",
      accent: "text-blue-400",
    },
    {
      title: "Zero Setup Overhead",
      desc: "One command CLI setup with native Tailwind CSS and accessible keyboard navigation.",
      gradient: "from-purple-600/30 via-pink-600/30 to-rose-600/30",
      accent: "text-purple-400",
    },
    {
      title: "Theme Adaptability",
      desc: "Seamless light and dark mode support with tailored contrast ratios.",
      gradient: "from-emerald-600/30 via-teal-600/30 to-cyan-600/30",
      accent: "text-emerald-400",
    },
  ];

  const codeExamples = [
    {
      title: "Interactive Slideshow with Controls & Indicators",
      description: "Standard full-width carousel with next/previous buttons and page indicators.",
      code: `import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselIndicators,
} from "@/components/ui/carousel";

export default function BasicCarousel() {
  return (
    <Carousel loop autoplay autoplayInterval={4000} className="w-full max-w-xl">
      <CarouselContent>
        <CarouselItem>
          <div className="p-8 rounded-2xl bg-card border border-border text-center shadow-md">
            <h3 className="text-xl font-bold">First Slide</h3>
            <p className="text-muted-foreground mt-2">Welcome to Elementra UI.</p>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="p-8 rounded-2xl bg-card border border-border text-center shadow-md">
            <h3 className="text-xl font-bold">Second Slide</h3>
            <p className="text-muted-foreground mt-2">Seamless animations with pure React state.</p>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="p-8 rounded-2xl bg-card border border-border text-center shadow-md">
            <h3 className="text-xl font-bold">Third Slide</h3>
            <p className="text-muted-foreground mt-2">Fully responsive and mobile friendly.</p>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
      <CarouselIndicators className="mt-4" />
    </Carousel>
  );
}`,
    },
  ];

  if (!mounted) return null;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-2xl bg-indigo-500/10 text-indigo-500 border border-indigo-500/20 shadow-sm">
            <Layers className="h-6 w-6" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">Carousel</h1>
        </div>
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
          A flexible, touch-ready slideshow and slider component with autoplay, looping, indicators, and responsive layout support.
        </p>
      </div>

      {/* Tabs */}
      <div className="w-full">
        <div className="flex border-b border-border mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 font-semibold text-sm border-b-2 transition-colors ${
                activeTab === tab.id
                  ? "border-primary text-foreground font-bold"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div className="space-y-10">
            {/* Quick Steps */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <SpotlightCard className="p-5 space-y-2">
                <div className="flex items-center gap-2 text-sm font-bold text-foreground">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs font-bold">1</span>
                  Install Library
                </div>
                <div className="relative">
                  <pre className="p-3 rounded-xl bg-background border border-border font-mono text-xs text-foreground">
                    <code>npm i elementra-ui</code>
                  </pre>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="absolute right-1 top-1 h-7 w-7"
                    onClick={() => handleCopy("npm i elementra-ui")}
                  >
                    <Copy className="h-3.5 w-3.5" />
                  </Button>
                </div>
              </SpotlightCard>

              <SpotlightCard className="p-5 space-y-2">
                <div className="flex items-center gap-2 text-sm font-bold text-foreground">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs font-bold">2</span>
                  Add via CLI
                </div>
                <div className="relative">
                  <pre className="p-3 rounded-xl bg-background border border-border font-mono text-xs text-foreground">
                    <code>npx elementra-ui add carousel</code>
                  </pre>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="absolute right-1 top-1 h-7 w-7"
                    onClick={() => handleCopy("npx elementra-ui add carousel")}
                  >
                    <Copy className="h-3.5 w-3.5" />
                  </Button>
                </div>
              </SpotlightCard>
            </div>

            {/* 3D Interactive Playground Stage */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold flex items-center gap-2 text-foreground">
                <Sparkles className="h-5 w-5 text-primary" />
                3D Interactive Playground
              </h2>

              <PlaygroundStage3D code={codeExamples[0].code} defaultBackdrop="aurora">
                <div className="w-full max-w-xl px-4 py-6">
                  <Carousel loop className="w-full">
                    <CarouselContent>
                      {showcaseSlides.map((slide, idx) => (
                        <CarouselItem key={idx}>
                          <div
                            className={`p-8 sm:p-10 rounded-2xl border border-border bg-gradient-to-br ${slide.gradient} bg-card/90 backdrop-blur-md shadow-xl text-center flex flex-col items-center justify-center min-h-[220px]`}
                          >
                            <span className={`text-xs font-bold uppercase tracking-wider ${slide.accent} mb-2`}>
                              Feature {idx + 1}
                            </span>
                            <h3 className="text-2xl font-bold text-foreground mb-3">{slide.title}</h3>
                            <p className="text-sm sm:text-base text-muted-foreground max-w-md">
                              {slide.desc}
                            </p>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <div className="flex items-center justify-between mt-4 px-2">
                      <div className="flex gap-2">
                        <CarouselPrevious className="static translate-y-0" />
                        <CarouselNext className="static translate-y-0" />
                      </div>
                      <CarouselIndicators />
                    </div>
                  </Carousel>
                </div>
              </PlaygroundStage3D>
            </section>
          </div>
        )}

        {/* Examples Tab */}
        {activeTab === "examples" && (
          <div className="space-y-6">
            {codeExamples.map((example, index) => (
              <SpotlightCard key={index} className="p-6 space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-foreground">{example.title}</h3>
                  <p className="text-sm text-muted-foreground">{example.description}</p>
                </div>
                <div className="relative">
                  <pre className="bg-background/80 border border-border rounded-xl p-4 font-mono text-sm overflow-x-auto text-foreground">
                    <code>{example.code}</code>
                  </pre>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="absolute right-2 top-2 h-8 w-8"
                    onClick={() => handleCopy(example.code)}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </SpotlightCard>
            ))}
          </div>
        )}

        {/* API Reference Tab */}
        {activeTab === "api" && (
          <div className="space-y-8">
            <div className="rounded-2xl border border-border overflow-hidden bg-card shadow-sm">
              <div className="p-4 bg-muted/60 border-b border-border">
                <h3 className="font-bold text-foreground">Carousel Props</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="bg-card text-muted-foreground border-b border-border">
                    <tr>
                      <th className="p-4 font-medium">Prop</th>
                      <th className="p-4 font-medium">Type</th>
                      <th className="p-4 font-medium">Default</th>
                      <th className="p-4 font-medium">Description</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr>
                      <td className="p-4 font-mono text-primary font-semibold">loop</td>
                      <td className="p-4 font-mono text-xs">boolean</td>
                      <td className="p-4 font-mono text-xs">false</td>
                      <td className="p-4 text-muted-foreground">Whether the carousel loops indefinitely from end to start.</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-mono text-primary font-semibold">autoplay</td>
                      <td className="p-4 font-mono text-xs">boolean</td>
                      <td className="p-4 font-mono text-xs">false</td>
                      <td className="p-4 text-muted-foreground">Automatically transitions slides on an interval timer.</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-mono text-primary font-semibold">autoplayInterval</td>
                      <td className="p-4 font-mono text-xs">number (ms)</td>
                      <td className="p-4 font-mono text-xs">3000</td>
                      <td className="p-4 text-muted-foreground">Time in milliseconds between automatic slide transitions.</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-mono text-primary font-semibold">orientation</td>
                      <td className="p-4 font-mono text-xs">"horizontal" | "vertical"</td>
                      <td className="p-4 font-mono text-xs">"horizontal"</td>
                      <td className="p-4 text-muted-foreground">The scroll direction and transition axis of the slider.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CarouselDocPage;
