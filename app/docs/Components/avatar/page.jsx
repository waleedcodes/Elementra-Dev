"use client";

import React from "react";
import { Copy, CopyIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "framer-motion";
import { Avatar, AvatarGroup } from "@/components/Avatar";

const AvatarComponent = () => {
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
      title: "Basic Avatar",
      code: `import { Avatar } from "@/components/Avatar";

export default function BasicAvatar() {
  return (
    <div className="flex gap-4 items-center">
      <Avatar src="/user.png" alt="John Doe" />
      <Avatar fallback="JD" alt="John Doe" />
      <Avatar alt="Anonymous User" />
    </div>
  );
}`,
      description: "Simple avatar with image, fallback, and initials.",
    },
    {
      title: "Avatar Sizes",
      code: `import { Avatar } from "@/components/Avatar";

export default function AvatarSizes() {
  return (
    <div className="flex gap-4 items-center">
      <Avatar src="/user.png" alt="User" size="xs" />
      <Avatar src="/user.png" alt="User" size="sm" />
      <Avatar src="/user.png" alt="User" size="md" />
      <Avatar src="/user.png" alt="User" size="lg" />
      <Avatar src="/user.png" alt="User" size="xl" />
    </div>
  );
}`,
      description: "Different sizes from extra small to extra large.",
    },
    {
      title: "Avatar with Status",
      code: `import { Avatar } from "@/components/Avatar";

export default function AvatarWithStatus() {
  return (
    <div className="flex gap-4 items-center">
      <Avatar src="/user.png" alt="User" status="online" />
      <Avatar src="/user.png" alt="User" status="offline" />
      <Avatar src="/user.png" alt="User" status="away" />
      <Avatar src="/user.png" alt="User" status="busy" />
    </div>
  );
}`,
      description: "Avatars with online status indicators.",
    },
    {
      title: "Avatar Shapes",
      code: `import { Avatar } from "@/components/Avatar";

export default function AvatarShapes() {
  return (
    <div className="flex gap-4 items-center">
      <Avatar src="/user.png" alt="User" shape="circle" />
      <Avatar src="/user.png" alt="User" shape="square" />
    </div>
  );
}`,
      description: "Circular and square avatar shapes.",
    },
    {
      title: "Avatar Group",
      code: `import { Avatar, AvatarGroup } from "@/components/Avatar";

export default function AvatarGroupExample() {
  return (
    <AvatarGroup max={3}>
      <Avatar src="/user1.png" alt="User 1" />
      <Avatar src="/user2.png" alt="User 2" />
      <Avatar src="/user3.png" alt="User 3" />
      <Avatar src="/user4.png" alt="User 4" />
      <Avatar src="/user5.png" alt="User 5" />
    </AvatarGroup>
  );
}`,
      description: "Group of avatars with overflow indicator.",
    },
  ];
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              Avatar
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl">
              An image element with a fallback for representing the user.
            </p>
          </div>
        </div>
      </div>
      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.id}
                value={tab.id}
                className="text-sm font-medium"
              >
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
                          <code className="text-foreground">
                            npm i elementra-ui
                          </code>
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
                            npx elementra-ui add avatar
                          </code>
                        </div>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="absolute top-2 right-2 h-8 w-8 p-0 hover:bg-muted"
                          onClick={() =>
                            handleCopy("npx elementra-ui add avatar")
                          }
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
                          <div className="flex gap-4 items-center justify-center">
                            <Avatar src="/user.png" alt="John Doe" />
                            <Avatar fallback="JD" alt="John Doe" />
                            <Avatar alt="Anonymous User" status="online" />
                          </div>
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
                          {example.title === "Basic Avatar" && (
                            <div className="flex gap-4 items-center justify-center">
                              <Avatar src="/user.png" alt="John Doe" />
                              <Avatar fallback="JD" alt="John Doe" />
                              <Avatar alt="Anonymous User" />
                            </div>
                          )}
                          {example.title === "Avatar Sizes" && (
                            <div className="flex gap-4 items-center justify-center">
                              <Avatar src="/user.png" alt="User" size="xs" />
                              <Avatar src="/user.png" alt="User" size="sm" />
                              <Avatar src="/user.png" alt="User" size="md" />
                              <Avatar src="/user.png" alt="User" size="lg" />
                              <Avatar src="/user.png" alt="User" size="xl" />
                            </div>
                          )}
                          {example.title === "Avatar with Status" && (
                            <div className="flex gap-4 items-center justify-center">
                              <Avatar
                                src="/user.png"
                                alt="User"
                                status="online"
                              />
                              <Avatar
                                src="/user.png"
                                alt="User"
                                status="offline"
                              />
                              <Avatar
                                src="/user.png"
                                alt="User"
                                status="away"
                              />
                              <Avatar
                                src="/user.png"
                                alt="User"
                                status="busy"
                              />
                            </div>
                          )}
                          {example.title === "Avatar Shapes" && (
                            <div className="flex gap-4 items-center justify-center">
                              <Avatar
                                src="/user.png"
                                alt="User"
                                shape="circle"
                              />
                              <Avatar
                                src="/user.png"
                                alt="User"
                                shape="square"
                              />
                            </div>
                          )}
                          {example.title === "Avatar Group" && (
                            <div className="flex justify-center">
                              <AvatarGroup max={3}>
                                <Avatar src="/user1.png" alt="User 1" />
                                <Avatar src="/user2.png" alt="User 2" />
                                <Avatar src="/user3.png" alt="User 3" />
                                <Avatar src="/user4.png" alt="User 4" />
                                <Avatar src="/user5.png" alt="User 5" />
                              </AvatarGroup>
                            </div>
                          )}
                        </div>
                        <div className="relative">
                          <div className="bg-card border border-border rounded-lg overflow-hidden">
                            <div className="bg-muted/50 px-4 py-2 border-b border-border">
                              <span className="text-sm font-medium text-foreground">
                                Code
                              </span>
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
                        <h3 className="text-lg font-medium text-foreground mb-4">
                          Avatar
                        </h3>
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
                                <td className="py-3 px-4 text-sm font-mono text-foreground">
                                  src
                                </td>
                                <td className="py-3 px-4 text-sm text-muted-foreground">
                                  string
                                </td>
                                <td className="py-3 px-4 text-sm text-muted-foreground">
                                  -
                                </td>
                                <td className="py-3 px-4 text-sm text-muted-foreground">
                                  The image URL
                                </td>
                              </tr>
                              <tr className="border-b border-border">
                                <td className="py-3 px-4 text-sm font-mono text-foreground">
                                  alt
                                </td>
                                <td className="py-3 px-4 text-sm text-muted-foreground">
                                  string
                                </td>
                                <td className="py-3 px-4 text-sm text-muted-foreground">
                                  -
                                </td>
                                <td className="py-3 px-4 text-sm text-muted-foreground">
                                  Alt text for the image
                                </td>
                              </tr>
                              <tr className="border-b border-border">
                                <td className="py-3 px-4 text-sm font-mono text-foreground">
                                  fallback
                                </td>
                                <td className="py-3 px-4 text-sm text-muted-foreground">
                                  string
                                </td>
                                <td className="py-3 px-4 text-sm text-muted-foreground">
                                  initials
                                </td>
                                <td className="py-3 px-4 text-sm text-muted-foreground">
                                  Fallback text when image fails
                                </td>
                              </tr>
                              <tr className="border-b border-border">
                                <td className="py-3 px-4 text-sm font-mono text-foreground">
                                  size
                                </td>
                                <td className="py-3 px-4 text-sm text-muted-foreground">
                                  "xs" | "sm" | "md" | "lg" | "xl"
                                </td>
                                <td className="py-3 px-4 text-sm text-muted-foreground">
                                  "md"
                                </td>
                                <td className="py-3 px-4 text-sm text-muted-foreground">
                                  Size of the avatar
                                </td>
                              </tr>
                              <tr className="border-b border-border">
                                <td className="py-3 px-4 text-sm font-mono text-foreground">
                                  shape
                                </td>
                                <td className="py-3 px-4 text-sm text-muted-foreground">
                                  "circle" | "square"
                                </td>
                                <td className="py-3 px-4 text-sm text-muted-foreground">
                                  "circle"
                                </td>
                                <td className="py-3 px-4 text-sm text-muted-foreground">
                                  Shape of the avatar
                                </td>
                              </tr>
                              <tr className="border-b border-border">
                                <td className="py-3 px-4 text-sm font-mono text-foreground">
                                  status
                                </td>
                                <td className="py-3 px-4 text-sm text-muted-foreground">
                                  "online" | "offline" | "away" | "busy"
                                </td>
                                <td className="py-3 px-4 text-sm text-muted-foreground">
                                  -
                                </td>
                                <td className="py-3 px-4 text-sm text-muted-foreground">
                                  Status indicator
                                </td>
                              </tr>
                              <tr className="border-b border-border">
                                <td className="py-3 px-4 text-sm font-mono text-foreground">
                                  statusPosition
                                </td>
                                <td className="py-3 px-4 text-sm text-muted-foreground">
                                  "top-right" | "top-left" | "bottom-right" |
                                  "bottom-left"
                                </td>
                                <td className="py-3 px-4 text-sm text-muted-foreground">
                                  "bottom-right"
                                </td>
                                <td className="py-3 px-4 text-sm text-muted-foreground">
                                  Position of status indicator
                                </td>
                              </tr>
                              <tr>
                                <td className="py-3 px-4 text-sm font-mono text-foreground">
                                  className
                                </td>
                                <td className="py-3 px-4 text-sm text-muted-foreground">
                                  string
                                </td>
                                <td className="py-3 px-4 text-sm text-muted-foreground">
                                  -
                                </td>
                                <td className="py-3 px-4 text-sm text-muted-foreground">
                                  Additional CSS classes
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-foreground mb-4">
                          AvatarGroup
                        </h3>
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
                                <td className="py-3 px-4 text-sm font-mono text-foreground">
                                  max
                                </td>
                                <td className="py-3 px-4 text-sm text-muted-foreground">
                                  number
                                </td>
                                <td className="py-3 px-4 text-sm text-muted-foreground">
                                  3
                                </td>
                                <td className="py-3 px-4 text-sm text-muted-foreground">
                                  Maximum avatars to show
                                </td>
                              </tr>
                              <tr className="border-b border-border">
                                <td className="py-3 px-4 text-sm font-mono text-foreground">
                                  size
                                </td>
                                <td className="py-3 px-4 text-sm text-muted-foreground">
                                  "xs" | "sm" | "md" | "lg" | "xl"
                                </td>
                                <td className="py-3 px-4 text-sm text-muted-foreground">
                                  "md"
                                </td>
                                <td className="py-3 px-4 text-sm text-muted-foreground">
                                  Size for all avatars
                                </td>
                              </tr>
                              <tr>
                                <td className="py-3 px-4 text-sm font-mono text-foreground">
                                  className
                                </td>
                                <td className="py-3 px-4 text-sm text-muted-foreground">
                                  string
                                </td>
                                <td className="py-3 px-4 text-sm text-muted-foreground">
                                  -
                                </td>
                                <td className="py-3 px-4 text-sm text-muted-foreground">
                                  Additional CSS classes
                                </td>
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
export default AvatarComponent;
