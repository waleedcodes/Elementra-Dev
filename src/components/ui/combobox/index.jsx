import React, { useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Combobox component for searchable selection dropdowns
 *
 * Props:
 * - options: Array<{ value: string, label: string }>
 * - value: string (controlled)
 * - defaultValue: string (uncontrolled)
 * - onChange: (value: string) => void
 * - placeholder: string
 * - searchPlaceholder: string
 * - emptyText: string
 * - className: string
 */
export function Combobox({
  options = [],
  value: controlledValue,
  defaultValue = "",
  onChange,
  placeholder = "Select an option...",
  searchPlaceholder = "Search option...",
  emptyText = "No results found.",
  className,
  ...props
}) {
  const [internalValue, setInternalValue] = useState(defaultValue);
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  const selectedValue = controlledValue !== undefined ? controlledValue : internalValue;
  const selectedOption = options.find((opt) => opt.value === selectedValue);

  const filteredOptions = options.filter((opt) =>
    opt.label.toLowerCase().includes(search.toLowerCase())
  );

  const handleSelect = (val) => {
    if (controlledValue === undefined) {
      setInternalValue(val);
    }
    onChange?.(val);
    setOpen(false);
    setSearch("");
  };

  return (
    <div className={cn("relative inline-block w-full max-w-xs", className)} {...props}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={cn(
          "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm shadow-xs transition-colors",
          "hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-primary/20",
          !selectedOption && "text-muted-foreground"
        )}
      >
        <span className="truncate">{selectedOption ? selectedOption.label : placeholder}</span>
        <svg
          className={cn("ml-2 h-4 w-4 shrink-0 opacity-50 transition-transform", open && "rotate-180")}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      {open && (
        <div className="absolute left-0 top-full z-50 mt-1 w-full rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-md outline-none animate-in fade-in-50">
          <div className="flex items-center border-b border-border px-3 py-2">
            <svg
              className="mr-2 h-4 w-4 shrink-0 opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={searchPlaceholder}
              className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
              autoFocus
            />
          </div>

          <div className="max-h-60 overflow-y-auto p-1">
            {filteredOptions.length === 0 ? (
              <div className="py-6 text-center text-xs text-muted-foreground">{emptyText}</div>
            ) : (
              filteredOptions.map((opt) => {
                const isSelected = opt.value === selectedValue;
                return (
                  <div
                    key={opt.value}
                    onClick={() => handleSelect(opt.value)}
                    className={cn(
                      "relative flex cursor-pointer select-none items-center rounded-sm px-2.5 py-1.5 text-sm outline-none transition-colors",
                      "hover:bg-accent hover:text-accent-foreground",
                      isSelected && "bg-accent text-accent-foreground font-medium"
                    )}
                  >
                    <span className="flex-1 truncate">{opt.label}</span>
                    {isSelected && (
                      <svg
                        className="ml-2 h-4 w-4 text-primary"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="20 6 9 17l-5-5" />
                      </svg>
                    )}
                  </div>
                );
              })
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Combobox;
