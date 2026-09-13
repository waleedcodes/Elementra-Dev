"use client";

import React, { useState } from "react";
import {
  Copy,
  User,
  Sparkles,
  Users,
  Shield,
  Circle,
  Square,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Avatar, AvatarGroup } from "@/src/components/ui/avatar";
import { PlaygroundStage3D } from "@/components/DocsComp/playground-stage-3d";
import { SpotlightCard } from "@/components/DocsComp/spotlight-card";

const AvatarDocPage = () => {
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
      id: "status-avatars",
      title: "1. Avatars with Real-Time Status Indicators",
      description: "Online, away, busy, and offline indicators positioned dynamically on the avatar corner.",
      preview: (
        <div className="flex flex-wrap items-center justify-center gap-6 p-6 bg-card/60 rounded-2xl border border-border w-full max-w-md mx-auto">
          <div className="flex flex-col items-center gap-1.5">
            <Avatar
              fallback="AR"
              status="online"
              size="lg"
              className="bg-primary/20 text-primary font-bold shadow-md"
            />
            <span className="text-[11px] text-emerald-500 font-semibold">Online</span>
          </div>
          <div className="flex flex-col items-center gap-1.5">
            <Avatar
              fallback="SK"
              status="busy"
              size="lg"
              className="bg-purple-500/20 text-purple-400 font-bold shadow-md"
            />
            <span className="text-[11px] text-red-500 font-semibold">Do Not Disturb</span>
          </div>
          <div className="flex flex-col items-center gap-1.5">
            <Avatar
              fallback="MK"
              status="away"
              size="lg"
              className="bg-amber-500/20 text-amber-400 font-bold shadow-md"
            />
            <span className="text-[11px] text-amber-500 font-semibold">Idle / Away</span>
          </div>
          <div className="flex flex-col items-center gap-1.5">
            <Avatar
              fallback="JD"
              status="offline"
              size="lg"
              className="bg-muted text-muted-foreground font-bold shadow-md"
            />
            <span className="text-[11px] text-muted-foreground font-semibold">Offline</span>
          </div>
        </div>
      ),
      code: `import { Avatar } from "@/components/ui/avatar";

export default function StatusAvatars() {
  return (
    <div className="flex gap-4">
      <Avatar fallback="AR" status="online" size="lg" />
      <Avatar fallback="SK" status="busy" size="lg" />
      <Avatar fallback="MK" status="away" size="lg" />
      <Avatar fallback="JD" status="offline" size="lg" />
    </div>
  );
}`,
    },
    {
      id: "avatar-group",
      title: "2. Avatar Stack with Overflow Counter",
      description: "Overlapping team avatar stacks with automatic +N excess counter badge.",
      preview: (
        <div className="flex justify-center p-6 bg-card/60 rounded-2xl border border-border w-full max-w-md mx-auto">
          <AvatarGroup max={4} size="lg">
            <Avatar fallback="AL" className="bg-blue-600 text-white font-bold" />
            <Avatar fallback="TC" className="bg-purple-600 text-white font-bold" />
            <Avatar fallback="MR" className="bg-emerald-600 text-white font-bold" />
            <Avatar fallback="EV" className="bg-amber-600 text-white font-bold" />
            <Avatar fallback="DK" className="bg-rose-600 text-white font-bold" />
            <Avatar fallback="HN" className="bg-indigo-600 text-white font-bold" />
          </AvatarGroup>
        </div>
      ),
      code: `import { Avatar, AvatarGroup } from "@/components/ui/avatar";

export default function TeamAvatars() {
  return (
    <AvatarGroup max={4} size="lg">
      <Avatar fallback="AL" />
      <Avatar fallback="TC" />
      <Avatar fallback="MR" />
      <Avatar fallback="EV" />
      <Avatar fallback="DK" />
      <Avatar fallback="HN" />
    </AvatarGroup>
  );
}`,
    },
    {
      id: "shapes-sizes",
      title: "3. Shapes (Circle vs Rounded Square) & Sizes",
      description: "Configurable dimensions ranging from xs (24px) to xl (64px) with rounded square option.",
      preview: (
        <div className="flex flex-wrap items-center justify-center gap-4 p-6 bg-card/60 rounded-2xl border border-border w-full max-w-md mx-auto">
          <Avatar size="sm" fallback="SM" className="bg-primary/20 text-primary font-bold" />
          <Avatar size="md" fallback="MD" className="bg-primary/20 text-primary font-bold" />
          <Avatar size="lg" fallback="LG" className="bg-primary/20 text-primary font-bold" />
          <Avatar size="xl" fallback="XL" className="bg-primary/20 text-primary font-bold" />
          <Avatar size="lg" shape="square" fallback="SQ" className="bg-purple-500/20 text-purple-400 font-bold rounded-2xl" />
        </div>
      ),
      code: `import { Avatar } from "@/components/ui/avatar";

export default function AvatarSizes() {
  return (
    <div className="flex items-center gap-3">
      <Avatar size="sm" fallback="SM" />
      <Avatar size="md" fallback="MD" />
      <Avatar size="lg" fallback="LG" />
      <Avatar size="xl" fallback="XL" />
      <Avatar size="lg" shape="square" fallback="SQ" />
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
          <div className="p-2.5 rounded-2xl bg-indigo-500/10 text-indigo-500 border border-indigo-500/20 shadow-sm">
            <User className="h-6 w-6" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">Avatar</h1>
        </div>
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
          An image element representing a user or organization with automatic initial fallbacks, status indicator dots, and overlapping avatar groups.
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
                    <code>npx elementra-ui add avatar</code>
                  </pre>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="absolute right-1 top-1 h-7 w-7"
                    onClick={() => handleCopy("npx elementra-ui add avatar")}
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
                <div className="p-6 flex items-center justify-center gap-4">
                  <Avatar
                    fallback="EM"
                    status="online"
                    size="xl"
                    className="bg-primary/20 text-primary font-bold shadow-xl ring-4 ring-primary/20 cursor-pointer hover:scale-110 transition-transform"
                    onClick={() => toast.success("Avatar profile clicked!")}
                  />
                </div>
              </PlaygroundStage3D>
            </section>
          </div>
        )}

        {/* Examples Tab */}
        {activeTab === "examples" && (
          <div className="space-y-12">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-foreground">Complete Avatar Showcase</h2>
              <p className="text-sm text-muted-foreground">
                Interact with status badges, team avatar stacks, and dimension scales below.
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
                <h3 className="font-bold text-foreground">Avatar Props</h3>
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
                      <td className="p-4 font-mono text-primary font-semibold">src</td>
                      <td className="p-4 font-mono text-xs">string</td>
                      <td className="p-4 font-mono text-xs">undefined</td>
                      <td className="p-4 text-muted-foreground">Image source URL.</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-mono text-primary font-semibold">fallback</td>
                      <td className="p-4 font-mono text-xs">string</td>
                      <td className="p-4 font-mono text-xs">-</td>
                      <td className="p-4 text-muted-foreground">Initials rendered if image fails to load.</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-mono text-primary font-semibold">size</td>
                      <td className="p-4 font-mono text-xs">"xs" | "sm" | "md" | "lg" | "xl"</td>
                      <td className="p-4 font-mono text-xs">"md"</td>
                      <td className="p-4 text-muted-foreground">Avatar dimension scale.</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-mono text-primary font-semibold">status</td>
                      <td className="p-4 font-mono text-xs">"online" | "offline" | "away" | "busy"</td>
                      <td className="p-4 font-mono text-xs">undefined</td>
                      <td className="p-4 text-muted-foreground">Status indicator dot color tone.</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-mono text-primary font-semibold">shape</td>
                      <td className="p-4 font-mono text-xs">"circle" | "square"</td>
                      <td className="p-4 font-mono text-xs">"circle"</td>
                      <td className="p-4 text-muted-foreground">Rounded geometry of the avatar.</td>
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

export default AvatarDocPage;
