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
      default: "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-200 dark:border-gray-700",
      primary: "bg-blue-100 dark:bg-blue-900/30 text-blue-900 dark:text-blue-200 border-blue-200 dark:border-blue-700",
      secondary: "bg-purple-100 dark:bg-purple-900/30 text-purple-900 dark:text-purple-200 border-purple-200 dark:border-purple-700",
      success: "bg-green-100 dark:bg-green-900/30 text-green-900 dark:text-green-200 border-green-200 dark:border-green-700",
      warning: "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-900 dark:text-yellow-200 border-yellow-200 dark:border-yellow-700",
      danger: "bg-red-100 dark:bg-red-900/30 text-red-900 dark:text-red-200 border-red-200 dark:border-red-700",
      info: "bg-cyan-100 dark:bg-cyan-900/30 text-cyan-900 dark:text-cyan-200 border-cyan-200 dark:border-cyan-700",
      outline: "bg-transparent border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100",
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
