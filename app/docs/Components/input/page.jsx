"use client";
import React, { useState } from "react";
import { Copy, CopyIcon, Mail, Lock, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "@/components/ui/input";

const InputDocPage = () => {
  const [val, setVal] = useState("");
  const handleCopy = (text) => {
    if (text) {
      navigator.clipboard.writeText(text);
      toast("Copied to clipboard", { type: "success" });
    }
  };

  const codeExamples = [
    {
      code: `import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";

export default function InputDemo() {
  return (
    <Input
      type="email"
      placeholder="Enter your email"
      leftIcon={<Mail className="w-4 h-4 text-muted-foreground" />}
    />
  );
}`,
      description: "Input field with left icon decoration."
    },
    {
      code: `import { Input } from "@/components/ui/input";

export default function PasswordDemo() {
  return (
    <Input
      type="password"
      placeholder="Enter password"
      showPasswordToggle={true}
    />
  );
}`,
      description: "Password input with interactive visibility toggle."
    },
    {
      code: `import { Input } from "@/components/ui/input";

export default function IntentDemo() {
  return (
    <div className="space-y-4">
      <Input intent="default" placeholder="Default input" />
      <Input intent="success" placeholder="Success state" />
      <Input intent="error" placeholder="Error state" />
    </div>
  );
}`,
      description: "Input fields with validation intent variants (success, error)."
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 text-foreground">Input</h1>
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
          A flexible, accessible form input component supporting icons, sizes, validation states, character counters, and password toggles.
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
            Add Component CLI
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
                  <TabsTrigger value="preview" className="font-medium">Preview</TabsTrigger>
                  <TabsTrigger value="code" className="font-medium">Code</TabsTrigger>
                </TabsList>
              </div>

              <AnimatePresence mode="wait">
                <TabsContent value="preview" className="mt-0">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="rounded-lg border border-border bg-background p-6 sm:p-8 min-h-[250px] flex items-center justify-center"
                  >
                    <div className="w-full max-w-md space-y-4">
                      <Input
                        type="email"
                        placeholder="user@elementra.dev"
                        leftIcon={<Mail className="w-4 h-4 text-muted-foreground" />}
                      />
                      <Input
                        type="password"
                        placeholder="••••••••••••"
                        showPasswordToggle={true}
                      />
                    </div>
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

        {/* API Reference */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-semibold flex items-center gap-3 text-foreground">
            <span className="flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-primary text-primary-foreground text-sm font-bold">4</span>
            API Reference
          </h2>
          
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4 text-foreground">Input Props</h3>
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
                    <td className="py-2 px-2"><code className="bg-muted px-1 py-0.5 rounded text-xs">type</code></td>
                    <td className="py-2 px-2">string</td>
                    <td className="py-2 px-2">"text"</td>
                    <td className="py-2 px-2">HTML input type (text, email, password, etc.)</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 px-2"><code className="bg-muted px-1 py-0.5 rounded text-xs">size</code></td>
                    <td className="py-2 px-2">"sm" | "md" | "lg"</td>
                    <td className="py-2 px-2">"md"</td>
                    <td className="py-2 px-2">Size variant of the input field</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 px-2"><code className="bg-muted px-1 py-0.5 rounded text-xs">intent</code></td>
                    <td className="py-2 px-2">"default" | "success" | "error"</td>
                    <td className="py-2 px-2">"default"</td>
                    <td className="py-2 px-2">Validation intent border styling</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-2"><code className="bg-muted px-1 py-0.5 rounded text-xs">showPasswordToggle</code></td>
                    <td className="py-2 px-2">boolean</td>
                    <td className="py-2 px-2">true</td>
                    <td className="py-2 px-2">Shows show/hide password toggle for type="password"</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default InputDocPage;
