import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { Providers } from "./providers";
import { Toaster } from "@/components/ui/sonner";

export const metadata = {
  metadataBase: new URL("https://elementra-ui.vercel.app"),
  title: {
    default:
      "Elementra UI - Modern React Component Library | Build Beautiful UIs Fast",
    template: "%s | Elementra UI",
  },
  description:
    "Elementra UI is a production-ready React component library built with Next.js, Tailwind CSS, and Framer Motion. Create stunning, accessible, and responsive user interfaces with 50+ customizable components. Perfect for developers who want to build modern web applications quickly.",
  keywords: [
    "React component library",
    "Next.js components",
    "Tailwind CSS components",
    "UI components",
    "React UI library",
    "Design system",
    "Frontend components",
    "Accessible components",
    "Responsive design",
    "Framer Motion",
    "TypeScript components",
    "Modern UI",
    "Web development",
    "JavaScript library",
    "Open source components",
    "React hooks",
    "Custom components",
    "Dashboard components",
    "Form components",
    "Navigation components",
  ],
  authors: [{ name: "Waleed Codes", url: "https://github.com/waleedcodes" }],
  creator: "Waleed Codes",
  publisher: "Elementra UI",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://elementra-ui.vercel.app",
    siteName: "Elementra UI",
    title: "Elementra UI - Modern React Component Library",
    description:
      "Build beautiful, accessible React applications with our comprehensive component library. 50+ components, TypeScript support, and production-ready.",
    images: [
      {
        url: "/icon2.png",
        width: 1200,
        height: 630,
        alt: "Elementra UI - React Component Library",
      },
      {
        url: "/MainHome.png",
        width: 1200,
        height: 630,
        alt: "Elementra UI Homepage Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elementra UI - Modern React Component Library",
    description:
      "Build beautiful, accessible React applications with our comprehensive component library. 50+ components, TypeScript support, and production-ready.",
    images: ["/icon2.png"],
    creator: "@waleedcodes",
  },
  icons: {
    icon: [
      { url: "/icon2.png", sizes: "32x32", type: "image/png" },
      { url: "/icon2.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/icon2.png",
    shortcut: "/icon2.png",
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: "https://elementra-ui.vercel.app",
  },
  category: "technology",
  classification: "Software Development Tools",
  other: {
    "google-site-verification": "your-google-verification-code-here",
  },
};

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://elementra-ui.vercel.app/#website",
        url: "https://elementra-ui.vercel.app/",
        name: "Elementra UI",
        description:
          "Modern React Component Library for building beautiful UIs",
        inLanguage: "en-US",
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate:
              "https://elementra-ui.vercel.app/docs?search={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "Organization",
        "@id": "https://elementra-ui.vercel.app/#organization",
        name: "Elementra UI",
        url: "https://elementra-ui.vercel.app/",
        logo: {
          "@type": "ImageObject",
          url: "https://elementra-ui.vercel.app/icon2.png",
          width: 512,
          height: 512,
        },
        description:
          "Creating modern, accessible React components for developers worldwide",
        foundingDate: "2024",
        founder: {
          "@type": "Person",
          name: "Waleed Codes",
          url: "https://github.com/waleedcodes",
        },
        sameAs: [
          "https://github.com/waleedcodes/Elementra-Dev",
          "https://www.npmjs.com/package/elementra-ui",
        ],
      },
      {
        "@type": "SoftwareApplication",
        name: "Elementra UI",
        description:
          "A comprehensive React component library with 50+ components for building modern web applications",
        url: "https://elementra-ui.vercel.app/",
        downloadUrl: "https://www.npmjs.com/package/elementra-ui",
        operatingSystem: "Cross-platform",
        applicationCategory: "DeveloperApplication",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
        author: {
          "@type": "Person",
          name: "Waleed Codes",
        },
        programmingLanguage: ["JavaScript", "TypeScript", "React"],
        runtimePlatform: ["Node.js", "Browser"],
        featureList: [
          "50+ React Components",
          "TypeScript Support",
          "Tailwind CSS Integration",
          "Framer Motion Animations",
          "Dark Mode Support",
          "Accessibility Features",
          "Responsive Design",
          "Documentation",
        ],
      },
    ],
  };

  return (
    <html lang="en" className="dark">
      <head>
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* DNS Prefetch for performance */}
        <link rel="dns-prefetch" href="//vercel.com" />
        <link rel="dns-prefetch" href="//github.com" />
        <link rel="dns-prefetch" href="//npmjs.com" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        {/* Additional Meta Tags */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
        <meta
          name="theme-color"
          content="#F97316"
          media="(prefers-color-scheme: light)"
        />
        <meta
          name="theme-color"
          content="#FB923C"
          media="(prefers-color-scheme: dark)"
        />
        <meta name="color-scheme" content="light dark" />

        {/* Apple Meta Tags */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Elementra UI" />

        {/* Microsoft Meta Tags */}
        <meta name="msapplication-TileColor" content="#F97316" />
        <meta name="msapplication-config" content="/browserconfig.xml" />

        {/* Verification Tags (replace with your actual codes) */}
        <meta
          name="google-site-verification"
          content="your-google-verification-code"
        />
        <meta name="msvalidate.01" content="your-bing-verification-code" />

        {/* Security Headers */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="SAMEORIGIN" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />

        {/* Performance Hints */}
        <link rel="preload" href="/icon2.png" as="image" type="image/png" />
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>
        <Providers>
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
