"use client";
import * as React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import {
  ChevronDown,
  ChevronRight,
  Home,
  Book,
  Package,
  HelpCircle,
  Sparkles,
  Search,
  Bot,
  FileText,
  Layers,
  Palette,
  Settings,
  Code,
  AlertCircle,
  CreditCard,
  Star,
  ToggleLeft,
  Mouse,
  Hash,
  Menu,
  Bell,
  ChevronUp,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs } from "./Tabs";

// Enhanced navigation data with icons and additional structure
const navigationData = {
  navMain: [
    {
      title: "Getting Started",
      icon: Home,
      url: "#",
      items: [
        {
          title: "Introduction",
          url: "/docs/Introduction",
          description: "Quick overview of the project",
          icon: FileText,
        },
        {
          title: "Installation",
          url: "/docs/Installation",
          description: "Step-by-step installation guide",
          icon: Settings,
        },
      ],
    },
    {
      title: "Components",
      icon: Package,
      url: "#",
      items: [
        {
          title: "Accordion",
          url: "/docs/Components/accordion",
          description: "Collapsible content sections",
          icon: ChevronUp,
        },
        {
          title: "Alert",
          url: "/docs/Components/Alert",
          description: "Customizable alert components",
          icon: AlertCircle,
        },
        {
          title: "Button",
          url: "/docs/Components/button",
          description: "Interactive button styles",
          icon: Mouse,
        },
        {
          title: "Badge",
          url: "/docs/Components/Badge",
          description: "Status and tag indicators",
          icon: Star,
        },
        {
          title: "Card",
          url: "/docs/Components/Card",
          description: "Flexible card layouts",
          icon: CreditCard,
        },
        {
          title: "Fancy Testimonial",
          url: "/docs/Components/Fancy-Testimonials-Slider",
          description: "Fancy Testimonial Sliders",
          icon: Sparkles,
        },
        {
          title: "Modal",
          url: "/docs/Components/Modal",
          description: "Popup dialog components",
          icon: Layers,
        },
        {
          title: "Progress",
          url: "/docs/Components/Progress",
          description: "Progress indicators",
          icon: Palette,
        },
        {
          title: "Switch",
          url: "/docs/Components/Switch",
          description: "Toggle Switch components",
          icon: ToggleLeft,
        },
        {
          title: "Scratch To Reveal",
          url: "/docs/Components/Scratch-To-Reveal",
          description:
            "An interactive scratch card component that reveals content when scratched",
          icon: Hash,
        },
        {
          title: "Signature",
          url: "/docs/Components/Signature",
          description:
            "A component for capturing and displaying electronic signatures",
          icon: Code,
        },
        {
          title: "Select",
          url: "/docs/Components/Select",
          description: "Toggle Select components",
          icon: Menu,
        },
        {
          title: "Tabs",
          url: "/docs/Components/Tabs",
          description: "Tab navigation components",
          icon: Tabs,
        },
        {
          title: "Toast",
          url: "/docs/Components/Toast",
          description: "Notification toasts",
          icon: Bell,
        },
      ],
    },
  ],
}; 

