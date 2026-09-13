"use client";

import React, { useState } from "react";
import {
  Copy,
  Sliders,
  Sparkles,
  Volume2,
  Sun,
  DollarSign,
  Thermometer,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Slider } from "@/src/components/ui/slider";
import { PlaygroundStage3D } from "@/components/DocsComp/playground-stage-3d";
import { SpotlightCard } from "@/components/DocsComp/spotlight-card";

const SliderDocPage = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [volumeVal, setVolumeVal] = useState(65);
  const [brightnessVal, setBrightnessVal] = useState(80);
  const [priceVal, setPriceVal] = useState(250);
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
      id: "audio-slider",
      title: "1. Media Volume Slider",
      description: "Smooth continuous slider with real-time percentage feedback and speaker icon.",
      preview: (
        <div className="flex flex-col gap-3 p-6 bg-card/60 rounded-2xl border border-border w-full max-w-md mx-auto">
          <div className="flex items-center justify-between text-sm font-semibold text-foreground">
            <span className="flex items-center gap-2">
              <Volume2 className="h-4 w-4 text-primary" /> Audio Volume
            </span>
            <span className="font-mono text-primary font-bold">{volumeVal}%</span>
          </div>
          <Slider
            value={volumeVal}
            onValueChange={setVolumeVal}
            min={0}
            max={100}
            className="w-full"
          />
        </div>
      ),
      code: `import { Slider } from "@/components/ui/slider";
import { Volume2 } from "lucide-react";
import React, { useState } from "react";

export default function VolumeSlider() {
  const [volume, setVolume] = useState(65);

  return (
    <div className="space-y-3 max-w-sm">
      <div className="flex justify-between font-semibold text-sm">
        <span className="flex items-center gap-2">
          <Volume2 className="h-4 w-4" /> Volume
        </span>
        <span>{volume}%</span>
      </div>
      <Slider value={volume} onValueChange={setVolume} min={0} max={100} />
    </div>
  );
}`,
    },
    {
      id: "brightness-slider",
      title: "2. Display Brightness Level",
      description: "Controls ambient brightness with subtle step increments.",
      preview: (
        <div className="flex flex-col gap-3 p-6 bg-card/60 rounded-2xl border border-border w-full max-w-md mx-auto">
          <div className="flex items-center justify-between text-sm font-semibold text-foreground">
            <span className="flex items-center gap-2">
              <Sun className="h-4 w-4 text-amber-500" /> Screen Luminance
            </span>
            <span className="font-mono text-amber-500 font-bold">{brightnessVal}%</span>
          </div>
          <Slider
            value={brightnessVal}
            onValueChange={setBrightnessVal}
            min={10}
            max={100}
            className="w-full"
          />
        </div>
      ),
      code: `import { Slider } from "@/components/ui/slider";
import { Sun } from "lucide-react";
import React, { useState } from "react";

export default function BrightnessSlider() {
  const [brightness, setBrightness] = useState(80);

  return (
    <div className="space-y-3 max-w-sm">
      <div className="flex justify-between font-semibold text-sm">
        <span className="flex items-center gap-2">
          <Sun className="h-4 w-4 text-amber-500" /> Brightness
        </span>
        <span>{brightness}%</span>
      </div>
      <Slider value={brightness} onValueChange={setBrightness} min={10} max={100} />
    </div>
  );
}`,
    },
    {
      id: "price-filter",
      title: "3. Budget & Price Threshold",
      description: "Custom step increments for e-commerce filtering and budget caps.",
      preview: (
        <div className="flex flex-col gap-3 p-6 bg-card/60 rounded-2xl border border-border w-full max-w-md mx-auto">
          <div className="flex items-center justify-between text-sm font-semibold text-foreground">
            <span className="flex items-center gap-2">
              <DollarSign className="h-4 w-4 text-emerald-500" /> Max Budget
            </span>
            <span className="font-mono text-emerald-500 font-bold">${priceVal}</span>
          </div>
          <Slider
            value={priceVal}
            onValueChange={setPriceVal}
            min={50}
            max={1000}
            step={25}
            className="w-full"
          />
        </div>
      ),
      code: `import { Slider } from "@/components/ui/slider";
import { DollarSign } from "lucide-react";
import React, { useState } from "react";

export default function PriceSlider() {
  const [price, setPrice] = useState(250);

  return (
    <div className="space-y-3 max-w-sm">
      <div className="flex justify-between font-semibold text-sm">
        <span className="flex items-center gap-2">
          <DollarSign className="h-4 w-4 text-emerald-500" /> Max Budget
        </span>
        <span>\${price}</span>
      </div>
      <Slider value={price} onValueChange={setPrice} min={50} max={1000} step={25} />
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
            <Sliders className="h-6 w-6" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">Slider</h1>
        </div>
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
          An interactive slider component allowing users to make selections from a range of numerical values with fluid physics.
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
                    <code>npx elementra-ui add slider</code>
                  </pre>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="absolute right-1 top-1 h-7 w-7"
                    onClick={() => handleCopy("npx elementra-ui add slider")}
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
                  <div className="flex justify-between items-center text-sm font-bold">
                    <span>Performance Output</span>
                    <span className="text-primary font-mono">{volumeVal}%</span>
                  </div>
                  <Slider
                    value={volumeVal}
                    onValueChange={setVolumeVal}
                    min={0}
                    max={100}
                    className="w-full"
                  />
                </div>
              </PlaygroundStage3D>
            </section>
          </div>
        )}

        {/* Examples Tab */}
        {activeTab === "examples" && (
          <div className="space-y-12">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-foreground">Complete Slider Showcase</h2>
              <p className="text-sm text-muted-foreground">
                Interact with volume bars, screen luminance, and price thresholds with live values.
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
                <h3 className="font-bold text-foreground">Slider Props</h3>
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
                      <td className="p-4 font-mono text-primary font-semibold">value</td>
                      <td className="p-4 font-mono text-xs">number | [number, number]</td>
                      <td className="p-4 font-mono text-xs">0</td>
                      <td className="p-4 text-muted-foreground">The controlled numeric value of the slider.</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-mono text-primary font-semibold">onValueChange</td>
                      <td className="p-4 font-mono text-xs">{"(value: number) => void"}</td>
                      <td className="p-4 font-mono text-xs">-</td>
                      <td className="p-4 text-muted-foreground">Callback fired continuously on drag.</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-mono text-primary font-semibold">min</td>
                      <td className="p-4 font-mono text-xs">number</td>
                      <td className="p-4 font-mono text-xs">0</td>
                      <td className="p-4 text-muted-foreground">The minimum allowed value.</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-mono text-primary font-semibold">max</td>
                      <td className="p-4 font-mono text-xs">number</td>
                      <td className="p-4 font-mono text-xs">100</td>
                      <td className="p-4 text-muted-foreground">The maximum allowed value.</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-mono text-primary font-semibold">step</td>
                      <td className="p-4 font-mono text-xs">number</td>
                      <td className="p-4 font-mono text-xs">1</td>
                      <td className="p-4 text-muted-foreground">Step granularity of value increments.</td>
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

export default SliderDocPage;
