"use client";
import React, { useState, useCallback, useRef, useEffect } from "react";
import { cn } from "../../../lib/utils";

/**
 * Collapsible — expandable/collapsible content container
 *
 * Props for Collapsible:
 * - open: boolean (controlled)
 * - defaultOpen: boolean (uncontrolled)
 * - onOpenChange: (open: boolean) => void
 * - disabled: boolean
 * - className: string
 *
 * Sub-components: CollapsibleTrigger, CollapsibleContent
 */

const CollapsibleContext = React.createContext({});

export function Collapsible({
  open: controlledOpen,
  defaultOpen = false,
  onOpenChange,
  disabled = false,
  className,
  children,
  ...props
}) {
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const open = controlledOpen !== undefined ? controlledOpen : internalOpen;

  const setOpen = useCallback((next) => {
    if (disabled) return;
    const nextVal = typeof next === "function" ? next(open) : next;
    if (controlledOpen === undefined) setInternalOpen(nextVal);
    onOpenChange?.(nextVal);
  }, [controlledOpen, disabled, onOpenChange, open]);

  const toggle = useCallback(() => setOpen((prev) => !prev), [setOpen]);

  return (
    <CollapsibleContext.Provider value={{ open, setOpen, toggle, disabled }}>
      <div
        className={cn("w-full", className)}
        data-state={open ? "open" : "closed"}
        {...props}
      >
        {children}
      </div>
    </CollapsibleContext.Provider>
  );
}

export function CollapsibleTrigger({
  asChild,
  children,
  className,
  ...props
}) {
  const { toggle, open, disabled } = React.useContext(CollapsibleContext);

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      ...children.props,
      "aria-expanded": open,
      disabled: disabled || children.props.disabled,
      onClick: (e) => { children.props.onClick?.(e); toggle(); },
    });
  }

  return (
    <button
      type="button"
      aria-expanded={open}
      disabled={disabled}
      className={cn(
        "inline-flex items-center justify-between w-full px-4 py-3",
        "text-sm font-medium text-foreground",
        "hover:bg-muted rounded-lg transition-colors",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        className
      )}
      onClick={toggle}
      {...props}
    >
      {children}
      <svg
        className={cn(
          "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200",
          open && "rotate-180"
        )}
        xmlns="http://www.w3.org/2000/svg"
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

export function CollapsibleContent({ className, children, ...props }) {
  const { open } = React.useContext(CollapsibleContext);
  const contentRef = useRef(null);
  const [height, setHeight] = useState(open ? "auto" : "0px");
  const [isVisible, setIsVisible] = useState(open);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    if (open) {
      setIsVisible(true);
      const scrollHeight = el.scrollHeight;
      setHeight(`${scrollHeight}px`);
      const timer = setTimeout(() => setHeight("auto"), 250);
      return () => clearTimeout(timer);
    } else {
      const scrollHeight = el.scrollHeight;
      setHeight(`${scrollHeight}px`);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setHeight("0px"));
      });
      const timer = setTimeout(() => setIsVisible(false), 250);
      return () => clearTimeout(timer);
    }
  }, [open]);

  return (
    <div
      ref={contentRef}
      className={cn("overflow-hidden transition-all duration-200 ease-in-out", className)}
      style={{ height }}
      {...props}
    >
      {isVisible && (
        <div className="px-4 pb-4 pt-1 text-sm text-muted-foreground">
          {children}
        </div>
      )}
    </div>
  );
}

export default Collapsible;
