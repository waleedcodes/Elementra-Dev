import React from "react";
import { cn } from "@/lib/utils";

const cardVariants = {
  default:
    "rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100",
  flat: "rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors",
  elevated:
    "rounded-lg bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 dark:shadow-gray-900/30",
  outlined:
    "rounded-lg border-2 border-primary/20 dark:border-primary/30 hover:border-primary/40 dark:hover:border-primary/50 transition-colors dark:bg-gray-900",
  gradient:
    "rounded-lg bg-gradient-to-br from-primary to-primary-foreground text-white shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]",
  glass: `
    relative rounded-lg 
    bg-gradient-to-br from-white/40 to-white/10 
    dark:from-gray-800/40 dark:to-gray-900/10
    backdrop-blur-md 
    border border-white/20 dark:border-gray-700/30
    shadow-xl hover:shadow-2xl 
    transition-all
    before:absolute before:inset-0 
    before:bg-gradient-to-br before:from-primary/10 before:to-secondary/10 
    before:rounded-lg before:-z-10
    dark:text-gray-100
  `,
  neon: "rounded-lg bg-black dark:bg-gray-900 text-white shadow-[0_0_15px_rgba(0,255,255,0.5)] hover:shadow-[0_0_25px_rgba(0,255,255,0.7)] transition-shadow",
  interactive:
    "rounded-lg border bg-card text-card-foreground dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100 shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all cursor-pointer",
  minimal: `
    rounded-lg 
    bg-gray-100 dark:bg-gray-800
    text-gray-900 dark:text-gray-100
    transition-colors 
    hover:bg-gray-200 dark:hover:bg-gray-700
    p-6
  `,
  floating:
    "rounded-lg bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl dark:shadow-gray-900/30 hover:-translate-y-2 transition-all duration-300 dark:text-gray-100",
  // New variants
  ecommerce:
    "rounded-lg bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition-all overflow-hidden dark:text-gray-100",
  login:
    "rounded-lg bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 hover:border-primary/50 dark:hover:border-primary/50 transition-all dark:text-gray-100",
  register:
    "rounded-lg bg-gradient-to-tr from-primary/5 to-primary/20 dark:from-primary/10 dark:to-primary/30 shadow-lg hover:shadow-xl transition-all dark:text-gray-100",
  dashboard:
    "rounded-lg bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all border-l-4 border-primary dark:text-gray-100",
  testimonial:
    "rounded-lg bg-gray-50 dark:bg-gray-800 shadow-inner hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors p-6 dark:text-gray-100",
  pricing:
    "rounded-lg bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all border-t-4 border-primary dark:text-gray-100",
};

const Card = React.forwardRef(
  (
    {
      className,
      variant = "default",
      isLoading,
      isHoverable = false,
      isClickable = false,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          cardVariants[variant],
          isHoverable &&
            "transform transition-transform duration-300 hover:scale-[1.02]",
          isClickable && "cursor-pointer active:scale-[0.98]",
          isLoading && "animate-pulse",
          className
        )}
        {...props}
      />
    );
  }
);
Card.displayName = "Card";

const cardHeaderVariants = {
  default: "flex flex-col space-y-1.5 p-6 dark:text-gray-100",
  centered: "flex flex-col items-center space-y-1.5 p-6 text-center dark:text-gray-100",
  bordered: "flex flex-col space-y-1.5 p-6 border-b dark:border-gray-700 dark:text-gray-100",
  gradient:
    "flex flex-col space-y-1.5 p-6 bg-gradient-to-r from-primary/10 to-transparent rounded-t-lg dark:text-gray-100",
  compact: "flex flex-col space-y-1 p-4 dark:text-gray-100",
  // New variants
  ecommerce: "flex justify-between items-center p-4 bg-gray-50 dark:bg-gray-700 dark:text-gray-100",
  login: "flex flex-col items-center space-y-2 p-6 bg-primary/5 dark:bg-primary/10 dark:text-gray-100",
  dashboard: "flex justify-between items-center p-4 bg-gray-50 dark:bg-gray-700 border-b dark:border-gray-600 dark:text-gray-100",
};

const CardHeader = React.forwardRef(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(cardHeaderVariants[variant], className)}
        {...props}
      />
    );
  }
);
CardHeader.displayName = "CardHeader";

const cardTitleVariants = {
  default: "text-2xl font-semibold leading-none tracking-tight",
  gradient:
    "text-2xl font-bold leading-none tracking-tight bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-transparent",
  underlined:
    "text-2xl font-semibold leading-none tracking-tight border-b-2 border-primary pb-2",
  highlighted:
    "text-2xl font-semibold leading-none tracking-tight px-2 py-1 bg-primary/10 rounded",
  animated:
    "text-2xl font-semibold leading-none tracking-tight hover:text-primary transition-colors",
  // New variants
  ecommerce: "text-lg font-medium leading-tight",
  login: "text-2xl font-bold leading-tight text-primary",
  dashboard: "text-xl font-semibold leading-tight",
};

