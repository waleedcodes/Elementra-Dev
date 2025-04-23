"use client";
import React from "react";
import { Copy, CopyIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "framer-motion";
import ScratchToReveal from "@/components/scratch-to-reveal";

const ScratchToRevealDocs = () => {
  const handleCopy = (text) => {
    if (text) {
      navigator.clipboard.writeText(text);
      toast("Copied to clipboard", { type: "success" });
    }
  };

  const codeExamples = [
    {
      code: `import ScratchToReveal from "@/components/ui/Scratch-To-Reveal";

export default function PrizeReveal() {
  return (
    <ScratchToReveal
      width={300}
      height={300}
      variant="radial"
      gradientColors={["#FF6B6B", "#FFD166", "#06D6A0"]}
      revealAnimation="bounce"
      borderRadius="24px"
      minScratchPercentage={60}
    >
      <div className="flex flex-col items-center justify-center text-center">
        <p className="text-8xl mb-2">🎁</p>
        <p className="text-2xl font-bold">You Won!</p>
        <p className="text-xl mt-1">$50 Gift Card</p>
      </div>
    </ScratchToReveal>
  );
}`,
      description: "Radial gradient prize reveal with bounce animation",
      preview: (
        <ScratchToReveal
          width={300}
          height={300}
          variant="radial"
          gradientColors={["#FF6B6B", "#FFD166", "#06D6A0"]}
          revealAnimation="bounce"
          borderRadius="24px"
          minScratchPercentage={60}
        >
          <div className="flex flex-col items-center justify-center text-center">
            <p className="text-8xl mb-2">🎁</p>
            <p className="text-2xl font-bold">You Won!</p>
            <p className="text-xl mt-1">$50 Gift Card</p>
          </div>
        </ScratchToReveal>
      ),
    },
    {
      code: `import ScratchToReveal from "@/components/ui/Scratch-To-Reveal";

export default function CircularScratch() {
  return (
    <ScratchToReveal
      width={300}
      height={300}
      variant="radial"
      gradientColors={["#8338EC", "#3A86FF", "#FF006E"]}
      revealAnimation="fade"
      borderRadius="50%"
      scratchRadius={40}
    >
      <div className="flex items-center justify-center">
        <p className="text-9xl">🏆</p>
      </div>
    </ScratchToReveal>
  );
}`,
      description: "Circular scratch card with fade animation",
      preview: (
        <ScratchToReveal
          width={300}
          height={300}
          variant="radial"
          gradientColors={["#8338EC", "#3A86FF", "#FF006E"]}
          revealAnimation="fade"
          borderRadius="50%"
          scratchRadius={40}
        >
          <div className="flex items-center justify-center">
            <p className="text-9xl">🏆</p>
          </div>
        </ScratchToReveal>
      ),
    },
    {
      code: `import ScratchToReveal from "@/components/ui/Scratch-To-Reveal";
import { useState } from "react";

export default function DiscountCode() {
  const [revealed, setRevealed] = useState(false);
  
  const handleComplete = () => {
    setRevealed(true);
    // Additional actions on completion
  };

  return (
    <ScratchToReveal
      width={300}
      height={300}
      variant="gradient"
      gradientColors={["#0891B2", "#0E7490", "#155E75"]}
      revealAnimation="spin"
      borderRadius="16px"
      minScratchPercentage={40}
      onComplete={handleComplete}
    >
      <div className="flex flex-col items-center justify-center text-center">
        <p className="text-lg font-medium text-gray-600">
          Your special code:
        </p>
        <p className="text-3xl font-bold mt-2 tracking-wider p-3 bg-gray-100 rounded-lg">
          FREE50OFF
        </p>
        <p className="mt-3 text-sm">Valid until May 31, 2025</p>
      </div>
    </ScratchToReveal>
  );
}`,
      description: "Discount code reveal with spin animation",
      preview: (
        <ScratchToReveal
          width={300}
          height={300}
          variant="gradient"
          gradientColors={["#0891B2", "#0E7490", "#155E75"]}
          revealAnimation="spin"
          borderRadius="16px"
          minScratchPercentage={40}
        >
          <div className="flex flex-col items-center justify-center text-center">
            <p className="text-lg font-medium text-gray-600">
              Your special code:
            </p>
            <p className="text-3xl font-bold mt-2 tracking-wider p-3 bg-gray-100 rounded-lg">
              FREE50OFF
            </p>
            <p className="mt-3 text-sm">Valid until May 31, 2025</p>
          </div>
        </ScratchToReveal>
      ),
    },
  ];

  return (
    <div className="">
      {/* Header */}
      <h1 className="text-4xl font-semibold mb-4">Scratch To Reveal</h1>
      <p className="text-muted-foreground dark:text-white mb-8">
        An interactive scratch card component that reveals content when
        scratched.
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
              onClick={() => handleCopy("npm i scratch-to-reveal-component")}
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
                  <ScratchToReveal
                    width={300}
                    height={300}
                    variant="gradient"
                    gradientColors={["#A97CF8", "#F38CB8", "#FDCC92"]}
                    revealAnimation="pop"
                  >
                    <div className="flex items-center justify-center">
                      <p className="text-9xl">🎉</p>
                    </div>
                  </ScratchToReveal>
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
                      {codeExamples[0].code}
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
              Import and use the ScratchToReveal component in your project.
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

        {/* Props Section */}
        <section>
          <h2 className="text-xl font-medium flex items-center gap-2 mb-4">
            <span className="text-muted-foreground dark:text-white">6:</span>
            Props Reference
          </h2>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-800">
                <tr>
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
                    width
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    number
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    required
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">
                    Width of the scratch card in pixels
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    height
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    number
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    required
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">
                    Height of the scratch card in pixels
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    minScratchPercentage
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    number
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    100
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">
                    Percentage of the card that needs to be scratched to trigger
                    completion
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    onComplete
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    function
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    undefined
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">
                    Callback function triggered when scratch is completed
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    variant
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    string
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    'gradient'
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">
                    Style of the scratch overlay: 'gradient', 'radial', 'solid',
                    'pattern'
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    gradientColors
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    array
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    ['#A97CF8', '#F38CB8', '#FDCC92']
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">
                    Array of colors for gradient overlays
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    scratchRadius
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    number
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    30
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">
                    Size of the scratch area when scratching
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    backgroundColor
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    string
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    '#f0f0f0'
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">
                    Background color of the component
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    revealAnimation
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    string
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    'pop'
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">
                    Animation on reveal: 'pop', 'fade', 'spin', 'bounce'
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    cursorSize
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    number
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    32
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">
                    Size of the scratch cursor in pixels
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    borderRadius
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    string
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    '24px'
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">
                    Border radius of the scratch card
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    showOverlayOnly
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    boolean
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                    true
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300">
                    When true, hides content until scratched
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ScratchToRevealDocs;
