"use client";
import React from "react";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Sparkles } from "lucide-react";

const DashboardLayout = ({ children }) => { 
  const path = usePathname();
  const trimmedPath = path.replace(/^\/docs\/?/, ""); // Better regex to handle trailing slash

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="relative overflow-hidden bg-background">
        {/* Ambient 3D Mesh Lighting in Background */}
        <div className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full bg-primary/10 blur-[120px]" />
        <div className="pointer-events-none absolute top-1/2 -left-40 h-96 w-96 rounded-full bg-indigo-500/10 blur-[140px]" />

        {/* Ambient Subtle Grid Pattern */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px]" />

        {path !== "/docs" && (
          <header className="sticky top-0 z-30 flex h-16 shrink-0 items-center justify-between gap-2 border-b border-border/80 bg-background/80 px-6 backdrop-blur-md transition-all">
            <div className="flex items-center gap-3">
              <SidebarTrigger className="text-muted-foreground hover:text-foreground" />
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem className="hidden md:block">
                    <BreadcrumbLink href="/docs" className="text-muted-foreground hover:text-foreground">
                      Docs
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="hidden md:block text-muted-foreground" />
                  <BreadcrumbItem>
                    <BreadcrumbPage className="text-foreground font-medium capitalize">
                      {trimmedPath.replace(/^Components\//, "") || "Documentation"}
                    </BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>

            {/* Quick 50+ Component Badge */}
            <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-xs font-semibold text-primary">
              <Sparkles className="h-3 w-3" />
              <span>50 Interactive Components</span>
            </div>
          </header>
        )}

        <main className="relative z-10 py-10 md:w-[90%] lg:w-[85%] max-w-6xl mx-auto min-h-screen px-4 sm:px-6">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default DashboardLayout;
