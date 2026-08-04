"use client";
import React, { useState } from "react";
import { Copy, CopyIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const MenubarDocPage = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const codeExample = `import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarShortcut,
} from "@/components/ui/menubar";

export default function MenubarDemo() {
  return (
    <Menubar>
      <MenubarMenu value="file">
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>New Tab <MenubarShortcut>⌘T</MenubarShortcut></MenubarItem>
          <MenubarItem>New Window <MenubarShortcut>⌘N</MenubarShortcut></MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Share</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Print... <MenubarShortcut>⌘P</MenubarShortcut></MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}`;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 text-foreground">Menubar</h1>
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
          Desktop application top navigation bar system with dropdown menus and keyboard shortcut badges.
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
            <code>npx elementra-ui add menubar</code>
          </div>
        </section>

        {/* Step 3: Preview */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-semibold flex items-center gap-3 text-foreground">
            <span className="flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-primary text-primary-foreground text-sm font-bold">3</span>
            Interactive Preview
          </h2>

          <div className="bg-card border border-border rounded-xl p-6 sm:p-8 space-y-6">
            <div className="flex h-10 items-center space-x-1 rounded-md border border-border bg-background p-1 shadow-sm select-none max-w-sm">
              {["File", "Edit", "View", "Profiles"].map((menu) => (
                <button
                  key={menu}
                  type="button"
                  onClick={() => setActiveMenu(activeMenu === menu ? null : menu)}
                  className={`flex items-center rounded-sm px-3 py-1.5 text-sm font-medium transition-colors ${
                    activeMenu === menu ? "bg-muted text-foreground" : "text-muted-foreground hover:bg-muted"
                  }`}
                >
                  {menu}
                </button>
              ))}
            </div>

            {activeMenu && (
              <div className="p-3 bg-muted/30 border border-border rounded-lg text-xs font-mono text-muted-foreground">
                Active menu open: <span className="font-bold text-foreground">{activeMenu}</span>
              </div>
            )}
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

export default MenubarDocPage;
