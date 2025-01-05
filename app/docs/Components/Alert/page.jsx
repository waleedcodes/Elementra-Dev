"use client";
import React from "react";
import { Copy, CopyIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "framer-motion";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

const AlertComponent = () => {
  const handleCopy = (text) => {
    if (text) {
      navigator.clipboard.writeText(text);
      toast("Copied to clipboard", { type: "success" });
    }
  };

  const codeExamples = [
    {
      code: `import { Alert, AlertTitle, AlertDescription } from "@/src/components/ui/alert";

export default function AlertExample() {
  return (
    <Alert variant="default" animation="fade">
      <AlertTitle>Welcome!</AlertTitle>
      <AlertDescription>This will fade in smoothly.</AlertDescription>
    </Alert>
  );
}`,
      description: "Using the default variant with fade animation."
    },
    {
      code: `import { Alert, AlertTitle, AlertDescription } from "./components/ui/alert";

export default function AlertExample() {
  return (
    <Alert variant="warning" animation="bounce">
      <AlertTitle>Attention!</AlertTitle>
      <AlertDescription>This alert will bounce.</AlertDescription>
    </Alert>
  );
}`,
      description: "Using the warning variant with bounce animation."
    },
    {
      code: `import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

export default function AlertExample() {
  return (
    <Alert variant="error" animation="shake">
      <AlertTitle>Error!</AlertTitle>
      <AlertDescription>This alert will shake to grab attention.</AlertDescription>
    </Alert>
  );
}`,
      description: "Using the error variant with shake animation."
    },
    {
      code: `import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

export default function AlertExample() {
  return (
    <Alert variant="info" animation="slideDown">
      <AlertTitle>Info!</AlertTitle>
      <AlertDescription>This alert will slide down from the top.</AlertDescription>
    </Alert>
  );
}`,
      description: "Using the info variant with slide down animation."
    }
  ];

  return (
    <div className="">
      {/* Header */}
      <h1 className="text-4xl font-semibold mb-4">Alert</h1>
      <p className="text-muted-foreground dark:text-white mb-8">
        An alert component that displays important messages to the user.
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
                  <Alert variant="success" animation="slideUp">
                    <AlertTitle>Success!</AlertTitle>
                    <AlertDescription>This alert will slide up.</AlertDescription>
                  </Alert>
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
                    <code className="whitespace-pre-wrap">{codeExamples[0].code}</code>
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
              <span className="text-muted-foreground dark:text-white">{index + 3}:</span>
              {example.description}
            </h2>

            <p className="mb-6 text-gray-700 dark:text-white">
              Import and use the Alert component in your project.
            </p>

            <div className="relative">
              <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                <pre className="text-[0.6rem] md:text-[0.9rem] font-mono whitespace-pre-wrap">
                  {example.code}
                </pre>
              </div>
              <Button
                size="sm"
                variant="ghost"
                className="absolute top-3 right-3 h-6 w-6 p-0 text-muted-foreground dark:text-white"
                onClick={() => handleCopy(example.code)}
              >
                <Copy className="h-4 w-4" />
              </Button>
            </div>
          </section>
        ))}
        {/* ************************** */}
      </div>
    </div>
  );
};

export default AlertComponent;
