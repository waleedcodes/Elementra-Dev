import React from "react";
import { cn } from "@/lib/utils";

/**
 * Breadcrumb component for navigation
 * 
 * Props:
 * - separator: ReactNode (default: "/")
 * - className: string
 */
export function Breadcrumb({ separator = "/", className, children, ...props }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={cn("flex items-center space-x-1 text-sm text-muted-foreground", className)}
      {...props}
    >
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
          return (
            <React.Fragment key={index}>
              {React.cloneElement(child, { isLast: index === React.Children.count(children) - 1 })}
              {index < React.Children.count(children) - 1 && (
                <span className="mx-2" aria-hidden="true">
                  {separator}
                </span>
              )}
            </React.Fragment>
          );
        }
        return child;
      })}
    </nav>
  );
}

/**
 * Breadcrumb Item component
 */
export function BreadcrumbItem({ isLast, className, children, ...props }) {
  return (
    <div
      className={cn(
        "flex items-center",
        isLast ? "text-foreground font-medium" : "hover:text-foreground",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

/**
 * Breadcrumb Link component
 */
export function BreadcrumbLink({
  href,
  isLast,
  className,
  children,
  ...props
}) {
  if (isLast) {
    return (
      <span
        className={cn("text-foreground font-medium", className)}
        aria-current="page"
        {...props}
      >
        {children}
      </span>
    );
  }

  return (
    <a
      href={href}
      className={cn(
        "transition-colors hover:text-foreground",
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
}

/**
 * Breadcrumb Separator component (customizable)
 */
export function BreadcrumbSeparator({ children, className, ...props }) {
  return (
    <span
      className={cn("mx-2 text-muted-foreground", className)}
      aria-hidden="true"
      {...props}
    >
      {children}
    </span>
  );
}

/**
 * Breadcrumb Ellipsis component for overflow
 */
export function BreadcrumbEllipsis({ className, ...props }) {
  return (
    <span
      className={cn("mx-2 text-muted-foreground", className)}
      aria-hidden="true"
      {...props}
    >
      ⋯
    </span>
  );
}

export default Breadcrumb;

// Usage examples:
// <Breadcrumb>
//   <BreadcrumbItem>
//     <BreadcrumbLink href="/">Home</BreadcrumbLink>
//   </BreadcrumbItem>
//   <BreadcrumbItem>
//     <BreadcrumbLink href="/products">Products</BreadcrumbLink>
//   </BreadcrumbItem>
//   <BreadcrumbItem>
//     <BreadcrumbLink href="/products/electronics">Electronics</BreadcrumbLink>
//   </BreadcrumbItem>
//   <BreadcrumbItem>
//     <span>iPhone 15</span>
//   </BreadcrumbItem>
// </Breadcrumb>
