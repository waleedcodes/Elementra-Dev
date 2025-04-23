import React from "react";
import Link from "next/link";
import { ArrowRight, Code, Rocket } from "lucide-react";

const Installation = () => {
  const frameworks = [
    {
      name: "Next.js",
      description: "The React framework for production",
      icon: <Code size={24} />,
      url: "/docs/Installation/next",
      color: "bg-black text-white",
    },
    {
      name: "React",
      description: "A JavaScript library for building user interfaces",
      icon: <Rocket size={24} />,
      url: "/docs/Installation/react",
      color: "bg-blue-600 text-white",
    },
  ];

  return (
    <div className="max-w-8xl mx-auto px-6 py-12">
      <div className="space-y-2 mb-16">
        <h1 className="text-5xl font-bold tracking-tight">Installation</h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          How to install dependencies and structure your app for optimal
          performance.
        </p>
      </div>

      <div className="mb-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-semibold tracking-tight">Frameworks</h2>
          <div className="hidden md:block text-sm text-muted-foreground">
            Select your preferred framework
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {frameworks.map((framework) => (
            <Link
              href={framework.url}
              key={framework.name}
              className="block no-underline group"
            >
              <div className="relative rounded-xl border shadow-sm p-6 h-full transition-all duration-200 hover:shadow-md hover:border-foreground/30 flex flex-col">
                <div
                  className={`${framework.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}
                >
                  {framework.icon}
                </div>

                <div className="mb-2 text-xl font-medium">{framework.name}</div>
                <p className="text-muted-foreground text-sm mb-6">
                  {framework.description}
                </p>

                <div className="mt-auto flex items-center text-sm font-medium">
                  Get started
                  <ArrowRight
                    size={16}
                    className="ml-1 transition-transform group-hover:translate-x-1"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-xl border">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-medium mb-1">
              Need help getting started?
            </h3>
            <p className="text-muted-foreground text-sm">
              Check out our comprehensive documentation and tutorials
            </p>
          </div>
          <Link
            href="/docs"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring bg-primary text-primary-foreground shadow hover:bg-primary/90 px-4 py-2"
          >
            View guides
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Installation;
