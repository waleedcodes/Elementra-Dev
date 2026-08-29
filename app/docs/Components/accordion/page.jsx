"use client";

import React, { useState } from "react";
import {
  Copy,
  ChevronUp,
  Sparkles,
  HelpCircle,
  Shield,
  Zap,
  Layers,
  FileCode,
  CreditCard,
  Bell,
  Lock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/src/components/ui/accordion";
import { PlaygroundStage3D } from "@/components/DocsComp/playground-stage-3d";
import { SpotlightCard } from "@/components/DocsComp/spotlight-card";

const AccordionDocPage = () => {
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
      id: "single-collapsible",
      title: "1. Single Collapsible FAQ Accordion",
      description: "Allows opening only one section at a time, automatically closing others with fluid height transition.",
      preview: (
        <div className="flex justify-center p-6 bg-card/60 rounded-2xl border border-border">
          <Accordion type="single" collapsible defaultValue="faq-1" className="w-full max-w-lg space-y-2">
            <AccordionItem value="faq-1" className="border border-border rounded-2xl px-4 bg-card/90 shadow-sm">
              <AccordionTrigger className="text-sm font-bold text-foreground">
                How does Elementra UI differ from shadcn/ui?
              </AccordionTrigger>
              <AccordionContent className="text-xs text-muted-foreground leading-relaxed">
                Elementra UI provides 50+ animated, accessible components with built-in 3D stage previews, micro-animations, and full copy-paste CLI integration.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="faq-2" className="border border-border rounded-2xl px-4 bg-card/90 shadow-sm">
              <AccordionTrigger className="text-sm font-bold text-foreground">
                Is TypeScript supported?
              </AccordionTrigger>
              <AccordionContent className="text-xs text-muted-foreground leading-relaxed">
                Yes! Every component is 100% typed with full prop autocompletion in VS Code and Next.js.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      ),
      code: `import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export default function SingleAccordion() {
  return (
    <Accordion type="single" collapsible defaultValue="faq-1">
      <AccordionItem value="faq-1">
        <AccordionTrigger>How does Elementra UI differ?</AccordionTrigger>
        <AccordionContent>50+ animated components with 3D previews.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="faq-2">
        <AccordionTrigger>Is TypeScript supported?</AccordionTrigger>
        <AccordionContent>100% typed with prop autocompletion.</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}`,
    },
    {
      id: "multiple-expandable",
      title: "2. Multiple Simultaneously Expandable (type='multiple')",
      description: "Allows users to expand and keep multiple sections open at the same time.",
      preview: (
        <div className="flex justify-center p-6 bg-card/60 rounded-2xl border border-border">
          <Accordion type="multiple" defaultValue={["sec-1", "sec-2"]} className="w-full max-w-lg space-y-2">
            <AccordionItem value="sec-1" className="border border-border rounded-2xl px-4 bg-card/90 shadow-sm">
              <AccordionTrigger className="text-sm font-bold text-foreground flex items-center gap-2">
                <Lock className="h-4 w-4 text-primary" />
                Security & Authentication
              </AccordionTrigger>
              <AccordionContent className="text-xs text-muted-foreground leading-relaxed">
                Configure Two-Factor Authentication (2FA) and OAuth single sign-on providers.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="sec-2" className="border border-border rounded-2xl px-4 bg-card/90 shadow-sm">
              <AccordionTrigger className="text-sm font-bold text-foreground flex items-center gap-2">
                <Bell className="h-4 w-4 text-emerald-500" />
                Notification Routing
              </AccordionTrigger>
              <AccordionContent className="text-xs text-muted-foreground leading-relaxed">
                Dispatch webhook alerts to Discord, Slack, and Telegram channels in real-time.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      ),
      code: `import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Lock, Bell } from "lucide-react";

export default function MultipleAccordion() {
  return (
    <Accordion type="multiple" defaultValue={["sec-1", "sec-2"]}>
      <AccordionItem value="sec-1">
        <AccordionTrigger>
          <Lock className="h-4 w-4 mr-2" /> Security & Auth
        </AccordionTrigger>
        <AccordionContent>Configure Two-Factor Authentication.</AccordionContent>
      </AccordionItem>

      <AccordionItem value="sec-2">
        <AccordionTrigger>
          <Bell className="h-4 w-4 mr-2" /> Notification Routing
        </AccordionTrigger>
        <AccordionContent>Dispatch webhook alerts.</AccordionContent>
      </AccordionItem>
    </Accordion>
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
          <div className="p-2.5 rounded-2xl bg-purple-500/10 text-purple-500 border border-purple-500/20 shadow-sm">
            <ChevronUp className="h-6 w-6" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">Accordion</h1>
        </div>
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
          A vertically stacked set of interactive headings that each reveal a section of content with fluid collapsible animations.
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
                    <code>npx elementra-ui add accordion</code>
                  </pre>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="absolute right-1 top-1 h-7 w-7"
                    onClick={() => handleCopy("npx elementra-ui add accordion")}
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
                  <Accordion type="single" collapsible defaultValue="item-1" className="w-full space-y-2">
                    <AccordionItem value="item-1" className="border border-border rounded-2xl px-4 bg-card/90 shadow-sm">
                      <AccordionTrigger className="text-sm font-bold text-foreground">
                        Is it accessible out of the box?
                      </AccordionTrigger>
                      <AccordionContent className="text-xs text-muted-foreground leading-relaxed">
                        Yes! It complies 100% with WAI-ARIA disclosure patterns, supporting arrow keys, Home/End navigation, and screen reader announcements.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2" className="border border-border rounded-2xl px-4 bg-card/90 shadow-sm">
                      <AccordionTrigger className="text-sm font-bold text-foreground">
                        Can multiple items expand simultaneously?
                      </AccordionTrigger>
                      <AccordionContent className="text-xs text-muted-foreground leading-relaxed">
                        Yes. Simply set <code className="text-primary font-mono">type="multiple"</code> to allow multiple accordion sections to remain open at once.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </PlaygroundStage3D>
            </section>
          </div>
        )}

        {/* Examples Tab */}
        {activeTab === "examples" && (
          <div className="space-y-12">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-foreground">Complete Accordion Showcase</h2>
              <p className="text-sm text-muted-foreground">
                Interact with single collapsible FAQ accordions and multi-expandable settings panels below.
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
                <h3 className="font-bold text-foreground">Accordion Props</h3>
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
                      <td className="p-4 font-mono text-primary font-semibold">type</td>
                      <td className="p-4 font-mono text-xs">"single" | "multiple"</td>
                      <td className="p-4 font-mono text-xs">"single"</td>
                      <td className="p-4 text-muted-foreground">Determines whether one or multiple items can open simultaneously.</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-mono text-primary font-semibold">collapsible</td>
                      <td className="p-4 font-mono text-xs">boolean</td>
                      <td className="p-4 font-mono text-xs">false</td>
                      <td className="p-4 text-muted-foreground">Allows closing all accordion items in single mode.</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-mono text-primary font-semibold">defaultValue</td>
                      <td className="p-4 font-mono text-xs">string | string[]</td>
                      <td className="p-4 font-mono text-xs">-</td>
                      <td className="p-4 text-muted-foreground">The value of the item(s) to expand by default.</td>
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

export default AccordionDocPage;
