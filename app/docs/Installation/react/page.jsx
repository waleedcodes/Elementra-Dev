"use client";
import React, { useState } from "react";
import {
  Copy,
  Check,
  ChevronRight,
  Code,
  Package,
  Palette,
  Terminal,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";

const ReactDocsPage = () => {
  const [activeSection, setActiveSection] = useState("create");
  const [copied, setCopied] = useState({});

  const handleCopy = (text, id) => {
    if (text) {
      navigator.clipboard.writeText(text);
    }
    setCopied({ ...copied, [id]: true });
    toast("Copied to clipboard", {
      icon: <Check className="h-4 w-4 text-green-500" />,
      position: "bottom-right",
    });

    setTimeout(() => {
      setCopied({ ...copied, [id]: false });
    }, 2000);
  };

  const codeExample2 = `import { Button } from "./components/ui/button";"

export default function Buttons() {
  return (
    <div>
      <Button variant="default">Primary Button</Button>
      <Button variant="outline">Secondary Button</Button>
      <Button variant="ghost">Outline Button</Button>
    </div>
  )
}`;
  const codeExample3 = `import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})`;

  const tailwindConfig = `/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`;

  const globalCSS = `@import "tailwindcss";
 
@theme {
  --radius-lg: 0.75rem;
  --brand-500: 34 197 94;
}
 
@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 47.4% 11.2%;
    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 222.2 47.4% 11.2%;
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --card: 0 0% 100%;
    --card-foreground: 222.2 47.4% 11.2%;
    --primary: 222.2 47.4% 11.2%;
    --primary-foreground: 210 40% 98%;
    --secondary: 210 40% 96.1%;
    --secondary-foreground: 222.2 47.4% 11.2%;
    --accent: 210 40% 96.1%;
    --accent-foreground: 222.2 47.4% 11.2%;
    --destructive: 0 100% 50%;
    --destructive-foreground: 210 40% 98%;
    --ring: 215 20.2% 65.1%;
    --radius: 0.5rem;
  }
 
  .dark {
    --background: 224 71% 4%;
    --foreground: 213 31% 91%;
    --muted: 223 47% 11%;
    --muted-foreground: 215.4 16.3% 56.9%;
    --accent: 216 34% 17%;
    --accent-foreground: 210 40% 98%;
    --popover: 224 71% 4%;
    --popover-foreground: 215 20.2% 65.1%;
    --border: 216 34% 17%;
    --input: 216 34% 17%;
    --card: 224 71% 4%;
    --card-foreground: 213 31% 91%;
    --primary: 210 40% 98%;
    --primary-foreground: 222.2 47.4% 1.2%;
    --secondary: 222.2 47.4% 11.2%;
    --secondary-foreground: 210 40% 98%;
    --destructive: 0 63% 31%;
    --destructive-foreground: 210 40% 98%;
    --ring: 216 34% 17%;
  }
}
 
@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply font-sans antialiased bg-background text-foreground;
  }
}`;

  const sections = [
    {
      id: "create",
      title: "Create Project",
      icon: <Terminal className="h-5 w-5" />,
    },
    {
      id: "tailwind",
      title: "Configure Tailwind",
      icon: <Palette className="h-5 w-5" />,
    },
    {
      id: "cli",
      title: "CLI Tools",
      icon: <Code className="h-5 w-5" />,
    },
    {
      id: "usage",
      title: "Usage",
      icon: <Package className="h-5 w-5" />,
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
  };

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Hero Section with Gradient Background */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 mb-12"
      >
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <Zap className="h-8 w-8" />
            <h1 className="text-4xl font-bold">ElementraUI</h1>
          </div>
          <p className="text-xl font-light max-w-2xl mb-6">
            A modern React component library with Tailwind CSS for building
            beautiful UIs
          </p>
        </div>
      </motion.div>

      {/* Navigation Tabs */}
      <motion.div
        className="flex flex-wrap gap-2 mb-8 border-b pb-2"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {sections.map((section) => (
          <motion.button
            key={section.id}
            variants={itemVariants}
            onClick={() => setActiveSection(section.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
              activeSection === section.id
                ? "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 font-medium"
                : "hover:bg-gray-100 dark:hover:bg-gray-800"
            }`}
          >
            {section.icon}
            {section.title}
          </motion.button>
        ))}
      </motion.div>

      {/* Alert */}
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-8"
        >
          <Alert className="border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-900/20">
            <AlertDescription className="flex items-center">
              <span className="mr-2">🚀</span>
              If you're using Next.js 15, see the{" "}
              <span className="text-blue-500 hover:underline cursor-pointer ml-1 font-medium">
                Next.js 15 + React 19 guide
              </span>
              .
            </AlertDescription>
          </Alert>
        </motion.div>
      </AnimatePresence>

      <div className="space-y-12">
        {/* Create Project Section */}
        <AnimatePresence mode="wait">
          {activeSection === "create" && (
            <motion.section
              key="create"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={fadeInVariants}
            >
              <motion.h2
                variants={itemVariants}
                className="text-2xl font-semibold flex items-center gap-2 mb-6"
              >
                <Terminal className="h-6 w-6 text-indigo-500" />
                Create project
              </motion.h2>

              <motion.p
                variants={itemVariants}
                className="mb-4 text-gray-700 dark:text-gray-300"
              >
                Run the{" "}
                <code className="px-1.5 py-0.5 bg-indigo-100 dark:bg-indigo-900/30 rounded-md text-sm font-mono">
                  npm create vite@latest
                </code>{" "}
                command to create a new React.js project with Vite:
              </motion.p>

              <motion.div variants={itemVariants} className="relative mb-6">
                <div className="bg-gray-900 rounded-lg overflow-hidden">
                  <div className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-gray-400 text-sm">
                    <Terminal className="h-4 w-4" />
                    <span>Terminal</span>
                  </div>
                  <div className="p-4 font-mono text-sm text-white">
                    <div className="flex items-center gap-2">
                      <span className="text-green-400">$</span>
                      <span>npm i elementra-ui</span>
                    </div>
                  </div>
                </div>
                <Button
                  size="sm"
                  variant={copied["cmd1"] ? "default" : "outline"}
                  className={`absolute top-12 right-3 h-8 flex items-center gap-1 ${
                    copied["cmd1"]
                      ? "bg-green-500 border-green-500 text-white"
                      : "text-gray-400 border-gray-700"
                  }`}
                  onClick={() => handleCopy("npm i elementra-ui", "cmd1")}
                >
                  {copied["cmd1"] ? (
                    <Check className="h-3 w-3" />
                  ) : (
                    <Copy className="h-3 w-3" />
                  )}
                  {copied["cmd1"] ? "Copied" : "Copy"}
                </Button>
              </motion.div>

              <motion.div variants={itemVariants} className="relative mb-6">
                <div className="bg-gray-900 rounded-lg overflow-hidden">
                  <div className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-gray-400 text-sm">
                    <Terminal className="h-4 w-4" />
                    <span>Terminal</span>
                  </div>
                  <div className="p-4 font-mono text-sm text-white">
                    <div className="flex items-center gap-2">
                      <span className="text-green-400">$</span>
                      <span>{codeExample3}</span>
                    </div>
                  </div>
                </div>
                <p className="my-3 text-gray-700 dark:text-gray-300 text-sm">
                  Add the @tailwindcss/vite plugin to your Vite configuration for Tailwind CSS v4.0.
                </p>
                <Button
                  size="sm"
                  variant={copied["cmd2"] ? "default" : "outline"}
                  className={`absolute top-12 right-3 h-8 flex items-center gap-1 ${
                    copied["cmd2"]
                      ? "bg-green-500 border-green-500 text-white"
                      : "text-gray-400 border-gray-700"
                  }`}
                  onClick={() =>
                    handleCopy(
                      "npm install -D tailwindcss @tailwindcss/vite",
                      "cmd2"
                    )
                  }
                >
                  {copied["cmd2"] ? (
                    <Check className="h-3 w-3" />
                  ) : (
                    <Copy className="h-3 w-3" />
                  )}
                  {copied["cmd2"] ? "Copied" : "Copy"}
                </Button>
              </motion.div>

              <motion.div variants={itemVariants} className="relative mb-6">
                <div className="bg-gray-900 rounded-lg overflow-hidden">
                  <div className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-gray-400 text-sm">
                    <Terminal className="h-4 w-4" />
                    <span>CSS</span>
                  </div>
                  <div className="p-4 font-mono text-sm text-white">
                    <div className="flex items-center gap-2">
                      <span className="text-green-400">$</span>
                      <span>@import "tailwindcss";</span>
                    </div>
                  </div>
                </div>
                <p className="my-3 text-gray-700 dark:text-gray-300 text-sm">
                  Add a single @import to your CSS file that imports Tailwind CSS v4.0.
                </p>
                <Button
                  size="sm"
                  variant={copied["cmd3"] ? "default" : "outline"}
                  className={`absolute top-12 right-3 h-8 flex items-center gap-1 ${
                    copied["cmd3"]
                      ? "bg-green-500 border-green-500 text-white"
                      : "text-gray-400 border-gray-700"
                  }`}
                  onClick={() =>
                    handleCopy(
                      `@import "tailwindcss";`,
                      "cmd3"
                    )
                  }
                >
                  {copied["cmd3"] ? (
                    <Check className="h-3 w-3" />
                  ) : (
                    <Copy className="h-3 w-3" />
                  )}
                  {copied["cmd3"] ? "Copied" : "Copy"}
                </Button>
              </motion.div>

              <motion.div variants={itemVariants} className="relative mb-6">
                <div className="bg-gray-900 rounded-lg overflow-hidden">
                  <div className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-gray-400 text-sm">
                    <Terminal className="h-4 w-4" />
                    <span>Terminal</span>
                  </div>
                  <div className="p-4 font-mono text-sm text-white">
                    <div className="flex items-center gap-2">
                      <span className="text-green-400">$</span>
                      <span>npx tailwindcss init -p</span>
                    </div>
                  </div>
                </div>
                <p className="my-3 text-gray-700 dark:text-gray-300 text-sm">
                  This command will create both{" "}
                  <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded-md text-sm">
                    tailwind.config.js
                  </code>{" "}
                  and{" "}
                  <code className="px-1.5 py-0.5 bg-gray-100 dark:bg-gray-800 rounded-md text-sm">
                    postcss.config.js
                  </code>{" "}
                  files in your project. Note: Tailwind CSS v4.0 supports CSS-first configuration using @theme directive.
                </p>
                <Button
                  size="sm"
                  variant={copied["cmd4"] ? "default" : "outline"}
                  className={`absolute top-12 right-3 h-8 flex items-center gap-1 ${
                    copied["cmd4"]
                      ? "bg-green-500 border-green-500 text-white"
                      : "text-gray-400 border-gray-700"
                  }`}
                  onClick={() => handleCopy("npx tailwindcss init -p", "cmd4")}
                >
                  {copied["cmd4"] ? (
                    <Check className="h-3 w-3" />
                  ) : (
                    <Copy className="h-3 w-3" />
                  )}
                  {copied["cmd4"] ? "Copied" : "Copy"}
                </Button>
              </motion.div>
            </motion.section>
          )}

          {/* Configure Tailwind Section */}
          {activeSection === "tailwind" && (
            <motion.section
              key="tailwind"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={fadeInVariants}
            >
              <motion.h2
                variants={itemVariants}
                className="text-2xl font-semibold flex items-center gap-2 mb-6"
              >
                <Palette className="h-6 w-6 text-indigo-500" />
                Configure Tailwind CSS
              </motion.h2>

              <motion.div variants={itemVariants} className="mb-8">
                <div className="p-3 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 rounded-r-lg">
                  <p className="text-blue-800 dark:text-blue-200 text-sm">
                    <strong>Tailwind CSS v4.0:</strong> Now supports CSS-first configuration using @theme directive for more intuitive customization.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="mb-8">
                <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
                  <Code className="h-5 w-5 text-indigo-500" />
                  tailwind.config.js
                </h3>
                <div className="relative">
                  <div className="bg-gray-900 rounded-lg p-4 overflow-hidden">
                    <div className="flex items-center gap-2 px-2 py-1 mb-2 bg-gray-800/50 text-gray-400 text-xs w-fit rounded">
                      <Code className="h-3 w-3" />
                      <span>tailwind.config.js</span>
                    </div>
                    <pre className="font-mono text-sm text-white overflow-x-auto">
                      {tailwindConfig}
                    </pre>
                  </div>
                  <Button
                    size="sm"
                    variant={copied["twconfig"] ? "default" : "outline"}
                    className={`absolute top-4 right-3 h-8 flex items-center gap-1 ${
                      copied["twconfig"]
                        ? "bg-green-500 border-green-500 text-white"
                        : "text-gray-400 border-gray-700"
                    }`}
                    onClick={() => handleCopy(tailwindConfig, "twconfig")}
                  >
                    {copied["twconfig"] ? (
                      <Check className="h-3 w-3" />
                    ) : (
                      <Copy className="h-3 w-3" />
                    )}
                    {copied["twconfig"] ? "Copied" : "Copy"}
                  </Button>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="mb-8">
                <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
                  <Code className="h-5 w-5 text-indigo-500" />
                  Add Tailwind CSS v4.0 to your CSS
                </h3>
                <div className="relative mb-6">
                  <div className="bg-gray-900 rounded-lg p-4 overflow-hidden">
                    <div className="flex items-center gap-2 px-2 py-1 mb-2 bg-gray-800/50 text-gray-400 text-xs w-fit rounded">
                      <Code className="h-3 w-3" />
                      <span>index.css</span>
                    </div>
                    <pre className="font-mono text-sm text-white">
                      @import "tailwindcss";
                    </pre>
                  </div>
                  <p className="my-3 text-gray-700 dark:text-gray-300 text-sm">
                    Tailwind CSS v4.0 uses a simplified single import instead of multiple @tailwind directives.
                  </p>
                  <Button
                    size="sm"
                    variant={copied["twcss"] ? "default" : "outline"}
                    className={`absolute top-4 right-3 h-8 flex items-center gap-1 ${
                      copied["twcss"]
                        ? "bg-green-500 border-green-500 text-white"
                        : "text-gray-400 border-gray-700"
                    }`}
                    onClick={() =>
                      handleCopy(
                        `@import "tailwindcss";`,
                        "twcss"
                      )
                    }
                  >
                    {copied["twcss"] ? (
                      <Check className="h-3 w-3" />
                    ) : (
                      <Copy className="h-3 w-3" />
                    )}
                    {copied["twcss"] ? "Copied" : "Copy"}
                  </Button>
                </div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
                  <Code className="h-5 w-5 text-indigo-500" />
                  CSS-first Configuration (Optional)
                </h3>
                <div className="relative mb-6">
                  <div className="bg-gray-900 rounded-lg p-4 overflow-hidden">
                    <div className="flex items-center gap-2 px-2 py-1 mb-2 bg-gray-800/50 text-gray-400 text-xs w-fit rounded">
                      <Code className="h-3 w-3" />
                      <span>index.css</span>
                    </div>
                    <pre className="font-mono text-sm text-white">
                      {`@import "tailwindcss";

@theme {
  --radius-lg: 0.75rem;
  --brand-500: 34 197 94;
}`}
                    </pre>
                  </div>
                  <p className="my-3 text-gray-700 dark:text-gray-300 text-sm">
                    Tailwind CSS v4.0 supports CSS-first configuration using the @theme directive for more intuitive customization.
                  </p>
                  <Button
                    size="sm"
                    variant={copied["theme"] ? "default" : "outline"}
                    className={`absolute top-4 right-3 h-8 flex items-center gap-1 ${
                      copied["theme"]
                        ? "bg-green-500 border-green-500 text-white"
                        : "text-gray-400 border-gray-700"
                    }`}
                    onClick={() =>
                      handleCopy(
                        `@import "tailwindcss";

@theme {
  --radius-lg: 0.75rem;
  --brand-500: 34 197 94;
}`,
                        "theme"
                      )
                    }
                  >
                    {copied["theme"] ? (
                      <Check className="h-3 w-3" />
                    ) : (
                      <Copy className="h-3 w-3" />
                    )}
                    {copied["theme"] ? "Copied" : "Copy"}
                  </Button>
                </div>
              </motion.div>
            </motion.section>
          )}

          {/* CLI Section */}
          {activeSection === "cli" && (
            <motion.section
              key="cli"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={fadeInVariants}
            >
              <motion.h2
                variants={itemVariants}
                className="text-2xl font-semibold flex items-center gap-2 mb-6"
              >
                <Code className="h-6 w-6 text-indigo-500" />
                Add Components Using CLI
              </motion.h2>

              <motion.div variants={itemVariants} className="relative mb-6">
                <div className="bg-gray-900 rounded-lg overflow-hidden">
                  <div className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-gray-400 text-sm">
                    <Terminal className="h-4 w-4" />
                    <span>Terminal</span>
                  </div>
                  <div className="p-4 font-mono text-sm text-white">
                    <div className="flex items-center gap-2">
                      <span className="text-green-400">$</span>
                      <span>npx elementra-ui add</span>
                    </div>
                  </div>
                </div>
                <Button
                  size="sm"
                  variant={copied["cli"] ? "default" : "outline"}
                  className={`absolute top-12 right-3 h-8 flex items-center gap-1 ${
                    copied["cli"]
                      ? "bg-green-500 border-green-500 text-white"
                      : "text-gray-400 border-gray-700"
                  }`}
                  onClick={() => handleCopy("npx elementra-ui add", "cli")}
                >
                  {copied["cli"] ? (
                    <Check className="h-3 w-3" />
                  ) : (
                    <Copy className="h-3 w-3" />
                  )}
                  {copied["cli"] ? "Copied" : "Copy"}
                </Button>
              </motion.div>

              <motion.p
                variants={itemVariants}
                className="my-4 text-gray-700 dark:text-gray-300 text-sm"
              >
                Select components using the up/down arrow keys. Press spacebar
                to select multiple components, then press enter to add them to
                your <span className="text-indigo-500 font-semibold">src</span>{" "}
                folder.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="text-white bg-gray-900 my-6 p-5 rounded-lg font-mono text-sm border border-gray-800"
              >
                <div className="flex items-center gap-2 text-indigo-400 mb-2">
                  <span>?</span> Select components to add ›
                </div>
                <div className="text-gray-400 mb-4">
                  Instructions:
                  <div className="pl-4 mt-1">
                    <div>↑/↓: Highlight option</div>
                    <div>←/→/[space]: Toggle selection</div>
                    <div>a: Toggle all</div>
                    <div>enter/return: Complete answer</div>
                  </div>
                </div>
                <div className="flex items-center text-green-400 mb-1">
                  <span className="inline-block w-4 h-4 border border-green-400 rounded-full mr-2 flex items-center justify-center">
                    <span className="block w-2 h-2 bg-green-400 rounded-full"></span>
                  </span>
                  Button
                </div>
                <div className="flex items-center text-gray-400">
                  <span className="inline-block w-4 h-4 border border-gray-400 rounded-full mr-2"></span>
                  Card
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="bg-green-100 dark:bg-green-900/30 border-l-4 border-green-500 p-4 rounded-r-lg text-green-800 dark:text-green-200 flex items-center gap-2 my-6"
              >
                <Check className="h-5 w-5" />
                Component Button added successfully!
              </motion.div>
            </motion.section>
          )}

          {/* Usage Section */}
          {activeSection === "usage" && (
            <motion.section
              key="usage"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={fadeInVariants}
            >
              <motion.h2
                variants={itemVariants}
                className="text-2xl font-semibold flex items-center gap-2 mb-6"
              >
                <Package className="h-6 w-6 text-indigo-500" />
                Using Components in React
              </motion.h2>

              <motion.p
                variants={itemVariants}
                className="mb-6 text-gray-700 dark:text-gray-300"
              >
                Import and use the Button component in your React.js project.
                When you add a component using the CLI, it will be added to the
                components folder in your project directory. Since React.js
                doesn't use the app directory structure like Next.js, you can
                organize your components directly in the components folder at
                the root level or within src/components.
              </motion.p>

              <motion.div variants={itemVariants} className="mb-8 relative">
                <div className="bg-gray-900 rounded-lg overflow-hidden">
                  <div className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-gray-400 text-sm">
                    <Code className="h-4 w-4" />
                    <span>Buttons.jsx</span>
                  </div>
                  <div className="p-4 font-mono text-sm">
                    <pre className="text-white overflow-x-auto">
                      {codeExample2}
                    </pre>
                  </div>
                </div>
                <Button
                  size="sm"
                  variant={copied["usage"] ? "default" : "outline"}
                  className={`absolute top-12 right-3 h-8 flex items-center gap-1 ${
                    copied["usage"]
                      ? "bg-green-500 border-green-500 text-white"
                      : "text-gray-400 border-gray-700"
                  }`}
                  onClick={() => handleCopy(codeExample2, "usage")}
                >
                  {copied["usage"] ? (
                    <Check className="h-3 w-3" />
                  ) : (
                    <Copy className="h-3 w-3" />
                  )}
                  {copied["usage"] ? "Copied" : "Copy"}
                </Button>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700"
              >
                <h3 className="text-lg font-medium mb-4">Preview</h3>
                <div className="flex flex-wrap gap-4 p-4 bg-white dark:bg-gray-900 rounded-lg">
                  <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors">
                    Primary Button
                  </button>
                  <button className="px-4 py-2 bg-white text-indigo-600 border border-indigo-600 rounded-md hover:bg-indigo-50 transition-colors">
                    Secondary Button
                  </button>
                  <button className="px-4 py-2 text-indigo-600 rounded-md hover:bg-indigo-50 transition-colors">
                    Outline Button
                  </button>
                </div>
              </motion.div>
            </motion.section>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
export default ReactDocsPage;
