import React, { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { cn } from "@/lib/utils";

/**
 * Hover Card component
 * 
 * Props:
 * - open: boolean (controlled)
 * - onOpenChange: (open: boolean) => void
 * - openDelay: number (default: 200)
 * - closeDelay: number (default: 200)
 * - className: string
 */
export function HoverCard({ open, onOpenChange, openDelay = 200, closeDelay = 200, className, children, ...props }) {
  const [internalOpen, setInternalOpen] = useState(false);
  const isOpen = open !== undefined ? open : internalOpen;
  const setIsOpen = (value) => {
    if (open === undefined) setInternalOpen(value);
    onOpenChange?.(value);
  };

  return (
    <HoverCardContext.Provider value={{ isOpen, setIsOpen, openDelay, closeDelay }}>
      <div className={cn("relative", className)} {...props}>
        {children}
      </div>
    </HoverCardContext.Provider>
  );
}

const HoverCardContext = React.createContext(null);

export function useHoverCard() {
  const context = React.useContext(HoverCardContext);
  if (!context) throw new Error("HoverCard components must be used within <HoverCard>");
  return context;
}

/**
 * Hover Card Trigger component
 */
export function HoverCardTrigger({ asChild, children, className, ...props }) {
  const { setIsOpen, openDelay, closeDelay } = useHoverCard();
  const triggerRef = useRef(null);
  const openTimeoutRef = useRef(null);
  const closeTimeoutRef = useRef(null);

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    openTimeoutRef.current = setTimeout(() => {
      setIsOpen(true);
    }, openDelay);
  };

  const handleMouseLeave = () => {
    if (openTimeoutRef.current) {
      clearTimeout(openTimeoutRef.current);
      openTimeoutRef.current = null;
    }
    closeTimeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, closeDelay);
  };

  useEffect(() => {
    return () => {
      if (openTimeoutRef.current) clearTimeout(openTimeoutRef.current);
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    };
  }, []);

  const child = asChild && React.isValidElement(children)
    ? React.cloneElement(children, {
        ref: (node) => {
          triggerRef.current = node;
          if (children.ref) {
            if (typeof children.ref === "function") children.ref(node);
            else children.ref.current = node;
          }
        },
        onMouseEnter: (e) => {
          children.props?.onMouseEnter?.(e);
          handleMouseEnter();
        },
        onMouseLeave: (e) => {
          children.props?.onMouseLeave?.(e);
          handleMouseLeave();
        },
      })
    : (
      <div
        ref={triggerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={cn("cursor-pointer", className)}
        {...props}
      >
        {children}
      </div>
    );

  return (
    <HoverCardInternalRefsContext.Provider value={{ triggerRef }}>
      {child}
    </HoverCardInternalRefsContext.Provider>
  );
}

const HoverCardInternalRefsContext = React.createContext({ triggerRef: { current: null } });

export function useHoverCardRefs() {
  return React.useContext(HoverCardInternalRefsContext);
}

/**
 * Hover Card Content component
 */
export function HoverCardContent({ children, className, side = "top", align = "center", ...props }) {
  const { isOpen, setIsOpen } = useHoverCard();
  const { triggerRef } = useHoverCardRefs();
  const contentRef = useRef(null);
  const [coords, setCoords] = useState({ top: 0, left: 0 });
  const id = useId();

  useEffect(() => {
    if (!isOpen || !triggerRef.current) return;
    
    const updatePosition = () => {
      const triggerRect = triggerRef.current.getBoundingClientRect();
      const contentWidth = 320; // default width
      const contentHeight = 200; // default height
      
      let top = triggerRect.top - contentHeight - 8;
      let left = triggerRect.left + triggerRect.width / 2 - contentWidth / 2;
      
      if (side === "bottom") top = triggerRect.bottom + 8;
      if (side === "left") { top = triggerRect.top; left = triggerRect.left - contentWidth - 8; }
      if (side === "right") { top = triggerRect.top; left = triggerRect.right + 8; }
      
      if (align === "start") {
        if (side === "top" || side === "bottom") left = triggerRect.left;
        else if (side === "left" || side === "right") top = triggerRect.top;
      }
      if (align === "end") {
        if (side === "top" || side === "bottom") left = triggerRect.right - contentWidth;
        else if (side === "left" || side === "right") top = triggerRect.bottom - contentHeight;
      }
      
      setCoords({ top, left });
    };

    updatePosition();
    window.addEventListener("resize", updatePosition);
    window.addEventListener("scroll", updatePosition);
    
    return () => {
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition);
    };
  }, [isOpen, side, align, triggerRef]);

  if (!isOpen) return null;

  return createPortal(
    <div
      ref={contentRef}
      id={id}
      role="tooltip"
      className={cn(
        "fixed z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md",
        "outline-none data-[state=open]:animate-in data-[state=closed]:animate-out",
        "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
        "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2",
        "data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )}
      style={{ top: coords.top, left: coords.left }}
      data-state={isOpen ? "open" : "closed"}
      {...props}
    >
      {children}
    </div>,
    document.body
  );
}

export default HoverCard;

// Usage examples:
// <HoverCard>
//   <HoverCardTrigger>
//     <button className="underline">Hover me</button>
//   </HoverCardTrigger>
//   <HoverCardContent>
//     <div className="space-y-2">
//       <h4 className="text-sm font-semibold">@nextjs</h4>
//       <p className="text-sm text-muted-foreground">
//         The React Framework for the Web.
//       </p>
//     </div>
//   </HoverCardContent>
// </HoverCard>

