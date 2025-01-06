import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

const buttonVariants = cva(
  "inline-flex items-center justify-center transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed gap-2 active:scale-95 p-4",
  {
    variants: {
      variant: {
        default:
          "bg-blue-500 dark:bg-blue-600 text-white hover:bg-blue-600 dark:hover:bg-blue-700 hover:shadow-lg rounded-lg hover:-translate-y-0.5 animate-[transform_0.3s_ease-in-out]",
        outline:
          "border-2 border-blue-500 dark:border-blue-400 text-blue-500 dark:text-blue-400 hover:bg-blue-500 dark:hover:bg-blue-600 hover:text-white rounded-lg hover:shadow-md transition-colors animate-[all_0.3s_ease-in-out]",
        gradient:
          "bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-600 dark:to-pink-600 hover:from-pink-500 hover:to-purple-500 dark:hover:from-pink-600 dark:hover:to-purple-600 text-white rounded-lg hover:shadow-lg animate-[background-position_3s_ease-infinite] bg-[length:200%_200%] hover:bg-[position:100%_50%]",
        success:
          "bg-green-600 dark:bg-green-700 text-white hover:bg-green-700 dark:hover:bg-green-800 rounded-lg hover:ring-4 hover:ring-green-200 dark:hover:ring-green-300 hover:shadow-lg animate-[transform_0.2s_ease]",
        danger:
          "bg-red-600 dark:bg-red-700 text-white hover:bg-red-700 dark:hover:bg-red-800 rounded-lg hover:ring-4 hover:ring-red-200 dark:hover:ring-red-300 transform hover:scale-105 animate-[transform_0.2s_ease]",
        warning:
          "bg-yellow-600 dark:bg-yellow-700 text-white hover:bg-yellow-700 dark:hover:bg-yellow-800 rounded-lg hover:rotate-1 hover:shadow-lg animate-[transform_0.2s_ease]",
        info: "bg-cyan-500 dark:bg-cyan-600 text-white hover:bg-cyan-600 dark:hover:bg-cyan-700 rounded-lg hover:-rotate-1 hover:shadow-md animate-[transform_0.2s_ease]",
        glass:
          "bg-white/60 dark:bg-black/20 backdrop-blur-md dark:text-gray-100 text-gray-900 hover:bg-white/30 dark:hover:bg-black/30 rounded-lg hover:shadow-xl transition-all hover:-translate-y-1 animate-[transform_0.3s_ease] shadow-sm",

        pill: "bg-red-500 dark:bg-red-600 text-white hover:bg-red-600 dark:hover:bg-red-700 rounded-full hover:shadow-lg transform hover:scale-105 animate-[transform_0.2s_ease]",
        shadow:
          "bg-indigo-500 dark:bg-indigo-600 text-white hover:bg-indigo-600 dark:hover:bg-indigo-700 shadow-lg hover:shadow-2xl rounded-lg transition-shadow animate-[shadow_0.3s_ease]",
        text: "text-blue-500 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 underline bg-transparent hover:bg-blue-50 dark:hover:bg-blue-900/50 rounded-lg transition-colors animate-[colors_0.2s_ease]",
        link: "border border-gray-500 dark:border-gray-400 hover:border-gray-800 dark:hover:border-gray-200 hover:text-gray-800 dark:hover:text-gray-200 rounded-lg hover:shadow-inner animate-[all_0.2s_ease]",
        elevated:
        "bg-purple-800 dark:bg-purple-700 text-white hover:translate-y-1 hover:bg-purple-900 dark:hover:bg-purple-600 rounded-lg shadow-lg hover:shadow-none transition-all animate-[transform_0.2s_ease]",
        neon: "bg-black dark:bg-gray-800 text-white hover:bg-gray-900 dark:hover:bg-gray-700 rounded-lg shadow-[0_0_10px_rgba(0,255,255,0.7)] hover:shadow-[0_0_20px_rgba(0,255,255,0.9)] animate-[shadow_0.3s_ease]",
        toggle:
          "bg-green-500 dark:bg-green-600 text-white hover:bg-red-500 dark:hover:bg-red-600 rounded-lg transition-colors duration-500 animate-[colors_0.5s_ease]",
        emoji:
          "bg-gray-200 dark:bg-gray-700 text-black dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 rounded-lg hover:rotate-3 animate-[transform_0.2s_ease]",
        frosted:
          "bg-gray-200/20 dark:bg-gray-800/20 backdrop-blur-md text-white hover:bg-opacity-40 dark:hover:bg-opacity-40 rounded-lg hover:backdrop-blur-lg animate-[all_0.3s_ease]",
        scale:
          "bg-purple-600 dark:bg-purple-700 text-white hover:scale-105 transform rounded-lg hover:shadow-xl animate-[transform_0.2s_ease]",
        ripple:
          'bg-blue-500 dark:bg-blue-600 text-white rounded-lg hover:shadow-lg relative overflow-hidden hover:after:content-[""] hover:after:absolute hover:after:w-full hover:after:h-full hover:after:bg-white/20 hover:after:animate-[scale_1s_ease-out]',
        bounce:
          "bg-green-500 dark:bg-green-600 text-white rounded-lg shadow-lg hover:animate-bounce",
        pulse:
          "bg-purple-500 dark:bg-purple-600 text-white rounded-lg shadow-lg hover:animate-pulse",
        shake:
          "bg-orange-500 dark:bg-orange-600 text-white rounded-lg shadow-lg hover:animate-[translateX_0.5s_ease-in-out] hover:[animation:shake_0.5s_ease-in-out] hover:[animation-timing-function:cubic-bezier(0.36,0.07,0.19,0.97)]",
      },
      sizes: {
        xs: "h-8 px-2 text-xs",
        sm: "h-9 px-3 text-sm",
        md: "h-10 px-4 text-base",
        lg: "h-11 px-6 text-lg",
        xl: "h-12 px-8 text-xl",
        icon: "h-10 w-10 py-1 flex items-center justify-center aspect-square ",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);
const Button = React.forwardRef(
  (
    {
      className,
      variant = "default",
      size = "md",
      asChild = false,
      isLoading,
      icon: Icon,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(
          buttonVariants({ variant, size, className }),
          isLoading &&
            "relative !text-transparent hover:!text-transparent !cursor-wait !transition-none"
        )}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {isLoading ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <Loader2 className="w-4 h-4 animate-spin text-current" />
          </div>
        ) : Icon ? (
          <>
            <Icon className="w-4 h-4 transition-transform group-hover:rotate-12" />
            <span>{children}</span>
          </>
        ) : (
          children
        )}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
