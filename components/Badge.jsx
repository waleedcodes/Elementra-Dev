// components/ui/badge.jsx
"use client";

import React from "react";
import { cn } from "@/lib/utils";

const Badge = React.forwardRef(
  (
    {
      className,
      variant = "default",
      size = "md",
      animation = "none",
      rounded = "default",
      children,
      ...props
    },
    ref
  ) => {
    const variants = {
      default: "bg-gray-100 text-gray-900 border-gray-200",
      primary: "bg-blue-100 text-blue-900 border-blue-200",
      secondary: "bg-purple-100 text-purple-900 border-purple-200",
      success: "bg-green-100 text-green-900 border-green-200",
      warning: "bg-yellow-100 text-yellow-900 border-yellow-200",
      danger: "bg-red-100 text-red-900 border-red-200",
      info: "bg-cyan-100 text-cyan-900 border-cyan-200",
      outline: "bg-transparent border-gray-300 text-gray-900",
    };

    const sizes = {
      sm: "px-2 py-0.5 text-xs",
      md: "px-2.5 py-0.5 text-sm",
      lg: "px-3 py-1 text-base",
    };

    const roundedVariants = {
      default: "rounded-md",
      full: "rounded-full",
      none: "rounded-none",
    };

    const animations = {
      none: "",
      pulse: "animate-pulse",
      bounce: "animate-bounce",
      fade: "animate-fade-in",
      glow: "shadow-glow transition-shadow duration-1000 animate-pulse",
    };

    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center border font-medium",
          variants[variant],
          sizes[size],
          roundedVariants[rounded],
          animations[animation],
          className
        )}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = "Badge";

export { Badge };
