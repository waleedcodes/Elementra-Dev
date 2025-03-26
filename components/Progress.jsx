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
      default: "bg-gray-200",
      primary: "bg-blue-200",
      secondary: "bg-purple-200",
      success: "bg-green-200",
      warning: "bg-yellow-200",
      danger: "bg-red-200",
      info: "bg-cyan-200",
    };

    const fillVariants = {
      default: "bg-gray-600",
      primary: "bg-blue-600",
      secondary: "bg-purple-600",
      success: "bg-green-600",
      warning: "bg-yellow-600",
      danger: "bg-red-600",
      info: "bg-cyan-600",
    };

    const sizes = {
      xs: "h-1",
      sm: "h-2",
      md: "h-4",
      lg: "h-6",
      xl: "h-8",
    };

    const roundedVariants = {
      default: "rounded-md",
      full: "rounded-full",
      none: "rounded-none",
    };

    const animations = {
      none: "",
      pulse: "animate-pulse",
      shimmer: "animate-shimmer",
      glow: "animate-glow",
    };

    return (
      <div className={cn("w-full", className)} {...props}>
        <div
          className={cn(
            "w-full overflow-hidden",
            variants[variant],
            sizes[size],
            roundedVariants[rounded]
          )}
        >
          <div
            ref={ref}
            className={cn(
              "h-full transition-all duration-500 ease-in-out",
              striped && "bg-stripe-pattern bg-size-stripe",
              fillVariants[variant],
              animations[animation],
              roundedVariants[rounded]
            )}
            style={{ width: `${percentage}%` }}
          />
        </div>
        {showValue && (
          <div className="mt-1 text-xs text-right text-gray-500">
            {Math.round(percentage)}%
          </div>
        )}
      </div>
    );
  }
);

Progress.displayName = "Progress";

// Remove this line completely since Progress is already exported earlier
// export { Progress };
