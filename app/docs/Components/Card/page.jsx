"use client";
import React from "react";
import { Copy, CopyIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "framer-motion";
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
      <h1 className="text-4xl font-semibold mb-4">Card</h1>
      <p className="text-muted-foreground dark:text-white mb-8">
        A card component that includes a header, title, description, content,
        and footer for related actions and information.
      </p>
      {/* *************************************************************** */}
      <CardComp />
      {/* *************************************************************** */}
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
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <span>npm i elementra-ui</span>
                </div>
              </div>
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
          <div className="relative mb-4">
            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 font-mono text-sm text-gray-800 dark:text-white">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <span>npm install clsx tailwind-merge</span>
                </div>
              </div>
            </div>
            <p className="my-3 text-gray-600 dark:text-white text-sm">
              These utilities are required dependencies - clsx helps combine CSS
              class names conditionally, while tailwind-merge efficiently
              handles Tailwind CSS class merging and conflicts. They're
              essential for the proper functioning of Elementra UI components.
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
        </section>

        <section>
          <h2 className="text-xl font-medium flex items-center gap-2 mb-4">
            <span className="text-muted-foreground dark:text-white">2</span>
            Add Components Using CLI
          </h2>

          <div className="relative mb-4">
            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 font-mono text-sm text-gray-800 dark:text-white">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <span>npx elementra-ui add</span>
                </div>
              </div>
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
            <span className="text-purple-600">src</span> folder. this step add
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
              <div className="flex gap-2">
                <Button variant="outline" size="icon">
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <AnimatePresence mode="wait">
              <TabsContent value="preview" className="mt-0">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="rounded-lg md:border bg-white  md:p-8 min-h-[400px] flex items-center justify-center"
                >
                  <Card>
                    <CardHeader>
                      <CardTitle>Energy Drink</CardTitle>
                      <CardDescription>
                        This is an orange drink that is very tasty and healthy
                        for you.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <img
                        src="https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                        alt="Product"
                        className="md:h-80 w-full object-cover"
                      />
                    </CardContent>
                    <CardFooter>
                      <Button>Buy Now</Button>
                    </CardFooter>
                  </Card>
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
                    <code className="whitespace-pre-wrap">{`import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button"; // Added import for Button

const CardComponent = () => {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>
            This is a sample card description that explains the card's purpose.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <img src="You can put any Image here." alt="Product" className="md:h-80 w-full object-cover"/>
          <p>
            Add more Content You can put any content here.
          </p>
        </CardContent>
        <CardFooter>
          <Button>Action</Button>
        </CardFooter>
      </Card>
    );
}
`}</code>
                  </pre>
                </motion.div>
              </TabsContent>
            </AnimatePresence>
          </Tabs>
        </div>
        {/* ************************** */}
        {/* Usage Section */}
        <section>
          <h2 className="text-xl font-medium flex items-center gap-2 mb-4">
            <span className="text-muted-foreground dark:text-white">3:</span>
            Using in Next Js
          </h2>

          <p className="mb-6 text-gray-700 dark:text-white">
            Import and use the Card component in your Next.js project. When you
            add a component using the CLI, it will be added to the components
            folder in the src directory. If you are using the app directory
            structure, the component will be added outside of the app folder.
          </p>

          <div className="relative">
            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
              <pre className="text-[0.5rem] md:text-[0.9rem] font-mono whitespace-pre-wrap">
                {codeExample1}
              </pre>
            </div>
            <Button
              size="sm"
              variant="ghost"
              className="absolute top-3 right-3 h-6 w-6 p-0 text-muted-foreground dark:text-white"
              onClick={() => handleCopy(codeExample1)}
            >
              <Copy className="h-4 w-4" />
            </Button>
          </div>
        </section>
        {/* ************************** */}
        <section>
          <h2 className="text-xl font-medium flex items-center gap-2 mb-4">
            <span className="text-muted-foreground dark:text-white">4:</span>
            Using In React Js
          </h2>

          <p className="mb-6 text-gray-700 dark:text-white">
            Import and use the Card component in your React.js project. When you
            add a component using the CLI, it will be added to the components
            folder in your project directory. Since React.js doesn't use the app
            directory structure like Next.js, you can organize your components
            directly in the components folder at the root level or within
            src/components.
          </p>

          <div className="relative">
            <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
              <pre className="text-[0.6rem] md:text-[0.9rem] font-mono whitespace-pre-wrap">
                {codeExample2}
              </pre>
            </div>
            <Button
              size="sm"
              variant="ghost"
              className="absolute top-3 right-3 h-6 w-6 p-0 text-muted-foreground dark:text-white"
              onClick={() => handleCopy(codeExample2)}
            >
              <Copy className="h-4 w-4" />
            </Button>
          </div>
        </section>
        {/* ************************** */}
        {/* ************************** */}
      </div>
    </div>
  );
};

export default CardComponent;
