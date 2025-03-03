"use client";
import React from "react";
import { Badge } from "@/components/Badge";
import { cn } from "@/lib/utils";
import { CheckCircle, AlertTriangle, Info, Star, Bell } from "lucide-react";

// Navigation component for tabs
const DocsNav = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "examples", label: "Examples" },
    { id: "api", label: "API" },
  ];

  return (
    <div className="flex border-b mb-6">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={cn(
            "px-4 py-2 font-medium text-sm transition-colors",
            activeTab === tab.id
              ? "border-b-2 border-primary text-primary"
              : "text-gray-600 hover:text-gray-900"
          )}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

// Code block component
const CodeBlock = ({ children }) => {
  return (
    <div className="bg-gray-50 border rounded-md p-4 overflow-x-auto my-4">
      <pre className="text-sm text-gray-800">{children}</pre>
    </div>
  );
};

// Section heading
const SectionHeading = ({ number, title }) => {
  return (
    <h2 className="text-xl font-semibold mt-8 mb-4 flex items-center">
      <span className="bg-primary text-white rounded-full w-7 h-7 flex items-center justify-center text-sm mr-2">
        {number}
      </span>
      {title}
    </h2>
  );
};

// Examples component
const BadgeExamples = () => {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="font-medium mb-3">Basic Badge</h3>
        <div className="flex gap-2 mb-4">
          <Badge>Default</Badge>
        </div>
        <CodeBlock>
          {`import { Badge } from "@/components/ui/badge";

export default function BadgeExample() {
  return <Badge>Default</Badge>;
}`}
        </CodeBlock>
      </div>

      <div>
        <h3 className="font-medium mb-3">Badge Variants</h3>
        <div className="flex flex-wrap gap-2 mb-4">
          <Badge variant="default">Default</Badge>
          <Badge variant="primary">Primary</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="danger">Danger</Badge>
          <Badge variant="info">Info</Badge>
          <Badge variant="outline">Outline</Badge>
        </div>
        <CodeBlock>
          {`import { Badge } from "@/components/ui/badge";

export default function BadgeVariantsExample() {
  return (
    <div className="flex gap-2">
      <Badge variant="default">Default</Badge>
      <Badge variant="primary">Primary</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="danger">Danger</Badge>
      <Badge variant="info">Info</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  );
}`}
        </CodeBlock>
      </div>

      <div>
        <h3 className="font-medium mb-3">Badge Sizes</h3>
        <div className="flex items-center gap-2 mb-4">
          <Badge size="sm">Small</Badge>
          <Badge size="md">Medium</Badge>
          <Badge size="lg">Large</Badge>
        </div>
        <CodeBlock>
          {`import { Badge } from "@/components/ui/badge";

export default function BadgeSizesExample() {
  return (
    <div className="flex gap-2">
      <Badge size="sm">Small</Badge>
      <Badge size="md">Medium</Badge>
      <Badge size="lg">Large</Badge>
    </div>
  );
}`}
        </CodeBlock>
      </div>

      <div>
        <h3 className="font-medium mb-3">Rounded Styles</h3>
        <div className="flex gap-2 mb-4">
          <Badge rounded="default">Default Rounded</Badge>
          <Badge rounded="full">Fully Rounded</Badge>
          <Badge rounded="none">No Rounding</Badge>
        </div>
        <CodeBlock>
          {`import { Badge } from "@/components/ui/badge";

export default function BadgeRoundedExample() {
  return (
    <div className="flex gap-2">
      <Badge rounded="default">Default Rounded</Badge>
      <Badge rounded="full">Fully Rounded</Badge>
      <Badge rounded="none">No Rounding</Badge>
    </div>
  );
}`}
        </CodeBlock>
      </div>

      <div>
        <h3 className="font-medium mb-3">Animations</h3>
        <div className="flex flex-wrap gap-2 mb-4">
          <Badge animation="none">No Animation</Badge>
          <Badge animation="pulse">Pulse</Badge>
          <Badge animation="bounce">Bounce</Badge>
          <Badge animation="fade">Fade</Badge>
          <Badge animation="glow">Glow</Badge>
        </div>
        <CodeBlock>
          {`import { Badge } from "@/components/ui/badge";

export default function BadgeAnimationsExample() {
  return (
    <div className="flex gap-2">
      <Badge animation="none">No Animation</Badge>
      <Badge animation="pulse">Pulse</Badge>
      <Badge animation="bounce">Bounce</Badge>
      <Badge animation="fade">Fade</Badge>
      <Badge animation="glow">Glow</Badge>
    </div>
  );
}`}
        </CodeBlock>
      </div>

      <div>
        <h3 className="font-medium mb-3">With Icons</h3>
        <div className="flex flex-wrap gap-2 mb-4">
          <Badge variant="success">
            <CheckCircle className="mr-1 h-3 w-3" />
            Success
          </Badge>
          <Badge variant="warning">
            <AlertTriangle className="mr-1 h-3 w-3" />
            Warning
          </Badge>
          <Badge variant="info">
            <Info className="mr-1 h-3 w-3" />
            Information
          </Badge>
          <Badge variant="primary">
            <Star className="mr-1 h-3 w-3" />
            Featured
          </Badge>
          <Badge variant="secondary">
            <Bell className="mr-1 h-3 w-3" />
            Notification
          </Badge>
        </div>
        <CodeBlock>
          {`import { Badge } from "@/components/ui/badge";
import { CheckCircle, AlertTriangle, Info, Star, Bell } from 'lucide-react';

export default function BadgeWithIconsExample() {
  return (
    <div className="flex gap-2">
      <Badge variant="success">
        <CheckCircle className="mr-1 h-3 w-3" />
        Success
      </Badge>
      <Badge variant="warning">
        <AlertTriangle className="mr-1 h-3 w-3" />
        Warning
      </Badge>
      <Badge variant="info">
        <Info className="mr-1 h-3 w-3" />
        Information
      </Badge>
      <Badge variant="primary">
        <Star className="mr-1 h-3 w-3" />
        Featured
      </Badge>
      <Badge variant="secondary">
        <Bell className="mr-1 h-3 w-3" />
        Notification
      </Badge>
    </div>
  );
}`}
        </CodeBlock>
      </div>

      <div>
        <h3 className="font-medium mb-3">Combined Properties</h3>
        <div className="flex flex-wrap gap-2 mb-4">
          <Badge variant="primary" size="lg" rounded="full" animation="pulse">
            Featured
          </Badge>
          <Badge variant="success" size="sm" rounded="full">
            <CheckCircle className="mr-1 h-3 w-3" />
            Verified
          </Badge>
          <Badge variant="danger" size="lg" animation="bounce">
            Important
          </Badge>
          <Badge
            variant="outline"
            size="md"
            rounded="full"
            className="border-dashed"
          >
            Custom Style
          </Badge>
        </div>
        <CodeBlock>
          {`import { Badge } from "@/components/ui/badge";
import { CheckCircle } from 'lucide-react';

export default function CombinedBadgeExample() {
  return (
    <div className="flex gap-2">
      <Badge 
        variant="primary" 
        size="lg" 
        rounded="full" 
        animation="pulse"
      >
        Featured
      </Badge>
      <Badge 
        variant="success" 
        size="sm" 
        rounded="full"
      >
        <CheckCircle className="mr-1 h-3 w-3" />
        Verified
      </Badge>
      <Badge 
        variant="danger" 
        size="lg" 
        animation="bounce"
      >
        Important
      </Badge>
      <Badge 
        variant="outline" 
        size="md" 
        rounded="full" 
        className="border-dashed"
      >
        Custom Style
      </Badge>
    </div>
  );
}`}
        </CodeBlock>
      </div>
    </div>
  );
};

