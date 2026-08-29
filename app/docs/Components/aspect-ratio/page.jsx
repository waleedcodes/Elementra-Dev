"use client";

import React, { useState } from "react";
import { Copy, CreditCard, Sparkles, Image as ImageIcon, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { AspectRatio } from "@/src/components/ui/aspect-ratio";
import { PlaygroundStage3D } from "@/components/DocsComp/playground-stage-3d";
import { SpotlightCard } from "@/components/DocsComp/spotlight-card";

const AspectRatioDocPage = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [ratio, setRatio] = useState(16 / 9);
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
      title: "16:9 Video & Landscape Media Container",
      description: "Standard cinematic landscape aspect ratio with fallback styling.",
      code: `import { AspectRatio } from "@/components/ui/aspect-ratio";

export default function VideoPreview() {
  return (
    <div className="w-full max-w-md rounded-2xl overflow-hidden border border-border shadow-lg">
      <AspectRatio ratio={16 / 9}>
        <img
          src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=800&q=80"
          alt="Abstract mesh gradient"
          className="object-cover w-full h-full"
        />
      </AspectRatio>
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
          <div className="p-2.5 rounded-2xl bg-cyan-500/10 text-cyan-500 border border-cyan-500/20 shadow-sm">
            <CreditCard className="h-6 w-6" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">Aspect Ratio</h1>
        </div>
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
          Displays content within a desired geometric ratio. Prevents layout shift (CLS) during image and video loading.
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
                    <code>npx elementra-ui add aspect-ratio</code>
                  </pre>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="absolute right-1 top-1 h-7 w-7"
                    onClick={() => handleCopy("npx elementra-ui add aspect-ratio")}
                  >
                    <Copy className="h-3.5 w-3.5" />
                  </Button>
                </div>
              </SpotlightCard>
            </div>

            {/* 3D Interactive Playground Stage */}
            <section className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold flex items-center gap-2 text-foreground">
                  <Sparkles className="h-5 w-5 text-primary" />
                  3D Interactive Playground
                </h2>

                {/* Ratio Switcher Controls */}
                <div className="flex items-center gap-1.5 p-1 rounded-xl bg-muted/70 border border-border text-xs font-medium">
                  <button
                    type="button"
                    onClick={() => setRatio(16 / 9)}
                    className={`px-2.5 py-1 rounded-lg transition-all ${
                      ratio === 16 / 9 ? "bg-background text-primary font-bold shadow-sm" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    16:9
                  </button>
                  <button
                    type="button"
                    onClick={() => setRatio(4 / 3)}
                    className={`px-2.5 py-1 rounded-lg transition-all ${
                      ratio === 4 / 3 ? "bg-background text-primary font-bold shadow-sm" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    4:3
                  </button>
                  <button
                    type="button"
                    onClick={() => setRatio(1)}
                    className={`px-2.5 py-1 rounded-lg transition-all ${
                      ratio === 1 ? "bg-background text-primary font-bold shadow-sm" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    1:1
                  </button>
                  <button
                    type="button"
                    onClick={() => setRatio(21 / 9)}
                    className={`px-2.5 py-1 rounded-lg transition-all ${
                      ratio === 21 / 9 ? "bg-background text-primary font-bold shadow-sm" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    21:9
                  </button>
                </div>
              </div>

              <PlaygroundStage3D code={codeExamples[0].code} defaultBackdrop="cyberpunk">
                <div className="w-full max-w-sm rounded-2xl overflow-hidden border border-border shadow-2xl bg-card">
                  <AspectRatio ratio={ratio}>
                    <div className="w-full h-full bg-gradient-to-br from-cyan-600 via-indigo-600 to-purple-600 flex flex-col items-center justify-center p-6 text-white text-center">
                      <ImageIcon className="h-10 w-10 mb-2 opacity-90" />
                      <span className="font-bold text-lg">Aspect Ratio Container</span>
                      <span className="text-xs opacity-80 mt-1">Preserving exact proportion</span>
                    </div>
                  </AspectRatio>
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
                <h3 className="font-bold text-foreground">AspectRatio Props</h3>
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
                      <td className="p-4 font-mono text-primary font-semibold">ratio</td>
                      <td className="p-4 font-mono text-xs">number (width / height)</td>
                      <td className="p-4 font-mono text-xs">16 / 9</td>
                      <td className="p-4 text-muted-foreground">The aspect ratio constraint to maintain for the content.</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-mono text-primary font-semibold">className</td>
                      <td className="p-4 font-mono text-xs">string</td>
                      <td className="p-4 font-mono text-xs">""</td>
                      <td className="p-4 text-muted-foreground">Custom styling classes applied to the container.</td>
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

export default AspectRatioDocPage;
