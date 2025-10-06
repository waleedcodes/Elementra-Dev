"use client";
import { useState, useRef, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Star,
  ArrowRight,
  CheckCircle,
  Package,
  Cpu,
} from "lucide-react";

const GradientBackground = () => (
  <div className="absolute inset-0 overflow-hidden z-0">
    <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-gradient-to-r from-primary/20 via-primary/30 to-primary/10 animate-slow-spin origin-center blur-3xl"></div>
    <div className="absolute -bottom-1/2 -right-1/2 w-[200%] h-[200%] bg-gradient-to-l from-primary/20 via-primary/10 to-primary/15 animate-slow-spin-reverse origin-center blur-3xl"></div>
    <div className="absolute inset-0 bg-white/90 backdrop-blur-sm"></div>
  </div>
);

const FloatingParticles = () => {
  const [dimensions, setDimensions] = useState({ width: 1000, height: 800 });

  useEffect(() => {
    // Only access window in useEffect (client-side)
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden z-1">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-primary/20"
          initial={{
            x: Math.random() * dimensions.width,
            y: Math.random() * dimensions.height,
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            y: [null, Math.random() * -500],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};



const Introduction = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });


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
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-primary to-primary/80 text-primary-foreground text-sm font-medium">
                <Sparkles className="w-4 h-4 mr-2" />
                Next-Gen UI Library
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-primary/60 text-transparent bg-clip-text"
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
            <p className="text-lg md:text-2xl max-w-3xl mx-auto text-gray-600 mb-10">
              Revolutionize your UI development with modular, cutting-edge
              components that adapt to your vision.
            </p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 mb-12"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-8 py-3 rounded-full text-lg font-medium flex items-center justify-center space-x-2 shadow-lg hover:shadow-primary/30 transition-all"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-muted text-muted-foreground px-8 py-3 rounded-full text-lg font-medium border border-border hover:bg-muted/80 transition-all"
              >
                <span>View Components</span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Interactive Features Showcase */}
         

          {/* Benefits Section */}
          <motion.div
            variants={itemVariants}
            className="p-4 sm:p-8 lg:p-20 xl:py-40"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-foreground">
              Why Choose <span className="text-primary">Elementra UI</span>?
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-card/80 backdrop-blur-sm border border-border rounded-xl p-4 flex items-center space-x-3 shadow-sm"
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 mb-12 md:mb-20"
          >
            {[
              {
                icon: Package,
                value: "50+",
                label: "Components",
                color: "text-primary",
              },
              {
                icon: Star,
                value: "4.9/5",
                label: "User Rating",
                color: "text-primary",
              },
              {
                icon: Cpu,
                value: "12kb",
                label: "Avg. Bundle Size",
                color: "text-primary",
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-card/80 backdrop-blur-sm border border-border rounded-xl p-6 text-center shadow-sm"
              >
                <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-3`} />
                <div className="text-4xl font-bold mb-1 text-foreground">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="text-center bg-gradient-to-r from-primary/5 to-primary/10 backdrop-blur-md rounded-3xl p-6 sm:p-10 border border-border shadow-lg"
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-foreground">
              Ready to Transform Your UI?
            </h3>
            <p className="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto">
              Join thousands of developers building beautiful interfaces with
              Elementra UI.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-10 py-4 rounded-full text-lg font-bold flex items-center justify-center mx-auto space-x-3 shadow-xl hover:shadow-primary/30 transition-all"
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
