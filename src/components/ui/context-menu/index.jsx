import React, { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { cn } from "@/lib/utils";

/**
 * Context Menu component
 * 
 * Props:
 * - open: boolean (controlled)
 * - onOpenChange: (open: boolean) => void
 * - className: string
 */
export function ContextMenu({ open, onOpenChange, className, children, ...props }) {
  const [internalOpen, setInternalOpen] = useState(false);
  const isOpen = open !== undefined ? open : internalOpen;
  const setIsOpen = (value) => {
    if (open === undefined) setInternalOpen(value);
    onOpenChange?.(value);
  };

  return (
    <ContextMenuContext.Provider value={{ isOpen, setIsOpen }}>
      <div className={cn("relative", className)} {...props}>
        {children}
      </div>
    </ContextMenuContext.Provider>
  );
}

const ContextMenuContext = React.createContext(null);

export function useContextMenu() {
  const context = React.useContext(ContextMenuContext);
  if (!context) throw new Error("ContextMenu components must be used within <ContextMenu>");
  return context;
}

/**
 * Context Menu Trigger component
 */
export function ContextMenuTrigger({ asChild, children, className, ...props }) {
  const { setIsOpen } = useContextMenu();
  const triggerRef = useRef(null);

  const handleContextMenu = (e) => {
    e.preventDefault();
    setIsOpen(true);
  };

  const child = asChild && React.isValidElement(children)
    ? React.cloneElement(children, {
        ref: (node) => {
          triggerRef.current = node;
          if (children.ref) {
            if (typeof children.ref === "function") children.ref(node);
            else children.ref.current = node;
          }
        },
        onContextMenu: (e) => {
          children.props?.onContextMenu?.(e);
          handleContextMenu(e);
        },
      })
    : (
      <div
        ref={triggerRef}
        onContextMenu={handleContextMenu}
        className={cn("cursor-context-menu", className)}
        {...props}
      >
        {children}
      </div>
    );

  return (
    <ContextMenuInternalRefsContext.Provider value={{ triggerRef }}>
      {child}
    </ContextMenuInternalRefsContext.Provider>
  );
}

const ContextMenuInternalRefsContext = React.createContext({ triggerRef: { current: null } });

export function useContextMenuRefs() {
  return React.useContext(ContextMenuInternalRefsContext);
}

/**
 * Context Menu Content component
 */
export function ContextMenuContent({ children, className, ...props }) {
  const { isOpen, setIsOpen } = useContextMenu();
  const { triggerRef } = useContextMenuRefs();
  const contentRef = useRef(null);
  const [coords, setCoords] = useState({ top: 0, left: 0 });
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
    
    const handleContextMenu = (e) => {
      setCoords({ top: e.clientY, left: e.clientX });
    };
    
    document.addEventListener("contextmenu", handleContextMenu);
    return () => document.removeEventListener("contextmenu", handleContextMenu);
  }, [isOpen, triggerRef]);

  if (!isOpen) return null;

  return createPortal(
    <div
      ref={contentRef}
      id={id}
      role="menu"
      tabIndex={-1}
      className={cn(
        "fixed z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
        "data-[state=open]:animate-in data-[state=closed]:animate-out",
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

/**
 * Context Menu Item component
 */
export function ContextMenuItem({
  onSelect,
  disabled = false,
  inset = false,
  className,
  children,
  ...props
}) {
  return (
    <div
      role="menuitem"
      className={cn(
        "relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none",
        "focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        inset && "pl-8",
        disabled && "pointer-events-none opacity-50",
        className
      )}
      onClick={() => !disabled && onSelect?.()}
      data-disabled={disabled}
      {...props}
    >
      {children}
    </div>
  );
}

/**
 * Context Menu Separator component
 */
export function ContextMenuSeparator({ className, ...props }) {
  return <div className={cn("-mx-1 my-1 h-px bg-border", className)} {...props} />;
}

/**
 * Context Menu Label component
 */
export function ContextMenuLabel({ inset = false, className, children, ...props }) {
  return (
    <div
      className={cn("px-2 py-1.5 text-xs font-medium text-muted-foreground", inset && "pl-8", className)}
      {...props}
    >
      {children}
    </div>
  );
}

/**
 * Context Menu Sub component
 */
export function ContextMenuSub({ children, ...props }) {
  return <div {...props}>{children}</div>;
}

/**
 * Context Menu Sub Trigger component
 */
export function ContextMenuSubTrigger({ inset = false, className, children, ...props }) {
  return (
    <div
      className={cn(
        "flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none",
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
        inset && "pl-8",
        className
      )}
      {...props}
    >
      {children}
      <svg className="ml-auto h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </div>
  );
}

/**
 * Context Menu Sub Content component
 */
export function ContextMenuSubContent({ className, children, ...props }) {
  return (
    <div
      className={cn(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
        "data-[state=open]:animate-in data-[state=closed]:animate-out",
        "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
        "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2",
        "data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export default ContextMenu;

// Usage examples:
// <ContextMenu>
//   <ContextMenuTrigger>
//     <div className="p-4 border rounded-md">Right click me</div>
//   </ContextMenuTrigger>
//   <ContextMenuContent>
//     <ContextMenuItem onSelect={() => console.log("Copy")}>Copy</ContextMenuItem>
//     <ContextMenuItem onSelect={() => console.log("Paste")}>Paste</ContextMenuItem>
//     <ContextMenuSeparator />
//     <ContextMenuItem onSelect={() => console.log("Delete")}>Delete</ContextMenuItem>
//   </ContextMenuContent>
// </ContextMenu>

