import React, { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { cn } from "@/lib/utils";

export function Tooltip({ children, content, side = "top", align = "center", offset = 8, delay = 100, className }) {
  const [open, setOpen] = useState(false);
  const [coords, setCoords] = useState({ top: 0, left: 0 });
  const id = useId();
  const triggerRef = useRef(null);
  const tooltipRef = useRef(null);
  const timer = useRef(null);

  useEffect(() => () => clearTimeout(timer.current), []);

  function show() {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setOpen(true), delay);
  }
  function hide() {
    clearTimeout(timer.current);
    setOpen(false);
  }

  useEffect(() => {
    if (!open || !triggerRef.current) return;
    const r = triggerRef.current.getBoundingClientRect();
    const tooltipW = 240; // default width
    let top = r.top - offset;
    let left = r.left + r.width / 2 - tooltipW / 2;
    if (side === "bottom") top = r.bottom + offset;
    if (align === "start") left = r.left;
    if (align === "end") left = r.right - tooltipW;
    setCoords({ top, left });
  }, [open, side, align, offset]);

  const trigger = React.isValidElement(children)
    ? React.cloneElement(children, {
        ref: (node) => {
          triggerRef.current = node;
          const { ref } = children;
          if (typeof ref === "function") ref(node);
          else if (ref) ref.current = node;
        },
        onMouseEnter: (e) => { children.props?.onMouseEnter?.(e); show(); },
        onMouseLeave: (e) => { children.props?.onMouseLeave?.(e); hide(); },
        onFocus: (e) => { children.props?.onFocus?.(e); show(); },
        onBlur: (e) => { children.props?.onBlur?.(e); hide(); },
        "aria-describedby": id,
      })
    : children;

  return (
    <>
      {trigger}
      {open && createPortal(
        <div
          role="tooltip"
          id={id}
          ref={tooltipRef}
          className={cn(
            "pointer-events-none fixed z-50 max-w-xs rounded-md border bg-popover px-2.5 py-1.5 text-xs text-popover-foreground shadow-md",
            "animate-in fade-in-0 zoom-in-95",
            className
          )}
          style={{ top: coords.top, left: coords.left }}
        >
          {content}
        </div>,
        document.body
      )}
    </>
  );
}

export default Tooltip;

// Usage:
// <Tooltip content="Save changes">
//   <button className="rounded-md border bg-background px-3 py-2 text-sm">Hover me</button>
// </Tooltip>
