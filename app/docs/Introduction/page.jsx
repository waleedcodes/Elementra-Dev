"use client";
import React from "react";
import { motion } from "framer-motion";

const Introduction = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5 },
    },
    hover: {
      scale: 1.02,
      transition: { duration: 0.2 },
    },
  };

  return (
    <motion.div
      className="container px-4 py-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div variants={itemVariants}>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 text-transparent bg-clip-text">
          Elementra UI
        </h1>
        <p className="text-lg text-muted-foreground dark:text-white mb-12">
          Beautifully crafted components for modern UIs. Customizable.
          Accessible. Lightweight.
        </p>
      </motion.div>

      <motion.section className="mb-16" variants={itemVariants}>
        <h2 className="text-2xl md:text-3xl font-medium mb-6">What is Elementra UI?</h2>
        <p className="text-muted-foreground dark:text-white leading-relaxed text-lg">
          Elementra UI is a collection of reusable components that you can copy
          and paste into your projects. It's not a traditional component library
          — you don't install it via npm or manage it as a dependency. Instead,
          it's a toolbox of building blocks designed to help you craft
          responsive, accessible, and visually stunning UIs with ease.
        </p>
      </motion.section>

      <motion.section className="mb-16" variants={itemVariants}>
        <h2 className="text-2xl md:text-3xl font-medium mb-8">
          What makes Elementra UI unique?
        </h2>
        <div className="grid gap-6">
          <motion.div
            className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-950/30 dark:to-blue-950/30 p-8 rounded-xl border border-purple-100 dark:border-purple-900 transition-all"
            variants={cardVariants}
            whileHover="hover"
          >
            <h3 className="text-xl md:text-2xl font-medium mb-3 bg-gradient-to-r from-purple-600 to-blue-600 inline-block text-transparent bg-clip-text">
              Not Just Another Library
            </h3>
            <p className="text-muted-foreground dark:text-white text-lg">
              Elementra UI isn't distributed through npm. You pick the
              components you need, copy the code, and adapt it to your project.
            </p>
          </motion.div>

          <motion.div
            className="bg-gradient-to-r from-pink-50 to-orange-50 dark:from-pink-950/30 dark:to-orange-950/30 p-8 rounded-xl border border-pink-100 dark:border-pink-900 transition-all"
            variants={cardVariants}
            whileHover="hover"
          >
            <h3 className="text-xl md:text-2xl font-medium mb-3 bg-gradient-to-r from-pink-600 to-orange-600 inline-block text-transparent bg-clip-text">
              Built for Customization
            </h3>
            <p className="text-muted-foreground dark:text-white text-lg">
              The components are entirely yours — modify them to fit your design
              system, branding, or unique project requirements.
            </p>
          </motion.div>

          <motion.div
            className="bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-950/30 dark:to-teal-950/30 p-8 rounded-xl border border-green-100 dark:border-green-900 transition-all"
            variants={cardVariants}
            whileHover="hover"
          >
            <h3 className="text-xl md:text-2xl font-medium mb-3 bg-gradient-to-r from-green-600 to-teal-600 inline-block text-transparent bg-clip-text">
              Powered by Modern Tools
            </h3>
            <p className="text-muted-foreground dark:text-white text-lg">
              Each component is built with React.js, Tailwind CSS, and Framer
              Motion, ensuring they are lightweight, performant, and easy to
              integrate.
            </p>
          </motion.div>
        </div>
      </motion.section>

      <motion.section className="mb-16" variants={itemVariants}>
        <h2 className="text-2xl md:text-3xl font-medium mb-6">How to Use Elementra UI</h2>
        <ol className="list-decimal list-inside space-y-4 text-lg text-muted-foreground dark:text-white">
          <li className="pl-2">
            Browse the collection and select the components you need.
          </li>
          <li className="pl-2">Copy the code directly into your project.</li>
          <li className="pl-2">Customize it to match your project's needs.</li>
        </ol>
      </motion.section>

      <motion.section variants={itemVariants}>
        <h2 className="text-2xl md:text-3xl font-medium mb-8">Why Choose Elementra UI?</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          <motion.div
            className="p-6 rounded-lg border bg-white/50 dark:bg-black/20 backdrop-blur-sm"
            variants={cardVariants}
            whileHover="hover"
          >
            <h3 className="text-xl font-medium mb-3">Design Freedom</h3>
            <p className="text-muted-foreground dark:text-white">
              Full access to code for complete customization.
            </p>
          </motion.div>

          <motion.div
            className="p-6 rounded-lg border bg-white/50 dark:bg-black/20 backdrop-blur-sm"
            variants={cardVariants}
            whileHover="hover"
          >
            <h3 className="text-xl font-medium mb-3">Accessibility</h3>
            <p className="text-muted-foreground dark:text-white">
              Components are built to meet modern accessibility standards.
            </p>
          </motion.div>

          <motion.div
            className="p-6 rounded-lg border bg-white/50 dark:bg-black/20 backdrop-blur-sm"
            variants={cardVariants}
            whileHover="hover"
          >
            <h3 className="text-xl font-medium mb-3">Efficiency</h3>
            <p className="text-muted-foreground dark:text-white">
              Streamline your workflow without adding unnecessary dependencies.
            </p>
          </motion.div>

          <motion.div
            className="p-6 rounded-lg border bg-white/50 dark:bg-black/20 backdrop-blur-sm"
            variants={cardVariants}
            whileHover="hover"
          >
            <h3 className="text-xl font-medium mb-3">Reference Material</h3>
            <p className="text-muted-foreground dark:text-white">
              Use it as a foundation to build your own component libraries.
            </p>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default Introduction;
