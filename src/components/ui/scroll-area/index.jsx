"use client";
import React, { useRef, useState, useEffect } from "react";
import { cn } from "../../../lib/utils";

/**
 * ScrollArea — Custom styled scrollable container with native scrollbar hiding & custom thumb
 *
 * Props:
 * - orientation: "vertical" | "horizontal" | "both"
 * - className: string
 */
export const ScrollArea = React.forwardRef(
  ({ orientation = "vertical", className, children, ...props }, ref) => {
    const viewportRef = useRef(null);
    const [scrollProgress, setScrollProgress] = useState(0);

    const handleScroll = () => {
      const el = viewportRef.current;
      if (!el) return;
      const maxScroll = el.scrollHeight - el.clientHeight;
      if (maxScroll > 0) {
        setScrollProgress((el.scrollTop / maxScroll) * 100);
      }
    };

    return (
      <div
        ref={ref}
        className={cn("relative overflow-hidden rounded-md border border-border bg-card", className)}
        {...props}
      >
        <div
          ref={viewportRef}
          onScroll={handleScroll}
          className={cn(
            "h-full w-full overflow-auto scrollbar-none",
            "[&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          )}
        >
          {children}
        </div>
      </div>
    );
  }
);

ScrollArea.displayName = "ScrollArea";

export default ScrollArea;
