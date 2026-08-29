"use client";
import React from "react";
import { cn } from "../../../lib/utils";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";

/**
 * Pagination — Navigation pagination with page numbers, prev/next buttons & ellipsis.
 * Supports both high-level declarative usage and composable sub-components.
 */

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  siblingCount = 1,
  className,
  children,
  ...props
}) {
  // If children are provided, render as composable container
  if (children) {
    return (
      <nav
        role="navigation"
        aria-label="pagination"
        className={cn("mx-auto flex w-full justify-center", className)}
        {...props}
      >
        {children}
      </nav>
    );
  }

  // Declarative mode
  const current = currentPage || 1;
  const total = totalPages || 1;

  const generatePages = () => {
    const pages = [];
    const leftSibling = Math.max(current - siblingCount, 1);
    const rightSibling = Math.min(current + siblingCount, total);

    const showLeftEllipsis = leftSibling > 2;
    const showRightEllipsis = rightSibling < total - 1;

    pages.push(1);

    if (showLeftEllipsis) {
      pages.push("...");
    } else if (total > 1 && leftSibling === 2) {
      pages.push(2);
    }

    for (let i = Math.max(2, leftSibling); i <= Math.min(total - 1, rightSibling); i++) {
      if (!pages.includes(i)) pages.push(i);
    }

    if (showRightEllipsis) {
      pages.push("...");
    } else if (total > 1 && rightSibling === total - 1) {
      pages.push(total - 1);
    }

    if (total > 1 && !pages.includes(total)) {
      pages.push(total);
    }

    return pages;
  };

  const pages = generatePages();

  return (
    <nav
      role="navigation"
      aria-label="pagination"
      className={cn("flex items-center justify-center gap-1 select-none", className)}
      {...props}
    >
      <button
        type="button"
        disabled={current <= 1}
        onClick={() => onPageChange?.(current - 1)}
        className={cn(
          "inline-flex items-center justify-center h-9 px-3 text-sm font-medium rounded-md transition-colors",
          "border border-border bg-background hover:bg-muted text-foreground",
          "disabled:opacity-40 disabled:cursor-not-allowed"
        )}
      >
        <ChevronLeft className="h-4 w-4 mr-1" />
        Previous
      </button>

      {pages.map((page, idx) => {
        if (page === "...") {
          return (
            <span
              key={`ellipsis-${idx}`}
              className="inline-flex items-center justify-center h-9 w-9 text-sm text-muted-foreground"
            >
              •••
            </span>
          );
        }

        const isCurrent = page === current;
        return (
          <button
            key={page}
            type="button"
            aria-current={isCurrent ? "page" : undefined}
            onClick={() => onPageChange?.(page)}
            className={cn(
              "inline-flex items-center justify-center h-9 w-9 text-sm font-medium rounded-md transition-colors",
              isCurrent
                ? "bg-primary text-primary-foreground shadow-sm"
                : "border border-border bg-background hover:bg-muted text-foreground"
            )}
          >
            {page}
          </button>
        );
      })}

      <button
        type="button"
        disabled={current >= total}
        onClick={() => onPageChange?.(current + 1)}
        className={cn(
          "inline-flex items-center justify-center h-9 px-3 text-sm font-medium rounded-md transition-colors",
          "border border-border bg-background hover:bg-muted text-foreground",
          "disabled:opacity-40 disabled:cursor-not-allowed"
        )}
      >
        Next
        <ChevronRight className="h-4 w-4 ml-1" />
      </button>
    </nav>
  );
}

export function PaginationContent({ className, ...props }) {
  return (
    <ul
      className={cn("flex flex-row items-center gap-1", className)}
      {...props}
    />
  );
}

export function PaginationItem({ className, ...props }) {
  return <li className={cn("", className)} {...props} />;
}

export function PaginationLink({ className, isActive, size = "icon", children, ...props }) {
  return (
    <button
      type="button"
      aria-current={isActive ? "page" : undefined}
      className={cn(
        "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        size === "icon" ? "h-9 w-9" : "h-9 px-4 py-2",
        isActive
          ? "bg-primary text-primary-foreground shadow-sm"
          : "border border-border bg-background hover:bg-muted hover:text-foreground text-muted-foreground",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export function PaginationPrevious({ className, disabled, ...props }) {
  return (
    <button
      type="button"
      disabled={disabled}
      aria-label="Go to previous page"
      className={cn(
        "inline-flex items-center justify-center gap-1 rounded-md text-sm font-medium transition-colors h-9 px-3 border border-border bg-background hover:bg-muted text-foreground disabled:opacity-40 disabled:cursor-not-allowed",
        className
      )}
      {...props}
    >
      <ChevronLeft className="h-4 w-4" />
      <span>Previous</span>
    </button>
  );
}

export function PaginationNext({ className, disabled, ...props }) {
  return (
    <button
      type="button"
      disabled={disabled}
      aria-label="Go to next page"
      className={cn(
        "inline-flex items-center justify-center gap-1 rounded-md text-sm font-medium transition-colors h-9 px-3 border border-border bg-background hover:bg-muted text-foreground disabled:opacity-40 disabled:cursor-not-allowed",
        className
      )}
      {...props}
    >
      <span>Next</span>
      <ChevronRight className="h-4 w-4" />
    </button>
  );
}

export function PaginationEllipsis({ className, ...props }) {
  return (
    <span
      aria-hidden
      className={cn("flex h-9 w-9 items-center justify-center text-muted-foreground", className)}
      {...props}
    >
      <MoreHorizontal className="h-4 w-4" />
      <span className="sr-only">More pages</span>
    </span>
  );
}

export default Pagination;
