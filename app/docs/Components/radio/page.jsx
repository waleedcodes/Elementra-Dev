"use client";
import React, { useState } from "react";
import { Copy, CopyIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "framer-motion";

const RadioDocPage = () => {
  const [selected, setSelected] = useState("default");

  const codeExample = `import { RadioGroup, RadioGroupItem } from "@/components/ui/radio";
import { Label } from "@/components/ui/label";

export default function RadioGroupDemo() {
  return (
    <RadioGroup defaultValue="comfortable">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="default" id="r1" />
        <Label htmlFor="r1">Default</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="comfortable" id="r2" />
        <Label htmlFor="r2">Comfortable</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="compact" id="r3" />
        <Label htmlFor="r3">Compact</Label>
      </div>
    </RadioGroup>
  );
}`;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 text-foreground">Radio</h1>
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
          A set of checkable buttons—known as radio buttons—where no more than one button can be checked at a time.
        </p>
      </div>

      <div className="space-y-8 sm:space-y-12">
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-semibold flex items-center gap-3 text-foreground">
            <span className="flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-primary text-primary-foreground text-sm font-bold">1</span>
            Installation
          </h2>
          <div className="relative">
            <div className="bg-card border border-border rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <code className="text-foreground">npm i elementra-ui</code>
            </div>
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
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-semibold flex items-center gap-3 text-foreground">
            <span className="flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-primary text-primary-foreground text-sm font-bold">3</span>
            Component Preview
          </h2>
          <div className="w-full">
            <Tabs defaultValue="preview" className="w-full">
              <TabsList className="grid w-[240px] grid-cols-2 bg-muted mb-6">
                <TabsTrigger value="preview" className="font-medium">Preview</TabsTrigger>
                <TabsTrigger value="code" className="font-medium">Code</TabsTrigger>
              </TabsList>
              <AnimatePresence mode="wait">
                <TabsContent value="preview">
                  <div className="rounded-lg border border-border bg-background p-6 flex flex-col items-center justify-center min-h-[220px]">
                    <div className="space-y-3">
                      {["default", "comfortable", "compact"].map((opt) => (
                        <label key={opt} className="flex items-center space-x-3 cursor-pointer">
                          <input
                            type="radio"
                            name="density"
                            value={opt}
                            checked={selected === opt}
                            onChange={(e) => setSelected(e.target.value)}
                            className="w-4 h-4 accent-primary cursor-pointer"
                          />
                          <span className="text-sm font-medium capitalize text-foreground">{opt} Density</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="code">
                  <div className="relative rounded-lg border border-border bg-card p-4 overflow-x-auto">
                    <pre className="text-xs sm:text-sm text-foreground font-mono">
                      <code>{codeExample}</code>
                    </pre>
                  </div>
                </TabsContent>
              </AnimatePresence>
            </Tabs>
          </div>
        </section>
      </div>
    </div>
  );
};

export default RadioDocPage;
