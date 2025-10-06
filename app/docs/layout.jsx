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

const DashboardLayout = ({ children }) => { 
  const path = usePathname();
  const trimmedPath = path.replace(/^\/docs\/?/, ""); // Better regex to handle trailing slash

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        {path !== "/docs" && (
          <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="flex items-center gap-2 px-4">
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
                    <BreadcrumbPage className="text-foreground font-medium">
                      {trimmedPath || "Documentation"}
                    </BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </header>
        )}
        <div className="py-12 md:w-4/5 md:mx-auto bg-background min-h-screen">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default DashboardLayout;
