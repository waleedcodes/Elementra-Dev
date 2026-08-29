"use client";

import React, { useState, useRef } from "react";
import { Copy, PenTool, Sparkles, Trash2, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
  ReactSignature,
  CompactSignature,
  FormSignature,
} from "@/src/components/ui/signature";
import { PlaygroundStage3D } from "@/components/DocsComp/playground-stage-3d";
import { SpotlightCard } from "@/components/DocsComp/spotlight-card";

const SignatureDocPage = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [penColor, setPenColor] = useState("#6366f1");
  const [strokeWidth, setStrokeWidth] = useState(2.5);
  const [mounted, setMounted] = useState(false);
  const sigRef = useRef(null);

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
      title: "Interactive Canvas Signature",
      description: "Smooth vector signature pad with stroke configuration and export capabilities.",
      code: `import { ReactSignature } from "@/components/ui/react-signature";

export default function BasicSignature() {
  return (
    <ReactSignature
      penColor="#6366f1"
      strokeWidth={2.5}
      width={480}
      height={220}
      className="rounded-2xl border border-border shadow-lg"
    />
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
            <PenTool className="h-6 w-6" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">Signature</h1>
        </div>
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
          An interactive vector signature canvas with pressure curve smoothing, color and stroke customization, and SVG/PNG exports.
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
                    <code>npm i elementra-ui @uiw/react-signature</code>
                  </pre>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="absolute right-1 top-1 h-7 w-7"
                    onClick={() => handleCopy("npm i elementra-ui @uiw/react-signature")}
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
                    <code>npx elementra-ui add react-signature</code>
                  </pre>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="absolute right-1 top-1 h-7 w-7"
                    onClick={() => handleCopy("npx elementra-ui add react-signature")}
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

                {/* Ink Color Picker */}
                <div className="flex items-center gap-1.5 p-1 rounded-xl bg-muted/60 border border-border">
                  {["#6366f1", "#06b6d4", "#10b981", "#f43f5e", "#ffffff"].map((color) => (
                    <button
                      key={color}
                      type="button"
                      onClick={() => setPenColor(color)}
                      style={{ backgroundColor: color }}
                      className={`h-5 w-5 rounded-full border border-border transition-all ${
                        penColor === color ? "ring-2 ring-primary ring-offset-2 scale-110" : ""
                      }`}
                    />
                  ))}
                </div>
              </div>

              <PlaygroundStage3D code={codeExamples[0].code} defaultBackdrop="grid">
                <div className="p-4 flex flex-col items-center">
                  <ReactSignature
                    ref={sigRef}
                    penColor={penColor}
                    strokeWidth={strokeWidth}
                    width={440}
                    height={200}
                    className="rounded-2xl border border-border bg-card/90 shadow-xl"
                  />
                  <div className="flex items-center gap-3 mt-4">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => {
                        sigRef.current?.clear?.();
                        toast.info("Canvas cleared");
                      }}
                      className="flex items-center gap-1.5"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                      Clear
                    </Button>
                    <Button
                      size="sm"
                      onClick={() => toast.success("Signature captured successfully!")}
                      className="flex items-center gap-1.5"
                    >
                      <Download className="h-3.5 w-3.5" />
                      Export Signature
                    </Button>
                  </div>
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
                <h3 className="font-bold text-foreground">ReactSignature Props</h3>
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
                      <td className="p-4 font-mono text-primary font-semibold">penColor</td>
                      <td className="p-4 font-mono text-xs">string</td>
                      <td className="p-4 font-mono text-xs">"#000000"</td>
                      <td className="p-4 text-muted-foreground">Ink stroke color.</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-mono text-primary font-semibold">strokeWidth</td>
                      <td className="p-4 font-mono text-xs">number</td>
                      <td className="p-4 font-mono text-xs">2</td>
                      <td className="p-4 text-muted-foreground">Base line thickness in pixels.</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-mono text-primary font-semibold">width / height</td>
                      <td className="p-4 font-mono text-xs">number</td>
                      <td className="p-4 font-mono text-xs">400 / 200</td>
                      <td className="p-4 text-muted-foreground">Dimensions of the signature canvas.</td>
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

export default SignatureDocPage;
