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
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

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
        },
        {
          title: "Installation",
          url: "/docs/Installation",
          description: "Step-by-step installation guide",
        },
      ],
    },
    {
      title: "Components",
      icon: Package,
      url: "#",
      items: [
        {
          title: "Alert",
          url: "/docs/Components/Alert",
          description: "Customizable alert components",
        },
        {
          title: "Button",
          url: "/docs/Components/button",
          description: "Interactive button styles",
        },
        {
          title: "Badge",
          url: "/docs/Components/Badge",
          description: "Status and tag indicators",
        },
        {
          title: "Card",
          url: "/docs/Components/Card",
          description: "Flexible card layouts",
        },
        {
          title: "Fancy Testimonial Sliders",
          url: "/docs/Components/Fancy-Testimonials-Slider",
          description: "Fancy Testimonial Sliders",
        },
        {
          title: "Modal",
          url: "/docs/Components/Modal",
          description: "Popup dialog components",
        },
        {
          title: "Progress",
          url: "/docs/Components/Progress",
          description: "Progress indicators",
        },
        {
          title: "Switch",
          url: "/docs/Components/Switch",
          description: "Toggle Switch components",
        },
        {
          title: "Scratch To Reveal",
          url: "/docs/Components/Scratch-To-Reveal",
          description:
            "An interactive scratch card component that reveals content when scratched",
        },
        {
          title: "Signature",
          url: "/docs/Components/Signature",
          description:
            "A component for capturing and displaying electronic signatures",
        },
        {
          title: "Select",
          url: "/docs/Components/Select",
          description: "Toggle Select components",
        },
        {
          title: "Tabs",
          url: "/docs/Components/Tabs",
          description: "Tab navigation components",
        },
        {
          title: "Toast",
          url: "/docs/Components/Toast",
          description: "Notification toasts",
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
        className="dark:bg-gray-900 bg-gray-50 border-r dark:border-gray-800 border-gray-200 shadow-lg"
      >
        <SidebarHeader className="border-b dark:border-gray-800 border-gray-200 p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
          <SidebarMenu>
            <SidebarMenuItem>
              <Link
                href="/"
                className="flex gap-4 items-center hover:opacity-80 transition-opacity"
              >
                <div className="relative">
                  <Image
                    src="/logo2.png"
                    alt="Logo"
                    width={50}
                    height={50}
                    className="rounded-lg shadow-md"
                  />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                </div>
                <div>
                  <h1 className="text-gray-800 dark:text-white text-[1.4rem] font-semibold">
                    Elementra UI
                  </h1>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    v0.1.5 - Documentation
                  </span>
                </div>
              </Link>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>

        {/* AI-Powered Search */}
        <div className="p-4 border-b dark:border-gray-800 border-gray-200 bg-white dark:bg-gray-950">
          <form onSubmit={handleSearch} className="relative">
            <Input
              type="search"
              placeholder="AI-powered search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pr-10 rounded-full border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600 transition-all"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-500 transition-colors" />
          </form>
        </div>

        <SidebarContent className="py-4 overflow-y-auto">
          <SidebarGroup>
            <SidebarMenu>
              {navigationData.navMain.map((section) => (
                <SidebarMenuItem key={section.title} className="mb-2 px-2">
                  <SidebarMenuButton
                    onClick={() => toggleMenu(section.title)}
                    className="flex items-center justify-between w-full text-lg py-3 px-4 hover:bg-blue-50 dark:hover:bg-gray-800 rounded-lg transition-all duration-200 group"
                  >
                    <div className="flex items-center gap-3">
                      {section.icon &&
                        React.createElement(section.icon, {
                          className:
                            "w-5 h-5 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform",
                        })}
                      <span className="font-medium">{section.title}</span>
                    </div>
                    {section.items?.length ? (
                      openMenus[section.title] ? (
                        <ChevronDown className="w-4 h-4 text-blue-500 transition-transform" />
                      ) : (
                        <ChevronRight className="w-4 h-4 text-gray-500 transition-transform" />
                      )
                    ) : null}
                  </SidebarMenuButton>

                  {section.items?.length && openMenus[section.title] ? (
                    <SidebarMenuSub className="mt-2 space-y-3 pl-4">
                      {section.items.map((item) => (
                        <SidebarMenuSubItem key={item.title} className="group">
                          <SidebarMenuSubButton
                            asChild
                            isActive={path === item.url}
                            className={`
                              w-full h-8 px-4 rounded-md 
                              ${
                                path === item.url
                                  ? "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-medium"
                                  : "hover:bg-gray-100 dark:hover:bg-gray-800 hover:translate-x-1"
                              }
                              transition-all duration-200
                            `}
                          >
                            <Link
                              href={item.url}
                              className="flex flex-col items-center justify-center"
                            >
                              <span className="font-normal text-md">
                                {item.title}
                              </span>
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
        <div className="p-4 border-t dark:border-gray-800 border-gray-200 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
          <Dialog open={aiAssistantOpen} onOpenChange={setAiAssistantOpen}>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                className="w-full flex items-center justify-center gap-2 bg-white dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-gray-700 border-blue-200 dark:border-gray-700 text-blue-700 dark:text-blue-300 shadow-sm hover:shadow transition-all duration-200"
                onClick={handleAiAssistant}
              >
                <Sparkles className="w-5 h-5 text-purple-500 animate-pulse" />
                AI Assistant
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] border-blue-200 dark:border-gray-700 shadow-xl">
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2 text-blue-700 dark:text-blue-300">
                  <Bot className="w-6 h-6 text-purple-500" />
                  AI Assistant
                </DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                {aiResponse ? (
                  <div className="text-gray-600 dark:text-gray-300 bg-blue-50 dark:bg-gray-800 p-4 rounded-lg border border-blue-100 dark:border-gray-700">
                    {aiResponse}
                  </div>
                ) : (
                  <p className="text-gray-500 animate-pulse">
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
