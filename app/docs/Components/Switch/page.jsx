"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Switch } from "@/components/Switch";

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
const SwitchExamples = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isNotifications, setIsNotifications] = useState(true);

  return (
    <div className="space-y-8">
      <div>
        <h3 className="font-medium mb-3">Basic Switch</h3>
        <div className="flex items-center mb-4">
          <Switch
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
            label="Toggle me"
          />
        </div>
        <CodeBlock>
          {`import { Switch } from "@/components/ui/switch";
import { useState } from "react";

export default function SwitchExample() {
  const [isChecked, setIsChecked] = useState(false);
  
  return (
    <Switch 
      checked={isChecked} 
      onChange={(e) => setIsChecked(e.target.checked)} 
      label="Toggle me"
    />
  );
}`}
        </CodeBlock>
      </div>

      <div>
        <h3 className="font-medium mb-3">Switch Variants</h3>
        <div className="flex flex-col gap-4">
          <Switch label="Default variant" variant="default" defaultChecked />
          <Switch label="Primary variant" variant="primary" defaultChecked />
          <Switch label="Success variant" variant="success" defaultChecked />
          <Switch label="Warning variant" variant="warning" defaultChecked />
          <Switch label="Danger variant" variant="danger" defaultChecked />
          <Switch label="Info variant" variant="info" defaultChecked />
          <Switch label="Light variant" variant="light" defaultChecked />
          <Switch label="Dark variant" variant="dark" defaultChecked />
        </div>
        <CodeBlock>
          {`import { Switch } from "@/components/ui/switch";

export default function SwitchVariantsExample() {
  return (
    <div className="flex flex-col gap-4">
      <Switch label="Default variant" variant="default" defaultChecked />
      <Switch label="Primary variant" variant="primary" defaultChecked />
      <Switch label="Success variant" variant="success" defaultChecked />
      <Switch label="Warning variant" variant="warning" defaultChecked />
      <Switch label="Danger variant" variant="danger" defaultChecked />
      <Switch label="Info variant" variant="info" defaultChecked />
      <Switch label="Light variant" variant="light" defaultChecked />
      <Switch label="Dark variant" variant="dark" defaultChecked />
    </div>
  );
}`}
        </CodeBlock>
      </div>

      <div>
        <h3 className="font-medium mb-3">Switch Sizes</h3>
        <div className="flex flex-col gap-4">
          <Switch label="Extra Small (xs)" size="xs" defaultChecked />
          <Switch label="Small (sm)" size="sm" defaultChecked />
          <Switch label="Medium (md)" size="md" defaultChecked />
          <Switch label="Large (lg)" size="lg" defaultChecked />
          <Switch label="Extra Large (xl)" size="xl" defaultChecked />
        </div>
        <CodeBlock>
          {`import { Switch } from "@/components/ui/switch";

export default function SwitchSizesExample() {
  return (
    <div className="flex flex-col gap-4">
      <Switch label="Extra Small (xs)" size="xs" defaultChecked />
      <Switch label="Small (sm)" size="sm" defaultChecked />
      <Switch label="Medium (md)" size="md" defaultChecked />
      <Switch label="Large (lg)" size="lg" defaultChecked />
      <Switch label="Extra Large (xl)" size="xl" defaultChecked />
    </div>
  );
}`}
        </CodeBlock>
      </div>

      <div>
        <h3 className="font-medium mb-3">Label Positions</h3>
        <div className="flex flex-col gap-4">
          <Switch
            label="Label on the right (default)"
            labelPosition="right"
            defaultChecked
          />
          <Switch
            label="Label on the left"
            labelPosition="left"
            defaultChecked
          />
        </div>
        <CodeBlock>
          {`import { Switch } from "@/components/ui/switch";

export default function SwitchLabelPositionsExample() {
  return (
    <div className="flex flex-col gap-4">
      <Switch label="Label on the right (default)" labelPosition="right" defaultChecked />
      <Switch label="Label on the left" labelPosition="left" defaultChecked />
    </div>
  );
}`}
        </CodeBlock>
      </div>

      <div>
        <h3 className="font-medium mb-3">Animations</h3>
        <div className="flex flex-col gap-4">
          <Switch
            label="Smooth animation (default)"
            animation="smooth"
            defaultChecked
          />
          <Switch label="Bounce animation" animation="bounce" defaultChecked />
          <Switch
            label="Elastic animation"
            animation="elastic"
            defaultChecked
          />
          <Switch label="No animation" animation="none" defaultChecked />
          <Switch label="Slide animation" animation="slide" defaultChecked />
          <Switch label="Flip animation" animation="flip" defaultChecked />
        </div>
        <CodeBlock>
          {`import { Switch } from "@/components/ui/switch";

export default function SwitchAnimationsExample() {
  return (
    <div className="flex flex-col gap-4">
      <Switch label="Smooth animation (default)" animation="smooth" defaultChecked />
      <Switch label="Bounce animation" animation="bounce" defaultChecked />
      <Switch label="Elastic animation" animation="elastic" defaultChecked />
      <Switch label="No animation" animation="none" defaultChecked />
      <Switch label="Slide animation" animation="slide" defaultChecked />
      <Switch label="Flip animation" animation="flip" defaultChecked />
    </div>
  );
}`}
        </CodeBlock>
      </div>

      <div>
        <h3 className="font-medium mb-3">Disabled State</h3>
        <div className="flex flex-col gap-4">
          <Switch label="Disabled (unchecked)" disabled />
          <Switch label="Disabled (checked)" disabled defaultChecked />
        </div>
        <CodeBlock>
          {`import { Switch } from "@/components/ui/switch";

export default function DisabledSwitchExample() {
  return (
    <div className="flex flex-col gap-4">
      <Switch label="Disabled (unchecked)" disabled />
      <Switch label="Disabled (checked)" disabled defaultChecked />
    </div>
  );
}`}
        </CodeBlock>
      </div>

      <div>
        <h3 className="font-medium mb-3">Real-world Examples</h3>
        <div className="space-y-4 p-4 border rounded-md bg-gray-50">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">Dark Mode</h4>
              <p className="text-sm text-gray-600">
                Toggle between light and dark theme
              </p>
            </div>
            <Switch
              checked={isDarkMode}
              onChange={(e) => setIsDarkMode(e.target.checked)}
              variant="dark"
              size="md"
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">Push Notifications</h4>
              <p className="text-sm text-gray-600">
                Receive notifications for updates
              </p>
            </div>
            <Switch
              checked={isNotifications}
              onChange={(e) => setIsNotifications(e.target.checked)}
              variant="primary"
              size="md"
            />
          </div>
        </div>
        <CodeBlock>
          {`import { Switch } from "@/components/ui/switch";
import { useState } from "react";

export default function SettingsExample() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isNotifications, setIsNotifications] = useState(true);
  
  return (
    <div className="space-y-4 p-4 border rounded-md bg-gray-50">
      <div className="flex items-center justify-between">
        <div>
          <h4 className="font-medium">Dark Mode</h4>
          <p className="text-sm text-gray-600">Toggle between light and dark theme</p>
        </div>
        <Switch 
          checked={isDarkMode} 
          onChange={(e) => setIsDarkMode(e.target.checked)}
          variant="dark"
          size="md"
        />
      </div>
      
      <div className="flex items-center justify-between">
        <div>
          <h4 className="font-medium">Push Notifications</h4>
          <p className="text-sm text-gray-600">Receive notifications for updates</p>
        </div>
        <Switch 
          checked={isNotifications} 
          onChange={(e) => setIsNotifications(e.target.checked)}
          variant="primary"
          size="md"
        />
      </div>
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
        <h3 className="font-medium mb-3">Switch Component Props</h3>
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
                <td className="py-2 px-4 border text-sm">checked</td>
                <td className="py-2 px-4 border text-sm">boolean</td>
                <td className="py-2 px-4 border text-sm">false</td>
                <td className="py-2 px-4 border text-sm">
                  Controls the checked state of the switch
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 border text-sm">defaultChecked</td>
                <td className="py-2 px-4 border text-sm">boolean</td>
                <td className="py-2 px-4 border text-sm">undefined</td>
                <td className="py-2 px-4 border text-sm">
                  Initial checked state when uncontrolled
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 border text-sm">variant</td>
                <td className="py-2 px-4 border text-sm">
                  'default' | 'primary' | 'success' | 'warning' | 'danger' |
                  'info' | 'light' | 'dark'
                </td>
                <td className="py-2 px-4 border text-sm">'default'</td>
                <td className="py-2 px-4 border text-sm">
                  Visual style variant of the switch
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 border text-sm">size</td>
                <td className="py-2 px-4 border text-sm">
                  'xs' | 'sm' | 'md' | 'lg' | 'xl'
                </td>
                <td className="py-2 px-4 border text-sm">'md'</td>
                <td className="py-2 px-4 border text-sm">Size of the switch</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border text-sm">disabled</td>
                <td className="py-2 px-4 border text-sm">boolean</td>
                <td className="py-2 px-4 border text-sm">false</td>
                <td className="py-2 px-4 border text-sm">
                  Whether the switch is disabled
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 border text-sm">animation</td>
                <td className="py-2 px-4 border text-sm">
                  'smooth' | 'bounce' | 'elastic' | 'none' | 'slide' | 'flip'
                </td>
                <td className="py-2 px-4 border text-sm">'smooth'</td>
                <td className="py-2 px-4 border text-sm">
                  Animation style for the thumb
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 border text-sm">label</td>
                <td className="py-2 px-4 border text-sm">string</td>
                <td className="py-2 px-4 border text-sm">undefined</td>
                <td className="py-2 px-4 border text-sm">
                  Optional label for the switch
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 border text-sm">labelPosition</td>
                <td className="py-2 px-4 border text-sm">'left' | 'right'</td>
                <td className="py-2 px-4 border text-sm">'right'</td>
                <td className="py-2 px-4 border text-sm">
                  Position of the label relative to the switch
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 border text-sm">onChange</td>
                <td className="py-2 px-4 border text-sm">(event) void</td>
                <td className="py-2 px-4 border text-sm">undefined</td>
                <td className="py-2 px-4 border text-sm">
                  Change event handler
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
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// Main Switch docs page component
const SwitchDocsPage = () => {
  const [activeTab, setActiveTab] = React.useState("overview");

  return (
    <div className="max-w-8xl mx-auto px-4 py-8">
      <div className="bg-red-50 border border-red-200 rounded-md p-4 mb-6">
        <p className="text-red-600 font-medium">
          This UI component is not available in version 0.1.4
        </p>
        <p className="text-red-500 text-sm mt-1">
          The Toast component will be included in the next npm package update.
          Stay tuned!
        </p>
      </div>
      <div className="border-b pb-8 mb-8">
        <h1 className="text-3xl font-bold mb-2">Switch</h1>
        <p className="text-gray-600">
          A switch component that toggles between enabled and disabled states.
        </p>
      </div>

      <DocsNav activeTab={activeTab} setActiveTab={setActiveTab} />

      {activeTab === "overview" && (
        <div>
          <div className="bg-gray-100 border border-primary rounded-lg p-6 my-6 relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex justify-center">
                <Switch label="Click to toggle" variant="primary" size="lg" />
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
            Import the Switch component and use it in your application.
          </p>
          <CodeBlock>
            {`import { Switch } from "@/components/ui/switch";

export default function BasicSwitch() {
  return (
    <Switch 
      label="Toggle feature" 
      defaultChecked={true} 
    />
  );
}`}
          </CodeBlock>
        </div>
      )}

      {activeTab === "examples" && <SwitchExamples />}

      {activeTab === "api" && <ApiReference />}
    </div>
  );
};

export default SwitchDocsPage;
