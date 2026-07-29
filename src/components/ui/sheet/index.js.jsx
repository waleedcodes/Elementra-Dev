import React, { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { cn } from "@/lib/utils";

/**
 * Sheet component (slide-out panels)
 * 
 * Props:
 * - open: boolean (controlled)
 * - onOpenChange: (open: boolean) => void
 * - side: top | right | bottom | left
 * - className: string
 */
export function Sheet({ open, onOpenChange, side = "right", className, children, ...props }) {
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
    <SheetContext.Provider value={{ isOpen, setIsOpen, side }}>
      <div className={cn("relative", className)} {...props}>
        {children}
      </div>
    </SheetContext.Provider>
  );
}

const SheetContext = React.createContext(null);

export function useSheet() {
  const context = React.useContext(SheetContext);
  if (!context) throw new Error("Sheet components must be used within <Sheet>");
  return context;
}

/**
 * Sheet Trigger component
 */
export function SheetTrigger({ asChild, children, className, ...props }) {
  const { isOpen, setIsOpen } = useSheet();

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
        {children || "Open Sheet"}
      </button>
    );

  return child;
}

/**
 * Sheet Content component
 */
export function SheetContent({ children, className, ...props }) {
  const { isOpen, setIsOpen, side } = useSheet();
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

  const sideClasses = {
    top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
    right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
    bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
    left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
  };

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
          "fixed z-50 flex h-full flex-col bg-background shadow-lg",
          sideClasses[side],
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
 * Sheet Header component
 */
export function SheetHeader({ className, children, ...props }) {
  return (
    <div className={cn("flex flex-col space-y-1.5 p-6", className)} {...props}>
      {children}
    </div>
  );
}

/**
 * Sheet Title component
 */
export function SheetTitle({ className, children, ...props }) {
  return (
    <h2 className={cn("text-lg font-semibold leading-none tracking-tight", className)} {...props}>
      {children}
    </h2>
  );
}

/**
 * Sheet Description component
 */
export function SheetDescription({ className, children, ...props }) {
  return (
    <p className={cn("text-sm text-muted-foreground", className)} {...props}>
      {children}
    </p>
  );
}

/**
 * Sheet Footer component
 */
export function SheetFooter({ className, children, ...props }) {
  return (
    <div className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 p-6", className)} {...props}>
      {children}
    </div>
  );
}

/**
 * Sheet Close component
 */
export function SheetClose({ asChild, children, className, ...props }) {
  const { setIsOpen } = useSheet();

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

export default Sheet;

// Usage examples:
// <Sheet>
//   <SheetTrigger>Open Sheet</SheetTrigger>
//   <SheetContent side="right">
//     <SheetHeader>
//       <SheetTitle>Edit Profile</SheetTitle>
//       <SheetDescription>
//         Make changes to your profile here. Click save when you're done.
//       </SheetDescription>
//     </SheetHeader>
//     <div className="flex-1 p-6">
//       Content goes here
//     </div>
//     <SheetFooter>
//       <SheetClose>Cancel</SheetClose>
//       <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md">Save</button>
//     </SheetFooter>
//   </SheetContent>
// </Sheet>
