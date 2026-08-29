"use client";

import React, { useState } from "react";
import {
  Copy,
  Mouse,
  Sparkles,
  ArrowRight,
  Download,
  Trash2,
  Settings,
  Mail,
  Heart,
  Loader2,
  Check,
  Zap,
  Play,
  Share2,
  Send,
  Plus,
  Shield,
  Star,
  Flame,
  Volume2,
} from "lucide-react";
import { Button as DocsButton } from "@/components/ui/button";
import { toast } from "sonner";
import { Button } from "@/src/components/ui/button";
import { PlaygroundStage3D } from "@/components/DocsComp/playground-stage-3d";
import { SpotlightCard } from "@/components/DocsComp/spotlight-card";

const ButtonDocPage = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedVariant, setSelectedVariant] = useState("default");
  const [selectedSize, setSelectedSize] = useState("md");
  const [isLoadingDemo, setIsLoadingDemo] = useState(false);
  const [likesCount, setLikesCount] = useState(42);
  const [isLiked, setIsLiked] = useState(false);
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
      id: "visual-variants",
      title: "1. Core Visual Variants",
      description: "Elementra UI provides 12+ crafted visual variants tailored for primary actions, warnings, notifications, and glassmorphism.",
      preview: (
        <div className="flex flex-wrap items-center justify-center gap-3 p-6 bg-card/60 rounded-2xl border border-border">
          <Button variant="default" onClick={() => toast("Default clicked")}>Default</Button>
          <Button variant="outline" onClick={() => toast("Outline clicked")}>Outline</Button>
          <Button variant="glass" onClick={() => toast("Glass clicked")}>Glass</Button>
          <Button variant="gradient" onClick={() => toast("Gradient clicked")}>Gradient</Button>
          <Button variant="success" onClick={() => toast.success("Success clicked")}>Success</Button>
          <Button variant="danger" onClick={() => toast.error("Danger clicked")}>Danger</Button>
          <Button variant="warning" onClick={() => toast.warning("Warning clicked")}>Warning</Button>
          <Button variant="info" onClick={() => toast.info("Info clicked")}>Info</Button>
          <Button variant="shadow" onClick={() => toast("Shadow clicked")}>Shadow Glow</Button>
          <Button variant="neon" onClick={() => toast("Neon clicked")}>Neon Glow</Button>
          <Button variant="elevated" onClick={() => toast("Elevated clicked")}>Elevated</Button>
        </div>
      ),
      code: `import { Button } from "@/components/ui/button";

export default function ButtonVariants() {
  return (
    <div className="flex flex-wrap gap-3">
      <Button variant="default">Default</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="glass">Glass</Button>
      <Button variant="gradient">Gradient</Button>
      <Button variant="success">Success</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="warning">Warning</Button>
      <Button variant="info">Info</Button>
      <Button variant="shadow">Shadow Glow</Button>
      <Button variant="neon">Neon Glow</Button>
      <Button variant="elevated">Elevated</Button>
    </div>
  );
}`,
    },
    {
      id: "animations-physics",
      title: "2. Micro-Animations & Dynamic Physics",
      description: "Built-in interactive spring physics and keyframe animations triggered on hover and click.",
      preview: (
        <div className="flex flex-wrap items-center justify-center gap-3 p-6 bg-card/60 rounded-2xl border border-border">
          <Button variant="pulse" onClick={() => toast.info("Pulse clicked")}>Pulse Animation</Button>
          <Button variant="bounce" onClick={() => toast.info("Bounce clicked")}>Bounce Animation</Button>
          <Button variant="ripple" onClick={() => toast.info("Ripple clicked")}>Ripple Effect</Button>
          <Button variant="scale" onClick={() => toast.info("Scale clicked")}>Scale Hover</Button>
          <Button variant="shake" onClick={() => toast.info("Shake clicked")}>Shake Physics</Button>
          <Button variant="emoji" onClick={() => toast.info("Emoji clicked")}>🎉 Emoji Tilt</Button>
          <Button variant="frosted" onClick={() => toast.info("Frosted clicked")}>Frosted Blur</Button>
        </div>
      ),
      code: `import { Button } from "@/components/ui/button";

export default function AnimatedButtons() {
  return (
    <div className="flex flex-wrap gap-3">
      <Button variant="pulse">Pulse Animation</Button>
      <Button variant="bounce">Bounce Animation</Button>
      <Button variant="ripple">Ripple Effect</Button>
      <Button variant="scale">Scale Hover</Button>
      <Button variant="shake">Shake Physics</Button>
      <Button variant="emoji">🎉 Emoji Tilt</Button>
      <Button variant="frosted">Frosted Blur</Button>
    </div>
  );
}`,
    },
    {
      id: "sizes",
      title: "3. Size Spectrum (xs → xl & icon)",
      description: "Standardized size tokens from compact badges to prominent hero call-to-actions.",
      preview: (
        <div className="flex flex-wrap items-center justify-center gap-3 p-6 bg-card/60 rounded-2xl border border-border">
          <Button size="xs" variant="default">Extra Small (xs)</Button>
          <Button size="sm" variant="default">Small (sm)</Button>
          <Button size="md" variant="default">Medium (md)</Button>
          <Button size="lg" variant="default">Large (lg)</Button>
          <Button size="xl" variant="default">Extra Large (xl)</Button>
          <Button size="icon" variant="outline" title="Settings">
            <Settings className="h-4 w-4" />
          </Button>
          <Button size="icon" variant="gradient" title="Flame">
            <Flame className="h-4 w-4" />
          </Button>
        </div>
      ),
      code: `import { Button } from "@/components/ui/button";
import { Settings, Flame } from "lucide-react";

export default function ButtonSizes() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button size="xs">Extra Small (xs)</Button>
      <Button size="sm">Small (sm)</Button>
      <Button size="md">Medium (md)</Button>
      <Button size="lg">Large (lg)</Button>
      <Button size="xl">Extra Large (xl)</Button>
      <Button size="icon">
        <Settings className="h-4 w-4" />
      </Button>
      <Button size="icon" variant="gradient">
        <Flame className="h-4 w-4" />
      </Button>
    </div>
  );
}`,
    },
    {
      id: "icons-slots",
      title: "4. Icons, Slots & Badges",
      description: "Seamless composition with Lucide React icons, animated trailing arrows, and badge counters.",
      preview: (
        <div className="flex flex-wrap items-center justify-center gap-3 p-6 bg-card/60 rounded-2xl border border-border">
          <Button variant="default" className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            Download Assets
          </Button>
          <Button variant="gradient" className="flex items-center gap-2 group">
            <span>Get Started</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-primary" />
            Inbox
            <span className="ml-1 px-1.5 py-0.5 rounded-full bg-primary text-primary-foreground text-[10px] font-bold">
              3
            </span>
          </Button>
          <Button
            variant="glass"
            className="flex items-center gap-2"
            onClick={() => {
              setIsLiked(!isLiked);
              setLikesCount(isLiked ? likesCount - 1 : likesCount + 1);
              toast.success(isLiked ? "Unliked" : "Liked!");
            }}
          >
            <Heart className={`h-4 w-4 transition-colors ${isLiked ? "fill-red-500 text-red-500" : ""}`} />
            <span>{likesCount}</span>
          </Button>
          <Button variant="danger" className="flex items-center gap-2">
            <Trash2 className="h-4 w-4" />
            Delete
          </Button>
        </div>
      ),
      code: `import { Button } from "@/components/ui/button";
import { Download, ArrowRight, Mail, Heart, Trash2 } from "lucide-react";

export default function ButtonWithIcons() {
  return (
    <div className="flex flex-wrap gap-3">
      <Button variant="default">
        <Download className="h-4 w-4 mr-2" /> Download
      </Button>

      <Button variant="gradient" className="group">
        <span>Get Started</span>
        <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
      </Button>

      <Button variant="outline">
        <Mail className="h-4 w-4 mr-2" /> Inbox
        <span className="ml-2 px-1.5 py-0.5 rounded-full bg-primary text-xs">3</span>
      </Button>
    </div>
  );
}`,
    },
    {
      id: "loading-states",
      title: "5. Loading & Disabled States",
      description: "Interactive async loading spinner overlay with disabled click handling and cursor wait.",
      preview: (
        <div className="flex flex-wrap items-center justify-center gap-3 p-6 bg-card/60 rounded-2xl border border-border">
          <Button
            variant="default"
            isLoading={isLoadingDemo}
            onClick={() => {
              setIsLoadingDemo(true);
              setTimeout(() => {
                setIsLoadingDemo(false);
                toast.success("Action complete!");
              }, 1500);
            }}
          >
            {isLoadingDemo ? "Submitting..." : "Click to Trigger Loading"}
          </Button>
          <Button variant="gradient" isLoading>
            Always Loading
          </Button>
          <Button variant="default" disabled>
            Disabled Button
          </Button>
          <Button variant="outline" disabled>
            Disabled Outline
          </Button>
        </div>
      ),
      code: `import { Button } from "@/components/ui/button";
import React, { useState } from "react";

export default function LoadingButtonDemo() {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1500);
  };

  return (
    <div className="flex gap-3">
      <Button isLoading={loading} onClick={handleClick}>
        {loading ? "Processing..." : "Submit Transaction"}
      </Button>
      <Button disabled>Disabled Action</Button>
    </div>
  );
}`,
    },
    {
      id: "pills-capsules",
      title: "6. Capsule & Pill Shapes",
      description: "Fully rounded pill buttons ideal for tags, chips, status selectors, and audio controls.",
      preview: (
        <div className="flex flex-wrap items-center justify-center gap-3 p-6 bg-card/60 rounded-2xl border border-border">
          <Button variant="pill">Capsule Pill</Button>
          <Button variant="gradient" className="rounded-full shadow-lg">
            <Sparkles className="h-4 w-4 mr-1.5" />
            AI Generator
          </Button>
          <Button variant="glass" className="rounded-full">
            <Volume2 className="h-4 w-4 mr-1.5" />
            Listen Audio
          </Button>
          <Button variant="outline" className="rounded-full">
            <Share2 className="h-4 w-4 mr-1.5" />
            Share Link
          </Button>
        </div>
      ),
      code: `import { Button } from "@/components/ui/button";
import { Sparkles, Volume2 } from "lucide-react";

export default function PillButtons() {
  return (
    <div className="flex gap-3">
      <Button variant="pill">Capsule Pill</Button>
      <Button variant="gradient" className="rounded-full">
        <Sparkles className="h-4 w-4 mr-2" /> AI Generator
      </Button>
    </div>
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
          <div className="p-2.5 rounded-2xl bg-blue-500/10 text-blue-500 border border-blue-500/20 shadow-sm">
            <Mouse className="h-6 w-6" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">Button</h1>
        </div>
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
          An accessible, highly customizable interactive button with 20+ animated variants, loading states, icon slots, and spring physics.
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
                  <DocsButton
                    size="icon"
                    variant="ghost"
                    className="absolute right-1 top-1 h-7 w-7"
                    onClick={() => handleCopy("npm i elementra-ui")}
                  >
                    <Copy className="h-3.5 w-3.5" />
                  </DocsButton>
                </div>
              </SpotlightCard>

              <SpotlightCard className="p-5 space-y-2">
                <div className="flex items-center gap-2 text-sm font-bold text-foreground">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs font-bold">2</span>
                  Add via CLI
                </div>
                <div className="relative">
                  <pre className="p-3 rounded-xl bg-background border border-border font-mono text-xs text-foreground">
                    <code>npx elementra-ui add button</code>
                  </pre>
                  <DocsButton
                    size="icon"
                    variant="ghost"
                    className="absolute right-1 top-1 h-7 w-7"
                    onClick={() => handleCopy("npx elementra-ui add button")}
                  >
                    <Copy className="h-3.5 w-3.5" />
                  </DocsButton>
                </div>
              </SpotlightCard>
            </div>

            {/* 3D Interactive Playground Stage */}
            <section className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h2 className="text-xl font-bold flex items-center gap-2 text-foreground">
                  <Sparkles className="h-5 w-5 text-primary" />
                  3D Interactive Playground
                </h2>

                {/* Variant Switcher */}
                <div className="flex items-center gap-1 p-1 rounded-xl bg-muted/60 border border-border text-xs font-medium">
                  {["default", "gradient", "glass", "neon", "success", "danger"].map((variant) => (
                    <button
                      key={variant}
                      type="button"
                      onClick={() => setSelectedVariant(variant)}
                      className={`px-3 py-1 rounded-lg capitalize transition-all ${
                        selectedVariant === variant
                          ? "bg-background text-primary font-bold shadow-sm"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {variant}
                    </button>
                  ))}
                </div>
              </div>

              <PlaygroundStage3D code={showcaseExamples[0].code} defaultBackdrop="grid">
                <div className="p-6 flex flex-wrap items-center justify-center gap-4">
                  <Button
                    variant={selectedVariant}
                    size={selectedSize}
                    onClick={() => {
                      toast.success(`Clicked ${selectedVariant} button!`);
                    }}
                    className="shadow-xl"
                  >
                    <span className="flex items-center gap-2">
                      <Sparkles className="h-4 w-4" />
                      Interactive {selectedVariant} Button
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </Button>
                </div>
              </PlaygroundStage3D>
            </section>
          </div>
        )}

        {/* Examples Tab: Rich Interactive Visual Showcases */}
        {activeTab === "examples" && (
          <div className="space-y-12">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-foreground">Complete Button Showcase</h2>
              <p className="text-sm text-muted-foreground">
                Interact with every design variant, size scale, icon alignment, and animation effect below with full copyable source code.
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
                <h3 className="font-bold text-foreground">Button Props</h3>
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
                      <td className="p-4 font-mono text-primary font-semibold">variant</td>
                      <td className="p-4 font-mono text-xs">"default" | "outline" | "glass" | "gradient" | "success" | "danger" | "warning" | "info" | "pill" | "shadow" | "neon" | "pulse" | "bounce" | "ripple" | "shake"</td>
                      <td className="p-4 font-mono text-xs">"default"</td>
                      <td className="p-4 text-muted-foreground">The visual style and micro-animation preset.</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-mono text-primary font-semibold">size</td>
                      <td className="p-4 font-mono text-xs">"xs" | "sm" | "md" | "lg" | "xl" | "icon"</td>
                      <td className="p-4 font-mono text-xs">"md"</td>
                      <td className="p-4 text-muted-foreground">The dimension scale and padding of the button.</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-mono text-primary font-semibold">isLoading</td>
                      <td className="p-4 font-mono text-xs">boolean</td>
                      <td className="p-4 font-mono text-xs">false</td>
                      <td className="p-4 text-muted-foreground">Shows an animated spinner and disables interaction.</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-mono text-primary font-semibold">icon</td>
                      <td className="p-4 font-mono text-xs">React.ComponentType</td>
                      <td className="p-4 font-mono text-xs">undefined</td>
                      <td className="p-4 text-muted-foreground">Lucide or custom SVG icon rendered inside the button slot.</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-mono text-primary font-semibold">disabled</td>
                      <td className="p-4 font-mono text-xs">boolean</td>
                      <td className="p-4 font-mono text-xs">false</td>
                      <td className="p-4 text-muted-foreground">Prevents user interaction and applies muted opacity.</td>
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

export default ButtonDocPage;
