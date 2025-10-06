"use client";
import React, { useState } from "react";
import { Copy } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const HomeButtonComp = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-primary to-primary/80 py-20">
      <motion.div
        className="container mx-auto p-4 sm:p-8"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="grid lg:grid-cols-2 gap-6 md:gap-12 items-center">
          <Tabs
            defaultValue="preview"
            className="w-full backdrop-blur-lg bg-white/5 rounded-xl p-4 sm:p-6  md:order-2 order-1"
          >
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <TabsList className="grid w-full sm:w-[200px] grid-cols-2 bg-gray-800">
                <TabsTrigger
                  value="preview"
                  className="font-medium data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  Preview
                </TabsTrigger>
                <TabsTrigger
                  value="code"
                  className="font-medium data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  Code
                </TabsTrigger>
              </TabsList>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handleCopy}
                  className="relative bg-gray-800 border-gray-700 hover:bg-gray-700"
                >
                  <Copy
                    className={`h-4 w-4 ${
                      copied ? "text-green-500" : "text-gray-300"
                    }`}
                  />
                  {copied && (
                    <motion.span
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: -32 }}
                      exit={{ opacity: 0 }}
                      className="absolute text-xs bg-green-500 text-white px-2 py-1 rounded"
                    >
                      Copied!
                    </motion.span>
                  )}
                </Button>
              </motion.div>
            </div>

            <TabsContent value="preview" className="mt-0">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="rounded-xl border border-gray-700 bg-gray-800/50 p-4 sm:p-8 min-h-[200px] flex items-center justify-center backdrop-blur-sm"
              >
                <Button variant="default">Primary Button</Button>
              </motion.div>
            </TabsContent>

            <TabsContent value="code" className="mt-0">
              <div className="rounded-xl bg-gray-900 p-4 sm:p-6 overflow-hidden border border-gray-700">
                <pre className="text-sm text-gray-300 font-mono overflow-x-auto">
                  <code className="whitespace-pre-wrap">
                    {`const ButtonDemo = () => {
  return (
    <Button variant="default">Primary Button</Button>
  );
};`}
                  </code>
                </pre>
              </div>
            </TabsContent>
          </Tabs>

          <motion.div
            className="space-y-8 p-4 sm:p-8 md:order-1 order-2"
            variants={containerVariants}
          >
            <div className="pb-4">
              <motion.h1
                className="md:text-6xl text-3xl font-semibold pb-5 text-white md:leading-tight"
                variants={itemVariants}
              >
                Button Component Implementation
              </motion.h1>
              <motion.p
                className="text-gray-300 text-lg"
                variants={itemVariants}
              >
                A versatile button component featuring:
              </motion.p>
            </div>

            <div className="md:space-y-6 space-y-4">
              {[
                "Customizable styles for different use cases",
                "Supports various sizes and variants",
                "Click effects for enhanced user feedback",
                "Built with accessibility in mind",
              ].map((text, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4"
                  variants={itemVariants}
                >
                  <div className="w-2 h-2 mt-2 rounded-full bg-gradient-to-r from-primary to-primary/80" />
                  <p className="text-gray-300 text-sm md:text-[1rem]">{text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default HomeButtonComp;
