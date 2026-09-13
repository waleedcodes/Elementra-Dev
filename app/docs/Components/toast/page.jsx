"use client";

import React, { useState } from "react";
import {
  Copy,
  Bell,
  Sparkles,
  CheckCircle,
  AlertTriangle,
  Info,
  XCircle,
  RefreshCw,
  Undo2,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { PlaygroundStage3D } from "@/components/DocsComp/playground-stage-3d";
import { SpotlightCard } from "@/components/DocsComp/spotlight-card";

const ToastDocPage = () => {
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
      id: "toast-variants",
      title: "1. Core Toast Status Types",
      description: "Trigger real-time success, error, warning, and info toast notifications.",
      preview: (
        <div className="flex flex-wrap items-center justify-center gap-3 p-6 bg-card/60 rounded-2xl border border-border w-full max-w-md mx-auto">
          <Button
            variant="success"
            className="flex items-center gap-2 shadow-md"
            onClick={() =>
              toast.success("Event created successfully!", {
                description: "Monday, October 24 at 9:00 AM",
              })
            }
          >
            <CheckCircle className="h-4 w-4" /> Success Toast
          </Button>

          <Button
            variant="danger"
            className="flex items-center gap-2 shadow-md"
            onClick={() =>
              toast.error("Failed to delete repository", {
                description: "You do not have write access to this organization.",
              })
            }
          >
            <XCircle className="h-4 w-4" /> Error Toast
          </Button>

          <Button
            variant="warning"
            className="flex items-center gap-2 shadow-md"
            onClick={() =>
              toast.warning("Storage limit nearing capacity", {
                description: "92% of your 50GB storage quota is used.",
              })
            }
          >
            <AlertTriangle className="h-4 w-4" /> Warning Toast
          </Button>

          <Button
            variant="info"
            className="flex items-center gap-2 shadow-md"
            onClick={() =>
              toast.info("New update available", {
                description: "Version 0.2.0 is ready to install.",
              })
            }
          >
            <Info className="h-4 w-4" /> Info Toast
          </Button>
        </div>
      ),
      code: `import { toast } from "sonner";
import { Button } from "@/components/ui/button";

export default function ToastVariants() {
  return (
    <div className="flex flex-wrap gap-3">
      <Button onClick={() => toast.success("Event created successfully!")}>
        Success Toast
      </Button>
      <Button onClick={() => toast.error("Failed to delete repository")}>
        Error Toast
      </Button>
      <Button onClick={() => toast.warning("Storage quota 92% full")}>
        Warning Toast
      </Button>
      <Button onClick={() => toast.info("New update ready")}>
        Info Toast
      </Button>
    </div>
  );
}`,
    },
    {
      id: "toast-actions",
      title: "2. Toast with Action Buttons & Undo",
      description: "Interactive actionable toast prompts allowing instant undo or link opening.",
      preview: (
        <div className="flex flex-wrap items-center justify-center gap-3 p-6 bg-card/60 rounded-2xl border border-border w-full max-w-md mx-auto">
          <Button
            variant="default"
            className="flex items-center gap-2 shadow-md"
            onClick={() =>
              toast("Message archived", {
                description: "Moved to archive folder.",
                action: {
                  label: "Undo",
                  onClick: () => toast.success("Message restored to inbox"),
                },
              })
            }
          >
            <Undo2 className="h-4 w-4" /> Trigger Undo Toast
          </Button>

          <Button
            variant="gradient"
            className="flex items-center gap-2 shadow-md"
            onClick={() => {
              const promise = () =>
                new Promise((resolve) =>
                  setTimeout(() => resolve({ name: "Release Bundle" }), 2000)
                );

              toast.promise(promise, {
                loading: "Building production assets...",
                success: (data) => `${data.name} generated successfully!`,
                error: "Build failed.",
              });
            }}
          >
            <RefreshCw className="h-4 w-4" /> Async Promise Toast
          </Button>
        </div>
      ),
      code: `import { toast } from "sonner";
import { Button } from "@/components/ui/button";

export default function ActionToasts() {
  const handleUndo = () => {
    toast("Item removed", {
      description: "The item has been deleted.",
      action: {
        label: "Undo",
        onClick: () => toast.success("Restored!"),
      },
    });
  };

  const handleAsync = () => {
    toast.promise(fetchData(), {
      loading: "Processing data...",
      success: "Data loaded successfully!",
      error: "Error loading data.",
    });
  };

  return (
    <div className="flex gap-3">
      <Button onClick={handleUndo}>Action with Undo</Button>
      <Button onClick={handleAsync}>Promise Toast</Button>
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
            <Bell className="h-6 w-6" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">Toast</h1>
        </div>
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
          A succinct message that is displayed temporarily to provide feedback on an action with promise lifecycle support.
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
                    <code>npm i sonner</code>
                  </pre>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="absolute right-1 top-1 h-7 w-7"
                    onClick={() => handleCopy("npm i sonner")}
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
                    <code>npx elementra-ui add toast</code>
                  </pre>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="absolute right-1 top-1 h-7 w-7"
                    onClick={() => handleCopy("npx elementra-ui add toast")}
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
                  <Button
                    variant="default"
                    className="shadow-xl"
                    onClick={() =>
                      toast.success("Successfully deployed to production!", {
                        description: "Commit 9b8c2f1 deployed to Edge network.",
                        action: {
                          label: "View Logs",
                          onClick: () => toast.info("Opening Edge Logs..."),
                        },
                      })
                    }
                  >
                    <Send className="h-4 w-4 mr-2" /> Trigger Interactive Toast
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
              <h2 className="text-2xl font-bold text-foreground">Complete Toast Showcase</h2>
              <p className="text-sm text-muted-foreground">
                Click any of the buttons below to test real-time notification popups and async promise toasts.
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
                <h3 className="font-bold text-foreground">Toast Methods & Props</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="bg-card text-muted-foreground border-b border-border">
                    <tr>
                      <th className="p-4 font-medium">Method / Option</th>
                      <th className="p-4 font-medium">Type</th>
                      <th className="p-4 font-medium">Description</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr>
                      <td className="p-4 font-mono text-primary font-semibold">toast.success()</td>
                      <td className="p-4 font-mono text-xs">{"(message: string, options?: ToastOptions) => void"}</td>
                      <td className="p-4 text-muted-foreground">Renders a success toast with green checkmark.</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-mono text-primary font-semibold">toast.error()</td>
                      <td className="p-4 font-mono text-xs">{"(message: string, options?: ToastOptions) => void"}</td>
                      <td className="p-4 text-muted-foreground">Renders an error toast with destructive alert styling.</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-mono text-primary font-semibold">toast.promise()</td>
                      <td className="p-4 font-mono text-xs">{"(promise: Promise<T>, options: PromiseOptions) => void"}</td>
                      <td className="p-4 text-muted-foreground">Tracks an async operation with loading/success/error states.</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-mono text-primary font-semibold">action</td>
                      <td className="p-4 font-mono text-xs">{"{ label: string, onClick: () => void }"}</td>
                      <td className="p-4 text-muted-foreground">Action button rendered inside the toast.</td>
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

export default ToastDocPage;
