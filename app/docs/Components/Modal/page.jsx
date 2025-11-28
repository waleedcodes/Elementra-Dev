"use client";
import React, { useState } from "react";
import { Copy, CopyIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { ModalProvider, useModal, Modal, ModalHeader, ModalBody, ModalFooter } from "@/components/Model";

const ModalDocs = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [mounted, setMounted] = useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div>Loading...</div>;
  }

  const handleCopy = (text) => {
    if (text) {
      navigator.clipboard.writeText(text);
      toast("Copied to clipboard", { type: "success" });
    }
  };

  return (
    <ModalProvider>
      <div className="">
        {/* Header */}
        <div className="space-y-4 mb-8">
          <h1 className="text-4xl font-semibold">Modal</h1>
          <p className="text-muted-foreground dark:text-white text-lg">
            A flexible modal dialog component with customizable header, body, and footer sections for displaying content above the main interface.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center space-x-1 mb-6 border-b border-border">
          <button
            onClick={() => setActiveTab("overview")}
            className={`px-4 py-2 text-sm font-medium transition-colors ${
              activeTab === "overview"
                ? "border-b-2 border-primary text-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab("examples")}
            className={`px-4 py-2 text-sm font-medium transition-colors ${
              activeTab === "examples"
                ? "border-b-2 border-primary text-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Examples
          </button>
          <button
            onClick={() => setActiveTab("api")}
            className={`px-4 py-2 text-sm font-medium transition-colors ${
              activeTab === "api"
                ? "border-b-2 border-primary text-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            API
          </button>
        </div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === "overview" && (
            <div className="space-y-8">
              {/* Installation Section */}
              <section>
                <h2 className="text-xl font-medium flex items-center gap-2 mb-4">
                  <span className="text-muted-foreground dark:text-white">1</span>
                  Installation
                </h2>
                <div className="space-y-4">
                  <div className="relative">
                    <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 font-mono text-sm text-gray-800 dark:text-white">
                      npm i elementra-ui
                    </div>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="absolute top-3 right-3 h-6 w-6 p-0 text-muted-foreground dark:text-white"
                      onClick={() => handleCopy("npm i elementra-ui")}
                    >
                      <CopyIcon className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="relative">
                    <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 font-mono text-sm text-gray-800 dark:text-white">
                      npm install lucide-react clsx tailwind-merge
                    </div>
                    <p className="my-3 text-gray-600 dark:text-white text-sm">
                      Required dependencies for icons and utility functions.
                    </p>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="absolute top-3 right-3 h-6 w-6 p-0 text-muted-foreground dark:text-white"
                      onClick={() => handleCopy("npm install lucide-react clsx tailwind-merge")}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </section>

              {/* CLI Installation */}
              <section>
                <h2 className="text-xl font-medium flex items-center gap-2 mb-4">
                  <span className="text-muted-foreground dark:text-white">2</span>
                  Add Component Using CLI
                </h2>
                <div className="relative mb-4">
                  <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 font-mono text-sm text-gray-800 dark:text-white">
                    npx elementra-ui add modal
                  </div>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="absolute top-3 right-3 h-6 w-6 p-0 text-muted-foreground dark:text-white"
                    onClick={() => handleCopy("npx elementra-ui add modal")}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
                <p className="my-3 text-gray-600 dark:text-white text-sm">
                  This will add the Modal component and its sub-components to your{" "}
                  <span className="text-purple-600">components</span> folder.
                </p>
              </section>

              {/* Basic Example */}
              <section>
                <h2 className="text-xl font-medium flex items-center gap-2 mb-4">
                  <span className="text-muted-foreground dark:text-white">3</span>
                  Basic Example
                </h2>
                <div className="rounded-lg border bg-background p-8 flex items-center justify-center min-h-[200px]">
                  <BasicModalExample />
                </div>
              </section>

              {/* Code Example */}
              <section>
                <h2 className="text-xl font-medium flex items-center gap-2 mb-4">
                  <span className="text-muted-foreground dark:text-white">4</span>
                  Code Example
                </h2>
                <div className="relative">
                  <div className="bg-zinc-950 dark:bg-zinc-100 p-4 rounded-lg">
                    <pre className="text-[0.8rem] text-zinc-100 dark:text-zinc-900 font-mono overflow-x-auto">
                      <code>{`import { useState } from "react";
import { ModalProvider, useModal, Modal, ModalHeader, ModalBody, ModalFooter } from "@/components/Model";
import { Button } from "@/components/ui/button";

function ModalExample() {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <ModalProvider>
      <Button onClick={openModal}>
        Open Modal
      </Button>
      
      <Modal isOpen={isOpen} onClose={closeModal}>
        <ModalHeader>
          <h2 className="text-xl font-bold">Modal Title</h2>
        </ModalHeader>
        <ModalBody>
          <p>This is the modal content.</p>
        </ModalBody>
        <ModalFooter>
          <Button onClick={closeModal}>Close</Button>
        </ModalFooter>
      </Modal>
    </ModalProvider>
  );
}`}</code>
                    </pre>
                  </div>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="absolute top-3 right-3 h-6 w-6 p-0 text-zinc-400 hover:text-zinc-100"
                    onClick={() => handleCopy(`import { useState } from "react";
import { ModalProvider, useModal, Modal, ModalHeader, ModalBody, ModalFooter } from "@/components/Model";
import { Button } from "@/components/ui/button";

function ModalExample() {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <ModalProvider>
      <Button onClick={openModal}>
        Open Modal
      </Button>
      
      <Modal isOpen={isOpen} onClose={closeModal}>
        <ModalHeader>
          <h2 className="text-xl font-bold">Modal Title</h2>
        </ModalHeader>
        <ModalBody>
          <p>This is the modal content.</p>
        </ModalBody>
        <ModalFooter>
          <Button onClick={closeModal}>Close</Button>
        </ModalFooter>
      </Modal>
    </ModalProvider>
  );
}`)}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </section>
            </div>
          )}

          {activeTab === "examples" && (
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Modal Examples</h2>
                <p className="text-muted-foreground mb-6">
                  Explore different types of modals for various use cases.
                </p>
              </div>
              <ModalExamplesContent />
            </div>
          )}

          {activeTab === "api" && (
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold mb-4">API Reference</h2>
                <p className="text-muted-foreground mb-6">
                  Detailed documentation for Modal component props and usage.
                </p>
              </div>

              {/* Props Table */}
              <section>
                <h3 className="text-xl font-medium mb-4">Props</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-border rounded-lg">
                    <thead>
                      <tr className="bg-muted/50">
                        <th className="border border-border p-3 text-left font-medium">Component</th>
                        <th className="border border-border p-3 text-left font-medium">Prop</th>
                        <th className="border border-border p-3 text-left font-medium">Type</th>
                        <th className="border border-border p-3 text-left font-medium">Default</th>
                        <th className="border border-border p-3 text-left font-medium">Description</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm">
                      <tr>
                        <td className="border border-border p-3 font-mono">Modal</td>
                        <td className="border border-border p-3 font-mono">isOpen</td>
                        <td className="border border-border p-3">boolean</td>
                        <td className="border border-border p-3">false</td>
                        <td className="border border-border p-3">Controls modal visibility</td>
                      </tr>
                      <tr>
                        <td className="border border-border p-3 font-mono">Modal</td>
                        <td className="border border-border p-3 font-mono">onClose</td>
                        <td className="border border-border p-3">function</td>
                        <td className="border border-border p-3">-</td>
                        <td className="border border-border p-3">Callback when modal should close</td>
                      </tr>
                      <tr>
                        <td className="border border-border p-3 font-mono">Modal</td>
                        <td className="border border-border p-3 font-mono">className</td>
                        <td className="border border-border p-3">string</td>
                        <td className="border border-border p-3">-</td>
                        <td className="border border-border p-3">Additional CSS classes</td>
                      </tr>
                      <tr>
                        <td className="border border-border p-3 font-mono">ModalHeader</td>
                        <td className="border border-border p-3 font-mono">className</td>
                        <td className="border border-border p-3">string</td>
                        <td className="border border-border p-3">-</td>
                        <td className="border border-border p-3">Additional CSS classes for header</td>
                      </tr>
                      <tr>
                        <td className="border border-border p-3 font-mono">ModalBody</td>
                        <td className="border border-border p-3 font-mono">className</td>
                        <td className="border border-border p-3">string</td>
                        <td className="border border-border p-3">-</td>
                        <td className="border border-border p-3">Additional CSS classes for body</td>
                      </tr>
                      <tr>
                        <td className="border border-border p-3 font-mono">ModalFooter</td>
                        <td className="border border-border p-3 font-mono">className</td>
                        <td className="border border-border p-3">string</td>
                        <td className="border border-border p-3">-</td>
                        <td className="border border-border p-3">Additional CSS classes for footer</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Usage Examples */}
              <section>
                <h3 className="text-xl font-medium mb-4">Usage Examples</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-medium mb-3">Next.js Usage</h4>
                    <div className="relative">
                      <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                        <pre className="text-[0.8rem] font-mono whitespace-pre-wrap">{`"use client";
import { useState } from "react";
import { ModalProvider, useModal, Modal, ModalHeader, ModalBody, ModalFooter } from "@/components/Model";
import { Button } from "@/components/ui/button";

export default function MyPage() {
  return (
    <ModalProvider>
      <PageContent />
    </ModalProvider>
  );
}

function PageContent() {
  const { isOpen, openModal, closeModal } = useModal();
  
  return (
    <div>
      <Button onClick={openModal}>Open Modal</Button>
      
      <Modal isOpen={isOpen} onClose={closeModal}>
        <ModalHeader>
          <h2 className="text-xl font-bold">Settings</h2>
        </ModalHeader>
        <ModalBody>
          <p>Configure your application settings.</p>
        </ModalBody>
        <ModalFooter className="flex justify-end space-x-2">
          <Button variant="outline" onClick={closeModal}>Cancel</Button>
          <Button onClick={closeModal}>Save</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}`}</pre>
                      </div>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="absolute top-3 right-3 h-6 w-6 p-0 text-muted-foreground dark:text-white"
                        onClick={() => handleCopy(`"use client";
import { useState } from "react";
import { ModalProvider, useModal, Modal, ModalHeader, ModalBody, ModalFooter } from "@/components/Model";
import { Button } from "@/components/ui/button";

export default function MyPage() {
  return (
    <ModalProvider>
      <PageContent />
    </ModalProvider>
  );
}

function PageContent() {
  const { isOpen, openModal, closeModal } = useModal();
  
  return (
    <div>
      <Button onClick={openModal}>Open Modal</Button>
      
      <Modal isOpen={isOpen} onClose={closeModal}>
        <ModalHeader>
          <h2 className="text-xl font-bold">Settings</h2>
        </ModalHeader>
        <ModalBody>
          <p>Configure your application settings.</p>
        </ModalBody>
        <ModalFooter className="flex justify-end space-x-2">
          <Button variant="outline" onClick={closeModal}>Cancel</Button>
          <Button onClick={closeModal}>Save</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}`)}
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          )}
        </motion.div>
      </div>
    </ModalProvider>
  );
};

// Basic Modal Example Component
function BasicModalExample() {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <div>
      <Button onClick={openModal}>Open Basic Modal</Button>
      
      <Modal isOpen={isOpen} onClose={closeModal}>
        <ModalHeader>
          <h2 className="text-xl font-bold">Welcome!</h2>
        </ModalHeader>
        <ModalBody>
          <p>This is a basic modal example with header, body, and footer sections.</p>
        </ModalBody>
        <ModalFooter>
          <Button onClick={closeModal}>Close</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

// Modal Examples Content
function ModalExamplesContent() {
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
              <h2 className="text-xl font-bold">Contact Form</h2>
            </ModalHeader>
            <ModalBody>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="w-full p-2 border rounded-md"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full p-2 border rounded-md"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    className="w-full p-2 border rounded-md"
                    placeholder="Enter your message"
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
              <h2 className="text-xl font-bold text-red-600">Confirm Deletion</h2>
            </ModalHeader>
            <ModalBody>
              <p>
                Are you sure you want to delete this item? This action cannot be undone.
              </p>
            </ModalBody>
            <ModalFooter className="flex justify-end space-x-2">
              <Button variant="outline" onClick={closeModal}>
                Cancel
              </Button>
              <Button variant="destructive" onClick={closeModal}>
                Delete
              </Button>
            </ModalFooter>
          </Modal>
        );

      case "info":
        return (
          <Modal isOpen={isOpen} onClose={closeModal}>
            <ModalHeader>
              <h2 className="text-xl font-bold">Information</h2>
            </ModalHeader>
            <ModalBody>
              <div className="space-y-4">
                <p>Here's some important information about your account:</p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Account created: January 1, 2024</li>
                  <li>Last login: Today</li>
                  <li>Storage used: 2.4 GB of 10 GB</li>
                  <li>Plan: Professional</li>
                </ul>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button onClick={closeModal}>Got it</Button>
            </ModalFooter>
          </Modal>
        );

      default:
        return null;
    }
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Basic Modal */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Basic Modal</h3>
          <div className="rounded-lg border bg-background p-6">
            <p className="text-sm text-muted-foreground mb-4">
              A simple modal with basic content and a close button.
            </p>
            <Button onClick={() => handleOpenModal("basic")} className="min-w-[120px]">
              Open Basic Modal
            </Button>
          </div>
        </div>

        {/* Form Modal */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Form Modal</h3>
          <div className="rounded-lg border bg-background p-6">
            <p className="text-sm text-muted-foreground mb-4">
              A modal containing a form with multiple input fields.
            </p>
            <Button onClick={() => handleOpenModal("form")} className="min-w-[120px]">
              Open Form Modal
            </Button>
          </div>
        </div>

        {/* Confirmation Modal */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Confirmation Modal</h3>
          <div className="rounded-lg border bg-background p-6">
            <p className="text-sm text-muted-foreground mb-4">
              A confirmation dialog for destructive or important actions.
            </p>
            <Button onClick={() => handleOpenModal("confirmation")} variant="destructive" className="min-w-[120px]">
              Open Confirmation
            </Button>
          </div>
        </div>

        {/* Information Modal */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Information Modal</h3>
          <div className="rounded-lg border bg-background p-6">
            <p className="text-sm text-muted-foreground mb-4">
              An informational modal displaying account or system details.
            </p>
            <Button onClick={() => handleOpenModal("info")} variant="outline" className="min-w-[120px]">
              Show Information
            </Button>
          </div>
        </div>
      </div>

      {renderModalContent()}
    </div>
  );
}
export default ModalDocs;
