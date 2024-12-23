import React from "react";
import Link from "next/link";

const Installation = () => {
  const frameworks = [
    {
      name: "Next.js",
      logo: "N",
      isText: true,
      url: "/docs/Installation/next",
    },
    {
      name: "Vite",
      logo: "⚡",
      isText: false,
      url: "/docs/Installation/vite",
    },
    {
      name: "React",
      logo: "R",
      isText: true,
      url: "/docs/Installation/react",
    },
  ];

  return (
    <div className="px-6">
      <h1 className="text-5xl font-bold mb-4">Installation</h1>
      <p className="text-xl text-muted-foreground mb-16">
        How to install dependencies and structure your app.
      </p>

      <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight mb-8">
        Frameworks
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {frameworks.map((framework) => (
          <Link
            href={framework.url}
            key={framework.name}
            className="block no-underline"
          >
            <div className="group relative rounded-lg border p-6 hover:border-foreground/20 transition-colors h-[180px] flex flex-col items-center justify-center">
              <div className="mb-4">
                {framework.isText ? (
                  <div className="w-12 h-12 bg-foreground text-background rounded-full flex items-center justify-center text-xl font-bold">
                    {framework.logo}
                  </div>
                ) : (
                  <div className="text-3xl">{framework.logo}</div>
                )}
              </div>
              <div className="text-lg font-medium">{framework.name}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Installation;
