"use client";

import React, { useState } from "react";
import {
  Copy,
  Layers,
  Sparkles,
  User,
  Key,
  Bell,
  Shield,
  Code,
  Eye,
  Sliders,
  Palette,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/src/components/ui/tabs";
import { PlaygroundStage3D } from "@/components/DocsComp/playground-stage-3d";
import { SpotlightCard } from "@/components/DocsComp/spotlight-card";

const TabsDocPage = () => {
  const [activeDocTab, setActiveDocTab] = useState("overview");
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
      id: "settings-tabs",
      title: "1. Account & Security Tabbed Panel",
      description: "Tab container with icons, active highlight, and distinct content views.",
      preview: (
        <div className="flex justify-center p-6 bg-card/60 rounded-2xl border border-border">
          <Tabs defaultValue="account" className="w-full max-w-md">
            <TabsList className="grid w-full grid-cols-3 bg-muted/80 p-1 rounded-xl">
              <TabsTrigger value="account" className="flex items-center gap-1.5 text-xs font-semibold">
                <User className="h-3.5 w-3.5" />
                Account
              </TabsTrigger>
              <TabsTrigger value="security" className="flex items-center gap-1.5 text-xs font-semibold">
                <Shield className="h-3.5 w-3.5" />
                Security
              </TabsTrigger>
              <TabsTrigger value="notifications" className="flex items-center gap-1.5 text-xs font-semibold">
                <Bell className="h-3.5 w-3.5" />
                Alerts
              </TabsTrigger>
            </TabsList>
            <TabsContent value="account" className="mt-4 p-5 rounded-2xl border border-border bg-card/90 shadow-md space-y-2">
              <h4 className="font-bold text-sm text-foreground">Account Profile</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Customize your display handle, organization domain, and email address.
              </p>
            </TabsContent>
            <TabsContent value="security" className="mt-4 p-5 rounded-2xl border border-border bg-card/90 shadow-md space-y-2">
              <h4 className="font-bold text-sm text-foreground">Two-Factor Authentication</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Hardware security keys (FIDO2) and authenticator apps are active.
              </p>
            </TabsContent>
            <TabsContent value="notifications" className="mt-4 p-5 rounded-2xl border border-border bg-card/90 shadow-md space-y-2">
              <h4 className="font-bold text-sm text-foreground">Notification Preferences</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Configure immediate email digests and critical webhook pings.
              </p>
            </TabsContent>
          </Tabs>
        </div>
      ),
      code: `import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";
import { User, Shield, Bell } from "lucide-react";

export default function SettingsTabs() {
  return (
    <Tabs defaultValue="account" className="w-full max-w-md">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="account">
          <User className="h-3.5 w-3.5 mr-1.5" /> Account
        </TabsTrigger>
        <TabsTrigger value="security">
          <Shield className="h-3.5 w-3.5 mr-1.5" /> Security
        </TabsTrigger>
        <TabsTrigger value="notifications">
          <Bell className="h-3.5 w-3.5 mr-1.5" /> Alerts
        </TabsTrigger>
      </TabsList>

      <TabsContent value="account" className="p-4 border rounded-xl">
        <p className="text-sm font-bold">Account Profile</p>
      </TabsContent>
      <TabsContent value="security" className="p-4 border rounded-xl">
        <p className="text-sm font-bold">Security Settings</p>
      </TabsContent>
    </Tabs>
  );
}`,
    },
    {
      id: "code-preview-tabs",
      title: "2. Code / Preview Switcher Tabs",
      description: "Two-state tabs commonly used in documentation platforms to toggle between live preview and code.",
      preview: (
        <div className="flex justify-center p-6 bg-card/60 rounded-2xl border border-border">
          <Tabs defaultValue="preview" className="w-full max-w-md">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-muted-foreground">COMPONENT VIEWER</span>
              <TabsList className="bg-muted/80 p-1 rounded-xl">
                <TabsTrigger value="preview" className="flex items-center gap-1.5 text-xs font-semibold">
                  <Eye className="h-3.5 w-3.5" />
                  Preview
                </TabsTrigger>
                <TabsTrigger value="code" className="flex items-center gap-1.5 text-xs font-semibold">
                  <Code className="h-3.5 w-3.5" />
                  Code
                </TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="preview" className="p-8 rounded-2xl border border-border bg-card/90 flex justify-center shadow-md">
              <Button variant="gradient" className="shadow-lg shadow-purple-500/25">
                <Sparkles className="h-4 w-4 mr-2" /> Live Component
              </Button>
            </TabsContent>
            <TabsContent value="code" className="p-4 rounded-2xl border border-border bg-zinc-950 text-zinc-100 font-mono text-xs shadow-inner">
              <code>{'<Button variant="gradient">Live Component</Button>'}</code>
            </TabsContent>
          </Tabs>
        </div>
      ),
      code: `import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

export default function PreviewCodeTabs() {
  return (
    <Tabs defaultValue="preview">
      <TabsList>
        <TabsTrigger value="preview">Preview</TabsTrigger>
        <TabsTrigger value="code">Code</TabsTrigger>
      </TabsList>
      <TabsContent value="preview" className="p-6 border rounded-xl">
        <Button variant="gradient">Live Component</Button>
      </TabsContent>
      <TabsContent value="code" className="p-4 bg-zinc-950 text-white font-mono text-xs rounded-xl">
        <code>{'<Button variant="gradient">Live Component</Button>'}</code>
      </TabsContent>
    </Tabs>
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
            <Layers className="h-6 w-6" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">Tabs</h1>
        </div>
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
          A set of layered content sections known as tab panels, displayed one at a time with keyboard accessibility.
        </p>
      </div>

      {/* Tabs */}
      <div className="w-full">
        <div className="flex border-b border-border mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveDocTab(tab.id)}
              className={`px-4 py-2 font-semibold text-sm border-b-2 transition-colors ${
                activeDocTab === tab.id
                  ? "border-primary text-foreground font-bold"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {activeDocTab === "overview" && (
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
                    <code>npx elementra-ui add tabs</code>
                  </pre>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="absolute right-1 top-1 h-7 w-7"
                    onClick={() => handleCopy("npx elementra-ui add tabs")}
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
                <div className="p-4 w-full max-w-md">
                  <Tabs defaultValue="account" className="w-full">
                    <TabsList className="grid w-full grid-cols-3 bg-muted/80 p-1 rounded-xl">
                      <TabsTrigger value="account" className="flex items-center gap-1.5 text-xs font-semibold">
                        <User className="h-3.5 w-3.5" />
                        Account
                      </TabsTrigger>
                      <TabsTrigger value="security" className="flex items-center gap-1.5 text-xs font-semibold">
                        <Shield className="h-3.5 w-3.5" />
                        Security
                      </TabsTrigger>
                      <TabsTrigger value="notifications" className="flex items-center gap-1.5 text-xs font-semibold">
                        <Bell className="h-3.5 w-3.5" />
                        Alerts
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent value="account" className="mt-4 p-5 rounded-2xl border border-border bg-card/90 shadow-lg space-y-2">
                      <h4 className="font-bold text-sm text-foreground">Account Profile</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        Customize your username, billing organization, and contact email address.
                      </p>
                    </TabsContent>
                  </Tabs>
                </div>
              </PlaygroundStage3D>
            </section>
          </div>
        )}

        {/* Examples Tab */}
        {activeDocTab === "examples" && (
          <div className="space-y-12">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-foreground">Complete Tabs Showcase</h2>
              <p className="text-sm text-muted-foreground">
                Interact with tabbed profile cards and preview/code toggle switches below.
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
        {activeDocTab === "api" && (
          <div className="space-y-8">
            <div className="rounded-2xl border border-border overflow-hidden bg-card shadow-sm">
              <div className="p-4 bg-muted/60 border-b border-border">
                <h3 className="font-bold text-foreground">Tabs Props</h3>
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
                      <td className="p-4 font-mono text-primary font-semibold">defaultValue</td>
                      <td className="p-4 font-mono text-xs">string</td>
                      <td className="p-4 font-mono text-xs">-</td>
                      <td className="p-4 text-muted-foreground">The initial active tab value.</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-mono text-primary font-semibold">value</td>
                      <td className="p-4 font-mono text-xs">string</td>
                      <td className="p-4 font-mono text-xs">undefined</td>
                      <td className="p-4 text-muted-foreground">Controlled active tab state.</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-mono text-primary font-semibold">onValueChange</td>
                      <td className="p-4 font-mono text-xs">{"(value: string) => void"}</td>
                      <td className="p-4 font-mono text-xs">-</td>
                      <td className="p-4 text-muted-foreground">Callback triggered when tab selection changes.</td>
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

export default TabsDocPage;
