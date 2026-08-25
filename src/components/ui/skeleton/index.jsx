import React from "react";
import { cn } from "@/lib/utils";

/**
 * Skeleton component for loading states
 * 
 * Props:
 * - className: string
 * - variant: default | rounded | circular
 * - size: sm | md | lg | xl
 * - width: string | number (e.g., "100%", 200)
 * - height: string | number (e.g., "20px", 40)
 * - animate: boolean (default: true)
 */
export function Skeleton({
  className,
  variant = "default",
  size = "md",
  width,
  height,
  animate = true,
  ...props
}) {
  const sizeClasses = {
    sm: "h-4",
    md: "h-6",
    lg: "h-8",
    xl: "h-12",
  };

  const variantClasses = {
    default: "rounded-md",
    rounded: "rounded-lg",
    circular: "rounded-full",
  };

  const style = {
    ...(width && { width: typeof width === "number" ? `${width}px` : width }),
    ...(height && { height: typeof height === "number" ? `${height}px` : height }),
  };

  return (
    <div
      className={cn(
        "bg-muted",
        variantClasses[variant],
        !width && !height && sizeClasses[size],
        animate && "animate-pulse",
        className
      )}
      style={style}
      {...props}
    />
  );
}

/**
 * Pre-built skeleton components for common UI patterns
 */
export function SkeletonCard({ className, ...props }) {
  return (
    <div className={cn("space-y-3 p-4", className)} {...props}>
      <Skeleton className="h-4 w-3/4" />
      <Skeleton className="h-4 w-1/2" />
      <Skeleton className="h-20 w-full" />
      <div className="flex space-x-2">
        <Skeleton className="h-8 w-20" />
        <Skeleton className="h-8 w-20" />
      </div>
    </div>
  );
}

export function SkeletonAvatar({ size = "md", className, ...props }) {
  const sizeClasses = {
    sm: "h-8 w-8",
    md: "h-10 w-10",
    lg: "h-12 w-12",
    xl: "h-16 w-16",
  };

  return (
    <Skeleton
      variant="circular"
      className={cn(sizeClasses[size], className)}
      {...props}
    />
  );
}

export function SkeletonText({ lines = 3, className, ...props }) {
  return (
    <div className={cn("space-y-2", className)} {...props}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          className={cn(
            "h-4",
            i === lines - 1 ? "w-3/4" : "w-full"
          )}
        />
      ))}
    </div>
  );
}

export function SkeletonTable({ rows = 5, columns = 4, className, ...props }) {
  return (
    <div className={cn("space-y-3", className)} {...props}>
      {/* Header */}
      <div className="flex space-x-4">
        {Array.from({ length: columns }).map((_, i) => (
          <Skeleton key={i} className="h-4 flex-1" />
        ))}
      </div>
      {/* Rows */}
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <div key={rowIndex} className="flex space-x-4">
          {Array.from({ length: columns }).map((_, colIndex) => (
            <Skeleton key={colIndex} className="h-4 flex-1" />
          ))}
        </div>
      ))}
    </div>
  );
}

export function SkeletonButton({ size = "md", className, ...props }) {
  const sizeClasses = {
    sm: "h-8 w-16",
    md: "h-10 w-20",
    lg: "h-11 w-24",
  };

  return (
    <Skeleton
      className={cn(sizeClasses[size], "rounded-md", className)}
      {...props}
    />
  );
}

export default Skeleton;

// Usage examples:
// <Skeleton className="h-4 w-3/4" />
// <SkeletonCard />
// <SkeletonAvatar size="lg" />
// <SkeletonText lines={4} />
// <SkeletonTable rows={3} columns={3} />
// <SkeletonButton size="md" />
