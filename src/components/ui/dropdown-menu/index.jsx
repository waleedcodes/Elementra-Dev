import React, { useEffect, useId, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { cn } from "@/lib/utils";

export function DropdownMenu({
  open: openProp,
  onOpenChange,
  align = "start",
  side = "bottom",
  offset = 8,
  children,
  className,
}) {
  const [open, setOpen] = useState(Boolean(openProp));
  useEffect(() => {
    if (typeof openProp === "boolean") setOpen(openProp);
  }, [openProp]);

  const setOpenSafe = (v) => {
    setOpen(v);
    onOpenChange?.(v);
  };

  return (
    <DropdownMenuContext.Provider value={{ open, setOpen: setOpenSafe, align, side, offset }}>
      <div className={cn("relative inline-flex", className)}>{children}</div>
    </DropdownMenuContext.Provider>
  );
}

const DropdownMenuContext = React.createContext(null);
export function useDropdownMenu() {
  const ctx = React.useContext(DropdownMenuContext);
  if (!ctx) throw new Error("DropdownMenu components must be used within <DropdownMenu>");
  return ctx;
}

export function DropdownMenuTrigger({ asChild, children, className, ...props }) {
  const { open, setOpen } = useDropdownMenu();
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
          setOpen(!open);
        },
        "aria-expanded": open,
        "aria-haspopup": "menu",
      })
    : (
      <button
        type="button"
        ref={triggerRef}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-haspopup="menu"
        className={cn("inline-flex items-center gap-2 rounded-md border bg-background px-3 py-2 text-sm shadow-sm hover:bg-accent", className)}
        {...props}
      >
        {children || "Open"}
      </button>
    );

  return (
    <DropdownMenuInternalRefsContext.Provider value={{ triggerRef }}>
      {child}
    </DropdownMenuInternalRefsContext.Provider>
  );
}

const DropdownMenuInternalRefsContext = React.createContext({ triggerRef: { current: null } });
export function useDropdownRefs() {
  return React.useContext(DropdownMenuInternalRefsContext);
}

export function DropdownMenuContent({ children, className, style }) {
  const { open, setOpen, align, side, offset } = useDropdownMenu();
  const { triggerRef } = useDropdownRefs();
  const menuRef = useRef(null);
  const [coords, setCoords] = useState({ top: 0, left: 0, minWidth: 0 });
  const id = useId();

  useEffect(() => {
    function onDocKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    function onDocClick(e) {
      if (!menuRef.current || !open) return;
      if (!menuRef.current.contains(e.target) && !triggerRef.current?.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("keydown", onDocKey);
    document.addEventListener("mousedown", onDocClick);
    return () => {
      document.removeEventListener("keydown", onDocKey);
      document.removeEventListener("mousedown", onDocClick);
    };
  }, [open, setOpen, triggerRef]);

  useEffect(() => {
    if (!open || !triggerRef.current) return;
    const r = triggerRef.current.getBoundingClientRect();
    const minWidth = Math.max(180, r.width);
    let top = r.bottom + offset;
    let left = r.left;
    if (side === "top") top = r.top - offset;
    if (align === "end") left = r.right - minWidth;
    setCoords({ top, left, minWidth });
  }, [open, align, side, offset, triggerRef]);

  if (!open) return null;
  return createPortal(
    <div
      role="menu"
      id={id}
      ref={menuRef}
      tabIndex={-1}
      className={cn(
        "fixed z-50 rounded-md border bg-popover p-1 shadow-xl outline-none",
        "animate-in fade-in-0 zoom-in-95",
        className
      )}
      style={{ top: coords.top, left: coords.left, minWidth: coords.minWidth, ...style }}
    >
      {children}
    </div>,
    document.body
  );
}

export function DropdownMenuItem({ children, inset, disabled = false, onSelect, className, ...props }) {
  const ref = useRef(null);
  const [focused, setFocused] = useState(false);
  return (
    <div
      role="menuitem"
      ref={ref}
      tabIndex={disabled ? -1 : 0}
      aria-disabled={disabled}
      onClick={(e) => { if (!disabled) onSelect?.(e); }}
      onKeyDown={(e) => {
        if (disabled) return;
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onSelect?.(e); }
      }}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      className={cn(
        "flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none",
        "text-popover-foreground hover:bg-accent hover:text-accent-foreground",
        disabled && "pointer-events-none opacity-50",
        inset && "pl-8",
        focused && "bg-accent",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function DropdownMenuSeparator() {
  return <div className="my-1 h-px bg-border" />;
}

export function DropdownMenuLabel({ inset, className, children }) {
  return (
    <div className={cn("px-2 py-1.5 text-xs font-medium text-muted-foreground", inset && "pl-8", className)}>
      {children}
    </div>
  );
}

export default DropdownMenu;

// Usage example:
// <DropdownMenu>
//   <DropdownMenuTrigger>Open</DropdownMenuTrigger>
//   <DropdownMenuContent>
//     <DropdownMenuLabel>My Menu</DropdownMenuLabel>
//     <DropdownMenuItem onSelect={() => alert('Item 1')}>Item 1</DropdownMenuItem>
//     <DropdownMenuItem inset onSelect={() => alert('Item 2')}>Item 2</DropdownMenuItem>
//     <DropdownMenuSeparator />
//     <DropdownMenuItem disabled>Disabled</DropdownMenuItem>
//   </DropdownMenuContent>
// </DropdownMenu>
