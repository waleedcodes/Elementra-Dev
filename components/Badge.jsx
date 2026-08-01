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
      default: "bg-secondary text-secondary-foreground border-border",
      primary: "bg-primary/10 text-primary border-primary/20",
      secondary: "bg-secondary text-secondary-foreground border-border",
      success: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
      warning: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
      danger: "bg-destructive/10 text-destructive border-destructive/20",
      info: "bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/20",
      outline: "bg-transparent border-border text-foreground",
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
