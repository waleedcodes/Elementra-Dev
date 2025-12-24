"use client";

import React from "react";
import { Copy, CopyIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "framer-motion";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/Accordion";

const AccordionComponent = () => {
  const [activeTab, setActiveTab] = React.useState("overview");
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "examples", label: "Examples" },
    { id: "api", label: "API" },
  ];

  if (!mounted) {
    return null;
  }

  const handleCopy = (text) => {
    if (text) {
      navigator.clipboard.writeText(text);
      toast("Copied to clipboard", { type: "success" });
    }
  };

  const codeExamples = [
    {
      title: "Basic Accordion",
      code: `import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/Accordion";

export default function BasicAccordion() {
  return (
    <Accordion type="single" defaultValue="item-1">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other components' aesthetic.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}`,
      description: "A simple accordion with single item expansion.",
    },
    {
      title: "Multiple Accordion",
      code: `import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/Accordion";

export default function MultipleAccordion() {
  return (
    <Accordion type="multiple" defaultValue={["item-1", "item-2"]}>
      <AccordionItem value="item-1">
        <AccordionTrigger>Can multiple items be open?</AccordionTrigger>
        <AccordionContent>
          Yes. Set type="multiple" to allow multiple items to be open simultaneously.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it customizable?</AccordionTrigger>
        <AccordionContent>
          Absolutely. You can customize the appearance and behavior.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Does it support animations?</AccordionTrigger>
        <AccordionContent>
          Yes. Smooth animations are built-in for expand/collapse actions.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}`,
      description: "Multiple items can be expanded at the same time.",
    },
    {
      title: "FAQ Accordion",
      code: `import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/Accordion";

export default function FAQAccordion() {
  return (
    <Accordion type="single" className="w-full">
      <AccordionItem value="faq-1">
        <AccordionTrigger>What is Elementra UI?</AccordionTrigger>
        <AccordionContent>
          Elementra UI is a modern React component library built with Tailwind CSS 
          and designed for building beautiful, accessible user interfaces quickly.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="faq-2">
        <AccordionTrigger>How do I install it?</AccordionTrigger>
        <AccordionContent>
          You can install Elementra UI via npm: <code>npm install elementra-ui</code>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="faq-3">
        <AccordionTrigger>Is it free to use?</AccordionTrigger>
        <AccordionContent>
          Yes! Elementra UI is open source and completely free to use in your projects.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}`,
      description: "Perfect for FAQ sections and help documentation.",
    },
    {
      title: "Controlled Accordion",
      code: `import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/Accordion";
import { useState } from "react";

export default function ControlledAccordion() {
  const [value, setValue] = useState("item-1");

  return (
    <Accordion 
      type="single" 
      value={value} 
      onValueChange={setValue}
      collapsible
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>Controlled Item 1</AccordionTrigger>
        <AccordionContent>
          This accordion is controlled by external state.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Controlled Item 2</AccordionTrigger>
        <AccordionContent>
          You can control which item is open programmatically.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}`,
      description:
        "Control the accordion state externally with value and onValueChange.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 text-foreground">
          Accordion
        </h1>
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
          A vertically stacked set of interactive headings that each reveal a
          section of content. Perfect for FAQs, collapsible content, and
          organizing information hierarchically.
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="mb-8">
        <div className="flex space-x-1 bg-muted p-1 rounded-lg w-fit">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                activeTab === tab.id
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground hover:bg-background/50"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="space-y-8 sm:space-y-12"
        >
          {activeTab === "overview" && (
            <>
              {/* Installation Section */}
              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-semibold flex items-center gap-3 text-foreground">
                  <span className="flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                    1
                  </span>
                  Installation
                </h2>
                <div className="relative">
                  <div className="bg-card border border-border rounded-lg p-4 font-mono text-sm overflow-x-auto">
                    <code className="text-foreground">npm i elementra-ui</code>
                  </div>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="absolute top-2 right-2 h-8 w-8 p-0 hover:bg-muted"
                    onClick={() => handleCopy("npm i elementra-ui")}
                  >
                    <Copy className="h-3 w-3" />
                  </Button>
                </div>
              </section>

              {/* Usage Section */}
              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-semibold flex items-center gap-3 text-foreground">
                  <span className="flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                    2
                  </span>
                  Add Component
                </h2>
                <div className="relative">
                  <div className="bg-card border border-border rounded-lg p-4 font-mono text-sm overflow-x-auto">
                    <code className="text-foreground">
                      npx elementra-ui add accordion
                    </code>
                  </div>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="absolute top-2 right-2 h-8 w-8 p-0 hover:bg-muted"
                    onClick={() => handleCopy("npx elementra-ui add accordion")}
                  >
                    <Copy className="h-3 w-3" />
                  </Button>
                </div>
              </section>

              {/* Preview Section */}
              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-semibold flex items-center gap-3 text-foreground">
                  <span className="flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                    3
                  </span>
                  Preview
                </h2>
                <div className="bg-card border border-border rounded-lg p-6">
                  <div className="max-w-md mx-auto">
                    <Accordion type="single" defaultValue="item-1">
                      <AccordionItem value="item-1">
                        <AccordionTrigger>Is it accessible?</AccordionTrigger>
                        <AccordionContent>
                          Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-2">
                        <AccordionTrigger>Is it styled?</AccordionTrigger>
                        <AccordionContent>
                          Yes. It comes with default styles that matches the
                          other components aesthetic.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-3">
                        <AccordionTrigger>Is it animated?</AccordionTrigger>
                        <AccordionContent>
                          Yes. It includes smooth expand/collapse animations out
                          of the box.
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </div>
              </section>
            </>
          )}

          {activeTab === "examples" && (
            <section className="space-y-8">
              <h2 className="text-2xl font-semibold text-foreground mb-6">
                Examples
              </h2>
              {codeExamples.map((example, index) => (
                <div key={index} className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium text-foreground">
                      {example.title}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {example.description}
                  </p>

                  <Tabs defaultValue="preview" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="preview">Preview</TabsTrigger>
                      <TabsTrigger value="code">Code</TabsTrigger>
                    </TabsList>

                    <TabsContent value="preview" className="mt-4">
                      <div className="bg-card border border-border rounded-lg p-6">
                        <div className="max-w-md mx-auto">
                          {index === 0 && (
                            <Accordion type="single" defaultValue="item-1">
                              <AccordionItem value="item-1">
                                <AccordionTrigger>
                                  Is it accessible?
                                </AccordionTrigger>
                                <AccordionContent>
                                  Yes. It adheres to the WAI-ARIA design
                                  pattern.
                                </AccordionContent>
                              </AccordionItem>
                              <AccordionItem value="item-2">
                                <AccordionTrigger>
                                  Is it styled?
                                </AccordionTrigger>
                                <AccordionContent>
                                  Yes. It comes with default styles that matches
                                  the other components aesthetic.
                                </AccordionContent>
                              </AccordionItem>
                            </Accordion>
                          )}
                          {index === 1 && (
                            <Accordion
                              type="multiple"
                              defaultValue={["item-1", "item-2"]}
                            >
                              <AccordionItem value="item-1">
                                <AccordionTrigger>
                                  Can multiple items be open?
                                </AccordionTrigger>
                                <AccordionContent>
                                  Yes. Set type="multiple" to allow multiple
                                  items to be open simultaneously.
                                </AccordionContent>
                              </AccordionItem>
                              <AccordionItem value="item-2">
                                <AccordionTrigger>
                                  Is it customizable?
                                </AccordionTrigger>
                                <AccordionContent>
                                  Absolutely. You can customize the appearance
                                  and behavior.
                                </AccordionContent>
                              </AccordionItem>
                              <AccordionItem value="item-3">
                                <AccordionTrigger>
                                  Does it support animations?
                                </AccordionTrigger>
                                <AccordionContent>
                                  Yes. Smooth animations are built-in for
                                  expand/collapse actions.
                                </AccordionContent>
                              </AccordionItem>
                            </Accordion>
                          )}
                          {index === 2 && (
                            <Accordion type="single">
                              <AccordionItem value="faq-1">
                                <AccordionTrigger>
                                  What is Elementra UI?
                                </AccordionTrigger>
                                <AccordionContent>
                                  Elementra UI is a modern React component
                                  library built with Tailwind CSS and designed
                                  for building beautiful, accessible user
                                  interfaces quickly.
                                </AccordionContent>
                              </AccordionItem>
                              <AccordionItem value="faq-2">
                                <AccordionTrigger>
                                  How do I install it?
                                </AccordionTrigger>
                                <AccordionContent>
                                  You can install Elementra UI via npm:{" "}
                                  <code className="bg-muted px-1 py-0.5 rounded text-sm">
                                    npm install elementra-ui
                                  </code>
                                </AccordionContent>
                              </AccordionItem>
                              <AccordionItem value="faq-3">
                                <AccordionTrigger>
                                  Is it free to use?
                                </AccordionTrigger>
                                <AccordionContent>
                                  Yes! Elementra UI is open source and
                                  completely free to use in your projects.
                                </AccordionContent>
                              </AccordionItem>
                            </Accordion>
                          )}
                          {index === 3 && (
                            <Accordion type="single" defaultValue="item-1">
                              <AccordionItem value="item-1">
                                <AccordionTrigger>
                                  Controlled Item 1
                                </AccordionTrigger>
                                <AccordionContent>
                                  This accordion is controlled by external
                                  state.
                                </AccordionContent>
                              </AccordionItem>
                              <AccordionItem value="item-2">
                                <AccordionTrigger>
                                  Controlled Item 2
                                </AccordionTrigger>
                                <AccordionContent>
                                  You can control which item is open
                                  programmatically.
                                </AccordionContent>
                              </AccordionItem>
                            </Accordion>
                          )}
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="code" className="mt-4">
                      <div className="relative">
                        <div className="bg-card border border-border rounded-lg p-4 overflow-x-auto">
                          <pre className="text-sm">
                            <code className="text-foreground">
                              {example.code}
                            </code>
                          </pre>
                        </div>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="absolute top-2 right-2 h-8 w-8 p-0 hover:bg-muted"
                          onClick={() => handleCopy(example.code)}
                        >
                          <Copy className="h-3 w-3" />
                        </Button>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
              ))}
            </section>
          )}

          {activeTab === "api" && (
            <section className="space-y-8">
              <h2 className="text-2xl font-semibold text-foreground mb-6">
                API Reference
              </h2>

              {/* Accordion Props */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-foreground">
                  Accordion
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-border rounded-lg">
                    <thead>
                      <tr className="bg-muted/50">
                        <th className="border border-border p-3 text-left font-medium">
                          Prop
                        </th>
                        <th className="border border-border p-3 text-left font-medium">
                          Type
                        </th>
                        <th className="border border-border p-3 text-left font-medium">
                          Default
                        </th>
                        <th className="border border-border p-3 text-left font-medium">
                          Description
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-border p-3 font-mono text-sm">
                          type
                        </td>
                        <td className="border border-border p-3 text-sm">
                          "single" | "multiple"
                        </td>
                        <td className="border border-border p-3 text-sm">
                          "single"
                        </td>
                        <td className="border border-border p-3 text-sm">
                          Determines if one or multiple items can be opened at
                          the same time.
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-border p-3 font-mono text-sm">
                          defaultValue
                        </td>
                        <td className="border border-border p-3 text-sm">
                          string | string[]
                        </td>
                        <td className="border border-border p-3 text-sm">
                          undefined
                        </td>
                        <td className="border border-border p-3 text-sm">
                          The default value of the item(s) to expand when
                          initially rendered.
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-border p-3 font-mono text-sm">
                          value
                        </td>
                        <td className="border border-border p-3 text-sm">
                          string | string[]
                        </td>
                        <td className="border border-border p-3 text-sm">
                          undefined
                        </td>
                        <td className="border border-border p-3 text-sm">
                          The controlled value of the item(s) to expand. Should
                          be used in conjunction with onValueChange.
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-border p-3 font-mono text-sm">
                          onValueChange
                        </td>
                        <td className="border border-border p-3 text-sm">
                          {"(value: string | string[]) => void"}
                        </td>
                        <td className="border border-border p-3 text-sm">
                          undefined
                        </td>
                        <td className="border border-border p-3 text-sm">
                          Event handler called when the expanded state of an
                          item changes.
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-border p-3 font-mono text-sm">
                          collapsible
                        </td>
                        <td className="border border-border p-3 text-sm">
                          boolean
                        </td>
                        <td className="border border-border p-3 text-sm">
                          true
                        </td>
                        <td className="border border-border p-3 text-sm">
                          When type is "single", allows closing content when
                          clicking trigger for an open item.
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-border p-3 font-mono text-sm">
                          className
                        </td>
                        <td className="border border-border p-3 text-sm">
                          string
                        </td>
                        <td className="border border-border p-3 text-sm">
                          undefined
                        </td>
                        <td className="border border-border p-3 text-sm">
                          Additional CSS class names to apply to the accordion.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* AccordionItem Props */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-foreground">
                  AccordionItem
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-border rounded-lg">
                    <thead>
                      <tr className="bg-muted/50">
                        <th className="border border-border p-3 text-left font-medium">
                          Prop
                        </th>
                        <th className="border border-border p-3 text-left font-medium">
                          Type
                        </th>
                        <th className="border border-border p-3 text-left font-medium">
                          Default
                        </th>
                        <th className="border border-border p-3 text-left font-medium">
                          Description
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-border p-3 font-mono text-sm">
                          value
                        </td>
                        <td className="border border-border p-3 text-sm">
                          string
                        </td>
                        <td className="border border-border p-3 text-sm">-</td>
                        <td className="border border-border p-3 text-sm">
                          A unique value for the item.
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-border p-3 font-mono text-sm">
                          className
                        </td>
                        <td className="border border-border p-3 text-sm">
                          string
                        </td>
                        <td className="border border-border p-3 text-sm">
                          undefined
                        </td>
                        <td className="border border-border p-3 text-sm">
                          Additional CSS class names to apply to the item.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* AccordionTrigger Props */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-foreground">
                  AccordionTrigger
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-border rounded-lg">
                    <thead>
                      <tr className="bg-muted/50">
                        <th className="border border-border p-3 text-left font-medium">
                          Prop
                        </th>
                        <th className="border border-border p-3 text-left font-medium">
                          Type
                        </th>
                        <th className="border border-border p-3 text-left font-medium">
                          Default
                        </th>
                        <th className="border border-border p-3 text-left font-medium">
                          Description
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-border p-3 font-mono text-sm">
                          className
                        </td>
                        <td className="border border-border p-3 text-sm">
                          string
                        </td>
                        <td className="border border-border p-3 text-sm">
                          undefined
                        </td>
                        <td className="border border-border p-3 text-sm">
                          Additional CSS class names to apply to the trigger.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* AccordionContent Props */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-foreground">
                  AccordionContent
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-border rounded-lg">
                    <thead>
                      <tr className="bg-muted/50">
                        <th className="border border-border p-3 text-left font-medium">
                          Prop
                        </th>
                        <th className="border border-border p-3 text-left font-medium">
                          Type
                        </th>
                        <th className="border border-border p-3 text-left font-medium">
                          Default
                        </th>
                        <th className="border border-border p-3 text-left font-medium">
                          Description
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-border p-3 font-mono text-sm">
                          className
                        </td>
                        <td className="border border-border p-3 text-sm">
                          string
                        </td>
                        <td className="border border-border p-3 text-sm">
                          undefined
                        </td>
                        <td className="border border-border p-3 text-sm">
                          Additional CSS class names to apply to the content.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Usage Notes */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-foreground">
                  Usage Notes
                </h3>
                <div className="bg-muted/50 rounded-lg p-4 space-y-2">
                  <p className="text-sm text-muted-foreground">
                    • The Accordion component automatically manages the expanded
                    state of its items
                  </p>
                  <p className="text-sm text-muted-foreground">
                    • Use{" "}
                    <code className="bg-background px-1 py-0.5 rounded">
                      type="single"
                    </code>{" "}
                    for traditional accordion behavior where only one item can
                    be open
                  </p>
                  <p className="text-sm text-muted-foreground">
                    • Use{" "}
                    <code className="bg-background px-1 py-0.5 rounded">
                      type="multiple"
                    </code>{" "}
                    to allow multiple items to be expanded simultaneously
                  </p>
                  <p className="text-sm text-muted-foreground">
                    • The component includes built-in keyboard navigation and
                    screen reader support
                  </p>
                </div>
              </div>
            </section>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default AccordionComponent;
