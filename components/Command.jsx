import React, { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { cn } from "@/lib/utils";

/**
 * Command Palette component for search and actions
 * 
 * Props:
 * - open: boolean (controlled)
 * - onOpenChange: (open: boolean) => void
 * - placeholder: string
 * - className: string
 */
export function Command({ open, onOpenChange, placeholder = "Type a command or search...", className, children, ...props }) {
    const [internalOpen, setInternalOpen] = useState(false);
    const isOpen = open !== undefined ? open : internalOpen;
    const setIsOpen = (value) => {
        if (open === undefined) setInternalOpen(value);
        onOpenChange?.(value);
    };

    useEffect(() => {
        function onKeyDown(e) {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setIsOpen(true);
            }
            if (e.key === "Escape" && isOpen) {
                setIsOpen(false);
            }
        }
        document.addEventListener("keydown", onKeyDown);
        return () => document.removeEventListener("keydown", onKeyDown);
    }, [isOpen, setIsOpen]);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return createPortal(
        <div className="fixed inset-0 z-50 bg-black/80" onClick={() => setIsOpen(false)}>
            <div
                className={cn(
                    "fixed left-1/2 top-1/2 z-50 w-full max-w-lg -translate-x-1/2 -translate-y-1/2",
                    "rounded-lg border bg-popover shadow-lg",
                    className
                )}
                onClick={(e) => e.stopPropagation()}
                {...props}
            >
                <CommandContext.Provider value={{ isOpen, setIsOpen, placeholder }}>
                    {children}
                </CommandContext.Provider>
            </div>
        </div>,
        document.body
    );
}

const CommandContext = React.createContext(null);

export function useCommand() {
    const context = React.useContext(CommandContext);
    if (!context) throw new Error("Command components must be used within <Command>");
    return context;
}

/**
 * Command Input component
 */
export function CommandInput({ className, ...props }) {
    const { placeholder } = useCommand();
    const [value, setValue] = useState("");
    const inputRef = useRef(null);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    return (
        <div className="flex items-center border-b px-3">
            <svg
                className="mr-2 h-4 w-4 shrink-0 opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
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
                ref={inputRef}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder={placeholder}
                className={cn(
                    "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none",
                    "placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
                    className
                )}
                {...props}
            />
        </div>
    );
}

/**
 * Command List component
 */
export function CommandList({ className, children, ...props }) {
    return (
        <div
            className={cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className)}
            {...props}
        >
            {children}
        </div>
    );
}

/**
 * Command Empty component
 */
export function CommandEmpty({ className, children = "No results found.", ...props }) {
    return (
        <div
            className={cn("py-6 text-center text-sm text-muted-foreground", className)}
            {...props}
        >
            {children}
        </div>
    );
}

/**
 * Command Group component
 */
export function CommandGroup({ heading, className, children, ...props }) {
    return (
        <div className={cn("p-1", className)} {...props}>
            {heading && (
                <div className="px-2 py-1.5 text-xs font-medium text-muted-foreground">
                    {heading}
                </div>
            )}
            <div className="space-y-1">{children}</div>
        </div>
    );
}

/**
 * Command Item component
 */
export function CommandItem({
    value,
    onSelect,
    disabled = false,
    className,
    children,
    ...props
}) {
    const [selected, setSelected] = useState(false);

    return (
        <div
            className={cn(
                "relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm",
                "outline-none aria-selected:bg-accent aria-selected:text-accent-foreground",
                "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
                selected && "bg-accent text-accent-foreground",
                disabled && "pointer-events-none opacity-50",
                className
            )}
            onMouseEnter={() => setSelected(true)}
            onMouseLeave={() => setSelected(false)}
            onClick={() => !disabled && onSelect?.(value)}
            data-disabled={disabled}
            {...props}
        >
            {children}
        </div>
    );
}

/**
 * Command Separator component
 */
export function CommandSeparator({ className, ...props }) {
    return <div className={cn("-mx-1 h-px bg-border", className)} {...props} />;
}

/**
 * Command Shortcut component
 */
export function CommandShortcut({ className, ...props }) {
    return (
        <span
            className={cn(
                "ml-auto text-xs tracking-widest text-muted-foreground",
                className
            )}
            {...props}
        />
    );
}

export default Command;

// Usage examples:
// <Command>
//   <CommandInput placeholder="Type a command or search..." />
//   <CommandList>
//     <CommandEmpty>No results found.</CommandEmpty>
//     <CommandGroup heading="Suggestions">
//       <CommandItem onSelect={() => console.log("Calendar")}>
//         <Calendar className="mr-2 h-4 w-4" />
//         <span>Calendar</span>
//       </CommandItem>
//       <CommandItem onSelect={() => console.log("Search")}>
//         <Search className="mr-2 h-4 w-4" />
//         <span>Search</span>
//         <CommandShortcut>⌘K</CommandShortcut>
//       </CommandItem>
//     </CommandGroup>
//   </CommandList>
// </Command>
