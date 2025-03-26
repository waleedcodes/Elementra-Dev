"use client";
import * as React from "react";
import { usePathname } from "next/navigation";

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
import Link from "next/link";
import Image from "next/image";

// This is sample data.
const data = {
  navMain: [
    {
      title: "Getting Started",
      url: "#",
      items: [
        {
          title: "Introduction",
          url: "/docs/Introduction",
        },
        {
          title: "Installation",
          url: "/docs/Installation",
        },
      ],
    },
    {
      title: "Components",
      url: "#",
      items: [
        {
          title: "Alert",
          url: "/docs/Components/Alert",
        },
        {
          title: "Button",
          url: "/docs/Components/button",
        },
        {
          title: "Badge",
          url: "/docs/Components/Badge",
        },
        {
          title: "Card",
          url: "/docs/Components/Card",
        },
        {
          title: "Model",
          url: "/docs/Components/Model",
        },
        {
          title: "Progress",
          url: "/docs/Components/Progress",
        },
        {
          title: "Switch",
          url: "/docs/Components/Switch",
        },
        {
          title: "Toast",
          url: "/docs/Components/Toast",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }) {
  const path = usePathname();

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <Link href="/" className="flex gap-4 items-center">
              <Image
                src="/logo2.png"
                className=""
                alt="Logo"
                width={50}
                height={50}
              />
              <h1 className="text-gray-800 dark:text-white text-[1.4rem] font-semibold">
                Elementra UI
              </h1>
            </Link>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {data.navMain.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild className="text-lg py-8">
                  <Link href={item.url} className="font-medium">
                    {item.title}
                  </Link>
                </SidebarMenuButton>
                {item.items?.length ? (
                  <SidebarMenuSub>
                    {item.items.map((item) => (
                      <SidebarMenuSubItem key={item.title}>
                        <SidebarMenuSubButton
                          asChild
                          isActive={path === item.url}
                        >
                          <Link href={item.url}>{item.title}</Link>
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
      <SidebarRail />
    </Sidebar>
  );
}
