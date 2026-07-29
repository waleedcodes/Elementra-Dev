import React, { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { cn } from "@/lib/utils";

/**
 * Dialog component (enhanced modal)
 * 
 * Props:
 * - open: boolean (controlled)
 * - onOpenChange: (open: boolean) => void
 * - className: string
 */
export function Dialog({ open, onOpenChange, className, children, ...props }) {
  const [internalOpen, setInternalOpen] = useState(false);
  const isOpen = open !== undefined ? open : internalOpen;
  const setIsOpen = (value) => {
    if (open === undefined) setInternalOpen(value);
    onOpenChange?.(value);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <DialogContext.Provider value={{ isOpen, setIsOpen }}>
      <div className={cn("relative", className)} {...props}>
        {children}
      </div>
    </DialogContext.Provider>
  );
}

const DialogContext = React.createContext(null);

export function useDialog() {
  const context = React.useContext(DialogContext);
  if (!context) throw new Error("Dialog components must be used within <Dialog>");
  return context;
}

/**
 * Dialog Trigger component
 */
export function DialogTrigger({ asChild, children, className, ...props }) {
  const { setIsOpen } = useDialog();

  const child = asChild && React.isValidElement(children)
    ? React.cloneElement(children, {
        onClick: (e) => {
          children.props?.onClick?.(e);
          setIsOpen(true);
        },
      })
    : (
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className={cn("inline-flex items-center justify-center", className)}
        {...props}
      >
        {children || "Open Dialog"}
      </button>
    );

  return child;
}

/**
 * Dialog Content component
 */
export function DialogContent({ children, className, ...props }) {
  const { isOpen, setIsOpen } = useDialog();
  const contentRef = useRef(null);
  const id = useId();

  useEffect(() => {
    function onDocKey(e) {
      if (e.key === "Escape") setIsOpen(false);
    }
    function onDocClick(e) {
      if (!contentRef.current || !isOpen) return;
      if (!contentRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("keydown", onDocKey);
    document.addEventListener("mousedown", onDocClick);
    return () => {
      document.removeEventListener("keydown", onDocKey);
      document.removeEventListener("mousedown", onDocClick);
    };
  }, [isOpen, setIsOpen]);

  if (!isOpen) return null;

  return createPortal(
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-50 bg-black/80"
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />
      {/* Content */}
      <div
        ref={contentRef}
        id={id}
        role="dialog"
        aria-modal="true"
        className={cn(
          "fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2",
          "gap-4 border bg-background p-6 shadow-lg duration-200",
          "sm:rounded-lg",
          "data-[state=open]:animate-in data-[state=closed]:animate-out",
          "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
          "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
          "data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%]",
          "data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]",
          className
        )}
        data-state={isOpen ? "open" : "closed"}
        {...props}
      >
        {children}
      </div>
    </>,
    document.body
  );
}

/**
 * Dialog Header component
 */
export function DialogHeader({ className, children, ...props }) {
  return (
    <div className={cn("flex flex-col space-y-1.5 text-center sm:text-left", className)} {...props}>
      {children}
    </div>
  );
}

/**
 * Dialog Title component
 */
export function DialogTitle({ className, children, ...props }) {
  return (
    <h2 className={cn("text-lg font-semibold leading-none tracking-tight", className)} {...props}>
      {children}
    </h2>
  );
}

/**
 * Dialog Description component
 */
export function DialogDescription({ className, children, ...props }) {
  return (
    <p className={cn("text-sm text-muted-foreground", className)} {...props}>
      {children}
    </p>
  );
}

/**
 * Dialog Footer component
 */
export function DialogFooter({ className, children, ...props }) {
  return (
    <div className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)} {...props}>
      {children}
    </div>
  );
}

/**
 * Dialog Close component
 */
export function DialogClose({ asChild, children, className, ...props }) {
  const { setIsOpen } = useDialog();

  const child = asChild && React.isValidElement(children)
    ? React.cloneElement(children, {
        onClick: (e) => {
          children.props?.onClick?.(e);
          setIsOpen(false);
        },
      })
    : (
      <button
        type="button"
        onClick={() => setIsOpen(false)}
        className={cn("inline-flex items-center justify-center", className)}
        {...props}
      >
        {children || "Close"}
      </button>
    );

  return child;
}

export default Dialog;

// Usage examples:
// <Dialog>
//   <DialogTrigger>Open Dialog</DialogTrigger>
//   <DialogContent>
//     <DialogHeader>
//       <DialogTitle>Are you absolutely sure?</DialogTitle>
//       <DialogDescription>
//         This action cannot be undone. This will permanently delete your account.
//       </DialogDescription>
//     </DialogHeader>
//     <DialogFooter>
//       <DialogClose>Cancel</DialogClose>
//       <button className="px-4 py-2 bg-destructive text-destructive-foreground rounded-md">Delete</button>
//     </DialogFooter>
//   </DialogContent>
// </Dialog>
