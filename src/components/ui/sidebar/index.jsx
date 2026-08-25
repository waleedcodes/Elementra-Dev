import React, { useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Sidebar component with variants
 * 
 * Props:
 * - variant: default | floating | bordered
 * - side: left | right
 * - collapsible: boolean
 * - collapsed: boolean (controlled)
 * - onCollapsedChange: (collapsed: boolean) => void
 * - width: string (default: "16rem")
 * - collapsedWidth: string (default: "4rem")
 * - className: string
 */
export function Sidebar({
  variant = "default",
  side = "left",
  collapsible = false,
  collapsed = false,
  onCollapsedChange,
  width = "16rem",
  collapsedWidth = "4rem",
  className,
  children,
  ...props
}) {
  const [internalCollapsed, setInternalCollapsed] = useState(collapsed);
  const isCollapsed = collapsed !== undefined ? collapsed : internalCollapsed;
  const setIsCollapsed = (value) => {
    if (collapsed === undefined) setInternalCollapsed(value);
    onCollapsedChange?.(value);
  };

  const variantClasses = {
    default: "bg-background border-r border-border",
    floating: "bg-background/95 backdrop-blur-sm border border-border shadow-lg",
    bordered: "bg-background border-r-2 border-primary",
  };

  const sideClasses = {
    left: "left-0",
    right: "right-0",
  };

  return (
    <SidebarContext.Provider value={{ isCollapsed, setIsCollapsed, collapsible, width, collapsedWidth }}>
      <aside
        className={cn(
          "fixed top-0 z-40 h-screen transition-all duration-300",
          sideClasses[side],
          variantClasses[variant],
          isCollapsed ? "w-16" : "w-64",
          className
        )}
        style={{
          width: isCollapsed ? collapsedWidth : width,
        }}
        {...props}
      >
        <div className="flex h-full flex-col">
          {children}
        </div>
      </aside>
    </SidebarContext.Provider>
  );
}

const SidebarContext = React.createContext(null);

export function useSidebar() {
  const context = React.useContext(SidebarContext);
  if (!context) throw new Error("Sidebar components must be used within <Sidebar>");
  return context;
}

/**
 * Sidebar Header component
 */
export function SidebarHeader({ className, children, ...props }) {
  const { isCollapsed } = useSidebar();
  
  return (
    <div className={cn("flex items-center border-b border-border p-4", className)} {...props}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { isCollapsed });
        }
        return child;
      })}
    </div>
  );
}

/**
 * Sidebar Content component
 */
export function SidebarContent({ className, children, ...props }) {
  return (
    <div className={cn("flex-1 overflow-y-auto p-4", className)} {...props}>
      {children}
    </div>
  );
}

/**
 * Sidebar Footer component
 */
export function SidebarFooter({ className, children, ...props }) {
  const { isCollapsed } = useSidebar();
  
  return (
    <div className={cn("border-t border-border p-4", className)} {...props}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { isCollapsed });
        }
        return child;
      })}
    </div>
  );
}

/**
 * Sidebar Brand component
 */
export function SidebarBrand({ className, children, ...props }) {
  const { isCollapsed } = useSidebar();
  
  return (
    <div className={cn("flex items-center space-x-2", className)} {...props}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { isCollapsed });
        }
        return child;
      })}
    </div>
  );
}

/**
 * Sidebar Toggle component
 */
export function SidebarToggle({ className, children, ...props }) {
  const { isCollapsed, setIsCollapsed, collapsible } = useSidebar();
  
  if (!collapsible) return null;
  
  return (
    <button
      onClick={() => setIsCollapsed(!isCollapsed)}
      className={cn(
        "inline-flex items-center justify-center rounded-md p-2 hover:bg-accent hover:text-accent-foreground",
        className
      )}
      {...props}
    >
      {children || (
        <svg
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isCollapsed ? "M9 5l7 7-7 7" : "M15 19l-7-7 7-7"}
          />
        </svg>
      )}
    </button>
  );
}

/**
 * Sidebar Menu component
 */
export function SidebarMenu({ className, children, ...props }) {
  return (
    <nav className={cn("space-y-1", className)} {...props}>
      {children}
    </nav>
  );
}

/**
 * Sidebar Menu Item component
 */
export function SidebarMenuItem({ active = false, className, children, ...props }) {
  const { isCollapsed } = useSidebar();
  
  return (
    <div
      className={cn(
        "flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors",
        "hover:bg-accent hover:text-accent-foreground",
        active && "bg-accent text-accent-foreground",
        isCollapsed && "justify-center",
        className
      )}
      {...props}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { isCollapsed, active });
        }
        return child;
      })}
    </div>
  );
}

/**
 * Sidebar Menu Item Icon component
 */
export function SidebarMenuItemIcon({ className, children, ...props }) {
  const { isCollapsed } = useSidebar();
  
  return (
    <div className={cn("flex-shrink-0", !isCollapsed && "mr-3", className)} {...props}>
      {children}
    </div>
  );
}

/**
 * Sidebar Menu Item Text component
 */
export function SidebarMenuItemText({ className, children, ...props }) {
  const { isCollapsed } = useSidebar();
  
  if (isCollapsed) return null;
  
  return (
    <span className={cn("truncate", className)} {...props}>
      {children}
    </span>
  );
}

export default Sidebar;

// Usage examples:
// <Sidebar variant="floating" collapsible>
//   <SidebarHeader>
//     <SidebarBrand>
//       <SidebarMenuItemIcon>
//         <Logo className="h-6 w-6" />
//       </SidebarMenuItemIcon>
//       <SidebarMenuItemText>My App</SidebarMenuItemText>
//     </SidebarBrand>
//     <SidebarToggle />
//   </SidebarHeader>
//   <SidebarContent>
//     <SidebarMenu>
//       <SidebarMenuItem active>
//         <SidebarMenuItemIcon>
//           <Home className="h-4 w-4" />
//         </SidebarMenuItemIcon>
//         <SidebarMenuItemText>Home</SidebarMenuItemText>
//       </SidebarMenuItem>
//     </SidebarMenu>
//   </SidebarContent>
// </Sidebar>

