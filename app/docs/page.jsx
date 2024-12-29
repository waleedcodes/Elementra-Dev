"use client";
import { SidebarTrigger } from "@/components/ui/sidebar";
import Introduction from "./Introduction/page";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function Page() {
  return (
    <>
      <div className="flex items-center gap-3 pb-10">
        <SidebarTrigger />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem className="">
              <BreadcrumbLink href="/docs">Docs</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="" />
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <Introduction className="" />
    </>
  );
}
