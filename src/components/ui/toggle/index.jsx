import React from "react";
import { cn } from "@/lib/utils";

/**
 * Toggle component with variants
 * 
 * Props:
 * - pressed: boolean
 * - onPressedChange: (pressed: boolean) => void
 * - variant: default | outline | ghost | destructive
 * - size: sm | md | lg
 * - disabled: boolean
 * - asChild: boolean
 * - className: string
 */
export function Toggle({
  pressed = false,
  onPressedChange,
  variant = "default",
  size = "md",
  disabled = false,
  asChild = false,
  className,
  children,
  ...props
}) {
  const sizeClasses = {
    sm: "h-8 px-2 text-xs",
    md: "h-9 px-3 text-sm",
    lg: "h-10 px-4 text-base",
  };

  const variantClasses = {
    default: cn(
      "bg-transparent hover:bg-accent hover:text-accent-foreground",
      "data-[state=on]:bg-accent data-[state=on]:text-accent-foreground"
    ),
    outline: cn(
      "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground",
      "data-[state=on]:bg-accent data-[state=on]:text-accent-foreground"
    ),
    ghost: cn(
      "hover:bg-accent hover:text-accent-foreground",
      "data-[state=on]:bg-accent data-[state=on]:text-accent-foreground"
    ),
    destructive: cn(
      "bg-transparent hover:bg-destructive hover:text-destructive-foreground",
      "data-[state=on]:bg-destructive data-[state=on]:text-destructive-foreground"
    ),
  };

  const handleClick = () => {
    if (disabled) return;
    onPressedChange?.(!pressed);
  };

  const child = asChild && React.isValidElement(children)
    ? React.cloneElement(children, {
        onClick: (e) => {
          children.props?.onClick?.(e);
          handleClick();
        },
        "data-state": pressed ? "on" : "off",
        "aria-pressed": pressed,
        disabled,
        className: cn(
          "inline-flex items-center justify-center rounded-md font-medium ring-offset-background transition-colors",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          "disabled:pointer-events-none disabled:opacity-50",
          sizeClasses[size],
          variantClasses[variant],
          className
        ),
        ...props
      })
    : (
      <button
        type="button"
        onClick={handleClick}
        disabled={disabled}
        data-state={pressed ? "on" : "off"}
        aria-pressed={pressed}
        className={cn(
          "inline-flex items-center justify-center rounded-md font-medium ring-offset-background transition-colors",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          "disabled:pointer-events-none disabled:opacity-50",
          sizeClasses[size],
          variantClasses[variant],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );

  return child;
}

/**
 * Toggle Group component for managing multiple toggles
 */
export function ToggleGroup({
  type = "single",
  value,
  onValueChange,
  variant = "default",
  size = "md",
  disabled = false,
  className,
  children,
  ...props
}) {
  const handleValueChange = (newValue) => {
    if (type === "single") {
      onValueChange?.(newValue === value ? "" : newValue);
    } else {
      const currentValue = Array.isArray(value) ? value : [];
      const newArray = currentValue.includes(newValue)
        ? currentValue.filter(v => v !== newValue)
        : [...currentValue, newValue];
      onValueChange?.(newArray);
    }
  };

  return (
    <div
      className={cn(
        "inline-flex items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
        className
      )}
      {...props}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          const childValue = child.props.value;
          const isPressed = type === "single" 
            ? value === childValue 
            : Array.isArray(value) && value.includes(childValue);

          return React.cloneElement(child, {
            pressed: isPressed,
            onPressedChange: () => handleValueChange(childValue),
            variant,
            size,
            disabled: disabled || child.props.disabled,
          });
        }
        return child;
      })}
    </div>
  );
}

/**
 * Toggle Group Item component
 */
export function ToggleGroupItem({ value, className, children, ...props }) {
  return (
    <Toggle
      value={value}
      className={cn("data-[state=on]:bg-background data-[state=on]:text-foreground data-[state=on]:shadow-sm", className)}
      {...props}
    >
      {children}
    </Toggle>
  );
}

export default Toggle;

// Usage examples:
// <Toggle pressed={isBold} onPressedChange={setIsBold} variant="outline">
//   <Bold className="h-4 w-4" />
// </Toggle>
//
// <ToggleGroup type="multiple" value={selected} onValueChange={setSelected}>
//   <ToggleGroupItem value="bold">
//     <Bold className="h-4 w-4" />
//   </ToggleGroupItem>
//   <ToggleGroupItem value="italic">
//     <Italic className="h-4 w-4" />
//   </ToggleGroupItem>
// </ToggleGroup>

