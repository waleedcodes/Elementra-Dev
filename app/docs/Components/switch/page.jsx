"use client";

import React, { useState } from "react";
import {
  Copy,
  ToggleLeft,
  Sparkles,
  Bell,
  Moon,
  Shield,
  Wifi,
  Volume2,
  Lock,
  Eye,
  Sun,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Switch } from "@/src/components/ui/switch";
import { PlaygroundStage3D } from "@/components/DocsComp/playground-stage-3d";
import { SpotlightCard } from "@/components/DocsComp/spotlight-card";

const SwitchDocPage = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [airplaneMode, setAirplaneMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [is2FA, setIs2FA] = useState(true);
  const [isSound, setIsSound] = useState(false);
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
      id: "system-settings",
      title: "1. System & Privacy Switches",
      description: "Interactive toggles embedded within clean list settings items.",
      preview: (
        <div className="flex justify-center p-6 bg-card/60 rounded-2xl border border-border">
          <div className="w-full max-w-sm space-y-3">
            <div className="p-4 rounded-2xl border border-border bg-card/90 flex items-center justify-between shadow-sm">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-primary/10 text-primary">
                  <Wifi className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">Wireless Telemetry</p>
                  <p className="text-xs text-muted-foreground">Sync status across nodes</p>
                </div>
              </div>
              <Switch
                checked={airplaneMode}
                onChange={(val) => {
                  setAirplaneMode(val);
                  toast.info(val ? "Telemetry enabled" : "Telemetry disabled");
                }}
              />
            </div>

            <div className="p-4 rounded-2xl border border-border bg-card/90 flex items-center justify-between shadow-sm">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-500">
                  <Bell className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">Push Notifications</p>
                  <p className="text-xs text-muted-foreground">Receive real-time alerts</p>
                </div>
              </div>
              <Switch
                checked={notifications}
                onChange={(val) => {
                  setNotifications(val);
                  toast.info(val ? "Notifications enabled" : "Notifications disabled");
                }}
              />
            </div>
          </div>
        </div>
      ),
      code: `import { Switch } from "@/components/ui/switch";
import { Wifi, Bell } from "lucide-react";
import React, { useState } from "react";

export default function SettingsSwitch() {
  const [wireless, setWireless] = useState(false);
  const [alerts, setAlerts] = useState(true);

  return (
    <div className="space-y-3 max-w-sm">
      <div className="p-4 rounded-xl border flex items-center justify-between">
        <div>
          <p className="font-bold text-sm">Wireless Telemetry</p>
          <p className="text-xs text-muted-foreground">Sync status across nodes</p>
        </div>
        <Switch checked={wireless} onChange={setWireless} />
      </div>

      <div className="p-4 rounded-xl border flex items-center justify-between">
        <div>
          <p className="font-bold text-sm">Push Notifications</p>
          <p className="text-xs text-muted-foreground">Receive real-time alerts</p>
        </div>
        <Switch checked={alerts} onChange={setAlerts} />
      </div>
    </div>
  );
}`,
    },
    {
      id: "security-toggles",
      title: "2. Security & Hardware Controls",
      description: "Controls for two-factor authentication and audio sound effects.",
      preview: (
        <div className="flex justify-center p-6 bg-card/60 rounded-2xl border border-border">
          <div className="w-full max-w-sm space-y-3">
            <div className="p-4 rounded-2xl border border-border bg-card/90 flex items-center justify-between shadow-sm">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-purple-500/10 text-purple-500">
                  <Shield className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">Two-Factor Authentication</p>
                  <p className="text-xs text-muted-foreground">Require security key</p>
                </div>
              </div>
              <Switch
                checked={is2FA}
                onChange={(val) => {
                  setIs2FA(val);
                  toast.info(val ? "2FA activated" : "2FA deactivated");
                }}
              />
            </div>

            <div className="p-4 rounded-2xl border border-border bg-card/90 flex items-center justify-between shadow-sm">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-amber-500/10 text-amber-500">
                  <Volume2 className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">Haptic Audio Cues</p>
                  <p className="text-xs text-muted-foreground">Play sound on click</p>
                </div>
              </div>
              <Switch
                checked={isSound}
                onChange={(val) => {
                  setIsSound(val);
                  toast.info(val ? "Audio enabled" : "Audio muted");
                }}
              />
            </div>
          </div>
        </div>
      ),
      code: `import { Switch } from "@/components/ui/switch";
import { Shield, Volume2 } from "lucide-react";
import React, { useState } from "react";

export default function SecuritySwitches() {
  const [twoFactor, setTwoFactor] = useState(true);

  return (
    <div className="p-4 rounded-xl border flex items-center justify-between max-w-sm">
      <div className="flex items-center gap-3">
        <Shield className="h-4 w-4 text-purple-500" />
        <div>
          <p className="text-sm font-bold">Two-Factor Authentication</p>
          <p className="text-xs text-muted-foreground">Require security key</p>
        </div>
      </div>
      <Switch checked={twoFactor} onChange={setTwoFactor} />
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
          <div className="p-2.5 rounded-2xl bg-amber-500/10 text-amber-500 border border-amber-500/20 shadow-sm">
            <ToggleLeft className="h-6 w-6" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">Switch</h1>
        </div>
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
          A control that allows users to toggle between two mutually exclusive states with fluid spring animation.
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
                    <code>npx elementra-ui add switch</code>
                  </pre>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="absolute right-1 top-1 h-7 w-7"
                    onClick={() => handleCopy("npx elementra-ui add switch")}
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
                  <div className="p-4 rounded-2xl border border-border bg-card/90 backdrop-blur shadow-md flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-primary/10 text-primary">
                        <Wifi className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-foreground">Wireless Telemetry</p>
                        <p className="text-xs text-muted-foreground">Sync status across nodes</p>
                      </div>
                    </div>
                    <Switch
                      checked={airplaneMode}
                      onChange={(val) => {
                        setAirplaneMode(val);
                        toast.info(val ? "Telemetry enabled" : "Telemetry disabled");
                      }}
                    />
                  </div>
                </div>
              </PlaygroundStage3D>
            </section>
          </div>
        )}

        {/* Examples Tab */}
        {activeTab === "examples" && (
          <div className="space-y-12">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-foreground">Complete Switch Showcase</h2>
              <p className="text-sm text-muted-foreground">
                Interact with live switch toggles for system preferences, security, and alerts below.
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
                <h3 className="font-bold text-foreground">Switch Props</h3>
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
                      <td className="p-4 font-mono text-primary font-semibold">checked</td>
                      <td className="p-4 font-mono text-xs">boolean</td>
                      <td className="p-4 font-mono text-xs">false</td>
                      <td className="p-4 text-muted-foreground">The controlled checked state of the switch.</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-mono text-primary font-semibold">onChange</td>
                      <td className="p-4 font-mono text-xs">{"(checked: boolean) => void"}</td>
                      <td className="p-4 font-mono text-xs">-</td>
                      <td className="p-4 text-muted-foreground">Callback triggered when checked state changes.</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-mono text-primary font-semibold">disabled</td>
                      <td className="p-4 font-mono text-xs">boolean</td>
                      <td className="p-4 font-mono text-xs">false</td>
                      <td className="p-4 text-muted-foreground">Prevents user interaction when true.</td>
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

export default SwitchDocPage;
