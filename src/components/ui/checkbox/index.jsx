import React, { useId } from "react";
import { cn } from "@/lib/utils";

/**
 * Checkbox component with modern styling and accessibility
 * 
 * Props:
 * - checked: boolean
 * - onChange: (checked: boolean) => void
 * - disabled: boolean
 * - size: sm | md | lg
 * - variant: default | destructive
 * - indeterminate: boolean (for partial selection)
 * - label: string (optional label)
 * - description: string (optional description)
 * - className: string
 */
export function Checkbox({
  checked = false,
  onChange,
  disabled = false,
  size = "md",
  variant = "default",
  indeterminate = false,
  label,
  description,
  className,
  id,
  ...props
}) {
  const checkboxId = useId();
  const inputId = id || checkboxId;

  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-5 w-5",
    lg: "h-6 w-6",
  };

  const variantClasses = {
    default: "border-input data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
    destructive: "border-destructive data-[state=checked]:bg-destructive data-[state=checked]:text-destructive-foreground",
  };

  const handleChange = (e) => {
    if (disabled) return;
    onChange?.(e.target.checked);
  };

  const checkbox = (
    <div className="relative">
      <input
        type="checkbox"
        id={inputId}
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
        className="peer sr-only"
        {...props}
      />
      <div
        className={cn(
          "peer flex items-center justify-center rounded border-2 transition-colors",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          "disabled:cursor-not-allowed disabled:opacity-50",
          sizeClasses[size],
          variantClasses[variant],
          checked && "data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
          indeterminate && "bg-primary text-primary-foreground"
        )}
        data-state={indeterminate ? "indeterminate" : checked ? "checked" : "unchecked"}
      >
        {checked && !indeterminate && (
          <svg
            className={cn(
              size === "sm" && "h-3 w-3",
              size === "md" && "h-4 w-4",
              size === "lg" && "h-5 w-5"
            )}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20,6 9,17 4,12" />
          </svg>
        )}
        {indeterminate && (
          <svg
            className={cn(
              size === "sm" && "h-3 w-3",
              size === "md" && "h-4 w-4",
              size === "lg" && "h-5 w-5"
            )}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        )}
      </div>
    </div>
  );

  if (label || description) {
    return (
      <div className={cn("flex items-start space-x-3", className)}>
        {checkbox}
        <div className="grid gap-1.5 leading-none">
          {label && (
            <label
              htmlFor={inputId}
              className={cn(
                "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
                "cursor-pointer"
              )}
            >
              {label}
            </label>
          )}
          {description && (
            <p className="text-xs text-muted-foreground">{description}</p>
          )}
        </div>
      </div>
    );
  }

  return <div className={cn("inline-flex", className)}>{checkbox}</div>;
}

export default Checkbox;

// Usage examples:
// <Checkbox checked={isChecked} onChange={setIsChecked} label="Accept terms" />
// <Checkbox indeterminate={true} label="Select all" />
// <Checkbox size="lg" variant="destructive" label="Delete permanently" />
