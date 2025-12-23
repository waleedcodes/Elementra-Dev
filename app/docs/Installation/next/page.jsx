"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Copy, ChevronRight, CheckCircle2, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { toast } from "sonner";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const CodeBlock = ({ children, onCopy, className = "" }) => {
  return (
    <motion.div
      className={`relative bg-muted/50 dark:bg-muted rounded-lg p-6 overflow-x-auto border border-border shadow-lg ${className}`}
      whileHover={{ scale: 1.01 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <pre className="text-sm font-mono text-primary whitespace-pre-wrap leading-relaxed">
        {children}
      </pre>
      <Button
        size="sm"
        variant="ghost"
        className="absolute top-3 right-3 h-8 w-8 p-0 text-muted-foreground hover:text-primary transition-colors"
        onClick={onCopy}
      >
        <Copy className="h-4 w-4" />
      </Button>
    </motion.div>
  );
};
const ComponentSelector = () => {
  const [selectedComponents, setSelectedComponents] = useState([
    { name: "Button", selected: false },
    { name: "Card", selected: false },
    { name: "Alert", selected: false },
    { name: "Input", selected: false },
  ]);

  const toggleComponent = (index) => {
    const newComponents = [...selectedComponents];
    newComponents[index].selected = !newComponents[index].selected;
    setSelectedComponents(newComponents);
  };

  return (
    <motion.div
      className="bg-muted dark:bg-muted/50 text-foreground text-md p-6 rounded-lg border border-border shadow-xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-6 text-primary font-semibold">? Select components to add ›</div>
      <div className="mb-6 text-muted-foreground">
        <div className="font-medium mb-2">Instructions:</div>
        <div className="pl-4 space-y-1 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-primary">↑/↓:</span>
            <span>Highlight option</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-primary">←/→/[space]:</span>
            <span>Toggle selection</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-primary">a:</span>
            <span>Toggle all</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-primary">enter/return:</span>
            <span>Complete answer</span>
          </div>
        </div>
      </div>
      {selectedComponents.map((component, index) => (
        <motion.div
          key={component.name}
          className={`flex items-center cursor-pointer my-3 p-3 rounded-lg transition-all duration-200 ${
            component.selected 
              ? "bg-primary text-primary-foreground shadow-lg transform scale-[1.02]" 
              : "hover:bg-muted-foreground/10 text-foreground"
          }`}
          onClick={() => toggleComponent(index)}
          whileTap={{ scale: 0.98 }}
        >
          <span className={`mr-3 text-lg ${component.selected ? 'text-primary-foreground' : 'text-primary'}`}>
            {component.selected ? "◉" : "◯"}
          </span>
          <span className="font-medium">{component.name}</span>
        </motion.div>
      ))}
    </motion.div>
  );
};
const NextDocsPage = () => {
  const handleCopy = (text) => {
    if (text) {
      navigator.clipboard.writeText(text);
      toast(
        <div className="flex items-center">
          <CheckCircle2 className="mr-2 text-green-500" />
          Copied to clipboard
        </div>,
        { type: "success" }
      );
    }
  };

  const codeExample1 = `import { Button } from "@/src/components/ui/button";

export default function Buttons() {
  return (
    <div className="space-x-4">
      <Button variant="default">Primary Button</Button>
      <Button variant="outline">Secondary Button</Button>
      <Button variant="ghost">Outline Button</Button>
    </div>
  )
}`;

  const tailwindConfig = `/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Custom theme configurations
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
}`;
  const cliCommand = "npx elementra-ui add";

  return (
    <motion.div
      className="xlmax-w-8xl mx-auto p-12 bg-white dark:bg-gray-950 min-h-screen transition-colors"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Header */}
      <motion.header variants={itemVariants} className="mb-12">
        <motion.h1
          className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          Next.js Setup Guide
        </motion.h1>
        <motion.p
          className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          A comprehensive guide to installing and configuring Next.js
        </motion.p>
      </motion.header>

      {/* Alert */}
      <motion.div variants={itemVariants} className="mb-8">
        <Alert
          className="border-primary/20 dark:border-primary/30 bg-primary/5 dark:bg-primary/10 backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <AlertDescription className="flex items-center text-black dark:text-primary">
            <ChevronRight className="mr-2 text-black dark:text-primary" />
            If you're using Next.js 15, see the{" "}
            <span className="text-primary hover:text-primary/80 cursor-pointer ml-1 font-medium underline decoration-primary/30">
              Next.js 15 + React 19 guide
            </span>
          </AlertDescription>
        </Alert>
      </motion.div>

      {/* Installation Sections */}
      <motion.div className="space-y-16" variants={containerVariants}>
        {/* Create Project Section */}
        <motion.section variants={itemVariants} className="bg-card dark:bg-card p-8 rounded-xl border border-border shadow-sm">
          <h2 className="text-3xl font-bold mb-8 flex items-center text-foreground">
            <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4">01</span>
            Create Project
          </h2>

          <motion.div variants={itemVariants} className="space-y-6">
            <div className="bg-background border border-border p-6 rounded-lg backdrop-blur-sm">
              <p className="text-foreground mb-4 font-medium">Install the main package:</p>
              <CodeBlock onCopy={() => handleCopy("npm i elementra-ui")}>
                npm i elementra-ui
              </CodeBlock>
            </div>

            <div className="bg-background border border-border p-6 rounded-lg backdrop-blur-sm">
              <p className="text-foreground mb-4 font-medium">Install utility dependencies:</p>
              <CodeBlock
                onCopy={() => handleCopy("npm install clsx tailwind-merge")}
              >
                npm install clsx tailwind-merge
              </CodeBlock>
            </div>

            <div className="bg-background border border-border p-6 rounded-lg backdrop-blur-sm">
              <p className="text-foreground mb-4 font-medium">Install development dependencies:</p>
              <CodeBlock
                onCopy={() =>
                  handleCopy("npm install -D tailwindcss postcss autoprefixer")
                }
              >
                npm install -D tailwindcss postcss autoprefixer
              </CodeBlock>
            </div>
          </motion.div>
        </motion.section>

        {/* Tailwind Configuration */}
        <motion.section variants={itemVariants} className="bg-card dark:bg-card p-8 rounded-xl border border-border shadow-sm">
          <h2 className="text-3xl font-bold mb-8 flex items-center text-foreground">
            <span className="bg-secondary text-secondary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4">02</span>
            Tailwind Configuration
          </h2>

          <motion.div variants={itemVariants} className="space-y-6">
            <div className="bg-background border border-border p-6 rounded-lg backdrop-blur-sm">
              <p className="text-foreground mb-4 font-medium">Initialize Tailwind CSS:</p>
              <CodeBlock onCopy={() => handleCopy("npx tailwindcss init -p")}>
                npx tailwindcss init -p
              </CodeBlock>
            </div>

            <div className="bg-background border border-border p-6 rounded-lg backdrop-blur-sm">
              <p className="text-foreground mb-4 font-medium">Update your tailwind.config.js:</p>
              <CodeBlock onCopy={() => handleCopy(tailwindConfig)}>
                {tailwindConfig}
              </CodeBlock>
            </div>
          </motion.div>
        </motion.section>

        {/* Component Usage */}
        <motion.section variants={itemVariants} className="bg-card dark:bg-card p-8 rounded-xl border border-border shadow-sm">
          <h2 className="text-3xl font-bold mb-8 flex items-center text-foreground">
            <span className="bg-accent text-accent-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4">03</span>
            Component Usage
          </h2>

          <div className="bg-background border border-border p-6 rounded-lg backdrop-blur-sm">
            <p className="text-foreground mb-4 font-medium">Example usage in your components:</p>
            <CodeBlock onCopy={() => handleCopy(codeExample1)}>
              {codeExample1}
            </CodeBlock>
          </div>
        </motion.section>
      </motion.div>

      <motion.section variants={itemVariants} className="pt-16 bg-card dark:bg-card p-8 rounded-xl border border-border shadow-sm">
        <h2 className="text-3xl font-bold mb-8 flex items-center text-foreground">
          <span className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4">04</span>
          Add Components Using CLI
        </h2>

        <motion.div variants={itemVariants} className="space-y-8">
          <div className="bg-background border border-border p-6 rounded-lg backdrop-blur-sm">
            <p className="text-foreground mb-4 font-medium">Run the CLI command:</p>
            <CodeBlock onCopy={() => handleCopy(cliCommand)}>
              {cliCommand}
            </CodeBlock>
          </div>

          <div className="bg-background border border-border p-6 rounded-lg backdrop-blur-sm">
            <motion.p
              className="text-foreground flex items-center mb-6"
              variants={itemVariants}
            >
              <Terminal className="mr-3 text-primary" />
              <span className="font-medium">
                Select components using the up/down arrow keys. Press spacebar to
                select multiple components, then press enter to add them to your src
                folder.
              </span>
            </motion.p>

            <ComponentSelector />
          </div>

          <motion.div
            className="bg-primary/10 border-2 border-primary/20 p-6 rounded-lg flex items-center shadow-lg backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <CheckCircle2 className="mr-4 text-primary w-6 h-6" />
            <span className="text-primary font-semibold text-lg">
              Component button added successfully!
            </span>
          </motion.div>
        </motion.div>
      </motion.section>
    </motion.div>
  );
};

export default NextDocsPage;
