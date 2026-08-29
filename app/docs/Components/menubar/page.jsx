"use client";

import React, { useState } from "react";
import { Copy, Menu, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarShortcut,
} from "@/src/components/ui/menubar";
import { PlaygroundStage3D } from "@/components/DocsComp/playground-stage-3d";
import { SpotlightCard } from "@/components/DocsComp/spotlight-card";

const MenubarDocPage = () => {
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
      title: "Desktop Application Menu Bar",
      description: "Horizontal menu bar with keyboard shortcuts, submenu cascades, and separators.",
      code: `import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarShortcut,
} from "@/components/ui/menubar";

export default function AppMenubar() {
  return (
    <Menubar className="rounded-xl border border-border bg-card p-1">
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            New Tab <MenubarShortcut>⌘T</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            New Window <MenubarShortcut>⌘N</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            Save <MenubarShortcut>⌘S</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
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
          <div className="p-2.5 rounded-2xl bg-orange-500/10 text-orange-500 border border-orange-500/20 shadow-sm">
            <Menu className="h-6 w-6" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">Menubar</h1>
        </div>
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
          A desktop-style horizontal menu bar with dropdown cascades, keyboard shortcuts (⌘T, ⌘S), and accessibility triggers.
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
                    <code>npx elementra-ui add menubar</code>
                  </pre>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="absolute right-1 top-1 h-7 w-7"
                    onClick={() => handleCopy("npx elementra-ui add menubar")}
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
                <div className="p-8 flex items-center justify-center">
                  <Menubar className="rounded-2xl border border-border bg-card/90 backdrop-blur-md p-1.5 shadow-xl">
                    <MenubarMenu>
                      <MenubarTrigger className="font-semibold text-sm">File</MenubarTrigger>
                      <MenubarContent>
                        <MenubarItem onClick={() => toast.info("New Tab created")}>
                          New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                        </MenubarItem>
                        <MenubarItem onClick={() => toast.info("New Window opened")}>
                          New Window <MenubarShortcut>⌘N</MenubarShortcut>
                        </MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem onClick={() => toast.success("Project Saved")}>
                          Save <MenubarShortcut>⌘S</MenubarShortcut>
                        </MenubarItem>
                      </MenubarContent>
                    </MenubarMenu>

                    <MenubarMenu>
                      <MenubarTrigger className="font-semibold text-sm">Edit</MenubarTrigger>
                      <MenubarContent>
                        <MenubarItem onClick={() => toast.info("Undo")}>
                          Undo <MenubarShortcut>⌘Z</MenubarShortcut>
                        </MenubarItem>
                        <MenubarItem onClick={() => toast.info("Redo")}>
                          Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
                        </MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem onClick={() => toast.info("Cut")}>
                          Cut <MenubarShortcut>⌘X</MenubarShortcut>
                        </MenubarItem>
                        <MenubarItem onClick={() => toast.info("Copy")}>
                          Copy <MenubarShortcut>⌘C</MenubarShortcut>
                        </MenubarItem>
                      </MenubarContent>
                    </MenubarMenu>

                    <MenubarMenu>
                      <MenubarTrigger className="font-semibold text-sm">View</MenubarTrigger>
                      <MenubarContent>
                        <MenubarItem onClick={() => toast.info("Zoom In")}>
                          Zoom In <MenubarShortcut>⌘+</MenubarShortcut>
                        </MenubarItem>
                        <MenubarItem onClick={() => toast.info("Zoom Out")}>
                          Zoom Out <MenubarShortcut>⌘-</MenubarShortcut>
                        </MenubarItem>
                      </MenubarContent>
                    </MenubarMenu>
                  </Menubar>
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
                <h3 className="font-bold text-foreground">Menubar Subcomponents</h3>
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
                      <td className="p-4 font-mono text-primary font-semibold">Menubar</td>
                      <td className="p-4 text-xs font-mono">Root Bar</td>
                      <td className="p-4 text-muted-foreground">The root container holding top-level menu categories.</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-mono text-primary font-semibold">MenubarTrigger</td>
                      <td className="p-4 text-xs font-mono">Header Button</td>
                      <td className="p-4 text-muted-foreground">The button that activates the dropdown overlay.</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-mono text-primary font-semibold">MenubarContent</td>
                      <td className="p-4 text-xs font-mono">Dropdown Card</td>
                      <td className="p-4 text-muted-foreground">Floating overlay containing actions and shortcuts.</td>
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

export default MenubarDocPage;
