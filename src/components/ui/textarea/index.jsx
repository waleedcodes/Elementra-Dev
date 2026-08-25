import React from "react";
import { cn } from "@/lib/utils";

/**
 * Textarea component
 * 
 * Props:
 * - size: sm | md | lg
 * - intent: default | success | error
 * - disabled: boolean
 * - resize: none | vertical | horizontal | both
 * - className: string
 */
export function Textarea({
  size = "md",
  intent = "default",
  disabled = false,
  resize = "vertical",
  className,
  ...props
}) {
  const sizeClasses = {
    sm: "min-h-[60px] px-3 py-2 text-sm",
    md: "min-h-[80px] px-3.5 py-2.5 text-sm",
    lg: "min-h-[100px] px-4 py-3 text-base",
  };

  const intentClasses = {
    default: "border-input focus-visible:ring-ring",
    success: "border-green-500/60 focus-visible:ring-green-500/30",
    error: "border-red-500/60 focus-visible:ring-red-500/30",
  };

  const resizeClasses = {
    none: "resize-none",
    vertical: "resize-y",
    horizontal: "resize-x",
    both: "resize",
  };

  return (
    <textarea
      disabled={disabled}
      className={cn(
        "flex w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background",
        "placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
        "disabled:cursor-not-allowed disabled:opacity-50",
        sizeClasses[size],
        intentClasses[intent],
        resizeClasses[resize],
        className
      )}
      {...props}
    />
  );
}

export default Textarea;

// Usage examples:
// <Textarea placeholder="Enter your message..." />
// <Textarea size="lg" intent="error" placeholder="Error message" />
// <Textarea resize="none" placeholder="No resize" />
