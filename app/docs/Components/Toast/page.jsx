"use client";
import React from "react";
import { ToastProvider, useToast } from "@/components/ui/toast";
import { cn } from "@/lib/utils";

// Navigation component for tabs
const DocsNav = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "examples", label: "Examples" },
    { id: "api", label: "API" },
  ];

  return (
    <div className="flex border-b mb-6">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={cn(
            "px-4 py-2 font-medium text-sm transition-colors",
            activeTab === tab.id
              ? "border-b-2 border-primary text-primary"
              : "text-gray-600 hover:text-gray-900"
          )}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

// Code block component
const CodeBlock = ({ children }) => {
  return (
    <div className="bg-gray-50 border rounded-md p-4 overflow-x-auto my-4">
      <pre className="text-sm text-gray-800">{children}</pre>
    </div>
  );
};

// Section heading
const SectionHeading = ({ number, title }) => {
  return (
    <h2 className="text-xl font-semibold mt-8 mb-4 flex items-center">
      <span className="bg-primary text-white rounded-full w-7 h-7 flex items-center justify-center text-sm mr-2">
        {number}
      </span>
      {title}
    </h2>
  );
};

// Examples component
const ToastExamples = () => {
  const { addToast } = useToast();

  return (
    <div className="space-y-8">
      <div>
        <h3 className="font-medium mb-3">Basic Toast</h3>
        <button
          onClick={() => {
            addToast("Your changes have been saved.", {
              title: "Success!",
              variant: "success",
            });
          }}
          className="bg-primary hover:bg-primary text-white rounded px-4 py-2 text-sm"
        >
          Show Basic Toast
        </button>
        <CodeBlock>
          {`import { useToast } from "@/components/ui/toast";

export default function ToastExample() {
  const { addToast } = useToast();
  
  return (
    <button 
      onClick={() => {
        addToast("Your changes have been saved.", {
          title: "Success!",
          variant: "success",
        });
      }}
    >
      Save Changes
    </button>
  );
}`}
        </CodeBlock>
      </div>

      <div>
        <h3 className="font-medium mb-3">Toast Variants</h3>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => {
              addToast("This is a default message.", {
                title: "Default",
              });
            }}
            className="bg-gray-500 hover:bg-gray-600 text-white rounded px-4 py-2 text-sm"
          >
            Default
          </button>

          <button
            onClick={() => {
              addToast("Something went wrong!", {
                title: "Error",
                variant: "destructive",
              });
            }}
            className="bg-red-500 hover:bg-red-600 text-white rounded px-4 py-2 text-sm"
          >
            Error
          </button>

          <button
            onClick={() => {
              addToast("Please check this before proceeding.", {
                title: "Warning",
                variant: "warning",
              });
            }}
            className="bg-yellow-500 hover:bg-yellow-600 text-white rounded px-4 py-2 text-sm"
          >
            Warning
          </button>

          <button
            onClick={() => {
              addToast("Here's some useful information.", {
                title: "Info",
                variant: "info",
              });
            }}
            className="bg-primary hover:bg-primary text-white rounded px-4 py-2 text-sm"
          >
            Info
          </button>

          <button
            onClick={() => {
              addToast("Operation completed successfully!", {
                title: "Success",
                variant: "success",
              });
            }}
            className="bg-green-500 hover:bg-green-600 text-white rounded px-4 py-2 text-sm"
          >
            Success
          </button>
        </div>
        <CodeBlock>
          {`import { useToast } from "@/components/ui/toast";

export default function ToastVariantsExample() {
  const { addToast } = useToast();
  
  return (
    <div className="flex gap-4">
      <button onClick={() => {
        addToast("This is a default message.", { title: "Default" });
      }}>
        Default Toast
      </button>
      
      <button onClick={() => {
        addToast("Something went wrong!", {
          title: "Error",
          variant: "destructive"
        });
      }}>
        Error Toast
      </button>
      
      <button onClick={() => {
        addToast("Please check this before proceeding.", {
          title: "Warning",
          variant: "warning"
        });
      }}>
        Warning Toast
      </button>
      
      <button onClick={() => {
        addToast("Here's some useful information.", {
          title: "Info",
          variant: "info"
        });
      }}>
        Info Toast
      </button>
      
      <button onClick={() => {
        addToast("Operation completed successfully!", {
          title: "Success",
          variant: "success"
        });
      }}>
        Success Toast
      </button>
    </div>
  );
}`}
        </CodeBlock>
      </div>

      <div>
        <h3 className="font-medium mb-3">Toast Positions</h3>
        <div className="grid grid-cols-3 gap-2">
          <button
            onClick={() => {
              addToast("Top-left toast", {
                position: "top-left",
              });
            }}
            className="bg-gray-500 hover:bg-gray-600 text-white rounded px-4 py-2 text-sm"
          >
            Top Left
          </button>

          <button
            onClick={() => {
              addToast("Top-center toast", {
                position: "top-center",
              });
            }}
            className="bg-gray-500 hover:bg-gray-600 text-white rounded px-4 py-2 text-sm"
          >
            Top Center
          </button>

          <button
            onClick={() => {
              addToast("Top-right toast", {
                position: "top-right",
              });
            }}
            className="bg-gray-500 hover:bg-gray-600 text-white rounded px-4 py-2 text-sm"
          >
            Top Right
          </button>

          <button
            onClick={() => {
              addToast("Bottom-left toast", {
                position: "bottom-left",
              });
            }}
            className="bg-gray-500 hover:bg-gray-600 text-white rounded px-4 py-2 text-sm"
          >
            Bottom Left
          </button>

          <button
            onClick={() => {
              addToast("Bottom-center toast", {
                position: "bottom-center",
              });
            }}
            className="bg-gray-500 hover:bg-gray-600 text-white rounded px-4 py-2 text-sm"
          >
            Bottom Center
          </button>

          <button
            onClick={() => {
              addToast("Bottom-right toast", {
                position: "bottom-right",
              });
            }}
            className="bg-gray-500 hover:bg-gray-600 text-white rounded px-4 py-2 text-sm"
          >
            Bottom Right
          </button>
        </div>
      </div>

      <div>
        <h3 className="font-medium mb-3">Advanced Features</h3>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => {
              addToast(
                "This toast won't disappear automatically. Click the X to dismiss it.",
                {
                  title: "Persistent Toast",
                  variant: "info",
                  duration: Infinity,
                  dismissible: true,
                }
              );
            }}
            className="bg-primary hover:bg-primary text-white rounded px-4 py-2 text-sm"
          >
            Persistent Toast
          </button>

          <button
            onClick={() => {
              addToast("Downloading your file...", {
                title: "Download in Progress",
                variant: "info",
                duration: 10000,
                progress: true,
              });
            }}
            className="bg-primary hover:bg-primary text-white rounded px-4 py-2 text-sm"
          >
            Progress Toast
          </button>
        </div>
        <CodeBlock>
          {`import { useToast } from "@/components/ui/toast";

export default function AdvancedToastExample() {
  const { addToast, removeToast } = useToast();
  
  const showPersistentToast = () => {
    const id = addToast(
      "This toast won't disappear automatically.",
      {
        title: "Persistent Toast",
        variant: "info",
        duration: Infinity, // Never auto-dismiss
        dismissible: true, // Show close button
      }
    );
    
    return id;
  };
  
  const showProgressToast = () => {
    addToast("Downloading your file...", {
      title: "Download in Progress",
      variant: "info",
      duration: 10000, // 10 seconds
      progress: true, // Show progress bar
    });
  };
  
  return (
    <div className="flex flex-col gap-4">
      <button onClick={showPersistentToast}>
        Show Persistent Toast
      </button>
      
      <button onClick={showProgressToast}>
        Show Progress Toast
      </button>
    </div>
  );
}`}
        </CodeBlock>
      </div>
    </div>
  );
};

