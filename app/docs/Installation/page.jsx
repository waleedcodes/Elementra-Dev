"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Code, Rocket, Sparkles, Terminal, Layers } from "lucide-react";
import { SpotlightCard } from "@/components/DocsComp/spotlight-card";

const Installation = () => {
  const frameworks = [
    {
      name: "Next.js",
      description: "App Router & Pages Router setup with Tailwind CSS and Turbopack support.",
      icon: Code,
      url: "/docs/Installation/next",
      badge: "Recommended",
      badgeColor: "bg-primary/10 text-primary border-primary/20",
    },
    {
      name: "React + Vite",
      description: "Fast Single Page Application (SPA) development with modern ES modules.",
      icon: Rocket,
      url: "/docs/Installation/react",
      badge: "Client SPA",
      badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-12 py-6">
      {/* Header */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-xs font-bold text-primary">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Quickstart Setup</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">Installation</h1>
        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
          Get started with Elementra UI in seconds. Choose your preferred framework and follow our zero-config setup guide.
        </p>
      </div>

      {/* Frameworks Grid */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-foreground">Supported Frameworks</h2>
          <span className="text-xs text-muted-foreground">Select your stack</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {frameworks.map((framework) => (
            <Link href={framework.url} key={framework.name} className="block group">
              <SpotlightCard className="p-8 h-full flex flex-col justify-between space-y-6 transition-all group-hover:border-primary/40 group-hover:-translate-y-1 shadow-lg">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center border border-primary/20 group-hover:scale-110 transition-transform">
                      <framework.icon className="h-6 w-6" />
                    </div>
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${framework.badgeColor}`}>
                      {framework.badge}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{framework.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {framework.description}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-sm font-bold text-primary group-hover:translate-x-1 transition-transform">
                  <span>Start with {framework.name}</span>
                  <ArrowRight className="h-4 w-4" />
                </div>
              </SpotlightCard>
            </Link>
          ))}
        </div>
      </div>

      {/* Manual CLI Summary */}
      <SpotlightCard className="p-8 space-y-4 bg-muted/20">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-purple-500/10 text-purple-500 border border-purple-500/20">
            <Terminal className="h-5 w-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-foreground">CLI Quick Add</h3>
            <p className="text-xs text-muted-foreground">Already have an existing project? Add components directly.</p>
          </div>
        </div>
        <div className="p-4 rounded-xl bg-zinc-950 text-zinc-100 font-mono text-xs border border-zinc-800 flex items-center justify-between">
          <code>npx elementra-ui add [component-name]</code>
          <span className="text-[11px] text-zinc-500">e.g. alert-dialog, button, modal</span>
        </div>
      </SpotlightCard>
    </div>
  );
};

export default Installation;
