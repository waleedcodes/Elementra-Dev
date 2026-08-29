"use client";

import React, { useState } from "react";
import {
  Copy,
  Star,
  Sparkles,
  CheckCircle,
  AlertCircle,
  Shield,
  Zap,
  Tag,
  Activity,
  Flame,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Badge } from "@/src/components/ui/badge";
import { PlaygroundStage3D } from "@/components/DocsComp/playground-stage-3d";
import { SpotlightCard } from "@/components/DocsComp/spotlight-card";

const BadgeDocPage = () => {
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
      id: "color-variants",
      title: "1. All Color & Status Variants",
      description: "Default, primary, secondary, success, warning, danger, info, and outline color tones.",
      preview: (
        <div className="flex flex-wrap items-center justify-center gap-3 p-6 bg-card/60 rounded-2xl border border-border">
          <Badge variant="default">Default</Badge>
          <Badge variant="primary">Primary</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="danger">Danger</Badge>
          <Badge variant="info">Info</Badge>
          <Badge variant="outline">Outline</Badge>
        </div>
      ),
      code: `import { Badge } from "@/components/ui/badge";

export default function BadgeVariants() {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge variant="default">Default</Badge>
      <Badge variant="primary">Primary</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="danger">Danger</Badge>
      <Badge variant="info">Info</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  );
}`,
    },
    {
      id: "rounded-pills",
      title: "2. Capsule & Pill Shapes (rounded='full')",
      description: "Fully rounded pill badges for user tags, online indicators, and version counters.",
      preview: (
        <div className="flex flex-wrap items-center justify-center gap-3 p-6 bg-card/60 rounded-2xl border border-border">
          <Badge variant="primary" rounded="full">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-1.5 animate-pulse" />
            Online
          </Badge>
          <Badge variant="success" rounded="full">
            v3.2.0-stable
          </Badge>
          <Badge variant="secondary" rounded="full">
            <Sparkles className="w-3 h-3 mr-1" />
            Pro Plan
          </Badge>
          <Badge variant="danger" rounded="full">
            99+ Notifications
          </Badge>
        </div>
      ),
      code: `import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";

export default function PillBadges() {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge variant="primary" rounded="full">
        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-1.5 animate-pulse" />
        Online
      </Badge>
      <Badge variant="success" rounded="full">v3.2.0-stable</Badge>
      <Badge variant="secondary" rounded="full">
        <Sparkles className="w-3 h-3 mr-1" /> Pro Plan
      </Badge>
    </div>
  );
}`,
    },
    {
      id: "badge-sizes",
      title: "3. Size Scales (sm, md, lg)",
      description: "Standardized size scales suitable for inline text markers and standalone cards.",
      preview: (
        <div className="flex flex-wrap items-center justify-center gap-4 p-6 bg-card/60 rounded-2xl border border-border">
          <Badge size="sm" variant="primary">Small (sm)</Badge>
          <Badge size="md" variant="primary">Medium (md)</Badge>
          <Badge size="lg" variant="primary">Large (lg)</Badge>
        </div>
      ),
      code: `import { Badge } from "@/components/ui/badge";

export default function BadgeSizes() {
  return (
    <div className="flex items-center gap-3">
      <Badge size="sm" variant="primary">Small (sm)</Badge>
      <Badge size="md" variant="primary">Medium (md)</Badge>
      <Badge size="lg" variant="primary">Large (lg)</Badge>
    </div>
  );
}`,
    },
    {
      id: "with-icons",
      title: "4. Badges with Leading & Trailing Icons",
      description: "Incorporate Lucide React icons for status verifications, metrics, and security shields.",
      preview: (
        <div className="flex flex-wrap items-center justify-center gap-3 p-6 bg-card/60 rounded-2xl border border-border">
          <Badge variant="success" className="flex items-center gap-1">
            <CheckCircle className="h-3 w-3" />
            Verified Author
          </Badge>
          <Badge variant="danger" className="flex items-center gap-1">
            <Flame className="h-3 w-3" />
            Trending High
          </Badge>
          <Badge variant="secondary" className="flex items-center gap-1">
            <Shield className="h-3 w-3" />
            Enterprise Guard
          </Badge>
          <Badge variant="warning" className="flex items-center gap-1">
            <AlertCircle className="h-3 w-3" />
            Deprecation Warning
          </Badge>
        </div>
      ),
      code: `import { Badge } from "@/components/ui/badge";
import { CheckCircle, Flame, Shield, AlertCircle } from "lucide-react";

export default function BadgesWithIcons() {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge variant="success">
        <CheckCircle className="h-3 w-3 mr-1" /> Verified Author
      </Badge>
      <Badge variant="danger">
        <Flame className="h-3 w-3 mr-1" /> Trending High
      </Badge>
      <Badge variant="secondary">
        <Shield className="h-3 w-3 mr-1" /> Enterprise Guard
      </Badge>
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
          <div className="p-2.5 rounded-2xl bg-amber-500/10 text-amber-500 border border-amber-500/20 shadow-sm">
            <Star className="h-6 w-6" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">Badge</h1>
        </div>
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
          Displays a small status descriptor, category label, or numeric count tag with customizable color variants.
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
                    <code>npx elementra-ui add badge</code>
                  </pre>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="absolute right-1 top-1 h-7 w-7"
                    onClick={() => handleCopy("npx elementra-ui add badge")}
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
                <div className="p-6 flex flex-wrap items-center justify-center gap-3">
                  <Badge variant="default" className="shadow-sm">Default</Badge>
                  <Badge variant="primary" className="shadow-sm">Primary</Badge>
                  <Badge variant="secondary" className="shadow-sm">Secondary</Badge>
                  <Badge variant="success" className="shadow-sm flex items-center gap-1">
                    <CheckCircle className="h-3 w-3" />
                    Verified
                  </Badge>
                  <Badge variant="warning" className="shadow-sm flex items-center gap-1">
                    <AlertCircle className="h-3 w-3" />
                    Beta
                  </Badge>
                  <Badge variant="danger" className="shadow-sm">Destructive</Badge>
                  <Badge variant="outline" className="shadow-sm">Outline</Badge>
                </div>
              </PlaygroundStage3D>
            </section>
          </div>
        )}

        {/* Examples Tab */}
        {activeTab === "examples" && (
          <div className="space-y-12">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-foreground">Complete Badge Showcase</h2>
              <p className="text-sm text-muted-foreground">
                Test and preview all badge variants, capsule shapes, and icon slots below.
              </p>
            </div>

            {showcaseExamples.map((example) => (
              <SpotlightCard key={example.id} className="p-6 sm:p-8 space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-foreground">{example.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{example.description}</p>
                </div>

                {/* Live Rendered Preview */}
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
                <h3 className="font-bold text-foreground">Badge Props</h3>
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
                      <td className="p-4 font-mono text-primary font-semibold">variant</td>
                      <td className="p-4 font-mono text-xs">"default" | "primary" | "secondary" | "success" | "warning" | "danger" | "info" | "outline"</td>
                      <td className="p-4 font-mono text-xs">"default"</td>
                      <td className="p-4 text-muted-foreground">The visual color tone and status variant of the badge.</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-mono text-primary font-semibold">size</td>
                      <td className="p-4 font-mono text-xs">"sm" | "md" | "lg"</td>
                      <td className="p-4 font-mono text-xs">"md"</td>
                      <td className="p-4 text-muted-foreground">Dimension scaling and text padding.</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-mono text-primary font-semibold">rounded</td>
                      <td className="p-4 font-mono text-xs">"default" | "full" | "none"</td>
                      <td className="p-4 font-mono text-xs">"default"</td>
                      <td className="p-4 text-muted-foreground">Corner radius (use "full" for pill capsules).</td>
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

export default BadgeDocPage;
