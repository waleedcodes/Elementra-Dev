import localFont from "next/font/local";
import { Jost } from "next/font/google"; // Importing Jost font from Google Fonts
import "./globals.css";
import { Providers } from "./providers";
import { Toaster } from "@/components/ui/sonner";

const jost = Jost({
  // Adding Jost font with all weights
  subsets: ["latin"],
  weights: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Elementra UI | Build Awesome React Reusable UI Components", // Fixed capitalization
  description:
    "Elementra is a modern, reusable component library designed to simplify your workflow and accelerate the development of stunning, accessible, and responsive user interfaces. Built with React.js, Next.js, Tailwind CSS, and Framer Motion, Elementra empowers developers to craft beautiful UIs with ease.",
  url: "https://elementra-ui.vercel.app",
  siteName: "Elementra UI",
  type: "website",
  keywords:
    "component library, React, Next.js, Tailwind CSS, Framer Motion, UI design",
  author: "Elementra Team",
  robots: "index, follow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo2.png" />
      </head>
      <body
        className={jost.className} // Including Jost font variable
      >
        <Providers>
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
