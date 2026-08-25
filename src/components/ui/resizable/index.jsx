import React, { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

/**
 * Resizable component for panels
 * 
 * Props:
 * - direction: horizontal | vertical
 * - defaultSize: number (default: 50)
 * - minSize: number (default: 10)
 * - maxSize: number (default: 90)
 * - className: string
 */
export function Resizable({
  direction = "horizontal",
  defaultSize = 50,
  minSize = 10,
  maxSize = 90,
  className,
  children,
  ...props
}) {
  const [size, setSize] = useState(defaultSize);
  const [isResizing, setIsResizing] = useState(false);
  const containerRef = useRef(null);
  const startPosRef = useRef(0);
  const startSizeRef = useRef(0);

  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsResizing(true);
    startPosRef.current = direction === "horizontal" ? e.clientX : e.clientY;
    startSizeRef.current = size;
  };

  const handleMouseMove = (e) => {
    if (!isResizing || !containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const containerSize = direction === "horizontal" ? containerRect.width : containerRect.height;
    const currentPos = direction === "horizontal" ? e.clientX : e.clientY;
    const delta = currentPos - startPosRef.current;
    const deltaPercent = (delta / containerSize) * 100;
    
    const newSize = Math.max(minSize, Math.min(maxSize, startSizeRef.current + deltaPercent));
    setSize(newSize);
  };

  const handleMouseUp = () => {
    setIsResizing(false);
  };

  useEffect(() => {
    if (isResizing) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      document.body.style.cursor = direction === "horizontal" ? "col-resize" : "row-resize";
      document.body.style.userSelect = "none";
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.body.style.cursor = "";
      document.body.style.userSelect = "";
    };
  }, [isResizing]);

  const childrenArray = React.Children.toArray(children);
  const firstChild = childrenArray[0];
  const secondChild = childrenArray[1];

  return (
    <div
      ref={containerRef}
      className={cn(
        "flex",
        direction === "horizontal" ? "flex-row" : "flex-col",
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "flex-shrink-0",
          direction === "horizontal" ? "h-full" : "w-full"
        )}
        style={{
          [direction === "horizontal" ? "width" : "height"]: `${size}%`,
        }}
      >
        {firstChild}
      </div>
      
      <div
        className={cn(
          "flex-shrink-0 bg-border transition-colors",
          direction === "horizontal" ? "w-1 cursor-col-resize" : "h-1 cursor-row-resize",
          isResizing && "bg-primary"
        )}
        onMouseDown={handleMouseDown}
      />
      
      <div
        className={cn(
          "flex-1",
          direction === "horizontal" ? "h-full" : "w-full"
        )}
        style={{
          [direction === "horizontal" ? "width" : "height"]: `${100 - size}%`,
        }}
      >
        {secondChild}
      </div>
    </div>
  );
}

/**
 * Resizable Panel component
 */
export function ResizablePanel({ className, children, ...props }) {
  return (
    <div className={cn("flex-1 overflow-hidden", className)} {...props}>
      {children}
    </div>
  );
}

/**
 * Resizable Handle component
 */
export function ResizableHandle({ direction = "horizontal", className, ...props }) {
  return (
    <div
      className={cn(
        "flex-shrink-0 bg-border transition-colors hover:bg-primary/50",
        direction === "horizontal" ? "w-1 cursor-col-resize" : "h-1 cursor-row-resize",
        className
      )}
      {...props}
    />
  );
}

/**
 * Resizable Group component for multiple panels
 */
export function ResizableGroup({
  direction = "horizontal",
  className,
  children,
  ...props
}) {
  const [sizes, setSizes] = useState(() => {
    const childrenCount = React.Children.count(children);
    return Array(childrenCount).fill(100 / childrenCount);
  });

  const handleResize = (index, newSize) => {
    setSizes(prev => {
      const newSizes = [...prev];
      newSizes[index] = newSize;
      newSizes[index + 1] = 100 - newSize;
      return newSizes;
    });
  };

  return (
    <div
      className={cn(
        "flex",
        direction === "horizontal" ? "flex-row" : "flex-col",
        className
      )}
      {...props}
    >
      {React.Children.map(children, (child, index) => (
        <React.Fragment key={index}>
          <div
            className={cn(
              "flex-shrink-0",
              direction === "horizontal" ? "h-full" : "w-full"
            )}
            style={{
              [direction === "horizontal" ? "width" : "height"]: `${sizes[index]}%`,
            }}
          >
            {child}
          </div>
          {index < React.Children.count(children) - 1 && (
            <ResizableHandle direction={direction} />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

export default Resizable;

// Usage examples:
// <Resizable direction="horizontal" defaultSize={30}>
//   <div className="p-4">Left Panel</div>
//   <div className="p-4">Right Panel</div>
// </Resizable>
//
// <ResizableGroup direction="vertical">
//   <div className="p-4">Top Panel</div>
//   <div className="p-4">Middle Panel</div>
//   <div className="p-4">Bottom Panel</div>
// </ResizableGroup>

