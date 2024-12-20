import React from "react";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import Link from "next/link";

export function MacBookHome() {
  return (
    <div className="overflow-hidden dark:bg-[#0B0B0F] bg-white w-full">
      <MacbookScroll
        title={
          <span>
            This Macbook is built with Tailwindcss. <br /> No kidding.
          </span>
        }
        src="/MainHome.png"
        showGradient={true}
      />
    </div>
  );
}

