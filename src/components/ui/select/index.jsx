"use client";
import React, { useState, useRef, useEffect } from "react";
import { cn } from "../../../lib/utils";
import { ChevronDown } from "lucide-react"; // Assuming you have lucide-react installed

export const Select = React.forwardRef(
  (
    {
      className,
      children,
      placeholder = "Select an option",
      disabled = false,
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

    // Extract options from children
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
            "flex h-10 w-32 items-center justify-between rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            isOpen && "ring-2 ring-gray-400 ring-offset-2"
          )}
          onClick={() => !disabled && setIsOpen(!isOpen)}
          disabled={disabled}
          {...props}
        >
          <span className={selectedOption ? "" : "text-gray-500"}>
            {selectedOption ? selectedOption.label : placeholder}
          </span>
          <ChevronDown
            className={cn(
              "ml-2 h-4 w-4 transition-transform shrink-0 text-gray-500",
              isOpen && "rotate-180"
            )}
          />
        </button>

        {isOpen && (
          <div className="absolute z-10 w-32 mt-1 bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-auto">
            <ul className="py-1">
              {options.map((option, index) => (
                <li
                  key={index}
                  className={cn(
                    "px-3 py-2 text-sm cursor-pointer hover:bg-gray-100",
                    selectedOption?.value === option.value &&
                      "bg-gray-100 font-medium"
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
