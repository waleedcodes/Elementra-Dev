"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { ModalProvider, useModal, Modal, ModalHeader, ModalBody, ModalFooter } from "@/components/Model";
// Assuming you have a Button component

export default function ModalDemo() {
  return (
    <ModalProvider>
      <ModalDemoContent />
    </ModalProvider>
  );
}

function ModalDemoContent() {
  const { isOpen, openModal, closeModal } = useModal();
  const [selectedDemo, setSelectedDemo] = useState(null);

  const handleOpenModal = (demoType) => {
    setSelectedDemo(demoType);
    openModal();
  };

  const renderModalContent = () => {
    switch (selectedDemo) {
      case "basic":
        return (
          <Modal isOpen={isOpen} onClose={closeModal}>
            <ModalHeader>
              <h2 className="text-xl font-bold">Basic Modal</h2>
            </ModalHeader>
            <ModalBody>
              <p>This is a simple modal with basic content.</p>
            </ModalBody>
            <ModalFooter>
              <Button onClick={closeModal}>Close</Button>
            </ModalFooter>
          </Modal>
        );

      case "form":
        return (
          <Modal isOpen={isOpen} onClose={closeModal}>
            <ModalHeader>
              <h2 className="text-xl font-bold">Form Modal</h2>
            </ModalHeader>
            <ModalBody>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-1">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="w-full p-2 border rounded"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-1">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full p-2 border rounded"
                    placeholder="Enter your email"
                  />
                </div>
              </form>
            </ModalBody>
            <ModalFooter className="flex justify-between">
              <Button variant="outline" onClick={closeModal}>
                Cancel
              </Button>
              <Button onClick={closeModal}>Submit</Button>
            </ModalFooter>
          </Modal>
        );

      case "confirmation":
        return (
          <Modal isOpen={isOpen} onClose={closeModal}>
            <ModalHeader>
              <h2 className="text-xl font-bold">Confirm Action</h2>
            </ModalHeader>
            <ModalBody>
              <p>
                Are you sure you want to perform this action? This cannot be
                undone.
              </p>
            </ModalBody>
            <ModalFooter className="flex justify-end space-x-2">
              <Button variant="outline" onClick={closeModal}>
                Cancel
              </Button>
              <Button variant="destructive" onClick={closeModal}>
                Confirm
              </Button>
            </ModalFooter>
          </Modal>
        );

      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Modal Component Demo</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-6 border rounded shadow">
          <h2 className="text-xl font-semibold mb-4">Basic Modal</h2>
          <p className="mb-4">
            A simple modal with header, body, and footer sections.
          </p>
          <Button onClick={() => handleOpenModal("basic")}>
            Open Basic Modal
          </Button>
        </div>

        <div className="p-6 border rounded shadow">
          <h2 className="text-xl font-semibold mb-4">Form Modal</h2>
          <p className="mb-4">A modal containing a form with input fields.</p>
          <Button onClick={() => handleOpenModal("form")}>
            Open Form Modal
          </Button>
        </div>

        <div className="p-6 border rounded shadow">
          <h2 className="text-xl font-semibold mb-4">Confirmation Modal</h2>
          <p className="mb-4">A confirmation dialog for critical actions.</p>
          <Button onClick={() => handleOpenModal("confirmation")}>
            Open Confirmation Modal
          </Button>
        </div>
      </div>

      {renderModalContent()}
    </div>
  );
}
