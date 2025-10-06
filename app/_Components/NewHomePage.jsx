"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/card";
import { SparklesCore } from "@/components/ui/sparkles";
import {
  Boxes,
  Layers,
  Palette,
  Zap,
  Copy,
  Sparkles,
  Layout,
  Code2,
  Sun,
  Moon,
} from "lucide-react";
import { Navbar } from "./Navbar";

export default function HomePage() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    // Check localStorage first
    const savedTheme = localStorage.getItem("elementra-theme");
    if (savedTheme) {
      const shouldBeDark = savedTheme === "dark";
      setIsDarkMode(shouldBeDark);
      document.documentElement.classList.toggle("dark", shouldBeDark);
      return;
    }

    // Check system preference
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // Toggle theme function
  const toggleTheme = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    document.documentElement.classList.toggle("dark", newDarkMode);
    localStorage.setItem("elementra-theme", newDarkMode ? "dark" : "light");
  };

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-black">
      <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />

      {/* Hero Section */}
      <section
        className="relative h-[100vh] w-full flex flex-col items-center justify-center overflow-hidden rounded-lg
         dark:bg-black"
      >
        <div className="w-full absolute inset-0 h-screen">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="w-full h-full"
            particleColor={isDarkMode ? "#FFFFFF" : "hsl(var(--primary))"}
          />
        </div>
        <div className="relative z-10 text-center">
          <div
            className="px-4 py-1 rounded-full w-fit mx-auto mb-6 
            bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary"
          >
            <p className="text-sm">
              Build Awesome React Reusable UI Components
            </p>
          </div>
          <h1
            className="text-5xl md:text-7xl font-bold text-center mb-6
            bg-clip-text text-transparent bg-gradient-to-b from-primary to-primary/80 
            dark:from-neutral-50 dark:to-neutral-400"
          >
            Elementra UI
          </h1>
          <p
            className="max-w-2xl mx-auto px-5 mb-8
            text-gray-600 dark:text-neutral-300"
          >
            Elementra UI is a collection of{" "}
            <span
              className="px-2 py-1 rounded
              bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary"
            >
              reusable ui
            </span>{" "}
            components that you can copy and paste into your projects. It's not
            a traditional component library — you don't install it via npm or
            manage it as a dependency. Instead, it's a toolbox of building
            blocks designed to help you craft responsive, accessible, and
            visually stunning UIs with ease.
          </p>
          <div className="flex items-center justify-center gap-4 mx-5">
            <Link href="/docs">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Get Started
                <Zap className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/docs/Components/button">
              <Button
                size="lg"
                variant="outline"
                className="border-primary/30 text-primary hover:bg-primary/5 dark:border-primary/50 dark:text-primary dark:hover:bg-primary/10"
              >
                Browse Components
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        className="py-24 
        bg-gradient-to-b from-primary/5 to-background dark:from-black dark:to-neutral-950"
      >
        <div className="container mx-auto px-4">
          <h2
            className="text-4xl font-bold text-center mb-16
            text-primary dark:text-white"
          >
            Why Choose Elementra UI?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Copy />}
              title="Copy and Paste"
              description="Simply copy the component code and paste it into your project. No complex installation or dependency management required."
            />
            <FeatureCard
              icon={<Palette />}
              title="Customizable"
              description="Every component is fully customizable and themeable. Adapt the styles to match your brand with ease."
            />
            <FeatureCard
              icon={<Layout />}
              title="Responsive"
              description="All components are designed to work flawlessly across all screen sizes and devices."
            />
            <FeatureCard
              icon={<Sparkles />}
              title="Modern Design"
              description="Beautiful, modern components that follow the latest design trends and best practices."
            />
            <FeatureCard
              icon={<Code2 />}
              title="Developer Friendly"
              description="Well-documented, TypeScript ready, and built with developer experience in mind."
            />
            <FeatureCard
              icon={<Boxes />}
              title="Comprehensive"
              description="A growing collection of UI components covering all your common interface needs."
            />
          </div>
        </div>
      </section>

      {/* Components Preview Section */}
      <section className="py-24 bg-gray-50 dark:bg-neutral-950">
        <div className="container mx-auto px-4">
          <h2
            className="text-4xl font-bold text-center mb-16 
            text-primary dark:text-white"
          >
            Featured Components
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ComponentPreviewCard
              title="Buttons"
              description="Versatile button components with various styles, sizes, and states."
              href="/docs/Components/button"
            />
            <ComponentPreviewCard
              title="Cards"
              description="Flexible card components for displaying content in a contained format."
              href="/docs/Components/card"
            />
            <ComponentPreviewCard
              title="Forms"
              description="Form components including inputs, selects, and validation."
              href="/docs/Components/form"
            />
            <ComponentPreviewCard
              title="Navigation"
              description="Navigation components including menus, tabs, and breadcrumbs."
              href="/docs/Components/navigation"
            />
            <ComponentPreviewCard
              title="Modals"
              description="Dialog and modal components for displaying overlay content."
              href="/docs/Components/modal"
            />
            <ComponentPreviewCard
              title="Data Display"
              description="Components for displaying data in tables, lists, and grids."
              href="/docs/Components/data-display"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-24 
        bg-gradient-to-b from-background to-primary/5 dark:from-neutral-950 dark:to-black"
      >
        <div className="container mx-auto px-4 text-center">
          <h2
            className="text-4xl font-bold mb-6 
            text-primary dark:text-white"
          >
            Ready to Build Something Amazing?
          </h2>
          <p
            className="max-w-2xl mx-auto mb-8
            text-gray-600 dark:text-neutral-300"
          >
            Get started with Elementra UI today and create beautiful, responsive
            web applications with ease.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link href="/docs">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Get Started Now
                <Zap className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="https://github.com/elementraui/Elementra-Dev">
              <Button
                size="lg"
                variant="outline"
                className="border-primary/30 text-primary hover:bg-primary/5 dark:border-primary/50 dark:text-primary dark:hover:bg-primary/10"
              >
                View on GitHub
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Theme Toggle Button (Fixed) */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={toggleTheme}
          size="icon"
          className="rounded-full p-3 bg-background hover:bg-muted text-primary shadow-lg dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-yellow-300"
        >
          {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
        </Button>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <Card
      className="p-6 transition-all duration-300
      bg-card border-border hover:border-primary/30 shadow-sm hover:shadow-md
      dark:bg-neutral-900/50 dark:border-neutral-800 dark:hover:border-primary/50"
    >
      <div
        className="h-12 w-12 rounded-lg flex items-center justify-center mb-4
        bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary"
      >
        {icon}
      </div>
      <h3
        className="text-xl font-semibold mb-2
        text-primary dark:text-white"
      >
        {title}
      </h3>
      <p className="text-gray-600 dark:text-neutral-400">{description}</p>
    </Card>
  );
}

function ComponentPreviewCard({ title, description, href }) {
  return (
    <Link href={href}>
      <Card
        className="p-6 cursor-pointer group transition-all duration-300
        bg-card border-border hover:border-primary/30 shadow-sm hover:shadow-md
        dark:bg-neutral-900/50 dark:border-neutral-800 dark:hover:border-primary/50"
      >
        <h3
          className="text-xl font-semibold mb-2 transition-colors
          text-primary group-hover:text-primary/80 
          dark:text-white dark:group-hover:text-primary"
        >
          {title}
        </h3>
        <p className="mb-4 text-gray-600 dark:text-neutral-400">
          {description}
        </p>
        <div className="flex items-center text-sm text-primary dark:text-primary">
          <span>Learn more</span>
          <svg
            className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </Card>
    </Link>
  );
}
