"use client";
import React from "react";
import { Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const ButtonPage = () => {
  const handleCopy = (text) => {
    if (text) {
      navigator.clipboard.writeText(text);
    }
    toast("Copied to clipboard", { type: "success" });
  };

  const codeExample = `import { Button } from "elementra-ui"

export default function Example() {
  return (
    <div>
      <Button variant="primary">Primary Button</Button>
      <Button variant="secondary">Secondary Button</Button>
      <Button variant="outline">Outline Button</Button>
      <Button variant="ghost">Ghost Button</Button>
    </div>
  )
}`;

  return (
    <div className="">
      {/* Header */}
      <h1 className="text-4xl font-semibold mb-4">Button</h1>
      <p className="text-muted-foreground mb-8">
        Displays a button or a component that looks like a button.
      </p>

      {/* Content Sections */}
      <div className="space-y-12">
        {/* Installation Section */}
        <section>
          <h2 className="text-xl font-medium flex items-center gap-2 mb-4">
            <span className="text-muted-foreground">1</span>
            Installation
          </h2>

          <div className="relative mb-4">
            <div className="bg-gray-100 rounded-lg p-4 font-mono text-sm text-black">
              <div className="flex items-center gap-2">
                <span>npm i elementra-ui</span>
              </div>
            </div>
            <Button
              size="sm"
              variant="ghost"
              className="absolute top-3 right-3 h-6 w-6 p-0 text-muted-foreground"
              onClick={() => handleCopy("npm i elementra-ui")}
            >
              <Copy className="h-4 w-4" />
            </Button>
          </div>
        </section>

        {/* Usage Section */}
        <section>
          <h2 className="text-xl font-medium flex items-center gap-2 mb-4">
            <span className="text-muted-foreground">2</span>
            Usage
          </h2>

          <p className="mb-4">
            Import and use the Button component in your project:
          </p>

          <div className="relative">
            <div className="bg-gray-100 rounded-lg p-4 font-mono text-sm text-black">
              <pre className="space-y-1">{codeExample}</pre>
            </div>
            <Button
              size="sm"
              variant="ghost"
              className="absolute top-3 right-3 h-6 w-6 p-0 text-muted-foreground"
              onClick={() => handleCopy(codeExample)}
            >
              <Copy className="h-4 w-4" />
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ButtonPage;