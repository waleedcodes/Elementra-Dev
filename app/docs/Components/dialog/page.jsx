"use client";

import React, { useState } from "react";
import {
  Copy,
  Layers,
  Sparkles,
  User,
  Settings,
  Check,
  CreditCard,
  Bell,
  Mail,
  Shield,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/src/components/ui/dialog";
import { PlaygroundStage3D } from "@/components/DocsComp/playground-stage-3d";
import { SpotlightCard } from "@/components/DocsComp/spotlight-card";

const DialogDocPage = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [mounted, setMounted] = useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const handleCopy = (text) => {
    if (text) {
      navigator.clipboard.writeText(text);
      toast.success("Copied to clipboard");
    }
  };

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "examples", label: "Examples & Variants" },
    { id: "api", label: "API Reference" },
  ];

  const showcaseExamples = [
    {
      id: "profile-dialog",
      title: "1. Form Input Dialog",
      description: "Modal dialog with structured inputs, header, and confirmation action.",
      preview: (
        <div className="flex justify-center p-6 bg-card/60 rounded-2xl border border-border">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="shadow-lg shadow-primary/25 flex items-center gap-2">
                <User className="h-4 w-4" />
                Edit Profile
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Edit Profile Information</DialogTitle>
                <DialogDescription>
                  Update your public display name and avatar details.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-3 py-3">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-foreground">Display Name</label>
                  <input
                    type="text"
                    defaultValue="Alex Rivera"
                    className="w-full p-2.5 rounded-xl border border-border bg-card text-sm text-foreground focus:ring-2 focus:ring-primary/20 outline-none"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-foreground">Email</label>
                  <input
                    type="email"
                    defaultValue="alex.rivera@elementra.dev"
                    className="w-full p-2.5 rounded-xl border border-border bg-card text-sm text-foreground focus:ring-2 focus:ring-primary/20 outline-none"
                  />
                </div>
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>
                <Button onClick={() => toast.success("Profile saved successfully")}>
                  Save Changes
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      ),
      code: `import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function ProfileDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Edit Profile Information</DialogTitle>
          <DialogDescription>Update your public display name and avatar.</DialogDescription>
        </DialogHeader>
        <div className="space-y-3 py-3">
          <input className="w-full p-2.5 rounded-xl border border-border bg-card text-sm" defaultValue="Alex Rivera" />
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button onClick={() => alert("Saved")}>Save Changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}`,
    },
    {
      id: "payment-dialog",
      title: "2. Payment & Subscription Confirmation",
      description: "Modal window used for billing verification and plan upgrades.",
      preview: (
        <div className="flex justify-center p-6 bg-card/60 rounded-2xl border border-border">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="gradient" className="flex items-center gap-2 shadow-lg shadow-purple-500/20">
                <CreditCard className="h-4 w-4" />
                Upgrade to Pro
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Upgrade to Elementra Pro</DialogTitle>
                <DialogDescription>
                  Get unlimited access to 50+ animated components and commercial licenses.
                </DialogDescription>
              </DialogHeader>
              <div className="p-4 rounded-xl border border-border bg-muted/30 space-y-2 text-sm my-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Pro Annual Plan</span>
                  <span className="font-bold text-foreground">$149/year</span>
                </div>
                <div className="flex justify-between text-xs text-emerald-500 font-semibold">
                  <span>Discount Applied</span>
                  <span>-20% Early Bird</span>
                </div>
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="ghost">Maybe Later</Button>
                </DialogClose>
                <Button variant="gradient" onClick={() => toast.success("Subscription activated!")}>
                  Confirm & Pay
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      ),
      code: `import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function PaymentDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="gradient">Upgrade to Pro</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Upgrade to Elementra Pro</DialogTitle>
          <DialogDescription>Get unlimited access to 50+ animated components.</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="ghost">Cancel</Button>
          </DialogClose>
          <Button variant="gradient">Confirm & Pay</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}`,
    },
  ];

  if (!mounted) return null;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-2xl bg-indigo-500/10 text-indigo-500 border border-indigo-500/20 shadow-sm">
            <Layers className="h-6 w-6" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">Dialog</h1>
        </div>
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
          A modal window that displays information or prompts users for input while disabling interactions with the background page.
        </p>
      </div>

      {/* Tabs */}
      <div className="w-full">
        <div className="flex border-b border-border mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 font-semibold text-sm border-b-2 transition-colors ${
                activeTab === tab.id
                  ? "border-primary text-foreground font-bold"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div className="space-y-10">
            {/* Quick Steps */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <SpotlightCard className="p-5 space-y-2">
                <div className="flex items-center gap-2 text-sm font-bold text-foreground">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs font-bold">1</span>
                  Install Library
                </div>
                <div className="relative">
                  <pre className="p-3 rounded-xl bg-background border border-border font-mono text-xs text-foreground">
                    <code>npm i elementra-ui</code>
                  </pre>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="absolute right-1 top-1 h-7 w-7"
                    onClick={() => handleCopy("npm i elementra-ui")}
                  >
                    <Copy className="h-3.5 w-3.5" />
                  </Button>
                </div>
              </SpotlightCard>

              <SpotlightCard className="p-5 space-y-2">
                <div className="flex items-center gap-2 text-sm font-bold text-foreground">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs font-bold">2</span>
                  Add via CLI
                </div>
                <div className="relative">
                  <pre className="p-3 rounded-xl bg-background border border-border font-mono text-xs text-foreground">
                    <code>npx elementra-ui add dialog</code>
                  </pre>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="absolute right-1 top-1 h-7 w-7"
                    onClick={() => handleCopy("npx elementra-ui add dialog")}
                  >
                    <Copy className="h-3.5 w-3.5" />
                  </Button>
                </div>
              </SpotlightCard>
            </div>

            {/* 3D Interactive Playground Stage */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold flex items-center gap-2 text-foreground">
                <Sparkles className="h-5 w-5 text-primary" />
                3D Interactive Playground
              </h2>

              <PlaygroundStage3D code={showcaseExamples[0].code} defaultBackdrop="grid">
                <div className="p-6">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="shadow-lg shadow-primary/25 flex items-center gap-2">
                        <User className="h-4 w-4" />
                        Open Profile Dialog
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                      <DialogHeader>
                        <DialogTitle>Edit Profile Information</DialogTitle>
                        <DialogDescription>
                          Update your public display name and avatar details.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-3 py-3">
                        <div className="space-y-1">
                          <label className="text-xs font-semibold text-foreground">Full Name</label>
                          <input
                            type="text"
                            defaultValue="Alex Rivera"
                            className="w-full p-2.5 rounded-xl border border-border bg-card text-sm text-foreground focus:ring-2 focus:ring-primary/20 outline-none"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-xs font-semibold text-foreground">Role / Title</label>
                          <input
                            type="text"
                            defaultValue="Senior UI Engineer"
                            className="w-full p-2.5 rounded-xl border border-border bg-card text-sm text-foreground focus:ring-2 focus:ring-primary/20 outline-none"
                          />
                        </div>
                      </div>
                      <DialogFooter>
                        <DialogClose asChild>
                          <Button variant="outline">Cancel</Button>
                        </DialogClose>
                        <Button onClick={() => toast.success("Profile saved successfully")}>
                          Save Changes
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>
              </PlaygroundStage3D>
            </section>
          </div>
        )}

        {/* Examples Tab */}
        {activeTab === "examples" && (
          <div className="space-y-12">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-foreground">Complete Dialog Showcase</h2>
              <p className="text-sm text-muted-foreground">
                Interact with form input modals and transaction dialogs with full source code.
              </p>
            </div>

            {showcaseExamples.map((example) => (
              <SpotlightCard key={example.id} className="p-6 sm:p-8 space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-foreground">{example.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{example.description}</p>
                </div>

                {/* Live Rendered Visual Preview */}
                <div className="space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Live Interactive Preview</div>
                  {example.preview}
                </div>

                {/* Copyable Code Snippet */}
                <div className="space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Component Code</div>
                  <div className="relative">
                    <pre className="bg-zinc-950 text-zinc-100 border border-zinc-800 rounded-2xl p-5 font-mono text-xs overflow-x-auto shadow-inner">
                      <code>{example.code}</code>
                    </pre>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="absolute right-2.5 top-2.5 h-8 px-2 text-zinc-400 hover:text-white hover:bg-zinc-800"
                      onClick={() => handleCopy(example.code)}
                    >
                      <Copy className="h-3.5 w-3.5 mr-1" />
                      Copy Code
                    </Button>
                  </div>
                </div>
              </SpotlightCard>
            ))}
          </div>
        )}

        {/* API Reference Tab */}
        {activeTab === "api" && (
          <div className="space-y-8">
            <div className="rounded-2xl border border-border overflow-hidden bg-card shadow-sm">
              <div className="p-4 bg-muted/60 border-b border-border">
                <h3 className="font-bold text-foreground">Dialog Props</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="bg-card text-muted-foreground border-b border-border">
                    <tr>
                      <th className="p-4 font-medium">Prop</th>
                      <th className="p-4 font-medium">Type</th>
                      <th className="p-4 font-medium">Default</th>
                      <th className="p-4 font-medium">Description</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr>
                      <td className="p-4 font-mono text-primary font-semibold">open</td>
                      <td className="p-4 font-mono text-xs">boolean</td>
                      <td className="p-4 font-mono text-xs">undefined</td>
                      <td className="p-4 text-muted-foreground">Controlled open state of the modal.</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-mono text-primary font-semibold">onOpenChange</td>
                      <td className="p-4 font-mono text-xs">{"(open: boolean) => void"}</td>
                      <td className="p-4 font-mono text-xs">-</td>
                      <td className="p-4 text-muted-foreground">Callback triggered when open state changes.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DialogDocPage;
