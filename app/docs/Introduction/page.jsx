"use client";

import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Sparkles,
  Star,
  ArrowRight,
  CheckCircle,
  Package,
  Zap,
  Code,
  Palette,
  Shield,
  Globe,
  Layers,
  Terminal,
  MousePointerClick,
  Copy,
  Check,
  Smartphone,
  Monitor,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import Earth from "@/components/ui/globe";
import { SpotlightCard, Card3D } from "@/components/DocsComp/spotlight-card";
import { Switch } from "@/src/components/ui/switch";
import { Progress } from "@/src/components/ui/progress";

const Introduction = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [demoSwitch, setDemoSwitch] = useState(true);
  const [demoProgress, setDemoProgress] = useState(78);
  const [copiedCli, setCopiedCli] = useState(false);

  const handleCopyCli = () => {
    navigator.clipboard.writeText("npx elementra-ui add button");
    setCopiedCli(true);
    toast.success("CLI command copied to clipboard!");
    setTimeout(() => setCopiedCli(false), 2000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="relative min-h-screen">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="space-y-16 sm:space-y-24 py-8"
      >
        {/* Hero Section with 3D Globe */}
        <section className="relative flex flex-col lg:flex-row items-center justify-between gap-12 pt-6">
          <div className="flex-1 text-left space-y-6">
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/30 bg-primary/10 backdrop-blur text-xs font-bold text-primary shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              <span>Elementra UI 3.0 • Modern React Design System</span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1]"
            >
              Build Fluid, Accessible &{" "}
              <span className="bg-gradient-to-r from-primary via-indigo-400 to-purple-500 text-transparent bg-clip-text">
                3D-Interactive
              </span>{" "}
              Web Apps.
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl"
            >
              A suite of 50+ production-ready, beautifully animated React components.
              Built on Tailwind CSS, Framer Motion, and Radix primitives.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-2">
              <Link href="/docs/Components/accordion">
                <Button size="lg" className="rounded-xl shadow-lg shadow-primary/20 flex items-center gap-2">
                  Explore 50 Components
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/docs/Installation">
                <Button size="lg" variant="outline" className="rounded-xl">
                  Quick Start Guide
                </Button>
              </Link>
            </motion.div>

            {/* Quick Stats Strip */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-6 pt-4 text-xs sm:text-sm text-muted-foreground"
            >
              <div className="flex items-center gap-2">
                <Package className="w-4 h-4 text-primary" />
                <span className="font-bold text-foreground">50+</span> Components
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-amber-500" />
                <span className="font-bold text-foreground">Zero</span> Config CLI
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-emerald-500" />
                <span className="font-bold text-foreground">100%</span> Accessible
              </div>
            </motion.div>
          </div>

          {/* 3D WebGL Rotating Earth Stage */}
          <motion.div
            variants={itemVariants}
            className="flex-1 flex items-center justify-center relative w-full max-w-[420px] aspect-square"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-purple-500/20 blur-3xl pointer-events-none" />
            <div className="relative w-full h-full rounded-full border border-primary/20 overflow-hidden shadow-2xl flex items-center justify-center bg-card/30 backdrop-blur-md">
              <Earth
                className="w-full h-full scale-125"
                theta={0.25}
                dark={1}
                baseColor={[0.2, 0.4, 0.9]}
                glowColor={[0.3, 0.5, 1]}
              />
            </div>
          </motion.div>
        </section>

        {/* 3D Interactive Bento Grid */}
        <section className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              Engineered for Modern Web Experiences
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-lg mx-auto">
              Interactive primitives, copy-paste CLI integration, and fluid micro-animations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            {/* Bento Card 1: Interactive 3D Tilt Component */}
            <Card3D className="md:col-span-2">
              <SpotlightCard className="p-6 sm:p-8 h-full flex flex-col justify-between space-y-6">
                <div className="space-y-2">
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary w-fit border border-primary/20">
                    <MousePointerClick className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Interactive 3D Stages</h3>
                  <p className="text-sm text-muted-foreground">
                    Live interactive components with perspective mouse tracking, dynamic backdrop filters, and responsive device viewports.
                  </p>
                </div>

                {/* Live mini widget */}
                <div className="p-4 rounded-xl border border-border bg-background/80 backdrop-blur space-y-3">
                  <div className="flex items-center justify-between text-xs font-semibold">
                    <span>Active Telemetry Monitor</span>
                    <span className="text-primary">{demoProgress}% Optimized</span>
                  </div>
                  <Progress value={demoProgress} variant="primary" />
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-xs text-muted-foreground">Enable Neural Acceleration</span>
                    <Switch checked={demoSwitch} onChange={setDemoSwitch} />
                  </div>
                </div>
              </SpotlightCard>
            </Card3D>

            {/* Bento Card 2: Interactive CLI Terminal */}
            <SpotlightCard className="p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-2">
                <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-500 w-fit border border-purple-500/20">
                  <Terminal className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold text-foreground">One-Command CLI</h3>
                <p className="text-sm text-muted-foreground">
                  Install any component directly into your project codebase with zero bloat.
                </p>
              </div>

              <div className="relative p-3.5 rounded-xl bg-zinc-950 text-zinc-200 border border-zinc-800 font-mono text-xs shadow-inner">
                <code>npx elementra-ui add button</code>
                <button
                  type="button"
                  onClick={handleCopyCli}
                  className="absolute right-2 top-2 p-1.5 rounded-md hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
                >
                  {copiedCli ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
                </button>
              </div>
            </SpotlightCard>

            {/* Bento Card 3: 50+ Component Suite */}
            <SpotlightCard className="p-6 sm:p-8 space-y-3">
              <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-500 w-fit border border-blue-500/20">
                <Layers className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold text-foreground">50+ Modular Blocks</h3>
              <p className="text-sm text-muted-foreground">
                From Modals and Carousels to Signature pads, Data Tables, and Alert Dialogs.
              </p>
            </SpotlightCard>

            {/* Bento Card 4: Tailwind & Accessible */}
            <SpotlightCard className="p-6 sm:p-8 space-y-3">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-500 w-fit border border-emerald-500/20">
                <Palette className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Full Theme Harmony</h3>
              <p className="text-sm text-muted-foreground">
                Seamless dark/light transitions with custom HSL token tailoring and high contrast.
              </p>
            </SpotlightCard>

            {/* Bento Card 5: Production Performance */}
            <SpotlightCard className="p-6 sm:p-8 space-y-3">
              <div className="p-2.5 rounded-xl bg-rose-500/10 text-rose-500 w-fit border border-rose-500/20">
                <Zap className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Tree-Shakeable</h3>
              <p className="text-sm text-muted-foreground">
                Optimized bundle footprint with zero unnecessary runtime overhead.
              </p>
            </SpotlightCard>
          </div>
        </section>

        {/* Call to Action Banner */}
        <motion.div
          variants={itemVariants}
          className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-r from-primary/20 via-purple-600/20 to-pink-600/20 p-8 sm:p-12 text-center backdrop-blur shadow-2xl"
        >
          <div className="space-y-4 max-w-2xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground">
              Ready to supercharge your user interface?
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground">
              Browse through our 50 interactive showcase documentation pages and start building today.
            </p>
            <div className="pt-2 flex justify-center gap-4">
              <Link href="/docs/Components/button">
                <Button size="lg" className="rounded-xl shadow-lg shadow-primary/25">
                  Browse Components
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Introduction;