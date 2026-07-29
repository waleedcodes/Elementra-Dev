"use client";
import React, { useState, useEffect } from "react";
import { cn } from "../../../lib/utils";

const Alert = React.forwardRef(
  (
    { className, variant = "default", animation = "none", children, ...props },
    ref
  ) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      setIsVisible(true);
    }, []);

    const variants = {
      default: "border-gray-200 bg-gray-50 text-gray-900",
      destructive: "border-red-500/50 bg-red-50 text-red-900",
      warning: "border-yellow-500/50 bg-yellow-50 text-yellow-900",
      info: "border-blue-500/50 bg-blue-50 text-blue-900",
      success: "border-green-500/50 bg-green-50 text-green-900",
    };

    const animations = {
      none: "",
      fade: "animate-fade-in",
      shake: "animate-shake",
      bounce: "animate-bounce-soft",
      slideUp: "animate-slide-up",
    };

    return (
      <div
        ref={ref}
        role="alert"
        className={cn(
          "relative w-full rounded-lg border p-4 transition-all duration-300",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
          variants[variant],
          animations[animation],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

const AlertTitle = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <h5
      ref={ref}
      className={cn(
        "mb-1 font-medium leading-none tracking-tight animate-fade-in-fast",
        className
      )}
      {...props}
    >
      {children}
    </h5>
  )
);

const AlertDescription = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "text-sm [&_p]:leading-relaxed animate-fade-in-delayed",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
);

Alert.displayName = "Alert";
AlertTitle.displayName = "AlertTitle";
AlertDescription.displayName = "AlertDescription";

export { Alert, AlertTitle, AlertDescription };
