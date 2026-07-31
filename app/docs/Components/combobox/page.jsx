"use client";
import React, { useState } from "react";
import { Copy, CopyIcon, Search, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "framer-motion";

const ComboboxDocPage = () => {
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  const frameworks = [
    { value: "next.js", label: "Next.js" },
    { value: "sveltekit", label: "SvelteKit" },
    { value: "nuxt.js", label: "Nuxt.js" },
    { value: "remix", label: "Remix" },
    { value: "astro", label: "Astro" },
  ];

  const codeExample = `import { Combobox } from "@/components/ui/combobox";

const frameworks = [
  { value: "next.js", label: "Next.js" },
  { value: "sveltekit", label: "SvelteKit" },
  { value: "nuxt.js", label: "Nuxt.js" },
  { value: "remix", label: "Remix" },
  { value: "astro", label: "Astro" },
];

export default function ComboboxDemo() {
  return (
    <Combobox
      options={frameworks}
      placeholder="Select framework..."
      searchPlaceholder="Search framework..."
    />
  );
}`;

  const filtered = frameworks.filter((f) =>
    f.label.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 text-foreground">Combobox</h1>
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
          Searchable select input component with autocomplete filtering and popover menu.
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
              <code className="text-foreground">npx elementra-ui add combobox</code>
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
                  <div className="rounded-lg border border-border bg-background p-6 flex flex-col items-center justify-center min-h-[250px]">
                    <div className="relative w-full max-w-xs">
                      <button
                        onClick={() => setOpen(!open)}
                        className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-card px-3 py-2 text-sm text-foreground shadow-xs"
                      >
                        <span>{selected ? frameworks.find((f) => f.value === selected)?.label : "Select framework..."}</span>
                      </button>
                      {open && (
                        <div className="absolute left-0 top-full z-20 mt-1 w-full rounded-md border border-border bg-card p-1 shadow-lg text-sm">
                          <div className="flex items-center border-b border-border px-2 py-1.5 gap-2">
                            <Search className="w-4 h-4 text-muted-foreground" />
                            <input
                              type="text"
                              value={search}
                              onChange={(e) => setSearch(e.target.value)}
                              placeholder="Search framework..."
                              className="w-full bg-transparent text-xs text-foreground outline-none"
                            />
                          </div>
                          <div className="p-1 space-y-0.5">
                            {filtered.map((f) => (
                              <div
                                key={f.value}
                                onClick={() => {
                                  setSelected(f.value);
                                  setOpen(false);
                                }}
                                className="flex items-center justify-between px-2 py-1.5 hover:bg-accent rounded cursor-pointer text-foreground text-xs"
                              >
                                <span>{f.label}</span>
                                {selected === f.value && <Check className="w-3.5 h-3.5 text-primary" />}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
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

export default ComboboxDocPage;