// API Reference
const ApiReference = () => {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="font-medium mb-3">Badge Component</h3>
        <p className="text-gray-700 mb-3">
          The Badge component accepts the following props:
        </p>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="py-2 px-4 border text-left text-sm font-medium text-gray-700">
                  Prop
                </th>
                <th className="py-2 px-4 border text-left text-sm font-medium text-gray-700">
                  Type
                </th>
                <th className="py-2 px-4 border text-left text-sm font-medium text-gray-700">
                  Default
                </th>
                <th className="py-2 px-4 border text-left text-sm font-medium text-gray-700">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border text-sm">variant</td>
                <td className="py-2 px-4 border text-sm">string</td>
                <td className="py-2 px-4 border text-sm">'default'</td>
                <td className="py-2 px-4 border text-sm">
                  Style variant of the badge
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 border text-sm">size</td>
                <td className="py-2 px-4 border text-sm">string</td>
                <td className="py-2 px-4 border text-sm">'md'</td>
                <td className="py-2 px-4 border text-sm">Size of the badge</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border text-sm">animation</td>
                <td className="py-2 px-4 border text-sm">string</td>
                <td className="py-2 px-4 border text-sm">'none'</td>
                <td className="py-2 px-4 border text-sm">Animation effect</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border text-sm">rounded</td>
                <td className="py-2 px-4 border text-sm">string</td>
                <td className="py-2 px-4 border text-sm">'default'</td>
                <td className="py-2 px-4 border text-sm">
                  Border radius style
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 border text-sm">className</td>
                <td className="py-2 px-4 border text-sm">string</td>
                <td className="py-2 px-4 border text-sm">undefined</td>
                <td className="py-2 px-4 border text-sm">
                  Additional CSS classes
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 border text-sm">children</td>
                <td className="py-2 px-4 border text-sm">ReactNode</td>
                <td className="py-2 px-4 border text-sm">-</td>
                <td className="py-2 px-4 border text-sm">
                  Content of the badge
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h3 className="font-medium mb-3">Variant Options</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="py-2 px-4 border text-left text-sm font-medium text-gray-700">
                  Value
                </th>
                <th className="py-2 px-4 border text-left text-sm font-medium text-gray-700">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border text-sm">'default'</td>
                <td className="py-2 px-4 border text-sm">
                  Gray badge for general purpose use
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 border text-sm">'primary'</td>
                <td className="py-2 px-4 border text-sm">
                  Blue badge for primary actions or information
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 border text-sm">'secondary'</td>
                <td className="py-2 px-4 border text-sm">
                  Purple badge for secondary actions or information
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 border text-sm">'success'</td>
                <td className="py-2 px-4 border text-sm">
                  Green badge for positive status or success messages
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 border text-sm">'warning'</td>
                <td className="py-2 px-4 border text-sm">
                  Yellow badge for warnings or cautionary information
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 border text-sm">'danger'</td>
                <td className="py-2 px-4 border text-sm">
                  Red badge for errors or dangerous actions
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 border text-sm">'info'</td>
                <td className="py-2 px-4 border text-sm">
                  Cyan badge for informational messages
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 border text-sm">'outline'</td>
                <td className="py-2 px-4 border text-sm">
                  Transparent badge with border for subtle indicators
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h3 className="font-medium mb-3">Size Options</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="py-2 px-4 border text-left text-sm font-medium text-gray-700">
                  Value
                </th>
                <th className="py-2 px-4 border text-left text-sm font-medium text-gray-700">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border text-sm">'sm'</td>
                <td className="py-2 px-4 border text-sm">
                  Small badge (px-2 py-0.5 text-xs)
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 border text-sm">'md'</td>
                <td className="py-2 px-4 border text-sm">
                  Medium badge (px-2.5 py-0.5 text-sm)
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 border text-sm">'lg'</td>
                <td className="py-2 px-4 border text-sm">
                  Large badge (px-3 py-1 text-base)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h3 className="font-medium mb-3">Animation Options</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="py-2 px-4 border text-left text-sm font-medium text-gray-700">
                  Value
                </th>
                <th className="py-2 px-4 border text-left text-sm font-medium text-gray-700">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border text-sm">'none'</td>
                <td className="py-2 px-4 border text-sm">No animation</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border text-sm">'pulse'</td>
                <td className="py-2 px-4 border text-sm">
                  Pulsing opacity animation
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 border text-sm">'bounce'</td>
                <td className="py-2 px-4 border text-sm">
                  Soft bounce animation
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 border text-sm">'fade'</td>
                <td className="py-2 px-4 border text-sm">Fade-in animation</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border text-sm">'glow'</td>
                <td className="py-2 px-4 border text-sm">
                  Glow animation with shadow effect
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// Main Badge docs page component
const BadgeDocsPage = () => {
  const [activeTab, setActiveTab] = React.useState("overview");

  return (
    <div className="max-w-8xl mx-auto px-4 py-8">
      <div className="border-b pb-8 mb-8">
        <h1 className="text-3xl font-bold mb-2">Badge</h1>
        <p className="text-gray-600">
          A badge component for highlighting information, status, or categories
          with distinct visual styles.
        </p>
      </div>

      <DocsNav activeTab={activeTab} setActiveTab={setActiveTab} />

      {activeTab === "overview" && (
        <div>
          <div className="bg-gray-100 border border-primary rounded-lg p-6 my-6 relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex flex-wrap gap-2">
                <Badge variant="default">Default</Badge>
                <Badge variant="primary">Primary</Badge>
                <Badge variant="success">Success</Badge>
                <Badge variant="warning">Warning</Badge>
                <Badge variant="danger">Danger</Badge>
                <Badge variant="info">Info</Badge>
              </div>
            </div>
          </div>

          <SectionHeading number="1" title="Installation" />
          <CodeBlock>npm i elementra-ui</CodeBlock>

          <SectionHeading number="2" title="Add Components Using CLI" />
          <CodeBlock>npx elementra-ui add</CodeBlock>
          <p className="text-gray-700 mb-4">
            Select components using the up/down arrow keys. Press spacebar to
            select multiple components, then press enter to add them to your src
            folder.
          </p>

          <SectionHeading number="3" title="Basic Usage" />
          <p className="text-gray-700 mb-4">
            Import and use the Badge component in your React components.
          </p>
          <CodeBlock>
            {`import { Badge } from "@/components/ui/badge";

export default function BadgeExample() {
  return (
    <div>
      <Badge>Default</Badge>
      <Badge variant="primary">Primary</Badge>
      <Badge variant="success">Success</Badge>
    </div>
  );
}`}
          </CodeBlock>
        </div>
      )}

      {activeTab === "examples" && <BadgeExamples />}

      {activeTab === "api" && <ApiReference />}
    </div>
  );
};

export default BadgeDocsPage;
