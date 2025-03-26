"use client";

import React, { useState, useEffect, createContext, useContext } from "react";
import { cn } from "@/lib/utils";
import { X } from "lucide-react"; // Assuming you have lucide-react installed

const ModalContext = createContext({
  isOpen: false,
  openModal: () => {},
  closeModal: () => {},
});

export const ModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState(null);

  const openModal = (modalContent) => {
    setContent(modalContent);
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsOpen(false);
    setTimeout(() => {
      setContent(null);
      document.body.style.overflow = "auto";
    }, 300);
  };

  return (
    <ModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={closeModal}
          ></div>
          <div className="z-50 w-full max-w-md p-4 mx-auto">{content}</div>
        </div>
      )}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};

const Modal = React.forwardRef(
  ({ children, isOpen, onClose, className, ...props }, ref) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => setIsVisible(isOpen), 10);
      return () => clearTimeout(timer);
    }, [isOpen]);

    const handleBackdropClick = (e) => {
      if (e.target === e.currentTarget) {
        onClose();
      }
    };

    return (
      <div
        ref={ref}
        onClick={handleBackdropClick}
        className={cn(
          "fixed inset-0 z-50 flex items-center justify-center transition-opacity",
          isVisible ? "opacity-100" : "opacity-0",
          isOpen ? "pointer-events-auto" : "pointer-events-none",
          className
        )}
        {...props}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div
          className={cn(
            "relative bg-white rounded-lg shadow-lg w-full max-w-md mx-auto transform transition-transform",
            isVisible ? "scale-100" : "scale-95"
          )}
        >
          <button
            onClick={onClose}
            className="absolute top-2 right-2 p-1 rounded-full hover:bg-gray-100"
            aria-label="Close"
          >
            <X size={18} />
          </button>
          {children}
        </div>
      </div>
    );
  }
);

export const ModalHeader = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn("px-6 py-4 border-b", className)} {...props}>
      {children}
    </div>
  )
);

export const ModalBody = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn("px-6 py-4", className)} {...props}>
      {children}
    </div>
  )
);

export const ModalFooter = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn("px-6 py-4 border-t", className)} {...props}>
      {children}
    </div>
  )
);

Modal.displayName = "Modal";
ModalHeader.displayName = "ModalHeader";
ModalBody.displayName = "ModalBody";
ModalFooter.displayName = "ModalFooter";
useModal.displayName = "useModal";

// Add this line to export the Modal component
export { Modal, ModalFooter };
