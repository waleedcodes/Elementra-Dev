"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check, Terminal, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { SpotlightCard } from "@/components/DocsComp/spotlight-card";

const NextInstallationPage = () => {
  const [pkgManager, setPkgManager] = useState("npm");
  const [copiedKey, setCopiedKey] = useState(null);

  const handleCopy = (key, text) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    toast.success("Command copied to clipboard");
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const installCommands = {
    npm: "npm install elementra-ui lucide-react framer-motion clsx tailwind-merge",
    pnpm: "pnpm add elementra-ui lucide-react framer-motion clsx tailwind-merge",
    yarn: "yarn add elementra-ui lucide-react framer-motion clsx tailwind-merge",
    bun: "bun add elementra-ui lucide-react framer-motion clsx tailwind-merge",
  };

  const createNextCommands = {
    npm: "npx create-next-app@latest my-app --typescript --tailwind --eslint --app",
    pnpm: "pnpm create next-app my-app --typescript --tailwind --eslint --app",
    yarn: "yarn create next-app my-app --typescript --tailwind --eslint --app",
    bun: "bun create next-app my-app --typescript --tailwind --eslint --app",
  };

  const steps = [
    {
      num: 1,
      title: "Create Next.js Project",
      desc: "Initialize a new Next.js application with Tailwind CSS and TypeScript.",
      code: createNextCommands[pkgManager],
      key: "step1",
    },
    {
      num: 2,
      title: "Install Dependencies",
      desc: "Install Elementra UI core and motion dependencies.",
      code: installCommands[pkgManager],
      key: "step2",
    },
    {
      num: 3,
      title: "Configure Tailwind CSS",
      desc: "Ensure your tailwind.config.js includes the elementra component styles.",
      code: `// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './app/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}`,
      key: "step3",
    },
    {
      num: 4,
      title: "Add Components via CLI",
      desc: "Add any of the 50+ components straight into your project.",
      code: "npx elementra-ui add button alert-dialog carousel",
      key: "step4",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-12 py-6">
      {/* Header */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-xs font-bold text-primary">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Next.js Setup Guide</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
          Next.js Installation
        </h1>
        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
          Step-by-step setup guide for integrating Elementra UI into Next.js App Router applications.
        </p>
      </div>

      {/* Package Manager Selector */}
      <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-muted/60 border border-border w-fit">
        {["npm", "pnpm", "yarn", "bun"].map((pm) => (
          <button
            key={pm}
            type="button"
            onClick={() => setPkgManager(pm)}
            className={`px-4 py-1.5 rounded-xl font-bold text-xs transition-all ${
              pkgManager === pm
                ? "bg-primary text-primary-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {pm}
          </button>
        ))}
      </div>

      {/* Steps List */}
      <div className="space-y-8">
        {steps.map((step) => (
          <SpotlightCard key={step.num} className="p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm shadow-md">
                {step.num}
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </div>
            </div>

            <div className="relative rounded-2xl bg-zinc-950 text-zinc-100 p-4 border border-zinc-800 font-mono text-xs overflow-x-auto shadow-inner">
              <pre className="whitespace-pre-wrap">{step.code}</pre>
              <Button
                size="sm"
                variant="ghost"
                className="absolute right-2 top-2 h-7 px-2 text-zinc-400 hover:text-white hover:bg-zinc-800"
                onClick={() => handleCopy(step.key, step.code)}
              >
                {copiedKey === step.key ? (
                  <Check className="h-3.5 w-3.5 text-emerald-400" />
                ) : (
                  <Copy className="h-3.5 w-3.5" />
                )}
              </Button>
            </div>
          </SpotlightCard>
        ))}
      </div>
    </div>
  );
};

export default NextInstallationPage;
