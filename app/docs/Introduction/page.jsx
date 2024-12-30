"use client";
import React from 'react';

const Introduction = () => {
  return (
    <div className="container px-4 ">
      <h1 className="text-5xl font-bold mb-4">Elementra UI</h1>
      <p className="text-lg text-muted-foreground dark:text-white mb-12">
        Beautifully crafted components for modern UIs. Customizable. Accessible. Lightweight.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-medium mb-4">What is Elementra UI?</h2>
        <p className="text-muted-foreground dark:text-white leading-relaxed">
          Elementra UI is a collection of reusable components that you can copy and paste into your projects. 
          It's not a traditional component library — you don't install it via npm or manage it as a dependency. 
          Instead, it's a toolbox of building blocks designed to help you craft responsive, accessible, and 
          visually stunning UIs with ease.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-medium mb-4">What makes Elementra UI unique?</h2>
        <div className="grid gap-6">
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-950/30 dark:to-blue-950/30 p-6 rounded-xl border border-purple-100 dark:border-purple-900 hover:shadow-lg transition-all">
            <h3 className="text-xl font-medium mb-2 bg-gradient-to-r from-purple-600 to-blue-600 inline-block text-transparent bg-clip-text">Not Just Another Library</h3>
            <p className="text-muted-foreground dark:text-white">
              Elementra UI isn't distributed through npm. You pick the components you need, copy the code, and adapt it to your project.
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-pink-50 to-orange-50 dark:from-pink-950/30 dark:to-orange-950/30 p-6 rounded-xl border border-pink-100 dark:border-pink-900 hover:shadow-lg transition-all">
            <h3 className="text-xl font-medium mb-2 bg-gradient-to-r from-pink-600 to-orange-600 inline-block text-transparent bg-clip-text">Built for Customization</h3>
            <p className="text-muted-foreground dark:text-white">
              The components are entirely yours — modify them to fit your design system, branding, or unique project requirements.
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-950/30 dark:to-teal-950/30 p-6 rounded-xl border border-green-100 dark:border-green-900 hover:shadow-lg transition-all">
            <h3 className="text-xl font-medium mb-2 bg-gradient-to-r from-green-600 to-teal-600 inline-block text-transparent bg-clip-text">Powered by Modern Tools</h3>
            <p className="text-muted-foreground dark:text-white">
              Each component is built with React.js, Tailwind CSS, and Framer Motion, ensuring they are lightweight, performant, and easy to integrate.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-medium mb-4">How to Use Elementra UI</h2>
        <ol className="list-decimal list-inside space-y-2 text-muted-foreground dark:text-white">
          <li>Browse the collection and select the components you need.</li>
          <li>Copy the code directly into your project.</li>
          <li>Customize it to match your project's needs.</li>
        </ol>
      </section>

      <section>
        <h2 className="text-2xl font-medium mb-4">Why Choose Elementra UI?</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="p-4 rounded-lg border">
            <h3 className="font-medium mb-2">Design Freedom</h3>
            <p className="text-sm text-muted-foreground dark:text-white">Full access to code for complete customization.</p>
          </div>
          <div className="p-4 rounded-lg border">
            <h3 className="font-medium mb-2">Accessibility</h3>
            <p className="text-sm text-muted-foreground dark:text-white">Components are built to meet modern accessibility standards.</p>
          </div>
          <div className="p-4 rounded-lg border">
            <h3 className="font-medium mb-2">Efficiency</h3>
            <p className="text-sm text-muted-foreground dark:text-white">Streamline your workflow without adding unnecessary dependencies.</p>
          </div>
          <div className="p-4 rounded-lg border">
            <h3 className="font-medium mb-2">Reference Material</h3>
            <p className="text-sm text-muted-foreground dark:text-white">Use it as a foundation to build your own component libraries.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Introduction;