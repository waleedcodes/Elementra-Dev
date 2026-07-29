import React, { useMemo, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Input component
 *
 * Props:
 * - type: text | email | password | number | search | url
 * - size: sm | md | lg
 * - intent: default | success | error
 * - disabled: boolean
 * - leftIcon: ReactNode
 * - rightIcon: ReactNode
 * - showPasswordToggle: boolean (only for type="password")
 * - maxLength: number (enables character counter when provided)
 */
export function Input({
  type = "text",
  size = "md",
  intent = "default",
  disabled = false,
  leftIcon,
  rightIcon,
  showPasswordToggle = true,
  maxLength,
  className,
  ...props
}) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const isPassword = type === "password";

  const sizeClasses = useMemo(
    () => ({
      sm: "h-9 px-3 text-sm",
      md: "h-10 px-3.5 text-sm",
      lg: "h-11 px-4 text-base",
    })[size] || "h-10 px-3.5 text-sm",
    [size]
  );

  const intentClasses = useMemo(
    () => ({
      default:
        "border-input bg-background placeholder:text-muted-foreground focus-visible:ring-ring",
      success:
        "border-green-500/60 focus-visible:ring-green-500/30 placeholder:text-green-500/70",
      error:
        "border-red-500/60 focus-visible:ring-red-500/30 placeholder:text-red-500/70",
    })[intent] ||
      "border-input bg-background placeholder:text-muted-foreground focus-visible:ring-ring",
    [intent]
  );

  const leftPadding = leftIcon ? "pl-9" : "";
  const rightPadding = rightIcon || (isPassword && showPasswordToggle)
    ? "pr-9"
    : "";

  const inputType = isPassword ? (isPasswordVisible ? "text" : "password") : type;

  return (
    <div className={cn("w-full", className)}>
      <div className={cn("relative inline-flex w-full items-center", disabled && "opacity-60")}>        
        {leftIcon ? (
          <span className="pointer-events-none absolute left-3 inline-flex text-muted-foreground">
            {leftIcon}
          </span>
        ) : null}

        <input
          type={inputType}
          disabled={disabled}
          className={cn(
            "w-full rounded-md border text-foreground shadow-sm outline-none transition",
            "focus-visible:ring-4",
            sizeClasses,
            intentClasses,
            leftPadding,
            rightPadding
          )}
          {...(maxLength ? { maxLength } : {})}
          {...props}
        />

        {isPassword && showPasswordToggle ? (
          <button
            type="button"
            tabIndex={-1}
            onClick={() => setIsPasswordVisible((v) => !v)}
            className={cn(
              "absolute right-2 inline-flex h-7 w-7 items-center justify-center rounded-md text-muted-foreground",
              "hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            )}
            aria-label={isPasswordVisible ? "Hide password" : "Show password"}
          >
            {isPasswordVisible ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                <path d="M12 5c-7 0-11 7-11 7s4 7 11 7 11-7 11-7-4-7-11-7Zm0 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10Z"/>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                <path d="M3.53 2.47 2.47 3.53l3.02 3.02C3.09 8.18 1 12 1 12s4 7 11 7c2.1 0 3.9-.54 5.41-1.35l3.06 3.05 1.06-1.06L3.53 2.47ZM12 17c-2.76 0-5-2.24-5-5 0-.88.24-1.71.66-2.42l6.76 6.76c-.71.42-1.54.66-2.42.66Zm4.34-1.58-1.47-1.47A4.97 4.97 0 0 0 17 12c0-2.76-2.24-5-5-5-.64 0-1.26.13-1.83.35L8.2 6.38C9.44 5.52 10.88 5 12 5c7 0 11 7 11 7s-1.64 2.89-4.66 4.42Z"/>
              </svg>
            )}
          </button>
        ) : null}

        {rightIcon && !(isPassword && showPasswordToggle) ? (
          <span className="absolute right-3 inline-flex text-muted-foreground">
            {rightIcon}
          </span>
        ) : null}
      </div>

      {typeof props.value === "string" && maxLength ? (
        <div className="mt-1 text-right text-xs text-muted-foreground">
          {props.value.length}/{maxLength}
        </div>
      ) : null}
    </div>
  );
}

export default Input;
