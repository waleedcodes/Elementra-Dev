import React from "react";
import { cn } from "@/lib/utils";

/**
 * Label component with variants
 * 
 * Props:
 * - variant: default | destructive | success | warning
 * - size: sm | md | lg
 * - required: boolean
 * - disabled: boolean
 * - className: string
 */
export function Label({
  variant = "default",
  size = "md",
  required = false,
  disabled = false,
  className,
  children,
  ...props
}) {
  const sizeClasses = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base",
  };

  const variantClasses = {
    default: "text-foreground",
    destructive: "text-destructive",
    success: "text-green-600",
    warning: "text-yellow-600",
  };

  return (
    <label
      className={cn(
        "font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
        sizeClasses[size],
        variantClasses[variant],
        disabled && "cursor-not-allowed opacity-70",
        className
      )}
      {...props}
    >
      {children}
      {required && <span className="ml-1 text-destructive">*</span>}
    </label>
  );
}

export default Label;

// Usage examples:
// <Label>Email address</Label>
// <Label variant="destructive" required>Password</Label>
// <Label size="lg" variant="success">Success message</Label>

