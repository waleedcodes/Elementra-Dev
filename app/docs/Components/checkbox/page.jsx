"use client";
import React, { useState } from "react";
import { Copy, CopyIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "framer-motion";

const CheckboxDocPage = () => {
  const [checked, setChecked] = useState(true);
  const handleCopy = (text) => {
    if (text) {
      navigator.clipboard.writeText(text);
      toast("Copied to clipboard", { type: "success" });
    }
  };

  const codeExample = `import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";

export default function CheckboxDemo() {
  const [agree, setAgree] = useState(false);
  return (
    <Checkbox
      checked={agree}
      onChange={setAgree}
      label="Accept terms and conditions"
      description="You agree to our Terms of Service and Privacy Policy."
    />
  );
}`;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 text-foreground">Checkbox</h1>
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
          A control that allows the user to toggle between checked and unchecked states, supporting sizes, variants, labels, and indeterminate states.
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
                  <div className="rounded-lg border border-border bg-background p-6 flex flex-col items-center justify-center space-y-4">
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={(e) => setChecked(e.target.checked)}
                        className="w-5 h-5 accent-primary rounded cursor-pointer"
                      />
                      <span className="text-sm font-medium text-foreground">Accept terms & conditions</span>
                    </label>
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

export default CheckboxDocPage;
