import React, { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { cn } from "@/lib/utils";

/**
 * Popover component for contextual content
 * 
 * Props:
 * - open: boolean (controlled)
 * - onOpenChange: (open: boolean) => void
 * - side: top | right | bottom | left
 * - align: start | center | end
 * - offset: number (default: 8)
 * - className: string
 */
export function Popover({ open, onOpenChange, side = "bottom", align = "center", offset = 8, className, children, ...props }) {
  const [internalOpen, setInternalOpen] = useState(false);
  const isOpen = open !== undefined ? open : internalOpen;
  const setIsOpen = (value) => {
    if (open === undefined) setInternalOpen(value);
    onOpenChange?.(value);
  };

  return (
    <PopoverContext.Provider value={{ isOpen, setIsOpen, side, align, offset }}>
      <div className={cn("relative inline-block", className)} {...props}>
        {children}
      </div>
    </PopoverContext.Provider>
  );
}

const PopoverContext = React.createContext(null);

export function usePopover() {
  const context = React.useContext(PopoverContext);
  if (!context) throw new Error("Popover components must be used within <Popover>");
  return context;
}

/**
 * Popover Trigger component
 */
export function PopoverTrigger({ asChild, children, className, ...props }) {
  const { isOpen, setIsOpen } = usePopover();
  const triggerRef = useRef(null);

  const child = asChild && React.isValidElement(children)
    ? React.cloneElement(children, {
        ref: (node) => {
          triggerRef.current = node;
          if (children.ref) {
            if (typeof children.ref === "function") children.ref(node);
            else children.ref.current = node;
          }
        },
        onClick: (e) => {
          children.props?.onClick?.(e);
          setIsOpen(!isOpen);
        },
        "aria-expanded": isOpen,
        "aria-haspopup": "dialog",
      })
    : (
      <button
        type="button"
        ref={triggerRef}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="dialog"
        className={cn("inline-flex items-center justify-center", className)}
        {...props}
      >
        {children || "Open"}
      </button>
    );

  return (
    <PopoverInternalRefsContext.Provider value={{ triggerRef }}>
      {child}
    </PopoverInternalRefsContext.Provider>
  );
}

const PopoverInternalRefsContext = React.createContext({ triggerRef: { current: null } });

export function usePopoverRefs() {
  return React.useContext(PopoverInternalRefsContext);
}

/**
 * Popover Content component
 */
export function PopoverContent({ children, className, style, ...props }) {
  const { isOpen, setIsOpen, side, align, offset } = usePopover();
  const { triggerRef } = usePopoverRefs();
  const contentRef = useRef(null);
  const [coords, setCoords] = useState({ top: 0, left: 0, minWidth: 0 });
  const id = useId();

  useEffect(() => {
    function onDocKey(e) {
      if (e.key === "Escape") setIsOpen(false);
    }
    function onDocClick(e) {
      if (!contentRef.current || !isOpen) return;
      if (!contentRef.current.contains(e.target) && !triggerRef.current?.contains(e.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("keydown", onDocKey);
    document.addEventListener("mousedown", onDocClick);
    return () => {
      document.removeEventListener("keydown", onDocKey);
      document.removeEventListener("mousedown", onDocClick);
    };
  }, [isOpen, setIsOpen, triggerRef]);

  useEffect(() => {
    if (!isOpen || !triggerRef.current) return;
    const r = triggerRef.current.getBoundingClientRect();
    const contentW = 240; // default width
    let top = r.bottom + offset;
    let left = r.left + r.width / 2 - contentW / 2;
    
    if (side === "top") top = r.top - offset;
    if (side === "left") { top = r.top; left = r.left - contentW - offset; }
    if (side === "right") { top = r.top; left = r.right + offset; }
    
    if (align === "start") {
      if (side === "top" || side === "bottom") left = r.left;
      else if (side === "left" || side === "right") top = r.top;
    }
    if (align === "end") {
      if (side === "top" || side === "bottom") left = r.right - contentW;
      else if (side === "left" || side === "right") top = r.bottom - 200; // default height
    }
    
    setCoords({ top, left, minWidth: contentW });
  }, [isOpen, side, align, offset, triggerRef]);

  if (!isOpen) return null;

  return createPortal(
    <div
      role="dialog"
      id={id}
      ref={contentRef}
      tabIndex={-1}
      className={cn(
        "fixed z-50 rounded-md border bg-popover p-4 shadow-xl outline-none",
        "animate-in fade-in-0 zoom-in-95",
        className
      )}
      style={{ top: coords.top, left: coords.left, minWidth: coords.minWidth, ...style }}
      {...props}
    >
      {children}
    </div>,
    document.body
  );
}

/**
 * Popover Header component
 */
export function PopoverHeader({ className, children, ...props }) {
  return (
    <div className={cn("space-y-1.5 pb-4", className)} {...props}>
      {children}
    </div>
  );
}

/**
 * Popover Title component
 */
export function PopoverTitle({ className, children, ...props }) {
  return (
    <h4 className={cn("text-sm font-medium leading-none", className)} {...props}>
      {children}
    </h4>
  );
}

/**
 * Popover Description component
 */
export function PopoverDescription({ className, children, ...props }) {
  return (
    <p className={cn("text-sm text-muted-foreground", className)} {...props}>
      {children}
    </p>
  );
}

/**
 * Popover Footer component
 */
export function PopoverFooter({ className, children, ...props }) {
  return (
    <div className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)} {...props}>
      {children}
    </div>
  );
}

export default Popover;

// Usage examples:
// <Popover>
//   <PopoverTrigger>Open Popover</PopoverTrigger>
//   <PopoverContent>
//     <PopoverHeader>
//       <PopoverTitle>Are you absolutely sure?</PopoverTitle>
//       <PopoverDescription>
//         This action cannot be undone. This will permanently delete your account.
//       </PopoverDescription>
//     </PopoverHeader>
//     <PopoverFooter>
//       <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md">Confirm</button>
//     </PopoverFooter>
//   </PopoverContent>
// </Popover>
