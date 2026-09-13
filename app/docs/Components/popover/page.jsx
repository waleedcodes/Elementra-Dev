"use client";

import React, { useState } from "react";
import {
  Copy,
  Layers,
  Sparkles,
  Settings,
  Sliders,
  Share2,
  Filter,
  Check,
  Globe,
  Lock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/src/components/ui/popover";
import { PlaygroundStage3D } from "@/components/DocsComp/playground-stage-3d";
import { SpotlightCard } from "@/components/DocsComp/spotlight-card";

const PopoverDocPage = () => {
  const [activeTab, setActiveTab] = useState("overview");
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
    { id: "examples", label: "Examples & Variants" },
    { id: "api", label: "API Reference" },
  ];

  const showcaseExamples = [
    {
      id: "dimensions-popover",
      title: "1. Dimensional Canvas Configuration",
      description: "Rich floating panel containing form controls and slider values.",
      preview: (
        <div className="flex justify-center p-8 bg-card/60 rounded-2xl border border-border w-full max-w-md mx-auto">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2 shadow-sm">
                <Sliders className="h-4 w-4" /> Canvas Dimensions
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-72 p-4 space-y-3">
              <div className="space-y-1">
                <h4 className="font-bold text-sm text-foreground">Canvas Size</h4>
                <p className="text-xs text-muted-foreground">Adjust display canvas scale.</p>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="space-y-1">
                  <label className="font-semibold text-foreground">Width</label>
                  <input
                    type="text"
                    defaultValue="100%"
                    className="w-full p-2 rounded-lg border border-border bg-card text-foreground"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-semibold text-foreground">Max Height</label>
                  <input
                    type="text"
                    defaultValue="500px"
                    className="w-full p-2 rounded-lg border border-border bg-card text-foreground"
                  />
                </div>
              </div>
              <Button size="sm" className="w-full" onClick={() => toast.success("Dimensions applied")}>
                Save Preset
              </Button>
            </PopoverContent>
          </Popover>
        </div>
      ),
      code: `import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Sliders } from "lucide-react";

export default function DimensionPopover() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">
          <Sliders className="h-4 w-4 mr-2" /> Canvas Dimensions
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-72 p-4 space-y-3">
        <h4 className="font-bold text-sm">Canvas Size</h4>
        <div className="grid grid-cols-2 gap-2">
          <input defaultValue="100%" className="p-2 border rounded-lg" />
          <input defaultValue="500px" className="p-2 border rounded-lg" />
        </div>
        <Button size="sm" className="w-full">Save Preset</Button>
      </PopoverContent>
    </Popover>
  );
}`,
    },
    {
      id: "share-popover",
      title: "2. Social Share & Invite Link",
      description: "Quick share popup with single-click copy URL button.",
      preview: (
        <div className="flex justify-center p-8 bg-card/60 rounded-2xl border border-border w-full max-w-md mx-auto">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="gradient" className="flex items-center gap-2 shadow-lg shadow-purple-500/20">
                <Share2 className="h-4 w-4" /> Share Workspace
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80 p-4 space-y-3">
              <div className="space-y-1">
                <h4 className="font-bold text-sm text-foreground">Share Link</h4>
                <p className="text-xs text-muted-foreground">Anyone with this link can view this sandbox.</p>
              </div>
              <div className="flex items-center gap-2">
                <input
                  readOnly
                  value="https://elementra.dev/s/9b8c2f"
                  className="flex-1 p-2 rounded-lg border border-border bg-muted font-mono text-xs text-foreground"
                />
                <Button
                  size="sm"
                  onClick={() => {
                    navigator.clipboard.writeText("https://elementra.dev/s/9b8c2f");
                    toast.success("Link copied to clipboard");
                  }}
                >
                  <Copy className="h-3.5 w-3.5" />
                </Button>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      ),
      code: `import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Share2, Copy } from "lucide-react";

export default function SharePopover() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="gradient">
          <Share2 className="h-4 w-4 mr-2" /> Share
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-4 space-y-3">
        <h4 className="font-bold text-sm">Share Project</h4>
        <div className="flex gap-2">
          <input readOnly value="https://elementra.dev/s/9b8c2f" className="flex-1 p-2 border rounded-lg text-xs" />
          <Button size="sm">Copy</Button>
        </div>
      </PopoverContent>
    </Popover>
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
          <div className="p-2.5 rounded-2xl bg-indigo-500/10 text-indigo-500 border border-indigo-500/20 shadow-sm">
            <Layers className="h-6 w-6" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">Popover</h1>
        </div>
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
          Displays rich, interactive content in a portal that floats near the trigger element, triggered on click.
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
                    <code>npx elementra-ui add popover</code>
                  </pre>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="absolute right-1 top-1 h-7 w-7"
                    onClick={() => handleCopy("npx elementra-ui add popover")}
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

              <PlaygroundStage3D code={showcaseExamples[0].code} defaultBackdrop="grid">
                <div className="p-8 flex items-center justify-center gap-4">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button className="shadow-lg shadow-primary/25 flex items-center gap-2">
                        <Settings className="h-4 w-4" /> Open Configuration Popover
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-72 p-4 space-y-3">
                      <h4 className="font-bold text-sm text-foreground">Display Settings</h4>
                      <p className="text-xs text-muted-foreground">Adjust telemetry reporting rate.</p>
                      <Button size="sm" className="w-full" onClick={() => toast.success("Saved configuration")}>
                        Apply Changes
                      </Button>
                    </PopoverContent>
                  </Popover>
                </div>
              </PlaygroundStage3D>
            </section>
          </div>
        )}

        {/* Examples Tab */}
        {activeTab === "examples" && (
          <div className="space-y-12">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-foreground">Complete Popover Showcase</h2>
              <p className="text-sm text-muted-foreground">
                Click any trigger below to inspect floating configuration boxes and social share cards.
              </p>
            </div>

            {showcaseExamples.map((example) => (
              <SpotlightCard key={example.id} className="p-6 sm:p-8 space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-foreground">{example.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{example.description}</p>
                </div>

                {/* Live Rendered Visual Preview */}
                <div className="space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Live Interactive Preview</div>
                  {example.preview}
                </div>

                {/* Copyable Code Snippet */}
                <div className="space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Component Code</div>
                  <div className="relative">
                    <pre className="bg-zinc-950 text-zinc-100 border border-zinc-800 rounded-2xl p-5 font-mono text-xs overflow-x-auto shadow-inner">
                      <code>{example.code}</code>
                    </pre>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="absolute right-2.5 top-2.5 h-8 px-2 text-zinc-400 hover:text-white hover:bg-zinc-800"
                      onClick={() => handleCopy(example.code)}
                    >
                      <Copy className="h-3.5 w-3.5 mr-1" />
                      Copy Code
                    </Button>
                  </div>
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
                <h3 className="font-bold text-foreground">Popover Props</h3>
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
                      <td className="p-4 text-muted-foreground">Controlled open state of the popover.</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-mono text-primary font-semibold">onOpenChange</td>
                      <td className="p-4 font-mono text-xs">{"(open: boolean) => void"}</td>
                      <td className="p-4 font-mono text-xs">-</td>
                      <td className="p-4 text-muted-foreground">Callback triggered when popover state changes.</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-mono text-primary font-semibold">side</td>
                      <td className="p-4 font-mono text-xs">"top" | "bottom" | "left" | "right"</td>
                      <td className="p-4 font-mono text-xs">"bottom"</td>
                      <td className="p-4 text-muted-foreground">Preferred alignment side of the popover.</td>
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

export default PopoverDocPage;
