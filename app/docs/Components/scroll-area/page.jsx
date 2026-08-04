"use client";
import React from "react";
import { Copy, CopyIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const ScrollAreaDocPage = () => {
  const tags = Array.from({ length: 30 }).map(
    (_, i, a) => `v1.2.0-beta.${a.length - i}`
  );

  const codeExample = `import { ScrollArea } from "@/components/ui/scroll-area";

export default function ScrollAreaDemo() {
  return (
    <ScrollArea className="h-72 w-48 rounded-md border border-border p-4">
      <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
      {tags.map((tag) => (
        <div key={tag} className="text-sm py-1 border-b border-border/50 last:border-0">
          {tag}
        </div>
      ))}
    </ScrollArea>
  );
}`;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 text-foreground">Scroll Area</h1>
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
          Custom scrollable content viewport container with cross-browser scrollbar hiding.
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
            <code>npx elementra-ui add scroll-area</code>
          </div>
        </section>

        {/* Step 3: Preview */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-semibold flex items-center gap-3 text-foreground">
            <span className="flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-primary text-primary-foreground text-sm font-bold">3</span>
            Interactive Preview
          </h2>

          <div className="bg-card border border-border rounded-xl p-6 sm:p-8 space-y-6">
            <div className="h-64 w-64 mx-auto rounded-xl border border-border bg-background p-4 overflow-y-auto select-none space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">Release Tags</h4>
              {tags.map((tag) => (
                <div key={tag} className="text-sm py-1.5 px-2 rounded hover:bg-muted text-foreground transition-colors font-mono">
                  {tag}
                </div>
              ))}
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

export default ScrollAreaDocPage;
