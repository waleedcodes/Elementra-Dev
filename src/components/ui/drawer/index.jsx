"use client";
import React, { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { cn } from "../../../lib/utils";

/**
 * Drawer — mobile-first bottom slide-up sheet component
 *
 * Props for Drawer:
 * - open: boolean (controlled)
 * - defaultOpen: boolean (uncontrolled)
 * - onOpenChange: (open: boolean) => void
 *
 * Sub-components: DrawerTrigger, DrawerContent, DrawerHandle,
 *   DrawerHeader, DrawerTitle, DrawerDescription, DrawerFooter, DrawerClose
 */

const DrawerContext = React.createContext({});

export function Drawer({ open: controlledOpen, defaultOpen = false, onOpenChange, children }) {
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const open = controlledOpen !== undefined ? controlledOpen : internalOpen;

  const setOpen = useCallback((next) => {
    if (controlledOpen === undefined) setInternalOpen(next);
    onOpenChange?.(next);
  }, [controlledOpen, onOpenChange]);

  useEffect(() => {
    if (!open) return;
    const handler = (e) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open, setOpen]);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <DrawerContext.Provider value={{ open, setOpen }}>
      {children}
    </DrawerContext.Provider>
  );
}

export function DrawerTrigger({ asChild, children, className, ...props }) {
  const { setOpen } = React.useContext(DrawerContext);
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      ...children.props,
      onClick: (e) => { children.props.onClick?.(e); setOpen(true); },
    });
  }
  return (
    <button
      type="button"
      className={cn("inline-flex items-center justify-center", className)}
      onClick={() => setOpen(true)}
      {...props}
    >
      {children}
    </button>
  );
}

export function DrawerContent({ className, children, ...props }) {
  const { open, setOpen } = React.useContext(DrawerContext);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return createPortal(
    <div
      aria-modal="true"
      role="dialog"
      className={cn(
        "fixed inset-0 z-50",
        open ? "pointer-events-auto" : "pointer-events-none"
      )}
    >
      {/* Backdrop */}
      <div
        className={cn(
          "absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300",
          open ? "opacity-100" : "opacity-0"
        )}
        onClick={() => setOpen(false)}
      />
      {/* Drawer panel */}
      <div
        className={cn(
          "absolute bottom-0 left-0 right-0 bg-background border-t border-border rounded-t-2xl shadow-2xl",
          "transition-transform duration-300 ease-out",
          "max-h-[90dvh] flex flex-col",
          open ? "translate-y-0" : "translate-y-full",
          className
        )}
        {...props}
      >
        <DrawerHandle />
        <div className="overflow-y-auto flex-1">{children}</div>
      </div>
    </div>,
    document.body
  );
}

export function DrawerHandle({ className, ...props }) {
  return (
    <div
      className={cn("flex justify-center pt-3 pb-1 cursor-grab active:cursor-grabbing", className)}
      {...props}
    >
      <div className="w-10 h-1 rounded-full bg-muted-foreground/30" />
    </div>
  );
}

export function DrawerHeader({ className, children, ...props }) {
  return (
    <div className={cn("px-6 pt-4 pb-2", className)} {...props}>
      {children}
    </div>
  );
}

export function DrawerTitle({ className, children, ...props }) {
  return (
    <h2 className={cn("text-lg font-semibold text-foreground", className)} {...props}>
      {children}
    </h2>
  );
}

export function DrawerDescription({ className, children, ...props }) {
  return (
    <p className={cn("text-sm text-muted-foreground mt-1 leading-relaxed", className)} {...props}>
      {children}
    </p>
  );
}

export function DrawerFooter({ className, children, ...props }) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3 px-6 py-4 border-t border-border mt-auto",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function DrawerClose({ asChild, children, className, ...props }) {
  const { setOpen } = React.useContext(DrawerContext);
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      ...children.props,
      onClick: (e) => { children.props.onClick?.(e); setOpen(false); },
    });
  }
  return (
    <button
      type="button"
      className={cn(
        "inline-flex items-center justify-center h-10 px-4 rounded-lg text-sm font-medium",
        "border border-border bg-background hover:bg-muted text-foreground transition-colors",
        className
      )}
      onClick={() => setOpen(false)}
      {...props}
    >
      {children}
    </button>
  );
}

export default Drawer;
