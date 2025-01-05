"use client";
import React, { useState } from "react";
import { Copy } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const HomeCardComp = () => {
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
    <div className="min-h-screen bg-gradient-to-r from-[#0f172a] to-[#334155] py-20">
      <motion.div
        className="container mx-auto p-4 sm:p-8"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="grid lg:grid-cols-2 gap-6 md:gap-12 items-center">
          <Tabs
            defaultValue="preview"
            className="w-full backdrop-blur-lg bg-white/5 rounded-xl p-4 sm:p-6"
          >
            <div className="flex items-center justify-between mb-4 sm:mb-6">
              <TabsList className="grid w-full sm:w-[200px] grid-cols-2 bg-gray-800">
                <TabsTrigger
                  value="preview"
                  className="font-medium data-[state=active]:bg-purple-500 data-[state=active]:text-white"
                >
                  Preview
                </TabsTrigger>
                <TabsTrigger
                  value="code"
                  className="font-medium data-[state=active]:bg-purple-500 data-[state=active]:text-white"
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
              <div className="rounded-xl border border-gray-700 bg-gray-800/50 p-4 sm:p-8 min-h-[500px] flex items-center justify-center backdrop-blur-sm">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="w-full max-w-lg bg-gray-800 border-gray-700 shadow-xl md:p-4 p-2">
                    <CardHeader className="space-y-2">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        <CardTitle className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text text-transparent">
                          Energy Drink
                        </CardTitle>
                      </motion.div>
                      <CardDescription className="text-gray-400">
                        Experience the power of natural energy with our premium
                        blend
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-4">
                      <motion.div
                        className="relative overflow-hidden rounded-lg group"
                        whileHover={{ scale: 1.02 }}
                      >
                        <img
                          src="https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60x"
                          alt="Energy Drink"
                          className="w-full h-60 sm:h-80 object-cover rounded-lg"
                        />
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-t from-pink-400/50 to-transparent"
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      </motion.div>
                    </CardContent>
                    <CardFooter className="flex justify-between items-center p-4 sm:p-6">
                      <motion.span
                        className="font-bold text-2xl sm:text-3xl bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent"
                        whileHover={{ scale: 1.1 }}
                      >
                        $2.99
                      </motion.span>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button className="bg-gradient-to-r from-pink-400 to-purple-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold px-4 sm:px-6">
                          Buy Now
                        </Button>
                      </motion.div>
                    </CardFooter>
                  </Card>
                </motion.div>
              </div>
            </TabsContent>

            <TabsContent value="code" className="mt-0">
              <div className="rounded-xl bg-gray-900 p-4 sm:p-6 overflow-hidden border border-gray-700">
                <pre className="text-sm text-gray-300 font-mono overflow-x-auto">
                  <code className="whitespace-pre-wrap">
                    {`const Card = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card className="max-w-md bg-gray-800 border-gray-700">
        <CardHeader>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <CardTitle className="text-3xl font-bold bg-gradient-to-r 
              from-pink-400 to-purple-500 bg-clip-text text-transparent">
              Energy Drink
            </CardTitle>
          </motion.div>
          <CardDescription className="text-gray-400">
            Experience the power of natural energy
          </CardDescription>
        </CardHeader>
        <CardContent className="p-4">
          <motion.div 
            className="relative overflow-hidden rounded-lg"
            whileHover={{ scale: 1.02 }}
          >
            <img
              src="your-image-url"
              alt="Energy Drink"
              className="w-full h-80 object-cover rounded-lg"
            />
            <motion.div 
              className="absolute inset-0 bg-gradient-to-t 
                from-pink-400/50 to-transparent"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            />
          </motion.div>
        </CardContent>
        <CardFooter className="flex justify-between items-center p-6">
          <motion.span 
            className="font-bold text-3xl bg-gradient-to-r 
              from-pink-400 to-purple-500 bg-clip-text text-transparent"
            whileHover={{ scale: 1.1 }}
          >
            $2.99
          </motion.span>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button className="bg-gradient-to-r from-pink-400 
              to-purple-500 hover:from-purple-600 hover:to-pink-600">
              Buy Now
            </Button>
          </motion.div>
        </CardFooter>
      </Card>
    </motion.div>
  );
};`}
                  </code>
                </pre>
              </div>
            </TabsContent>
          </Tabs>

          <motion.div
            className="space-y-8 p-4 sm:p-8"
            variants={containerVariants}
          >
            <div className="pb-4">
              <motion.h1
                className="md:text-6xl text-3xl font-semibold pb-5 text-white md:leading-tight"
                variants={itemVariants}
              >
                Apply This Code on Our Card Component
              </motion.h1>
              <motion.p
                className="text-gray-300 text-lg"
                variants={itemVariants}
              >
                A stunning card component featuring:
              </motion.p>
            </div>

            <div className="md:space-y-6 space-y-4">
              {[
                "Header with a captivating title for user engagement",
                "Detailed description highlighting the card's features",
                "Content area showcasing relevant information and visuals",
                "Footer with action buttons for user interaction",
              ].map((text, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4"
                  variants={itemVariants}
                >
                  <div className="w-2 h-2 mt-2 rounded-full bg-gradient-to-r from-pink-400 to-purple-500" />
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

export default HomeCardComp;
