"use client";
import React from "react";
import { Copy, CopyIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "framer-motion";
import { FancyTestimonialsSlider } from "@/components/fancy-testimonials-slider";

const FancyTestimonialsDocs = () => {
  const handleCopy = (text) => {
    if (text) {
      navigator.clipboard.writeText(text);
      toast("Copied to clipboard", { type: "success" });
    }
  };

  const testimonials = [
    {
      img: "/user.png",
      quote:
        "EldoraUI's components make building UIs effortless and enjoyable!",
      name: "Jessie J",
      role: "Acme LTD",
    },
    {
      img: "/user1.png",
      quote:
        "EldoraUI simplifies complex designs with ready-to-use components.",
      name: "Nick V",
      role: "Malika Inc.",
    },
    {
      img: "/user3.png",
      quote: "With EldoraUI, creating responsive UIs is a breeze.",
      name: "Amelia W",
      role: "Panda AI",
    },
  ];

  const codeExamples = [
    {
      code: `import { FancyTestimonialsSlider } from "@/components/ui/fancy-testimonials-slider";

export default function StandardTestimonials() {
  const testimonials = [
    {
      img: "/user.png",
      quote: "This product has completely transformed my workflow!",
      name: "Jessie Wong",
      role: "Acme Inc.",
    },
    {
      img: "/user1.png",
      quote: "I can't imagine working without this tool anymore.",
      name: "Nick Peterson",
      role: "Starlight Co.",
    },
    {
      img: "/user3.png",
      quote: "The best investment we've made for our team this year.",
      name: "Amelia Parker",
      role: "Horizon Tech",
    },
  ];

  return (
    <FancyTestimonialsSlider
      testimonials={testimonials}
      colorVariant="purple"
      animationPreset="default"
      size="md"
    />
  );
}`,
      description: "Standard testimonials with purple theme",
      preview: (
        <FancyTestimonialsSlider
          testimonials={testimonials}
          colorVariant="purple"
          animationPreset="default"
          size="md"
        />
      ),
    },
    {
      code: `import { FancyTestimonialsSlider } from "@/components/ui/fancy-testimonials-slider";

export default function CustomColorTestimonials() {
  const testimonials = [
    {
      img: "/user.png",
      quote: "This solution exceeded all our expectations!",
      name: "Sam Rivera",
      role: "Quantum Labs",
    },
    {
      img: "/user1.png",
      quote: "Incredibly intuitive and powerful. Highly recommended.",
      name: "Taylor Kim",
      role: "Nexus Group",
    },
    {
      img: "/user3.png",
      quote: "The support team has been phenomenal throughout our journey.",
      name: "Jordan Lee",
      role: "Elevate Digital",
    },
  ];

  return (
    <FancyTestimonialsSlider
      testimonials={testimonials}
      colorVariant="#3B82F6" // Custom blue hex color
      animationPreset="zoom"
      size="lg"
      autorotateTiming={5000}
    />
  );
}`,
      description: "Custom color testimonials with zoom animation",
      preview: (
        <FancyTestimonialsSlider
          testimonials={testimonials}
          colorVariant="#3B82F6"
          animationPreset="zoom"
          size="lg"
        />
      ),
    },
    {
      code: `import { FancyTestimonialsSlider } from "@/components/ui/fancy-testimonials-slider";
import { useState, useEffect } from "react";

export default function InteractiveTestimonials() {
  const testimonials = [
    {
      img: "/user.png",
      quote: "Game-changing features that transformed our workflow!",
      name: "Alex Morgan",
      role: "Fusion Media",
    },
    {
      img: "/user1.png",
      quote: "Beautifully designed and incredibly functional.",
      name: "Casey Johnson",
      role: "Pinnacle Systems",
    },
    {
      img: "/user3.png",
      quote: "The best solution we've implemented in years.",
      name: "Riley Thompson",
      role: "Vertex Solutions",
    },
  ];

  return (
    <FancyTestimonialsSlider
      testimonials={testimonials}
      colorVariant="green"
      animationPreset="slide"
      size="md"
      autorotate={false}
    />
  );
}`,
      description: "Interactive testimonials with slide animation",
      preview: (
        <FancyTestimonialsSlider
          testimonials={testimonials}
          colorVariant="green"
          animationPreset="slide"
          size="md"
          autorotate={false}
        />
      ),
    },
  ];

  return (
    <div className="px-4 md:px-6 lg:px-8 max-w-full overflow-hidden">
      {/* Header */}
      <h1 className="text-3xl md:text-4xl font-semibold mb-3 md:mb-4">
        Fancy Testimonials Slider
      </h1>
      <p className="text-sm md:text-base text-muted-foreground dark:text-white mb-6 md:mb-8">
        A polished, animated testimonial carousel with customizable themes and
        transitions.
      </p>

      {/* Content Sections */}
      <div className="space-y-8 md:space-y-12">
        {/* Installation Section */}
        <section>
          <h2 className="text-lg md:text-xl font-medium flex items-center gap-2 mb-3 md:mb-4">
            <span className="text-muted-foreground dark:text-white">1</span>
            Installation
          </h2>
          <div className="relative mb-4">
            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-3 md:p-4 font-mono text-xs md:text-sm text-gray-800 dark:text-white overflow-x-auto">
              <span>npm i elementra-ui</span>
            </div>
            <Button
              size="sm"
              variant="ghost"
              className="absolute top-2 right-2 md:top-3 md:right-3 h-6 w-6 p-0 text-muted-foreground dark:text-white"
              onClick={() => handleCopy("npm i elementra-ui")}
            >
              <CopyIcon className="h-4 w-4" />
            </Button>
          </div>
        </section>

        <section>
          <h2 className="text-lg md:text-xl font-medium flex items-center gap-2 mb-3 md:mb-4">
            <span className="text-muted-foreground dark:text-white">2</span>
            Add Components Using CLI
          </h2>

          <div className="relative mb-4">
            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-3 md:p-4 font-mono text-xs md:text-sm text-gray-800 dark:text-white overflow-x-auto">
              <span>npx elementra-ui add</span>
            </div>
            <Button
              size="sm"
              variant="ghost"
              className="absolute top-2 right-2 md:top-3 md:right-3 h-6 w-6 p-0 text-muted-foreground dark:text-white"
              onClick={() => handleCopy("npx elementra-ui add")}
            >
              <Copy className="h-4 w-4" />
            </Button>
          </div>
          <p className="my-3 text-gray-600 dark:text-white text-xs md:text-sm">
            Select components using the up/down arrow keys. Press spacebar to
            select multiple components, then press enter to add them to your{" "}
            <span className="text-purple-600">src</span> folder.
          </p>
        </section>
        {/* ************************** */}
        <div className="w-full p-2 md:p-4">
          <Tabs defaultValue="preview" className="w-full">
            <div className="flex items-center justify-between mb-3 md:mb-4">
              <TabsList className="grid w-[180px] md:w-[200px] grid-cols-2">
                <TabsTrigger
                  value="preview"
                  className="font-medium text-sm"
                  key="preview-tab"
                >
                  Preview
                </TabsTrigger>
                <TabsTrigger
                  value="code"
                  className="font-medium text-sm"
                  key="code-tab"
                >
                  Code
                </TabsTrigger>
              </TabsList>
            </div>

            <AnimatePresence>
              <TabsContent value="preview" className="mt-0">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="rounded-lg md:border bg-white p-4 md:p-8 min-h-[300px] md:min-h-[400px] flex items-center justify-center"
                >
                  <FancyTestimonialsSlider
                    testimonials={testimonials}
                    colorVariant="amber"
                    animationPreset="default"
                    size="md"
                  />
                </motion.div>
              </TabsContent>

              <TabsContent value="code" className="mt-0">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="rounded-lg bg-zinc-950 dark:bg-zinc-100 p-3 md:p-4"
                >
                  <pre className="text-[0.65rem] md:text-[0.9rem] text-zinc-100 dark:text-zinc-900 font-mono overflow-x-auto">
                    <code className="whitespace-pre-wrap">
                      {codeExamples[0].code}
                    </code>
                  </pre>
                </motion.div>
              </TabsContent>
            </AnimatePresence>
          </Tabs>
        </div>
        {/* ************************** */}
        {/* Usage Section */}
        {codeExamples.map((example, index) => (
          <section key={index}>
            <h2 className="text-lg md:text-xl font-medium flex items-center gap-2 mb-3 md:mb-4">
              <span className="text-muted-foreground dark:text-white">
                {index + 3}:
              </span>
              <span className="text-sm md:text-base">
                {example.description}
              </span>
            </h2>

            <p className="mb-4 md:mb-6 text-gray-700 dark:text-white text-xs md:text-sm">
              Import and use the FancyTestimonialsSlider component in your
              project.
            </p>

            <Tabs defaultValue="preview" className="w-full">
              <TabsList className="w-full md:w-auto flex space-x-1">
                <TabsTrigger value="preview" className="flex-1 text-sm">
                  Preview
                </TabsTrigger>
                <TabsTrigger value="code" className="flex-1 text-sm">
                  Code
                </TabsTrigger>
              </TabsList>

              <TabsContent value="preview" className="mt-3 md:mt-4">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="rounded-lg md:border bg-white p-4 md:p-8 min-h-[300px] md:min-h-[400px] flex items-center justify-center"
                >
                  {example.preview}
                </motion.div>
              </TabsContent>

              <TabsContent value="code" className="mt-3 md:mt-4">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="rounded-lg bg-zinc-950 dark:bg-zinc-100 p-3 md:p-4"
                >
                  <pre className="text-[0.65rem] md:text-[0.9rem] text-zinc-100 dark:text-zinc-900 font-mono overflow-x-auto">
                    <code className="whitespace-pre-wrap">{example.code}</code>
                  </pre>
                </motion.div>
              </TabsContent>
            </Tabs>
          </section>
        ))}

        {/* Props Section */}
        <section>
          <h2 className="text-lg md:text-xl font-medium flex items-center gap-2 mb-3 md:mb-4">
            <span className="text-muted-foreground dark:text-white">6:</span>
            Props Reference
          </h2>

          <div className="overflow-x-auto -mx-4 px-4">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-800">
                <tr>
                  <th className="px-2 md:px-6 py-2 md:py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Prop
                  </th>
                  <th className="px-2 md:px-6 py-2 md:py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Type
                  </th>
                  <th className="px-2 md:px-6 py-2 md:py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Default
                  </th>
                  <th className="px-2 md:px-6 py-2 md:py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-800">
                <tr>
                  <td className="px-2 md:px-6 py-2 md:py-4 whitespace-nowrap text-xs md:text-sm font-medium text-gray-900 dark:text-white">
                    testimonials
                  </td>
                  <td className="px-2 md:px-6 py-2 md:py-4 whitespace-nowrap text-xs md:text-sm text-gray-500 dark:text-gray-300">
                    array
                  </td>
                  <td className="px-2 md:px-6 py-2 md:py-4 whitespace-nowrap text-xs md:text-sm text-gray-500 dark:text-gray-300">
                    required
                  </td>
                  <td className="px-2 md:px-6 py-2 md:py-4 text-xs md:text-sm text-gray-500 dark:text-gray-300">
                    Array of testimonial objects with img, quote, name, and role
                    properties
                  </td>
                </tr>
                <tr>
                  <td className="px-2 md:px-6 py-2 md:py-4 whitespace-nowrap text-xs md:text-sm font-medium text-gray-900 dark:text-white">
                    colorVariant
                  </td>
                  <td className="px-2 md:px-6 py-2 md:py-4 whitespace-nowrap text-xs md:text-sm text-gray-500 dark:text-gray-300">
                    string
                  </td>
                  <td className="px-2 md:px-6 py-2 md:py-4 whitespace-nowrap text-xs md:text-sm text-gray-500 dark:text-gray-300">
                    'purple'
                  </td>
                  <td className="px-2 md:px-6 py-2 md:py-4 text-xs md:text-sm text-gray-500 dark:text-gray-300">
                    Color theme: 'purple', 'blue', 'green', 'amber', 'red',
                    'gray', 'black', or custom hex color
                  </td>
                </tr>
                <tr>
                  <td className="px-2 md:px-6 py-2 md:py-4 whitespace-nowrap text-xs md:text-sm font-medium text-gray-900 dark:text-white">
                    animationPreset
                  </td>
                  <td className="px-2 md:px-6 py-2 md:py-4 whitespace-nowrap text-xs md:text-sm text-gray-500 dark:text-gray-300">
                    string
                  </td>
                  <td className="px-2 md:px-6 py-2 md:py-4 whitespace-nowrap text-xs md:text-sm text-gray-500 dark:text-gray-300">
                    'default'
                  </td>
                  <td className="px-2 md:px-6 py-2 md:py-4 text-xs md:text-sm text-gray-500 dark:text-gray-300">
                    Animation style: 'default', 'fade', 'slide', 'zoom'
                  </td>
                </tr>
                <tr>
                  <td className="px-2 md:px-6 py-2 md:py-4 whitespace-nowrap text-xs md:text-sm font-medium text-gray-900 dark:text-white">
                    size
                  </td>
                  <td className="px-2 md:px-6 py-2 md:py-4 whitespace-nowrap text-xs md:text-sm text-gray-500 dark:text-gray-300">
                    string
                  </td>
                  <td className="px-2 md:px-6 py-2 md:py-4 whitespace-nowrap text-xs md:text-sm text-gray-500 dark:text-gray-300">
                    'md'
                  </td>
                  <td className="px-2 md:px-6 py-2 md:py-4 text-xs md:text-sm text-gray-500 dark:text-gray-300">
                    Size of the slider: 'sm', 'md', 'lg'
                  </td>
                </tr>
                <tr>
                  <td className="px-2 md:px-6 py-2 md:py-4 whitespace-nowrap text-xs md:text-sm font-medium text-gray-900 dark:text-white">
                    autorotate
                  </td>
                  <td className="px-2 md:px-6 py-2 md:py-4 whitespace-nowrap text-xs md:text-sm text-gray-500 dark:text-gray-300">
                    boolean
                  </td>
                  <td className="px-2 md:px-6 py-2 md:py-4 whitespace-nowrap text-xs md:text-sm text-gray-500 dark:text-gray-300">
                    true
                  </td>
                  <td className="px-2 md:px-6 py-2 md:py-4 text-xs md:text-sm text-gray-500 dark:text-gray-300">
                    Whether testimonials should automatically rotate
                  </td>
                </tr>
                <tr>
                  <td className="px-2 md:px-6 py-2 md:py-4 whitespace-nowrap text-xs md:text-sm font-medium text-gray-900 dark:text-white">
                    autorotateTiming
                  </td>
                  <td className="px-2 md:px-6 py-2 md:py-4 whitespace-nowrap text-xs md:text-sm text-gray-500 dark:text-gray-300">
                    number
                  </td>
                  <td className="px-2 md:px-6 py-2 md:py-4 whitespace-nowrap text-xs md:text-sm text-gray-500 dark:text-gray-300">
                    7000
                  </td>
                  <td className="px-2 md:px-6 py-2 md:py-4 text-xs md:text-sm text-gray-500 dark:text-gray-300">
                    Time in milliseconds between testimonial transitions
                  </td>
                </tr>
                <tr>
                  <td className="px-2 md:px-6 py-2 md:py-4 whitespace-nowrap text-xs md:text-sm font-medium text-gray-900 dark:text-white">
                    className
                  </td>
                  <td className="px-2 md:px-6 py-2 md:py-4 whitespace-nowrap text-xs md:text-sm text-gray-500 dark:text-gray-300">
                    string
                  </td>
                  <td className="px-2 md:px-6 py-2 md:py-4 whitespace-nowrap text-xs md:text-sm text-gray-500 dark:text-gray-300">
                    undefined
                  </td>
                  <td className="px-2 md:px-6 py-2 md:py-4 text-xs md:text-sm text-gray-500 dark:text-gray-300">
                    Additional CSS classes to apply to the component
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Testimonial Item Structure */}
        <section>
          <h2 className="text-lg md:text-xl font-medium flex items-center gap-2 mb-3 md:mb-4">
            <span className="text-muted-foreground dark:text-white">7:</span>
            Testimonial Item Structure
          </h2>

          <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-3 md:p-4 font-mono text-xs md:text-sm text-gray-800 dark:text-white overflow-x-auto">
            <pre className="text-xs md:text-sm">
              {`{
  img: string,    // URL to the testimonial author's image
  quote: string,  // The testimonial text content
  name: string,   // Name of the testimonial author
  role: string    // Role or company of the author
}`}
            </pre>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FancyTestimonialsDocs;
