"use client";
import { cn } from "@/lib/utils";
import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

/**
 * ScratchToReveal Component - Enhanced with Dark Mode Support
 * 
 * Features:
 * - Interactive scratch-to-reveal functionality with canvas
 * - Full dark mode compatibility with theme colors
 * - Custom cursor with theme-aware colors
 * - Responsive shadow system for light/dark themes
 * - Multiple variants: gradient, radial, solid, pattern
 * - Smooth animations and transitions
 */
const ScratchToReveal = ({
  width,
  height,
  minScratchPercentage = 90,
  onComplete,
  children,
  className,
  variant = "gradient", // "gradient", "radial", "solid", "pattern"
  gradientColors = ["#fb923c", "#f472b6", "#a855f7"], // Enhanced theme colors: primary orange to secondary pink to accent purple
  scratchRadius = 30,
  backgroundColor = "hsl(var(--muted))", // Uses muted color for better contrast across themes
  revealAnimation = "pop", // "pop", "fade", "spin", "bounce"
  cursorSize = 32,
  borderRadius = "24px", // Rounded corners by default
  showOverlayOnly = true, // This will hide content until scratched
}) => {
  const canvasRef = useRef(null);
  const [isScratching, setIsScratching] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const controls = useAnimation();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (canvas && ctx) {
      // Clear canvas first
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Apply different background styles based on variant
      switch (variant) {
        case "gradient":
          const gradient = ctx.createLinearGradient(
            0,
            0,
            canvas.width,
            canvas.height
          );
          gradientColors.forEach((color, index) => {
            gradient.addColorStop(index / (gradientColors.length - 1), color);
          });
          ctx.fillStyle = gradient;
          break;
        case "radial":
          const radialGradient = ctx.createRadialGradient(
            width / 2,
            height / 2,
            0,
            width / 2,
            height / 2,
            Math.max(width, height) / 2
          );
          gradientColors.forEach((color, index) => {
            radialGradient.addColorStop(
              index / (gradientColors.length - 1),
              color
            );
          });
          ctx.fillStyle = radialGradient;
          break;
        case "solid":
          ctx.fillStyle = gradientColors[0] || backgroundColor;
          break;
        case "pattern":
          // Create a pattern with better dark mode support
          const patternCanvas = document.createElement("canvas");
          patternCanvas.width = 20;
          patternCanvas.height = 20;
          const patternCtx = patternCanvas.getContext("2d");
          patternCtx.fillStyle = gradientColors[0];
          patternCtx.fillRect(0, 0, 20, 20);
          patternCtx.fillStyle = gradientColors[1] || "hsl(var(--muted-foreground))";
          patternCtx.fillRect(0, 0, 10, 10);
          patternCtx.fillRect(10, 10, 10, 10);
          const pattern = ctx.createPattern(patternCanvas, "repeat");
          ctx.fillStyle = pattern;
          break;
        default:
          ctx.fillStyle = gradientColors[0] || backgroundColor;
      }

      // Draw with rounded corners if specified
      if (parseFloat(borderRadius) > 0) {
        const radius = parseFloat(borderRadius);
        ctx.beginPath();
        ctx.moveTo(radius, 0);
        ctx.lineTo(canvas.width - radius, 0);
        ctx.quadraticCurveTo(canvas.width, 0, canvas.width, radius);
        ctx.lineTo(canvas.width, canvas.height - radius);
        ctx.quadraticCurveTo(
          canvas.width,
          canvas.height,
          canvas.width - radius,
          canvas.height
        );
        ctx.lineTo(radius, canvas.height);
        ctx.quadraticCurveTo(0, canvas.height, 0, canvas.height - radius);
        ctx.lineTo(0, radius);
        ctx.quadraticCurveTo(0, 0, radius, 0);
        ctx.closePath();
        ctx.fill();
      } else {
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
    }
  }, [variant, backgroundColor, gradientColors, width, height, borderRadius]);

  useEffect(() => {
    const handleDocumentMouseMove = (event) => {
      if (!isScratching) return;
      scratch(event.clientX, event.clientY);
    };

    const handleDocumentTouchMove = (event) => {
      if (!isScratching) return;
      const touch = event.touches[0];
      scratch(touch.clientX, touch.clientY);
    };

    const handleDocumentMouseUp = () => {
      setIsScratching(false);
      checkCompletion();
    };

    const handleDocumentTouchEnd = () => {
      setIsScratching(false);
      checkCompletion();
    };

    document.addEventListener("mousemove", handleDocumentMouseMove);
    document.addEventListener("touchmove", handleDocumentTouchMove);
    document.addEventListener("mouseup", handleDocumentMouseUp);
    document.addEventListener("touchend", handleDocumentTouchEnd);
    document.addEventListener("touchcancel", handleDocumentTouchEnd);

    return () => {
      document.removeEventListener("mousemove", handleDocumentMouseMove);
      document.removeEventListener("touchmove", handleDocumentTouchMove);
      document.removeEventListener("mouseup", handleDocumentMouseUp);
      document.removeEventListener("touchend", handleDocumentTouchEnd);
      document.removeEventListener("touchcancel", handleDocumentTouchEnd);
    };
  }, [isScratching]);

  const handleMouseDown = () => setIsScratching(true);

  const handleTouchStart = () => setIsScratching(true);

  const scratch = (clientX, clientY) => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (canvas && ctx) {
      const rect = canvas.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      ctx.globalCompositeOperation = "destination-out";
      ctx.beginPath();
      ctx.arc(x, y, scratchRadius, 0, Math.PI * 2);
      ctx.fill();
    }
  };

  const checkCompletion = () => {
    if (isComplete) return;

    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (canvas && ctx) {
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const pixels = imageData.data;
      const totalPixels = pixels.length / 4;
      let clearPixels = 0;

      for (let i = 3; i < pixels.length; i += 4) {
        if (pixels[i] === 0) clearPixels++;
      }

      const percentage = (clearPixels / totalPixels) * 100;

      if (percentage >= minScratchPercentage) {
        setIsComplete(true);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        startAnimation();
        if (onComplete) {
          onComplete();
        }
      }
    }
  };

  const startAnimation = () => {
    // Different animations based on the revealAnimation prop
    switch (revealAnimation) {
      case "pop":
        controls.start({
          scale: [1, 1.1, 1],
          transition: { duration: 0.5 },
        });
        break;
      case "fade":
        controls.start({
          opacity: [0, 1],
          transition: { duration: 0.5 },
        });
        break;
      case "spin":
        controls.start({
          rotate: [0, 360],
          transition: { duration: 0.7, ease: "easeOut" },
        });
        break;
      case "bounce":
        controls.start({
          y: [0, -20, 0],
          transition: { duration: 0.5, times: [0, 0.5, 1] },
        });
        break;
      default:
        controls.start({
          scale: [1, 1.1, 1],
          transition: { duration: 0.3 },
        });
    }
  };

  // Create a custom cursor SVG string with dark mode support
  const cursorSvg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${cursorSize}" height="${cursorSize}" viewBox="0 0 ${cursorSize} ${cursorSize}">
      <circle cx="${cursorSize / 2}" cy="${cursorSize / 2}" r="${
    cursorSize / 2 - 1
  }" fill="rgba(249, 115, 22, 0.8)" stroke="rgba(251, 146, 60, 0.9)" stroke-width="2px" />
      <circle cx="${cursorSize / 2}" cy="${cursorSize / 2}" r="${
    cursorSize / 4
  }" fill="rgba(255, 255, 255, 0.9)" />
    </svg>
  `;

  const cursorDataUri = `data:image/svg+xml;base64,${btoa(cursorSvg)}`;

  return (
    <motion.div
      className={cn(
        "relative select-none shadow-lg border bg-card", 
        "dark:shadow-xl dark:shadow-black/20 dark:border-border", 
        className
      )}
      style={{
        width,
        height,
        cursor: `url('${cursorDataUri}'), auto`,
        borderRadius,
      }}
      animate={controls}
    >
      {/* Content container - hidden initially if showOverlayOnly is true */}
      <div
        className="absolute left-0 top-0 flex h-full w-full items-center justify-center text-foreground"
        style={{
          opacity: showOverlayOnly && !isComplete ? 0 : 1,
          transition: "opacity 0.3s ease",
          pointerEvents: "none",
          borderRadius,
        }}
      >
        {children}
      </div>

      {/* Canvas overlay for scratching - with dark mode support */}
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        className="absolute left-0 top-0 transition-all duration-300"
        style={{ borderRadius }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      ></canvas>
    </motion.div>
  );
};

export default ScratchToReveal;
