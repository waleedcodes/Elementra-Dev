"use client";
import React from "react";
import { cn } from "../../../lib/utils";

/**
 * Pagination — Navigation pagination with page numbers, prev/next buttons & ellipsis
 *
 * Props:
 * - currentPage: number
 * - totalPages: number
 * - onPageChange: (page: number) => void
 * - siblingCount: number
 * - className: string
 */

export function Pagination({
  currentPage = 1,
  totalPages = 1,
  onPageChange,
  siblingCount = 1,
  className,
  ...props
}) {
  const generatePages = () => {
    const pages = [];
    const leftSibling = Math.max(currentPage - siblingCount, 1);
    const rightSibling = Math.min(currentPage + siblingCount, totalPages);

    const showLeftEllipsis = leftSibling > 2;
    const showRightEllipsis = rightSibling < totalPages - 1;

    pages.push(1);

    if (showLeftEllipsis) {
      pages.push("...");
    } else if (totalPages > 1 && leftSibling === 2) {
      pages.push(2);
    }

    for (let i = Math.max(2, leftSibling); i <= Math.min(totalPages - 1, rightSibling); i++) {
      if (!pages.includes(i)) pages.push(i);
    }

    if (showRightEllipsis) {
      pages.push("...");
    } else if (totalPages > 1 && rightSibling === totalPages - 1) {
      pages.push(totalPages - 1);
    }

    if (totalPages > 1 && !pages.includes(totalPages)) {
      pages.push(totalPages);
    }

    return pages;
  };

  const pages = generatePages();

  return (
    <nav
      aria-label="pagination"
      className={cn("flex items-center justify-center gap-1 select-none", className)}
      {...props}
    >
      {/* Previous Button */}
      <button
        type="button"
        disabled={currentPage <= 1}
        onClick={() => onPageChange?.(currentPage - 1)}
        className={cn(
          "inline-flex items-center justify-center h-9 px-3 text-sm font-medium rounded-md transition-colors",
          "border border-border bg-background hover:bg-muted text-foreground",
          "disabled:opacity-40 disabled:cursor-not-allowed"
        )}
      >
        <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
        Previous
      </button>

      {/* Page Numbers */}
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

        const isCurrent = page === currentPage;
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

      {/* Next Button */}
      <button
        type="button"
        disabled={currentPage >= totalPages}
        onClick={() => onPageChange?.(currentPage + 1)}
        className={cn(
          "inline-flex items-center justify-center h-9 px-3 text-sm font-medium rounded-md transition-colors",
          "border border-border bg-background hover:bg-muted text-foreground",
          "disabled:opacity-40 disabled:cursor-not-allowed"
        )}
      >
        Next
        <svg className="h-4 w-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </nav>
  );
}

export default Pagination;
