"use client";

import React from "react";
import { Copy, CopyIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "framer-motion";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/Accordion";

const AccordionComponent = () => {
  const [activeTab, setActiveTab] = React.useState("overview");
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "examples", label: "Examples" },
    { id: "features", label: "Features" },
    { id: "api", label: "API" },
  ];

  if (!mounted) {
    return null;
  }

  const handleCopy = (text) => {
    if (text) {
      navigator.clipboard.writeText(text);
      toast("Copied to clipboard", { type: "success" });
    }
  };

  const codeExamples = [
    {
      title: "Basic Accordion",
      code: `import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/Accordion";

export default function BasicAccordion() {
  return (
    <Accordion type="single" defaultValue="item-1">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other components' aesthetic.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}`,
      description: "A simple accordion with single item expansion.",
    },
    {
      title: "Multiple Accordion",
      code: `import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/Accordion";

export default function MultipleAccordion() {
  return (
    <Accordion type="multiple" defaultValue={["item-1", "item-2"]}>
      <AccordionItem value="item-1">
        <AccordionTrigger>Can multiple items be open?</AccordionTrigger>
        <AccordionContent>
          Yes. Set type="multiple" to allow multiple items to be open simultaneously.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it customizable?</AccordionTrigger>
        <AccordionContent>
          Absolutely. You can customize the appearance and behavior.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Does it support animations?</AccordionTrigger>
        <AccordionContent>
          Yes. Smooth animations are built-in for expand/collapse actions.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}`,
      description: "Multiple items can be expanded at the same time.",
    },
    {
      title: "FAQ Accordion",
      code: `import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/Accordion";

export default function FAQAccordion() {
  return (
    <Accordion type="single" className="w-full">
      <AccordionItem value="faq-1">
        <AccordionTrigger>What is Elementra UI?</AccordionTrigger>
        <AccordionContent>
          Elementra UI is a modern React component library built with Tailwind CSS 
          and designed for building beautiful, accessible user interfaces quickly.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="faq-2">
        <AccordionTrigger>How do I install it?</AccordionTrigger>
        <AccordionContent>
          You can install Elementra UI via npm: <code>npm install elementra-ui</code>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="faq-3">
        <AccordionTrigger>Is it free to use?</AccordionTrigger>
        <AccordionContent>
          Yes! Elementra UI is open source and completely free to use in your projects.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}`,
      description: "Perfect for FAQ sections and help documentation.",
    },
    {
      title: "Controlled Accordion",
      code: `import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/Accordion";
import { useState } from "react";

export default function ControlledAccordion() {
  const [value, setValue] = useState("item-1");

  return (
    <Accordion 
      type="single" 
      value={value} 
      onValueChange={setValue}
      collapsible
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>Controlled Item 1</AccordionTrigger>
        <AccordionContent>
          This accordion is controlled by external state.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Controlled Item 2</AccordionTrigger>
        <AccordionContent>
          You can control which item is open programmatically.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}`,
      description:
        "Control the accordion state externally with value and onValueChange.",
    },
    {
      title: "Custom Styled Accordion",
      code: `import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/Accordion";

export default function CustomStyledAccordion() {
  return (
    <Accordion type="single" className="w-full max-w-2xl mx-auto">
      <AccordionItem value="item-1" className="border-2 border-blue-200 rounded-xl mb-4 overflow-hidden">
        <AccordionTrigger className="bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 px-6 py-4 text-blue-900 font-semibold">
          🎨 Custom Design
        </AccordionTrigger>
        <AccordionContent className="bg-white px-6 py-4 text-gray-700">
          This accordion has custom styling with gradients, colors, and spacing.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" className="border-2 border-green-200 rounded-xl mb-4 overflow-hidden">
        <AccordionTrigger className="bg-gradient-to-r from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 px-6 py-4 text-green-900 font-semibold">
          🚀 Performance Optimized
        </AccordionTrigger>
        <AccordionContent className="bg-white px-6 py-4 text-gray-700">
          Built with performance in mind, using React best practices.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}`,
      description: "Accordion with custom styling, gradients, and colors.",
    },
    {
      title: "Nested Accordion",
      code: `import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/Accordion";

export default function NestedAccordion() {
  return (
    <Accordion type="single" defaultValue="parent-1">
      <AccordionItem value="parent-1">
        <AccordionTrigger>📁 Frontend Technologies</AccordionTrigger>
        <AccordionContent>
          <Accordion type="single" className="ml-4">
            <AccordionItem value="react">
              <AccordionTrigger className="text-sm">⚛️ React</AccordionTrigger>
              <AccordionContent className="text-sm">
                A JavaScript library for building user interfaces.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="vue">
              <AccordionTrigger className="text-sm">💚 Vue.js</AccordionTrigger>
              <AccordionContent className="text-sm">
                The Progressive JavaScript Framework.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="parent-2">
        <AccordionTrigger>🔧 Backend Technologies</AccordionTrigger>
        <AccordionContent>
          <Accordion type="single" className="ml-4">
            <AccordionItem value="node">
              <AccordionTrigger className="text-sm">🟢 Node.js</AccordionTrigger>
              <AccordionContent className="text-sm">
                JavaScript runtime built on Chrome's V8 JavaScript engine.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="python">
              <AccordionTrigger className="text-sm">🐍 Python</AccordionTrigger>
              <AccordionContent className="text-sm">
                High-level programming language for general-purpose programming.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}`,
      description: "Nested accordions for hierarchical content organization.",
    },
    {
      title: "Accordion with Icons & Rich Content",
      code: `import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/Accordion";

export default function RichContentAccordion() {
  return (
    <Accordion type="multiple" defaultValue={["features", "pricing"]}>
      <AccordionItem value="features">
        <AccordionTrigger className="text-lg font-bold text-purple-800">
          ✨ Amazing Features
        </AccordionTrigger>
        <AccordionContent>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <span className="text-green-500 text-xl">✅</span>
              <div>
                <h4 className="font-semibold">Fully Accessible</h4>
                <p className="text-gray-600">WCAG 2.1 AA compliant with full keyboard navigation</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-blue-500 text-xl">🎨</span>
              <div>
                <h4 className="font-semibold">Customizable</h4>
                <p className="text-gray-600">Easy to style with Tailwind CSS or custom CSS</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-orange-500 text-xl">⚡</span>
              <div>
                <h4 className="font-semibold">High Performance</h4>
                <p className="text-gray-600">Optimized for speed and smooth animations</p>
              </div>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
      
      <AccordionItem value="pricing">
        <AccordionTrigger className="text-lg font-bold text-green-800">
          💰 Pricing Plans
        </AccordionTrigger>
        <AccordionContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-bold text-xl text-blue-600">Free</h3>
              <p className="text-3xl font-bold">$0<span className="text-sm font-normal">/month</span></p>
              <ul className="mt-3 space-y-1">
                <li>✅ Basic components</li>
                <li>✅ Community support</li>
                <li>❌ Advanced features</li>
              </ul>
            </div>
            <div className="border border-blue-200 rounded-lg p-4 bg-blue-50">
              <h3 className="font-bold text-xl text-blue-600">Pro</h3>
              <p className="text-3xl font-bold">$29<span className="text-sm font-normal">/month</span></p>
              <ul className="mt-3 space-y-1">
                <li>✅ All components</li>
                <li>✅ Priority support</li>
                <li>✅ Advanced features</li>
              </ul>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}`,
      description: "Rich content with icons, complex layouts, and multiple content types.",
    },
    {
      title: "Programmatic Control",
      code: `import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/Accordion";
import { useState } from "react";

export default function ProgrammaticAccordion() {
  const [value, setValue] = useState("item-1");
  const [multiValue, setMultiValue] = useState(["item-1"]);

  const openAll = () => setMultiValue(["item-1", "item-2", "item-3"]);
  const closeAll = () => setMultiValue([]);
  const openNext = () => {
    const items = ["item-1", "item-2", "item-3"];
    const current = items.indexOf(value);
    const next = (current + 1) % items.length;
    setValue(items[next]);
  };

  return (
    <div className="space-y-6">
      {/* Control Buttons */}
      <div className="flex flex-wrap gap-2">
        <button 
          onClick={openNext}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Next Item
        </button>
        <button 
          onClick={openAll}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Open All
        </button>
        <button 
          onClick={closeAll}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Close All
        </button>
      </div>

      {/* Single Accordion */}
      <Accordion type="single" value={value} onValueChange={setValue}>
        <AccordionItem value="item-1">
          <AccordionTrigger>Programmatically Controlled Item 1</AccordionTrigger>
          <AccordionContent>
            This item's state is controlled by external buttons above.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Programmatically Controlled Item 2</AccordionTrigger>
          <AccordionContent>
            Click "Next Item" to cycle through accordion items.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Programmatically Controlled Item 3</AccordionTrigger>
          <AccordionContent>
            You can control accordion state from anywhere in your app.
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* Multiple Accordion */}
      <Accordion type="multiple" value={multiValue} onValueChange={setMultiValue}>
        <AccordionItem value="item-1">
          <AccordionTrigger>Multi Item 1</AccordionTrigger>
          <AccordionContent>This is controlled by the "Open All" and "Close All" buttons.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Multi Item 2</AccordionTrigger>
          <AccordionContent>Multiple items can be open simultaneously.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Multi Item 3</AccordionTrigger>
          <AccordionContent>Perfect for complex interfaces requiring multiple open sections.</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}`,
      description: "Control accordion state programmatically with external buttons and logic.",
    },
    {
      title: "Accordion with Form Integration",
      code: `import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/Accordion";
import { useState } from "react";

export default function FormAccordion() {
  const [formData, setFormData] = useState({
    personal: { name: '', email: '' },
    preferences: { theme: 'light', notifications: false },
    billing: { plan: 'free', cardNumber: '' }
  });

  const [completedSections, setCompletedSections] = useState([]);

  const updateFormData = (section, data) => {
    setFormData(prev => ({ ...prev, [section]: { ...prev[section], ...data } }));
    
    // Mark section as completed if required fields are filled
    if (section === 'personal' && data.name && data.email) {
      setCompletedSections(prev => [...prev.filter(s => s !== 'personal'), 'personal']);
    }
  };

  return (
    <form className="space-y-4">
      <Accordion type="multiple" defaultValue={["personal"]}>
        <AccordionItem value="personal">
          <AccordionTrigger className="flex items-center">
            {completedSections.includes('personal') && <span className="text-green-500 mr-2">✅</span>}
            👤 Personal Information
          </AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4 p-2">
              <div>
                <label className="block text-sm font-medium mb-2">Full Name *</label>
                <input
                  type="text"
                  value={formData.personal.name}
                  onChange={(e) => updateFormData('personal', { name: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email Address *</label>
                <input
                  type="email"
                  value={formData.personal.email}
                  onChange={(e) => updateFormData('personal', { email: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                />
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="preferences">
          <AccordionTrigger>⚙️ Preferences</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4 p-2">
              <div>
                <label className="block text-sm font-medium mb-2">Theme</label>
                <select
                  value={formData.preferences.theme}
                  onChange={(e) => updateFormData('preferences', { theme: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="light">Light</option>
                  <option value="dark">Dark</option>
                  <option value="auto">Auto</option>
                </select>
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="notifications"
                  checked={formData.preferences.notifications}
                  onChange={(e) => updateFormData('preferences', { notifications: e.target.checked })}
                  className="mr-2"
                />
                <label htmlFor="notifications" className="text-sm">Enable email notifications</label>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="billing">
          <AccordionTrigger>💳 Billing Information</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4 p-2">
              <div>
                <label className="block text-sm font-medium mb-2">Plan</label>
                <div className="space-y-2">
                  {['free', 'pro', 'enterprise'].map(plan => (
                    <label key={plan} className="flex items-center">
                      <input
                        type="radio"
                        name="plan"
                        value={plan}
                        checked={formData.billing.plan === plan}
                        onChange={(e) => updateFormData('billing', { plan: e.target.value })}
                        className="mr-2"
                      />
                      <span className="capitalize">{plan}</span>
                    </label>
                  ))}
                </div>
              </div>
              {formData.billing.plan !== 'free' && (
                <div>
                  <label className="block text-sm font-medium mb-2">Card Number</label>
                  <input
                    type="text"
                    value={formData.billing.cardNumber}
                    onChange={(e) => updateFormData('billing', { cardNumber: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="1234 5678 9012 3456"
                  />
                </div>
              )}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      
      <button
        type="submit"
        className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Save Settings
      </button>
    </form>
  );
}`,
      description: "Integration with forms, conditional fields, and progress tracking.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 text-foreground">
          Accordion
        </h1>
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
          A vertically stacked set of interactive headings that each reveal a
          section of content. Perfect for FAQs, collapsible content, and
          organizing information hierarchically.
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="mb-8">
        <div className="flex space-x-1 bg-muted p-1 rounded-lg w-fit">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                activeTab === tab.id
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground hover:bg-background/50"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="space-y-8 sm:space-y-12"
        >
          {activeTab === "overview" && (
            <>
              {/* Features Section */}
              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-semibold flex items-center gap-3 text-foreground">
                  <span className="flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-emerald-500 text-white text-sm font-bold">
                    ✨
                  </span>
                  Key Features
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-card border border-border rounded-lg p-4 space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-blue-500">♿</span>
                      <h3 className="font-semibold">Fully Accessible</h3>
                    </div>
                    <ul className="text-sm text-muted-foreground space-y-1 ml-6">
                      <li>• WAI-ARIA design pattern compliant</li>
                      <li>• Full keyboard navigation support</li>
                      <li>• Screen reader optimized</li>
                      <li>• Focus management</li>
                    </ul>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-4 space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-purple-500">🎨</span>
                      <h3 className="font-semibold">Highly Customizable</h3>
                    </div>
                    <ul className="text-sm text-muted-foreground space-y-1 ml-6">
                      <li>• Tailwind CSS integration</li>
                      <li>• Custom styling support</li>
                      <li>• Flexible layout options</li>
                      <li>• Theme-aware components</li>
                    </ul>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-4 space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-green-500">⚡</span>
                      <h3 className="font-semibold">High Performance</h3>
                    </div>
                    <ul className="text-sm text-muted-foreground space-y-1 ml-6">
                      <li>• Optimized animations</li>
                      <li>• Minimal re-renders</li>
                      <li>• Tree-shakeable exports</li>
                      <li>• Lightweight bundle</li>
                    </ul>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-4 space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-orange-500">🔧</span>
                      <h3 className="font-semibold">Developer Friendly</h3>
                    </div>
                    <ul className="text-sm text-muted-foreground space-y-1 ml-6">
                      <li>• TypeScript support</li>
                      <li>• Controlled & uncontrolled modes</li>
                      <li>• Comprehensive API</li>
                      <li>• Excellent documentation</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Keyboard Navigation */}
              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-semibold flex items-center gap-3 text-foreground">
                  <span className="flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-blue-500 text-white text-sm font-bold">
                    ⌨️
                  </span>
                  Keyboard Navigation
                </h2>
                <div className="bg-card border border-border rounded-lg overflow-hidden">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-muted/50">
                        <th className="px-4 py-3 text-left font-medium">Key</th>
                        <th className="px-4 py-3 text-left font-medium">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t border-border">
                        <td className="px-4 py-3 font-mono text-sm bg-muted/20">Tab</td>
                        <td className="px-4 py-3 text-sm">Move focus to next focusable element</td>
                      </tr>
                      <tr className="border-t border-border">
                        <td className="px-4 py-3 font-mono text-sm bg-muted/20">Shift + Tab</td>
                        <td className="px-4 py-3 text-sm">Move focus to previous focusable element</td>
                      </tr>
                      <tr className="border-t border-border">
                        <td className="px-4 py-3 font-mono text-sm bg-muted/20">Space / Enter</td>
                        <td className="px-4 py-3 text-sm">Toggle the focused accordion item</td>
                      </tr>
                      <tr className="border-t border-border">
                        <td className="px-4 py-3 font-mono text-sm bg-muted/20">Arrow Down</td>
                        <td className="px-4 py-3 text-sm">Move focus to next accordion trigger</td>
                      </tr>
                      <tr className="border-t border-border">
                        <td className="px-4 py-3 font-mono text-sm bg-muted/20">Arrow Up</td>
                        <td className="px-4 py-3 text-sm">Move focus to previous accordion trigger</td>
                      </tr>
                      <tr className="border-t border-border">
                        <td className="px-4 py-3 font-mono text-sm bg-muted/20">Home</td>
                        <td className="px-4 py-3 text-sm">Move focus to first accordion trigger</td>
                      </tr>
                      <tr className="border-t border-border">
                        <td className="px-4 py-3 font-mono text-sm bg-muted/20">End</td>
                        <td className="px-4 py-3 text-sm">Move focus to last accordion trigger</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Installation Section */}
              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-semibold flex items-center gap-3 text-foreground">
                  <span className="flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                    1
                  </span>
                  Installation
                </h2>
                <div className="relative">
                  <div className="bg-card border border-border rounded-lg p-4 font-mono text-sm overflow-x-auto">
                    <code className="text-foreground">npm i elementra-ui</code>
                  </div>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="absolute top-2 right-2 h-8 w-8 p-0 hover:bg-muted"
                    onClick={() => handleCopy("npm i elementra-ui")}
                  >
                    <Copy className="h-3 w-3" />
                  </Button>
                </div>
              </section>

              {/* Usage Section */}
              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-semibold flex items-center gap-3 text-foreground">
                  <span className="flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                    2
                  </span>
                  Add Component
                </h2>
                <div className="relative">
                  <div className="bg-card border border-border rounded-lg p-4 font-mono text-sm overflow-x-auto">
                    <code className="text-foreground">
                      npx elementra-ui add accordion
                    </code>
                  </div>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="absolute top-2 right-2 h-8 w-8 p-0 hover:bg-muted"
                    onClick={() => handleCopy("npx elementra-ui add accordion")}
                  >
                    <Copy className="h-3 w-3" />
                  </Button>
                </div>
              </section>

              {/* Preview Section */}
              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-semibold flex items-center gap-3 text-foreground">
                  <span className="flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                    3
                  </span>
                  Preview
                </h2>
                <div className="bg-card border border-border rounded-lg p-6">
                  <div className="max-w-md mx-auto">
                    <Accordion type="single" defaultValue="item-1">
                      <AccordionItem value="item-1">
                        <AccordionTrigger>Is it accessible?</AccordionTrigger>
                        <AccordionContent>
                          Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-2">
                        <AccordionTrigger>Is it styled?</AccordionTrigger>
                        <AccordionContent>
                          Yes. It comes with default styles that matches the
                          other components aesthetic.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-3">
                        <AccordionTrigger>Is it animated?</AccordionTrigger>
                        <AccordionContent>
                          Yes. It includes smooth expand/collapse animations out
                          of the box.
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </div>
              </section>
            </>
          )}

          {activeTab === "examples" && (
            <section className="space-y-8">
              <h2 className="text-2xl font-semibold text-foreground mb-6">
                Examples
              </h2>
              {codeExamples.map((example, index) => (
                <div key={index} className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium text-foreground">
                      {example.title}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {example.description}
                  </p>

                  <Tabs defaultValue="preview" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="preview">Preview</TabsTrigger>
                      <TabsTrigger value="code">Code</TabsTrigger>
                    </TabsList>

                    <TabsContent value="preview" className="mt-4">
                      <div className="bg-card border border-border rounded-lg p-6">
                        <div className="max-w-md mx-auto">
                          {index === 0 && (
                            <Accordion type="single" defaultValue="item-1">
                              <AccordionItem value="item-1">
                                <AccordionTrigger>
                                  Is it accessible?
                                </AccordionTrigger>
                                <AccordionContent>
                                  Yes. It adheres to the WAI-ARIA design
                                  pattern.
                                </AccordionContent>
                              </AccordionItem>
                              <AccordionItem value="item-2">
                                <AccordionTrigger>
                                  Is it styled?
                                </AccordionTrigger>
                                <AccordionContent>
                                  Yes. It comes with default styles that matches
                                  the other components aesthetic.
                                </AccordionContent>
                              </AccordionItem>
                            </Accordion>
                          )}
                          {index === 1 && (
                            <Accordion
                              type="multiple"
                              defaultValue={["item-1", "item-2"]}
                            >
                              <AccordionItem value="item-1">
                                <AccordionTrigger>
                                  Can multiple items be open?
                                </AccordionTrigger>
                                <AccordionContent>
                                  Yes. Set type="multiple" to allow multiple
                                  items to be open simultaneously.
                                </AccordionContent>
                              </AccordionItem>
                              <AccordionItem value="item-2">
                                <AccordionTrigger>
                                  Is it customizable?
                                </AccordionTrigger>
                                <AccordionContent>
                                  Absolutely. You can customize the appearance
                                  and behavior.
                                </AccordionContent>
                              </AccordionItem>
                              <AccordionItem value="item-3">
                                <AccordionTrigger>
                                  Does it support animations?
                                </AccordionTrigger>
                                <AccordionContent>
                                  Yes. Smooth animations are built-in for
                                  expand/collapse actions.
                                </AccordionContent>
                              </AccordionItem>
                            </Accordion>
                          )}
                          {index === 2 && (
                            <Accordion type="single">
                              <AccordionItem value="faq-1">
                                <AccordionTrigger>
                                  What is Elementra UI?
                                </AccordionTrigger>
                                <AccordionContent>
                                  Elementra UI is a modern React component
                                  library built with Tailwind CSS and designed
                                  for building beautiful, accessible user
                                  interfaces quickly.
                                </AccordionContent>
                              </AccordionItem>
                              <AccordionItem value="faq-2">
                                <AccordionTrigger>
                                  How do I install it?
                                </AccordionTrigger>
                                <AccordionContent>
                                  You can install Elementra UI via npm:{" "}
                                  <code className="bg-muted px-1 py-0.5 rounded text-sm">
                                    npm install elementra-ui
                                  </code>
                                </AccordionContent>
                              </AccordionItem>
                              <AccordionItem value="faq-3">
                                <AccordionTrigger>
                                  Is it free to use?
                                </AccordionTrigger>
                                <AccordionContent>
                                  Yes! Elementra UI is open source and
                                  completely free to use in your projects.
                                </AccordionContent>
                              </AccordionItem>
                            </Accordion>
                          )}
                          {index === 3 && (
                            <Accordion type="single" defaultValue="item-1">
                              <AccordionItem value="item-1">
                                <AccordionTrigger>
                                  Controlled Item 1
                                </AccordionTrigger>
                                <AccordionContent>
                                  This accordion is controlled by external
                                  state.
                                </AccordionContent>
                              </AccordionItem>
                              <AccordionItem value="item-2">
                                <AccordionTrigger>
                                  Controlled Item 2
                                </AccordionTrigger>
                                <AccordionContent>
                                  You can control which item is open
                                  programmatically.
                                </AccordionContent>
                              </AccordionItem>
                            </Accordion>
                          )}
                          {index === 4 && (
                            <Accordion type="single" className="w-full max-w-2xl mx-auto">
                              <AccordionItem value="item-1" className="border-2 border-blue-200 rounded-xl mb-4 overflow-hidden">
                                <AccordionTrigger className="bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 px-6 py-4 text-blue-900 font-semibold">
                                  🎨 Custom Design
                                </AccordionTrigger>
                                <AccordionContent className="bg-white px-6 py-4 text-gray-700">
                                  This accordion has custom styling with gradients, colors, and spacing.
                                </AccordionContent>
                              </AccordionItem>
                              <AccordionItem value="item-2" className="border-2 border-green-200 rounded-xl mb-4 overflow-hidden">
                                <AccordionTrigger className="bg-gradient-to-r from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 px-6 py-4 text-green-900 font-semibold">
                                  🚀 Performance Optimized
                                </AccordionTrigger>
                                <AccordionContent className="bg-white px-6 py-4 text-gray-700">
                                  Built with performance in mind, using React best practices.
                                </AccordionContent>
                              </AccordionItem>
                            </Accordion>
                          )}
                          {index === 5 && (
                            <Accordion type="single" defaultValue="parent-1">
                              <AccordionItem value="parent-1">
                                <AccordionTrigger>📁 Frontend Technologies</AccordionTrigger>
                                <AccordionContent>
                                  <Accordion type="single" className="ml-4">
                                    <AccordionItem value="react">
                                      <AccordionTrigger className="text-sm">⚛️ React</AccordionTrigger>
                                      <AccordionContent className="text-sm">
                                        A JavaScript library for building user interfaces.
                                      </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="vue">
                                      <AccordionTrigger className="text-sm">💚 Vue.js</AccordionTrigger>
                                      <AccordionContent className="text-sm">
                                        The Progressive JavaScript Framework.
                                      </AccordionContent>
                                    </AccordionItem>
                                  </Accordion>
                                </AccordionContent>
                              </AccordionItem>
                              <AccordionItem value="parent-2">
                                <AccordionTrigger>🔧 Backend Technologies</AccordionTrigger>
                                <AccordionContent>
                                  <Accordion type="single" className="ml-4">
                                    <AccordionItem value="node">
                                      <AccordionTrigger className="text-sm">🟢 Node.js</AccordionTrigger>
                                      <AccordionContent className="text-sm">
                                        JavaScript runtime built on Chrome's V8 JavaScript engine.
                                      </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="python">
                                      <AccordionTrigger className="text-sm">🐍 Python</AccordionTrigger>
                                      <AccordionContent className="text-sm">
                                        High-level programming language for general-purpose programming.
                                      </AccordionContent>
                                    </AccordionItem>
                                  </Accordion>
                                </AccordionContent>
                              </AccordionItem>
                            </Accordion>
                          )}
                          {index === 6 && (
                            <Accordion type="multiple" defaultValue={["features", "pricing"]}>
                              <AccordionItem value="features">
                                <AccordionTrigger className="text-lg font-bold text-purple-800">
                                  ✨ Amazing Features
                                </AccordionTrigger>
                                <AccordionContent>
                                  <div className="space-y-4">
                                    <div className="flex items-start space-x-3">
                                      <span className="text-green-500 text-xl">✅</span>
                                      <div>
                                        <h4 className="font-semibold">Fully Accessible</h4>
                                        <p className="text-gray-600">WCAG 2.1 AA compliant with full keyboard navigation</p>
                                      </div>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                      <span className="text-blue-500 text-xl">🎨</span>
                                      <div>
                                        <h4 className="font-semibold">Customizable</h4>
                                        <p className="text-gray-600">Easy to style with Tailwind CSS or custom CSS</p>
                                      </div>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                      <span className="text-orange-500 text-xl">⚡</span>
                                      <div>
                                        <h4 className="font-semibold">High Performance</h4>
                                        <p className="text-gray-600">Optimized for speed and smooth animations</p>
                                      </div>
                                    </div>
                                  </div>
                                </AccordionContent>
                              </AccordionItem>
                              
                              <AccordionItem value="pricing">
                                <AccordionTrigger className="text-lg font-bold text-green-800">
                                  💰 Pricing Plans
                                </AccordionTrigger>
                                <AccordionContent>
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="border border-gray-200 rounded-lg p-4">
                                      <h3 className="font-bold text-xl text-blue-600">Free</h3>
                                      <p className="text-3xl font-bold">$0<span className="text-sm font-normal">/month</span></p>
                                      <ul className="mt-3 space-y-1">
                                        <li>✅ Basic components</li>
                                        <li>✅ Community support</li>
                                        <li>❌ Advanced features</li>
                                      </ul>
                                    </div>
                                    <div className="border border-blue-200 rounded-lg p-4 bg-blue-50">
                                      <h3 className="font-bold text-xl text-blue-600">Pro</h3>
                                      <p className="text-3xl font-bold">$29<span className="text-sm font-normal">/month</span></p>
                                      <ul className="mt-3 space-y-1">
                                        <li>✅ All components</li>
                                        <li>✅ Priority support</li>
                                        <li>✅ Advanced features</li>
                                      </ul>
                                    </div>
                                  </div>
                                </AccordionContent>
                              </AccordionItem>
                            </Accordion>
                          )}
                          {index === 7 && (
                            <div className="space-y-6">
                              <div className="flex flex-wrap gap-2">
                                <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm">
                                  Next Item
                                </button>
                                <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 text-sm">
                                  Open All
                                </button>
                                <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 text-sm">
                                  Close All
                                </button>
                              </div>
                              <Accordion type="single" defaultValue="item-1">
                                <AccordionItem value="item-1">
                                  <AccordionTrigger>Programmatically Controlled Item 1</AccordionTrigger>
                                  <AccordionContent>This item's state is controlled by external buttons above.</AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-2">
                                  <AccordionTrigger>Programmatically Controlled Item 2</AccordionTrigger>
                                  <AccordionContent>Click "Next Item" to cycle through accordion items.</AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-3">
                                  <AccordionTrigger>Programmatically Controlled Item 3</AccordionTrigger>
                                  <AccordionContent>You can control accordion state from anywhere in your app.</AccordionContent>
                                </AccordionItem>
                              </Accordion>
                            </div>
                          )}
                          {index === 8 && (
                            <div className="space-y-4 max-w-md mx-auto">
                              <Accordion type="multiple" defaultValue={["personal"]}>
                                <AccordionItem value="personal">
                                  <AccordionTrigger className="flex items-center">
                                    <span className="text-green-500 mr-2">✅</span>
                                    👤 Personal Information
                                  </AccordionTrigger>
                                  <AccordionContent>
                                    <div className="space-y-4 p-2">
                                      <div>
                                        <label className="block text-sm font-medium mb-2">Full Name *</label>
                                        <input
                                          type="text"
                                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                          placeholder="Enter your full name"
                                        />
                                      </div>
                                      <div>
                                        <label className="block text-sm font-medium mb-2">Email Address *</label>
                                        <input
                                          type="email"
                                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                          placeholder="Enter your email"
                                        />
                                      </div>
                                    </div>
                                  </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="preferences">
                                  <AccordionTrigger>⚙️ Preferences</AccordionTrigger>
                                  <AccordionContent>
                                    <div className="space-y-4 p-2">
                                      <div>
                                        <label className="block text-sm font-medium mb-2">Theme</label>
                                        <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
                                          <option>Light</option>
                                          <option>Dark</option>
                                          <option>Auto</option>
                                        </select>
                                      </div>
                                    </div>
                                  </AccordionContent>
                                </AccordionItem>
                              </Accordion>
                            </div>
                          )}
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="code" className="mt-4">
                      <div className="relative">
                        <div className="bg-card border border-border rounded-lg p-4 overflow-x-auto">
                          <pre className="text-sm">
                            <code className="text-foreground">
                              {example.code}
                            </code>
                          </pre>
                        </div>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="absolute top-2 right-2 h-8 w-8 p-0 hover:bg-muted"
                          onClick={() => handleCopy(example.code)}
                        >
                          <Copy className="h-3 w-3" />
                        </Button>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
              ))}
            </section>
          )}

          {activeTab === "features" && (
            <section className="space-y-8">
              <h2 className="text-2xl font-semibold text-foreground mb-6">
                Advanced Features
              </h2>

              {/* Animation System */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">🎬 Animation System</h3>
                <div className="bg-card border border-border rounded-lg p-6 space-y-4">
                  <p className="text-muted-foreground">
                    The accordion features a sophisticated animation system built with CSS transitions and transforms for optimal performance.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold">Smooth Transitions</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Height-based expand/collapse</li>
                        <li>• Opacity fade transitions</li>
                        <li>• Icon rotation animations</li>
                        <li>• Easing curves for natural motion</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold">Performance Optimized</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Hardware-accelerated transforms</li>
                        <li>• GPU-composited layers</li>
                        <li>• Minimal layout thrashing</li>
                        <li>• 60fps smooth animations</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-muted rounded-lg p-4">
                    <p className="text-sm font-mono">
                      transition: all 200ms ease-in-out
                    </p>
                  </div>
                </div>
              </div>

              {/* Accessibility Features */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">♿ Accessibility Excellence</h3>
                <div className="bg-card border border-border rounded-lg p-6 space-y-4">
                  <p className="text-muted-foreground">
                    Built with accessibility as a first-class citizen, following WCAG 2.1 AA guidelines.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold flex items-center gap-2">
                        <span className="text-blue-500">🎯</span>
                        Focus Management
                      </h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Visible focus indicators</li>
                        <li>• Proper tab order</li>
                        <li>• Focus restoration</li>
                        <li>• Skip navigation support</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold flex items-center gap-2">
                        <span className="text-green-500">🗣️</span>
                        Screen Readers
                      </h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Semantic HTML structure</li>
                        <li>• ARIA attributes</li>
                        <li>• State announcements</li>
                        <li>• Content labeling</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold flex items-center gap-2">
                        <span className="text-purple-500">⌨️</span>
                        Keyboard Navigation
                      </h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Arrow key navigation</li>
                        <li>• Space/Enter activation</li>
                        <li>• Home/End shortcuts</li>
                        <li>• Escape key support</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                    <div className="flex items-center gap-2 text-green-800 dark:text-green-200">
                      <span>✅</span>
                      <span className="font-semibold">WCAG 2.1 AA Compliant</span>
                    </div>
                    <p className="text-sm text-green-700 dark:text-green-300 mt-2">
                      Tested with NVDA, JAWS, VoiceOver, and other assistive technologies.
                    </p>
                  </div>
                </div>
              </div>

              {/* State Management */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">🔄 Flexible State Management</h3>
                <div className="bg-card border border-border rounded-lg p-6 space-y-4">
                  <p className="text-muted-foreground">
                    Support for both controlled and uncontrolled patterns with comprehensive state management options.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-blue-600">Uncontrolled Mode</h4>
                      <div className="bg-blue-50 dark:bg-blue-950/20 rounded-lg p-4">
                        <pre className="text-sm text-blue-800 dark:text-blue-200">
{`<Accordion 
  type="single"
  defaultValue="item-1"
>
  {/* Items */}
</Accordion>`}
                        </pre>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Perfect for simple use cases where internal state management is sufficient.
                      </p>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-green-600">Controlled Mode</h4>
                      <div className="bg-green-50 dark:bg-green-950/20 rounded-lg p-4">
                        <pre className="text-sm text-green-800 dark:text-green-200">
{`<Accordion 
  type="single"
  value={activeItem}
  onValueChange={setActiveItem}
>
  {/* Items */}
</Accordion>`}
                        </pre>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Ideal for complex applications requiring external state control.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Styling System */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">🎨 Advanced Styling System</h3>
                <div className="bg-card border border-border rounded-lg p-6 space-y-4">
                  <p className="text-muted-foreground">
                    Comprehensive styling options with Tailwind CSS integration and CSS custom properties support.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold">Tailwind Integration</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Utility-first approach</li>
                        <li>• Responsive design</li>
                        <li>• Dark mode support</li>
                        <li>• Custom variants</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold">CSS Variables</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Theme customization</li>
                        <li>• Runtime color changes</li>
                        <li>• Animation timing</li>
                        <li>• Spacing control</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold">Component Variants</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Size variations</li>
                        <li>• Color schemes</li>
                        <li>• Border styles</li>
                        <li>• Shadow effects</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Performance Features */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">⚡ Performance Optimizations</h3>
                <div className="bg-card border border-border rounded-lg p-6 space-y-4">
                  <p className="text-muted-foreground">
                    Built with performance in mind, featuring multiple optimization techniques for smooth user experiences.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h4 className="font-semibold">React Optimizations</h4>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="text-green-500 mt-0.5">✓</span>
                          <span>Minimal re-renders with optimized state updates</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500 mt-0.5">✓</span>
                          <span>Lazy evaluation of expensive computations</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500 mt-0.5">✓</span>
                          <span>Efficient event handling with delegation</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500 mt-0.5">✓</span>
                          <span>Tree-shakeable exports for smaller bundles</span>
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-semibold">CSS Optimizations</h4>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="text-blue-500 mt-0.5">✓</span>
                          <span>GPU-accelerated animations</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-500 mt-0.5">✓</span>
                          <span>Optimized layout calculations</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-500 mt-0.5">✓</span>
                          <span>Reduced paint and reflow operations</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-500 mt-0.5">✓</span>
                          <span>Critical CSS inlining support</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-800 rounded-lg p-4">
                    <div className="flex items-center gap-2 text-orange-800 dark:text-orange-200 mb-2">
                      <span>⚡</span>
                      <span className="font-semibold">Bundle Size</span>
                    </div>
                    <p className="text-sm text-orange-700 dark:text-orange-300">
                      Gzipped: ~2.1KB | Raw: ~8.3KB | Dependencies: React only
                    </p>
                  </div>
                </div>
              </div>

              {/* Use Cases */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">🎯 Common Use Cases</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="bg-card border border-border rounded-lg p-4 space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">❓</span>
                      <h4 className="font-semibold">FAQ Sections</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Perfect for organizing frequently asked questions with collapsible answers.
                    </p>
                    <div className="text-xs text-muted-foreground">
                      Type: single | Collapsible: true
                    </div>
                  </div>

                  <div className="bg-card border border-border rounded-lg p-4 space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">📱</span>
                      <h4 className="font-semibold">Mobile Navigation</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Hierarchical navigation menus that work great on mobile devices.
                    </p>
                    <div className="text-xs text-muted-foreground">
                      Type: single | Nested: supported
                    </div>
                  </div>

                  <div className="bg-card border border-border rounded-lg p-4 space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">⚙️</span>
                      <h4 className="font-semibold">Settings Panels</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Organize complex settings into logical, expandable sections.
                    </p>
                    <div className="text-xs text-muted-foreground">
                      Type: multiple | Forms: integrated
                    </div>
                  </div>

                  <div className="bg-card border border-border rounded-lg p-4 space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">📚</span>
                      <h4 className="font-semibold">Documentation</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Structure technical documentation with expandable sections.
                    </p>
                    <div className="text-xs text-muted-foreground">
                      Type: multiple | Search: compatible
                    </div>
                  </div>

                  <div className="bg-card border border-border rounded-lg p-4 space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">🛒</span>
                      <h4 className="font-semibold">Product Filters</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      E-commerce filter panels with multiple expandable categories.
                    </p>
                    <div className="text-xs text-muted-foreground">
                      Type: multiple | State: controlled
                    </div>
                  </div>

                  <div className="bg-card border border-border rounded-lg p-4 space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">📊</span>
                      <h4 className="font-semibold">Data Tables</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Expandable rows in data tables for detailed information.
                    </p>
                    <div className="text-xs text-muted-foreground">
                      Type: single | Performance: optimized
                    </div>
                  </div>
                </div>
              </div>
            </section>

          )}

          {activeTab === "api" && (
            <section className="space-y-8">
              <h2 className="text-2xl font-semibold text-foreground mb-6">
                API Reference
              </h2>

              {/* Component Hierarchy */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-foreground">Component Hierarchy</h3>
                <div className="bg-card border border-border rounded-lg p-4 font-mono text-sm">
                  <div className="text-blue-600">Accordion</div>
                  <div className="ml-4 text-green-600">├── AccordionItem</div>
                  <div className="ml-8 text-purple-600">├── AccordionTrigger</div>
                  <div className="ml-8 text-orange-600">└── AccordionContent</div>
                </div>
              </div>

              {/* Import Statement */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-foreground">Import</h3>
                <div className="relative">
                  <div className="bg-card border border-border rounded-lg p-4 font-mono text-sm overflow-x-auto">
                    <code className="text-foreground">
                      {`import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/Accordion";`}
                    </code>
                  </div>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="absolute top-2 right-2 h-8 w-8 p-0 hover:bg-muted"
                    onClick={() => handleCopy(`import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/Accordion";`)}
                  >
                    <Copy className="h-3 w-3" />
                  </Button>
                </div>
              </div>

              {/* Accordion Props */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-foreground">
                  Accordion
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-border rounded-lg">
                    <thead>
                      <tr className="bg-muted/50">
                        <th className="border border-border p-3 text-left font-medium">
                          Prop
                        </th>
                        <th className="border border-border p-3 text-left font-medium">
                          Type
                        </th>
                        <th className="border border-border p-3 text-left font-medium">
                          Default
                        </th>
                        <th className="border border-border p-3 text-left font-medium">
                          Description
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-border p-3 font-mono text-sm">
                          type
                        </td>
                        <td className="border border-border p-3 text-sm">
                          "single" | "multiple"
                        </td>
                        <td className="border border-border p-3 text-sm">
                          "single"
                        </td>
                        <td className="border border-border p-3 text-sm">
                          Determines if one or multiple items can be opened at
                          the same time.
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-border p-3 font-mono text-sm">
                          defaultValue
                        </td>
                        <td className="border border-border p-3 text-sm">
                          string | string[]
                        </td>
                        <td className="border border-border p-3 text-sm">
                          undefined
                        </td>
                        <td className="border border-border p-3 text-sm">
                          The default value of the item(s) to expand when
                          initially rendered.
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-border p-3 font-mono text-sm">
                          value
                        </td>
                        <td className="border border-border p-3 text-sm">
                          string | string[]
                        </td>
                        <td className="border border-border p-3 text-sm">
                          undefined
                        </td>
                        <td className="border border-border p-3 text-sm">
                          The controlled value of the item(s) to expand. Should
                          be used in conjunction with onValueChange.
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-border p-3 font-mono text-sm">
                          onValueChange
                        </td>
                        <td className="border border-border p-3 text-sm">
                          {"(value: string | string[]) => void"}
                        </td>
                        <td className="border border-border p-3 text-sm">
                          undefined
                        </td>
                        <td className="border border-border p-3 text-sm">
                          Event handler called when the expanded state of an
                          item changes.
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-border p-3 font-mono text-sm">
                          collapsible
                        </td>
                        <td className="border border-border p-3 text-sm">
                          boolean
                        </td>
                        <td className="border border-border p-3 text-sm">
                          true
                        </td>
                        <td className="border border-border p-3 text-sm">
                          When type is "single", allows closing content when
                          clicking trigger for an open item.
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-border p-3 font-mono text-sm">
                          className
                        </td>
                        <td className="border border-border p-3 text-sm">
                          string
                        </td>
                        <td className="border border-border p-3 text-sm">
                          undefined
                        </td>
                        <td className="border border-border p-3 text-sm">
                          Additional CSS class names to apply to the accordion.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* AccordionItem Props */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-foreground">
                  AccordionItem
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-border rounded-lg">
                    <thead>
                      <tr className="bg-muted/50">
                        <th className="border border-border p-3 text-left font-medium">
                          Prop
                        </th>
                        <th className="border border-border p-3 text-left font-medium">
                          Type
                        </th>
                        <th className="border border-border p-3 text-left font-medium">
                          Default
                        </th>
                        <th className="border border-border p-3 text-left font-medium">
                          Description
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-border p-3 font-mono text-sm">
                          value
                        </td>
                        <td className="border border-border p-3 text-sm">
                          string
                        </td>
                        <td className="border border-border p-3 text-sm">-</td>
                        <td className="border border-border p-3 text-sm">
                          A unique value for the item.
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-border p-3 font-mono text-sm">
                          className
                        </td>
                        <td className="border border-border p-3 text-sm">
                          string
                        </td>
                        <td className="border border-border p-3 text-sm">
                          undefined
                        </td>
                        <td className="border border-border p-3 text-sm">
                          Additional CSS class names to apply to the item.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* AccordionTrigger Props */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-foreground">
                  AccordionTrigger
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-border rounded-lg">
                    <thead>
                      <tr className="bg-muted/50">
                        <th className="border border-border p-3 text-left font-medium">
                          Prop
                        </th>
                        <th className="border border-border p-3 text-left font-medium">
                          Type
                        </th>
                        <th className="border border-border p-3 text-left font-medium">
                          Default
                        </th>
                        <th className="border border-border p-3 text-left font-medium">
                          Description
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-border p-3 font-mono text-sm">
                          className
                        </td>
                        <td className="border border-border p-3 text-sm">
                          string
                        </td>
                        <td className="border border-border p-3 text-sm">
                          undefined
                        </td>
                        <td className="border border-border p-3 text-sm">
                          Additional CSS class names to apply to the trigger.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* AccordionContent Props */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-foreground">
                  AccordionContent
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-border rounded-lg">
                    <thead>
                      <tr className="bg-muted/50">
                        <th className="border border-border p-3 text-left font-medium">
                          Prop
                        </th>
                        <th className="border border-border p-3 text-left font-medium">
                          Type
                        </th>
                        <th className="border border-border p-3 text-left font-medium">
                          Default
                        </th>
                        <th className="border border-border p-3 text-left font-medium">
                          Description
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-border p-3 font-mono text-sm">
                          className
                        </td>
                        <td className="border border-border p-3 text-sm">
                          string
                        </td>
                        <td className="border border-border p-3 text-sm">
                          undefined
                        </td>
                        <td className="border border-border p-3 text-sm">
                          Additional CSS class names to apply to the content.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Usage Notes */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-foreground">
                  Usage Guidelines
                </h3>
                <div className="space-y-4">
                  <div className="bg-muted/50 rounded-lg p-4 space-y-3">
                    <h4 className="font-semibold text-foreground">Basic Usage</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• The Accordion component automatically manages the expanded state of its items</li>
                      <li>• Each AccordionItem must have a unique <code className="bg-background px-1 py-0.5 rounded">value</code> prop</li>
                      <li>• Use <code className="bg-background px-1 py-0.5 rounded">type="single"</code> for traditional accordion behavior where only one item can be open</li>
                      <li>• Use <code className="bg-background px-1 py-0.5 rounded">type="multiple"</code> to allow multiple items to be expanded simultaneously</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-950/20 rounded-lg p-4 space-y-3">
                    <h4 className="font-semibold text-blue-800 dark:text-blue-200">State Management</h4>
                    <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                      <li>• <strong>Uncontrolled:</strong> Use <code className="bg-blue-100 dark:bg-blue-900 px-1 py-0.5 rounded">defaultValue</code> for internal state management</li>
                      <li>• <strong>Controlled:</strong> Use <code className="bg-blue-100 dark:bg-blue-900 px-1 py-0.5 rounded">value</code> and <code className="bg-blue-100 dark:bg-blue-900 px-1 py-0.5 rounded">onValueChange</code> for external control</li>
                      <li>• For single type: value is a string, for multiple type: value is an array of strings</li>
                      <li>• Set <code className="bg-blue-100 dark:bg-blue-900 px-1 py-0.5 rounded">collapsible={false}</code> to prevent closing all items in single mode</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 dark:bg-green-950/20 rounded-lg p-4 space-y-3">
                    <h4 className="font-semibold text-green-800 dark:text-green-200">Accessibility Features</h4>
                    <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                      <li>• Automatic ARIA attributes for screen readers</li>
                      <li>• Proper focus management and keyboard navigation</li>
                      <li>• Semantic HTML structure with proper roles</li>
                      <li>• Support for aria-expanded, aria-controls, and aria-labelledby</li>
                    </ul>
                  </div>

                  <div className="bg-purple-50 dark:bg-purple-950/20 rounded-lg p-4 space-y-3">
                    <h4 className="font-semibold text-purple-800 dark:text-purple-200">Styling & Customization</h4>
                    <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1">
                      <li>• All components accept <code className="bg-purple-100 dark:bg-purple-900 px-1 py-0.5 rounded">className</code> for custom styling</li>
                      <li>• Built-in animations with CSS transitions</li>
                      <li>• Responsive design with mobile-first approach</li>
                      <li>• Dark mode support with CSS custom properties</li>
                    </ul>
                  </div>

                  <div className="bg-orange-50 dark:bg-orange-950/20 rounded-lg p-4 space-y-3">
                    <h4 className="font-semibold text-orange-800 dark:text-orange-200">Performance Tips</h4>
                    <ul className="text-sm text-orange-700 dark:text-orange-300 space-y-1">
                      <li>• Use React.memo for AccordionItem content if it contains heavy components</li>
                      <li>• Avoid inline functions in onValueChange for better performance</li>
                      <li>• Consider lazy loading content for accordions with many items</li>
                      <li>• Use CSS transforms for smooth animations</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Common Patterns */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-foreground">Common Patterns</h3>
                <div className="space-y-4">
                  <div className="bg-card border border-border rounded-lg p-4">
                    <h4 className="font-semibold mb-2">FAQ Accordion</h4>
                    <p className="text-sm text-muted-foreground mb-3">Perfect for frequently asked questions sections.</p>
                    <div className="relative">
                      <pre className="bg-muted rounded p-3 text-sm overflow-x-auto">
                        <code>{`<Accordion type="single" collapsible>
  <AccordionItem value="faq-1">
    <AccordionTrigger>Question 1?</AccordionTrigger>
    <AccordionContent>Answer 1</AccordionContent>
  </AccordionItem>
</Accordion>`}</code>
                      </pre>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="absolute top-1 right-1 h-6 w-6 p-0"
                        onClick={() => handleCopy(`<Accordion type="single" collapsible>
  <AccordionItem value="faq-1">
    <AccordionTrigger>Question 1?</AccordionTrigger>
    <AccordionContent>Answer 1</AccordionContent>
  </AccordionItem>
</Accordion>`)}
                      >
                        <Copy className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>

                  <div className="bg-card border border-border rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Settings Panel</h4>
                    <p className="text-sm text-muted-foreground mb-3">Allow multiple sections to be open for settings organization.</p>
                    <div className="relative">
                      <pre className="bg-muted rounded p-3 text-sm overflow-x-auto">
                        <code>{`<Accordion type="multiple" defaultValue={["general", "privacy"]}>
  <AccordionItem value="general">
    <AccordionTrigger>General Settings</AccordionTrigger>
    <AccordionContent>{/* Settings form */}</AccordionContent>
  </AccordionItem>
</Accordion>`}</code>
                      </pre>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="absolute top-1 right-1 h-6 w-6 p-0"
                        onClick={() => handleCopy(`<Accordion type="multiple" defaultValue={["general", "privacy"]}>
  <AccordionItem value="general">
    <AccordionTrigger>General Settings</AccordionTrigger>
    <AccordionContent>{/* Settings form */}</AccordionContent>
  </AccordionItem>
</Accordion>`)}
                      >
                        <Copy className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>

                  <div className="bg-card border border-border rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Controlled State</h4>
                    <p className="text-sm text-muted-foreground mb-3">Control accordion state from parent component.</p>
                    <div className="relative">
                      <pre className="bg-muted rounded p-3 text-sm overflow-x-auto">
                        <code>{`const [activeItem, setActiveItem] = useState("item-1");

<Accordion 
  type="single" 
  value={activeItem} 
  onValueChange={setActiveItem}
>
  <AccordionItem value="item-1">
    <AccordionTrigger>Item 1</AccordionTrigger>
    <AccordionContent>Content 1</AccordionContent>
  </AccordionItem>
</Accordion>`}</code>
                      </pre>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="absolute top-1 right-1 h-6 w-6 p-0"
                        onClick={() => handleCopy(`const [activeItem, setActiveItem] = useState("item-1");

<Accordion 
  type="single" 
  value={activeItem} 
  onValueChange={setActiveItem}
>
  <AccordionItem value="item-1">
    <AccordionTrigger>Item 1</AccordionTrigger>
    <AccordionContent>Content 1</AccordionContent>
  </AccordionItem>
</Accordion>`)}
                      >
                        <Copy className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Browser Support */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-foreground">Browser Support</h3>
                <div className="bg-card border border-border rounded-lg overflow-hidden">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-muted/50">
                        <th className="px-4 py-3 text-left font-medium">Browser</th>
                        <th className="px-4 py-3 text-left font-medium">Version</th>
                        <th className="px-4 py-3 text-left font-medium">Support</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t border-border">
                        <td className="px-4 py-3">Chrome</td>
                        <td className="px-4 py-3">≥ 91</td>
                        <td className="px-4 py-3"><span className="text-green-500">✅ Full</span></td>
                      </tr>
                      <tr className="border-t border-border">
                        <td className="px-4 py-3">Firefox</td>
                        <td className="px-4 py-3">≥ 90</td>
                        <td className="px-4 py-3"><span className="text-green-500">✅ Full</span></td>
                      </tr>
                      <tr className="border-t border-border">
                        <td className="px-4 py-3">Safari</td>
                        <td className="px-4 py-3">≥ 14</td>
                        <td className="px-4 py-3"><span className="text-green-500">✅ Full</span></td>
                      </tr>
                      <tr className="border-t border-border">
                        <td className="px-4 py-3">Edge</td>
                        <td className="px-4 py-3">≥ 91</td>
                        <td className="px-4 py-3"><span className="text-green-500">✅ Full</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default AccordionComponent;
