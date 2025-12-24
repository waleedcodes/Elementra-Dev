import React, { useState, useId } from "react";
import { cn } from "@/lib/utils";

/**
 * Accordion component with collapsible sections
 *
 * Props:
 * - type: single | multiple
 * - value: string | string[] (controlled)
 * - defaultValue: string | string[] (uncontrolled)
 * - onValueChange: (value: string | string[]) => void
 * - collapsible: boolean (for single type, allows closing all items)
 * - className: string
 */
export function Accordion({
  type = "single",
  value: controlledValue,
  defaultValue,
  onValueChange,
  collapsible = true,
  className,
  children,
  ...props
}) {
  const [internalValue, setInternalValue] = useState(
    defaultValue || (type === "single" ? "" : [])
  );
  const value = controlledValue !== undefined ? controlledValue : internalValue;

  const handleValueChange = (newValue) => {
    if (controlledValue === undefined) {
      setInternalValue(newValue);
    }
    onValueChange?.(newValue);
  };

  const isItemOpen = (itemValue) => {
    if (type === "single") {
      return value === itemValue;
    }
    return Array.isArray(value) && value.includes(itemValue);
  };

  const toggleItem = (itemValue) => {
    if (type === "single") {
      if (value === itemValue && !collapsible) return;
      handleValueChange(value === itemValue ? "" : itemValue);
    } else {
      const currentValue = Array.isArray(value) ? value : [];
      const newValue = currentValue.includes(itemValue)
        ? currentValue.filter((v) => v !== itemValue)
        : [...currentValue, itemValue];
      handleValueChange(newValue);
    }
  };

  return (
    <div className={cn("space-y-1", className)} {...props}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            isOpen: isItemOpen(child.props.value),
            onToggle: () => toggleItem(child.props.value),
            type,
          });
        }
        return child;
      })}
    </div>
  );
}

/**
 * Accordion Item component
 */
export function AccordionItem({
  value,
  isOpen,
  onToggle,
  type,
  className,
  children,
  ...props
}) {
  return (
    <div
      className={cn(
        "border border-border rounded-lg overflow-hidden",
        className
      )}
      {...props}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            isOpen,
            onToggle,
            value,
            type,
          });
        }
        return child;
      })}
    </div>
  );
}

/**
 * Accordion Trigger component
 */
export function AccordionTrigger({
  isOpen,
  onToggle,
  value,
  type,
  className,
  children,
  ...props
}) {
  const triggerId = useId();
  const contentId = useId();

  return (
    <button
      type="button"
      id={triggerId}
      aria-expanded={isOpen}
      aria-controls={contentId}
      onClick={onToggle}
      className={cn(
        "flex w-full items-center justify-between px-4 py-3 text-left font-medium transition-all",
        "hover:bg-muted focus:outline-none focus:ring-0 focus:ring-offset-0",
        "[&[data-state=open]>svg]:rotate-180",
        className
      )}
      data-state={isOpen ? "open" : "closed"}
      {...props}
    >
      {children}
      <svg
        className="h-4 w-4 shrink-0 transition-transform duration-200"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m6 9 6 6 6-6" />
      </svg>
    </button>
  );
}

/**
 * Accordion Content component
 */
export function AccordionContent({
  isOpen,
  onToggle,
  value,
  type,
  className,
  children,
  ...props
}) {
  const contentId = useId();

  return (
    <div
      id={contentId}
      className={cn(
        "overflow-hidden transition-all duration-200 ease-in-out",
        isOpen ? "opacity-100" : "opacity-0"
      )}
      style={{
        height: isOpen ? "auto" : "0px",
      }}
      {...props}
    >
      <div className={cn("px-4 pb-3 pt-0", className)}>{children}</div>
    </div>
  );
}

export default Accordion;

// Usage examples:
// <Accordion type="single" defaultValue="item-1">
//   <AccordionItem value="item-1">
//     <AccordionTrigger>Is it accessible?</AccordionTrigger>
//     <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
//   </AccordionItem>
// </Accordion>
//
// <Accordion type="multiple">
//   <AccordionItem value="item-1">
//     <AccordionTrigger>Item 1</AccordionTrigger>
//     <AccordionContent>Content 1</AccordionContent>
//   </AccordionItem>
// </Accordion>
