"use client";
import React from "react";
import { cn } from "../../../lib/utils";

/**
 * AspectRatio — Enforces aspect ratio for images, video embeds, and containers
 *
 * Props:
 * - ratio: number (e.g. 16/9, 4/3, 1, 21/9)
 * - className: string
 */
export const AspectRatio = React.forwardRef(
  ({ ratio = 16 / 9, className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("relative w-full overflow-hidden", className)}
        style={{ paddingBottom: `${(1 / ratio) * 100}%` }}
        {...props}
      >
        <div className="absolute inset-0 h-full w-full [&>img]:h-full [&>img]:w-full [&>img]:object-cover [&>video]:h-full [&>video]:w-full [&>video]:object-cover [&>iframe]:h-full [&>iframe]:w-full">
          {children}
        </div>
      </div>
    );
  }
);

AspectRatio.displayName = "AspectRatio";

export default AspectRatio;
