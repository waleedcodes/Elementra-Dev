"use client";

import * as React from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Moon, Sun, Search, Github } from "lucide-react";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Docs", href: "/docs" },
    { name: "Components", href: "/components" },
  ];
  const searchItems = [
    { name: "Documentation", href: "/docs" },
    // { name: "Guides", href: "/guides" },
    // { name: "API Reference", href: "/api" },
    { name: "Components", href: "/components" },
  ];

  return (
    <>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            {searchItems.map((item) => (
              <CommandItem
                key={item.href}
                onSelect={() => {
                  setOpen(false);
                  window.location.href = item.href;
                }}
              >
                {item.name}
              </CommandItem>
            ))}
          </CommandGroup>
          {/* <CommandGroup heading="Pages">
            {navItems.map((item) => (
              <CommandItem
                key={item.href}
                onSelect={() => {
                  setOpen(false);
                  window.location.href = item.href;
                }}
              >
                {item.name}
              </CommandItem>
            ))}
          </CommandGroup> */}
        </CommandList>
      </CommandDialog>

      <div className="flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2 items-center justify-center space-x-4">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
          >
            <span className="text-sm">{item.name}</span>
          </Link>
        ))}

        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="icon"
            className="w-9 px-0"
            onClick={() => setOpen(true)}
          >
            <Search className="h-4 w-4" />
            <span className="sr-only">Search</span>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="w-9 px-0"
            onClick={() =>
              window.open(
                "https://github.com/elementraui/Elementra-Dev",
                "_blank"
              )
            }
          >
            <Github className="h-4 w-4" />
            <span className="sr-only">GitHub</span>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="w-9 px-0"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
            <span className="sr-only">Toggle theme</span>
          </Button>

          <Button className="relative">
            Login
            <span className="absolute inset-x-0 mx-auto -bottom-px h-px w-1/2 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
          </Button>
        </div>
      </div>
    </>
  );
}
