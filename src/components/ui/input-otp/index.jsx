import React, { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

/**
 * InputOTP component for one-time passcode / PIN input
 *
 * Props:
 * - maxLength: number (default: 6)
 * - value: string (controlled)
 * - defaultValue: string (uncontrolled)
 * - onChange: (value: string) => void
 * - onComplete: (value: string) => void
 * - disabled: boolean
 * - className: string
 */
export function InputOTP({
  maxLength = 6,
  value: controlledValue,
  defaultValue = "",
  onChange,
  onComplete,
  disabled = false,
  className,
  children,
  ...props
}) {
  const [internalValue, setInternalValue] = useState(defaultValue);
  const value = controlledValue !== undefined ? controlledValue : internalValue;

  const handleChange = (newValue) => {
    const trimmed = newValue.slice(0, maxLength);
    if (controlledValue === undefined) {
      setInternalValue(trimmed);
    }
    onChange?.(trimmed);
    if (trimmed.length === maxLength) {
      onComplete?.(trimmed);
    }
  };

  return (
    <InputOTPContext.Provider value={{ value, maxLength, handleChange, disabled }}>
      <div className={cn("flex items-center gap-2 select-none", className)} {...props}>
        {children || <InputOTPGroup length={maxLength} />}
      </div>
    </InputOTPContext.Provider>
  );
}

const InputOTPContext = React.createContext(null);

export function useInputOTP() {
  const context = React.useContext(InputOTPContext);
  if (!context) throw new Error("InputOTP components must be used within <InputOTP>");
  return context;
}

export function InputOTPGroup({ length = 6, className, ...props }) {
  const { value, handleChange, disabled } = useInputOTP();
  const inputRefs = useRef([]);

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      e.preventDefault();
      if (value[index]) {
        const nextValue = value.slice(0, index) + value.slice(index + 1);
        handleChange(nextValue);
      } else if (index > 0) {
        const nextValue = value.slice(0, index - 1);
        handleChange(nextValue);
        inputRefs.current[index - 1]?.focus();
      }
    } else if (e.key === "ArrowLeft" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    } else if (e.key === "ArrowRight" && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleInput = (e, index) => {
    const char = e.target.value.slice(-1);
    if (!char) return;

    const valArray = value.split("");
    valArray[index] = char;
    const nextValue = valArray.join("");
    handleChange(nextValue);

    if (index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text/plain").trim();
    if (pastedData) {
      handleChange(pastedData);
      const targetIndex = Math.min(pastedData.length, length) - 1;
      if (targetIndex >= 0) {
        inputRefs.current[targetIndex]?.focus();
      }
    }
  };

  return (
    <div className={cn("flex items-center gap-1.5", className)} onPaste={handlePaste} {...props}>
      {Array.from({ length }).map((_, i) => (
        <input
          key={i}
          ref={(el) => (inputRefs.current[i] = el)}
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          maxLength={1}
          disabled={disabled}
          value={value[i] || ""}
          onKeyDown={(e) => handleKeyDown(e, i)}
          onChange={(e) => handleInput(e, i)}
          className={cn(
            "h-10 w-10 text-center text-sm font-semibold border border-input rounded-md bg-background shadow-xs transition-all",
            "focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none",
            "disabled:cursor-not-allowed disabled:opacity-50"
          )}
        />
      ))}
    </div>
  );
}

export function InputOTPSeparator({ className, ...props }) {
  return (
    <div className={cn("text-muted-foreground font-bold px-1", className)} {...props}>
      -
    </div>
  );
}

export default InputOTP;
