"use client";
import React, { useState } from "react";
import { cn } from "../../../lib/utils";

export const Switch = React.forwardRef(
  (
    {
      className,
      checked = false,
      defaultChecked,
      variant = "default",
      size = "md",
      disabled = false,
      animation = "smooth",
      label,
      labelPosition = "right",
      onChange,
      ...props
    },
    ref
  ) => {
    const [isChecked, setIsChecked] = useState(
      defaultChecked !== undefined ? defaultChecked : checked
    );

    const handleChange = (event) => {
      if (disabled) return;

      const newChecked = event.target.checked;
      setIsChecked(newChecked);

      onChange?.(event);
    };

    const variants = {
      default: {
        base: "bg-gray-200 focus-visible:ring-gray-400",
        active: "bg-gray-900",
      },
      primary: {
        base: "bg-blue-200 focus-visible:ring-blue-400",
        active: "bg-blue-600",
      },
      success: {
        base: "bg-green-200 focus-visible:ring-green-400",
        active: "bg-green-600",
      },
      warning: {
        base: "bg-yellow-200 focus-visible:ring-yellow-400",
        active: "bg-yellow-600",
      },
      danger: {
        base: "bg-red-200 focus-visible:ring-red-400",
        active: "bg-red-600",
      },
      info: {
        base: "bg-teal-200 focus-visible:ring-teal-400",
        active: "bg-teal-600",
      },
      light: {
        base: "bg-gray-100 focus-visible:ring-gray-300",
        active: "bg-gray-500",
      },
      dark: {
        base: "bg-gray-500 focus-visible:ring-gray-600",
        active: "bg-gray-900",
      },
    };

    const sizes = {
      xs: {
        switch: "h-3 w-6",
        thumb: "h-2 w-2",
        translate: "translate-x-2",
      },
      sm: {
        switch: "h-4 w-7",
        thumb: "h-3 w-3",
        translate: "translate-x-3",
      },
      md: {
        switch: "h-6 w-11",
        thumb: "h-5 w-5",
        translate: "translate-x-5",
      },
      lg: {
        switch: "h-8 w-14",
        thumb: "h-7 w-7",
        translate: "translate-x-6",
      },
      xl: {
        switch: "h-10 w-16",
        thumb: "h-8 w-8",
        translate: "translate-x-8",
      },
    };

    const animations = {
      smooth: "transition-transform duration-200 ease-in-out",
      bounce:
        "transition-transform duration-200 ease-in-out motion-safe:animate-bounce-switch",
      elastic: "transition-transform duration-300 ease-elastic",
      none: "",
      slide: "transition-transform duration-300 ease-in-out",
      flip: "transition-transform duration-300 ease-flip",
    };

    const actualChecked = isChecked;

    return (
      <label
        className={cn(
          "flex items-center",
          labelPosition === "left" && "flex-row-reverse",
          disabled && "opacity-50 cursor-not-allowed",
          className
        )}
      >
        <input
          type="checkbox"
          className="sr-only"
          checked={actualChecked}
          disabled={disabled}
          onChange={handleChange}
          {...props}
        />
        <div
          ref={ref}
          className={cn(
            "relative inline-flex shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
            disabled ? "cursor-not-allowed" : "cursor-pointer",
            sizes[size].switch,
            actualChecked ? variants[variant].active : variants[variant].base
          )}
        >
          <span
            className={cn(
              "pointer-events-none inline-block transform rounded-full bg-white shadow-lg ring-0",
              animations[animation],
              sizes[size].thumb,
              actualChecked ? sizes[size].translate : "translate-x-0"
            )}
          />
        </div>
        {label && (
          <span
            className={cn(
              "select-none text-sm font-medium",
              labelPosition === "left" ? "mr-2" : "ml-2"
            )}
          >
            {label}
          </span>
        )}
      </label>
    );
  }
);

Switch.displayName = "Switch";

export { Switch };
