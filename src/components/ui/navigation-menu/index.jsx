import React, { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

/**
 * Navigation Menu component with variants
 * 
 * Props:
 * - variant: default | underline | pills | tabs
 * - orientation: horizontal | vertical
 * - className: string
 */
export function NavigationMenu({ variant = "default", orientation = "horizontal", className, children, ...props }) {
  const [activeItem, setActiveItem] = useState(null);
  const [indicatorStyle, setIndicatorStyle] = useState({});

  return (
    <NavigationMenuContext.Provider value={{ activeItem, setActiveItem, variant, orientation, indicatorStyle, setIndicatorStyle }}>
      <nav
        className={cn(
          "relative flex items-center",
          orientation === "vertical" && "flex-col items-start space-y-1",
          orientation === "horizontal" && "space-x-1",
          className
        )}
        {...props}
      >
        {children}
      </nav>
    </NavigationMenuContext.Provider>
  );
}

const NavigationMenuContext = React.createContext(null);

export function useNavigationMenu() {
  const context = React.useContext(NavigationMenuContext);
  if (!context) throw new Error("NavigationMenu components must be used within <NavigationMenu>");
  return context;
}

/**
 * Navigation Menu List component
 */
export function NavigationMenuList({ className, children, ...props }) {
  const { orientation } = useNavigationMenu();
  
  return (
    <ul
      className={cn(
        "flex list-none",
        orientation === "vertical" && "flex-col space-y-1",
        orientation === "horizontal" && "flex-row space-x-1",
        className
      )}
      {...props}
    >
      {children}
    </ul>
  );
}

/**
 * Navigation Menu Item component
 */
export function NavigationMenuItem({ value, className, children, ...props }) {
  const { activeItem, setActiveItem, variant, orientation } = useNavigationMenu();
  const itemRef = useRef(null);
  const isActive = activeItem === value;

  const variantClasses = {
    default: cn(
      "relative px-3 py-2 text-sm font-medium transition-colors",
      "hover:text-foreground focus:text-foreground focus:outline-none",
      isActive ? "text-foreground" : "text-muted-foreground"
    ),
    underline: cn(
      "relative px-3 py-2 text-sm font-medium transition-colors",
      "hover:text-foreground focus:text-foreground focus:outline-none",
      "after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-primary after:transition-all",
      isActive ? "text-foreground after:scale-x-100" : "text-muted-foreground after:scale-x-0"
    ),
    pills: cn(
      "relative px-3 py-2 text-sm font-medium rounded-md transition-colors",
      "hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-ring",
      isActive ? "bg-primary text-primary-foreground" : "text-muted-foreground"
    ),
    tabs: cn(
      "relative px-4 py-2 text-sm font-medium border-b-2 transition-colors",
      "hover:text-foreground focus:text-foreground focus:outline-none",
      isActive ? "text-foreground border-primary" : "text-muted-foreground border-transparent hover:border-muted-foreground"
    )
  };

  return (
    <li
      ref={itemRef}
      className={cn(variantClasses[variant], className)}
      onClick={() => setActiveItem(value)}
      {...props}
    >
      {children}
    </li>
  );
}

/**
 * Navigation Menu Trigger component
 */
export function NavigationMenuTrigger({ asChild, children, className, ...props }) {
  const { variant } = useNavigationMenu();

  const child = asChild && React.isValidElement(children)
    ? React.cloneElement(children, {
        className: cn(children.props?.className, className),
        ...props
      })
    : (
      <button
        type="button"
        className={cn("inline-flex items-center justify-center", className)}
        {...props}
      >
        {children}
      </button>
    );

  return child;
}

/**
 * Navigation Menu Content component
 */
export function NavigationMenuContent({ className, children, ...props }) {
  return (
    <div
      className={cn(
        "absolute left-0 top-full z-50 w-full rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
        "data-[state=open]:animate-in data-[state=closed]:animate-out",
        "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

/**
 * Navigation Menu Link component
 */
export function NavigationMenuLink({ href, className, children, ...props }) {
  const { variant } = useNavigationMenu();

  const variantClasses = {
    default: "block px-3 py-2 text-sm font-medium transition-colors hover:text-foreground focus:text-foreground focus:outline-none",
    underline: "block px-3 py-2 text-sm font-medium transition-colors hover:text-foreground focus:text-foreground focus:outline-none",
    pills: "block px-3 py-2 text-sm font-medium rounded-md transition-colors hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-ring",
    tabs: "block px-4 py-2 text-sm font-medium border-b-2 border-transparent transition-colors hover:text-foreground focus:text-foreground focus:outline-none hover:border-muted-foreground"
  };

  return (
    <a
      href={href}
      className={cn(variantClasses[variant], className)}
      {...props}
    >
      {children}
    </a>
  );
}

export default NavigationMenu;

// Usage examples:
// <NavigationMenu variant="underline">
//   <NavigationMenuList>
//     <NavigationMenuItem value="home">
//       <NavigationMenuLink href="/">Home</NavigationMenuLink>
//     </NavigationMenuItem>
//     <NavigationMenuItem value="about">
//       <NavigationMenuLink href="/about">About</NavigationMenuLink>
//     </NavigationMenuItem>
//   </NavigationMenuList>
// </NavigationMenu>
//
// <NavigationMenu variant="pills" orientation="vertical">
//   <NavigationMenuList>
//     <NavigationMenuItem value="dashboard">
//       <NavigationMenuLink href="/dashboard">Dashboard</NavigationMenuLink>
//     </NavigationMenuItem>
//   </NavigationMenuList>
// </NavigationMenu>

