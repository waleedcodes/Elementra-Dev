"use client";

import React, { useState } from "react";
import { Copy, ChevronsUpDown, Sparkles, Folder, FolderOpen, Star, GitFork } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/src/components/ui/collapsible";
import { PlaygroundStage3D } from "@/components/DocsComp/playground-stage-3d";
import { SpotlightCard } from "@/components/DocsComp/spotlight-card";

const CollapsibleDocPage = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const handleCopy = (text) => {
    if (text) {
      navigator.clipboard.writeText(text);
      toast.success("Copied to clipboard");
    }
  };

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "examples", label: "Examples" },
    { id: "api", label: "API Reference" },
  ];

  const codeExamples = [
    {
      title: "Interactive Expandable Repository List",
      description: "Expandable tree / list section that animates smoothly on open and close.",
      code: `import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { ChevronsUpDown } from "lucide-react";

export default function RepositoryCollapsible() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-80 space-y-2">
      <div className="flex items-center justify-between px-4 py-2 border border-border rounded-xl bg-card">
        <h4 className="text-sm font-semibold">@elementra/core</h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm" className="w-9 p-0">
            <ChevronsUpDown className="h-4 w-4" />
          </Button>
        </CollapsibleTrigger>
      </div>
      <div className="rounded-xl border border-border px-4 py-2 text-sm font-mono bg-muted/40">
        @elementra/ui
      </div>
      <CollapsibleContent className="space-y-2">
        <div className="rounded-xl border border-border px-4 py-2 text-sm font-mono bg-muted/40">
          @elementra/icons
        </div>
        <div className="rounded-xl border border-border px-4 py-2 text-sm font-mono bg-muted/40">
          @elementra/cli
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}`,
    },
  ];

  if (!mounted) return null;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-2xl bg-teal-500/10 text-teal-500 border border-teal-500/20 shadow-sm">
            <FolderOpen className="h-6 w-6" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">Collapsible</h1>
        </div>
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
          An interactive component that expands and collapses content with fluid spring transitions and keyboard support.
        </p>
      </div>

      {/* Tabs */}
      <div className="w-full">
        <div className="flex border-b border-border mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 font-semibold text-sm border-b-2 transition-colors ${
                activeTab === tab.id
                  ? "border-primary text-foreground font-bold"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div className="space-y-10">
            {/* Quick Steps */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <SpotlightCard className="p-5 space-y-2">
                <div className="flex items-center gap-2 text-sm font-bold text-foreground">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs font-bold">1</span>
                  Install Library
                </div>
                <div className="relative">
                  <pre className="p-3 rounded-xl bg-background border border-border font-mono text-xs text-foreground">
                    <code>npm i elementra-ui</code>
                  </pre>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="absolute right-1 top-1 h-7 w-7"
                    onClick={() => handleCopy("npm i elementra-ui")}
                  >
                    <Copy className="h-3.5 w-3.5" />
                  </Button>
                </div>
              </SpotlightCard>

              <SpotlightCard className="p-5 space-y-2">
                <div className="flex items-center gap-2 text-sm font-bold text-foreground">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs font-bold">2</span>
                  Add via CLI
                </div>
                <div className="relative">
                  <pre className="p-3 rounded-xl bg-background border border-border font-mono text-xs text-foreground">
                    <code>npx elementra-ui add collapsible</code>
                  </pre>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="absolute right-1 top-1 h-7 w-7"
                    onClick={() => handleCopy("npx elementra-ui add collapsible")}
                  >
                    <Copy className="h-3.5 w-3.5" />
                  </Button>
                </div>
              </SpotlightCard>
            </div>

            {/* 3D Interactive Playground Stage */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold flex items-center gap-2 text-foreground">
                <Sparkles className="h-5 w-5 text-primary" />
                3D Interactive Playground
              </h2>

              <PlaygroundStage3D code={codeExamples[0].code} defaultBackdrop="grid">
                <div className="w-full max-w-sm p-4">
                  <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full space-y-2.5">
                    <div className="flex items-center justify-between p-3 border border-border rounded-xl bg-card shadow-sm">
                      <div className="flex items-center gap-2 font-semibold text-sm">
                        <Folder className="h-4 w-4 text-primary" />
                        <span>@elementra-ui/packages</span>
                      </div>
                      <CollapsibleTrigger asChild>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <ChevronsUpDown className="h-4 w-4" />
                        </Button>
                      </CollapsibleTrigger>
                    </div>

                    <div className="rounded-xl border border-border/70 p-3 text-xs font-mono bg-card/60 flex items-center justify-between">
                      <span>📦 @elementra-ui/core</span>
                      <span className="text-muted-foreground text-[10px]">v1.2.0</span>
                    </div>

                    <CollapsibleContent className="space-y-2.5">
                      <div className="rounded-xl border border-border/70 p-3 text-xs font-mono bg-card/60 flex items-center justify-between">
                        <span>🎨 @elementra-ui/themes</span>
                        <span className="text-muted-foreground text-[10px]">v1.0.4</span>
                      </div>
                      <div className="rounded-xl border border-border/70 p-3 text-xs font-mono bg-card/60 flex items-center justify-between">
                        <span>⚡ @elementra-ui/icons</span>
                        <span className="text-muted-foreground text-[10px]">v2.1.0</span>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </div>
              </PlaygroundStage3D>
            </section>
          </div>
        )}

        {/* Examples Tab */}
        {activeTab === "examples" && (
          <div className="space-y-6">
            {codeExamples.map((example, index) => (
              <SpotlightCard key={index} className="p-6 space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-foreground">{example.title}</h3>
                  <p className="text-sm text-muted-foreground">{example.description}</p>
                </div>
                <div className="relative">
                  <pre className="bg-background/80 border border-border rounded-xl p-4 font-mono text-sm overflow-x-auto text-foreground">
                    <code>{example.code}</code>
                  </pre>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="absolute right-2 top-2 h-8 w-8"
                    onClick={() => handleCopy(example.code)}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </SpotlightCard>
            ))}
          </div>
        )}

        {/* API Reference Tab */}
        {activeTab === "api" && (
          <div className="space-y-8">
            <div className="rounded-2xl border border-border overflow-hidden bg-card shadow-sm">
              <div className="p-4 bg-muted/60 border-b border-border">
                <h3 className="font-bold text-foreground">Collapsible Props</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="bg-card text-muted-foreground border-b border-border">
                    <tr>
                      <th className="p-4 font-medium">Prop</th>
                      <th className="p-4 font-medium">Type</th>
                      <th className="p-4 font-medium">Default</th>
                      <th className="p-4 font-medium">Description</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr>
                      <td className="p-4 font-mono text-primary font-semibold">open</td>
                      <td className="p-4 font-mono text-xs">boolean</td>
                      <td className="p-4 font-mono text-xs">undefined</td>
                      <td className="p-4 text-muted-foreground">Controlled expanded state.</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-mono text-primary font-semibold">onOpenChange</td>
                      <td className="p-4 font-mono text-xs">{"(open: boolean) => void"}</td>
                      <td className="p-4 font-mono text-xs">-</td>
                      <td className="p-4 text-muted-foreground">Callback triggered when open state toggles.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CollapsibleDocPage;
