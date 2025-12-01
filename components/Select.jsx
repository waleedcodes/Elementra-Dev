"use client";
import React, { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

const variants = {
  primary: "border-primary-500 focus:ring-primary-500",
  secondary: "border-secondary-500 focus:ring-secondary-500",
  success: "border-success-500 focus:ring-success-500",
  danger: "border-danger-500 focus:ring-danger-500",
  warning: "border-warning-500 focus:ring-warning-500",
  info: "border-info-500 focus:ring-info-500",
};

export const Select = React.forwardRef(
  (
    {
      className,
      children,
      placeholder = "Select an option",
      disabled = false,
      variant = "primary",
      ...props
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const selectRef = useRef(null);

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
      setSelectedOption(option);
      setIsOpen(false);
      if (props.onChange) {
        props.onChange(option.value);
      }
    };

    const options = React.Children.toArray(children)
      .filter(
        (child) => React.isValidElement(child) && child.type === SelectOption
      )
      .map((child) => {
        const { value, children } = child.props;
        return { value, label: children };
      });

    return (
      <div ref={selectRef} className={cn("relative w-full p-5", className)}>
        <button
          type="button"
          ref={ref}
          className={cn(
            "flex h-10 items-center justify-between rounded-md border px-3 py-2 text-sm",
            "transition-all duration-200 ease-in-out",
            "focus:outline-none focus:ring-2 focus:ring-offset-2",
            "disabled:cursor-not-allowed disabled:opacity-50",
            "bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100",
            "border-gray-300 dark:border-gray-600",
            variants[variant],
            isOpen && "ring-2 ring-offset-2",
            className
          )}
          onClick={() => !disabled && setIsOpen(!isOpen)}
          disabled={disabled}
          {...props}
        >
          <span>{selectedOption ? selectedOption.label : placeholder}</span>
          <ChevronDown
            className={cn(
              "ml-2 h-4 w-4 shrink-0",
              "transition-transform duration-200",
              isOpen && "rotate-180"
            )}
          />
        </button>

        {isOpen && (
          <div
            className={cn(
              "absolute z-10 w-full mt-1 rounded-md shadow-lg",
              "transform transition-all duration-200 ease-in-out",
              "animate-in fade-in-0 zoom-in-95",
              "bg-white dark:bg-gray-800 border dark:border-gray-700"
            )}
          >
            <ul className="py-1 rounded-md border bg-background dark:bg-gray-800 dark:border-gray-700">
              {options.map((option, index) => (
                <li
                  key={index}
                  className={cn(
                    "px-3 py-2 text-sm cursor-pointer",
                    "transition-colors duration-150",
                    "hover:bg-muted dark:hover:bg-gray-700",
                    "text-gray-900 dark:text-gray-100",
                    selectedOption?.value === option.value &&
                      "bg-muted dark:bg-gray-700 font-medium"
                  )}
                  onClick={() => handleOptionSelect(option)}
                >
                  {option.label}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
);

export const SelectOption = ({ value, children }) => {
  return null; // This component is only used for structure
};

Select.displayName = "Select";
SelectOption.displayName = "SelectOption";

export { SelectOption as Option };
