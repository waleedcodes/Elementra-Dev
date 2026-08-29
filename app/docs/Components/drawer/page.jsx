"use client";

import React, { useState } from "react";
import { Copy, PanelBottom, Sparkles, ShoppingBag, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
} from "@/src/components/ui/drawer";
import { PlaygroundStage3D } from "@/components/DocsComp/playground-stage-3d";
import { SpotlightCard } from "@/components/DocsComp/spotlight-card";

const DrawerDocPage = () => {
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
    { id: "examples", label: "Examples" },
    { id: "api", label: "API Reference" },
  ];

  const codeExamples = [
    {
      title: "Interactive Bottom Sheet Drawer",
      description: "Mobile-first sliding bottom sheet drawer for configuration panels.",
      code: `import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";

export default function BottomDrawer() {
  return (
    <Drawer position="bottom">
      <DrawerTrigger asChild>
        <Button>Open Bottom Sheet</Button>
      </DrawerTrigger>
      <DrawerContent position="bottom">
        <DrawerHeader>
          <DrawerTitle>Configuration Settings</DrawerTitle>
          <DrawerDescription>Adjust telemetry and notification preferences.</DrawerDescription>
        </DrawerHeader>
        <div className="p-4 space-y-3">
          <div className="p-3 rounded-lg border border-border bg-card text-sm">
            Push Notifications Enabled
          </div>
        </div>
        <DrawerFooter>
          <Button onClick={() => alert("Saved")}>Save Changes</Button>
          <DrawerClose asChild>
            <Button variant="outline">Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
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
            <PanelBottom className="h-6 w-6" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">Drawer</h1>
        </div>
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
          A touch-friendly sliding drawer panel supporting bottom-sheet and side orientations with accessible modal overlay.
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
                    <code>npx elementra-ui add drawer</code>
                  </pre>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="absolute right-1 top-1 h-7 w-7"
                    onClick={() => handleCopy("npx elementra-ui add drawer")}
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
                <div className="flex flex-wrap items-center justify-center gap-4 p-6">
                  {/* Bottom Sheet Drawer */}
                  <Drawer position="bottom">
                    <DrawerTrigger asChild>
                      <Button className="shadow-lg shadow-primary/20">
                        Open Bottom Sheet
                      </Button>
                    </DrawerTrigger>
                    <DrawerContent position="bottom">
                      <DrawerHeader>
                        <DrawerTitle>Interactive Bottom Sheet</DrawerTitle>
                        <DrawerDescription>
                          Slide-up overlay panel with spring physics and auto-focus lock.
                        </DrawerDescription>
                      </DrawerHeader>
                      <div className="p-4 space-y-2 text-sm">
                        <div className="p-3 rounded-xl border border-border bg-card flex justify-between items-center">
                          <span>Battery Health Optimization</span>
                          <span className="text-emerald-500 font-bold">Active</span>
                        </div>
                        <div className="p-3 rounded-xl border border-border bg-card flex justify-between items-center">
                          <span>Sync Mode</span>
                          <span className="text-primary font-bold">Ultra-Low Latency</span>
                        </div>
                      </div>
                      <DrawerFooter>
                        <Button onClick={() => toast.success("Preferences saved")}>Save Changes</Button>
                        <DrawerClose asChild>
                          <Button variant="outline">Close Sheet</Button>
                        </DrawerClose>
                      </DrawerFooter>
                    </DrawerContent>
                  </Drawer>

                  {/* Right Side Cart Drawer */}
                  <Drawer position="right">
                    <DrawerTrigger asChild>
                      <Button variant="outline" className="flex items-center gap-2">
                        <ShoppingBag className="h-4 w-4" />
                        Cart Drawer (Right)
                      </Button>
                    </DrawerTrigger>
                    <DrawerContent position="right" className="max-w-sm">
                      <DrawerHeader>
                        <DrawerTitle>Your Cart (2 items)</DrawerTitle>
                        <DrawerDescription>Review your items before checkout.</DrawerDescription>
                      </DrawerHeader>
                      <div className="p-4 space-y-3 flex-1 overflow-y-auto">
                        <div className="p-3 rounded-xl border border-border bg-card flex justify-between items-center">
                          <div>
                            <p className="font-semibold text-sm">Elementra Pro License</p>
                            <p className="text-xs text-muted-foreground">$99.00</p>
                          </div>
                          <span className="text-xs font-bold text-primary">x1</span>
                        </div>
                      </div>
                      <DrawerFooter>
                        <Button className="w-full flex items-center justify-center gap-2">
                          Checkout
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                        <DrawerClose asChild>
                          <Button variant="ghost" className="w-full">Continue Browsing</Button>
                        </DrawerClose>
                      </DrawerFooter>
                    </DrawerContent>
                  </Drawer>
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
                <h3 className="font-bold text-foreground">Drawer Props</h3>
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
                      <td className="p-4 font-mono text-primary font-semibold">position</td>
                      <td className="p-4 font-mono text-xs">"bottom" | "top" | "left" | "right"</td>
                      <td className="p-4 font-mono text-xs">"bottom"</td>
                      <td className="p-4 text-muted-foreground">The edge from which the drawer slides into view.</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-mono text-primary font-semibold">open</td>
                      <td className="p-4 font-mono text-xs">boolean</td>
                      <td className="p-4 font-mono text-xs">undefined</td>
                      <td className="p-4 text-muted-foreground">Controlled open state of the drawer.</td>
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

export default DrawerDocPage;
