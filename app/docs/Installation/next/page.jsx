"use client";
import React from "react";
import { Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { toast } from "sonner";

const NextDocsPage = () => {
  const handleCopy = (text) => {
    if (text) {
      navigator.clipboard.writeText(text);
    }
    toast("Copied to clipboard", { type: "success" });
  };

  const codeExample = `import { Button } from "elementra-ui"

export default function Home() {
  return (
    <div>
      <Button variant="primary">Click Me</Button>
    </div>
  )
}`;

  return (
    <div className="">
      {/* Header */}
      <h1 className="text-4xl font-semibold mb-4">Next.js</h1>
      <p className="text-muted-foreground mb-8">
        Install and configure Next.js.
      </p>

      {/* Alert */}
      <Alert className="mb-8">
        <AlertDescription>
          If you're using Next.js 15, see the{" "}
          <span className="text-blue-500 hover:underline cursor-pointer">
            Next.js 15 + React 19 guide
          </span>
          .
        </AlertDescription>
      </Alert>

      {/* Content Sections */}
      <div className="space-y-12">
        {/* Create Project Section */}
        <section>
          <h2 className="text-xl font-medium flex items-center gap-2 mb-4">
            <span className="text-muted-foreground">1</span>
            Create project
          </h2>

          <p className="mb-4">
            Run the{" "}
            <code className="px-1.5 py-0.5 bg-muted rounded-md text-sm">
              npx create-next-app@latest
            </code>{" "}
            command to create a new Next.js project or to setup an existing one:
          </p>

          <div className="relative mb-4">
            <div className="bg-gray-100 rounded-lg p-4 font-mono text-sm text-black">
              <div className="flex items-center gap-2">
                <span>npm i elementra-ui</span>
              </div>
            </div>
            <Button
              size="sm"
              variant="ghost"
              className="absolute top-3 right-3 h-6 w-6 p-0 text-muted-foreground"
              onClick={() => handleCopy("npm i elementra-ui")}
            >
              <Copy className="h-4 w-4" />
            </Button>
          </div>
        </section>

        {/* That's it Section */}
        <section>
          <h2 className="text-xl font-medium flex items-center gap-2 mb-4">
            <span className="text-muted-foreground">2</span>
            That's it
          </h2>

          <p className="mb-4">
            You can now start adding components to your project. The command
            above will add the{" "}
            <code className="px-1.5 py-0.5 bg-muted rounded-md text-sm">
              Button
            </code>{" "}
            component to your project. You can then import it like this:
          </p>

          <div className="relative">
          <div className="bg-gray-100 rounded-lg p-4 font-mono text-sm text-black">
              <pre className="space-y-1">{codeExample}</pre>
            </div>
            <Button
              size="sm"
              variant="ghost"
              className="absolute top-3 right-3 h-6 w-6 p-0 text-muted-foreground"
              onClick={() => handleCopy(codeExample)}
            >
              <Copy className="h-4 w-4" />
            </Button>
          </div>
        </section>
      </div>

      {/* Footer Navigation */}
      {/* <div className="flex justify-between items-center mt-12 pt-8 border-t">
        <Button variant="ghost" className="text-muted-foreground">
          ← Changelog
        </Button>
        <Button variant="ghost" className="text-muted-foreground">
          Vite →
        </Button>
      </div> */}
    </div>
  );
};

export default NextDocsPage;
