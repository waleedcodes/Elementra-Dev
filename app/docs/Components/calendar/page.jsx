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
      name: "Default (Gradient)",
      variant: "default",
      description:
        "Modern gradient design with smooth animations and eye-catching visuals. Perfect for premium applications.",
      code: `<Calendar 
  value={date} 
  onValueChange={setDate}
  variant="default"
  mode="single"
/>`,
      state: defaultDate,
      setState: setDefaultDate,
      color: "from-purple-500 to-indigo-500",
    },
    {
      name: "Minimal",
      variant: "minimal",
      description:
        "Clean and simple design with a focus on functionality. Great for professional dashboards.",
      code: `<Calendar 
  value={date} 
  onValueChange={setDate}
  variant="minimal"
  mode="single"
/>`,
      state: minimalDate,
      setState: setMinimalDate,
      color: "from-gray-500 to-gray-700",
    },
    {
      name: "Card",
      variant: "card",
      description:
        "Large card-based layout with prominent dates. Ideal for booking and reservation systems.",
      code: `<Calendar 
  value={date} 
  onValueChange={setDate}
  variant="card"
  mode="single"
/>`,
      state: cardDate,
      setState: setCardDate,
      color: "from-blue-500 to-indigo-500",
    },
    {
      name: "Inline",
      variant: "inline",
      description:
        "Compact horizontal layout that fits in tight spaces. Perfect for navigation bars and toolbars.",
      code: `<Calendar 
  value={date} 
  onValueChange={setDate}
  variant="inline"
  mode="single"
/>`,
      state: inlineDate,
      setState: setInlineDate,
      color: "from-teal-500 to-cyan-500",
    },
    {
      name: "Sidebar",
      variant: "sidebar",
      description:
        "Vertical gradient design optimized for sidebars. Beautiful for date-based navigation.",
      code: `<Calendar 
  value={date} 
  onValueChange={setDate}
  variant="sidebar"
  mode="single"
/>`,
      state: sidebarDate,
      setState: setSidebarDate,
      color: "from-indigo-500 to-purple-500",
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      {/* Header */}
      <div className="border-b border-slate-200 bg-white/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <div className="space-y-4">
            <div className="inline-block px-4 py-1.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full">
              <span className="text-white text-sm font-semibold">
                5 Unique Layouts
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              Calendar Variants
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl">
              Choose from 5 stunning calendar layouts, each designed for
              specific use cases. From minimal to bold, find the perfect style
              for your application.
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-white border border-slate-200 p-1 rounded-xl shadow-sm">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.id}
                value={tab.id}
                className="text-sm font-semibold data-[state=active]:bg-gradient-to-r data-[state=active]:from-indigo-500 data-[state=active]:to-purple-500 data-[state=active]:text-white rounded-lg transition-all duration-200"
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
                      <h2 className="text-3xl font-bold text-slate-900">
                        Choose Your Style
                      </h2>
                      <p className="text-slate-600">
                        Each variant is designed for different use cases and
                        aesthetics
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
                            className={`h-12 w-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white font-bold text-xl shadow-lg`}
                          >
                            {index + 1}
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-slate-900">
                              {item.name}
                            </h3>
                            <p className="text-slate-600">{item.description}</p>
                          </div>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-8 items-start">
                          {/* Preview */}
                          <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 border-2 border-slate-200 shadow-xl">
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
                            <div className="bg-slate-900 rounded-xl overflow-hidden shadow-xl">
                              <div className="bg-slate-800 px-6 py-3 border-b border-slate-700 flex items-center justify-between">
                                <span className="text-sm font-semibold text-slate-300">
                                  Usage
                                </span>
                                <Button
                                  size="sm"
                                  variant="ghost"
                                  className="h-8 w-8 p-0 hover:bg-slate-700 rounded-lg text-slate-400 hover:text-white transition-colors"
                                  onClick={() => handleCopy(item.code)}
                                >
                                  <Copy className="h-3.5 w-3.5" />
                                </Button>
                              </div>
                              <div className="p-6">
                                <pre className="text-sm text-slate-100 overflow-x-auto">
                                  <code>{item.code}</code>
                                </pre>
                              </div>
                            </div>

                            <div className="bg-white border-2 border-slate-200 rounded-xl p-6">
                              <h4 className="font-bold text-slate-900 mb-3">
                                Best For:
                              </h4>
                              <ul className="space-y-2 text-sm text-slate-600">
                                {item.variant === "default" && (
                                  <>
                                    <li className="flex items-start gap-2">
                                      <span className="text-purple-500">•</span>
                                      <span>
                                        Premium applications and SaaS products
                                      </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                      <span className="text-purple-500">•</span>
                                      <span>
                                        Marketing websites and landing pages
                                      </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                      <span className="text-purple-500">•</span>
                                      <span>
                                        Any interface where aesthetics matter
                                      </span>
                                    </li>
                                  </>
                                )}
                                {item.variant === "minimal" && (
                                  <>
                                    <li className="flex items-start gap-2">
                                      <span className="text-gray-500">•</span>
                                      <span>
                                        Enterprise dashboards and admin panels
                                      </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                      <span className="text-gray-500">•</span>
                                      <span>Data-heavy interfaces</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                      <span className="text-gray-500">•</span>
                                      <span>
                                        Professional productivity tools
                                      </span>
                                    </li>
                                  </>
                                )}
                                {item.variant === "card" && (
                                  <>
                                    <li className="flex items-start gap-2">
                                      <span className="text-blue-500">•</span>
                                      <span>
                                        Booking and reservation systems
                                      </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                      <span className="text-blue-500">•</span>
                                      <span>Event scheduling applications</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                      <span className="text-blue-500">•</span>
                                      <span>
                                        Hotel and travel booking platforms
                                      </span>
                                    </li>
                                  </>
                                )}
                                {item.variant === "inline" && (
                                  <>
                                    <li className="flex items-start gap-2">
                                      <span className="text-teal-500">•</span>
                                      <span>Navigation bars and headers</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                      <span className="text-teal-500">•</span>
                                      <span>
                                        Mobile applications with limited space
                                      </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                      <span className="text-teal-500">•</span>
                                      <span>Inline form date pickers</span>
                                    </li>
                                  </>
                                )}
                                {item.variant === "sidebar" && (
                                  <>
                                    <li className="flex items-start gap-2">
                                      <span className="text-indigo-500">•</span>
                                      <span>
                                        Application sidebars and navigation
                                      </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                      <span className="text-indigo-500">•</span>
                                      <span>
                                        Date-based filtering interfaces
                                      </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                      <span className="text-indigo-500">•</span>
                                      <span>
                                        Vertical space-optimized layouts
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
                      <h2 className="text-3xl font-bold text-slate-900">
                        Real-World Examples
                      </h2>
                      <p className="text-slate-600">
                        See how different variants work in common scenarios
                      </p>
                    </div>

                    {useCases.map((useCase, index) => (
                      <div key={index} className="space-y-6">
                        <div>
                          <h3 className="text-2xl font-bold text-slate-900 mb-2">
                            {useCase.title}
                          </h3>
                          <p className="text-slate-600">
                            {useCase.description}
                          </p>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-8">
                          <div className="bg-white border-2 border-slate-200 rounded-xl p-8 shadow-lg">
                            <div className="flex justify-center">
                              <Calendar
                                value={useCase.state}
                                onValueChange={useCase.setState}
                                variant={useCase.variant}
                                mode={useCase.mode}
                              />
                            </div>
                          </div>

                          <div className="bg-slate-900 rounded-xl overflow-hidden shadow-xl">
                            <div className="bg-slate-800 px-6 py-3 border-b border-slate-700 flex items-center justify-between">
                              <span className="text-sm font-semibold text-slate-300">
                                Code
                              </span>
                              <Button
                                size="sm"
                                variant="ghost"
                                className="h-8 w-8 p-0 hover:bg-slate-700 rounded-lg text-slate-400 hover:text-white"
                                onClick={() => handleCopy(useCase.code)}
                              >
                                <Copy className="h-3.5 w-3.5" />
                              </Button>
                            </div>
                            <div className="p-6">
                              <pre className="text-sm text-slate-100 overflow-x-auto">
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
                      <h2 className="text-3xl font-bold text-slate-900">
                        API Reference
                      </h2>
                      <p className="text-slate-600">
                        Complete documentation of all props and variants
                      </p>
                    </div>

                    <div className="bg-white border-2 border-slate-200 rounded-xl overflow-hidden shadow-xl">
                      <div className="bg-gradient-to-r from-indigo-500 to-purple-500 px-6 py-4">
                        <h3 className="text-lg font-bold text-white">
                          Calendar Props
                        </h3>
                      </div>
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead className="bg-slate-50">
                            <tr>
                              <th className="text-left py-4 px-6 font-bold text-slate-900">
                                Prop
                              </th>
                              <th className="text-left py-4 px-6 font-bold text-slate-900">
                                Type
                              </th>
                              <th className="text-left py-4 px-6 font-bold text-slate-900">
                                Default
                              </th>
                              <th className="text-left py-4 px-6 font-bold text-slate-900">
                                Description
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-t border-slate-200">
                              <td className="py-4 px-6 font-mono text-sm font-semibold text-indigo-600">
                                value
                              </td>
                              <td className="py-4 px-6 text-sm text-slate-700">
                                Date | Date[]
                              </td>
                              <td className="py-4 px-6 text-sm text-slate-500">
                                null
                              </td>
                              <td className="py-4 px-6 text-sm text-slate-600">
                                Selected date(s)
                              </td>
                            </tr>
                            <tr className="border-t border-slate-200">
                              <td className="py-4 px-6 font-mono text-sm font-semibold text-indigo-600">
                                onValueChange
                              </td>
                              <td className="py-4 px-6 text-sm text-slate-700">
                                (value) =&gt; void
                              </td>
                              <td className="py-4 px-6 text-sm text-slate-500">
                                -
                              </td>
                              <td className="py-4 px-6 text-sm text-slate-600">
                                Callback when selection changes
                              </td>
                            </tr>
                            <tr className="border-t border-slate-200">
                              <td className="py-4 px-6 font-mono text-sm font-semibold text-indigo-600">
                                variant
                              </td>
                              <td className="py-4 px-6 text-sm text-slate-700">
                                "default" | "minimal" | "card" | "inline" |
                                "sidebar"
                              </td>
                              <td className="py-4 px-6 text-sm text-slate-500">
                                "default"
                              </td>
                              <td className="py-4 px-6 text-sm text-slate-600">
                                Visual style variant
                              </td>
                            </tr>
                            <tr className="border-t border-slate-200">
                              <td className="py-4 px-6 font-mono text-sm font-semibold text-indigo-600">
                                mode
                              </td>
                              <td className="py-4 px-6 text-sm text-slate-700">
                                "single" | "multiple" | "range"
                              </td>
                              <td className="py-4 px-6 text-sm text-slate-500">
                                "single"
                              </td>
                              <td className="py-4 px-6 text-sm text-slate-600">
                                Selection mode
                              </td>
                            </tr>
                            <tr className="border-t border-slate-200">
                              <td className="py-4 px-6 font-mono text-sm font-semibold text-indigo-600">
                                disabled
                              </td>
                              <td className="py-4 px-6 text-sm text-slate-700">
                                (date) =&gt; boolean
                              </td>
                              <td className="py-4 px-6 text-sm text-slate-500">
                                -
                              </td>
                              <td className="py-4 px-6 text-sm text-slate-600">
                                Function to disable dates
                              </td>
                            </tr>
                            <tr className="border-t border-slate-200">
                              <td className="py-4 px-6 font-mono text-sm font-semibold text-indigo-600">
                                className
                              </td>
                              <td className="py-4 px-6 text-sm text-slate-700">
                                string
                              </td>
                              <td className="py-4 px-6 text-sm text-slate-500">
                                -
                              </td>
                              <td className="py-4 px-6 text-sm text-slate-600">
                                Additional CSS classes
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl p-6 text-white shadow-xl">
                        <h4 className="font-bold text-lg mb-4">
                          🎨 5 Variants
                        </h4>
                        <ul className="space-y-2 text-sm">
                          <li>• Default (Gradient)</li>
                          <li>• Minimal (Clean)</li>
                          <li>• Card (Bold)</li>
                          <li>• Inline (Compact)</li>
                          <li>• Sidebar (Vertical)</li>
                        </ul>
                      </div>

                      <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl p-6 text-white shadow-xl">
                        <h4 className="font-bold text-lg mb-4">⚡ Features</h4>
                        <ul className="space-y-2 text-sm">
                          <li>• Smooth animations</li>
                          <li>• Range selection</li>
                          <li>• Multiple dates</li>
                          <li>• Disabled dates</li>
                          <li>• Responsive design</li>
                        </ul>
                      </div>

                      <div className="bg-gradient-to-br from-orange-500 to-pink-500 rounded-xl p-6 text-white shadow-xl">
                        <h4 className="font-bold text-lg mb-4">✨ Design</h4>
                        <ul className="space-y-2 text-sm">
                          <li>• Modern gradients</li>
                          <li>• Hover effects</li>
                          <li>• Focus states</li>
                          <li>• Today highlighting</li>
                          <li>• Accessible</li>
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
