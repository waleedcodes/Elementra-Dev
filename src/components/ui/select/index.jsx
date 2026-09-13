"use client";

import React, { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown, Check } from "lucide-react";

export const Select = React.forwardRef(
  (
    {
      className,
      children,
      placeholder = "Select an option",
      defaultValue,
      value: controlledValue,
      onChange,
      disabled = false,
      ...props
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = useState(false);
    const [internalValue, setInternalValue] = useState(defaultValue || null);
    const selectRef = useRef(null);

    const selectedValue = controlledValue !== undefined ? controlledValue : internalValue;

    // Extract options from children
    const options = React.Children.toArray(children)
      .filter(
        (child) =>
          React.isValidElement(child) &&
          (child.type === SelectOption || child.type?.displayName === "SelectOption")
      )
      .map((child) => {
        const { value, children, icon: Icon } = child.props;
        return { value, label: children, icon: Icon };
      });

    const selectedOption = options.find((opt) => opt.value === selectedValue);

    useEffect(() => {
      const handleClickOutside = (event) => {
        if (selectRef.current && !selectRef.current.contains(event.target)) {
          setIsOpen(false);
        }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);

    const handleOptionSelect = (option) => {
      if (controlledValue === undefined) {
        setInternalValue(option.value);
      }
      setIsOpen(false);
      onChange?.(option.value);
    };

    return (
      <div ref={selectRef} className={cn("relative w-full max-w-xs", className)}>
        <button
          type="button"
          ref={ref}
          className={cn(
            "flex h-10 w-full items-center justify-between rounded-xl border border-border bg-card px-3.5 py-2 text-sm text-foreground shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:cursor-not-allowed disabled:opacity-50 hover:border-primary/40",
            isOpen && "border-primary ring-2 ring-primary/20"
          )}
          onClick={() => !disabled && setIsOpen(!isOpen)}
          disabled={disabled}
          {...props}
        >
          <span className={cn("truncate flex items-center gap-2", !selectedOption && "text-muted-foreground")}>
            {selectedOption?.icon && <selectedOption.icon className="h-4 w-4 text-primary" />}
            {selectedOption ? selectedOption.label : placeholder}
          </span>
          <ChevronDown
            className={cn(
              "ml-2 h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200",
              isOpen && "rotate-180 text-primary"
            )}
          />
        </button>

        {isOpen && (
          <div className="absolute z-50 mt-1.5 w-full rounded-2xl border border-border bg-card/95 p-1.5 shadow-2xl backdrop-blur-md max-h-60 overflow-y-auto animate-in fade-in-0 zoom-in-95">
            <ul className="space-y-0.5">
              {options.map((option, index) => {
                const isSelected = selectedOption?.value === option.value;
                return (
                  <li
                    key={index}
                    className={cn(
                      "flex items-center justify-between px-3 py-2 text-sm rounded-xl cursor-pointer transition-colors text-foreground",
                      isSelected
                        ? "bg-primary text-primary-foreground font-semibold"
                        : "hover:bg-muted text-foreground"
                    )}
                    onClick={() => handleOptionSelect(option)}
                  >
                    <span className="flex items-center gap-2 truncate">
                      {option.icon && <option.icon className={cn("h-4 w-4", isSelected ? "text-primary-foreground" : "text-primary")} />}
                      {option.label}
                    </span>
                    {isSelected && <Check className="h-4 w-4 shrink-0" />}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    );
  }
);

export const SelectOption = ({ value, children, icon }) => {
  return null;
};

Select.displayName = "Select";
SelectOption.displayName = "SelectOption";

export { SelectOption as Option };
