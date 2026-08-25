import React from "react";
import { cn } from "@/lib/utils";

/**
 * Separator component
 * 
 * Props:
 * - orientation: horizontal | vertical (default: horizontal)
 * - className: string
 */
export function Separator({ orientation = "horizontal", className, ...props }) {
  return (
    <div
      className={cn(
        "shrink-0 bg-border",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        className
      )}
      {...props}
    />
  );
}

export default Separator;

// Usage examples:
// <Separator />
// <Separator orientation="vertical" className="h-4" />
