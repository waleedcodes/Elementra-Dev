"use client";

import React, { useState } from "react";
import {
  Copy,
  HelpCircle,
  Sparkles,
  Info,
  Heart,
  Plus,
  Trash2,
  Settings,
  Share2,
  Bookmark,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Tooltip } from "@/src/components/ui/tooltip";
import { PlaygroundStage3D } from "@/components/DocsComp/playground-stage-3d";
import { SpotlightCard } from "@/components/DocsComp/spotlight-card";

const TooltipDocPage = () => {
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
      id: "directional-tooltips",
      title: "1. Position Orientations (Top, Bottom)",
      description: "Display informative helper hints floating above or beneath target triggers.",
      preview: (
        <div className="flex flex-wrap items-center justify-center gap-6 p-8 bg-card/60 rounded-2xl border border-border w-full max-w-md mx-auto">
          <Tooltip content="Tooltip floating on Top" side="top">
            <Button variant="outline" className="shadow-sm">Hover Top</Button>
          </Tooltip>

          <Tooltip content="Tooltip floating on Bottom" side="bottom">
            <Button variant="outline" className="shadow-sm">Hover Bottom</Button>
          </Tooltip>
        </div>
      ),
      code: `import { Tooltip } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

export default function DirectionalTooltips() {
  return (
    <div className="flex gap-4">
      <Tooltip content="Tooltip on Top" side="top">
        <Button variant="outline">Hover Top</Button>
      </Tooltip>
      <Tooltip content="Tooltip on Bottom" side="bottom">
        <Button variant="outline">Hover Bottom</Button>
      </Tooltip>
    </div>
  );
}`,
    },
    {
      id: "icon-helpers",
      title: "2. Icon Action Hints",
      description: "Concise tooltips attached to icon-only action buttons for improved accessibility.",
      preview: (
        <div className="flex flex-wrap items-center justify-center gap-4 p-8 bg-card/60 rounded-2xl border border-border w-full max-w-md mx-auto">
          <Tooltip content="Add to Favorites" side="top">
            <Button size="icon" variant="glass" className="shadow-md">
              <Heart className="h-4 w-4 text-red-500" />
            </Button>
          </Tooltip>

          <Tooltip content="Bookmark Resource" side="top">
            <Button size="icon" variant="glass" className="shadow-md">
              <Bookmark className="h-4 w-4 text-amber-500" />
            </Button>
          </Tooltip>

          <Tooltip content="Share with Team" side="top">
            <Button size="icon" variant="glass" className="shadow-md">
              <Share2 className="h-4 w-4 text-blue-500" />
            </Button>
          </Tooltip>

          <Tooltip content="Configuration Settings" side="top">
            <Button size="icon" variant="glass" className="shadow-md">
              <Settings className="h-4 w-4 text-foreground" />
            </Button>
          </Tooltip>
        </div>
      ),
      code: `import { Tooltip } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { Heart, Bookmark, Share2 } from "lucide-react";

export default function IconTooltips() {
  return (
    <div className="flex gap-3">
      <Tooltip content="Add to Favorites">
        <Button size="icon" variant="glass"><Heart className="h-4 w-4" /></Button>
      </Tooltip>
      <Tooltip content="Bookmark">
        <Button size="icon" variant="glass"><Bookmark className="h-4 w-4" /></Button>
      </Tooltip>
      <Tooltip content="Share">
        <Button size="icon" variant="glass"><Share2 className="h-4 w-4" /></Button>
      </Tooltip>
    </div>
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
            <HelpCircle className="h-6 w-6" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">Tooltip</h1>
        </div>
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
          A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.
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
                    <code>npx elementra-ui add tooltip</code>
                  </pre>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="absolute right-1 top-1 h-7 w-7"
                    onClick={() => handleCopy("npx elementra-ui add tooltip")}
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
                  <Tooltip content="Quick action: Add new project file" side="top">
                    <Button variant="gradient" className="shadow-lg shadow-purple-500/25 flex items-center gap-2">
                      <Plus className="h-4 w-4" />
                      Hover to Preview Tooltip
                    </Button>
                  </Tooltip>
                </div>
              </PlaygroundStage3D>
            </section>
          </div>
        )}

        {/* Examples Tab */}
        {activeTab === "examples" && (
          <div className="space-y-12">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-foreground">Complete Tooltip Showcase</h2>
              <p className="text-sm text-muted-foreground">
                Hover over the buttons below to test floating helper hints and icon action descriptors.
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
                <h3 className="font-bold text-foreground">Tooltip Props</h3>
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
                      <td className="p-4 font-mono text-primary font-semibold">content</td>
                      <td className="p-4 font-mono text-xs">React.ReactNode</td>
                      <td className="p-4 font-mono text-xs">-</td>
                      <td className="p-4 text-muted-foreground">Content displayed inside the floating tooltip box.</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-mono text-primary font-semibold">side</td>
                      <td className="p-4 font-mono text-xs">"top" | "bottom"</td>
                      <td className="p-4 font-mono text-xs">"top"</td>
                      <td className="p-4 text-muted-foreground">Placement side relative to trigger element.</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-mono text-primary font-semibold">delay</td>
                      <td className="p-4 font-mono text-xs">number</td>
                      <td className="p-4 font-mono text-xs">100</td>
                      <td className="p-4 text-muted-foreground">Hover delay in milliseconds before opening.</td>
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

export default TooltipDocPage;
