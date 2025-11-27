"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plus,
  Star,
  Heart,
  Mail,
  Settings,
  Bell,
  Download,
  User,
  ArrowRight,
  Copy,
  CopyIcon,
} from "lucide-react";
import { Buttons } from "@/components/Buttons";

const ButtonComponent = () => {
  const [activeTab, setActiveTab] = React.useState("overview");
  const [activePreview, setActivePreview] = React.useState("preview");
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "examples", label: "Examples" },
    { id: "api", label: "API" },
  ];

  if (!mounted) {
    return null;
  }

  const handleCopy = (text) => {
    if (text) {
      navigator.clipboard.writeText(text);
      toast("Copied to clipboard", { type: "success" });
    }
  };

  const codeExamples = [
    {
      title: "Basic Button",
      code: `import { Button } from "@/components/ui/button";

export default function BasicButton() {
  return <Button>Click me</Button>;
}`,
      description: "Simple button with default styling.",
    },
    {
      title: "Button Variants",
      code: `import { Button } from "@/components/ui/button";

export default function ButtonVariants() {
  return (
    <div className="flex gap-4">
      <Button variant="default">Default</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  );
}`,
      description: "Different button variants for various use cases.",
    },
    {
      title: "Button Sizes",
      code: `import { Button } from "@/components/ui/button";

export default function ButtonSizes() {
  return (
    <div className="flex items-center gap-4">
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
      <Button size="icon">
        <Plus className="h-4 w-4" />
      </Button>
    </div>
  );
}`,
      description: "Different button sizes including icon-only buttons.",
    },
    {
      title: "Buttons with Icons",
      code: `import { Button } from "@/components/ui/button";
import { Mail, Download, ArrowRight } from "lucide-react";

export default function ButtonsWithIcons() {
  return (
    <div className="flex gap-4">
      <Button>
        <Mail className="mr-2 h-4 w-4" />
        Email
      </Button>
      <Button variant="outline">
        <Download className="mr-2 h-4 w-4" />
        Download
      </Button>
      <Button variant="ghost">
        Continue
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  );
}`,
      description:
        "Buttons combined with icons for better visual communication.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 text-foreground">
          Button
        </h1>
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
          A versatile button component with multiple variants, sizes, and states
          for building interactive user interfaces.
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="mb-8">
        <div className="flex space-x-1 bg-muted p-1 rounded-lg w-fit">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                activeTab === tab.id
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground hover:bg-background/50"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      {activeTab === "overview" && (
        <div className="space-y-8 sm:space-y-12">
          {/* Installation Section */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold flex items-center gap-3 text-foreground">
              <span className="flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                1
              </span>
              Installation
            </h2>
            <div className="relative">
              <div className="bg-card border border-border rounded-lg p-4 font-mono text-sm overflow-x-auto">
                <code className="text-foreground">npm i elementra-ui</code>
              </div>
              <Button
                size="sm"
                variant="ghost"
                className="absolute top-2 right-2 h-8 w-8 p-0 hover:bg-muted"
                onClick={() => handleCopy("npm i elementra-ui")}
              >
                <Copy className="h-4 w-4 text-muted-foreground" />
              </Button>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold flex items-center gap-3 text-foreground">
              <span className="flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                2
              </span>
              Add Components Using CLI
            </h2>

            <div className="relative">
              <div className="bg-card border border-border rounded-lg p-4 font-mono text-sm overflow-x-auto">
                <code className="text-foreground">npx elementra-ui add</code>
              </div>
              <Button
                size="sm"
                variant="ghost"
                className="absolute top-2 right-2 h-8 w-8 p-0 hover:bg-muted"
                onClick={() => handleCopy("npx elementra-ui add")}
              >
                <Copy className="h-4 w-4 text-muted-foreground" />
              </Button>
            </div>
            <div className="bg-muted/50 border border-border rounded-lg p-4">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Select components using the up/down arrow keys. Press spacebar
                to select multiple components, then press enter to add them to
                your{" "}
                <code className="bg-primary/10 text-primary px-1.5 py-0.5 rounded text-xs font-mono">
                  src
                </code>{" "}
                folder.
              </p>
            </div>
          </section>

          {/* Preview Section */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold flex items-center gap-3 text-foreground">
              <span className="flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                3
              </span>
              Component Preview
            </h2>

            <div className="w-full">
              <div className="w-full">
                <div className="flex items-center justify-between mb-6">
                  <div className="grid w-[240px] grid-cols-2 bg-muted p-1 rounded-lg">
                    <button
                      onClick={() => setActivePreview("preview")}
                      className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
                        activePreview === "preview"
                          ? "bg-background text-foreground shadow-sm"
                          : "text-muted-foreground hover:text-foreground hover:bg-background/50"
                      }`}
                    >
                      Preview
                    </button>
                    <button
                      onClick={() => setActivePreview("code")}
                      className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
                        activePreview === "code"
                          ? "bg-background text-foreground shadow-sm"
                          : "text-muted-foreground hover:text-foreground hover:bg-background/50"
                      }`}
                    >
                      Code
                    </button>
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  {activePreview === "preview" && (
                    <motion.div
                      key="preview"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="rounded-lg border border-border bg-background p-6 sm:p-8 min-h-[300px] sm:min-h-[400px] flex items-center justify-center"
                    >
                      <div className="flex flex-wrap gap-3 items-center justify-center">
                        <Button variant="default">Default</Button>
                        <Button variant="destructive">Destructive</Button>
                        <Button variant="outline">Outline</Button>
                        <Button variant="secondary">Secondary</Button>
                        <Button variant="ghost">Ghost</Button>
                        <Button variant="link">Link</Button>
                      </div>
                    </motion.div>
                  )}

                  {activePreview === "code" && (
                    <motion.div
                      key="code"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="relative rounded-lg border border-border bg-card"
                    >
                      <div className="p-4 overflow-x-auto">
                        <pre className="text-xs sm:text-sm text-foreground font-mono">
                          <code className="whitespace-pre-wrap">
                            {codeExamples[1].code}
                          </code>
                        </pre>
                      </div>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="absolute top-2 right-2 h-8 w-8 p-0 hover:bg-muted"
                        onClick={() => handleCopy(codeExamples[1].code)}
                      >
                        <Copy className="h-4 w-4 text-muted-foreground" />
                      </Button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </section>

          {/* Basic Usage Section */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold flex items-center gap-3 text-foreground">
              <span className="flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                4
              </span>
              Basic Usage
            </h2>

            <div className="space-y-4">
              <h3 className="text-lg font-medium text-foreground flex items-center gap-2">
                <span className="w-1 h-6 bg-primary rounded-full"></span>
                Import and Use
              </h3>

              <div className="relative">
                <div className="bg-card border border-border rounded-lg p-4 overflow-x-auto">
                  <pre className="text-xs sm:text-sm font-mono text-foreground">
                    <code className="whitespace-pre-wrap">
                      {codeExamples[0].code}
                    </code>
                  </pre>
                </div>
                <Button
                  size="sm"
                  variant="ghost"
                  className="absolute top-2 right-2 h-8 w-8 p-0 hover:bg-muted"
                  onClick={() => handleCopy(codeExamples[0].code)}
                >
                  <Copy className="h-4 w-4 text-muted-foreground" />
                </Button>
              </div>
            </div>
          </section>
        </div>
      )}

      {activeTab === "examples" && (
        <div className="space-y-8 sm:space-y-12">
          {/* Interactive Button Showcase */}
          <div className="space-y-8">
            {/* Standard UI Buttons */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Basic Variants */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-foreground flex items-center gap-2">
                  <span className="w-1 h-6 bg-primary rounded-full"></span>
                  Basic Variants
                </h3>
                <div className="bg-muted/30 border border-border rounded-lg p-6 space-y-3">
                  <div className="flex flex-wrap gap-3">
                    <Button variant="default">Default</Button>
                    <Button variant="destructive">Destructive</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="ghost">Ghost</Button>
                    <Button variant="link">Link</Button>
                  </div>
                </div>
              </div>

              {/* Button Sizes */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-foreground flex items-center gap-2">
                  <span className="w-1 h-6 bg-primary rounded-full"></span>
                  Button Sizes
                </h3>
                <div className="bg-muted/30 border border-border rounded-lg p-6 space-y-3">
                  <div className="flex flex-wrap gap-3 items-center">
                    <Button size="sm">Small</Button>
                    <Button size="default">Default</Button>
                    <Button size="lg">Large</Button>
                    <Button size="icon">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Buttons with Icons */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-foreground flex items-center gap-2">
                  <span className="w-1 h-6 bg-primary rounded-full"></span>
                  Buttons with Icons
                </h3>
                <div className="bg-muted/30 border border-border rounded-lg p-6 space-y-3">
                  <div className="flex flex-wrap gap-3">
                    <Button>
                      <Mail className="mr-2 h-4 w-4" />
                      Email
                    </Button>
                    <Button variant="outline">
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                    <Button variant="ghost">
                      Continue
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Button States */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-foreground flex items-center gap-2">
                  <span className="w-1 h-6 bg-primary rounded-full"></span>
                  Button States
                </h3>
                <div className="bg-muted/30 border border-border rounded-lg p-6 space-y-3">
                  <div className="flex flex-wrap gap-3">
                    <Button>Normal</Button>
                    <Button disabled>Disabled</Button>
                    <Button className="opacity-75 cursor-not-allowed">Loading</Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Custom Elementra Buttons */}
            <div className="border-t border-border pt-8">
              <h2 className="text-2xl font-semibold mb-6 text-foreground flex items-center gap-3">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-bold">
                  ✨
                </span>
                Custom Elementra Button Variants
              </h2>
              
              <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
                {/* Basic Custom Variants */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-foreground flex items-center gap-2">
                    <span className="w-1 h-6 bg-blue-500 rounded-full"></span>
                    Basic Custom
                  </h3>
                  <div className="bg-muted/30 border border-border rounded-lg p-6 space-y-4">
                    <div className="flex flex-wrap gap-3">
                      <Buttons variant="default" className="min-w-[100px]">Default</Buttons>
                      <Buttons variant="outline" className="min-w-[100px]">Outline</Buttons>
                      <Buttons variant="gradient" className="min-w-[100px]">Gradient</Buttons>
                    </div>
                  </div>
                </div>

                {/* Status Variants */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-foreground flex items-center gap-2">
                    <span className="w-1 h-6 bg-green-500 rounded-full"></span>
                    Status Variants
                  </h3>
                  <div className="bg-muted/30 border border-border rounded-lg p-6 space-y-4">
                    <div className="flex flex-wrap gap-3">
                      <Buttons variant="success" icon={Plus} className="min-w-[100px]">
                        Success
                      </Buttons>
                      <Buttons variant="danger" icon={Heart} className="min-w-[100px]">
                        Danger
                      </Buttons>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <Buttons variant="warning" icon={Bell} className="min-w-[100px]">
                        Warning
                      </Buttons>
                      <Buttons variant="info" icon={Mail} className="min-w-[100px]">
                        Info
                      </Buttons>
                    </div>
                  </div>
                </div>

                {/* Effect Variants */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-foreground flex items-center gap-2">
                    <span className="w-1 h-6 bg-purple-500 rounded-full"></span>
                    Effect Variants
                  </h3>
                  <div className="bg-muted/30 border border-border rounded-lg p-6 space-y-4">
                    <div className="flex flex-wrap gap-3">
                      <Buttons variant="glass" className="min-w-[120px]">Glass Effect</Buttons>
                      <Buttons variant="shadow" className="min-w-[120px]">Shadow</Buttons>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <Buttons variant="neon" className="min-w-[120px]">Neon</Buttons>
                      <Buttons variant="frosted" className="min-w-[120px]">Frosted</Buttons>
                    </div>
                  </div>
                </div>

                {/* Animation Variants */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-foreground flex items-center gap-2">
                    <span className="w-1 h-6 bg-pink-500 rounded-full"></span>
                    Animation Effects
                  </h3>
                  <div className="bg-muted/30 border border-border rounded-lg p-6 space-y-4">
                    <div className="flex flex-wrap gap-3">
                      <Buttons variant="ripple" icon={ArrowRight} className="min-w-[100px]">
                        Ripple
                      </Buttons>
                      <Buttons variant="bounce" icon={Download} className="min-w-[100px]">
                        Bounce
                      </Buttons>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <Buttons variant="pulse" icon={Star} className="min-w-[100px]">
                        Pulse
                      </Buttons>
                      <Buttons variant="shake" icon={Bell} className="min-w-[100px]">
                        Shake
                      </Buttons>
                    </div>
                  </div>
                </div>

                {/* Special Effects */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-foreground flex items-center gap-2">
                    <span className="w-1 h-6 bg-cyan-500 rounded-full"></span>
                    Special Effects
                  </h3>
                  <div className="bg-muted/30 border border-border rounded-lg p-6 space-y-4">
                    <div className="flex flex-wrap gap-3">
                      <Buttons variant="elevated" icon={Star} className="min-w-[120px]">
                        Elevated
                      </Buttons>
                      <Buttons variant="pill" icon={Heart} className="min-w-[120px]">
                        Pill Shape
                      </Buttons>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <Buttons variant="scale" icon={Plus} className="min-w-[120px]">
                        Scale Effect
                      </Buttons>
                      <Buttons variant="text" className="min-w-[120px]">
                        Text Button
                      </Buttons>
                    </div>
                  </div>
                </div>

                {/* Interactive States */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-foreground flex items-center gap-2">
                    <span className="w-1 h-6 bg-orange-500 rounded-full"></span>
                    Interactive States
                  </h3>
                  <div className="bg-muted/30 border border-border rounded-lg p-6 space-y-4">
                    <div className="flex flex-wrap gap-3">
                      <Buttons isLoading className="min-w-[100px]">Loading</Buttons>
                      <Buttons disabled className="min-w-[100px]">Disabled</Buttons>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <Buttons variant="toggle" className="min-w-[100px]">Toggle</Buttons>
                      <Buttons variant="emoji" className="min-w-[100px]">🚀 Emoji</Buttons>
                    </div>
                  </div>
                </div>

                {/* Size Variants */}
                <div className="space-y-4 lg:col-span-3">
                  <h3 className="text-lg font-medium text-foreground flex items-center gap-2">
                    <span className="w-1 h-6 bg-indigo-500 rounded-full"></span>
                    Size Variants
                  </h3>
                  <div className="bg-muted/30 border border-border rounded-lg p-6">
                    <div className="flex flex-wrap gap-3 items-center justify-center">
                      <Buttons size="xs" className="min-w-[100px]">Extra Small</Buttons>
                      <Buttons size="sm" className="min-w-[100px]">Small</Buttons>
                      <Buttons size="md" className="min-w-[100px]">Medium</Buttons>
                      <Buttons size="lg" className="min-w-[100px]">Large</Buttons>
                      <Buttons size="xl" className="min-w-[100px]">Extra Large</Buttons>
                      <Buttons size="icon" icon={Settings} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Code Examples */}
          <div className="space-y-8">
            {/* Button Sizes Example */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-foreground flex items-center gap-2">
                <span className="w-1 h-6 bg-primary rounded-full"></span>
                Different Button Sizes
              </h3>

              <div className="bg-muted/30 border border-border rounded-lg p-6 flex items-center justify-center">
                <div className="flex gap-3 items-center">
                  <Button size="sm">Small</Button>
                  <Button size="default">Default</Button>
                  <Button size="lg">Large</Button>
                  <Button size="icon">
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="bg-card border border-border rounded-lg p-4 overflow-x-auto">
                  <pre className="text-xs sm:text-sm font-mono text-foreground">
                    <code className="whitespace-pre-wrap">
                      {codeExamples[2].code}
                    </code>
                  </pre>
                </div>
                <Button
                  size="sm"
                  variant="ghost"
                  className="absolute top-2 right-2 h-8 w-8 p-0 hover:bg-muted"
                  onClick={() => handleCopy(codeExamples[2].code)}
                >
                  <Copy className="h-4 w-4 text-muted-foreground" />
                </Button>
              </div>
            </div>

            {/* Button with Icons Example */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-foreground flex items-center gap-2">
                <span className="w-1 h-6 bg-primary rounded-full"></span>
                Buttons with Icons
              </h3>

              <div className="bg-muted/30 border border-border rounded-lg p-6 flex items-center justify-center">
                <div className="flex flex-wrap gap-3 items-center">
                  <Button>
                    <Mail className="mr-2 h-4 w-4" />
                    Email
                  </Button>
                  <Button variant="outline">
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </Button>
                  <Button variant="ghost">
                    Continue
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="bg-card border border-border rounded-lg p-4 overflow-x-auto">
                  <pre className="text-xs sm:text-sm font-mono text-foreground">
                    <code className="whitespace-pre-wrap">
                      {codeExamples[3].code}
                    </code>
                  </pre>
                </div>
                <Button
                  size="sm"
                  variant="ghost"
                  className="absolute top-2 right-2 h-8 w-8 p-0 hover:bg-muted"
                  onClick={() => handleCopy(codeExamples[3].code)}
                >
                  <Copy className="h-4 w-4 text-muted-foreground" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === "api" && (
        <div className="space-y-8 sm:space-y-12">
          {/* API Reference Section */}
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4 text-foreground">
              Button Props
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2 px-2 font-medium text-foreground">
                      Prop
                    </th>
                    <th className="text-left py-2 px-2 font-medium text-foreground">
                      Type
                    </th>
                    <th className="text-left py-2 px-2 font-medium text-foreground">
                      Default
                    </th>
                    <th className="text-left py-2 px-2 font-medium text-foreground">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border/50">
                    <td className="py-2 px-2">
                      <code className="bg-muted px-1 py-0.5 rounded text-xs">
                        variant
                      </code>
                    </td>
                    <td className="py-2 px-2">string</td>
                    <td className="py-2 px-2">"default"</td>
                    <td className="py-2 px-2">
                      Button style variant: default, destructive, outline,
                      secondary, ghost, link
                    </td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 px-2">
                      <code className="bg-muted px-1 py-0.5 rounded text-xs">
                        size
                      </code>
                    </td>
                    <td className="py-2 px-2">string</td>
                    <td className="py-2 px-2">"default"</td>
                    <td className="py-2 px-2">
                      Button size: default, sm, lg, icon
                    </td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 px-2">
                      <code className="bg-muted px-1 py-0.5 rounded text-xs">
                        disabled
                      </code>
                    </td>
                    <td className="py-2 px-2">boolean</td>
                    <td className="py-2 px-2">false</td>
                    <td className="py-2 px-2">
                      Whether the button is disabled
                    </td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 px-2">
                      <code className="bg-muted px-1 py-0.5 rounded text-xs">
                        asChild
                      </code>
                    </td>
                    <td className="py-2 px-2">boolean</td>
                    <td className="py-2 px-2">false</td>
                    <td className="py-2 px-2">
                      Change the default rendered element for the one passed as
                      a child
                    </td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 px-2">
                      <code className="bg-muted px-1 py-0.5 rounded text-xs">
                        className
                      </code>
                    </td>
                    <td className="py-2 px-2">string</td>
                    <td className="py-2 px-2">-</td>
                    <td className="py-2 px-2">
                      Additional CSS classes for custom styling
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-2">
                      <code className="bg-muted px-1 py-0.5 rounded text-xs">
                        children
                      </code>
                    </td>
                    <td className="py-2 px-2">ReactNode</td>
                    <td className="py-2 px-2">-</td>
                    <td className="py-2 px-2">The content of the button</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Variant Details */}
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4 text-foreground">
              Variant Options
            </h3>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Button variant="default">default</Button>
                  <span className="text-sm text-muted-foreground">
                    Primary button with solid background
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Button variant="destructive">destructive</Button>
                  <span className="text-sm text-muted-foreground">
                    Destructive actions (delete, remove)
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Button variant="outline">outline</Button>
                  <span className="text-sm text-muted-foreground">
                    Secondary button with border
                  </span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Button variant="secondary">secondary</Button>
                  <span className="text-sm text-muted-foreground">
                    Muted background alternative
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Button variant="ghost">ghost</Button>
                  <span className="text-sm text-muted-foreground">
                    Transparent background
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Button variant="link">link</Button>
                  <span className="text-sm text-muted-foreground">
                    Styled like a text link
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Size Guide */}
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4 text-foreground">
              Size Guide
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Button size="sm">Small (sm)</Button>
                <span className="text-sm text-muted-foreground">
                  Compact button for dense layouts
                </span>
              </div>
              <div className="flex items-center gap-4">
                <Button size="default">Default</Button>
                <span className="text-sm text-muted-foreground">
                  Standard button size for most cases
                </span>
              </div>
              <div className="flex items-center gap-4">
                <Button size="lg">Large (lg)</Button>
                <span className="text-sm text-muted-foreground">
                  Prominent button for emphasis
                </span>
              </div>
              <div className="flex items-center gap-4">
                <Button size="icon">
                  <Plus className="h-4 w-4" />
                </Button>
                <span className="text-sm text-muted-foreground">
                  Square button for icons only
                </span>
              </div>
            </div>
          </div>

          {/* Usage Guidelines */}
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4 text-foreground">
              Usage Guidelines
            </h3>
            <div className="space-y-4 text-sm text-muted-foreground">
              <div>
                <h4 className="font-medium text-foreground mb-2">
                  When to use buttons:
                </h4>
                <ul className="space-y-1 pl-4">
                  <li>• For primary actions like submit, save, or confirm</li>
                  <li>• To trigger navigation to another page or section</li>
                  <li>• For interactive elements that perform an action</li>
                  <li>• In forms for submission and cancellation</li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium text-foreground mb-2">
                  Best practices:
                </h4>
                <ul className="space-y-1 pl-4">
                  <li>• Use clear, action-oriented text labels</li>
                  <li>• Maintain consistent button hierarchy</li>
                  <li>• Provide adequate spacing between buttons</li>
                  <li>• Use appropriate variants for context</li>
                  <li>• Include loading states for async actions</li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium text-foreground mb-2">
                  Accessibility:
                </h4>
                <ul className="space-y-1 pl-4">
                  <li>• Ensure sufficient color contrast</li>
                  <li>• Use descriptive text for screen readers</li>
                  <li>• Provide keyboard navigation support</li>
                  <li>• Include focus indicators</li>
                  <li>• Use ARIA labels when needed</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ButtonComponent;
