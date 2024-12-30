"use client";
import React from "react";
import { Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { toast } from "sonner";

const ReactDocsPage = () => {
  const handleCopy = (text) => {
    if (text) {
      navigator.clipboard.writeText(text);
    }
    toast("Copied to clipboard", { type: "success" });
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

  const tailwindConfig = `/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["app/**/*.{ts,tsx}", "components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: \`var(--radius)\`,
        md: \`calc(var(--radius) - 2px)\`,
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}`;

  const globalCSS = `@tailwind base;
@tailwind components;
@tailwind utilities;
 
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

  return (
    <div className="">
      {/* Header */}
      <h1 className="text-4xl font-semibold mb-4">React.js</h1>
      <p className="text-muted-foreground mb-8">
        Install and configure React.js.
      </p>

      {/* Alert */}
      <Alert className="mb-8">
        <AlertDescription>
          If you're using Next.js 15, see the{" "}
          <span className="text-blue-500 hover:underline cursor-pointer">
            Next.js 15 + React 19 guide
          </span>
          .
        </AlertDescription>
      </Alert>

      <div className="space-y-12">
        {/* Create Project Section */}
        <section>
          <h2 className="text-xl font-medium flex items-center gap-2 mb-4">
            <span className="text-muted-foreground">1</span>
            Create project
          </h2>

          <p className="mb-4">
            Run the{" "}
            <code className="px-1.5 py-0.5 bg-muted rounded-md text-sm">
              npm create vite@latest
            </code>{" "}
            command to create a new React.js project with Vite or to setup an
            existing one:
          </p>

          <div className="relative mb-4">
                <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 font-mono text-sm text-gray-800 dark:text-white">
              <div className="flex items-center gap-2">
                <span>npm i elementra-ui</span>
              </div>
            </div>
            <Button
              size="sm"
              variant="ghost"
              className="absolute top-3 right-3 h-6 w-6 p-0 text-muted-foreground"
              onClick={() => handleCopy("npm i elementra-ui")}
            >
              <Copy className="h-4 w-4" />
            </Button>
          </div>

          <div className="relative mb-4">
                <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 font-mono text-sm text-gray-800 dark:text-white">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <span>
                    npm install tailwindcss-animate clsx tailwind-merge
                    lucide-react
                  </span>
                </div>
              </div>
            </div>
            <p className="my-3 text-gray-600 text-sm">
              These utilities are required dependencies for styling and
              functionality of components.
            </p>
            <Button
              size="sm"
              variant="ghost"
              className="absolute top-3 right-3 h-6 w-6 p-0 text-muted-foreground"
              onClick={() =>
                handleCopy(
                  "npm install tailwindcss-animate class-variance-authority clsx tailwind-merge lucide-react"
                )
              }
            >
              <Copy className="h-4 w-4" />
            </Button>
          </div>
        </section>

        {/* Configure Files Section */}
        <section>
          <h2 className="text-xl font-medium flex items-center gap-2 mb-4">
            <span className="text-muted-foreground">2</span>
            Configure Required Files
          </h2>

          <div className="space-y-8">
            {/* tailwind.config.js */}
            <div>
              <h3 className="text-lg font-medium mb-2">
                Configure tailwind.config.js
              </h3>
              <div className="relative">
                <div className="bg-gray-100 rounded-lg p-4 overflow-x-auto">
                  <pre className="text-[0.5rem] md:text-[0.9rem] font-mono whitespace-pre-wrap">
                    {tailwindConfig}
                  </pre>
                </div>
                <Button
                  size="sm"
                  variant="ghost"
                  className="absolute top-3 right-3 h-6 w-6 p-0 text-muted-foreground"
                  onClick={() => handleCopy(tailwindConfig)}
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* globals.css */}
            <div>
              <h3 className="text-lg font-medium mb-2">
                Configure globals.css
              </h3>
              <div className="relative">
                <div className="bg-gray-100 rounded-lg p-4 overflow-x-auto">
                  <pre className="text-[0.5rem] md:text-[0.9rem] font-mono whitespace-pre-wrap">
                    {globalCSS}
                  </pre>
                </div>
                <Button
                  size="sm"
                  variant="ghost"
                  className="absolute top-3 right-3 h-6 w-6 p-0 text-muted-foreground"
                  onClick={() => handleCopy(globalCSS)}
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CLI Section */}
        <section>
          <h2 className="text-xl font-medium flex items-center gap-2 mb-4">
            <span className="text-muted-foreground">3</span>
            Add Components Using CLI
          </h2>

          <div className="relative mb-4">
                <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 font-mono text-sm text-gray-800 dark:text-white">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <span>npx elementra-ui add</span>
                </div>
              </div>
            </div>
            <Button
              size="sm"
              variant="ghost"
              className="absolute top-3 right-3 h-6 w-6 p-0 text-muted-foreground"
              onClick={() => handleCopy("npx elementra-ui add")}
            >
              <Copy className="h-4 w-4" />
            </Button>
          </div>

          <p className="my-3 text-gray-600 text-sm">
            Select components using the up/down arrow keys. Press spacebar to
            select multiple components, then press enter to add them to your{" "}
            <span className="text-purple-600">src</span> folder.
          </p>

          <div className="text-white bg-gray-800 text-md my-4 p-5 rounded-md">
            ? Select components to add ›
            <br />
            Instructions:
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;↑/↓: Highlight option
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;←/→/[space]: Toggle selection
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;a: Toggle all
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;enter/return: Complete answer
            <br />
            ◉&nbsp;&nbsp;&nbsp;Button
            <br />
            ◯&nbsp;&nbsp;&nbsp;Card
          </div>

          <p className="text-green-700 bg-gray-100 p-3 rounded-md my-3">
            Component button added successfully!
          </p>
        </section>

        {/* Usage Section */}
        <section>
          <h2 className="text-xl font-medium flex items-center gap-2 mb-4">
            <span className="text-muted-foreground">4</span>
            Using In React Js
          </h2>

          <p className="mb-6 text-gray-700">
            Import and use the Button component in your React.js project. When
            you add a component using the CLI, it will be added to the
            components folder in your project directory. Since React.js doesn't
            use the app directory structure like Next.js, you can organize your
            components directly in the components folder at the root level or
            within src/components.
          </p>

          <div className="relative">
            <div className="bg-gray-100 rounded-lg p-4 overflow-x-auto">
              <pre className="text-[0.5rem] md:text-[0.9rem] font-mono whitespace-pre-wrap">
                {codeExample2}
              </pre>
            </div>
            <Button
              size="sm"
              variant="ghost"
              className="absolute top-3 right-3 h-6 w-6 p-0 text-muted-foreground"
              onClick={() => handleCopy(codeExample2)}
            >
              <Copy className="h-4 w-4" />
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ReactDocsPage;
