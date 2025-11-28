"use client";
import React, { useState } from "react";
import { Copy, CopyIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CardComp from "./CardComp";

const CardComponent = () => {
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
    }
    toast("Copied to clipboard", { type: "success" });
  };

  const codeExample1 = `import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
  } from "@/src/components/ui/card";
  import { Button } from "@/src/components/ui/button";

  export default function Card() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>
            This is a sample card description that explains the card's
            purpose.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            This is the main content of the card. You can put any content
            here.
          </p>
        </CardContent>
        <CardFooter>
          <Button>Action</Button>
        </CardFooter>
      </Card>
    )
  }`;

  const codeExample2 = `import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
  } from "./components/ui/card";
  import { Button } from "./components/ui/button";

  export default function Card() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>
            This is a sample card description that explains the card's
            purpose.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            This is the main content of the card. You can put any content
            here.
          </p>
        </CardContent>
        <CardFooter>
          <Button>Action</Button>
        </CardFooter>
      </Card>
    )
  }`;

  return (
    <div className="">
      {/* Header */}
      <div className="space-y-4 mb-8">
        <h1 className="text-4xl font-semibold">Card</h1>
        <p className="text-muted-foreground dark:text-white text-lg">
          A versatile card component that includes header, content, and footer sections for organizing related information and actions.
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
                    npm install clsx tailwind-merge
                  </div>
                  <p className="my-3 text-gray-600 dark:text-white text-sm">
                    These utilities are required dependencies - clsx helps combine CSS
                    class names conditionally, while tailwind-merge efficiently
                    handles Tailwind CSS class merging and conflicts.
                  </p>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="absolute top-3 right-3 h-6 w-6 p-0 text-muted-foreground dark:text-white"
                    onClick={() => handleCopy("npm install clsx tailwind-merge")}
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
                Add Components Using CLI
              </h2>

              <div className="relative mb-4">
                <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 font-mono text-sm text-gray-800 dark:text-white">
                  npx elementra-ui add
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
              <div className="text-white bg-gray-800 text-md my-4 p-5 rounded-md">
                ? Select components to add ›
                <br />
                Instructions:
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;↑/↓: Highlight option
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;←/→/[space]: Toggle selection
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;a: Toggle all
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;enter/return: Complete answer
                <br />
                ◯&nbsp;&nbsp;&nbsp;Button
                <br />
                ◉&nbsp;&nbsp;&nbsp;Card
              </div>
              <p className="text-green-700 bg-gray-100 p-3 rounded-md my-3">
                Component Card added successfully!
              </p>
            </section>

            {/* Basic Example */}
            <section>
              <h2 className="text-xl font-medium flex items-center gap-2 mb-4">
                <span className="text-muted-foreground dark:text-white">3</span>
                Basic Example
              </h2>
              <div className="rounded-lg border bg-background p-8 flex items-center justify-center min-h-[300px]">
                <Card className="w-[350px]">
                  <CardHeader>
                    <CardTitle>Energy Drink</CardTitle>
                    <CardDescription>
                      This is an orange drink that is very tasty and healthy for you.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <img
                      src="https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                      alt="Product"
                      className="h-48 w-full object-cover rounded-md"
                    />
                  </CardContent>
                  <CardFooter>
                    <Button>Buy Now</Button>
                  </CardFooter>
                </Card>
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
                    <code>{`import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const CardExample = () => {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>
          This is a sample card description that explains the card's purpose.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          This is the main content of the card. You can put any content here.
        </p>
      </CardContent>
      <CardFooter>
        <Button>Action</Button>
      </CardFooter>
    </Card>
  );
};`}</code>
                  </pre>
                </div>
                <Button
                  size="sm"
                  variant="ghost"
                  className="absolute top-3 right-3 h-6 w-6 p-0 text-zinc-400 hover:text-zinc-100"
                  onClick={() => handleCopy(`import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const CardExample = () => {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>
          This is a sample card description that explains the card's purpose.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          This is the main content of the card. You can put any content here.
        </p>
      </CardContent>
      <CardFooter>
        <Button>Action</Button>
      </CardFooter>
    </Card>
  );
};`)}
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
              <h2 className="text-2xl font-semibold mb-4">Card Variants</h2>
              <p className="text-muted-foreground mb-6">
                Explore different card styles and variants available in Elementra UI.
              </p>
            </div>
            <CardComp />
          </div>
        )}

        {activeTab === "api" && (
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">API Reference</h2>
              <p className="text-muted-foreground mb-6">
                Detailed documentation for Card component props and usage.
              </p>
            </div>
            
            {/* Usage Sections */}
            <section>
              <h3 className="text-xl font-medium mb-4">Usage in Next.js</h3>
              <p className="mb-6 text-gray-700 dark:text-white">
                Import and use the Card component in your Next.js project. When you
                add a component using the CLI, it will be added to the components
                folder in the src directory.
              </p>
              <div className="relative">
                <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                  <pre className="text-[0.8rem] font-mono whitespace-pre-wrap">{`import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/src/components/ui/card";
import { Button } from "@/src/components/ui/button";

export default function CardPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>
          This is a sample card description that explains the card's purpose.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          This is the main content of the card. You can put any content here.
        </p>
      </CardContent>
      <CardFooter>
        <Button>Action</Button>
      </CardFooter>
    </Card>
  );
}`}</pre>
                </div>
                <Button
                  size="sm"
                  variant="ghost"
                  className="absolute top-3 right-3 h-6 w-6 p-0 text-muted-foreground dark:text-white"
                  onClick={() => handleCopy(`import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/src/components/ui/card";
import { Button } from "@/src/components/ui/button";

export default function CardPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>
          This is a sample card description that explains the card's purpose.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          This is the main content of the card. You can put any content here.
        </p>
      </CardContent>
      <CardFooter>
        <Button>Action</Button>
      </CardFooter>
    </Card>
  );
}`)}
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-medium mb-4">Usage in React.js</h3>
              <p className="mb-6 text-gray-700 dark:text-white">
                Import and use the Card component in your React.js project. The components
                can be organized in your components folder structure.
              </p>
              <div className="relative">
                <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                  <pre className="text-[0.8rem] font-mono whitespace-pre-wrap">{`import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./components/ui/card";
import { Button } from "./components/ui/button";

export default function CardComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>
          This is a sample card description that explains the card's purpose.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          This is the main content of the card. You can put any content here.
        </p>
      </CardContent>
      <CardFooter>
        <Button>Action</Button>
      </CardFooter>
    </Card>
  );
}`}</pre>
                </div>
                <Button
                  size="sm"
                  variant="ghost"
                  className="absolute top-3 right-3 h-6 w-6 p-0 text-muted-foreground dark:text-white"
                  onClick={() => handleCopy(`import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./components/ui/card";
import { Button } from "./components/ui/button";

export default function CardComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>
          This is a sample card description that explains the card's purpose.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          This is the main content of the card. You can put any content here.
        </p>
      </CardContent>
      <CardFooter>
        <Button>Action</Button>
      </CardFooter>
    </Card>
  );
}`)}
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </section>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default CardComponent;
