"use client";

import React, { useState, useEffect } from "react";
import {
  Copy,
  Activity,
  Sparkles,
  Zap,
  CheckCircle,
  TrendingUp,
  RefreshCw,
  HardDrive,
  Cpu,
  Database,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Progress } from "@/src/components/ui/progress";
import { PlaygroundStage3D } from "@/components/DocsComp/playground-stage-3d";
import { SpotlightCard } from "@/components/DocsComp/spotlight-card";

const ProgressDocPage = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [progressVal, setProgressVal] = useState(45);
  const [isSimulating, setIsSimulating] = useState(false);
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

  const handleSimulate = () => {
    setIsSimulating(true);
    setProgressVal(10);
    const interval = setInterval(() => {
      setProgressVal((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsSimulating(false);
          toast.success("Upload complete!");
          return 100;
        }
        return prev + 15;
      });
    }, 300);
  };

  const showcaseExamples = [
    {
      id: "status-progress",
      title: "1. Color Status Variants",
      description: "Primary, success, warning, danger, and info variants for system meters and telemetry.",
      preview: (
        <div className="flex flex-col gap-5 p-6 bg-card/60 rounded-2xl border border-border w-full max-w-md mx-auto">
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs font-semibold">
              <span className="flex items-center gap-1.5 text-blue-500">
                <Cpu className="h-3.5 w-3.5" /> CPU Utilization
              </span>
              <span className="font-mono text-foreground">68%</span>
            </div>
            <Progress value={68} variant="primary" />
          </div>

          <div className="space-y-1.5">
            <div className="flex justify-between text-xs font-semibold">
              <span className="flex items-center gap-1.5 text-emerald-500">
                <HardDrive className="h-3.5 w-3.5" /> Storage Health
              </span>
              <span className="font-mono text-foreground">94%</span>
            </div>
            <Progress value={94} variant="success" />
          </div>

          <div className="space-y-1.5">
            <div className="flex justify-between text-xs font-semibold">
              <span className="flex items-center gap-1.5 text-amber-500">
                <Database className="h-3.5 w-3.5" /> Memory Consumption
              </span>
              <span className="font-mono text-foreground">82%</span>
            </div>
            <Progress value={82} variant="warning" />
          </div>

          <div className="space-y-1.5">
            <div className="flex justify-between text-xs font-semibold">
              <span className="flex items-center gap-1.5 text-red-500">
                <Activity className="h-3.5 w-3.5" /> Error Rate Spike
              </span>
              <span className="font-mono text-foreground">35%</span>
            </div>
            <Progress value={35} variant="danger" />
          </div>
        </div>
      ),
      code: `import { Progress } from "@/components/ui/progress";

export default function StatusProgress() {
  return (
    <div className="space-y-4 max-w-sm">
      <Progress value={68} variant="primary" />
      <Progress value={94} variant="success" />
      <Progress value={82} variant="warning" />
      <Progress value={35} variant="danger" />
    </div>
  );
}`,
    },
    {
      id: "sizes-progress",
      title: "2. Height Scales (xs, sm, md, lg)",
      description: "Standard dimension heights from hairline (xs) to bold KPI meters (lg).",
      preview: (
        <div className="flex flex-col gap-4 p-6 bg-card/60 rounded-2xl border border-border w-full max-w-md mx-auto">
          <div className="space-y-1">
            <span className="text-xs text-muted-foreground">Hairline (xs)</span>
            <Progress value={50} size="xs" variant="primary" />
          </div>
          <div className="space-y-1">
            <span className="text-xs text-muted-foreground">Small (sm)</span>
            <Progress value={65} size="sm" variant="primary" />
          </div>
          <div className="space-y-1">
            <span className="text-xs text-muted-foreground">Medium (md)</span>
            <Progress value={80} size="md" variant="primary" />
          </div>
          <div className="space-y-1">
            <span className="text-xs text-muted-foreground">Large (lg)</span>
            <Progress value={95} size="lg" variant="primary" />
          </div>
        </div>
      ),
      code: `import { Progress } from "@/components/ui/progress";

export default function ProgressSizes() {
  return (
    <div className="space-y-3 max-w-sm">
      <Progress value={50} size="xs" />
      <Progress value={65} size="sm" />
      <Progress value={80} size="md" />
      <Progress value={95} size="lg" />
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
          <div className="p-2.5 rounded-2xl bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 shadow-sm">
            <Activity className="h-6 w-6" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">Progress</h1>
        </div>
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
          Displays an indicator showing the completion progress of a task, calculation, or system telemetry metric.
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
                    <code>npx elementra-ui add progress</code>
                  </pre>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="absolute right-1 top-1 h-7 w-7"
                    onClick={() => handleCopy("npx elementra-ui add progress")}
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
                <div className="p-6 w-full max-w-sm space-y-4">
                  <div className="flex justify-between items-center text-sm font-bold">
                    <span>Task Completion</span>
                    <span className="text-primary font-mono">{progressVal}%</span>
                  </div>
                  <Progress value={progressVal} variant="primary" size="md" />
                  <Button
                    size="sm"
                    variant="default"
                    className="w-full flex items-center justify-center gap-2"
                    disabled={isSimulating}
                    onClick={handleSimulate}
                  >
                    <RefreshCw className={`h-4 w-4 ${isSimulating ? "animate-spin" : ""}`} />
                    {isSimulating ? "Uploading File..." : "Simulate Live Progress"}
                  </Button>
                </div>
              </PlaygroundStage3D>
            </section>
          </div>
        )}

        {/* Examples Tab */}
        {activeTab === "examples" && (
          <div className="space-y-12">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-foreground">Complete Progress Showcase</h2>
              <p className="text-sm text-muted-foreground">
                Explore system telemetry meters, size scales, and live upload trackers below.
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
                <h3 className="font-bold text-foreground">Progress Props</h3>
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
                      <td className="p-4 font-mono text-primary font-semibold">value</td>
                      <td className="p-4 font-mono text-xs">number</td>
                      <td className="p-4 font-mono text-xs">0</td>
                      <td className="p-4 text-muted-foreground">Current completion value.</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-mono text-primary font-semibold">max</td>
                      <td className="p-4 font-mono text-xs">number</td>
                      <td className="p-4 font-mono text-xs">100</td>
                      <td className="p-4 text-muted-foreground">Maximum possible value.</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-mono text-primary font-semibold">variant</td>
                      <td className="p-4 font-mono text-xs">"default" | "primary" | "secondary" | "success" | "warning" | "danger" | "info"</td>
                      <td className="p-4 font-mono text-xs">"default"</td>
                      <td className="p-4 text-muted-foreground">Color tone of the progress fill bar.</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-mono text-primary font-semibold">size</td>
                      <td className="p-4 font-mono text-xs">"xs" | "sm" | "md" | "lg" | "xl"</td>
                      <td className="p-4 font-mono text-xs">"md"</td>
                      <td className="p-4 text-muted-foreground">Height dimension scale.</td>
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

export default ProgressDocPage;
