"use client";
import React, { useState, useRef, useEffect } from "react";
import { cn } from "../../../lib/utils";

/**
 * Menubar — Desktop application top menubar system
 *
 * Sub-components: Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem, MenubarSeparator, MenubarShortcut
 */

const MenubarContext = React.createContext({});

export function Menubar({ className, children, ...props }) {
  const [activeMenu, setActiveMenu] = useState(null);
  const menubarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menubarRef.current && !menubarRef.current.contains(e.target)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <MenubarContext.Provider value={{ activeMenu, setActiveMenu }}>
      <div
        ref={menubarRef}
        className={cn(
          "flex h-10 items-center space-x-1 rounded-md border border-border bg-background p-1 shadow-sm select-none",
          className
        )}
        {...props}
      >
        {children}
      </div>
    </MenubarContext.Provider>
  );
}

export function MenubarMenu({ value, children }) {
  return (
    <div className="relative inline-block text-left">
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { menuValue: value });
        }
        return child;
      })}
    </div>
  );
}

export function MenubarTrigger({ menuValue, className, children, ...props }) {
  const { activeMenu, setActiveMenu } = React.useContext(MenubarContext);
  const isOpen = activeMenu === menuValue;

  return (
    <button
      type="button"
      onClick={() => setActiveMenu(isOpen ? null : menuValue)}
      onMouseEnter={() => activeMenu && setActiveMenu(menuValue)}
      className={cn(
        "flex items-center rounded-sm px-3 py-1.5 text-sm font-medium transition-colors outline-none",
        isOpen ? "bg-muted text-foreground" : "text-muted-foreground hover:bg-muted hover:text-foreground",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export function MenubarContent({ menuValue, className, children, ...props }) {
  const { activeMenu, setActiveMenu } = React.useContext(MenubarContext);
  if (activeMenu !== menuValue) return null;

  return (
    <div
      className={cn(
        "absolute left-0 top-full z-50 mt-1 min-w-[12rem] overflow-hidden rounded-md border border-border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 zoom-in-95",
        className
      )}
      {...props}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            onClose: () => setActiveMenu(null),
          });
        }
        return child;
      })}
    </div>
  );
}

export function MenubarItem({ onClose, disabled, className, children, onClick, ...props }) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={(e) => {
        if (disabled) return;
        onClick?.(e);
        onClose?.();
      }}
      className={cn(
        "relative flex w-full cursor-pointer select-none items-center justify-between rounded-sm px-2.5 py-1.5 text-sm outline-none transition-colors",
        "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export function MenubarSeparator({ className, ...props }) {
  return <div className={cn("-mx-1 my-1 h-px bg-border", className)} {...props} />;
}

export function MenubarShortcut({ className, children, ...props }) {
  return (
    <span
      className={cn("ml-auto text-xs tracking-widest text-muted-foreground", className)}
      {...props}
    >
      {children}
    </span>
  );
}

export default Menubar;