export function AppSidebar({ ...props }) {
  const path = usePathname();
  const [openMenus, setOpenMenus] = React.useState({});
  const [searchQuery, setSearchQuery] = React.useState("");
  const [aiAssistantOpen, setAiAssistantOpen] = React.useState(false);
  const [aiResponse, setAiResponse] = React.useState("");

  // Initialize commonly used sections to be open by default
  React.useEffect(() => {
    setOpenMenus({
      "Getting Started": true,
      Components: true,
    });
  }, []);

  const toggleMenu = (title) => {
    setOpenMenus((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    // Placeholder for AI-powered search functionality
    console.log("Searching:", searchQuery);
    // In a real implementation, this would call an AI search API
  };

  const handleAiAssistant = async () => {
    try {
      // Placeholder for AI assistant interaction
      // In a real implementation, this would call an AI service
      setAiResponse(
        "I'm an AI assistant. How can I help you today? I can assist with code generation, documentation search, and design advice."
      );
    } catch (error) {
      setAiResponse("Sorry, I encountered an error. Please try again.");
    }
  };

  return (
    <>
      <Sidebar
        {...props}
        className="bg-sidebar border-sidebar-border shadow-lg"
      >
        <SidebarHeader className="border-b border-sidebar-border p-4 bg-gradient-to-r from-sidebar/50 to-sidebar">
          <SidebarMenu>
            <SidebarMenuItem>
              <Link
                href="/"
                className="flex gap-4 items-center hover:opacity-80 transition-opacity"
              >
                <div className="relative">
                  <Image
                    src="/icon2.png"
                    alt="Logo"
                    width={50}
                    height={50}
                    className="rounded-lg shadow-md"
                  />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                </div>
                <div>
                  <h1 className="text-sidebar-foreground text-[1.4rem] font-semibold">
                    Elementra UI
                  </h1>
                  <span className="text-xs text-muted-foreground">
                    v0.1.8 - Documentation
                  </span>
                </div>
              </Link>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>

        {/* AI-Powered Search */}
        <div className="p-4 border-b border-sidebar-border bg-card">
          <div className="flex gap-2 mb-3">
            <div className="flex-1">
              <form onSubmit={handleSearch} className="relative">
                <Input
                  type="search"
                  placeholder="AI-powered search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pr-10 rounded-full border-input focus:ring-2 focus:ring-ring transition-all"
                />
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors" />
              </form>
            </div>
            <ThemeToggle />
          </div>
        </div>

        <SidebarContent className="py-4 overflow-y-auto">
          <SidebarGroup>
            <SidebarMenu>
              {navigationData.navMain.map((section) => (
                <SidebarMenuItem key={section.title} className="mb-2 px-2">
                  <SidebarMenuButton
                    onClick={() => toggleMenu(section.title)}
                    className="flex items-center justify-between w-full text-lg py-3 px-4 hover:bg-sidebar-accent rounded-lg transition-all duration-200 group"
                  >
                    <div className="flex items-center gap-3">
                      {section.icon &&
                        React.createElement(section.icon, {
                          className:
                            "w-5 h-5 text-sidebar-primary group-hover:scale-110 transition-transform",
                        })}
                      <span className="font-medium text-sidebar-foreground">{section.title}</span>
                    </div>
                    {section.items?.length ? (
                      openMenus[section.title] ? (
                        <ChevronDown className="w-4 h-4 text-sidebar-primary transition-transform" />
                      ) : (
                        <ChevronRight className="w-4 h-4 text-muted-foreground transition-transform" />
                      )
                    ) : null}
                  </SidebarMenuButton>

                  {section.items?.length && openMenus[section.title] ? (
                    <SidebarMenuSub className="mt-2 space-y-1 pl-4">
                      {section.items.map((item) => (
                        <SidebarMenuSubItem key={item.title} className="group">
                          <SidebarMenuSubButton
                            asChild
                            isActive={path === item.url}
                            className={`
                              w-full h-auto min-h-[2.5rem] px-4 py-2 rounded-md 
                              ${
                                path === item.url
                                  ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium border border-sidebar-primary/20"
                                  : "hover:bg-sidebar-accent/50 hover:translate-x-1"
                              }
                              transition-all duration-200
                            `}
                          >
                            <Link
                              href={item.url}
                              className="flex items-center gap-3 w-full"
                            >
                              {item.icon &&
                                React.createElement(item.icon, {
                                  className: `w-4 h-4 ${
                                    path === item.url
                                      ? "text-sidebar-primary"
                                      : "text-muted-foreground"
                                  }`,
                                })}
                              <div className="flex flex-col items-start">
                                <span className="font-normal text-sm">
                                  {item.title}
                                </span>
                                {item.description && (
                                  <span className="text-xs text-muted-foreground truncate max-w-[180px]">
                                    {item.description}
                                  </span>
                                )}
                              </div>
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  ) : null}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>

        {/* AI Assistant Quick Access */}
        <div className="p-4 border-t border-sidebar-border bg-gradient-to-r from-sidebar/50 to-sidebar">
          <Dialog open={aiAssistantOpen} onOpenChange={setAiAssistantOpen}>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                className="w-full flex items-center justify-center gap-2 bg-card hover:bg-sidebar-accent border-sidebar-border text-sidebar-foreground shadow-sm hover:shadow transition-all duration-200"
                onClick={handleAiAssistant}
              >
                <Sparkles className="w-5 h-5 text-primary animate-pulse" />
                AI Assistant
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] border-border shadow-xl">
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2 text-primary">
                  <Bot className="w-6 h-6 text-primary" />
                  AI Assistant
                </DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                {aiResponse ? (
                  <div className="text-foreground bg-muted p-4 rounded-lg border border-border">
                    {aiResponse}
                  </div>
                ) : (
                  <p className="text-muted-foreground animate-pulse">
                    Click to activate the AI assistant and get help.
                  </p>
                )}
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <SidebarRail />
      </Sidebar>
    </>
  );
}
