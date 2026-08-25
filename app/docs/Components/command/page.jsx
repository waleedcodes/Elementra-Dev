"use client";

import React from "react";
import { Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "framer-motion";
import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandSeparator,
  CommandShortcut,
} from "@/src/components/ui/command";

const CommandComponent = () => {
  const [activeTab, setActiveTab] = React.useState("overview");
  const [mounted, setMounted] = React.useState(false);
  const [previewOpen, setPreviewOpen] = React.useState(false);

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
      title: "Basic Command Palette",
      code: `import { Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem } from "@/components/ui/command";
import { useState } from "react";

export default function BasicCommand() {
  const [open, setOpen] = useState(false);

  return (
    <Command open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem onSelect={() => console.log("Calendar")}>
            Calendar
          </CommandItem>
          <CommandItem onSelect={() => console.log("Search Emoji")}>
            Search Emoji
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
}`,
      description: "A minimal command palette with a single group of items.",
    },
    {
      title: "Command with Keyboard Shortcuts",
      code: `import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
} from "@/components/ui/command";
import { useState } from "react";

export default function ShortcutCommand() {
  const [open, setOpen] = useState(false);

  return (
    <Command open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Actions">
          <CommandItem onSelect={() => console.log("New file")}>
            New File
            <CommandShortcut>⌘N</CommandShortcut>
          </CommandItem>
          <CommandItem onSelect={() => console.log("Save")}>
            Save
            <CommandShortcut>⌘S</CommandShortcut>
          </CommandItem>
          <CommandItem onSelect={() => console.log("Search")}>
            Search
            <CommandShortcut>⌘K</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
}`,
      description: "Pair each action with its keyboard shortcut using CommandShortcut.",
    },
    {
      title: "Grouped Commands",
      code: `import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandSeparator,
} from "@/components/ui/command";
import { useState } from "react";

export default function GroupedCommand() {
  const [open, setOpen] = useState(false);

  return (
    <Command open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem onSelect={() => {}}>Calendar</CommandItem>
          <CommandItem onSelect={() => {}}>Search Emoji</CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem onSelect={() => {}}>Profile</CommandItem>
          <CommandItem onSelect={() => {}}>Billing</CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
}`,
      description: "Separate related commands into labeled groups with a divider between them.",
    },
    {
      title: "Filtered Command List",
      code: `import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "@/components/ui/command";
import { useState, useMemo } from "react";

const items = ["Calendar", "Search Emoji", "Profile", "Billing", "Settings"];

export default function FilteredCommand() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  const filtered = useMemo(
    () => items.filter((item) => item.toLowerCase().includes(query.toLowerCase())),
    [query]
  );

  return (
    <Command open={open} onOpenChange={setOpen}>
      <CommandInput
        placeholder="Type a command or search..."
        onChange={(e) => setQuery(e.target.value)}
      />
      <CommandList>
        {filtered.length === 0 && <CommandEmpty>No results found.</CommandEmpty>}
        <CommandGroup heading="Results">
          {filtered.map((item) => (
            <CommandItem key={item} onSelect={() => console.log(item)}>
              {item}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  );
}`,
      description: "Filter the list live as the person types in the input.",
    },
    {
      title: "Command with Icons",
      code: `import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
} from "@/components/ui/command";
import { Calendar, Smile, User, CreditCard } from "lucide-react";
import { useState } from "react";

export default function IconCommand() {
  const [open, setOpen] = useState(false);

  return (
    <Command open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem onSelect={() => {}}>
            <Calendar className="mr-2 h-4 w-4" />
            <span>Calendar</span>
          </CommandItem>
          <CommandItem onSelect={() => {}}>
            <Smile className="mr-2 h-4 w-4" />
            <span>Search Emoji</span>
          </CommandItem>
          <CommandItem onSelect={() => {}}>
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
            <CommandShortcut>⌘P</CommandShortcut>
          </CommandItem>
          <CommandItem onSelect={() => {}}>
            <CreditCard className="mr-2 h-4 w-4" />
            <span>Billing</span>
            <CommandShortcut>⌘B</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
}`,
      description: "Add leading icons to items for faster visual scanning.",
    },
    {
      title: "Disabled Items",
      code: `import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "@/components/ui/command";
import { useState } from "react";

export default function DisabledCommand() {
  const [open, setOpen] = useState(false);

  return (
    <Command open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Actions">
          <CommandItem onSelect={() => {}}>Available Action</CommandItem>
          <CommandItem disabled onSelect={() => {}}>
            Unavailable Action
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
}`,
      description: "Mark specific commands as disabled so they can't be selected.",
    },
    {
      title: "Global ⌘K Trigger",
      code: `import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
} from "@/components/ui/command";
import { useState } from "react";

export default function GlobalTriggerCommand() {
  // Command already listens for Cmd/Ctrl+K internally and opens itself.
  // You only need to render it once near the root of your app.
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="px-4 py-2 border border-border rounded-md text-sm text-muted-foreground hover:bg-muted"
      >
        Search...
        <CommandShortcut className="ml-3">⌘K</CommandShortcut>
      </button>

      <Command open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Navigation">
            <CommandItem onSelect={() => {}}>Go to Dashboard</CommandItem>
            <CommandItem onSelect={() => {}}>Go to Settings</CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </>
  );
}`,
      description: "Trigger the palette from a visible button, or let the person press ⌘K/Ctrl+K from anywhere.",
    },
    {
      title: "Command Menu with Sections & Recent Items",
      code: `import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { Clock, FileText, Users, Settings } from "lucide-react";
import { useState } from "react";

export default function FullCommandMenu() {
  const [open, setOpen] = useState(false);

  return (
    <Command open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Recent">
          <CommandItem onSelect={() => {}}>
            <Clock className="mr-2 h-4 w-4" />
            <span>Q3 Report.docx</span>
          </CommandItem>
          <CommandItem onSelect={() => {}}>
            <Clock className="mr-2 h-4 w-4" />
            <span>Team Roadmap</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Pages">
          <CommandItem onSelect={() => {}}>
            <FileText className="mr-2 h-4 w-4" />
            <span>Documents</span>
          </CommandItem>
          <CommandItem onSelect={() => {}}>
            <Users className="mr-2 h-4 w-4" />
            <span>Team</span>
          </CommandItem>
          <CommandItem onSelect={() => {}}>
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
            <CommandShortcut>⌘,</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
}`,
      description: "A fuller menu combining a recent-items section with grouped navigation and shortcuts.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 text-foreground">
          Command
        </h1>
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
          A fast, keyboard-driven palette for search and actions. Trigger it
          from anywhere with ⌘K / Ctrl+K, filter as you type, and select with
          the keyboard or mouse.
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="mb-8">
        <div className="flex space-x-1 bg-muted p-1 rounded-lg w-fit">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${activeTab === tab.id
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
                      <span className="text-blue-500">⌨️</span>
                      <h3 className="font-semibold">Keyboard First</h3>
                    </div>
                    <ul className="text-sm text-muted-foreground space-y-1 ml-6">
                      <li>• Global ⌘K / Ctrl+K trigger</li>
                      <li>• Escape to close</li>
                      <li>• Autofocus on open</li>
                      <li>• Mouse and keyboard selection</li>
                    </ul>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-4 space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-purple-500">🔍</span>
                      <h3 className="font-semibold">Search & Filter</h3>
                    </div>
                    <ul className="text-sm text-muted-foreground space-y-1 ml-6">
                      <li>• Live filtering as you type</li>
                      <li>• Grouped, labeled results</li>
                      <li>• Empty state messaging</li>
                      <li>• Separators between groups</li>
                    </ul>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-4 space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-green-500">🪟</span>
                      <h3 className="font-semibold">Portal-Based Overlay</h3>
                    </div>
                    <ul className="text-sm text-muted-foreground space-y-1 ml-6">
                      <li>• Renders via createPortal</li>
                      <li>• Dimmed backdrop overlay</li>
                      <li>• Click outside to dismiss</li>
                      <li>• Body scroll lock while open</li>
                    </ul>
                  </div>
                  <div className="bg-card border border-border rounded-lg p-4 space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-orange-500">🔧</span>
                      <h3 className="font-semibold">Developer Friendly</h3>
                    </div>
                    <ul className="text-sm text-muted-foreground space-y-1 ml-6">
                      <li>• Controlled & uncontrolled modes</li>
                      <li>• Composable sub-components</li>
                      <li>• CommandShortcut for hints</li>
                      <li>• Simple context-based API</li>
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
                  Keyboard Shortcuts
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
                        <td className="px-4 py-3 font-mono text-sm bg-muted/20">⌘K / Ctrl+K</td>
                        <td className="px-4 py-3 text-sm">Open the command palette from anywhere</td>
                      </tr>
                      <tr className="border-t border-border">
                        <td className="px-4 py-3 font-mono text-sm bg-muted/20">Escape</td>
                        <td className="px-4 py-3 text-sm">Close the command palette</td>
                      </tr>
                      <tr className="border-t border-border">
                        <td className="px-4 py-3 font-mono text-sm bg-muted/20">Type to search</td>
                        <td className="px-4 py-3 text-sm">Filters the visible command list</td>
                      </tr>
                      <tr className="border-t border-border">
                        <td className="px-4 py-3 font-mono text-sm bg-muted/20">Enter</td>
                        <td className="px-4 py-3 text-sm">Selects the highlighted item</td>
                      </tr>
                      <tr className="border-t border-border">
                        <td className="px-4 py-3 font-mono text-sm bg-muted/20">Click outside</td>
                        <td className="px-4 py-3 text-sm">Dismisses the palette via the backdrop</td>
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
                      npx elementra-ui add command
                    </code>
                  </div>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="absolute top-2 right-2 h-8 w-8 p-0 hover:bg-muted"
                    onClick={() => handleCopy("npx elementra-ui add command")}
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
                  <div className="max-w-md mx-auto text-center space-y-3">
                    <button
                      onClick={() => setPreviewOpen(true)}
                      className="px-4 py-2 border border-border rounded-md text-sm text-muted-foreground hover:bg-muted transition-colors"
                    >
                      Press to open — try ⌘K / Ctrl+K too
                    </button>
                    <Command open={previewOpen} onOpenChange={setPreviewOpen}>
                      <CommandInput placeholder="Type a command or search..." />
                      <CommandList>
                        <CommandEmpty>No results found.</CommandEmpty>
                        <CommandGroup heading="Suggestions">
                          <CommandItem onSelect={() => setPreviewOpen(false)}>
                            Calendar
                          </CommandItem>
                          <CommandItem onSelect={() => setPreviewOpen(false)}>
                            Search Emoji
                          </CommandItem>
                          <CommandItem onSelect={() => setPreviewOpen(false)}>
                            Profile
                            <CommandShortcut>⌘P</CommandShortcut>
                          </CommandItem>
                        </CommandGroup>
                      </CommandList>
                    </Command>
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
                        <div className="max-w-md mx-auto text-center">
                          <ExamplePreviewButton index={index} />
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

              {/* Trigger System */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">🚀 Global Trigger System</h3>
                <div className="bg-card border border-border rounded-lg p-6 space-y-4">
                  <p className="text-muted-foreground">
                    Command listens for ⌘K / Ctrl+K at the document level, so it can be opened from anywhere in your app without wiring up a button.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold">Global Listener</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Document-level keydown listener</li>
                        <li>• Works regardless of focus</li>
                        <li>• Escape closes from any state</li>
                        <li>• Cleans up listeners on unmount</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold">Scroll Lock</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Locks body scroll while open</li>
                        <li>• Restores overflow on close</li>
                        <li>• Prevents background scroll-through</li>
                        <li>• Cleans up on unmount</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-muted rounded-lg p-4">
                    <p className="text-sm font-mono">
                      if (e.key === "k" &amp;&amp; (e.metaKey || e.ctrlKey)) setIsOpen(true)
                    </p>
                  </div>
                </div>
              </div>

              {/* Portal Rendering */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">🪟 Portal Rendering</h3>
                <div className="bg-card border border-border rounded-lg p-6 space-y-4">
                  <p className="text-muted-foreground">
                    The palette renders through <code className="bg-muted px-1 py-0.5 rounded text-sm">createPortal</code> directly onto <code className="bg-muted px-1 py-0.5 rounded text-sm">document.body</code>, so it always overlays the entire viewport regardless of where in the tree it's rendered.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold flex items-center gap-2">
                        <span className="text-blue-500">🎯</span>
                        No Stacking Issues
                      </h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Escapes parent overflow/clip</li>
                        <li>• Always on top via z-50</li>
                        <li>• Independent of layout context</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold flex items-center gap-2">
                        <span className="text-green-500">🖱️</span>
                        Backdrop Dismiss
                      </h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Semi-transparent backdrop</li>
                        <li>• Click outside closes palette</li>
                        <li>• Click inside stops propagation</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold flex items-center gap-2">
                        <span className="text-purple-500">🧭</span>
                        Centered Layout
                      </h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Fixed, centered positioning</li>
                        <li>• Responsive max-width</li>
                        <li>• Consistent across viewports</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Context-Based Composition */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">🔄 Context-Based Composition</h3>
                <div className="bg-card border border-border rounded-lg p-6 space-y-4">
                  <p className="text-muted-foreground">
                    A React context shares open state and placeholder text with every child, so sub-components stay simple and don't need prop drilling.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-blue-600">Uncontrolled Mode</h4>
                      <div className="bg-blue-50 dark:bg-blue-950/20 rounded-lg p-4">
                        <pre className="text-sm text-blue-800 dark:text-blue-200">
                          {`<Command placeholder="Search...">
  {/* Manages its own open state,
      still opens on Cmd/Ctrl+K */}
</Command>`}
                        </pre>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Good for a single, simple palette instance in an app.
                      </p>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-green-600">Controlled Mode</h4>
                      <div className="bg-green-50 dark:bg-green-950/20 rounded-lg p-4">
                        <pre className="text-sm text-green-800 dark:text-green-200">
                          {`<Command
  open={open}
  onOpenChange={setOpen}
>
  {/* Open state lives in your
      own component/store */}
</Command>`}
                        </pre>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Ideal when a button, menu, or shortcut elsewhere needs to open the palette.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Filtering & Groups */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">🔍 Filtering & Grouping</h3>
                <div className="bg-card border border-border rounded-lg p-6 space-y-4">
                  <p className="text-muted-foreground">
                    Results can be organized into labeled groups, separated visually, and filtered live against whatever data source you provide.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <h4 className="font-semibold">CommandGroup</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Optional heading label</li>
                        <li>• Groups related items</li>
                        <li>• Stacks with consistent spacing</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold">CommandSeparator</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Thin divider between groups</li>
                        <li>• Purely visual, no semantics</li>
                        <li>• Use sparingly for clarity</li>
                      </ul>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold">CommandEmpty</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Shown when no results match</li>
                        <li>• Customizable message</li>
                        <li>• Keeps empty states informative</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Performance Features */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">⚡ Performance Considerations</h3>
                <div className="bg-card border border-border rounded-lg p-6 space-y-4">
                  <p className="text-muted-foreground">
                    Built to stay responsive even with larger command lists, keeping typing and filtering feeling instant.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h4 className="font-semibold">React Optimizations</h4>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="text-green-500 mt-0.5">✓</span>
                          <span>Portal mounts only while open, unmounts on close</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500 mt-0.5">✓</span>
                          <span>Filtering left to consumer for full control over data</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500 mt-0.5">✓</span>
                          <span>Lightweight context avoids prop drilling overhead</span>
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-semibold">Recommended Practices</h4>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="text-blue-500 mt-0.5">✓</span>
                          <span>Debounce filtering for large, remote data sets</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-500 mt-0.5">✓</span>
                          <span>Virtualize the list beyond a few hundred items</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-500 mt-0.5">✓</span>
                          <span>Memoize derived/filtered lists with useMemo</span>
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
                      Gzipped: ~2.6KB | Raw: ~9.1KB | Dependencies: React, ReactDOM only
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
                      <span className="text-2xl">🔍</span>
                      <h4 className="font-semibold">Global Search</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Let users jump straight to pages, docs, or records app-wide.
                    </p>
                    <div className="text-xs text-muted-foreground">
                      Trigger: ⌘K | Groups: recommended
                    </div>
                  </div>

                  <div className="bg-card border border-border rounded-lg p-4 space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">⚙️</span>
                      <h4 className="font-semibold">Action Menus</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Surface every app action behind one searchable shortcut.
                    </p>
                    <div className="text-xs text-muted-foreground">
                      Shortcuts: shown per item
                    </div>
                  </div>

                  <div className="bg-card border border-border rounded-lg p-4 space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">📁</span>
                      <h4 className="font-semibold">File Switchers</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Quickly jump between files, tabs, or recent documents.
                    </p>
                    <div className="text-xs text-muted-foreground">
                      Groups: Recent | Filtering: live
                    </div>
                  </div>

                  <div className="bg-card border border-border rounded-lg p-4 space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">🧭</span>
                      <h4 className="font-semibold">Site Navigation</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Provide a fast keyboard path through a marketing or docs site.
                    </p>
                    <div className="text-xs text-muted-foreground">
                      Groups: Pages | Icons: recommended
                    </div>
                  </div>

                  <div className="bg-card border border-border rounded-lg p-4 space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">👤</span>
                      <h4 className="font-semibold">Account Switchers</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Switch between workspaces, accounts, or profiles quickly.
                    </p>
                    <div className="text-xs text-muted-foreground">
                      State: controlled | Groups: by workspace
                    </div>
                  </div>

                  <div className="bg-card border border-border rounded-lg p-4 space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">🛠️</span>
                      <h4 className="font-semibold">Admin Tools</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Give power users a keyboard-first way to run admin tasks.
                    </p>
                    <div className="text-xs text-muted-foreground">
                      Disabled: for restricted actions
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
                  <div className="text-blue-600">Command</div>
                  <div className="ml-4 text-green-600">├── CommandInput</div>
                  <div className="ml-4 text-purple-600">├── CommandList</div>
                  <div className="ml-8 text-orange-600">├── CommandEmpty</div>
                  <div className="ml-8 text-pink-600">├── CommandGroup</div>
                  <div className="ml-12 text-cyan-600">│   ├── CommandItem</div>
                  <div className="ml-12 text-cyan-600">│   └── CommandShortcut</div>
                  <div className="ml-8 text-gray-600">└── CommandSeparator</div>
                </div>
              </div>

              {/* Import Statement */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-foreground">Import</h3>
                <div className="relative">
                  <div className="bg-card border border-border rounded-lg p-4 font-mono text-sm overflow-x-auto">
                    <code className="text-foreground">
                      {`import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";`}
                    </code>
                  </div>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="absolute top-2 right-2 h-8 w-8 p-0 hover:bg-muted"
                    onClick={() => handleCopy(`import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";`)}
                  >
                    <Copy className="h-3 w-3" />
                  </Button>
                </div>
              </div>

              {/* Command Props */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-foreground">
                  Command
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-border rounded-lg">
                    <thead>
                      <tr className="bg-muted/50">
                        <th className="border border-border p-3 text-left font-medium">Prop</th>
                        <th className="border border-border p-3 text-left font-medium">Type</th>
                        <th className="border border-border p-3 text-left font-medium">Default</th>
                        <th className="border border-border p-3 text-left font-medium">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-border p-3 font-mono text-sm">open</td>
                        <td className="border border-border p-3 text-sm">boolean</td>
                        <td className="border border-border p-3 text-sm">undefined</td>
                        <td className="border border-border p-3 text-sm">
                          The controlled open state of the palette. Use with onOpenChange.
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-border p-3 font-mono text-sm">onOpenChange</td>
                        <td className="border border-border p-3 text-sm">{"(open: boolean) => void"}</td>
                        <td className="border border-border p-3 text-sm">undefined</td>
                        <td className="border border-border p-3 text-sm">
                          Event handler called when the open state should change.
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-border p-3 font-mono text-sm">placeholder</td>
                        <td className="border border-border p-3 text-sm">string</td>
                        <td className="border border-border p-3 text-sm">"Type a command or search..."</td>
                        <td className="border border-border p-3 text-sm">
                          Placeholder text passed down to CommandInput via context.
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-border p-3 font-mono text-sm">className</td>
                        <td className="border border-border p-3 text-sm">string</td>
                        <td className="border border-border p-3 text-sm">undefined</td>
                        <td className="border border-border p-3 text-sm">
                          Additional CSS class names to apply to the palette panel.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* CommandInput Props */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-foreground">
                  CommandInput
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-border rounded-lg">
                    <thead>
                      <tr className="bg-muted/50">
                        <th className="border border-border p-3 text-left font-medium">Prop</th>
                        <th className="border border-border p-3 text-left font-medium">Type</th>
                        <th className="border border-border p-3 text-left font-medium">Default</th>
                        <th className="border border-border p-3 text-left font-medium">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-border p-3 font-mono text-sm">className</td>
                        <td className="border border-border p-3 text-sm">string</td>
                        <td className="border border-border p-3 text-sm">undefined</td>
                        <td className="border border-border p-3 text-sm">
                          Additional CSS class names to apply to the input.
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-border p-3 font-mono text-sm">...props</td>
                        <td className="border border-border p-3 text-sm">InputHTMLAttributes</td>
                        <td className="border border-border p-3 text-sm">-</td>
                        <td className="border border-border p-3 text-sm">
                          Any native input prop, e.g. onChange for filtering.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* CommandList Props */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-foreground">
                  CommandList
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-border rounded-lg">
                    <thead>
                      <tr className="bg-muted/50">
                        <th className="border border-border p-3 text-left font-medium">Prop</th>
                        <th className="border border-border p-3 text-left font-medium">Type</th>
                        <th className="border border-border p-3 text-left font-medium">Default</th>
                        <th className="border border-border p-3 text-left font-medium">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-border p-3 font-mono text-sm">className</td>
                        <td className="border border-border p-3 text-sm">string</td>
                        <td className="border border-border p-3 text-sm">undefined</td>
                        <td className="border border-border p-3 text-sm">
                          Additional CSS class names to apply to the scrollable list container.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* CommandGroup Props */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-foreground">
                  CommandGroup
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-border rounded-lg">
                    <thead>
                      <tr className="bg-muted/50">
                        <th className="border border-border p-3 text-left font-medium">Prop</th>
                        <th className="border border-border p-3 text-left font-medium">Type</th>
                        <th className="border border-border p-3 text-left font-medium">Default</th>
                        <th className="border border-border p-3 text-left font-medium">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-border p-3 font-mono text-sm">heading</td>
                        <td className="border border-border p-3 text-sm">string</td>
                        <td className="border border-border p-3 text-sm">undefined</td>
                        <td className="border border-border p-3 text-sm">
                          Optional label shown above the group's items.
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-border p-3 font-mono text-sm">className</td>
                        <td className="border border-border p-3 text-sm">string</td>
                        <td className="border border-border p-3 text-sm">undefined</td>
                        <td className="border border-border p-3 text-sm">
                          Additional CSS class names to apply to the group.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* CommandItem Props */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-foreground">
                  CommandItem
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-border rounded-lg">
                    <thead>
                      <tr className="bg-muted/50">
                        <th className="border border-border p-3 text-left font-medium">Prop</th>
                        <th className="border border-border p-3 text-left font-medium">Type</th>
                        <th className="border border-border p-3 text-left font-medium">Default</th>
                        <th className="border border-border p-3 text-left font-medium">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-border p-3 font-mono text-sm">value</td>
                        <td className="border border-border p-3 text-sm">string</td>
                        <td className="border border-border p-3 text-sm">-</td>
                        <td className="border border-border p-3 text-sm">
                          Identifier passed to onSelect when the item is chosen.
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-border p-3 font-mono text-sm">onSelect</td>
                        <td className="border border-border p-3 text-sm">{"(value: string) => void"}</td>
                        <td className="border border-border p-3 text-sm">undefined</td>
                        <td className="border border-border p-3 text-sm">
                          Called when the item is clicked or activated.
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-border p-3 font-mono text-sm">disabled</td>
                        <td className="border border-border p-3 text-sm">boolean</td>
                        <td className="border border-border p-3 text-sm">false</td>
                        <td className="border border-border p-3 text-sm">
                          Prevents selection and dims the item when true.
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-border p-3 font-mono text-sm">className</td>
                        <td className="border border-border p-3 text-sm">string</td>
                        <td className="border border-border p-3 text-sm">undefined</td>
                        <td className="border border-border p-3 text-sm">
                          Additional CSS class names to apply to the item.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* CommandEmpty / CommandSeparator / CommandShortcut Props */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-foreground">
                  CommandEmpty, CommandSeparator & CommandShortcut
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-border rounded-lg">
                    <thead>
                      <tr className="bg-muted/50">
                        <th className="border border-border p-3 text-left font-medium">Component</th>
                        <th className="border border-border p-3 text-left font-medium">Prop</th>
                        <th className="border border-border p-3 text-left font-medium">Type</th>
                        <th className="border border-border p-3 text-left font-medium">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-border p-3 font-mono text-sm">CommandEmpty</td>
                        <td className="border border-border p-3 font-mono text-sm">children</td>
                        <td className="border border-border p-3 text-sm">ReactNode</td>
                        <td className="border border-border p-3 text-sm">
                          Message shown when there are no results. Defaults to "No results found."
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-border p-3 font-mono text-sm">CommandSeparator</td>
                        <td className="border border-border p-3 font-mono text-sm">className</td>
                        <td className="border border-border p-3 text-sm">string</td>
                        <td className="border border-border p-3 text-sm">
                          Additional CSS class names for the divider line.
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-border p-3 font-mono text-sm">CommandShortcut</td>
                        <td className="border border-border p-3 font-mono text-sm">className</td>
                        <td className="border border-border p-3 text-sm">string</td>
                        <td className="border border-border p-3 text-sm">
                          Additional CSS class names for the shortcut label, right-aligned within an item.
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
                      <li>• Render Command once, near the root of your app, for a global palette</li>
                      <li>• It listens for ⌘K/Ctrl+K automatically — no extra wiring needed</li>
                      <li>• Wrap CommandInput and CommandList as direct children of Command</li>
                      <li>• Group related CommandItems with CommandGroup and a heading</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-950/20 rounded-lg p-4 space-y-3">
                    <h4 className="font-semibold text-blue-800 dark:text-blue-200">State Management</h4>
                    <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                      <li>• <strong>Uncontrolled:</strong> omit open/onOpenChange to let Command manage its own state</li>
                      <li>• <strong>Controlled:</strong> pass <code className="bg-blue-100 dark:bg-blue-900 px-1 py-0.5 rounded">open</code> and <code className="bg-blue-100 dark:bg-blue-900 px-1 py-0.5 rounded">onOpenChange</code> to open it from a button or menu elsewhere</li>
                      <li>• Filtering logic lives in your own component — pass a filtered list of CommandItems as children</li>
                      <li>• Call onOpenChange(false) inside onSelect to close after a selection</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 dark:bg-green-950/20 rounded-lg p-4 space-y-3">
                    <h4 className="font-semibold text-green-800 dark:text-green-200">Accessibility Notes</h4>
                    <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                      <li>• Autofocuses the input when the palette opens</li>
                      <li>• Escape key closes the palette from anywhere inside it</li>
                      <li>• Consider adding aria-label to icon-only CommandItems</li>
                      <li>• Backdrop click and outside click both dismiss the palette</li>
                    </ul>
                  </div>

                  <div className="bg-purple-50 dark:bg-purple-950/20 rounded-lg p-4 space-y-3">
                    <h4 className="font-semibold text-purple-800 dark:text-purple-200">Styling & Customization</h4>
                    <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1">
                      <li>• All components accept <code className="bg-purple-100 dark:bg-purple-900 px-1 py-0.5 rounded">className</code> for custom styling</li>
                      <li>• Backdrop opacity and panel width are controlled in the Command wrapper</li>
                      <li>• Icons in CommandItem are just children — bring your own icon set</li>
                      <li>• Dark mode support with CSS custom properties</li>
                    </ul>
                  </div>

                  <div className="bg-orange-50 dark:bg-orange-950/20 rounded-lg p-4 space-y-3">
                    <h4 className="font-semibold text-orange-800 dark:text-orange-200">Performance Tips</h4>
                    <ul className="text-sm text-orange-700 dark:text-orange-300 space-y-1">
                      <li>• Debounce input onChange for remote or expensive filtering</li>
                      <li>• Memoize filtered results with useMemo to avoid recomputation</li>
                      <li>• Virtualize CommandList for lists beyond a few hundred items</li>
                      <li>• Keep onSelect handlers lightweight to keep selection feeling instant</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Common Patterns */}
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-foreground">Common Patterns</h3>
                <div className="space-y-4">
                  <div className="bg-card border border-border rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Global Search Trigger</h4>
                    <p className="text-sm text-muted-foreground mb-3">Render once near the root; it opens itself on ⌘K/Ctrl+K.</p>
                    <div className="relative">
                      <pre className="bg-muted rounded p-3 text-sm overflow-x-auto">
                        <code>{`<Command>
  <CommandInput placeholder="Search..." />
  <CommandList>
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Pages">
      <CommandItem onSelect={() => router.push("/docs")}>
        Docs
      </CommandItem>
    </CommandGroup>
  </CommandList>
</Command>`}</code>
                      </pre>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="absolute top-1 right-1 h-6 w-6 p-0"
                        onClick={() => handleCopy(`<Command>
  <CommandInput placeholder="Search..." />
  <CommandList>
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Pages">
      <CommandItem onSelect={() => router.push("/docs")}>
        Docs
      </CommandItem>
    </CommandGroup>
  </CommandList>
</Command>`)}
                      >
                        <Copy className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>

                  <div className="bg-card border border-border rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Button-Triggered Palette</h4>
                    <p className="text-sm text-muted-foreground mb-3">Control open state from a visible search button.</p>
                    <div className="relative">
                      <pre className="bg-muted rounded p-3 text-sm overflow-x-auto">
                        <code>{`const [open, setOpen] = useState(false);

<button onClick={() => setOpen(true)}>Search...</button>

<Command open={open} onOpenChange={setOpen}>
  <CommandInput placeholder="Type a command..." />
  <CommandList>{/* groups & items */}</CommandList>
</Command>`}</code>
                      </pre>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="absolute top-1 right-1 h-6 w-6 p-0"
                        onClick={() => handleCopy(`const [open, setOpen] = useState(false);

<button onClick={() => setOpen(true)}>Search...</button>

<Command open={open} onOpenChange={setOpen}>
  <CommandInput placeholder="Type a command..." />
  <CommandList>{/* groups & items */}</CommandList>
</Command>`)}
                      >
                        <Copy className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>

                  <div className="bg-card border border-border rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Filtered Data Source</h4>
                    <p className="text-sm text-muted-foreground mb-3">Filter your own item list based on the input value.</p>
                    <div className="relative">
                      <pre className="bg-muted rounded p-3 text-sm overflow-x-auto">
                        <code>{`const [query, setQuery] = useState("");
const filtered = items.filter((i) =>
  i.label.toLowerCase().includes(query.toLowerCase())
);

<CommandInput onChange={(e) => setQuery(e.target.value)} />
<CommandList>
  {filtered.map((item) => (
    <CommandItem key={item.id} onSelect={() => select(item)}>
      {item.label}
    </CommandItem>
  ))}
</CommandList>`}</code>
                      </pre>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="absolute top-1 right-1 h-6 w-6 p-0"
                        onClick={() => handleCopy(`const [query, setQuery] = useState("");
const filtered = items.filter((i) =>
  i.label.toLowerCase().includes(query.toLowerCase())
);

<CommandInput onChange={(e) => setQuery(e.target.value)} />
<CommandList>
  {filtered.map((item) => (
    <CommandItem key={item.id} onSelect={() => select(item)}>
      {item.label}
    </CommandItem>
  ))}
</CommandList>`)}
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

/**
 * Renders the live preview for a given example index.
 * Kept separate so each example manages its own open state
 * without re-triggering re-renders of the whole docs page.
 */
function ExamplePreviewButton({ index }) {
  const [open, setOpen] = React.useState(false);

  const label =
    index === 6
      ? "Open with the button, or press ⌘K / Ctrl+K"
      : "Click to open this example";

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="px-4 py-2 border border-border rounded-md text-sm text-muted-foreground hover:bg-muted transition-colors"
      >
        {label}
      </button>
      <Command open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem onSelect={() => setOpen(false)}>Calendar</CommandItem>
            <CommandItem onSelect={() => setOpen(false)}>
              Search Emoji
            </CommandItem>
            <CommandItem onSelect={() => setOpen(false)}>
              Profile
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </>
  );
}

export default CommandComponent;