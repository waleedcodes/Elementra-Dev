"use client";
import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import {
  Sparkles,
  Star,
  ArrowRight, 
  CheckCircle,
  Package,
  Zap,
  Code,
  Palette,
  Shield,
  Globe,
} from "lucide-react";

const Introduction = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const features = [
    {
      icon: Code,
      title: "Developer Friendly",
      description: "Intuitive API design with comprehensive TypeScript support",
    },
    {
      icon: Palette,
      title: "Fully Customizable",
      description: "Tailor every component to match your brand identity",
    },
    {
      icon: Zap,
      title: "Performance First",
      description: "Optimized bundle sizes without compromising functionality",
    },
    {
      icon: Shield,
      title: "Production Ready",
      description: "Battle-tested components used by thousands of developers",
    },
    {
      icon: Globe,
      title: "Accessibility Built-in",
      description: "WCAG compliant components that work for everyone",
    },
    {
      icon: Sparkles,
      title: "Modern Design",
      description: "Beautiful defaults with dark mode and theming support",
    },
  ];

  const benefits = [
    "50+ React Components",
    "TypeScript Support",
    "Dark Mode Ready",
    "Fully Responsive",
    "Tree-shakeable",
    "Active Community",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen bg-background">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
      >
        {/* Hero Section */}
        <motion.div variants={itemVariants} className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-accent/10 border border-accent/20"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-accent-foreground dark:text-white">
              Production-Ready Component Library
            </span>
          </motion.div>

          <motion.h1
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-foreground text-transparent bg-clip-text"
            variants={itemVariants}
          >
            Elementra UI
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Build stunning interfaces faster with our comprehensive library of
            beautifully crafted, accessible React components
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold text-lg shadow-lg shadow-primary/25 transition-all flex items-center gap-2"
            >
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.a
              href="https://www.npmjs.com/package/elementra-ui"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground rounded-lg font-semibold text-lg border border-border transition-all"
            >
              View on npm
            </motion.a>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center items-center gap-8 mt-16 text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <Package className="w-5 h-5 text-primary" />
              <span className="font-semibold text-foreground">
                50+
              </span>{" "}
              Components
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-secondary" />
              <span className="font-semibold text-foreground">
                4.9/5
              </span>{" "}
              Rating
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-accent" />
              <span className="font-semibold text-foreground">
                12kb
              </span>{" "}
              Avg. Size
            </div>
          </motion.div>
        </motion.div>

        {/* Features Grid */}
        <motion.div variants={itemVariants} className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Everything you need to build modern UIs
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From simple buttons to complex data tables, Elementra UI provides
              the building blocks for your next project
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="group p-8 bg-card rounded-2xl border border-border shadow-sm hover:shadow-xl hover:border-primary/30 transition-all"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Benefits Section */}
        <motion.div variants={itemVariants} className="mb-32">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Built for modern development
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-3 p-4 bg-card rounded-xl border border-border hover:border-primary/30 transition-all"
              >
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="font-medium text-foreground">
                  {benefit}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={itemVariants}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary/80 p-12 text-center"
        >

          <div className="relative">
            <h3 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
              Start building today
            </h3>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Join thousands of developers who trust Elementra UI for their
              production applications
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-background text-foreground rounded-lg font-semibold text-lg shadow-xl hover:shadow-2xl transition-all flex items-center gap-2"
              >
                Get Started Free
                <ArrowRight className="w-5 h-5" />
              </motion.button>

              <motion.a
                href="https://elementra-ui.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-primary/20 hover:bg-primary/30 text-primary-foreground rounded-lg font-semibold text-lg border-2 border-primary-foreground/20 transition-all"
              >
                View Documentation
              </motion.a>
            </div>

            <p className="mt-8 text-primary-foreground/70 text-sm">
              npm install elementra-ui
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Introduction;