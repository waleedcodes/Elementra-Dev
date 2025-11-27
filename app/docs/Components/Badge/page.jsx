"use client";
import React from "react";
import { Badge } from "@/components/Badge";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "framer-motion";
import {
  Copy,
  CheckCircle,
  AlertTriangle,
  Info,
  Star,
  Bell,
} from "lucide-react";

const BadgeComponent = () => {
  const [activeTab, setActiveTab] = React.useState("overview");

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "examples", label: "Examples" },
    { id: "api", label: "API" },
  ];

  const handleCopy = (text) => {
    if (text) {
      navigator.clipboard.writeText(text);
      toast("Copied to clipboard", { type: "success" });
    }
  };
  const codeExamples = [
    {
      title: "Basic Badge",
      code: `import { Badge } from "@/components/ui/badge";

export default function BadgeExample() {
  return <Badge>Default</Badge>;
}`,
      description: "Simple badge with default styling.",
    },
    {
      title: "Badge Variants",
      code: `import { Badge } from "@/components/ui/badge";

export default function BadgeVariantsExample() {
  return (
    <div className="flex gap-2">
      <Badge variant="default">Default</Badge>
      <Badge variant="primary">Primary</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="danger">Danger</Badge>
    </div>
  );
}`,
      description: "Using different badge variants for various purposes.",
    },
    {
      title: "Badge Sizes",
      code: `import { Badge } from "@/components/ui/badge";

export default function BadgeSizesExample() {
  return (
    <div className="flex gap-2 items-center">
      <Badge size="sm">Small</Badge>
      <Badge size="md">Medium</Badge>
      <Badge size="lg">Large</Badge>
    </div>
  );
}`,
      description: "Different badge sizes for various use cases.",
    },
    {
      title: "Badges with Icons",
      code: `import { Badge } from "@/components/ui/badge";
import { CheckCircle, AlertTriangle, Info, Star } from "lucide-react";

export default function BadgeWithIconsExample() {
  return (
    <div className="flex gap-2">
      <Badge variant="success">
        <CheckCircle className="mr-1 h-3 w-3" />
        Success
      </Badge>
      <Badge variant="warning">
        <AlertTriangle className="mr-1 h-3 w-3" />
        Warning
      </Badge>
      <Badge variant="info">
        <Info className="mr-1 h-3 w-3" />
        Information
      </Badge>
    </div>
  );
}`,
      description:
        "Badges combined with icons for better visual communication.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 text-foreground">
          Badge
        </h1>
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
          A versatile badge component for highlighting information, status, or
          categories with distinct visual styles and animations.
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

      {/* Tab Content */}
      {activeTab === "overview" && (
        <div className="space-y-8 sm:space-y-12">
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
                <Copy className="h-4 w-4 text-muted-foreground" />
              </Button>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold flex items-center gap-3 text-foreground">
              <span className="flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                2
              </span>
              Add Components Using CLI
            </h2>

            <div className="relative">
              <div className="bg-card border border-border rounded-lg p-4 font-mono text-sm overflow-x-auto">
                <code className="text-foreground">npx elementra-ui add</code>
              </div>
              <Button
                size="sm"
                variant="ghost"
                className="absolute top-2 right-2 h-8 w-8 p-0 hover:bg-muted"
                onClick={() => handleCopy("npx elementra-ui add")}
              >
                <Copy className="h-4 w-4 text-muted-foreground" />
              </Button>
            </div>
            <div className="bg-muted/50 border border-border rounded-lg p-4">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Select components using the up/down arrow keys. Press spacebar
                to select multiple components, then press enter to add them to
                your{" "}
                <code className="bg-primary/10 text-primary px-1.5 py-0.5 rounded text-xs font-mono">
                  src
                </code>{" "}
                folder.
              </p>
            </div>
          </section>

          {/* Preview Section */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold flex items-center gap-3 text-foreground">
              <span className="flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                3
              </span>
              Component Preview
            </h2>

            <div className="w-full">
              <Tabs defaultValue="preview" className="w-full">
                <div className="flex items-center justify-between mb-6">
                  <TabsList className="grid w-[240px] grid-cols-2 bg-muted">
                    <TabsTrigger
                      value="preview"
                      className="font-medium data-[state=active]:bg-background data-[state=active]:text-foreground"
                      key="preview-tab"
                    >
                      Preview
                    </TabsTrigger>
                    <TabsTrigger
                      value="code"
                      className="font-medium data-[state=active]:bg-background data-[state=active]:text-foreground"
                      key="code-tab"
                    >
                      Code
                    </TabsTrigger>
                  </TabsList>
                </div>

                <AnimatePresence mode="wait">
                  <TabsContent value="preview" className="mt-0">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="rounded-lg border border-border bg-background p-6 sm:p-8 min-h-[300px] sm:min-h-[400px] flex items-center justify-center"
                    >
                      <div className="flex flex-wrap gap-3 items-center justify-center">
                        <Badge variant="default">Default</Badge>
                        <Badge variant="primary">Primary</Badge>
                        <Badge variant="secondary">Secondary</Badge>
                        <Badge variant="success">
                          <CheckCircle className="mr-1 h-3 w-3" />
                          Success
                        </Badge>
                        <Badge variant="warning">
                          <AlertTriangle className="mr-1 h-3 w-3" />
                          Warning
                        </Badge>
                        <Badge variant="danger">Danger</Badge>
                        <Badge variant="info">
                          <Info className="mr-1 h-3 w-3" />
                          Info
                        </Badge>
                        <Badge variant="outline">Outline</Badge>
                      </div>
                    </motion.div>
                  </TabsContent>

                  <TabsContent value="code" className="mt-0">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="relative rounded-lg border border-border bg-card"
                    >
                      <div className="p-4 overflow-x-auto">
                        <pre className="text-xs sm:text-sm text-foreground font-mono">
                          <code className="whitespace-pre-wrap">
                            {codeExamples[1].code}
                          </code>
                        </pre>
                      </div>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="absolute top-2 right-2 h-8 w-8 p-0 hover:bg-muted"
                        onClick={() => handleCopy(codeExamples[1].code)}
                      >
                        <Copy className="h-4 w-4 text-muted-foreground" />
                      </Button>
                    </motion.div>
                  </TabsContent>
                </AnimatePresence>
              </Tabs>
            </div>
          </section>

          {/* Basic Usage Section */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold flex items-center gap-3 text-foreground">
              <span className="flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                4
              </span>
              Basic Usage
            </h2>

            <div className="space-y-4">
              <h3 className="text-lg font-medium text-foreground flex items-center gap-2">
                <span className="w-1 h-6 bg-primary rounded-full"></span>
                Import and Use
              </h3>

              <div className="relative">
                <div className="bg-card border border-border rounded-lg p-4 overflow-x-auto">
                  <pre className="text-xs sm:text-sm font-mono text-foreground">
                    <code className="whitespace-pre-wrap">
                      {codeExamples[0].code}
                    </code>
                  </pre>
                </div>
                <Button
                  size="sm"
                  variant="ghost"
                  className="absolute top-2 right-2 h-8 w-8 p-0 hover:bg-muted"
                  onClick={() => handleCopy(codeExamples[0].code)}
                >
                  <Copy className="h-4 w-4 text-muted-foreground" />
                </Button>
              </div>
            </div>
          </section>
        </div>
      )}

      {activeTab === "examples" && (
        <div className="space-y-8 sm:space-y-12">
          {/* Badge Sizes Example */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-foreground flex items-center gap-2">
              <span className="w-1 h-6 bg-primary rounded-full"></span>
              Different Badge Sizes
            </h3>

            <div className="bg-muted/30 border border-border rounded-lg p-6 flex items-center justify-center">
              <div className="flex gap-3 items-center">
                <Badge size="sm">Small</Badge>
                <Badge size="md">Medium</Badge>
                <Badge size="lg">Large</Badge>
              </div>
            </div>

            <div className="relative">
              <div className="bg-card border border-border rounded-lg p-4 overflow-x-auto">
                <pre className="text-xs sm:text-sm font-mono text-foreground">
                  <code className="whitespace-pre-wrap">
                    {codeExamples[2].code}
                  </code>
                </pre>
              </div>
              <Button
                size="sm"
                variant="ghost"
                className="absolute top-2 right-2 h-8 w-8 p-0 hover:bg-muted"
                onClick={() => handleCopy(codeExamples[2].code)}
              >
                <Copy className="h-4 w-4 text-muted-foreground" />
              </Button>
            </div>
          </div>

          {/* Badge with Icons Example */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-foreground flex items-center gap-2">
              <span className="w-1 h-6 bg-primary rounded-full"></span>
              Badges with Icons
            </h3>

            <div className="bg-muted/30 border border-border rounded-lg p-6 flex items-center justify-center">
              <div className="flex flex-wrap gap-3 items-center">
                <Badge variant="success">
                  <CheckCircle className="mr-1 h-3 w-3" />
                  Success
                </Badge>
                <Badge variant="warning">
                  <AlertTriangle className="mr-1 h-3 w-3" />
                  Warning
                </Badge>
                <Badge variant="info">
                  <Info className="mr-1 h-3 w-3" />
                  Information
                </Badge>
                <Badge variant="primary">
                  <Star className="mr-1 h-3 w-3" />
                  Featured
                </Badge>
              </div>
            </div>

            <div className="relative">
              <div className="bg-card border border-border rounded-lg p-4 overflow-x-auto">
                <pre className="text-xs sm:text-sm font-mono text-foreground">
                  <code className="whitespace-pre-wrap">
                    {codeExamples[3].code}
                  </code>
                </pre>
              </div>
              <Button
                size="sm"
                variant="ghost"
                className="absolute top-2 right-2 h-8 w-8 p-0 hover:bg-muted"
                onClick={() => handleCopy(codeExamples[3].code)}
              >
                <Copy className="h-4 w-4 text-muted-foreground" />
              </Button>
            </div>
          </div>

          {/* All Variants Example */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-foreground flex items-center gap-2">
              <span className="w-1 h-6 bg-primary rounded-full"></span>
              All Badge Variants
            </h3>

            <div className="bg-muted/30 border border-border rounded-lg p-6 flex items-center justify-center">
              <div className="flex flex-wrap gap-3 items-center justify-center">
                <Badge variant="default">Default</Badge>
                <Badge variant="primary">Primary</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="success">Success</Badge>
                <Badge variant="warning">Warning</Badge>
                <Badge variant="danger">Danger</Badge>
                <Badge variant="info">Info</Badge>
                <Badge variant="outline">Outline</Badge>
              </div>
            </div>

            <div className="relative">
              <div className="bg-card border border-border rounded-lg p-4 overflow-x-auto">
                <pre className="text-xs sm:text-sm font-mono text-foreground">
                  <code className="whitespace-pre-wrap">
                    {codeExamples[1].code}
                  </code>
                </pre>
              </div>
              <Button
                size="sm"
                variant="ghost"
                className="absolute top-2 right-2 h-8 w-8 p-0 hover:bg-muted"
                onClick={() => handleCopy(codeExamples[1].code)}
              >
                <Copy className="h-4 w-4 text-muted-foreground" />
              </Button>
            </div>
          </div>

          {/* Interactive Examples */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-foreground flex items-center gap-2">
              <span className="w-1 h-6 bg-primary rounded-full"></span>
              Interactive Examples
            </h3>

            <div className="bg-muted/30 border border-border rounded-lg p-6">
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-medium mb-3 text-foreground">
                    Status Badges
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="success">
                      <CheckCircle className="mr-1 h-3 w-3" />
                      Active
                    </Badge>
                    <Badge variant="warning">
                      <AlertTriangle className="mr-1 h-3 w-3" />
                      Pending
                    </Badge>
                    <Badge variant="danger">Error</Badge>
                    <Badge variant="secondary">Inactive</Badge>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium mb-3 text-foreground">
                    Priority Badges
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="danger" size="lg">
                      High Priority
                    </Badge>
                    <Badge variant="warning" size="md">
                      Medium Priority
                    </Badge>
                    <Badge variant="info" size="sm">
                      Low Priority
                    </Badge>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium mb-3 text-foreground">
                    Category Tags
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="primary">Frontend</Badge>
                    <Badge variant="secondary">Backend</Badge>
                    <Badge variant="outline">Design</Badge>
                    <Badge variant="info">
                      <Star className="mr-1 h-3 w-3" />
                      Featured
                    </Badge>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-card border border-border rounded-lg p-4 overflow-x-auto">
                <pre className="text-xs sm:text-sm font-mono text-foreground">
                  <code className="whitespace-pre-wrap">{`import { Badge } from "@/components/ui/badge";
import { CheckCircle, AlertTriangle, Star } from "lucide-react";

export default function InteractiveBadgeExample() {
  return (
    <div className="space-y-6">
      {/* Status Badges */}
      <div>
        <h4 className="text-sm font-medium mb-3">Status Badges</h4>
        <div className="flex gap-2">
          <Badge variant="success">
            <CheckCircle className="mr-1 h-3 w-3" />
            Active
          </Badge>
          <Badge variant="warning">
            <AlertTriangle className="mr-1 h-3 w-3" />
            Pending
          </Badge>
          <Badge variant="danger">Error</Badge>
          <Badge variant="secondary">Inactive</Badge>
        </div>
      </div>
      
      {/* Priority Badges */}
      <div>
        <h4 className="text-sm font-medium mb-3">Priority Badges</h4>
        <div className="flex gap-2">
          <Badge variant="danger" size="lg">High Priority</Badge>
          <Badge variant="warning" size="md">Medium Priority</Badge>
          <Badge variant="info" size="sm">Low Priority</Badge>
        </div>
      </div>
    </div>
  );
}`}</code>
                </pre>
              </div>
              <Button
                size="sm"
                variant="ghost"
                className="absolute top-2 right-2 h-8 w-8 p-0 hover:bg-muted"
                onClick={() =>
                  handleCopy(`import { Badge } from "@/components/ui/badge";
import { CheckCircle, AlertTriangle, Star } from "lucide-react";

export default function InteractiveBadgeExample() {
  return (
    <div className="space-y-6">
      {/* Status Badges */}
      <div>
        <h4 className="text-sm font-medium mb-3">Status Badges</h4>
        <div className="flex gap-2">
          <Badge variant="success">
            <CheckCircle className="mr-1 h-3 w-3" />
            Active
          </Badge>
          <Badge variant="warning">
            <AlertTriangle className="mr-1 h-3 w-3" />
            Pending
          </Badge>
          <Badge variant="danger">Error</Badge>
          <Badge variant="secondary">Inactive</Badge>
        </div>
      </div>
      
      {/* Priority Badges */}
      <div>
        <h4 className="text-sm font-medium mb-3">Priority Badges</h4>
        <div className="flex gap-2">
          <Badge variant="danger" size="lg">High Priority</Badge>
          <Badge variant="warning" size="md">Medium Priority</Badge>
          <Badge variant="info" size="sm">Low Priority</Badge>
        </div>
      </div>
    </div>
  );
}`)
                }
              >
                <Copy className="h-4 w-4 text-muted-foreground" />
              </Button>
            </div>
          </div>
        </div>
      )}

      {activeTab === "api" && (
        <div className="space-y-8 sm:space-y-12">
          {/* API Reference Section */}
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4 text-foreground">
              Badge Props
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2 px-2 font-medium text-foreground">
                      Prop
                    </th>
                    <th className="text-left py-2 px-2 font-medium text-foreground">
                      Type
                    </th>
                    <th className="text-left py-2 px-2 font-medium text-foreground">
                      Default
                    </th>
                    <th className="text-left py-2 px-2 font-medium text-foreground">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b border-border/50">
                    <td className="py-2 px-2">
                      <code className="bg-muted px-1 py-0.5 rounded text-xs">
                        variant
                      </code>
                    </td>
                    <td className="py-2 px-2">string</td>
                    <td className="py-2 px-2">"default"</td>
                    <td className="py-2 px-2">
                      Badge style variant: default, primary, secondary, success,
                      warning, danger, info, outline
                    </td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 px-2">
                      <code className="bg-muted px-1 py-0.5 rounded text-xs">
                        size
                      </code>
                    </td>
                    <td className="py-2 px-2">string</td>
                    <td className="py-2 px-2">"md"</td>
                    <td className="py-2 px-2">Badge size: sm, md, lg</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 px-2">
                      <code className="bg-muted px-1 py-0.5 rounded text-xs">
                        animation
                      </code>
                    </td>
                    <td className="py-2 px-2">string</td>
                    <td className="py-2 px-2">"none"</td>
                    <td className="py-2 px-2">
                      Animation effect: none, pulse, bounce, fade, glow
                    </td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 px-2">
                      <code className="bg-muted px-1 py-0.5 rounded text-xs">
                        rounded
                      </code>
                    </td>
                    <td className="py-2 px-2">string</td>
                    <td className="py-2 px-2">"default"</td>
                    <td className="py-2 px-2">
                      Border radius style: default, full, none
                    </td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-2 px-2">
                      <code className="bg-muted px-1 py-0.5 rounded text-xs">
                        className
                      </code>
                    </td>
                    <td className="py-2 px-2">string</td>
                    <td className="py-2 px-2">-</td>
                    <td className="py-2 px-2">
                      Additional CSS classes for custom styling
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-2">
                      <code className="bg-muted px-1 py-0.5 rounded text-xs">
                        children
                      </code>
                    </td>
                    <td className="py-2 px-2">ReactNode</td>
                    <td className="py-2 px-2">-</td>
                    <td className="py-2 px-2">The content of the badge</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Variant Details */}
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4 text-foreground">
              Variant Options
            </h3>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Badge variant="default">default</Badge>
                  <span className="text-sm text-muted-foreground">
                    General purpose neutral badge
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant="primary">primary</Badge>
                  <span className="text-sm text-muted-foreground">
                    Brand color for important items
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant="secondary">secondary</Badge>
                  <span className="text-sm text-muted-foreground">
                    Muted alternative style
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant="success">success</Badge>
                  <span className="text-sm text-muted-foreground">
                    Positive status or completion
                  </span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Badge variant="warning">warning</Badge>
                  <span className="text-sm text-muted-foreground">
                    Cautionary or pending states
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant="danger">danger</Badge>
                  <span className="text-sm text-muted-foreground">
                    Error states or destructive actions
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant="info">info</Badge>
                  <span className="text-sm text-muted-foreground">
                    Informational content
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant="outline">outline</Badge>
                  <span className="text-sm text-muted-foreground">
                    Subtle, low emphasis style
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Size Guide */}
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4 text-foreground">
              Size Guide
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Badge size="sm">Small (sm)</Badge>
                <span className="text-sm text-muted-foreground">
                  Compact size for dense layouts
                </span>
              </div>
              <div className="flex items-center gap-4">
                <Badge size="md">Medium (md)</Badge>
                <span className="text-sm text-muted-foreground">
                  Standard size for most use cases
                </span>
              </div>
              <div className="flex items-center gap-4">
                <Badge size="lg">Large (lg)</Badge>
                <span className="text-sm text-muted-foreground">
                  Prominent size for emphasis
                </span>
              </div>
            </div>
          </div>

          {/* Usage Guidelines */}
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4 text-foreground">
              Usage Guidelines
            </h3>
            <div className="space-y-4 text-sm text-muted-foreground">
              <div>
                <h4 className="font-medium text-foreground mb-2">
                  When to use badges:
                </h4>
                <ul className="space-y-1 pl-4">
                  <li>• To highlight status or state information</li>
                  <li>• For categorizing or tagging content</li>
                  <li>• To display counts or numeric indicators</li>
                  <li>• For showing priority levels</li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium text-foreground mb-2">
                  Best practices:
                </h4>
                <ul className="space-y-1 pl-4">
                  <li>• Keep text concise and meaningful</li>
                  <li>• Use consistent variants for similar content types</li>
                  <li>• Consider accessibility when choosing colors</li>
                  <li>• Use icons sparingly to avoid clutter</li>
                </ul>
              </div>

              <div>
                <h4 className="font-medium text-foreground mb-2">
                  Accessibility:
                </h4>
                <ul className="space-y-1 pl-4">
                  <li>• Ensure sufficient color contrast</li>
                  <li>• Don't rely solely on color to convey meaning</li>
                  <li>• Use descriptive text for screen readers</li>
                  <li>• Consider using icons with text labels</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BadgeComponent;
