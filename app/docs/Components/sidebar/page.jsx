"use client";
import React from "react";
import { Copy, CopyIcon, Layout, Menu, Home, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "framer-motion";

const SidebarDocPage = () => {
  const codeExample = `import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

export default function SidebarDemo() {
  return (
    <Sidebar className="w-64 border-r">
      <SidebarHeader className="p-4 font-bold text-lg">Elementra UI</SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            <SidebarMenuItem>Dashboard</SidebarMenuItem>
            <SidebarMenuItem>Components</SidebarMenuItem>
            <SidebarMenuItem>Settings</SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}`;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 text-foreground">Sidebar</h1>
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
          A composable, collapsible, and accessible navigation sidebar layout suite.
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
                  <div className="rounded-lg border border-border bg-background p-6 flex flex-col items-center justify-center min-h-[250px]">
                    <div className="w-full max-w-xs bg-card border border-border rounded-lg p-4 shadow-md space-y-4 text-sm">
                      <div className="font-bold text-foreground text-base border-b border-border pb-2 flex items-center gap-2">
                        <Layout className="w-4 h-4 text-primary" /> Application
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 px-2 py-1.5 bg-primary/10 text-primary font-medium rounded-md cursor-pointer">
                          <Home className="w-4 h-4" /> Home
                        </div>
                        <div className="flex items-center gap-2 px-2 py-1.5 hover:bg-accent rounded-md cursor-pointer text-muted-foreground">
                          <Package className="w-4 h-4" /> Components
                        </div>
                      </div>
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

export default SidebarDocPage;
