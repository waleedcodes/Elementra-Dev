"use client";
import React, { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import {
  Sparkles,
  Rocket,
  Layers,
  Code,
  Zap,
  Palette,
  Star,
  ArrowRight,
  CheckCircle,
  Package,
  Cpu,
} from "lucide-react";

const GradientBackground = () => (
  <div className="absolute inset-0 overflow-hidden z-0">
    <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-gradient-to-r from-blue-200/40 via-purple-200/40 to-pink-200/20 animate-slow-spin origin-center blur-3xl"></div>
    <div className="absolute -bottom-1/2 -right-1/2 w-[200%] h-[200%] bg-gradient-to-l from-green-200/40 via-teal-200/20 to-cyan-200/20 animate-slow-spin-reverse origin-center blur-3xl"></div>
    <div className="absolute inset-0 bg-white/90 backdrop-blur-sm"></div>
  </div>
);
const codeString = `
import { Button } from '@elementra/ui';

function App() {
  return (
    <Button variant="gradient" onClick={() => alert('Hello!')}>
      Click Me
    </Button>
  );
}

export default App;
  `;
const FloatingParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden z-1">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-blue-500/20"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            y: [null, Math.random() * -500],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

const AnimatedIcon = ({ icon: Icon, color, className }) => (
  <motion.div
    initial={{ scale: 0.8, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    whileHover={{
      scale: 1.1,
      rotate: 15,
      transition: { duration: 0.3 },
    }}
    className={`p-3 rounded-full ${color} bg-opacity-20 shadow-lg ${className}`}
  >
    <Icon className="w-8 h-8" />
  </motion.div>
);

const CodeSnippet = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.3 }}
    className="bg-gray-900 rounded-xl p-6 shadow-lg border border-gray-800 overflow-hidden"
  >
    {/* File Info */}
    <div className="flex items-center mb-3 space-x-2">
      <div className="w-3 h-3 rounded-full bg-red-500"></div>
      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
      <div className="w-3 h-3 rounded-full bg-green-500"></div>
      <span className="text-gray-400 text-xs ml-2">App.jsx</span>
    </div>

    {/* Code Block */}
    <SyntaxHighlighter
      language="javascript"
      style={dracula}
      className="rounded-lg text-sm overflow-x-auto"
    >
      {codeString}
    </SyntaxHighlighter>
  </motion.div>
);

const Introduction = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const features = [
    {
      icon: Rocket,
      title: "Lightning Fast",
      description: "Optimized performance with minimal overhead",
      color: "bg-blue-500",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Layers,
      title: "Fully Customizable",
      description: "Adapt components to your unique design",
      color: "bg-purple-500",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Code,
      title: "Developer Friendly",
      description: "Intuitive, copy-paste component system",
      color: "bg-green-500",
      gradient: "from-green-500 to-teal-500",
    },
    {
      icon: Zap,
      title: "Accessible",
      description: "ARIA compliant and keyboard navigable",
      color: "bg-amber-500",
      gradient: "from-amber-500 to-orange-500",
    },
  ];

  const benefits = [
    "Responsive out of the box",
    "Dark mode support",
    "TypeScript ready",
    "Themeable design system",
    "Optimized bundle size",
    "Regular updates",
  ];

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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <div className="w-full">
      <div className="relative min-h-screen text-gray-800 overflow-hidden w-full">
        <GradientBackground />
        <FloatingParticles />

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="relative z-10 mx-auto py-16 md:py-24 w-full px-4 md:px-8"
        >
          {/* Hero Section */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4"
            >
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium">
                <Sparkles className="w-4 h-4 mr-2" />
                Next-Gen UI Library
              </span>
            </motion.div>

            <motion.h1
              className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 text-transparent bg-clip-text"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 100,
                delay: 0.2,
              }}
            >
              Elementra UI
            </motion.h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-600 mb-10">
              Revolutionize your UI development with modular, cutting-edge
              components that adapt to your vision.
            </p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-full text-lg font-medium flex items-center justify-center space-x-2 shadow-lg hover:shadow-purple-500/30 transition-all"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gray-100 text-gray-800 px-8 py-3 rounded-full text-lg font-medium border border-gray-200 hover:bg-gray-200 transition-all"
              >
                <span>View Components</span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Interactive Features Showcase */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            {/* Features List */}
            <motion.div variants={itemVariants} className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02, x: 5 }}
                  onClick={() => setActiveFeature(index)}
                  className={`
                  p-5 rounded-2xl cursor-pointer transition-all duration-300 backdrop-blur-sm
                  ${
                    activeFeature === index
                      ? `bg-gradient-to-r ${feature.gradient} text-white shadow-lg`
                      : "bg-gray-100/80 border border-gray-200 text-gray-700 hover:bg-gray-200/80"
                  }
                `}
                >
                  <div className="flex items-center space-x-4">
                    <AnimatedIcon icon={feature.icon} color={feature.color} />
                    <div>
                      <h3 className="text-xl font-medium">{feature.title}</h3>
                      <p className="text-sm opacity-80">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Animated Showcase */}
            <motion.div
              variants={itemVariants}
              className="bg-white/80 rounded-3xl p-4 backdrop-blur-lg border border-gray-200 shadow-xl"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFeature}
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -20 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-6 items-center my-3">
                    <AnimatedIcon
                      icon={features[activeFeature].icon}
                      color={features[activeFeature].color}
                      className="w-24 h-24 mx-auto flex justify-center items-center"
                    />
                  </div>
                  <h3 className="text-3xl font-bold mb-4 text-gray-800">
                    {features[activeFeature].title}
                  </h3>
                  <p className="text-gray-600 max-w-md mx-auto mb-6">
                    {features[activeFeature].description}
                  </p>

                  <div className="pt-5">
                    <CodeSnippet />
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Benefits Section */}
          <motion.div variants={itemVariants} className="lg:p-20 xl:py-40">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-gray-800">
              Why Choose <span className="text-blue-600">Elementra UI</span>?
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-4 flex items-center space-x-3 shadow-sm"
                >
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-3 gap-8 mb-20"
          >
            {[
              {
                icon: Package,
                value: "50+",
                label: "Components",
                color: "text-blue-600",
              },
              {
                icon: Star,
                value: "4.9/5",
                label: "User Rating",
                color: "text-yellow-600",
              },
              {
                icon: Cpu,
                value: "12kb",
                label: "Avg. Bundle Size",
                color: "text-green-600",
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-6 text-center shadow-sm"
              >
                <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-3`} />
                <div className="text-4xl font-bold mb-1 text-gray-800">
                  {stat.value}
                </div>
                <div className="text-gray-500">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="text-center bg-gradient-to-r from-blue-50 to-purple-50 backdrop-blur-md rounded-3xl p-10 border border-gray-200 shadow-lg"
          >
            <h3 className="text-3xl font-bold mb-4 text-gray-800">
              Ready to Transform Your UI?
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of developers building beautiful interfaces with
              Elementra UI.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-10 py-4 rounded-full text-lg font-bold flex items-center justify-center mx-auto space-x-3 shadow-xl hover:shadow-purple-500/30 transition-all"
            >
              <span>Get Started Today</span>
              <ArrowRight className="w-6 h-6 ml-2" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Introduction;
