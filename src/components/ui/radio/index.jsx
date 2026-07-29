import React, { useId } from "react";
import { cn } from "@/lib/utils";

/**
 * Radio component with modern styling and accessibility
 * 
 * Props:
 * - value: string
 * - checked: boolean
 * - onChange: (value: string) => void
 * - disabled: boolean
 * - size: sm | md | lg
 * - variant: default | destructive
 * - label: string (optional label)
 * - description: string (optional description)
 * - className: string
 */
export function Radio({
  value,
  checked = false,
  onChange,
  disabled = false,
  size = "md",
  variant = "default",
  label,
  description,
  className,
  id,
  ...props
}) {
  const radioId = useId();
  const inputId = id || radioId;

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
    onChange?.(value);
  };

  const radio = (
    <div className="relative">
      <input
        type="radio"
        id={inputId}
        value={value}
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
        className="peer sr-only"
        {...props}
      />
      <div
        className={cn(
          "peer flex items-center justify-center rounded-full border-2 transition-colors",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          "disabled:cursor-not-allowed disabled:opacity-50",
          sizeClasses[size],
          variantClasses[variant],
          checked && "data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
        )}
        data-state={checked ? "checked" : "unchecked"}
      >
        {checked && (
          <div
            className={cn(
              "rounded-full bg-current",
              size === "sm" && "h-2 w-2",
              size === "md" && "h-2.5 w-2.5",
              size === "lg" && "h-3 w-3"
            )}
          />
        )}
      </div>
    </div>
  );

  if (label || description) {
    return (
      <div className={cn("flex items-start space-x-3", className)}>
        {radio}
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

  return <div className={cn("inline-flex", className)}>{radio}</div>;
}

/**
 * Radio Group component for managing multiple radio buttons
 */
export function RadioGroup({
  value,
  onChange,
  children,
  className,
  ...props
}) {
  return (
    <div
      role="radiogroup"
      className={cn("space-y-2", className)}
      {...props}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            checked: child.props.value === value,
            onChange: () => onChange?.(child.props.value),
          });
        }
        return child;
      })}
    </div>
  );
}

export default Radio;

// Usage examples:
// <Radio value="option1" checked={selected === "option1"} onChange={setSelected} label="Option 1" />
// 
// <RadioGroup value={selected} onChange={setSelected}>
//   <Radio value="option1" label="Option 1" />
//   <Radio value="option2" label="Option 2" />
//   <Radio value="option3" label="Option 3" />
// </RadioGroup>
