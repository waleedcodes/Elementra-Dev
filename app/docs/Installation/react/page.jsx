"use client";

import React, { useState } from "react";
import { Copy, Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { SpotlightCard } from "@/components/DocsComp/spotlight-card";

const ReactInstallationPage = () => {
  const [pkgManager, setPkgManager] = useState("npm");
  const [copiedKey, setCopiedKey] = useState(null);

  const handleCopy = (key, text) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    toast.success("Command copied to clipboard");
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const createViteCommands = {
    npm: "npm create vite@latest my-app -- --template react-ts",
    pnpm: "pnpm create vite my-app --template react-ts",
    yarn: "yarn create vite my-app --template react-ts",
    bun: "bun create vite my-app --template react-ts",
  };

  const installCommands = {
    npm: "npm install elementra-ui lucide-react framer-motion clsx tailwind-merge",
    pnpm: "pnpm add elementra-ui lucide-react framer-motion clsx tailwind-merge",
    yarn: "yarn add elementra-ui lucide-react framer-motion clsx tailwind-merge",
    bun: "bun add elementra-ui lucide-react framer-motion clsx tailwind-merge",
  };

  const steps = [
    {
      num: 1,
      title: "Create React Vite Project",
      desc: "Initialize a fast React TypeScript project powered by Vite.",
      code: createViteCommands[pkgManager],
      key: "step1",
    },
    {
      num: 2,
      title: "Install Dependencies",
      desc: "Install Elementra UI core and styling utilities.",
      code: installCommands[pkgManager],
      key: "step2",
    },
    {
      num: 3,
      title: "Add Tailwind CSS",
      desc: "Install Tailwind CSS and create the config file.",
      code: `npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p`,
      key: "step3",
    },
    {
      num: 4,
      title: "Use Components",
      desc: "Import any component directly into your React application.",
      code: `import { Button } from "elementra-ui";

export default function App() {
  return <Button variant="primary">Hello Elementra!</Button>;
}`,
      key: "step4",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-12 py-6">
      {/* Header */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-xs font-bold text-primary">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Vite + React Setup Guide</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
          React (Vite) Installation
        </h1>
        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
          Step-by-step setup guide for integrating Elementra UI into React Single Page Applications.
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

export default ReactInstallationPage;
