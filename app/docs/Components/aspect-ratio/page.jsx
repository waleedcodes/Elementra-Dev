"use client";
import React, { useState } from "react";
import { Copy, CopyIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const AspectRatioDocPage = () => {
  const [activeRatio, setActiveRatio] = useState(16 / 9);

  const ratios = [
    { label: "16:9 (Landscape)", value: 16 / 9 },
    { label: "4:3 (Standard)", value: 4 / 3 },
    { label: "1:1 (Square)", value: 1 / 1 },
    { label: "21:9 (Ultrawide)", value: 21 / 9 },
  ];

  const codeExample = `import { AspectRatio } from "@/components/ui/aspect-ratio";

export default function AspectRatioDemo() {
  return (
    <div className="w-[450px]">
      <AspectRatio ratio={16 / 9} className="bg-muted rounded-lg overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
          alt="Photo by Drew Beamer"
          className="object-cover h-full w-full"
        />
      </AspectRatio>
    </div>
  );
}`;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 text-foreground">Aspect Ratio</h1>
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
          Displays content within a target ratio (16:9, 4:3, 1:1, 21:9) without layout shifting.
        </p>
      </div>

      <div className="space-y-8 sm:space-y-12">
        {/* Step 1 */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-semibold flex items-center gap-3 text-foreground">
            <span className="flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-primary text-primary-foreground text-sm font-bold">1</span>
            Installation
          </h2>
          <div className="bg-card border border-border rounded-lg p-4 font-mono text-sm overflow-x-auto text-foreground">
            <code>npm i elementra-ui</code>
          </div>
        </section>

        {/* Step 2 */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-semibold flex items-center gap-3 text-foreground">
            <span className="flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-primary text-primary-foreground text-sm font-bold">2</span>
            Add Component CLI
          </h2>
          <div className="bg-card border border-border rounded-lg p-4 font-mono text-sm overflow-x-auto text-foreground">
            <code>npx elementra-ui add aspect-ratio</code>
          </div>
        </section>

        {/* Step 3: Preview */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-semibold flex items-center gap-3 text-foreground">
            <span className="flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-primary text-primary-foreground text-sm font-bold">3</span>
            Interactive Preview
          </h2>

          <div className="bg-card border border-border rounded-xl p-6 sm:p-8 space-y-6">
            <div className="flex flex-wrap gap-2 mb-4">
              {ratios.map((item) => (
                <Button
                  key={item.label}
                  variant={activeRatio === item.value ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveRatio(item.value)}
                >
                  {item.label}
                </Button>
              ))}
            </div>

            <div className="max-w-md mx-auto">
              <div
                className="relative w-full overflow-hidden bg-muted rounded-xl border border-border transition-all duration-300"
                style={{ paddingBottom: `${(1 / activeRatio) * 100}%` }}
              >
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/20 via-card to-secondary/20 p-6 text-center">
                  <div>
                    <p className="text-sm font-bold text-foreground mb-1">Target Ratio Container</p>
                    <p className="text-xs text-muted-foreground font-mono">
                      ratio = {activeRatio.toFixed(2)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Step 4: Code */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground">Code Usage</h2>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                navigator.clipboard.writeText(codeExample);
                toast.success("Code copied to clipboard!");
              }}
              className="flex items-center gap-2"
            >
              <Copy className="h-4 w-4" />
              Copy Code
            </Button>
          </div>

          <div className="bg-card border border-border rounded-lg p-4 font-mono text-sm overflow-x-auto text-foreground">
            <pre>{codeExample}</pre>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AspectRatioDocPage;
