"use client";

import React, { useState } from "react";
import {
  Copy,
  Sparkles,
  Search,
  Mail,
  Lock,
  Eye,
  EyeOff,
  User,
  Globe,
  Key,
  CheckCircle,
  AlertCircle,
  Hash,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Input } from "@/src/components/ui/input";
import { PlaygroundStage3D } from "@/components/DocsComp/playground-stage-3d";
import { SpotlightCard } from "@/components/DocsComp/spotlight-card";

const InputDocPage = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [demoValue, setDemoValue] = useState("");
  const [searchVal, setSearchVal] = useState("");
  const [passwordVal, setPasswordVal] = useState("");
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
      id: "input-icons",
      title: "1. Inputs with Leading & Trailing Icons",
      description: "Icon slots for search queries, email fields, and URL web inputs.",
      preview: (
        <div className="flex flex-col items-center justify-center gap-4 p-6 bg-card/60 rounded-2xl border border-border w-full max-w-md mx-auto">
          <Input
            placeholder="Search components or docs..."
            leftIcon={<Search className="h-4 w-4 text-muted-foreground" />}
            value={searchVal}
            onChange={(e) => setSearchVal(e.target.value)}
            className="w-full"
          />
          <Input
            type="email"
            placeholder="developer@elementra.dev"
            leftIcon={<Mail className="h-4 w-4 text-muted-foreground" />}
            className="w-full"
          />
          <Input
            placeholder="https://github.com/elementra-ui"
            leftIcon={<Globe className="h-4 w-4 text-muted-foreground" />}
            className="w-full"
          />
        </div>
      ),
      code: `import { Input } from "@/components/ui/input";
import { Search, Mail, Globe } from "lucide-react";

export default function IconInputs() {
  return (
    <div className="space-y-4 max-w-sm">
      <Input
        placeholder="Search components..."
        leftIcon={<Search className="h-4 w-4" />}
      />
      <Input
        type="email"
        placeholder="developer@domain.com"
        leftIcon={<Mail className="h-4 w-4" />}
      />
      <Input
        placeholder="https://elementra.dev"
        leftIcon={<Globe className="h-4 w-4" />}
      />
    </div>
  );
}`,
    },
    {
      id: "password-toggle",
      title: "2. Password Input with Reveal Toggle",
      description: "Built-in interactive show/hide password visibility toggle with animated eye icon.",
      preview: (
        <div className="flex justify-center p-6 bg-card/60 rounded-2xl border border-border w-full max-w-md mx-auto">
          <Input
            type="password"
            placeholder="Enter secure password..."
            leftIcon={<Lock className="h-4 w-4 text-muted-foreground" />}
            showPasswordToggle
            value={passwordVal}
            onChange={(e) => setPasswordVal(e.target.value)}
            className="w-full"
          />
        </div>
      ),
      code: `import { Input } from "@/components/ui/input";
import { Lock } from "lucide-react";

export default function PasswordInput() {
  return (
    <Input
      type="password"
      placeholder="Enter secure password..."
      leftIcon={<Lock className="h-4 w-4" />}
      showPasswordToggle
    />
  );
}`,
    },
    {
      id: "intent-states",
      title: "3. Status Intents (Success, Error, Default)",
      description: "Color-coded validation feedback for form submission errors and success states.",
      preview: (
        <div className="flex flex-col items-center justify-center gap-4 p-6 bg-card/60 rounded-2xl border border-border w-full max-w-md mx-auto">
          <div className="w-full space-y-1">
            <span className="text-xs font-semibold text-emerald-500 flex items-center gap-1">
              <CheckCircle className="h-3 w-3" /> Valid Username
            </span>
            <Input
              intent="success"
              defaultValue="alexrivera_dev"
              leftIcon={<User className="h-4 w-4 text-emerald-500" />}
              className="w-full"
            />
          </div>
          <div className="w-full space-y-1">
            <span className="text-xs font-semibold text-destructive flex items-center gap-1">
              <AlertCircle className="h-3 w-3" /> Invalid Email Format
            </span>
            <Input
              intent="error"
              defaultValue="invalid-email@"
              leftIcon={<Mail className="h-4 w-4 text-destructive" />}
              className="w-full"
            />
          </div>
        </div>
      ),
      code: `import { Input } from "@/components/ui/input";
import { User, Mail } from "lucide-react";

export default function ValidatedInputs() {
  return (
    <div className="space-y-4 max-w-sm">
      <Input
        intent="success"
        defaultValue="valid_username"
        leftIcon={<User className="h-4 w-4 text-emerald-500" />}
      />
      <Input
        intent="error"
        defaultValue="invalid-email"
        leftIcon={<Mail className="h-4 w-4 text-destructive" />}
      />
    </div>
  );
}`,
    },
    {
      id: "input-sizes",
      title: "4. Size Scales (sm, md, lg)",
      description: "Small (36px), medium (40px), and large (44px) inputs for varied form layouts.",
      preview: (
        <div className="flex flex-col items-center justify-center gap-4 p-6 bg-card/60 rounded-2xl border border-border w-full max-w-md mx-auto">
          <Input size="sm" placeholder="Small input (sm - 36px)" className="w-full" />
          <Input size="md" placeholder="Medium input (md - 40px)" className="w-full" />
          <Input size="lg" placeholder="Large input (lg - 44px)" className="w-full" />
        </div>
      ),
      code: `import { Input } from "@/components/ui/input";

export default function InputSizes() {
  return (
    <div className="space-y-3 max-w-sm">
      <Input size="sm" placeholder="Small (36px)" />
      <Input size="md" placeholder="Medium (40px)" />
      <Input size="lg" placeholder="Large (44px)" />
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
            <Search className="h-6 w-6" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">Input</h1>
        </div>
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
          An accessible text input field supporting leading/trailing icons, password reveal toggles, validation intents, and character counters.
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
                    <code>npx elementra-ui add input</code>
                  </pre>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="absolute right-1 top-1 h-7 w-7"
                    onClick={() => handleCopy("npx elementra-ui add input")}
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
                <div className="p-6 w-full max-w-sm space-y-4">
                  <Input
                    placeholder="Search UI components..."
                    leftIcon={<Search className="h-4 w-4 text-muted-foreground" />}
                    value={demoValue}
                    onChange={(e) => setDemoValue(e.target.value)}
                    className="w-full shadow-md"
                  />
                  {demoValue && (
                    <p className="text-xs text-muted-foreground text-center animate-fade-in">
                      Live Value: <strong className="text-foreground">{demoValue}</strong>
                    </p>
                  )}
                </div>
              </PlaygroundStage3D>
            </section>
          </div>
        )}

        {/* Examples Tab */}
        {activeTab === "examples" && (
          <div className="space-y-12">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-foreground">Complete Input Showcase</h2>
              <p className="text-sm text-muted-foreground">
                Test inputs with icon slots, password eye toggles, and validation status indicators below.
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
                <h3 className="font-bold text-foreground">Input Props</h3>
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
                      <td className="p-4 font-mono text-primary font-semibold">type</td>
                      <td className="p-4 font-mono text-xs">"text" | "email" | "password" | "number" | "search" | "url"</td>
                      <td className="p-4 font-mono text-xs">"text"</td>
                      <td className="p-4 text-muted-foreground">HTML input type attribute.</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-mono text-primary font-semibold">size</td>
                      <td className="p-4 font-mono text-xs">"sm" | "md" | "lg"</td>
                      <td className="p-4 font-mono text-xs">"md"</td>
                      <td className="p-4 text-muted-foreground">Input height and padding scale.</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-mono text-primary font-semibold">intent</td>
                      <td className="p-4 font-mono text-xs">"default" | "success" | "error"</td>
                      <td className="p-4 font-mono text-xs">"default"</td>
                      <td className="p-4 text-muted-foreground">Visual validation color intent.</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-mono text-primary font-semibold">leftIcon</td>
                      <td className="p-4 font-mono text-xs">React.ReactNode</td>
                      <td className="p-4 font-mono text-xs">undefined</td>
                      <td className="p-4 text-muted-foreground">Icon rendered on the left inside the input slot.</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-mono text-primary font-semibold">showPasswordToggle</td>
                      <td className="p-4 font-mono text-xs">boolean</td>
                      <td className="p-4 font-mono text-xs">true</td>
                      <td className="p-4 text-muted-foreground">Enables eye show/hide button when type="password".</td>
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

export default InputDocPage;
