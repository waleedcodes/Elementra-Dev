"use client";

import React from "react";
import { cn } from "@/lib/utils";

export const Progress = React.forwardRef(
  (
    {
      className,
      value = 0,
      max = 100,
      variant = "default",
      size = "md",
      showValue = false,
      animation = "none",
      striped = false,
      rounded = "default",
      ...props
    },
    ref
  ) => {
    const percentage = Math.min(Math.max(0, (value / max) * 100), 100);

    const variants = {
      default: "bg-muted",
      primary: "bg-blue-500/20",
      secondary: "bg-purple-500/20",
      success: "bg-emerald-500/20",
      warning: "bg-amber-500/20",
      danger: "bg-red-500/20",
      info: "bg-cyan-500/20",
    };

    const fillVariants = {
      default: "bg-primary",
      primary: "bg-blue-600 dark:bg-blue-500",
      secondary: "bg-purple-600 dark:bg-purple-500",
      success: "bg-emerald-600 dark:bg-emerald-500",
      warning: "bg-amber-600 dark:bg-amber-500",
      danger: "bg-red-600 dark:bg-red-500",
      info: "bg-cyan-600 dark:bg-cyan-500",
    };

    const sizes = {
      xs: "h-1.5",
      sm: "h-2.5",
      md: "h-3.5",
      lg: "h-5",
      xl: "h-7",
    };

    const roundedVariants = {
      default: "rounded-full",
      full: "rounded-full",
      none: "rounded-none",
    };

    const animations = {
      none: "",
      pulse: "animate-pulse",
      shimmer: "animate-pulse",
      glow: "shadow-[0_0_12px_rgba(59,130,246,0.5)]",
    };

    return (
      <div className={cn("w-full space-y-1.5", className)} {...props}>
        <div
          className={cn(
            "w-full overflow-hidden p-0.5 border border-border/40",
            variants[variant],
            sizes[size],
            roundedVariants[rounded]
          )}
        >
          <div
            ref={ref}
            className={cn(
              "h-full transition-all duration-500 ease-out shadow-sm",
              fillVariants[variant],
              animations[animation],
              roundedVariants[rounded]
            )}
            style={{ width: `${percentage}%` }}
          />
        </div>
        {showValue && (
          <div className="text-xs font-mono font-bold text-right text-muted-foreground">
            {Math.round(percentage)}%
          </div>
        )}
      </div>
    );
  }
);

Progress.displayName = "Progress";

export default Progress;
