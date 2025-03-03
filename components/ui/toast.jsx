"use client";
import React, {
  useState,
  useEffect,
  useRef,
  createContext,
  useContext,
} from "react";
import { cn } from "@/lib/utils";

// Create the context outside of the provider component
const ToastContext = createContext({
  toasts: [],
  addToast: () => {},
  removeToast: () => {},
});

const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const addToast = (message, options = {}) => {
    const id = Math.random().toString(36).substring(2, 9);
    const toast = {
      id,
      message,
      ...options,
      duration: options.duration || 5000,
      variant: options.variant || "default",
      position: options.position || "bottom-right",
      progressValue: 0, // Initialize progressValue
    };

    setToasts((prev) => [...prev, toast]);

    if (toast.duration !== Infinity) {
      setTimeout(() => {
        removeToast(id);
      }, toast.duration);
    }

    // Animate progressValue
    const animateProgress = (toastId) => {
      setTimeout(() => {
        setToasts((prev) =>
          prev.map((t) => (t.id === toastId ? { ...t, progressValue: 100 } : t))
        );
      }, 300);
    };

    animateProgress(id); // Start the animation

    return id;
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
      <ToastContainer toasts={toasts} removeToast={removeToast} />
    </ToastContext.Provider>
  );
};

const ToastContainer = ({ toasts, removeToast }) => {
  // Group toasts by position
  const groupedToasts = toasts.reduce((acc, toast) => {
    const position = toast.position || "bottom-right";
    if (!acc[position]) acc[position] = [];
    acc[position].push(toast);
    return acc;
  }, {});

  const positionClasses = {
    "top-right": "top-0 right-0",
    "top-left": "top-0 left-0",
    "bottom-right": "bottom-0 right-0",
    "bottom-left": "bottom-0 left-0",
    "top-center": "top-0 left-1/2 -translate-x-1/2",
    "bottom-center": "bottom-0 left-1/2 -translate-x-1/2",
  };

  return (
    <>
      {Object.entries(groupedToasts).map(([position, positionToasts]) => (
        <div
          key={position}
          className={cn(
            "fixed z-50 flex flex-col p-4 gap-2 max-w-md w-full",
            positionClasses[position]
          )}
        >
          {positionToasts.map((toast) => (
            <Toast
              key={toast.id}
              toast={toast}
              onClose={() => removeToast(toast.id)}
            />
          ))}
        </div>
      ))}
    </>
  );
};

const Toast = ({ toast, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    const enterTimer = setTimeout(() => {
      setIsVisible(true);
    }, 10);

    return () => clearTimeout(enterTimer);
  }, []);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const handleMouseEnter = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
  };

  const handleMouseLeave = () => {
    if (toast.duration !== Infinity) {
      timerRef.current = setTimeout(() => {
        onClose();
      }, 1000);
    }
  };

  const variants = {
    default: "bg-white border-gray-200 text-gray-900",
    destructive: "bg-red-50 border-red-500/50 text-red-900",
    warning: "bg-yellow-50 border-yellow-500/50 text-yellow-900",
    info: "bg-blue-50 border-blue-500/50 text-blue-900",
    success: "bg-green-50 border-green-500/50 text-green-900",
  };

  return (
    <div
      role="alert"
      className={cn(
        "relative rounded-lg border shadow-lg p-4 transition-all duration-300 flex items-start",
        variants[toast.variant],
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {toast.icon && (
        <div className="mr-3 flex-shrink-0 text-lg">{toast.icon}</div>
      )}
      <div className="flex-1">
        {toast.title && <ToastTitle>{toast.title}</ToastTitle>}
        <ToastDescription>{toast.message}</ToastDescription>
      </div>
      {toast.dismissible !== false && (
        <button
          onClick={onClose}
          className="ml-4 flex-shrink-0 text-gray-400 hover:text-gray-900"
          aria-label="Close"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      )}
      {toast.progress && (
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200 rounded-b-lg">
          <div
            className={cn("h-full rounded-b-lg transition-all duration-300", {
              "bg-red-500": toast.variant === "destructive",
              "bg-yellow-500": toast.variant === "warning",
              "bg-blue-500": toast.variant === "info",
              "bg-green-500": toast.variant === "success",
              "bg-gray-500": toast.variant === "default",
            })}
            style={{
              width: `${
                100 -
                (toast.progressValue !== undefined ? toast.progressValue : 0)
              }%`,
            }}
          />
        </div>
      )}
    </div>
  );
};

const ToastTitle = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn("font-medium text-sm", className)} {...props}>
      {children}
    </div>
  )
);

const ToastDescription = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn("text-sm mt-1", className)} {...props}>
      {children}
    </div>
  )
);

// Custom hook to use the toast context
const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};

ToastTitle.displayName = "ToastTitle";
ToastDescription.displayName = "ToastDescription";

export { ToastProvider, useToast, ToastTitle, ToastDescription };
