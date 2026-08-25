"use client";
import React, { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { cn } from "../../../lib/utils";

/**
 * AlertDialog — a modal dialog for critical confirmation actions
 *
 * Props for AlertDialog:
 * - open: boolean (controlled)
 * - defaultOpen: boolean (uncontrolled)
 * - onOpenChange: (open: boolean) => void
 *
 * Sub-components: AlertDialogTrigger, AlertDialogContent,
 *   AlertDialogHeader, AlertDialogTitle, AlertDialogDescription,
 *   AlertDialogFooter, AlertDialogCancel, AlertDialogAction
 */

const AlertDialogContext = React.createContext({});

export function AlertDialog({ open: controlledOpen, defaultOpen = false, onOpenChange, children }) {
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const open = controlledOpen !== undefined ? controlledOpen : internalOpen;

  const setOpen = useCallback((next) => {
    if (controlledOpen === undefined) setInternalOpen(next);
    onOpenChange?.(next);
  }, [controlledOpen, onOpenChange]);

  // Close on Escape key
  useEffect(() => {
    if (!open) return;
    const handler = (e) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open, setOpen]);

  // Lock body scroll when open
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <AlertDialogContext.Provider value={{ open, setOpen }}>
      {children}
    </AlertDialogContext.Provider>
  );
}

export function AlertDialogTrigger({ asChild, children, className, ...props }) {
  const { setOpen } = React.useContext(AlertDialogContext);
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

export function AlertDialogContent({ className, children, ...props }) {
  const { open, setOpen } = React.useContext(AlertDialogContext);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted || !open) return null;

  return createPortal(
    <div
      role="alertdialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
        onClick={() => setOpen(false)}
      />
      {/* Dialog panel */}
      <div
        className={cn(
          "relative z-10 w-full max-w-md mx-4 bg-background border border-border rounded-2xl shadow-2xl",
          "animate-in fade-in zoom-in-95 duration-200",
          className
        )}
        {...props}
      >
        {children}
      </div>
    </div>,
    document.body
  );
}

export function AlertDialogHeader({ className, children, ...props }) {
  return (
    <div className={cn("flex flex-col gap-2 p-6 pb-4", className)} {...props}>
      {children}
    </div>
  );
}

export function AlertDialogTitle({ className, children, ...props }) {
  return (
    <h2 className={cn("text-lg font-semibold text-foreground", className)} {...props}>
      {children}
    </h2>
  );
}

export function AlertDialogDescription({ className, children, ...props }) {
  return (
    <p className={cn("text-sm text-muted-foreground leading-relaxed", className)} {...props}>
      {children}
    </p>
  );
}

export function AlertDialogFooter({ className, children, ...props }) {
  return (
    <div
      className={cn(
        "flex flex-col-reverse sm:flex-row sm:justify-end gap-3 px-6 pb-6 pt-2",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function AlertDialogCancel({ className, children = "Cancel", onClick, ...props }) {
  const { setOpen } = React.useContext(AlertDialogContext);
  return (
    <button
      type="button"
      className={cn(
        "inline-flex items-center justify-center h-10 px-4 rounded-lg text-sm font-medium",
        "border border-border bg-background hover:bg-muted text-foreground",
        "transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        className
      )}
      onClick={(e) => { onClick?.(e); setOpen(false); }}
      {...props}
    >
      {children}
    </button>
  );
}

export function AlertDialogAction({ className, children = "Continue", onClick, ...props }) {
  const { setOpen } = React.useContext(AlertDialogContext);
  return (
    <button
      type="button"
      className={cn(
        "inline-flex items-center justify-center h-10 px-4 rounded-lg text-sm font-medium",
        "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        "transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-destructive",
        className
      )}
      onClick={(e) => { onClick?.(e); setOpen(false); }}
      {...props}
    >
      {children}
    </button>
  );
}

export default AlertDialog;
