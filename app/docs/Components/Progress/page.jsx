"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { CheckCircle, AlertTriangle, Info, Star, Bell } from "lucide-react";
import { Progress } from "@/components/Progress";

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
const ProgressExamples = () => {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="font-medium mb-3">Basic Progress</h3>
        <div className="flex flex-col gap-4 mb-4">
          <Progress value={50} />
        </div>
        <CodeBlock>
          {`import { Progress } from "@/components/ui/progress";

export default function ProgressExample() {
  return <Progress value={50} />;
}`}
        </CodeBlock>
      </div>

      <div>
        <h3 className="font-medium mb-3">Progress Variants</h3>
        <div className="flex flex-col gap-4 mb-4">
          <Progress variant="default" value={30} />
          <Progress variant="primary" value={40} />
          <Progress variant="secondary" value={50} />
          <Progress variant="success" value={60} />
          <Progress variant="warning" value={70} />
          <Progress variant="danger" value={80} />
          <Progress variant="info" value={90} />
        </div>
        <CodeBlock>
          {`import { Progress } from "@/components/ui/progress";

export default function ProgressVariantsExample() {
  return (
    <div className="space-y-4">
      <Progress variant="default" value={30} />
      <Progress variant="primary" value={40} />
      <Progress variant="secondary" value={50} />
      <Progress variant="success" value={60} />
      <Progress variant="warning" value={70} />
      <Progress variant="danger" value={80} />
      <Progress variant="info" value={90} />
    </div>
  );
}`}
        </CodeBlock>
      </div>

      <div>
        <h3 className="font-medium mb-3">Progress Sizes</h3>
        <div className="flex flex-col gap-4 mb-4">
          <Progress size="xs" value={30} />
          <Progress size="sm" value={40} />
          <Progress size="md" value={50} />
          <Progress size="lg" value={60} />
          <Progress size="xl" value={70} />
        </div>
        <CodeBlock>
          {`import { Progress } from "@/components/ui/progress";

export default function ProgressSizesExample() {
  return (
    <div className="space-y-4">
      <Progress size="xs" value={30} />
      <Progress size="sm" value={40} />
      <Progress size="md" value={50} />
      <Progress size="lg" value={60} />
      <Progress size="xl" value={70} />
    </div>
  );
}`}
        </CodeBlock>
      </div>

      <div>
        <h3 className="font-medium mb-3">Additional Properties</h3>
        <div className="flex flex-col gap-4 mb-4">
          <Progress value={50} showValue />
          <Progress value={60} striped />
          <Progress value={70} animation="pulse" />
          <Progress value={80} rounded="full" />
        </div>
        <CodeBlock>
          {`import { Progress } from "@/components/ui/progress";

export default function ProgressAdditionalExample() {
  return (
    <div className="space-y-4">
      <Progress value={50} showValue />
      <Progress value={60} striped />
      <Progress value={70} animation="pulse" />
      <Progress value={80} rounded="full" />
    </div>
  );
}`}
        </CodeBlock>
      </div>

      <div>
        <h3 className="font-medium mb-3">Combined Properties</h3>
        <div className="flex flex-col gap-4 mb-4">
          <Progress
            variant="success"
            value={75}
            size="lg"
            showValue
            striped
            animation="pulse"
          />
          <Progress
            variant="danger"
            value={40}
            size="md"
            rounded="full"
            showValue
          />
        </div>
        <CodeBlock>
          {`import { Progress } from "@/components/ui/progress";

export default function ProgressCombinedExample() {
  return (
    <div className="space-y-4">
      <Progress 
        variant="success" 
        value={75} 
        size="lg" 
        showValue 
        striped 
        animation="pulse"
      />
      <Progress 
        variant="danger" 
        value={40} 
        size="md" 
        rounded="full" 
        showValue
      />
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
        <h3 className="font-medium mb-3">Progress Component</h3>
        <p className="text-gray-700 mb-3">
          The Progress component accepts the following props:
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
                <td className="py-2 px-4 border text-sm">value</td>
                <td className="py-2 px-4 border text-sm">number</td>
                <td className="py-2 px-4 border text-sm">0</td>
                <td className="py-2 px-4 border text-sm">
                  Current progress value
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 border text-sm">max</td>
                <td className="py-2 px-4 border text-sm">number</td>
                <td className="py-2 px-4 border text-sm">100</td>
                <td className="py-2 px-4 border text-sm">
                  Maximum progress value
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 border text-sm">variant</td>
                <td className="py-2 px-4 border text-sm">string</td>
                <td className="py-2 px-4 border text-sm">'default'</td>
                <td className="py-2 px-4 border text-sm">
                  Color variant of the progress bar
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 border text-sm">size</td>
                <td className="py-2 px-4 border text-sm">string</td>
                <td className="py-2 px-4 border text-sm">'md'</td>
                <td className="py-2 px-4 border text-sm">
                  Size of the progress bar
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 border text-sm">showValue</td>
                <td className="py-2 px-4 border text-sm">boolean</td>
                <td className="py-2 px-4 border text-sm">false</td>
                <td className="py-2 px-4 border text-sm">
                  Display progress percentage
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 border text-sm">animation</td>
                <td className="py-2 px-4 border text-sm">string</td>
                <td className="py-2 px-4 border text-sm">'none'</td>
                <td className="py-2 px-4 border text-sm">
                  Animation effect for progress bar
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 border text-sm">striped</td>
                <td className="py-2 px-4 border text-sm">boolean</td>
                <td className="py-2 px-4 border text-sm">false</td>
                <td className="py-2 px-4 border text-sm">
                  Add striped background effect
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 border text-sm">rounded</td>
                <td className="py-2 px-4 border text-sm">string</td>
                <td className="py-2 px-4 border text-sm">'default'</td>
                <td className="py-2 px-4 border text-sm">
                  Border radius style
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
                <td className="py-2 px-4 border text-sm">Gray progress bar</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border text-sm">'primary'</td>
                <td className="py-2 px-4 border text-sm">Blue progress bar</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border text-sm">'secondary'</td>
                <td className="py-2 px-4 border text-sm">
                  Purple progress bar
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 border text-sm">'success'</td>
                <td className="py-2 px-4 border text-sm">Green progress bar</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border text-sm">'warning'</td>
                <td className="py-2 px-4 border text-sm">
                  Yellow progress bar
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 border text-sm">'danger'</td>
                <td className="py-2 px-4 border text-sm">Red progress bar</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border text-sm">'info'</td>
                <td className="py-2 px-4 border text-sm">Cyan progress bar</td>
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
                <td className="py-2 px-4 border text-sm">'xs'</td>
                <td className="py-2 px-4 border text-sm">
                  Extra small height (1px)
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 border text-sm">'sm'</td>
                <td className="py-2 px-4 border text-sm">Small height (8px)</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border text-sm">'md'</td>
                <td className="py-2 px-4 border text-sm">
                  Medium height (16px)
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 border text-sm">'lg'</td>
                <td className="py-2 px-4 border text-sm">
                  Large height (24px)
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 border text-sm">'xl'</td>
                <td className="py-2 px-4 border text-sm">
                  Extra large height (32px)
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
                  Pulse animation effect
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 border text-sm">'shimmer'</td>
                <td className="py-2 px-4 border text-sm">
                  Shimmer animation effect
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 border text-sm">'glow'</td>
                <td className="py-2 px-4 border text-sm">
                  Glow animation effect
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// Main Progress docs page component
const ProgressDocsPage = () => {
  const [activeTab, setActiveTab] = React.useState("overview");

  return (
    <div className="max-w-8xl mx-auto px-4 py-8">
      <div className="border-b pb-8 mb-8">
        <h1 className="text-3xl font-bold mb-2">Progress</h1>
        <p className="text-gray-600">
          A versatile progress bar component for visualizing progress, status,
          or loading states.
        </p>
      </div>

      <DocsNav activeTab={activeTab} setActiveTab={setActiveTab} />

      {activeTab === "overview" && (
        <div>
          <div className="bg-gray-100 border border-primary rounded-lg p-6 my-6 relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex flex-col gap-4">
                <Progress value={30} variant="default" />
                <Progress value={50} variant="primary" />
                <Progress value={75} variant="success" />
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
            Import and use the Progress component in your React components.
          </p>
          <CodeBlock>
            {`import { Progress } from "@/components/ui/progress";

export default function ProgressExample() {
  return (
    <div>
      <Progress value={50} />
      <Progress value={75} variant="success" />
    </div>
  );
}`}
          </CodeBlock>
        </div>
      )}

      {activeTab === "examples" && <ProgressExamples />}

      {activeTab === "api" && <ApiReference />}
    </div>
  );
};

export default ProgressDocsPage;
