"use client";
import React from "react";
import { Copy, CopyIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  ReactSignature,
  CompactSignature,
  FormSignature,
  StyledSignature,
} from "@/components/signature";

const SignatureDocs = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (text) => {
    if (text) {
      navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleSignatureChange = (svg) => {
    console.log("Signature changed:", svg ? "Signed" : "Empty");
  };

  const codeExamples = [
    {
      code: `import { ReactSignature } from "@/components/ui/signature";

export default function DefaultSignature() {
  return (
    <div className="p-4 bg-white rounded-lg">
      <h3 className="text-lg font-medium mb-4">Default Signature Pad</h3>
      <ReactSignature className="border border-gray-200 rounded-md" />
    </div>
  );
}`,
      description: "Default signature with full controls",
      preview: (
        <div className="flex items-center justify-center p-4">
          <ReactSignature className="border border-gray-200 rounded-md" />
        </div>
      ),
    },
    {
      code: `import { CompactSignature } from "@/components/ui/signature";

export default function SmallSignature() {
  return (
    <div className="p-4 bg-white rounded-lg">
      <h3 className="text-lg font-medium mb-4">Compact Signature</h3>
      <CompactSignature
        label="Sign here"
        className="border border-gray-200 rounded-md"
      />
    </div>
  );
}`,
      description: "Compact size signature for smaller UI spaces",
      preview: (
        <div className="flex items-center justify-center p-4">
          <CompactSignature
            label="Sign here"
            className="border border-gray-200 rounded-md"
          />
        </div>
      ),
    },
    {
      code: `import { FormSignature } from "@/components/ui/signature";

export default function FormIntegration() {
  const handleSignatureChange = (svg) => {
    // Access the signature SVG data when it changes
    console.log("Signature changed:", svg ? "Signed" : "Empty");
    
    // Store the signature data or perform validation
    if (svg) {
      // Save signature to form state or API
    }
  };

  return (
    <div className="p-4 bg-white rounded-lg">
      <h3 className="text-lg font-medium mb-4">Form Integration</h3>
      <FormSignature
        required={true}
        label="Signature (required)"
        onSignatureChange={handleSignatureChange}
        className="border border-gray-200 rounded-md"
      />
    </div>
  );
}`,
      description: "Form integration with validation and callback",
      preview: (
        <div className="flex items-center justify-center p-4">
          <FormSignature
            required={true}
            onSignatureChange={handleSignatureChange}
            className="border border-gray-200 rounded-md"
          />
        </div>
      ),
    },
  ];

  return (
    <div className="">
      {/* Header */}
      <h1 className="text-4xl font-semibold mb-4">Signature Component</h1>
      <p className="text-muted-foreground dark:text-white mb-8">
        A versatile signature capture component with multiple variants for
        different use cases.
      </p>

      {/* Content Sections */}
      <div className="space-y-12">
        {/* Installation Section */}
        <section>
          <h2 className="text-xl font-medium flex items-center gap-2 mb-4">
            <span className="text-muted-foreground dark:text-white">1</span>
            Installation
          </h2>
          <div className="relative mb-4">
            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 font-mono text-sm text-gray-800 dark:text-white">
              <span>npm i elementra-ui</span>
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
        </section>

        <section>
          <h2 className="text-xl font-medium flex items-center gap-2 mb-4">
            <span className="text-muted-foreground dark:text-white">2</span>
            Add Components Using CLI
          </h2>

          <div className="relative mb-4">
            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 font-mono text-sm text-gray-800 dark:text-white">
              <span>npx elementra-ui add</span>
            </div>
            <Button
              size="sm"
              variant="ghost"
              className="absolute top-3 right-3 h-6 w-6 p-0 text-muted-foreground dark:text-white"
              onClick={() => handleCopy("npx elementra-ui add")}
            >
              <Copy className="h-4 w-4" />
            </Button>
          </div>
          <p className="my-3 text-gray-600 dark:text-white text-sm">
            Select components using the up/down arrow keys. Press spacebar to
            select multiple components, then press enter to add them to your{" "}
            <span className="text-purple-600">src</span> folder.
          </p>
        </section>
        {/* ************************** */}
        <div className="w-full p-4">
          <Tabs defaultValue="preview" className="w-full">
            <div className="flex items-center justify-between mb-4">
              <TabsList className="grid w-[200px] grid-cols-2">
                <TabsTrigger
                  value="preview"
                  className="font-medium"
                  key="preview-tab"
                >
                  Preview
                </TabsTrigger>
                <TabsTrigger
                  value="code"
                  className="font-medium"
                  key="code-tab"
                >
                  Code
                </TabsTrigger>
              </TabsList>
            </div>

            <AnimatePresence>
              <TabsContent value="preview" className="mt-0">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="rounded-lg md:border bg-white md:p-8 min-h-[400px] flex items-center justify-center"
                >
                  <StyledSignature />
                </motion.div>
              </TabsContent>

              <TabsContent value="code" className="mt-0">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="rounded-lg bg-zinc-950 dark:bg-zinc-100 p-4"
                >
                  <pre className="text-[0.7rem] md:text-[0.9rem] text-zinc-100 dark:text-zinc-900 font-mono overflow-x-auto">
                    <code className="whitespace-pre-wrap">
                      {`import { StyledSignature } from "@/components/ui/signature";

export default function StyledSignatureExample() {
  return (
    <div className="p-4 bg-white rounded-lg">
      <StyledSignature />
    </div>
  );
}`}
                    </code>
                  </pre>
                </motion.div>
              </TabsContent>
            </AnimatePresence>
          </Tabs>
        </div>
        {/* ************************** */}
        {/* Usage Section */}
        {codeExamples.map((example, index) => (
          <section key={index}>
            <h2 className="text-xl font-medium flex items-center gap-2 mb-4">
              <span className="text-muted-foreground dark:text-white">
                {index + 3}:
              </span>
              {example.description}
            </h2>

            <p className="mb-6 text-gray-700 dark:text-white">
              Import and use the signature components in your project.
            </p>

            <Tabs defaultValue="preview" className="w-full">
              <TabsList className="">
                <TabsTrigger value="preview">Preview</TabsTrigger>
                <TabsTrigger value="code">Code</TabsTrigger>
              </TabsList>

              <TabsContent value="preview" className="mt-4">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="rounded-lg md:border bg-white md:p-8 min-h-[400px] flex items-center justify-center"
                >
                  {example.preview}
                </motion.div>
              </TabsContent>

              <TabsContent value="code" className="mt-4">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="rounded-lg bg-zinc-950 dark:bg-zinc-100 p-4"
                >
                  <pre className="text-[0.7rem] md:text-[0.9rem] text-zinc-100 dark:text-zinc-900 font-mono overflow-x-auto">
                    <code className="whitespace-pre-wrap">{example.code}</code>
                  </pre>
                </motion.div>
              </TabsContent>
            </Tabs>
          </section>
        ))}

        {/* All Variants Preview */}
        <section>
          <h2 className="text-xl font-medium flex items-center gap-2 mb-4">
            <span className="text-muted-foreground dark:text-white">6:</span>
            All Variants
          </h2>

          <p className="mb-6 text-gray-700 dark:text-white">
            A showcase of all signature component variants for different use
            cases.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white rounded-lg p-6 shadow-sm">
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-sm font-semibold text-gray-700 mb-3">
                  Default Signature
                </h3>
                <ReactSignature className="border border-gray-200 rounded-md" />
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-sm font-semibold text-gray-700 mb-3">
                  Compact Signature
                </h3>
                <CompactSignature
                  label="Quick sign here"
                  className="border border-gray-200 rounded-md"
                />
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-sm font-semibold text-gray-700 mb-3">
                  Styled with Options
                </h3>
                <StyledSignature className="border border-gray-200 rounded-md" />
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-sm font-semibold text-gray-700 mb-3">
                  Form Integration
                </h3>
                <FormSignature
                  required={true}
                  onSignatureChange={handleSignatureChange}
                  className="border border-gray-200 rounded-md"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Props Section */}
        <section>
          <h2 className="text-xl font-medium flex items-center gap-2 mb-4">
            <span className="text-muted-foreground dark:text-white">7:</span>
            Props Reference
          </h2>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-800">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Component
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Prop
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Default
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-800">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    ReactSignature
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    className
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    string
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    -
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">
                    Additional CSS classes for styling
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    CompactSignature
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    label
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    string
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    "Sign here"
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">
                    Label text displayed above the signature area
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    CompactSignature
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    className
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    string
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    -
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">
                    Additional CSS classes for styling
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    FormSignature
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    required
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    boolean
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    false
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">
                    Marks the signature as required with validation
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    FormSignature
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    onSignatureChange
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    function
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    undefined
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">
                    Callback when signature changes with SVG data
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    FormSignature
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    label
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    string
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    "Signature"
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">
                    Label text for the form field
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    FormSignature
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    color
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    string
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    "#000000"
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">
                    Color of the signature line
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    FormSignature
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    backgroundColor
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    string
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    "#ffffff"
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">
                    Background color of the signature area
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    StyledSignature
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    className
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    string
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    -
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">
                    Additional CSS classes for styling
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Features Section */}
        <section>
          <h2 className="text-xl font-medium flex items-center gap-2 mb-4">
            <span className="text-muted-foreground dark:text-white">8:</span>
            Features
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium mb-3">Download Options</h3>
              <p className="text-sm text-gray-600">
                Download signatures as SVG or PNG files for use in documents or
                storage.
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium mb-3">Copy as SVG</h3>
              <p className="text-sm text-gray-600">
                Copy signature as SVG code for direct embedding in web
                applications.
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium mb-3">Pen Style Options</h3>
              <p className="text-sm text-gray-600">
                Choose from multiple pen styles, sizes, and colors in the styled
                variant.
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium mb-3">Form Validation</h3>
              <p className="text-sm text-gray-600">
                Built-in validation support for required signatures in forms.
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium mb-3">Responsive Design</h3>
              <p className="text-sm text-gray-600">
                Works on both desktop and touch-enabled devices with responsive
                layout.
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium mb-3">Customizable</h3>
              <p className="text-sm text-gray-600">
                Extensive customization options for colors, sizes, and behavior.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SignatureDocs;
