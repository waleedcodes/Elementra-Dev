import React, { useState } from "react";
import { cn } from "@/lib/utils";

/**
 * DatePicker component combining Popover date selector & formatted date display
 *
 * Props:
 * - date: Date (controlled)
 * - onDateChange: (date: Date) => void
 * - placeholder: string
 * - className: string
 */
export function DatePicker({
  date: controlledDate,
  onDateChange,
  placeholder = "Pick a date",
  className,
  ...props
}) {
  const [internalDate, setInternalDate] = useState(null);
  const [open, setOpen] = useState(false);

  const selectedDate = controlledDate !== undefined ? controlledDate : internalDate;

  const formatDate = (d) => {
    if (!d) return null;
    return new Date(d).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const handleSelectDate = (d) => {
    if (controlledDate === undefined) {
      setInternalDate(d);
    }
    onDateChange?.(d);
    setOpen(false);
  };

  return (
    <div className={cn("relative inline-block w-full max-w-xs", className)} {...props}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={cn(
          "flex h-10 w-full items-center justify-start rounded-md border border-input bg-background px-3 py-2 text-sm shadow-xs transition-colors",
          "hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-primary/20",
          !selectedDate && "text-muted-foreground"
        )}
      >
        <svg
          className="mr-2 h-4 w-4 shrink-0 opacity-70"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
          <line x1="16" x2="16" y1="2" y2="6" />
          <line x1="8" x2="8" y1="2" y2="6" />
          <line x1="3" x2="21" y1="10" y2="10" />
        </svg>
        <span className="truncate">{selectedDate ? formatDate(selectedDate) : placeholder}</span>
      </button>

      {open && (
        <div className="absolute left-0 top-full z-50 mt-1 w-64 rounded-md border border-border bg-popover p-3 text-popover-foreground shadow-md outline-none animate-in fade-in-50">
          <div className="flex items-center justify-between pb-2 border-b border-border text-xs font-semibold">
            <span>Select Date</span>
            <button
              onClick={() => handleSelectDate(new Date())}
              className="text-primary hover:underline"
            >
              Today
            </button>
          </div>
          <div className="pt-2 text-center text-xs text-muted-foreground">
            <input
              type="date"
              className="w-full bg-muted/40 border border-border rounded px-2 py-1 text-sm text-foreground outline-none focus:border-primary"
              onChange={(e) => {
                if (e.target.valueAsDate) {
                  handleSelectDate(e.target.valueAsDate);
                }
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default DatePicker;
