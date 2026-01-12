"use client";
import React, { useState } from "react";

import Calendar from "@/components/DocsComp/Calendar";
import { Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "framer-motion";

const CalendarVariantsDemo = () => {
  const [activeTab, setActiveTab] = useState("variants");

  // State for each variant
  const [defaultDate, setDefaultDate] = useState(null);
  const [minimalDate, setMinimalDate] = useState(null);
  const [cardDate, setCardDate] = useState(null);
  const [inlineDate, setInlineDate] = useState(null);
  const [sidebarDate, setSidebarDate] = useState(null);

  // Range states
  const [defaultRange, setDefaultRange] = useState([]);
  const [minimalRange, setMinimalRange] = useState([]);

  const tabs = [
    { id: "variants", label: "Variants" },
    { id: "examples", label: "Examples" },
    { id: "api", label: "API" },
  ];

  const handleCopy = (text) => {
    if (text) {
      navigator.clipboard.writeText(text);
      console.log("Copied to clipboard");
    }
  };

  const variants = [
    {
      name: "Default (Primary Theme)",
      variant: "default",
      description:
        "Clean professional design using project's primary orange colors with proper theme support. Perfect for business applications.",
      code: `<Calendar 
  value={date} 
  onValueChange={setDate}
  variant="default"
  mode="single"
/>`,
      state: defaultDate,
      setState: setDefaultDate,
      color: "bg-primary",
    },
    {
      name: "Minimal (Theme Neutral)",
      variant: "minimal",
      description:
        "Ultra-clean design with theme-aware muted colors. Adapts to light/dark mode automatically.",
      code: `<Calendar 
  value={date} 
  onValueChange={setDate}
  variant="minimal"
  mode="single"
/>`,
      state: minimalDate,
      setState: setMinimalDate,
      color: "bg-muted-foreground",
    },
    {
      name: "Card (Accent Theme)",
      variant: "card",
      description:
        "Large professional card layout with accent pink colors. Perfect for booking systems with vibrant theming.",
      code: `<Calendar 
  value={date} 
  onValueChange={setDate}
  variant="card"
  mode="single"
/>`,
      state: cardDate,
      setState: setCardDate,
      color: "bg-accent",
    },
    {
      name: "Inline (Secondary Theme)",
      variant: "inline",
      description:
        "Professional compact horizontal layout with secondary rose colors. Great for forms and toolbars.",
      code: `<Calendar 
  value={date} 
  onValueChange={setDate}
  variant="inline"
  mode="single"
/>`,
      state: inlineDate,
      setState: setInlineDate,
      color: "bg-secondary",
    },
    {
      name: "Sidebar (Dark Theme)",
      variant: "sidebar",
      description:
        "Sophisticated sidebar-themed design using project's sidebar color variables. Perfect for navigation areas.",
      code: `<Calendar 
  value={date} 
  onValueChange={setDate}
  variant="sidebar"
  mode="single"
/>`,
      state: sidebarDate,
      setState: setSidebarDate,
      color: "bg-sidebar-primary",
    },
  ];

  const useCases = [
    {
      title: "Date Range Picker",
      description:
        "Select a range of dates for booking systems, analytics dashboards, or report generation.",
      variant: "default",
      mode: "range",
      state: defaultRange,
      setState: setDefaultRange,
      code: `<Calendar 
  value={dateRange} 
  onValueChange={setDateRange}
  variant="default"
  mode="range"
/>`,
    },
    {
      title: "Simple Date Selector",
      description: "Clean minimal design for form fields and input components.",
      variant: "minimal",
      mode: "single",
      state: minimalRange,
      setState: setMinimalRange,
      code: `<Calendar 
  value={date} 
  onValueChange={setDate}
  variant="minimal"
  mode="single"
/>`,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <div className="space-y-4">
            <div className="inline-block px-4 py-1.5 bg-primary rounded-full">
              <span className="text-primary-foreground text-sm font-semibold">
                5 Theme-Aware Layouts
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
              Calendar Variants
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl">
              Choose from 5 calendar layouts that automatically adapt to your theme. 
              Built with Elementra UI's Solar Edge color system for perfect light/dark mode support.
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-card border border-border p-1 rounded-xl shadow-sm">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.id}
                value={tab.id}
                className="text-sm font-semibold data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg transition-all duration-200"
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="mt-8 sm:mt-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                {activeTab === "variants" && (
                  <div className="space-y-16">
                    <div className="text-center space-y-2">
                      <h2 className="text-3xl font-bold text-foreground">
                        Choose Your Theme Style
                      </h2>
                      <p className="text-muted-foreground">
                        Each variant uses Elementra UI's color system and automatically adapts to light/dark mode
                      </p>
                    </div>

                    {variants.map((item, index) => (
                      <motion.div
                        key={item.variant}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="space-y-6"
                      >
                        <div className="flex items-center gap-4">
                          <div
                            className={`h-12 w-12 rounded-xl ${item.color} flex items-center justify-center text-primary-foreground font-bold text-xl shadow-lg`}
                          >
                            {index + 1}
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-foreground">
                              {item.name}
                            </h3>
                            <p className="text-muted-foreground">{item.description}</p>
                          </div>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-8 items-start">
                          {/* Preview */}
                          <div className="bg-muted/20 rounded-2xl p-8 border-2 border-border shadow-xl">
                            <div className="flex justify-center">
                              <Calendar
                                value={item.state}
                                onValueChange={item.setState}
                                variant={item.variant}
                                mode="single"
                              />
                            </div>
                          </div>

                          {/* Code */}
                          <div className="space-y-4">
                            <div className="bg-sidebar rounded-xl overflow-hidden shadow-xl">
                              <div className="bg-sidebar-accent/20 px-6 py-3 border-b border-sidebar-border flex items-center justify-between">
                                <span className="text-sm font-semibold text-sidebar-foreground">
                                  Usage
                                </span>
                                <Button
                                  size="sm"
                                  variant="ghost"
                                  className="h-8 w-8 p-0 hover:bg-sidebar-accent/30 rounded-lg text-sidebar-foreground/60 hover:text-sidebar-foreground transition-colors"
                                  onClick={() => handleCopy(item.code)}
                                >
                                  <Copy className="h-3.5 w-3.5" />
                                </Button>
                              </div>
                              <div className="p-6">
                                <pre className="text-sm text-sidebar-foreground overflow-x-auto">
                                  <code>{item.code}</code>
                                </pre>
                              </div>
                            </div>

                            <div className="bg-card border-2 border-border rounded-xl p-6">
                              <h4 className="font-bold text-foreground mb-3">
                                Best For:
                              </h4>
                              <ul className="space-y-2 text-sm text-muted-foreground">
                                {item.variant === "default" && (
                                  <>
                                    <li className="flex items-start gap-2">
                                      <span className="text-primary">•</span>
                                      <span>
                                        Business applications with primary branding
                                      </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                      <span className="text-primary">•</span>
                                      <span>
                                        Main content areas and hero sections
                                      </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                      <span className="text-primary">•</span>
                                      <span>
                                        Corporate websites with orange branding
                                      </span>
                                    </li>
                                  </>
                                )}
                                {item.variant === "minimal" && (
                                  <>
                                    <li className="flex items-start gap-2">
                                      <span className="text-muted-foreground">•</span>
                                      <span>
                                        Clean enterprise dashboards
                                      </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                      <span className="text-muted-foreground">•</span>
                                      <span>Data management interfaces</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                      <span className="text-muted-foreground">•</span>
                                      <span>
                                        Productivity tools requiring focus
                                      </span>
                                    </li>
                                  </>
                                )}
                                {item.variant === "card" && (
                                  <>
                                    <li className="flex items-start gap-2">
                                      <span className="text-accent">•</span>
                                      <span>
                                        Booking systems with accent highlights
                                      </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                      <span className="text-accent">•</span>
                                      <span>Event planning with pink theming</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                      <span className="text-accent">•</span>
                                      <span>
                                        Creative applications and portfolios
                                      </span>
                                    </li>
                                  </>
                                )}
                                {item.variant === "inline" && (
                                  <>
                                    <li className="flex items-start gap-2">
                                      <span className="text-secondary">•</span>
                                      <span>Compact form date inputs</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                      <span className="text-secondary">•</span>
                                      <span>
                                        Toolbar components with secondary styling
                                      </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                      <span className="text-secondary">•</span>
                                      <span>Navigation bars with rose accents</span>
                                    </li>
                                  </>
                                )}
                                {item.variant === "sidebar" && (
                                  <>
                                    <li className="flex items-start gap-2">
                                      <span className="text-sidebar-primary">•</span>
                                      <span>
                                        Application sidebars and navigation
                                      </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                      <span className="text-sidebar-primary">•</span>
                                      <span>
                                        Dark theme interface components
                                      </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                      <span className="text-sidebar-primary">•</span>
                                      <span>
                                        Professional admin panels
                                      </span>
                                    </li>
                                  </>
                                )}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}

                {activeTab === "examples" && (
                  <div className="space-y-12">
                    <div className="text-center space-y-2">
                      <h2 className="text-3xl font-bold text-foreground">
                        Real-World Examples
                      </h2>
                      <p className="text-muted-foreground">
                        See how different variants work in common scenarios
                      </p>
                    </div>

                    {useCases.map((useCase, index) => (
                      <div key={index} className="space-y-6">
                        <div>
                          <h3 className="text-2xl font-bold text-foreground mb-2">
                            {useCase.title}
                          </h3>
                          <p className="text-muted-foreground">
                            {useCase.description}
                          </p>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-8">
                          <div className="bg-card border-2 border-border rounded-xl p-8 shadow-lg">
                            <div className="flex justify-center">
                              <Calendar
                                value={useCase.state}
                                onValueChange={useCase.setState}
                                variant={useCase.variant}
                                mode={useCase.mode}
                              />
                            </div>
                          </div>

                          <div className="bg-sidebar rounded-xl overflow-hidden shadow-xl">
                            <div className="bg-sidebar-accent/20 px-6 py-3 border-b border-sidebar-border flex items-center justify-between">
                              <span className="text-sm font-semibold text-sidebar-foreground">
                                Code
                              </span>
                              <Button
                                size="sm"
                                variant="ghost"
                                className="h-8 w-8 p-0 hover:bg-sidebar-accent/30 rounded-lg text-sidebar-foreground/60 hover:text-sidebar-foreground transition-colors"
                                onClick={() => handleCopy(useCase.code)}
                              >
                                <Copy className="h-3.5 w-3.5" />
                              </Button>
                            </div>
                            <div className="p-6">
                              <pre className="text-sm text-sidebar-foreground overflow-x-auto">
                                <code>{useCase.code}</code>
                              </pre>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === "api" && (
                  <div className="space-y-8">
                    <div className="text-center space-y-2">
                      <h2 className="text-3xl font-bold text-foreground">
                        API Reference
                      </h2>
                      <p className="text-muted-foreground">
                        Complete documentation of all props and variants
                      </p>
                    </div>

                    <div className="bg-card border-2 border-border rounded-xl overflow-hidden shadow-xl">
                      <div className="bg-primary px-6 py-4">
                        <h3 className="text-lg font-bold text-primary-foreground">
                          Calendar Props
                        </h3>
                      </div>
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead className="bg-muted/50">
                            <tr>
                              <th className="text-left py-4 px-6 font-bold text-foreground">
                                Prop
                              </th>
                              <th className="text-left py-4 px-6 font-bold text-foreground">
                                Type
                              </th>
                              <th className="text-left py-4 px-6 font-bold text-foreground">
                                Default
                              </th>
                              <th className="text-left py-4 px-6 font-bold text-foreground">
                                Description
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-t border-border">
                              <td className="py-4 px-6 font-mono text-sm font-semibold text-primary">
                                value
                              </td>
                              <td className="py-4 px-6 text-sm text-foreground">
                                Date | Date[]
                              </td>
                              <td className="py-4 px-6 text-sm text-muted-foreground">
                                null
                              </td>
                              <td className="py-4 px-6 text-sm text-muted-foreground">
                                Selected date(s)
                              </td>
                            </tr>
                            <tr className="border-t border-border">
                              <td className="py-4 px-6 font-mono text-sm font-semibold text-primary">
                                onValueChange
                              </td>
                              <td className="py-4 px-6 text-sm text-foreground">
                                (value) =&gt; void
                              </td>
                              <td className="py-4 px-6 text-sm text-muted-foreground">
                                -
                              </td>
                              <td className="py-4 px-6 text-sm text-muted-foreground">
                                Callback when selection changes
                              </td>
                            </tr>
                            <tr className="border-t border-border">
                              <td className="py-4 px-6 font-mono text-sm font-semibold text-primary">
                                variant
                              </td>
                              <td className="py-4 px-6 text-sm text-foreground">
                                "default" | "minimal" | "card" | "inline" |
                                "sidebar"
                              </td>
                              <td className="py-4 px-6 text-sm text-muted-foreground">
                                "default"
                              </td>
                              <td className="py-4 px-6 text-sm text-muted-foreground">
                                Visual style variant
                              </td>
                            </tr>
                            <tr className="border-t border-border">
                              <td className="py-4 px-6 font-mono text-sm font-semibold text-primary">
                                mode
                              </td>
                              <td className="py-4 px-6 text-sm text-foreground">
                                "single" | "multiple" | "range"
                              </td>
                              <td className="py-4 px-6 text-sm text-muted-foreground">
                                "single"
                              </td>
                              <td className="py-4 px-6 text-sm text-muted-foreground">
                                Selection mode
                              </td>
                            </tr>
                            <tr className="border-t border-border">
                              <td className="py-4 px-6 font-mono text-sm font-semibold text-primary">
                                disabled
                              </td>
                              <td className="py-4 px-6 text-sm text-foreground">
                                (date) =&gt; boolean
                              </td>
                              <td className="py-4 px-6 text-sm text-muted-foreground">
                                -
                              </td>
                              <td className="py-4 px-6 text-sm text-muted-foreground">
                                Function to disable dates
                              </td>
                            </tr>
                            <tr className="border-t border-border">
                              <td className="py-4 px-6 font-mono text-sm font-semibold text-primary">
                                className
                              </td>
                              <td className="py-4 px-6 text-sm text-foreground">
                                string
                              </td>
                              <td className="py-4 px-6 text-sm text-muted-foreground">
                                -
                              </td>
                              <td className="py-4 px-6 text-sm text-muted-foreground">
                                Additional CSS classes
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="bg-primary rounded-xl p-6 text-primary-foreground shadow-xl">
                        <h4 className="font-bold text-lg mb-4">
                          🎨 5 Professional Variants
                        </h4>
                        <ul className="space-y-2 text-sm">
                          <li>• Default (Primary Orange)</li>
                          <li>• Minimal (Theme Neutral)</li>
                          <li>• Card (Accent Pink)</li>
                          <li>• Inline (Secondary Rose)</li>
                          <li>• Sidebar (Dark Theme)</li>
                        </ul>
                      </div>

                      <div className="bg-secondary rounded-xl p-6 text-secondary-foreground shadow-xl">
                        <h4 className="font-bold text-lg mb-4">⚡ Business Features</h4>
                        <ul className="space-y-2 text-sm">
                          <li>• Professional styling</li>
                          <li>• Corporate color schemes</li>
                          <li>• Enterprise-ready design</li>
                          <li>• Clean animations</li>
                          <li>• Responsive layouts</li>
                        </ul>
                      </div>

                      <div className="bg-accent rounded-xl p-6 text-accent-foreground shadow-xl">
                        <h4 className="font-bold text-lg mb-4">✨ Professional Design</h4>
                        <ul className="space-y-2 text-sm">
                          <li>• Business-appropriate colors</li>
                          <li>• Subtle hover effects</li>
                          <li>• Professional focus states</li>
                          <li>• Clean typography</li>
                          <li>• Accessible interface</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default CalendarVariantsDemo;
