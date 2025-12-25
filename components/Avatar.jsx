import React, { useState, useId } from "react";
import { cn } from "@/lib/utils";

/**
 * Avatar component with image fallback, initials, and status indicators
 * 
 * Props:
 * - src: string (image URL)
 * - alt: string (alt text)
 * - fallback: string (fallback text, defaults to initials)
 * - size: xs | sm | md | lg | xl
 * - shape: circle | square
 * - status: online | offline | away | busy (optional)
 * - statusPosition: top-right | top-left | bottom-right | bottom-left
 * - className: string
 */
export function Avatar({
  src,
  alt,
  fallback,
  size = "md",
  shape = "circle",
  status,
  statusPosition = "bottom-right",
  className,
  ...props
}) {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const sizeClasses = {
    xs: "h-6 w-6 text-xs",
    sm: "h-8 w-8 text-sm",
    md: "h-10 w-10 text-base",
    lg: "h-12 w-12 text-lg",
    xl: "h-16 w-16 text-xl",
  };

  const statusSizeClasses = {
    xs: "h-1.5 w-1.5",
    sm: "h-2 w-2",
    md: "h-2.5 w-2.5",
    lg: "h-3 w-3",
    xl: "h-4 w-4",
  };

  const statusColorClasses = {
    online: "bg-green-500",
    offline: "bg-gray-400",
    away: "bg-yellow-500",
    busy: "bg-red-500",
  };

  const statusPositionClasses = {
    "top-right": "top-0 right-0",
    "top-left": "top-0 left-0",
    "bottom-right": "bottom-0 right-0",
    "bottom-left": "bottom-0 left-0",
  };

  const getInitials = (name) => {
    if (!name) return "?";
    return name
      .split(" ")
      .map((word) => word.charAt(0))
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  const displayFallback = fallback || getInitials(alt) || "?";

  return (
    <div className={cn("relative inline-flex", className)} {...props}>
      <div
        className={cn(
          "relative flex items-center justify-center overflow-hidden bg-muted text-muted-foreground font-medium",
          sizeClasses[size],
          shape === "circle" ? "rounded-full" : "rounded-md"
        )}
      >
        {src && !imageError ? (
          <img
            src={src}
            alt={alt}
            className={cn(
              "h-full w-full object-cover",
              !imageLoaded && "opacity-0"
            )}
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
          />
        ) : (
          <span className="select-none">{displayFallback}</span>
        )}
      </div>

      {status && (
        <div
          className={cn(
            "absolute rounded-full border-2 border-background",
            statusSizeClasses[size],
            statusColorClasses[status],
            statusPositionClasses[statusPosition]
          )}
          aria-label={`Status: ${status}`}
        />
      )}
    </div>
  );
}

/**
 * Avatar Group component for displaying multiple avatars
 */
export function AvatarGroup({
  children,
  max = 3,
  size = "md",
  className,
  ...props
}) {
  const avatars = React.Children.toArray(children);
  const visibleAvatars = avatars.slice(0, max);
  const remainingCount = avatars.length - max;

  const sizeClasses = {
    xs: "-ml-1",
    sm: "-ml-1.5",
    md: "-ml-2",
    lg: "-ml-2.5",
    xl: "-ml-3",
  };

  return (
    <div className={cn("flex items-center", sizeClasses[size], className)} {...props}>
      {visibleAvatars.map((avatar, index) => (
        <div key={index} className="first:ml-0">
          {React.cloneElement(avatar, { size })}
        </div>
      ))}
      {remainingCount > 0 && (
        <div
          className={cn(
            "flex items-center justify-center bg-muted text-muted-foreground font-medium border-2 border-background",
            size === "xs" && "h-6 w-6 text-xs",
            size === "sm" && "h-8 w-8 text-sm",
            size === "md" && "h-10 w-10 text-base",
            size === "lg" && "h-12 w-12 text-lg",
            size === "xl" && "h-16 w-16 text-xl",
            "rounded-full"
          )}
        >
          +{remainingCount}
        </div>
      )}
    </div>
  );
}

export default Avatar;

// Usage examples:
// <Avatar src="/user.jpg" alt="John Doe" status="online" size="lg" />
// <Avatar fallback="JD" alt="John Doe" status="away" shape="square" />
// 
// <AvatarGroup max={3}>
//   <Avatar src="/user1.jpg" alt="User 1" />
//   <Avatar src="/user2.jpg" alt="User 2" />
//   <Avatar src="/user3.jpg" alt="User 3" />
//   <Avatar src="/user4.jpg" alt="User 4" />
// </AvatarGroup>
