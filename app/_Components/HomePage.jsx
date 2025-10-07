"use client";
// Fixed HMR issue with Boxes icon import
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/card";
import { SparklesCore } from "@/components/ui/sparkles";
import {
  ArrowRight,
  Star,
  Download,
  Users,
  Zap,
  Shield,
  Palette,
  Code2,
  Sparkles,
  CheckCircle,
  TrendingUp,
  Globe,
  Layers,
  Smartphone,
  Monitor,
  Tablet,
  Github,
  ExternalLink,
  Play,
  Copy,
  Heart,
  Award,
  Rocket,
  Terminal,
  BookOpen,
  Package,
} from "lucide-react";
import { Navbar } from "./Navbar";

export default function HomePage() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  // Stats animation
  const [stats, setStats] = useState({
    components: 0,
    downloads: 0,
    developers: 0,
    rating: 0,
  });

  const targetStats = {
    components: 50,
    downloads: 12500,
    developers: 2800,
    rating: 4.9,
  };

  useEffect(() => {
    setIsVisible(true);
    
    // Animate stats
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      
      setStats({
        components: Math.floor(targetStats.components * progress),
        downloads: Math.floor(targetStats.downloads * progress),
        developers: Math.floor(targetStats.developers * progress),
        rating: Math.min(targetStats.rating * progress, targetStats.rating),
      });

      if (step >= steps) {
        clearInterval(timer);
        setStats(targetStats);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  // Initialize theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("elementra-theme");
    if (savedTheme) {
      const shouldBeDark = savedTheme === "dark";
      setIsDarkMode(shouldBeDark);
      document.documentElement.classList.toggle("dark", shouldBeDark);
      return;
    }

    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    document.documentElement.classList.toggle("dark", newDarkMode);
    localStorage.setItem("elementra-theme", newDarkMode ? "dark" : "light");
  };

  const isHeroInView = useInView(heroRef, { once: true });
  const isFeaturesInView = useInView(featuresRef, { once: true });

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.4}
            maxSize={1.0}
            particleDensity={50}
            className="w-full h-full"
            particleColor={isDarkMode ? "#FB923C" : "#F97316"}
          />
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        
        {/* Hero Content */}
        <motion.div 
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          style={{ y }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              🚀 Production-Ready Components • Trusted by 2,800+ Developers
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Elementra UI
            </span>
            <br />
            <span className="text-foreground">
              Build <span className="text-primary">Beautiful UIs</span>
            </span>
            <br />
            <span className="text-muted-foreground text-3xl sm:text-4xl lg:text-5xl">
              Lightning Fast
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-3xl mx-auto text-lg sm:text-xl text-muted-foreground mb-12 leading-relaxed"
          >
            The modern React component library that developers love. 
            <span className="text-primary font-semibold"> 50+ production-ready components</span> with 
            TypeScript, accessibility, and stunning animations built right in.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Link href="/docs">
              <Button size="lg" className="group px-8 py-4 text-lg font-semibold bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            
            <Link href="https://github.com/waleedcodes/Elementra-Dev">
              <Button size="lg" variant="outline" className="px-8 py-4 text-lg font-semibold border-border hover:bg-muted">
                <Github className="mr-2 w-5 h-5" />
                View on GitHub
              </Button>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.8 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-2xl mx-auto"
          >
            <StatCard icon={Package} value={`${stats.components}+`} label="Components" />
            <StatCard icon={Download} value={`${(stats.downloads / 1000).toFixed(1)}K+`} label="Downloads" />
            <StatCard icon={Users} value={`${(stats.developers / 1000).toFixed(1)}K+`} label="Developers" />
            <StatCard icon={Star} value={stats.rating.toFixed(1)} label="Rating" />
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-primary rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-primary rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isFeaturesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Why Developers <span className="text-primary">Choose Elementra</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Built for modern development workflows with everything you need to create 
              production-ready applications faster than ever.
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Rocket className="w-6 h-6" />}
              title="Production Ready"
              description="Battle-tested components used by thousands of developers in production applications worldwide."
              delay={0.1}
              inView={isFeaturesInView}
            />
            <FeatureCard
              icon={<Shield className="w-6 h-6" />}
              title="Accessibility First"
              description="WCAG 2.1 compliant components with full keyboard navigation and screen reader support."
              delay={0.2}
              inView={isFeaturesInView}
            />
            <FeatureCard
              icon={<Zap className="w-6 h-6" />}
              title="Lightning Fast"
              description="Optimized for performance with tree-shaking, lazy loading, and minimal bundle impact."
              delay={0.3}
              inView={isFeaturesInView}
            />
            <FeatureCard
              icon={<Palette className="w-6 h-6" />}
              title="Fully Customizable"
              description="Powerful theming system with CSS variables, Tailwind integration, and design tokens."
              delay={0.4}
              inView={isFeaturesInView}
            />
            <FeatureCard
              icon={<Code2 className="w-6 h-6" />}
              title="TypeScript Native"
              description="Built with TypeScript from the ground up with comprehensive type definitions and IntelliSense."
              delay={0.5}
              inView={isFeaturesInView}
            />
            <FeatureCard
              icon={<Layers className="w-6 h-6" />}
              title="Copy & Paste"
              description="No complex installations. Simply copy the component code and paste it into your project."
              delay={0.6}
              inView={isFeaturesInView}
            />
          </div>
        </div>
      </section>

      {/* Developer Experience Section */}
      <section className="py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Built for <span className="text-primary">Developer Experience</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Every component is crafted with developer productivity in mind. 
                From comprehensive documentation to intuitive APIs, we make building UIs a joy.
              </p>

              <div className="space-y-6">
                <FeaturePoint
                  icon={<Terminal className="w-5 h-5" />}
                  title="CLI Tools"
                  description="Powerful CLI for scaffolding, component generation, and project setup."
                />
                <FeaturePoint
                  icon={<BookOpen className="w-5 h-5" />}
                  title="Rich Documentation"
                  description="Interactive examples, API references, and step-by-step guides."
                />
                <FeaturePoint
                  icon={<Heart className="w-5 h-5" />}
                  title="Community Driven"
                  description="Active community contributing components, themes, and improvements."
                />
              </div>

              <Link href="/docs" className="inline-block mt-8">
                <Button size="lg" className="group">
                  Explore Documentation
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>

            {/* Code Preview */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <CodePreview />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Responsive Design Section */}
      <section className="py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              <span className="text-primary">Responsive</span> by Design
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every component works flawlessly across all devices and screen sizes. 
              Mobile-first approach ensures perfect user experience everywhere.
            </p>
          </motion.div>

          {/* Device Mockups */}
          <div className="flex justify-center items-end gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Smartphone className="w-8 h-8 text-primary mx-auto mb-2" />
              <p className="text-sm text-muted-foreground">Mobile</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Tablet className="w-10 h-10 text-primary mx-auto mb-2" />
              <p className="text-sm text-muted-foreground">Tablet</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Monitor className="w-12 h-12 text-primary mx-auto mb-2" />
              <p className="text-sm text-muted-foreground">Desktop</p>
            </motion.div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ResponsiveFeature
              title="Mobile First"
              description="Designed for mobile devices and scaled up for larger screens."
              delay={0.1}
            />
            <ResponsiveFeature
              title="Flexible Grid"
              description="CSS Grid and Flexbox powered layouts that adapt to any screen."
              delay={0.2}
            />
            <ResponsiveFeature
              title="Touch Friendly"
              description="Optimized touch targets and gestures for mobile interactions."
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* Component Showcase */}
      <section className="py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Explore Our <span className="text-primary">Component Library</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From basic UI elements to complex interactive components, 
              find everything you need to build modern applications.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ComponentCard
              title="Form Components"
              description="Inputs, selects, checkboxes, and form validation components."
              icon={<Terminal className="w-6 h-6" />}
              href="/docs/Components/button"
              features={["Input Fields", "Form Validation", "Custom Styling"]}
              delay={0.1}
            />
            <ComponentCard
              title="Navigation"
              description="Headers, sidebars, breadcrumbs, and menu components."
              icon={<Globe className="w-6 h-6" />}
              href="/docs/Components/Modal"
              features={["Responsive Menus", "Breadcrumbs", "Tab Navigation"]}
              delay={0.2}
            />
            <ComponentCard
              title="Data Display"
              description="Tables, cards, lists, and data visualization components."
              icon={<Layers className="w-6 h-6" />}
              href="/docs/Components/Card"
              features={["Data Tables", "Card Layouts", "List Views"]}
              delay={0.3}
            />
            <ComponentCard
              title="Feedback"
              description="Alerts, toasts, modals, and notification components."
              icon={<Award className="w-6 h-6" />}
              href="/docs/Components/Alert"
              features={["Toast Messages", "Alert Dialogs", "Progress Bars"]}
              delay={0.4}
            />
            <ComponentCard
              title="Interactive"
              description="Buttons, sliders, toggles, and action components."
              icon={<Play className="w-6 h-6" />}
              href="/docs/Components/Switch"
              features={["Interactive Buttons", "Toggle Switches", "Sliders"]}
              delay={0.5}
            />
            <ComponentCard
              title="Advanced"
              description="Complex components like calendars, charts, and editors."
              icon={<Sparkles className="w-6 h-6" />}
              href="/docs/Components/Signature"
              features={["Date Pickers", "Rich Editors", "File Uploads"]}
              delay={0.6}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Link href="/docs">
              <Button size="lg" variant="outline">
                View All Components
                <ExternalLink className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-32 bg-gradient-to-br from-primary/10 via-secondary/5 to-primary/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Start Building Today
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Join thousands of developers who are already building amazing applications 
              with Elementra UI. Get started in less than 2 minutes.
            </p>

            {/* Installation Command */}
            <div className="bg-card border border-border rounded-lg p-6 mb-8 max-w-2xl mx-auto">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-muted-foreground">Quick Install</span>
                <Button size="sm" variant="ghost" className="h-8 px-2">
                  <Copy className="w-4 h-4" />
                </Button>
              </div>
              <code className="text-left block bg-muted p-4 rounded font-mono text-sm">
                npm install elementra-ui
              </code>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/docs">
                <Button size="lg" className="px-8 py-4 text-lg font-semibold">
                  Get Started Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              
              <Link href="/docs/Installation">
                <Button size="lg" variant="outline" className="px-8 py-4 text-lg font-semibold">
                  <BookOpen className="mr-2 w-5 h-5" />
                  Installation Guide
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="mt-16 flex flex-wrap items-center justify-center gap-8 opacity-60">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-sm">Production Ready</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-blue-500" />
                <span className="text-sm">Enterprise Grade</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-purple-500" />
                <span className="text-sm">Growing Community</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-red-500" />
                <span className="text-sm">Open Source</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// Component Definitions
