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
  Calendar,
  CreditCard,
  Star,
  ToggleLeft,
  Mouse,
  Hash,
  Menu,
  Bell,
  ChevronUp,
  User,
  ShieldAlert,
  PanelBottom,
  UploadCloud,
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
          url: "/docs/Components/alert",
          description: "Customizable alert components",
          icon: AlertCircle,
        },
        {
          title: "Alert Dialog",
          url: "/docs/Components/alert-dialog",
          description: "Modal confirmation alerts",
          icon: ShieldAlert,
        },
        {
          title: "Aspect Ratio",
          url: "/docs/Components/aspect-ratio",
          description: "Enforces aspect ratio for images & videos",
          icon: CreditCard,
        },
        {
          title: "Avatar",
          url: "/docs/Components/avatar",
          description: "User profile images with fallbacks",
          icon: User,
        },
        {
          title: "Badge",
          url: "/docs/Components/badge",
          description: "Status and tag indicators",
          icon: Star,
        },
        {
          title: "Breadcrumb",
          url: "/docs/Components/breadcrumb",
          description: "Navigation breadcrumb trail",
          icon: ChevronRight,
        },
        {
          title: "Button",
          url: "/docs/Components/button",
          description: "Interactive button styles",
          icon: Mouse,
        },
        {
          title: "Calendar",
          url: "/docs/Components/calendar",
          description: "Date picker and calendar component",
          icon: Calendar,
        },
        {
          title: "Card",
          url: "/docs/Components/card",
          description: "Flexible card layouts",
          icon: CreditCard,
        },
        {
          title: "Carousel",
          url: "/docs/Components/carousel",
          description: "Interactive slideshow slider",
          icon: Sparkles,
        },
        {
          title: "Checkbox",
          url: "/docs/Components/checkbox",
          description: "Selection box control",
          icon: ToggleLeft,
        },
        {
          title: "Collapsible",
          url: "/docs/Components/collapsible",
          description: "Expandable content sections",
          icon: ChevronDown,
        },
        {
          title: "Combobox",
          url: "/docs/Components/combobox",
          description: "Autocomplete combobox input",
          icon: Menu,
        },
        {
          title: "Command",
          url: "/docs/Components/command",
          description: "Fast command palette",
          icon: Code,
        },
        {
          title: "Context Menu",
          url: "/docs/Components/context-menu",
          description: "Right-click context menu",
          icon: Menu,
        },
        {
          title: "Data Table",
          url: "/docs/Components/data-table",
          description: "Powerful data grid tables",
          icon: Layers,
        },
        {
          title: "Date Picker",
          url: "/docs/Components/date-picker",
          description: "Date selection input dropdown",
          icon: Calendar,
        },
        {
          title: "Dialog",
          url: "/docs/Components/dialog",
          description: "Modal dialog windows",
          icon: Layers,
        },
        {
          title: "Drawer",
          url: "/docs/Components/drawer",
          description: "Sliding drawer panels",
          icon: PanelBottom,
        },
        {
          title: "Dropdown Menu",
          url: "/docs/Components/dropdown-menu",
          description: "Interactive action menus",
          icon: ChevronDown,
        },
        {
          title: "Fancy Testimonial",
          url: "/docs/Components/fancy-testimonials-slider",
          description: "Fancy Testimonial Sliders",
          icon: Sparkles,
        },
        {
          title: "File Upload",
          url: "/docs/Components/file-upload",
          description: "Drag & drop file dropzone uploader",
          icon: UploadCloud,
        },
        {
          title: "Hover Card",
          url: "/docs/Components/hover-card",
          description: "Card preview on hover",
          icon: CreditCard,
        },
        {
          title: "Input",
          url: "/docs/Components/input",
          description: "Text input fields with icons & toggles",
          icon: FileText,
        },
        {
          title: "Input OTP",
          url: "/docs/Components/input-otp",
          description: "One-time password PIN input",
          icon: Hash,
        },
        {
          title: "Label",
          url: "/docs/Components/label",
          description: "Accessible form field labels",
          icon: FileText,
        },
        {
          title: "Menubar",
          url: "/docs/Components/menubar",
          description: "Desktop application top navigation bar",
          icon: Menu,
        },
        {
          title: "Modal",
          url: "/docs/Components/modal",
          description: "Popup dialog components",
          icon: Layers,
        },
        {
          title: "Navigation Menu",
          url: "/docs/Components/navigation-menu",
          description: "Responsive top navigation bar",
          icon: Menu,
        },
        {
          title: "Pagination",
          url: "/docs/Components/pagination",
          description: "Navigation pagination controls",
          icon: ChevronRight,
        },
        {
          title: "Popover",
          url: "/docs/Components/popover",
          description: "Floating popover content",
          icon: Layers,
        },
        {
          title: "Progress",
          url: "/docs/Components/progress",
          description: "Progress indicators",
          icon: Palette,
        },
        {
          title: "Radio",
          url: "/docs/Components/radio",
          description: "Radio selection groups",
          icon: ToggleLeft,
        },
        {
          title: "Resizable",
          url: "/docs/Components/resizable",
          description: "Resizable panel layouts",
          icon: Layers,
        },
        {
          title: "Scratch To Reveal",
          url: "/docs/Components/scratch-to-reveal",
          description: "Interactive scratch card component",
          icon: Hash,
        },
        {
          title: "Scroll Area",
          url: "/docs/Components/scroll-area",
          description: "Custom scrollable container viewport",
          icon: Layers,
        },
        {
          title: "Select",
          url: "/docs/Components/select",
          description: "Toggle Select components",
          icon: Menu,
        },
        {
          title: "Separator",
          url: "/docs/Components/separator",
          description: "Visual divider lines",
          icon: Layers,
        },
        {
          title: "Sheet",
          url: "/docs/Components/sheet",
          description: "Slide-over drawer panels",
          icon: Layers,
        },
        {
          title: "Sidebar",
          url: "/docs/Components/sidebar",
          description: "Collapsible navigation sidebar",
          icon: Menu,
        },
        {
          title: "Signature",
          url: "/docs/Components/signature",
          description: "Electronic signature canvas",
          icon: Code,
        },
        {
          title: "Skeleton",
          url: "/docs/Components/skeleton",
          description: "Loading placeholder shimmers",
          icon: Palette,
        },
        {
          title: "Slider",
          url: "/docs/Components/slider",
          description: "Range slider controls",
          icon: ToggleLeft,
        },
        {
          title: "Switch",
          url: "/docs/Components/switch",
          description: "Toggle Switch components",
          icon: ToggleLeft,
        },
        {
          title: "Tabs",
          url: "/docs/Components/tabs",
          description: "Tab navigation components",
          icon: Layers,
        },
        {
          title: "Textarea",
          url: "/docs/Components/textarea",
          description: "Multi-line text input fields",
          icon: FileText,
        },
        {
          title: "Toast",
          url: "/docs/Components/toast",
          description: "Notification toasts",
          icon: Bell,
        },
        {
          title: "Toggle",
          url: "/docs/Components/toggle",
          description: "Two-state toggle buttons",
          icon: ToggleLeft,
        },
        {
          title: "Tooltip",
          url: "/docs/Components/tooltip",
          description: "Informational popover hints",
          icon: HelpCircle,
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

        {/* Real-time Component Search */}
        <div className="p-4 border-b border-sidebar-border bg-card">
          <div className="flex gap-2 mb-2">
            <div className="flex-1 relative">
              <Input
                type="search"
                placeholder="Quick search 50 components..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pr-8 rounded-xl border-input text-xs focus:ring-2 focus:ring-primary/30 transition-all bg-background/80"
              />
              <Search className="absolute right-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground pointer-events-none" />
            </div>
            <ThemeToggle />
          </div>
          {searchQuery && (
            <div className="flex items-center justify-between text-[11px] text-muted-foreground px-1">
              <span>Filter: <strong className="text-foreground">{searchQuery}</strong></span>
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="text-primary hover:underline"
              >
                Clear
              </button>
            </div>
          )}
        </div>

        <SidebarContent className="py-4 overflow-y-auto">
          <SidebarGroup>
            <SidebarMenu>
              {navigationData.navMain.map((section) => {
                const filteredItems = searchQuery
                  ? section.items.filter(
                      (item) =>
                        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        item.description?.toLowerCase().includes(searchQuery.toLowerCase())
                    )
                  : section.items;

                if (searchQuery && filteredItems.length === 0) return null;

                const isExpanded = searchQuery ? true : openMenus[section.title];

                return (
                  <SidebarMenuItem key={section.title} className="mb-2 px-2">
                    <SidebarMenuButton
                      onClick={() => toggleMenu(section.title)}
                      className="flex items-center justify-between w-full text-base py-2.5 px-3 hover:bg-sidebar-accent rounded-lg transition-all duration-200 group"
                    >
                      <div className="flex items-center gap-2.5">
                        {section.icon &&
                          React.createElement(section.icon, {
                            className:
                              "w-4 h-4 text-sidebar-primary group-hover:scale-110 transition-transform",
                          })}
                        <span className="font-semibold text-sidebar-foreground">{section.title}</span>
                      </div>
                      {section.items?.length ? (
                        <div className="flex items-center gap-1.5">
                          {searchQuery && (
                            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-full bg-primary/10 text-primary font-bold">
                              {filteredItems.length}
                            </span>
                          )}
                          {isExpanded ? (
                            <ChevronDown className="w-3.5 h-3.5 text-sidebar-primary transition-transform" />
                          ) : (
                            <ChevronRight className="w-3.5 h-3.5 text-muted-foreground transition-transform" />
                          )}
                        </div>
                      ) : null}
                    </SidebarMenuButton>

                    {filteredItems?.length && isExpanded ? (
                      <SidebarMenuSub className="mt-1 space-y-0.5 pl-3">
                        {filteredItems.map((item) => (
                          <SidebarMenuSubItem key={item.title} className="group">
                            <SidebarMenuSubButton
                              asChild
                              isActive={path === item.url}
                              className={`
                                w-full h-auto min-h-[2.25rem] px-3 py-1.5 rounded-lg text-xs
                                ${
                                  path === item.url
                                    ? "bg-primary text-primary-foreground font-bold shadow-sm"
                                    : "hover:bg-sidebar-accent/70 hover:translate-x-0.5 text-muted-foreground hover:text-foreground"
                                }
                                transition-all duration-150
                              `}
                            >
                              <Link
                                href={item.url}
                                className="flex items-center gap-2.5 w-full"
                              >
                                {item.icon &&
                                  React.createElement(item.icon, {
                                    className: `w-3.5 h-3.5 ${
                                      path === item.url
                                        ? "text-primary-foreground"
                                        : "text-muted-foreground group-hover:text-foreground"
                                    }`,
                                  })}
                                <div className="truncate">
                                  <p className="truncate font-medium">{item.title}</p>
                                </div>
                              </Link>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    ) : null}
                  </SidebarMenuItem>
                );
              })}
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
