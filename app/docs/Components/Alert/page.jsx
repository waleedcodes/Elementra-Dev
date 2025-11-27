"use client";
import React from "react";
import { Copy, CopyIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "framer-motion";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

const AlertComponent = () => {
  const handleCopy = (text) => {
    if (text) {
      navigator.clipboard.writeText(text);
      toast("Copied to clipboard", { type: "success" });
    }
  };

  const codeExamples = [
    {
      code: `import { Alert, AlertTitle, AlertDescription } from "@/src/components/ui/alert";

export default function AlertExample() {
  return (
    <Alert variant="default" animation="fade">
      <AlertTitle>Welcome!</AlertTitle>
      <AlertDescription>This will fade in smoothly.</AlertDescription>
    </Alert>
  );
}`,
      description: "Using the default variant with fade animation."
    },
    {
      code: `import { Alert, AlertTitle, AlertDescription } from "./components/ui/alert";

export default function AlertExample() {
  return (
    <Alert variant="warning" animation="bounce">
      <AlertTitle>Attention!</AlertTitle>
      <AlertDescription>This alert will bounce.</AlertDescription>
    </Alert>
  );
}`,
      description: "Using the warning variant with bounce animation."
    },
    {
      code: `import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

export default function AlertExample() {
  return (
    <Alert variant="error" animation="shake">
      <AlertTitle>Error!</AlertTitle>
      <AlertDescription>This alert will shake to grab attention.</AlertDescription>
    </Alert>
  );
}`,
      description: "Using the error variant with shake animation."
    },
    {
      code: `import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

export default function AlertExample() {
  return (
    <Alert variant="info" animation="slideDown">
      <AlertTitle>Info!</AlertTitle>
      <AlertDescription>This alert will slide down from the top.</AlertDescription>
    </Alert>
  );
}`,
      description: "Using the info variant with slide down animation."
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 text-foreground">Alert</h1>
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
          An alert component that displays important messages to the user with customizable variants and animations.
        </p>
      </div>

      {/* Content Sections */}
      <div className="space-y-8 sm:space-y-12">
        {/* Installation Section */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-semibold flex items-center gap-3 text-foreground">
            <span className="flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-primary text-primary-foreground text-sm font-bold">1</span>
            Installation
          </h2>
          <div className="relative">
            <div className="bg-card border border-border rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <code className="text-foreground">npm i elementra-ui</code>
            </div>
            <Button
              size="sm"
              variant="ghost"
              className="absolute top-2 right-2 h-8 w-8 p-0 hover:bg-muted"
              onClick={() => handleCopy("npm i elementra-ui")}
            >
              <CopyIcon className="h-4 w-4 text-muted-foreground" />
            </Button>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-semibold flex items-center gap-3 text-foreground">
            <span className="flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-primary text-primary-foreground text-sm font-bold">2</span>
            Add Components Using CLI
          </h2>

          <div className="relative">
            <div className="bg-card border border-border rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <code className="text-foreground">npx elementra-ui add</code>
            </div>
            <Button
              size="sm"
              variant="ghost"
              className="absolute top-2 right-2 h-8 w-8 p-0 hover:bg-muted"
              onClick={() => handleCopy("npx elementra-ui add")}
            >
              <Copy className="h-4 w-4 text-muted-foreground" />
            </Button>
          </div>
          <div className="bg-muted/50 border border-border rounded-lg p-4">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Select components using the up/down arrow keys. Press spacebar to
              select multiple components, then press enter to add them to your{" "}
              <code className="bg-primary/10 text-primary px-1.5 py-0.5 rounded text-xs font-mono">src</code> folder.
            </p>
          </div>
        </section>
        {/* Preview Section */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-semibold flex items-center gap-3 text-foreground">
            <span className="flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-primary text-primary-foreground text-sm font-bold">3</span>
            Component Preview
          </h2>
          
          <div className="w-full">
            <Tabs defaultValue="preview" className="w-full">
              <div className="flex items-center justify-between mb-6">
                <TabsList className="grid w-[240px] grid-cols-2 bg-muted">
                  <TabsTrigger
                    value="preview"
                    className="font-medium data-[state=active]:bg-background data-[state=active]:text-foreground"
                    key="preview-tab"
                  >
                    Preview
                  </TabsTrigger>
                  <TabsTrigger
                    value="code"
                    className="font-medium data-[state=active]:bg-background data-[state=active]:text-foreground"
                    key="code-tab"
                  >
                    Code
                  </TabsTrigger>
                </TabsList>
              </div>

              <AnimatePresence mode="wait">
                <TabsContent value="preview" className="mt-0">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="rounded-lg border border-border bg-background p-6 sm:p-8 min-h-[300px] sm:min-h-[400px] flex items-center justify-center"
                  >
                    <Alert variant="success" animation="slideUp">
                      <AlertTitle>Success!</AlertTitle>
                      <AlertDescription>This alert will slide up smoothly with a success variant.</AlertDescription>
                    </Alert>
                  </motion.div>
                </TabsContent>

                <TabsContent value="code" className="mt-0">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="relative rounded-lg border border-border bg-card"
                  >
                    <div className="p-4 overflow-x-auto">
                      <pre className="text-xs sm:text-sm text-foreground font-mono">
                        <code className="whitespace-pre-wrap">{codeExamples[0].code}</code>
                      </pre>
                    </div>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="absolute top-2 right-2 h-8 w-8 p-0 hover:bg-muted"
                      onClick={() => handleCopy(codeExamples[0].code)}
                    >
                      <Copy className="h-4 w-4 text-muted-foreground" />
                    </Button>
                  </motion.div>
                </TabsContent>
              </AnimatePresence>
            </Tabs>
          </div>
        </section>
        {/* Additional Examples Section */}
        <section className="space-y-6">
          <h2 className="text-xl sm:text-2xl font-semibold flex items-center gap-3 text-foreground">
            <span className="flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-primary text-primary-foreground text-sm font-bold">4</span>
            More Examples
          </h2>
          
          <div className="space-y-6">
            {codeExamples.slice(1).map((example, index) => (
              <div key={index + 1} className="space-y-3">
                <h3 className="text-lg font-medium text-foreground flex items-center gap-2">
                  <span className="w-1 h-6 bg-primary rounded-full"></span>
                  {example.description}
                </h3>
                
                <p className="text-sm text-muted-foreground">
                  Import and use the Alert component with different variants and animations.
                </p>

                <div className="relative">
                  <div className="bg-card border border-border rounded-lg p-4 overflow-x-auto">
                    <pre className="text-xs sm:text-sm font-mono text-foreground">
                      <code className="whitespace-pre-wrap">{example.code}</code>
                    </pre>
                  </div>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="absolute top-2 right-2 h-8 w-8 p-0 hover:bg-muted"
                    onClick={() => handleCopy(example.code)}
                  >
                    <Copy className="h-4 w-4 text-muted-foreground" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* API Reference Section */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-semibold flex items-center gap-3 text-foreground">
            <span className="flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-primary text-primary-foreground text-sm font-bold">5</span>
            API Reference
          </h2>
          
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4 text-foreground">Alert Props</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2 px-2 font-medium text-foreground">Prop</th>
                    <th className="text-left py-2 px-2 font-medium text-foreground">Type</th>
                    <th className="text-left py-2 px-2 font-medium text-foreground">Default</th>
                    <th className="text-left py-2 px-2 font-medium text-foreground">Description</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border/50">
                    <td className="py-2 px-2"><code className="bg-muted px-1 py-0.5 rounded text-xs">variant</code></td>
                    <td className="py-2 px-2">string</td>
                    <td className="py-2 px-2">"default"</td>
                    <td className="py-2 px-2">Alert variant: default, success, warning, error, info</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 px-2"><code className="bg-muted px-1 py-0.5 rounded text-xs">animation</code></td>
                    <td className="py-2 px-2">string</td>
                    <td className="py-2 px-2">"fade"</td>
                    <td className="py-2 px-2">Animation type: fade, bounce, shake, slideDown, slideUp</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-2"><code className="bg-muted px-1 py-0.5 rounded text-xs">children</code></td>
                    <td className="py-2 px-2">ReactNode</td>
                    <td className="py-2 px-2">-</td>
                    <td className="py-2 px-2">The content of the alert</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ************************** */}
      </div>
    </div>
  );
};

export default AlertComponent;