const CardTitle = React.forwardRef(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <h3
        ref={ref}
        className={cn(cardTitleVariants[variant], className)}
        {...props}
      />
    );
  }
);
CardTitle.displayName = "CardTitle";

const cardDescriptionVariants = {
  default: "text-sm text-muted-foreground",
  large: "text-base text-muted-foreground",
  emphasized: "text-sm text-muted-foreground font-medium",
  subtle: "text-sm text-muted-foreground/80 italic",
  animated:
    "text-sm text-muted-foreground hover:text-foreground transition-colors",
  // New variants
  ecommerce: "text-sm text-gray-500 mt-1",
  login: "text-sm text-center text-gray-600 max-w-sm",
  dashboard: "text-sm text-gray-500",
};

const CardDescription = React.forwardRef(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn(cardDescriptionVariants[variant], className)}
        {...props}
      />
    );
  }
);
CardDescription.displayName = "CardDescription";

const cardContentVariants = {
  default: "p-6 pt-0 dark:text-gray-200",
  bordered: "p-6 pt-0 border-t dark:border-gray-700 mt-6 dark:text-gray-200",
  padded: "p-8 pt-2 dark:text-gray-200",
  compact: "p-4 pt-0 dark:text-gray-200",
  separated: "p-6 pt-0 divide-y divide-border dark:divide-gray-700 dark:text-gray-200",
  // New variants
  ecommerce: "p-4 flex flex-col space-y-4 dark:text-gray-200",
  login: "p-6 flex flex-col space-y-4 dark:text-gray-200",
  dashboard: "p-4 grid gap-4 dark:text-gray-200",
};

const CardContent = React.forwardRef(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(cardContentVariants[variant], className)}
        {...props}
      />
    );
  }
);
CardContent.displayName = "CardContent";

const cardFooterVariants = {
  default: "flex items-center p-6 pt-0 dark:text-gray-200",
  bordered: "flex items-center p-6 pt-0 border-t dark:border-gray-700 mt-6 dark:text-gray-200",
  separated: "flex items-center justify-between p-6 pt-0 dark:text-gray-200",
  centered: "flex items-center justify-center p-6 pt-0 dark:text-gray-200",
  sticky:
    "flex items-center p-6 pt-0 sticky bottom-0 bg-background dark:bg-gray-800 border-t dark:border-gray-700 mt-6 dark:text-gray-200",
  // New variants
  ecommerce: "flex justify-between items-center p-4 bg-gray-50 dark:bg-gray-700 mt-4 dark:text-gray-200",
  login: "flex flex-col space-y-4 p-6 bg-gray-50 dark:bg-gray-700 rounded-b-lg dark:text-gray-200",
  dashboard: "flex justify-end space-x-2 p-4 bg-gray-50 dark:bg-gray-700 border-t dark:border-gray-600 mt-4 dark:text-gray-200",
};

const CardFooter = React.forwardRef(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(cardFooterVariants[variant], className)}
        {...props}
      />
    );
  }
);
CardFooter.displayName = "CardFooter";

// New component for product images
const CardImage = React.forwardRef(({ src, alt, className, ...props }, ref) => {
  return (
    <div className="relative aspect-w-16 aspect-h-9 overflow-hidden rounded-t-lg">
      <img
        ref={ref}
        src={src}
        alt={alt}
        className={cn("object-cover w-full h-full", className)}
        {...props}
      />
    </div>
  );
});
CardImage.displayName = "CardImage";

// New component for card badges
const CardBadge = React.forwardRef(
  ({ children, className, variant = "default", ...props }, ref) => {
    const badgeVariants = {
      default: "bg-primary text-primary-foreground",
      secondary: "bg-secondary text-secondary-foreground",
      outline: "border border-primary text-primary",
      destructive: "bg-destructive text-destructive-foreground",
    };

    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold",
          badgeVariants[variant],
          className
        )}
        {...props}
      >
        {children}
      </span>
    );
  }
);
CardBadge.displayName = "CardBadge";

// New component for card icons
const CardIcon = React.forwardRef(
  ({ icon: Icon, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex items-center justify-center w-10 h-10 rounded-full bg-primary/10",
          className
        )}
        {...props}
      >
        <Icon className="w-5 h-5 text-primary" />
      </div>
    );
  }
);
CardIcon.displayName = "CardIcon";

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardImage,
  CardBadge,
  CardIcon,
};
