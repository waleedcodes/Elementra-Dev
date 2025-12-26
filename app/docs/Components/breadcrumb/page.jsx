"use client";

import React from "react";
import { Copy, CopyIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Breadcrumb, 
  BreadcrumbItem, 
  BreadcrumbLink, 
  BreadcrumbSeparator, 
  BreadcrumbEllipsis 
} from "@/components/Breadcrumb";

const BreadcrumbComponent = () => {
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
      title: "Basic Breadcrumb",
      code: `import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@/components/Breadcrumb";

export default function BasicBreadcrumb() {
  return (
    <Breadcrumb>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">Home</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink href="/products">Products</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink href="/products/electronics">Electronics</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <span>iPhone 15</span>
      </BreadcrumbItem>
    </Breadcrumb>
  );
}`,
      description: "Simple breadcrumb navigation with multiple levels.",
    },
    {
      title: "Custom Separator",
      code: `import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@/components/Breadcrumb";

export default function CustomSeparator() {
  return (
    <Breadcrumb separator="→">
      <BreadcrumbItem>
        <BreadcrumbLink href="/">Home</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink href="/docs">Documentation</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <span>Breadcrumb</span>
      </BreadcrumbItem>
    </Breadcrumb>
  );
}`,
      description: "Breadcrumb with custom separator arrow.",
    },
    {
      title: "With Ellipsis",
      code: `import { 
  Breadcrumb, 
  BreadcrumbItem, 
  BreadcrumbLink, 
  BreadcrumbEllipsis 
} from "@/components/Breadcrumb";

export default function WithEllipsis() {
  return (
    <Breadcrumb>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">Home</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbEllipsis />
      <BreadcrumbItem>
        <BreadcrumbLink href="/components">Components</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <span>Breadcrumb</span>
      </BreadcrumbItem>
    </Breadcrumb>
  );
}`,
      description: "Breadcrumb with ellipsis for collapsed navigation.",
    },
    {
      title: "With Icons",
      code: `import { 
  Breadcrumb, 
  BreadcrumbItem, 
  BreadcrumbLink 
} from "@/components/Breadcrumb";
import { Home, Folder, File } from "lucide-react";

export default function WithIcons() {
  return (
    <Breadcrumb>
      <BreadcrumbItem>
        <BreadcrumbLink href="/" className="flex items-center gap-1">
          <Home className="h-4 w-4" />
          Home
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink href="/projects" className="flex items-center gap-1">
          <Folder className="h-4 w-4" />
          Projects
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <span className="flex items-center gap-1">
          <File className="h-4 w-4" />
          Project Details
        </span>
      </BreadcrumbItem>
    </Breadcrumb>
  );
}`,
      description: "Breadcrumb with icons for better visual hierarchy.",
    },
    {
      title: "Dropdown Breadcrumb",
      code: `import { 
  Breadcrumb, 
  BreadcrumbItem, 
  BreadcrumbLink 
} from "@/components/Breadcrumb";
import { ChevronDown } from "lucide-react";

export default function DropdownBreadcrumb() {
  return (
    <Breadcrumb>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">Home</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink href="/products" className="flex items-center gap-1">
          Products
          <ChevronDown className="h-3 w-3" />
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <span>Current Product</span>
      </BreadcrumbItem>
    </Breadcrumb>
  );
}`,
      description: "Breadcrumb with dropdown indicators.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              Breadcrumb
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl">
              Displays the path to the current resource using a hierarchy of links.
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            {tabs.map((tab) => (
              <TabsTrigger key={tab.id} value={tab.id} className="text-sm font-medium">
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="mt-8 sm:mt-12">
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
                            npx elementra-ui add breadcrumb
                          </code>
                        </div>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="absolute top-2 right-2 h-8 w-8 p-0 hover:bg-muted"
                          onClick={() => handleCopy("npx elementra-ui add breadcrumb")}
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
                          <Breadcrumb>
                            <BreadcrumbItem>
                              <BreadcrumbLink href="/">Home</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbItem>
                              <BreadcrumbLink href="/docs">Documentation</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbItem>
                              <span>Breadcrumb</span>
                            </BreadcrumbItem>
                          </Breadcrumb>
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
                        <p className="text-sm text-muted-foreground mb-4">
                          {example.description}
                        </p>

                        <div className="bg-card border border-border rounded-lg p-6">
                          {example.title === "Basic Breadcrumb" && (
                            <Breadcrumb>
                              <BreadcrumbItem>
                                <BreadcrumbLink href="/">Home</BreadcrumbLink>
                              </BreadcrumbItem>
                              <BreadcrumbItem>
                                <BreadcrumbLink href="/products">Products</BreadcrumbLink>
                              </BreadcrumbItem>
                              <BreadcrumbItem>
                                <BreadcrumbLink href="/products/electronics">Electronics</BreadcrumbLink>
                              </BreadcrumbItem>
                              <BreadcrumbItem>
                                <span>iPhone 15</span>
                              </BreadcrumbItem>
                            </Breadcrumb>
                          )}
                          {example.title === "Custom Separator" && (
                            <Breadcrumb separator="→">
                              <BreadcrumbItem>
                                <BreadcrumbLink href="/">Home</BreadcrumbLink>
                              </BreadcrumbItem>
                              <BreadcrumbItem>
                                <BreadcrumbLink href="/docs">Documentation</BreadcrumbLink>
                              </BreadcrumbItem>
                              <BreadcrumbItem>
                                <span>Breadcrumb</span>
                              </BreadcrumbItem>
                            </Breadcrumb>
                          )}
                          {example.title === "With Ellipsis" && (
                            <Breadcrumb>
                              <BreadcrumbItem>
                                <BreadcrumbLink href="/">Home</BreadcrumbLink>
                              </BreadcrumbItem>
                              <BreadcrumbEllipsis />
                              <BreadcrumbItem>
                                <BreadcrumbLink href="/components">Components</BreadcrumbLink>
                              </BreadcrumbItem>
                              <BreadcrumbItem>
                                <span>Breadcrumb</span>
                              </BreadcrumbItem>
                            </Breadcrumb>
                          )}
                          {example.title === "With Icons" && (
                            <Breadcrumb>
                              <BreadcrumbItem>
                                <BreadcrumbLink href="/" className="flex items-center gap-1">
                                  🏠 Home
                                </BreadcrumbLink>
                              </BreadcrumbItem>
                              <BreadcrumbItem>
                                <BreadcrumbLink href="/projects" className="flex items-center gap-1">
                                  📁 Projects
                                </BreadcrumbLink>
                              </BreadcrumbItem>
                              <BreadcrumbItem>
                                <span className="flex items-center gap-1">
                                  📄 Project Details
                                </span>
                              </BreadcrumbItem>
                            </Breadcrumb>
                          )}
                          {example.title === "Dropdown Breadcrumb" && (
                            <Breadcrumb>
                              <BreadcrumbItem>
                                <BreadcrumbLink href="/">Home</BreadcrumbLink>
                              </BreadcrumbItem>
                              <BreadcrumbItem>
                                <BreadcrumbLink href="/products" className="flex items-center gap-1">
                                  Products ▼
                                </BreadcrumbLink>
                              </BreadcrumbItem>
                              <BreadcrumbItem>
                                <span>Current Product</span>
                              </BreadcrumbItem>
                            </Breadcrumb>
                          )}
                        </div>

                        <div className="relative">
                          <div className="bg-card border border-border rounded-lg overflow-hidden">
                            <div className="bg-muted/50 px-4 py-2 border-b border-border">
                              <span className="text-sm font-medium text-foreground">Code</span>
                            </div>
                            <div className="p-4">
                              <pre className="text-sm text-foreground overflow-x-auto">
                                <code>{example.code}</code>
                              </pre>
                            </div>
                          </div>
                          <Button
                            size="sm"
                            variant="ghost"
                            className="absolute top-2 right-2 h-8 w-8 p-0 hover:bg-muted"
                            onClick={() => handleCopy(example.code)}
                          >
                            <CopyIcon className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </section>
                )}

                {activeTab === "api" && (
                  <section className="space-y-8">
                    <h2 className="text-2xl font-semibold text-foreground mb-6">
                      API Reference
                    </h2>

                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-medium text-foreground mb-4">Breadcrumb</h3>
                        <div className="bg-card border border-border rounded-lg overflow-hidden">
                          <table className="w-full">
                            <thead>
                              <tr className="bg-muted/50 border-b border-border">
                                <th className="text-left py-3 px-4 text-sm font-medium text-foreground">
                                  Prop
                                </th>
                                <th className="text-left py-3 px-4 text-sm font-medium text-foreground">
                                  Type
                                </th>
                                <th className="text-left py-3 px-4 text-sm font-medium text-foreground">
                                  Default
                                </th>
                                <th className="text-left py-3 px-4 text-sm font-medium text-foreground">
                                  Description
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="border-b border-border">
                                <td className="py-3 px-4 text-sm font-mono text-foreground">separator</td>
                                <td className="py-3 px-4 text-sm text-muted-foreground">ReactNode</td>
                                <td className="py-3 px-4 text-sm text-muted-foreground">"/"</td>
                                <td className="py-3 px-4 text-sm text-muted-foreground">Custom separator between items</td>
                              </tr>
                              <tr>
                                <td className="py-3 px-4 text-sm font-mono text-foreground">className</td>
                                <td className="py-3 px-4 text-sm text-muted-foreground">string</td>
                                <td className="py-3 px-4 text-sm text-muted-foreground">-</td>
                                <td className="py-3 px-4 text-sm text-muted-foreground">Additional CSS classes</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-medium text-foreground mb-4">BreadcrumbItem</h3>
                        <div className="bg-card border border-border rounded-lg overflow-hidden">
                          <table className="w-full">
                            <thead>
                              <tr className="bg-muted/50 border-b border-border">
                                <th className="text-left py-3 px-4 text-sm font-medium text-foreground">
                                  Prop
                                </th>
                                <th className="text-left py-3 px-4 text-sm font-medium text-foreground">
                                  Type
                                </th>
                                <th className="text-left py-3 px-4 text-sm font-medium text-foreground">
                                  Default
                                </th>
                                <th className="text-left py-3 px-4 text-sm font-medium text-foreground">
                                  Description
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="py-3 px-4 text-sm font-mono text-foreground">className</td>
                                <td className="py-3 px-4 text-sm text-muted-foreground">string</td>
                                <td className="py-3 px-4 text-sm text-muted-foreground">-</td>
                                <td className="py-3 px-4 text-sm text-muted-foreground">Additional CSS classes</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-medium text-foreground mb-4">BreadcrumbLink</h3>
                        <div className="bg-card border border-border rounded-lg overflow-hidden">
                          <table className="w-full">
                            <thead>
                              <tr className="bg-muted/50 border-b border-border">
                                <th className="text-left py-3 px-4 text-sm font-medium text-foreground">
                                  Prop
                                </th>
                                <th className="text-left py-3 px-4 text-sm font-medium text-foreground">
                                  Type
                                </th>
                                <th className="text-left py-3 px-4 text-sm font-medium text-foreground">
                                  Default
                                </th>
                                <th className="text-left py-3 px-4 text-sm font-medium text-foreground">
                                  Description
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="border-b border-border">
                                <td className="py-3 px-4 text-sm font-mono text-foreground">href</td>
                                <td className="py-3 px-4 text-sm text-muted-foreground">string</td>
                                <td className="py-3 px-4 text-sm text-muted-foreground">-</td>
                                <td className="py-3 px-4 text-sm text-muted-foreground">The URL to navigate to</td>
                              </tr>
                              <tr>
                                <td className="py-3 px-4 text-sm font-mono text-foreground">className</td>
                                <td className="py-3 px-4 text-sm text-muted-foreground">string</td>
                                <td className="py-3 px-4 text-sm text-muted-foreground">-</td>
                                <td className="py-3 px-4 text-sm text-muted-foreground">Additional CSS classes</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </section>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default BreadcrumbComponent;
