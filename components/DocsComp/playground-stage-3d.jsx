"use client";

import React, { useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import {
  Monitor,
  Tablet,
  Smartphone,
  Sparkles,
  Copy,
  Check,
  RotateCcw,
  Layers,
  Eye,
  Code,
  Palette,
  Maximize2,
  Minimize2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export function PlaygroundStage3D({
  children,
  code,
  title,
  description,
  className,
  defaultBackdrop = "grid",
  defaultViewport = "desktop",
}) {
  const [activeTab, setActiveTab] = useState("preview");
  const [backdrop, setBackdrop] = useState(defaultBackdrop);
  const [viewport, setViewport] = useState(defaultViewport);
  const [is3DEnabled, setIs3DEnabled] = useState(true);
  const [copied, setCopied] = useState(false);
  const [resetKey, setResetKey] = useState(0);

  // 3D Tilt Physics
  const stageRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 220, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 220, damping: 25 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

  const handleMouseMove = (e) => {
    if (!is3DEnabled || !stageRef.current) return;
    const rect = stageRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const handleCopy = () => {
    if (code) {
      navigator.clipboard.writeText(code);
      setCopied(true);
      toast.success("Code snippet copied to clipboard");
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleReset = () => {
    setResetKey((prev) => prev + 1);
    toast.info("Playground reset");
  };

  // Backdrops
  const backdropStyles = {
    grid: "bg-card/70 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]",
    aurora: "bg-gradient-to-br from-indigo-950/40 via-purple-950/30 to-pink-950/30",
    cyberpunk: "bg-zinc-950/90 bg-[radial-gradient(#06b6d4_1px,transparent_1px)] [background-size:16px_16px] border-cyan-500/20 shadow-[0_0_50px_-12px_rgba(6,182,212,0.15)]",
    glass: "bg-card/40 backdrop-blur-xl border-white/10",
    minimal: "bg-muted/30",
  };

  // Viewport widths
  const viewportStyles = {
    desktop: "w-full max-w-full",
    tablet: "w-full max-w-[620px] rounded-3xl border-4 border-border/80 shadow-2xl p-6 bg-card/90",
    mobile: "w-full max-w-[340px] rounded-[36px] border-[6px] border-border shadow-2xl p-6 bg-card/95 relative",
  };

  return (
    <div className={cn("w-full space-y-4", className)}>
      {/* Top Header & Stage Controller Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-3 rounded-2xl border border-border bg-card/80 backdrop-blur shadow-sm">
        {/* Tab Switcher (Preview / Code) */}
        <div className="flex items-center gap-1 p-1 rounded-xl bg-muted/60 border border-border/50">
          <button
            type="button"
            onClick={() => setActiveTab("preview")}
            className={cn(
              "flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all",
              activeTab === "preview"
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            <Eye className="h-3.5 w-3.5" />
            Preview
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("code")}
            className={cn(
              "flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all",
              activeTab === "code"
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            <Code className="h-3.5 w-3.5" />
            Code
          </button>
        </div>

        {/* Center: Device Viewport Controls (only visible on preview tab) */}
        {activeTab === "preview" && (
          <div className="hidden sm:flex items-center gap-1 p-1 rounded-xl bg-muted/60 border border-border/50">
            <button
              type="button"
              title="Desktop View"
              onClick={() => setViewport("desktop")}
              className={cn(
                "p-1.5 rounded-lg transition-all",
                viewport === "desktop"
                  ? "bg-background text-primary shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <Monitor className="h-4 w-4" />
            </button>
            <button
              type="button"
              title="Tablet View"
              onClick={() => setViewport("tablet")}
              className={cn(
                "p-1.5 rounded-lg transition-all",
                viewport === "tablet"
                  ? "bg-background text-primary shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <Tablet className="h-4 w-4" />
            </button>
            <button
              type="button"
              title="Mobile View (3D Bezel)"
              onClick={() => setViewport("mobile")}
              className={cn(
                "p-1.5 rounded-lg transition-all",
                viewport === "mobile"
                  ? "bg-background text-primary shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <Smartphone className="h-4 w-4" />
            </button>
          </div>
        )}

        {/* Right: Backdrop Theme & 3D Tilt Controls */}
        <div className="flex items-center gap-2">
          {activeTab === "preview" && (
            <>
              {/* Backdrop Picker */}
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  title="Grid Matrix Backdrop"
                  onClick={() => setBackdrop("grid")}
                  className={cn(
                    "h-6 w-6 rounded-full border border-border bg-card hover:scale-110 transition-all",
                    backdrop === "grid" && "ring-2 ring-primary ring-offset-2"
                  )}
                />
                <button
                  type="button"
                  title="Aurora Mesh Backdrop"
                  onClick={() => setBackdrop("aurora")}
                  className={cn(
                    "h-6 w-6 rounded-full border border-border bg-gradient-to-tr from-indigo-500 to-pink-500 hover:scale-110 transition-all",
                    backdrop === "aurora" && "ring-2 ring-primary ring-offset-2"
                  )}
                />
                <button
                  type="button"
                  title="Cyberpunk Neon Backdrop"
                  onClick={() => setBackdrop("cyberpunk")}
                  className={cn(
                    "h-6 w-6 rounded-full border border-border bg-cyan-950 hover:scale-110 transition-all",
                    backdrop === "cyberpunk" && "ring-2 ring-cyan-400 ring-offset-2"
                  )}
                />
              </div>

              {/* 3D Tilt Toggle */}
              <button
                type="button"
                onClick={() => setIs3DEnabled(!is3DEnabled)}
                className={cn(
                  "flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold border transition-all",
                  is3DEnabled
                    ? "border-primary/40 bg-primary/10 text-primary shadow-sm"
                    : "border-border text-muted-foreground hover:text-foreground"
                )}
              >
                <Sparkles className="h-3.5 w-3.5" />
                3D Tilt
              </button>

              {/* Reset Stage */}
              <button
                type="button"
                title="Reset Component State"
                onClick={handleReset}
                className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-all"
              >
                <RotateCcw className="h-4 w-4" />
              </button>
            </>
          )}

          {/* Copy Button */}
          <Button
            size="sm"
            variant="outline"
            onClick={handleCopy}
            className="flex items-center gap-1.5 text-xs h-8"
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5 text-green-500" />
                Copied
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5" />
                Copy
              </>
            )}
          </Button>
        </div>
      </div>

      {/* Main 3D Stage Container */}
      <AnimatePresence mode="wait">
        {activeTab === "preview" ? (
          <motion.div
            key="preview-stage"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="perspective-1000 w-full"
          >
            <motion.div
              ref={stageRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                rotateX: is3DEnabled ? rotateX : 0,
                rotateY: is3DEnabled ? rotateY : 0,
                transformStyle: "preserve-3d",
              }}
              className={cn(
                "relative rounded-3xl border border-border p-6 sm:p-12 min-h-[380px] flex flex-col items-center justify-center transition-all duration-300 overflow-hidden shadow-xl",
                backdropStyles[backdrop]
              )}
            >
              {/* Dynamic 3D Floating Glow Orb */}
              <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-indigo-500/15 blur-3xl" />

              {/* Viewport Frame */}
              <div
                key={resetKey}
                style={{
                  transform: is3DEnabled ? "translateZ(35px)" : "none",
                  transformStyle: "preserve-3d",
                }}
                className={cn(
                  "flex items-center justify-center transition-all duration-300",
                  viewportStyles[viewport]
                )}
              >
                {/* Mobile Camera Notch Simulation */}
                {viewport === "mobile" && (
                  <div className="absolute top-2.5 left-1/2 -translate-x-1/2 h-3.5 w-20 bg-border/80 rounded-full z-20 pointer-events-none" />
                )}

                {/* Actual Live Component Output */}
                <div className="w-full flex items-center justify-center">
                  {children}
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="code-stage"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="relative rounded-2xl border border-border bg-card overflow-hidden shadow-md"
          >
            <pre className="p-5 font-mono text-sm overflow-x-auto text-foreground">
              <code>{code}</code>
            </pre>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default PlaygroundStage3D;
