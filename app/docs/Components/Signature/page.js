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
    <div className="container mx-auto px-4 sm:px-6 md:px-8 py-6 md:py-10">
      {/* Header */}
      <h1 className="text-3xl sm:text-4xl font-semibold mb-2 sm:mb-4">
        Signature Component
      </h1>
      <p className="text-muted-foreground dark:text-white mb-6 sm:mb-8 text-sm sm:text-base">
        A versatile signature capture component with multiple variants for
        different use cases.
      </p>

      {/* Content Sections */}
      <div className="space-y-8 sm:space-y-12">
        {/* Installation Section */}
        <section>
          <h2 className="text-lg sm:text-xl font-medium flex items-center gap-2 mb-3 sm:mb-4">
            <span className="text-muted-foreground dark:text-white">1</span>
            Installation
          </h2>
          <div className="relative mb-4">
            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-3 sm:p-4 font-mono text-xs sm:text-sm text-gray-800 dark:text-white">
              <span>npm i elementra-ui</span>
            </div>
            <Button
              size="sm"
              variant="ghost"
              className="absolute top-2 sm:top-3 right-2 sm:right-3 h-6 w-6 p-0 text-muted-foreground dark:text-white"
              onClick={() => handleCopy("npm i elementra-ui")}
            >
              <CopyIcon className="h-3 sm:h-4 w-3 sm:w-4" />
            </Button>
          </div>
        </section>

        <section>
          <h2 className="text-lg sm:text-xl font-medium flex items-center gap-2 mb-3 sm:mb-4">
            <span className="text-muted-foreground dark:text-white">2</span>
            Add Components Using CLI
          </h2>

          <div className="relative mb-4">
            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-3 sm:p-4 font-mono text-xs sm:text-sm text-gray-800 dark:text-white">
              <span>npx elementra-ui add</span>
            </div>
            <Button
              size="sm"
              variant="ghost"
              className="absolute top-2 sm:top-3 right-2 sm:right-3 h-6 w-6 p-0 text-muted-foreground dark:text-white"
              onClick={() => handleCopy("npx elementra-ui add")}
            >
              <Copy className="h-3 sm:h-4 w-3 sm:w-4" />
            </Button>
          </div>
          <p className="my-2 sm:my-3 text-gray-600 dark:text-white text-xs sm:text-sm">
            Select components using the up/down arrow keys. Press spacebar to
            select multiple components, then press enter to add them to your{" "}
            <span className="text-purple-600">src</span> folder.
          </p>
        </section>
        {/* ************************** */}
        <div className="w-full p-2 sm:p-4">
          <Tabs defaultValue="preview" className="w-full">
            <div className="flex items-center justify-between mb-3 sm:mb-4">
              <TabsList className="grid w-[160px] sm:w-[200px] grid-cols-2">
                <TabsTrigger
                  value="preview"
                  className="text-xs sm:text-sm font-medium"
                  key="preview-tab"
                >
                  Preview
                </TabsTrigger>
                <TabsTrigger
                  value="code"
                  className="text-xs sm:text-sm font-medium"
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
                  className="rounded-lg md:border bg-white p-4 md:p-8 min-h-[300px] sm:min-h-[400px] flex items-center justify-center"
                >
                  <StyledSignature />
                </motion.div>
              </TabsContent>

              <TabsContent value="code" className="mt-0">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="rounded-lg bg-zinc-950 dark:bg-zinc-100 p-2 sm:p-4"
                >
                  <pre className="text-[0.65rem] sm:text-[0.7rem] md:text-[0.9rem] text-zinc-100 dark:text-zinc-900 font-mono overflow-x-auto">
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
            <h2 className="text-lg sm:text-xl font-medium flex items-center gap-2 mb-3 sm:mb-4">
              <span className="text-muted-foreground dark:text-white">
                {index + 3}:
              </span>
              {example.description}
            </h2>

            <p className="mb-4 sm:mb-6 text-gray-700 dark:text-white text-xs sm:text-sm">
              Import and use the signature components in your project.
            </p>

            <Tabs defaultValue="preview" className="w-full">
              <TabsList className="flex space-x-1">
                <TabsTrigger value="preview" className="text-xs sm:text-sm">
                  Preview
                </TabsTrigger>
                <TabsTrigger value="code" className="text-xs sm:text-sm">
                  Code
                </TabsTrigger>
              </TabsList>

              <TabsContent value="preview" className="mt-3 sm:mt-4">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="rounded-lg md:border bg-white p-4 md:p-8 min-h-[300px] sm:min-h-[400px] flex items-center justify-center"
                >
                  {example.preview}
                </motion.div>
              </TabsContent>

              <TabsContent value="code" className="mt-3 sm:mt-4">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="rounded-lg bg-zinc-950 dark:bg-zinc-100 p-2 sm:p-4"
                >
                  <pre className="text-[0.65rem] sm:text-[0.7rem] md:text-[0.9rem] text-zinc-100 dark:text-zinc-900 font-mono overflow-x-auto">
                    <code className="whitespace-pre-wrap">{example.code}</code>
                  </pre>
                </motion.div>
              </TabsContent>
            </Tabs>
          </section>
        ))}

        {/* All Variants Preview */}
        <section>
          <h2 className="text-lg sm:text-xl font-medium flex items-center gap-2 mb-3 sm:mb-4">
            <span className="text-muted-foreground dark:text-white">6:</span>
            All Variants
          </h2>

          <p className="mb-4 sm:mb-6 text-gray-700 dark:text-white text-xs sm:text-sm">
            A showcase of all signature component variants for different use
            cases.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 bg-white rounded-lg p-4 sm:p-6 shadow-sm">
            <div className="space-y-4">
              <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                <h3 className="text-xs sm:text-sm font-semibold text-gray-700 mb-2 sm:mb-3">
                  Default Signature
                </h3>
                <ReactSignature className="border border-gray-200 rounded-md w-full" />
              </div>

              <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                <h3 className="text-xs sm:text-sm font-semibold text-gray-700 mb-2 sm:mb-3">
                  Compact Signature
                </h3>
                <CompactSignature
                  label="Quick sign here"
                  className="border border-gray-200 rounded-md w-full"
                />
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                <h3 className="text-xs sm:text-sm font-semibold text-gray-700 mb-2 sm:mb-3">
                  Styled with Options
                </h3>
                <StyledSignature className="border border-gray-200 rounded-md w-full" />
              </div>

              <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                <h3 className="text-xs sm:text-sm font-semibold text-gray-700 mb-2 sm:mb-3">
                  Form Integration
                </h3>
                <FormSignature
                  required={true}
                  onSignatureChange={handleSignatureChange}
                  className="border border-gray-200 rounded-md w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Props Section */}
        <section>
          <h2 className="text-lg sm:text-xl font-medium flex items-center gap-2 mb-3 sm:mb-4">
            <span className="text-muted-foreground dark:text-white">7:</span>
            Props Reference
          </h2>

          <div className="overflow-x-auto -mx-4 sm:mx-0">
            <div className="inline-block min-w-full align-middle">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700 text-xs sm:text-sm">
                <thead className="bg-gray-50 dark:bg-gray-800">
                  <tr>
                    <th className="px-3 sm:px-6 py-2 sm:py-3 text-left text-[10px] sm:text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Component
                    </th>
                    <th className="px-3 sm:px-6 py-2 sm:py-3 text-left text-[10px] sm:text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Prop
                    </th>
                    <th className="px-3 sm:px-6 py-2 sm:py-3 text-left text-[10px] sm:text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Type
                    </th>
                    <th className="px-3 sm:px-6 py-2 sm:py-3 text-left text-[10px] sm:text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Default
                    </th>
                    <th className="px-3 sm:px-6 py-2 sm:py-3 text-left text-[10px] sm:text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-800">
                  <tr>
                    <td className="px-3 sm:px-6 py-2 sm:py-4 whitespace-nowrap text-[10px] sm:text-sm font-medium text-gray-900 dark:text-white">
                      ReactSignature
                    </td>
                    <td className="px-3 sm:px-6 py-2 sm:py-4 whitespace-nowrap text-[10px] sm:text-sm font-medium text-gray-900 dark:text-white">
                      className
                    </td>
                    <td className="px-3 sm:px-6 py-2 sm:py-4 whitespace-nowrap text-[10px] sm:text-sm text-gray-500 dark:text-gray-300">
                      string
                    </td>
                    <td className="px-3 sm:px-6 py-2 sm:py-4 whitespace-nowrap text-[10px] sm:text-sm text-gray-500 dark:text-gray-300">
                      -
                    </td>
                    <td className="px-3 sm:px-6 py-2 sm:py-4 text-[10px] sm:text-sm text-gray-500 dark:text-gray-300">
                      Additional CSS classes for styling
                    </td>
                  </tr>
                  <tr>
                    <td className="px-3 sm:px-6 py-2 sm:py-4 whitespace-nowrap text-[10px] sm:text-sm font-medium text-gray-900 dark:text-white">
                      CompactSignature
                    </td>
                    <td className="px-3 sm:px-6 py-2 sm:py-4 whitespace-nowrap text-[10px] sm:text-sm font-medium text-gray-900 dark:text-white">
                      label
                    </td>
                    <td className="px-3 sm:px-6 py-2 sm:py-4 whitespace-nowrap text-[10px] sm:text-sm text-gray-500 dark:text-gray-300">
                      string
                    </td>
                    <td className="px-3 sm:px-6 py-2 sm:py-4 whitespace-nowrap text-[10px] sm:text-sm text-gray-500 dark:text-gray-300">
                      "Sign here"
                    </td>
                    <td className="px-3 sm:px-6 py-2 sm:py-4 text-[10px] sm:text-sm text-gray-500 dark:text-gray-300">
                      Label text displayed above the signature area
                    </td>
                  </tr>
                  <tr>
                    <td className="px-3 sm:px-6 py-2 sm:py-4 whitespace-nowrap text-[10px] sm:text-sm font-medium text-gray-900 dark:text-white">
                      CompactSignature
                    </td>
                    <td className="px-3 sm:px-6 py-2 sm:py-4 whitespace-nowrap text-[10px] sm:text-sm font-medium text-gray-900 dark:text-white">
                      className
                    </td>
                    <td className="px-3 sm:px-6 py-2 sm:py-4 whitespace-nowrap text-[10px] sm:text-sm text-gray-500 dark:text-gray-300">
                      string
                    </td>
                    <td className="px-3 sm:px-6 py-2 sm:py-4 whitespace-nowrap text-[10px] sm:text-sm text-gray-500 dark:text-gray-300">
                      -
                    </td>
                    <td className="px-3 sm:px-6 py-2 sm:py-4 text-[10px] sm:text-sm text-gray-500 dark:text-gray-300">
                      Additional CSS classes for styling
                    </td>
                  </tr>
                  <tr>
                    <td className="px-3 sm:px-6 py-2 sm:py-4 whitespace-nowrap text-[10px] sm:text-sm font-medium text-gray-900 dark:text-white">
                      FormSignature
                    </td>
                    <td className="px-3 sm:px-6 py-2 sm:py-4 whitespace-nowrap text-[10px] sm:text-sm font-medium text-gray-900 dark:text-white">
                      required
                    </td>
                    <td className="px-3 sm:px-6 py-2 sm:py-4 whitespace-nowrap text-[10px] sm:text-sm text-gray-500 dark:text-gray-300">
                      boolean
                    </td>
                    <td className="px-3 sm:px-6 py-2 sm:py-4 whitespace-nowrap text-[10px] sm:text-sm text-gray-500 dark:text-gray-300">
                      false
                    </td>
                    <td className="px-3 sm:px-6 py-2 sm:py-4 text-[10px] sm:text-sm text-gray-500 dark:text-gray-300">
                      Marks the signature as required with validation
                    </td>
                  </tr>
                  <tr>
                    <td className="px-3 sm:px-6 py-2 sm:py-4 whitespace-nowrap text-[10px] sm:text-sm font-medium text-gray-900 dark:text-white">
                      FormSignature
                    </td>
                    <td className="px-3 sm:px-6 py-2 sm:py-4 whitespace-nowrap text-[10px] sm:text-sm font-medium text-gray-900 dark:text-white">
                      onSignatureChange
                    </td>
                    <td className="px-3 sm:px-6 py-2 sm:py-4 whitespace-nowrap text-[10px] sm:text-sm text-gray-500 dark:text-gray-300">
                      function
                    </td>
                    <td className="px-3 sm:px-6 py-2 sm:py-4 whitespace-nowrap text-[10px] sm:text-sm text-gray-500 dark:text-gray-300">
                      undefined
                    </td>
                    <td className="px-3 sm:px-6 py-2 sm:py-4 text-[10px] sm:text-sm text-gray-500 dark:text-gray-300">
                      Callback when signature changes with SVG data
                    </td>
                  </tr>
                  <tr>
                    <td className="px-3 sm:px-6 py-2 sm:py-4 whitespace-nowrap text-[10px] sm:text-sm font-medium text-gray-900 dark:text-white">
                      FormSignature
                    </td>
                    <td className="px-3 sm:px-6 py-2 sm:py-4 whitespace-nowrap text-[10px] sm:text-sm font-medium text-gray-900 dark:text-white">
                      label
                    </td>
                    <td className="px-3 sm:px-6 py-2 sm:py-4 whitespace-nowrap text-[10px] sm:text-sm text-gray-500 dark:text-gray-300">
                      string
                    </td>
                    <td className="px-3 sm:px-6 py-2 sm:py-4 whitespace-nowrap text-[10px] sm:text-sm text-gray-500 dark:text-gray-300">
                      "Signature"
                    </td>
                    <td className="px-3 sm:px-6 py-2 sm:py-4 text-[10px] sm:text-sm text-gray-500 dark:text-gray-300">
                      Label text for the form field
                    </td>
                  </tr>
                  <tr>
                    <td className="px-3 sm:px-6 py-2 sm:py-4 whitespace-nowrap text-[10px] sm:text-sm font-medium text-gray-900 dark:text-white">
                      FormSignature
                    </td>
                    <td className="px-3 sm:px-6 py-2 sm:py-4 whitespace-nowrap text-[10px] sm:text-sm font-medium text-gray-900 dark:text-white">
                      color
                    </td>
                    <td className="px-3 sm:px-6 py-2 sm:py-4 whitespace-nowrap text-[10px] sm:text-sm text-gray-500 dark:text-gray-300">
                      string
                    </td>
                    <td className="px-3 sm:px-6 py-2 sm:py-4 whitespace-nowrap text-[10px] sm:text-sm text-gray-500 dark:text-gray-300">
                      "#000000"
                    </td>
                    <td className="px-3 sm:px-6 py-2 sm:py-4 text-[10px] sm:text-sm text-gray-500 dark:text-gray-300">
                      Color of the signature line
                    </td>
                  </tr>
                  <tr>
                    <td className="px-3 sm:px-6 py-2 sm:py-4 whitespace-nowrap text-[10px] sm:text-sm font-medium text-gray-900 dark:text-white">
                      FormSignature
                    </td>
                    <td className="px-3 sm:px-6 py-2 sm:py-4 whitespace-nowrap text-[10px] sm:text-sm font-medium text-gray-900 dark:text-white">
                      backgroundColor
                    </td>
                    <td className="px-3 sm:px-6 py-2 sm:py-4 whitespace-nowrap text-[10px] sm:text-sm text-gray-500 dark:text-gray-300">
                      string
                    </td>
                    <td className="px-3 sm:px-6 py-2 sm:py-4 whitespace-nowrap text-[10px] sm:text-sm text-gray-500 dark:text-gray-300">
                      "#ffffff"
                    </td>
                    <td className="px-3 sm:px-6 py-2 sm:py-4 text-[10px] sm:text-sm text-gray-500 dark:text-gray-300">
                      Background color of the signature area
                    </td>
                  </tr>
                  <tr>
                    <td className="px-3 sm:px-6 py-2 sm:py-4 whitespace-nowrap text-[10px] sm:text-sm font-medium text-gray-900 dark:text-white">
                      StyledSignature
                    </td>
                    <td className="px-3 sm:px-6 py-2 sm:py-4 whitespace-nowrap text-[10px] sm:text-sm font-medium text-gray-900 dark:text-white">
                      className
                    </td>
                    <td className="px-3 sm:px-6 py-2 sm:py-4 whitespace-nowrap text-[10px] sm:text-sm text-gray-500 dark:text-gray-300">
                      string
                    </td>
                    <td className="px-3 sm:px-6 py-2 sm:py-4 whitespace-nowrap text-[10px] sm:text-sm text-gray-500 dark:text-gray-300">
                      -
                    </td>
                    <td className="px-3 sm:px-6 py-2 sm:py-4 text-[10px] sm:text-sm text-gray-500 dark:text-gray-300">
                      Additional CSS classes for styling
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section>
          <h2 className="text-lg sm:text-xl font-medium flex items-center gap-2 mb-3 sm:mb-4">
            <span className="text-muted-foreground dark:text-white">8:</span>
            Features
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6">
            <div className="bg-white p-3 sm:p-4 rounded-lg shadow-sm">
              <h3 className="text-base sm:text-lg font-medium mb-2 sm:mb-3">
                Download Options
              </h3>
              <p className="text-xs sm:text-sm text-gray-600">
                Download signatures as SVG or PNG files for use in documents or
                storage.
              </p>
            </div>

            <div className="bg-white p-3 sm:p-4 rounded-lg shadow-sm">
              <h3 className="text-base sm:text-lg font-medium mb-2 sm:mb-3">
                Copy as SVG
              </h3>
              <p className="text-xs sm:text-sm text-gray-600">
                Copy signature as SVG code for direct embedding in web
                applications.
              </p>
            </div>

            <div className="bg-white p-3 sm:p-4 rounded-lg shadow-sm">
              <h3 className="text-base sm:text-lg font-medium mb-2 sm:mb-3">
                Pen Style Options
              </h3>
              <p className="text-xs sm:text-sm text-gray-600">
                Choose from multiple pen styles, sizes, and colors in the styled
                variant.
              </p>
            </div>

            <div className="bg-white p-3 sm:p-4 rounded-lg shadow-sm">
              <h3 className="text-base sm:text-lg font-medium mb-2 sm:mb-3">
                Form Validation
              </h3>
              <p className="text-xs sm:text-sm text-gray-600">
                Built-in validation support for required signatures in forms.
              </p>
            </div>

            <div className="bg-white p-3 sm:p-4 rounded-lg shadow-sm">
              <h3 className="text-base sm:text-lg font-medium mb-2 sm:mb-3">
                Responsive Design
              </h3>
              <p className="text-xs sm:text-sm text-gray-600">
                Works on both desktop and touch-enabled devices with responsive
                layout.
              </p>
            </div>

            <div className="bg-white p-3 sm:p-4 rounded-lg shadow-sm">
              <h3 className="text-base sm:text-lg font-medium mb-2 sm:mb-3">
                Customizable
              </h3>
              <p className="text-xs sm:text-sm text-gray-600">
                Extensive customization options for colors, sizes, and behavior.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section - New addition for better mobile experience */}
        <section className="mt-8">
          <h2 className="text-lg sm:text-xl font-medium flex items-center gap-2 mb-3 sm:mb-4">
            <span className="text-muted-foreground dark:text-white">9:</span>
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-base font-medium mb-2">
                Can I use these signatures in PDF documents?
              </h3>
              <p className="text-xs sm:text-sm text-gray-600">
                Yes, you can export signatures as PNG or SVG and embed them in
                PDF documents. The FormSignature component provides built-in
                export options.
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-base font-medium mb-2">
                Are these components accessible?
              </h3>
              <p className="text-xs sm:text-sm text-gray-600">
                Yes, all signature components are built with accessibility in
                mind, including keyboard navigation, screen reader support, and
                ARIA attributes.
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="text-base font-medium mb-2">
                How can I customize the signature pad size?
              </h3>
              <p className="text-xs sm:text-sm text-gray-600">
                You can customize the size by applying width and height classes
                through the className prop, or by wrapping the signature
                component in a container with specific dimensions.
              </p>
            </div>
          </div>
        </section>

        {/* Mobile-specific instructions - New addition */}
        <section className="block md:hidden">
          <h2 className="text-lg font-medium flex items-center gap-2 mb-3">
            <span className="text-muted-foreground dark:text-white">10:</span>
            Mobile Usage Tips
          </h2>

          <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
            <h3 className="text-sm font-semibold text-blue-800 mb-2">
              Tips for mobile devices:
            </h3>
            <ul className="text-xs text-blue-700 space-y-2">
              <li>
                • Rotate your device to landscape for a better signing
                experience
              </li>
              <li>• Use a stylus for more precise signatures if available</li>
              <li>
                • Tap the signature area to bring up the keyboard on some
                devices
              </li>
              <li>
                • The CompactSignature component is optimized for smaller
                screens
              </li>
            </ul>
          </div>
        </section>
      </div>

      {/* Footer with quick links - New addition for better navigation */}
      <footer className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-800">
        <div className="flex flex-col sm:flex-row justify-between">
          <div className="mb-6 sm:mb-0">
            <h3 className="text-sm font-semibold mb-3">Quick Links</h3>
            <ul className="text-xs sm:text-sm space-y-2 text-gray-600 dark:text-gray-300">
              <li>Installation</li>
              <li>Component Variants</li>
              <li>Props Reference</li>
              <li>Features</li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-3">Related Components</h3>
            <ul className="text-xs sm:text-sm space-y-2 text-gray-600 dark:text-gray-300">
              <li>Form Components</li>
              <li>Input Fields</li>
              <li>Document Viewer</li>
              <li>PDF Export</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-800 text-center text-xs text-gray-500">
          © 2025 Elementra UI. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default SignatureDocs;
