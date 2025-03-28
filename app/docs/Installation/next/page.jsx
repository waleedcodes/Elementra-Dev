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
      className={`relative bg-gray-900 rounded-lg p-4 overflow-x-auto ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <pre className="text-[0.8rem] font-mono text-gray-200 whitespace-pre-wrap">
        {children}
      </pre>
      <Button
        size="sm"
        variant="ghost"
        className="absolute top-3 right-3 h-6 w-6 p-0 text-gray-400 hover:text-white"
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
      className="bg-gray-800 text-white text-md p-5 rounded-md"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-4">? Select components to add ›</div>
      <div className="mb-4">
        Instructions:
        <div className="pl-4">
          <div>↑/↓: Highlight option</div>
          <div>←/→/[space]: Toggle selection</div>
          <div>a: Toggle all</div>
          <div>enter/return: Complete answer</div>
        </div>
      </div>
      {selectedComponents.map((component, index) => (
        <motion.div
          key={component.name}
          className={`flex items-center cursor-pointer my-2 p-2 rounded ${
            component.selected ? "bg-green-600" : "hover:bg-gray-700"
          }`}
          onClick={() => toggleComponent(index)}
          whileTap={{ scale: 0.95 }}
        >
          {component.selected ? "◉" : "◯"} {component.name}
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
      className="max-w-4xl mx-auto px-6 py-12 bg-gradient-to-br from-gray-50 to-gray-100"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Header */}
      <motion.header variants={itemVariants} className="mb-12">
        <motion.h1
          className="text-5xl font-bold text-gray-900 mb-4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          Next.js Setup Guide
        </motion.h1>
        <motion.p
          className="text-xl text-gray-600"
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
          className="border-blue-200 bg-blue-50"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <AlertDescription className="flex items-center">
            <ChevronRight className="mr-2 text-blue-500" />
            If you're using Next.js 15, see the{" "}
            <span className="text-blue-600 hover:underline cursor-pointer ml-1">
              Next.js 15 + React 19 guide
            </span>
          </AlertDescription>
        </Alert>
      </motion.div>

      {/* Installation Sections */}
      <motion.div className="space-y-12" variants={containerVariants}>
        {/* Create Project Section */}
        <motion.section variants={itemVariants}>
          <h2 className="text-2xl font-semibold mb-6 flex items-center">
            <span className="text-gray-400 mr-3">01</span>
            Create Project
          </h2>

          <motion.div variants={itemVariants} className="space-y-6">
            <CodeBlock onCopy={() => handleCopy("npm i elementra-ui")}>
              npm i elementra-ui
            </CodeBlock>

            <motion.p className="text-gray-700" variants={itemVariants}>
              Install additional utility dependencies
            </motion.p>

            <CodeBlock
              onCopy={() => handleCopy("npm install clsx tailwind-merge")}
            >
              npm install clsx tailwind-merge
            </CodeBlock>

            <CodeBlock
              onCopy={() =>
                handleCopy("npm install -D tailwindcss postcss autoprefixer")
              }
            >
              npm install -D tailwindcss postcss autoprefixer
            </CodeBlock>
          </motion.div>
        </motion.section>

        {/* Tailwind Configuration */}
        <motion.section variants={itemVariants}>
          <h2 className="text-2xl font-semibold mb-6 flex items-center">
            <span className="text-gray-400 mr-3">02</span>
            Tailwind Configuration
          </h2>

          <motion.div variants={itemVariants} className="space-y-6">
            <CodeBlock onCopy={() => handleCopy("npx tailwindcss init -p")}>
              npx tailwindcss init -p
            </CodeBlock>

            <CodeBlock onCopy={() => handleCopy(tailwindConfig)}>
              {tailwindConfig}
            </CodeBlock>
          </motion.div>
        </motion.section>

        {/* Component Usage */}
        <motion.section variants={itemVariants}>
          <h2 className="text-2xl font-semibold mb-6 flex items-center">
            <span className="text-gray-400 mr-3">03</span>
            Component Usage
          </h2>

          <CodeBlock onCopy={() => handleCopy(codeExample1)}>
            {codeExample1}
          </CodeBlock>
        </motion.section>
      </motion.div>

      <motion.section variants={itemVariants} className=" pt-12">
        <h2 className="text-2xl font-semibold mb-5 flex items-center">
          <span className="text-gray-400 mr-3">04</span>
          Add Components Using CLI
        </h2>

        <motion.div variants={itemVariants} className="space-y-6">
          <CodeBlock onCopy={() => handleCopy(cliCommand)}>
            {cliCommand}
          </CodeBlock>

          <motion.p
            className="text-gray-700 flex items-center"
            variants={itemVariants}
          >
            <Terminal className="mr-3 text-blue-500" />
            Select components using the up/down arrow keys. Press spacebar to
            select multiple components, then press enter to add them to your src
            folder.
          </motion.p>

          <ComponentSelector />

          <motion.div
            className="bg-green-100 border border-green-200 p-4 rounded-md flex items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <CheckCircle2 className="mr-3 text-green-600" />
            <span className="text-green-800">
              Component button added successfully!
            </span>
          </motion.div>
        </motion.div>
      </motion.section>
    </motion.div>
  );
};

export default NextDocsPage;