function StatCard({ icon: Icon, value, label }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="text-center"
    >
      <Icon className="w-8 h-8 text-primary mx-auto mb-2" />
      <div className="text-2xl sm:text-3xl font-bold text-foreground mb-1">{value}</div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </motion.div>
  );
}

function FeatureCard({ icon, title, description, delay, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -5 }}
      className="group"
    >
      <Card className="p-8 h-full bg-card hover:bg-card/80 border-border hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-lg">
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
          <div className="text-primary">{icon}</div>
        </div>
        <h3 className="text-xl font-semibold mb-3 text-foreground">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </Card>
    </motion.div>
  );
}

function FeaturePoint({ icon, title, description }) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
        <div className="text-primary">{icon}</div>
      </div>
      <div>
        <h4 className="font-semibold mb-1 text-foreground">{title}</h4>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}

function CodePreview() {
  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden shadow-lg">
      <div className="bg-muted px-4 py-3 border-b border-border">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <span className="ml-4 text-sm font-mono text-muted-foreground">Button.tsx</span>
        </div>
      </div>
      <div className="p-6 font-mono text-sm bg-background">
        <div className="space-y-2">
          <div><span className="text-blue-400">import</span> <span className="text-green-400">{"{ Button }"}</span> <span className="text-blue-400">from</span> <span className="text-orange-400">'elementra-ui'</span></div>
          <div className="h-4"></div>
          <div><span className="text-purple-400">export function</span> <span className="text-yellow-400">MyComponent</span>() {"{"}</div>
          <div className="ml-4"><span className="text-blue-400">return</span> (</div>
          <div className="ml-8">{"<"}<span className="text-red-400">Button</span></div>
          <div className="ml-10"><span className="text-green-400">variant</span>=<span className="text-orange-400">"primary"</span></div>
          <div className="ml-10"><span className="text-green-400">size</span>=<span className="text-orange-400">"lg"</span></div>
          <div className="ml-8">{">"}</div>
          <div className="ml-10">Get Started</div>
          <div className="ml-8">{"</"}<span className="text-red-400">Button</span>{">"}</div>
          <div className="ml-4">)</div>
          <div>{"}"}</div>
        </div>
      </div>
    </div>
  );
}

function ResponsiveFeature({ title, description, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="text-center"
    >
      <h3 className="text-lg font-semibold mb-3 text-foreground">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </motion.div>
  );
}

function ComponentCard({ title, description, icon, href, features, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="group"
    >
      <Link href={href}>
        <Card className="p-6 h-full bg-card hover:bg-card/80 border-border hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-lg cursor-pointer">
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
            <div className="text-primary">{icon}</div>
          </div>
          <h3 className="text-xl font-semibold mb-2 text-foreground">{title}</h3>
          <p className="text-muted-foreground mb-4">{description}</p>
          
          <div className="space-y-2 mb-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">{feature}</span>
              </div>
            ))}
          </div>
          
          <div className="flex items-center text-primary font-medium">
            <span>Explore Components</span>
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </Card>
      </Link>
    </motion.div>
  );
}
