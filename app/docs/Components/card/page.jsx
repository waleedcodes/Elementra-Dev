"use client";

import React, { useState } from "react";
import {
  Copy,
  CreditCard,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Zap,
  CheckCircle,
  TrendingUp,
  Activity,
  Award,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/src/components/ui/card";
import { PlaygroundStage3D } from "@/components/DocsComp/playground-stage-3d";
import { SpotlightCard, Card3D } from "@/components/DocsComp/spotlight-card";

const CardDocPage = () => {
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
      id: "standard-card",
      title: "1. Standard Action Card",
      description: "Complete modular card with header, description, main body, and call-to-action button.",
      preview: (
        <div className="flex justify-center p-6 bg-card/60 rounded-2xl border border-border">
          <Card className="w-full max-w-sm border border-border bg-card/90 shadow-md">
            <CardHeader>
              <CardTitle>Analytics Overview</CardTitle>
              <CardDescription>Real-time cluster telemetry and health.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-extrabold text-foreground">99.98%</div>
              <p className="text-xs text-muted-foreground mt-1">Uptime over the last 30 billing days.</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full" onClick={() => toast.success("Opening Analytics...")}>
                View Full Metrics
              </Button>
            </CardFooter>
          </Card>
        </div>
      ),
      code: `import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ActionCard() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Analytics Overview</CardTitle>
        <CardDescription>Real-time cluster telemetry and health.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-extrabold">99.98%</div>
        <p className="text-xs text-muted-foreground mt-1">Uptime over the last 30 days.</p>
      </CardContent>
      <CardFooter>
        <Button className="w-full">View Full Metrics</Button>
      </CardFooter>
    </Card>
  );
}`,
    },
    {
      id: "stats-card",
      title: "2. Metric & Growth Card",
      description: "Clean dashboard KPI metric card with badge indicators and trend analytics.",
      preview: (
        <div className="flex justify-center p-6 bg-card/60 rounded-2xl border border-border">
          <Card className="w-full max-w-sm border border-border bg-card/90 shadow-md">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-semibold text-muted-foreground">Total Revenue</CardTitle>
              <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-500">
                <TrendingUp className="h-4 w-4" />
              </div>
            </CardHeader>
            <CardContent className="space-y-1">
              <div className="text-3xl font-black text-foreground">$45,231.89</div>
              <div className="flex items-center gap-1.5 text-xs text-emerald-500 font-bold">
                <span>+20.1%</span>
                <span className="text-muted-foreground font-normal">from last month</span>
              </div>
            </CardContent>
          </Card>
        </div>
      ),
      code: `import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";

export default function MetricCard() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-semibold text-muted-foreground">Total Revenue</CardTitle>
        <TrendingUp className="h-4 w-4 text-emerald-500" />
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-black">$45,231.89</div>
        <p className="text-xs text-emerald-500 font-bold mt-1">+20.1% from last month</p>
      </CardContent>
    </Card>
  );
}`,
    },
    {
      id: "interactive-3d-card",
      title: "3. 3D Perspective Spotlight Card",
      description: "Interactive card with mouse gyro-tilt perspective and radiant spotlight glow.",
      preview: (
        <div className="flex justify-center p-6 bg-card/60 rounded-2xl border border-border">
          <Card3D className="w-full max-w-sm">
            <SpotlightCard className="p-6 space-y-4 shadow-xl border border-primary/30">
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                  <Award className="h-5 w-5" />
                </div>
                <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                  PREMIUM
                </span>
              </div>
              <div>
                <h4 className="text-lg font-bold text-foreground">Elementra Enterprise</h4>
                <p className="text-xs text-muted-foreground mt-1">
                  Complete design token suite with 50+ accessible components and priority support.
                </p>
              </div>
              <Button className="w-full shadow-lg shadow-primary/25" onClick={() => toast.success("Enterprise plan selected!")}>
                Upgrade License
              </Button>
            </SpotlightCard>
          </Card3D>
        </div>
      ),
      code: `import { Card3D, SpotlightCard } from "@/components/DocsComp/spotlight-card";
import { Button } from "@/components/ui/button";
import { Award } from "lucide-react";

export default function TiltSpotlightCard() {
  return (
    <Card3D className="max-w-sm">
      <SpotlightCard className="p-6 space-y-4 border border-primary/30">
        <Award className="h-5 w-5 text-primary" />
        <h4 className="text-lg font-bold">Elementra Enterprise</h4>
        <p className="text-xs text-muted-foreground">50+ accessible components with priority support.</p>
        <Button className="w-full">Upgrade License</Button>
      </SpotlightCard>
    </Card3D>
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
            <CreditCard className="h-6 w-6" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">Card</h1>
        </div>
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
          A flexible, structured container for grouping related content and actions with accessible header, body, and footer slots.
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
                    <code>npx elementra-ui add card</code>
                  </pre>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="absolute right-1 top-1 h-7 w-7"
                    onClick={() => handleCopy("npx elementra-ui add card")}
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
                <div className="p-4 w-full max-w-sm">
                  <Card3D>
                    <Card className="rounded-2xl border border-border bg-card/90 backdrop-blur shadow-xl">
                      <CardHeader>
                        <div className="flex items-center justify-between mb-1">
                          <div className="p-2 rounded-xl bg-primary/10 text-primary w-fit">
                            <Zap className="h-4 w-4" />
                          </div>
                          <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                            LIVE
                          </span>
                        </div>
                        <CardTitle>System Performance</CardTitle>
                        <CardDescription>Real-time cluster telemetry</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <div className="text-3xl font-extrabold text-foreground">99.98%</div>
                        <p className="text-xs text-muted-foreground">
                          Zero downtime incidents recorded in the current billing cycle.
                        </p>
                      </CardContent>
                      <CardFooter>
                        <Button
                          className="w-full flex items-center justify-center gap-2"
                          onClick={() => toast.success("Opening system telemetry...")}
                        >
                          View Cluster Details
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </CardFooter>
                    </Card>
                  </Card3D>
                </div>
              </PlaygroundStage3D>
            </section>
          </div>
        )}

        {/* Examples Tab */}
        {activeTab === "examples" && (
          <div className="space-y-12">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-foreground">Complete Card Showcase</h2>
              <p className="text-sm text-muted-foreground">
                Explore action cards, telemetry metric displays, and 3D gyro perspective tilt cards below.
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
                <h3 className="font-bold text-foreground">Card Subcomponents</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="bg-card text-muted-foreground border-b border-border">
                    <tr>
                      <th className="p-4 font-medium">Subcomponent</th>
                      <th className="p-4 font-medium">Role</th>
                      <th className="p-4 font-medium">Description</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr>
                      <td className="p-4 font-mono text-primary font-semibold">Card</td>
                      <td className="p-4 text-xs font-mono">Root</td>
                      <td className="p-4 text-muted-foreground">The root container styled with border and rounded corners.</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-mono text-primary font-semibold">CardHeader</td>
                      <td className="p-4 text-xs font-mono">Header Slot</td>
                      <td className="p-4 text-muted-foreground">Wraps Title and Description with standard vertical rhythm.</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-mono text-primary font-semibold">CardContent</td>
                      <td className="p-4 text-xs font-mono">Body Slot</td>
                      <td className="p-4 text-muted-foreground">Main content area for data, media, or form inputs.</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-mono text-primary font-semibold">CardFooter</td>
                      <td className="p-4 text-xs font-mono">Footer Slot</td>
                      <td className="p-4 text-muted-foreground">Bottom action container for buttons or links.</td>
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

export default CardDocPage;
