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
        <Modal isOpen={isOpen} onClose={closeModal}>
          {content}
        </Modal>
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
        className={cn(
          "fixed inset-0 z-50 flex items-center justify-center bg-black/50 transition-opacity duration-300",
          isVisible ? "opacity-100" : "opacity-0"
        )}
        onClick={handleBackdropClick}
        {...props}
      >
        <div
          className={cn(
            "relative w-full max-w-md max-h-[90vh] overflow-auto rounded-lg bg-white p-6 shadow-lg transition-all duration-300",
            isVisible ? "scale-100" : "scale-95",
            className
          )}
        >
          <button
            className="absolute right-4 top-4 rounded-sm p-1 opacity-70 hover:opacity-100"
            onClick={onClose}
          >
            <X className="h-4 w-4" />
          </button>
          {children}
        </div>
      </div>
    );
  }
);

export const ModalHeader = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("mb-4 text-lg font-semibold", className)}
      {...props}
    >
      {children}
    </div>
  )
);

export const ModalBody = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn("mb-5", className)} {...props}>
      {children}
    </div>
  )
);

export const ModalFooter = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex justify-end space-x-2", className)}
      {...props}
    >
      {children}
    </div>
  )
);

Modal.displayName = "Modal";
ModalHeader.displayName = "ModalHeader";
ModalBody.displayName = "ModalBody";
ModalFooter.displayName = "ModalFooter";

export { Modal, ModalHeader, ModalBody, ModalFooter };