// API Reference
const ApiReference = () => {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="font-medium mb-3">ToastProvider</h3>
        <p className="text-gray-700 mb-3">
          Wrap your application with{" "}
          <code className="bg-gray-100 px-1 py-0.5 rounded">ToastProvider</code>{" "}
          to enable toast functionality.
        </p>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="py-2 px-4 border text-left text-sm font-medium text-gray-700">
                  Prop
                </th>
                <th className="py-2 px-4 border text-left text-sm font-medium text-gray-700">
                  Type
                </th>
                <th className="py-2 px-4 border text-left text-sm font-medium text-gray-700">
                  Default
                </th>
                <th className="py-2 px-4 border text-left text-sm font-medium text-gray-700">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border text-sm">children</td>
                <td className="py-2 px-4 border text-sm">ReactNode</td>
                <td className="py-2 px-4 border text-sm">-</td>
                <td className="py-2 px-4 border text-sm">
                  The content of your application
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h3 className="font-medium mb-3">useToast</h3>
        <p className="text-gray-700 mb-3">Hook to create and manage toasts.</p>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="py-2 px-4 border text-left text-sm font-medium text-gray-700">
                  Function
                </th>
                <th className="py-2 px-4 border text-left text-sm font-medium text-gray-700">
                  Type
                </th>
                <th className="py-2 px-4 border text-left text-sm font-medium text-gray-700">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border text-sm">addToast</td>
                <td className="py-2 px-4 border text-sm">
                  {`(message, options) => string`}
                </td>
                <td className="py-2 px-4 border text-sm">
                  Creates a new toast
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 border text-sm">removeToast</td>
                <td className="py-2 px-4 border text-sm">{`(id) => void`}</td>
                <td className="py-2 px-4 border text-sm">
                  Removes a toast by ID
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 border text-sm">toasts</td>
                <td className="py-2 px-4 border text-sm">Toast[]</td>
                <td className="py-2 px-4 border text-sm">
                  Array of active toasts
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h3 className="font-medium mb-3">Toast Options</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="py-2 px-4 border text-left text-sm font-medium text-gray-700">
                  Option
                </th>
                <th className="py-2 px-4 border text-left text-sm font-medium text-gray-700">
                  Type
                </th>
                <th className="py-2 px-4 border text-left text-sm font-medium text-gray-700">
                  Default
                </th>
                <th className="py-2 px-4 border text-left text-sm font-medium text-gray-700">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border text-sm">title</td>
                <td className="py-2 px-4 border text-sm">string</td>
                <td className="py-2 px-4 border text-sm">undefined</td>
                <td className="py-2 px-4 border text-sm">
                  Optional title for the toast
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 border text-sm">variant</td>
                <td className="py-2 px-4 border text-sm">
                  'default' | 'destructive' | 'warning' | 'info' | 'success'
                </td>
                <td className="py-2 px-4 border text-sm">'default'</td>
                <td className="py-2 px-4 border text-sm">
                  Visual style of the toast
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 border text-sm">duration</td>
                <td className="py-2 px-4 border text-sm">number</td>
                <td className="py-2 px-4 border text-sm">5000</td>
                <td className="py-2 px-4 border text-sm">
                  Time in ms before toast auto-dismisses
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 border text-sm">position</td>
                <td className="py-2 px-4 border text-sm">
                  'top-right' | 'top-left' | 'top-center' | 'bottom-right' |
                  'bottom-left' | 'bottom-center'
                </td>
                <td className="py-2 px-4 border text-sm">'bottom-right'</td>
                <td className="py-2 px-4 border text-sm">Screen position</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border text-sm">dismissible</td>
                <td className="py-2 px-4 border text-sm">boolean</td>
                <td className="py-2 px-4 border text-sm">true</td>
                <td className="py-2 px-4 border text-sm">
                  Whether to show close button
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 border text-sm">progress</td>
                <td className="py-2 px-4 border text-sm">boolean</td>
                <td className="py-2 px-4 border text-sm">false</td>
                <td className="py-2 px-4 border text-sm">
                  Whether to show progress indicator
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 border text-sm">icon</td>
                <td className="py-2 px-4 border text-sm">ReactNode</td>
                <td className="py-2 px-4 border text-sm">undefined</td>
                <td className="py-2 px-4 border text-sm">
                  Optional icon to display
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// Main Toast docs page component
const ToastDocsPage = () => {
  const [activeTab, setActiveTab] = React.useState("overview");

  return (
    <ToastProvider>
      <div className="max-w-8xl mx-auto px-4 py-8">
        <div className="border-b pb-8 mb-8">
          <h1 className="text-3xl font-bold mb-2">Toast</h1>
          <p className="text-gray-600">
            A toast component that displays brief, non-intrusive notifications
            to the user.
          </p>
        </div>

        <DocsNav activeTab={activeTab} setActiveTab={setActiveTab} />

        {activeTab === "overview" && (
          <div>
            <div className="bg-gray-100 border border-primary rounded-lg p-6 my-6 relative overflow-hidden">
              <div className="relative z-10">
                <div className="bg-white border border-gray-100 shadow-lg rounded-lg p-4 max-w-xs">
                  <div className="font-medium">Success!</div>
                  <div className="text-sm text-gray-500 mt-1">
                    This toast will appear briefly at the bottom-right corner.
                  </div>
                </div>
              </div>
            </div>

            <SectionHeading number="1" title="Installation" />
            <CodeBlock>npm i elementra-ui</CodeBlock>

            <SectionHeading number="2" title="Add Components Using CLI" />
            <CodeBlock>npx elementra-ui add</CodeBlock>
            <p className="text-gray-700 mb-4">
              Select components using the up/down arrow keys. Press spacebar to
              select multiple components, then press enter to add them to your
              src folder.
            </p>

            <SectionHeading number="3" title="Basic Usage" />
            <p className="text-gray-700 mb-4">
              Wrap your application with the ToastProvider and use the useToast
              hook to create notifications.
            </p>
            <CodeBlock>
              {`import { ToastProvider } from "@/src/components/ui/toast";

export default function Layout({ children }) {
  return (
    <ToastProvider>
      {children}
    </ToastProvider>
  );
}`}
            </CodeBlock>
            <CodeBlock>
              {`import { useToast } from "@/src/components/ui/toast";

export default function ToastExample() {
  const { addToast } = useToast();
  
  return (
    <button 
      onClick={() => {
        addToast("Your changes have been saved.", {
          title: "Success!",
          variant: "success",
        });
      }}
    >
      Save Changes
    </button>
  );
}`}
            </CodeBlock>
          </div>
        )}

        {activeTab === "examples" && <ToastExamples />}

        {activeTab === "api" && <ApiReference />}
      </div>
    </ToastProvider>
  );
};

export default ToastDocsPage;
