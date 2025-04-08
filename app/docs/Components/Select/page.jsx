"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Select, SelectOption } from "@/components/Select";

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
const SelectExamples = () => {
  const [selectedBasic, setSelectedBasic] = useState(null);
  const [selectedSize, setSelectedSize] = useState("md");
  const [selectedTheme, setSelectedTheme] = useState("light");
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  return (
    <div className="space-y-8">
      <div>
        <h3 className="font-medium mb-3">Basic Select</h3>
        <div className="flex items-center mb-4">
          <Select
            value={selectedBasic}
            onChange={(value) => setSelectedBasic(value)}
            placeholder="Choose an option"
          >
            <SelectOption value="option1">Option 1</SelectOption>
            <SelectOption value="option2">Option 2</SelectOption>
            <SelectOption value="option3">Option 3</SelectOption>
          </Select>
        </div>
        <CodeBlock>
          {`import { Select, SelectOption } from "@/components/ui/select";
import { useState } from "react";

export default function SelectExample() {
  const [selected, setSelected] = useState(null);
  
  return (
    <Select 
      value={selected} 
      onChange={(value) => setSelected(value)} 
      placeholder="Choose an option"
    >
      <SelectOption value="option1">Option 1</SelectOption>
      <SelectOption value="option2">Option 2</SelectOption>
      <SelectOption value="option3">Option 3</SelectOption>
    </Select>
  );
}`}
        </CodeBlock>
      </div>

      <div>
        <h3 className="font-medium mb-3">Select Sizes</h3>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <span className="w-20 text-sm">Extra Small:</span>
            <Select size="xs" placeholder="Extra Small">
              <SelectOption value="option1">Option 1</SelectOption>
              <SelectOption value="option2">Option 2</SelectOption>
            </Select>
          </div>
          <div className="flex items-center gap-4">
            <span className="w-20 text-sm">Small:</span>
            <Select size="sm" placeholder="Small">
              <SelectOption value="option1">Option 1</SelectOption>
              <SelectOption value="option2">Option 2</SelectOption>
            </Select>
          </div>
          <div className="flex items-center gap-4">
            <span className="w-20 text-sm">Medium:</span>
            <Select size="md" placeholder="Medium">
              <SelectOption value="option1">Option 1</SelectOption>
              <SelectOption value="option2">Option 2</SelectOption>
            </Select>
          </div>
          <div className="flex items-center gap-4">
            <span className="w-20 text-sm">Large:</span>
            <Select size="lg" placeholder="Large">
              <SelectOption value="option1">Option 1</SelectOption>
              <SelectOption value="option2">Option 2</SelectOption>
            </Select>
          </div>
          <div className="flex items-center gap-4">
            <span className="w-20 text-sm">Extra Large:</span>
            <Select size="xl" placeholder="Extra Large">
              <SelectOption value="option1">Option 1</SelectOption>
              <SelectOption value="option2">Option 2</SelectOption>
            </Select>
          </div>
        </div>
        <CodeBlock>
          {`import { Select, SelectOption } from "@/components/ui/select";

export default function SelectSizesExample() {
  return (
    <div className="flex flex-col gap-4">
      <Select size="xs" placeholder="Extra Small">
        <SelectOption value="option1">Option 1</SelectOption>
        <SelectOption value="option2">Option 2</SelectOption>
      </Select>
      
      <Select size="sm" placeholder="Small">
        <SelectOption value="option1">Option 1</SelectOption>
        <SelectOption value="option2">Option 2</SelectOption>
      </Select>
      
      <Select size="md" placeholder="Medium">
        <SelectOption value="option1">Option 1</SelectOption>
        <SelectOption value="option2">Option 2</SelectOption>
      </Select>
      
      <Select size="lg" placeholder="Large">
        <SelectOption value="option1">Option 1</SelectOption>
        <SelectOption value="option2">Option 2</SelectOption>
      </Select>
      
      <Select size="xl" placeholder="Extra Large">
        <SelectOption value="option1">Option 1</SelectOption>
        <SelectOption value="option2">Option 2</SelectOption>
      </Select>
    </div>
  );
}`}
        </CodeBlock>
      </div>

      <div>
        <h3 className="font-medium mb-3">Disabled State</h3>
        <div className="flex flex-col gap-4">
          <Select disabled placeholder="Disabled select">
            <SelectOption value="option1">Option 1</SelectOption>
            <SelectOption value="option2">Option 2</SelectOption>
          </Select>
        </div>
        <CodeBlock>
          {`import { Select, SelectOption } from "@/components/ui/select";

export default function DisabledSelectExample() {
  return (
    <Select disabled placeholder="Disabled select">
      <SelectOption value="option1">Option 1</SelectOption>
      <SelectOption value="option2">Option 2</SelectOption>
    </Select>
  );
}`}
        </CodeBlock>
      </div>

      <div>
        <h3 className="font-medium mb-3">Custom Width</h3>
        <div className="flex flex-col gap-4">
          <Select className="w-64" placeholder="Custom width">
            <SelectOption value="option1">Option 1</SelectOption>
            <SelectOption value="option2">Option 2</SelectOption>
          </Select>
        </div>
        <CodeBlock>
          {`import { Select, SelectOption } from "@/components/ui/select";

export default function CustomWidthSelectExample() {
  return (
    <Select className="w-64" placeholder="Custom width">
      <SelectOption value="option1">Option 1</SelectOption>
      <SelectOption value="option2">Option 2</SelectOption>
    </Select>
  );
}`}
        </CodeBlock>
      </div>

      <div>
        <h3 className="font-medium mb-3">Real-world Examples</h3>
        <div className="space-y-4 p-4 border rounded-md bg-gray-50">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">Theme Selection</h4>
              <p className="text-sm text-gray-600">
                Choose your preferred theme
              </p>
            </div>
            <Select
              value={selectedTheme}
              onChange={(value) => setSelectedTheme(value)}
              className="w-40"
            >
              <SelectOption value="light">Light</SelectOption>
              <SelectOption value="dark">Dark</SelectOption>
              <SelectOption value="system">System</SelectOption>
            </Select>
          </div>

          <div className="flex items-center justify-between mt-4">
            <div>
              <h4 className="font-medium">Language</h4>
              <p className="text-sm text-gray-600">
                Select your preferred language
              </p>
            </div>
            <Select
              value={selectedLanguage}
              onChange={(value) => setSelectedLanguage(value)}
              className="w-40"
            >
              <SelectOption value="en">English</SelectOption>
              <SelectOption value="fr">French</SelectOption>
              <SelectOption value="es">Spanish</SelectOption>
              <SelectOption value="de">German</SelectOption>
              <SelectOption value="zh">Chinese</SelectOption>
            </Select>
          </div>
        </div>
        <CodeBlock>
          {`import { Select, SelectOption } from "@/components/ui/select";
import { useState } from "react";

export default function SettingsExample() {
  const [selectedTheme, setSelectedTheme] = useState("light");
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  
  return (
    <div className="space-y-4 p-4 border rounded-md bg-gray-50">
      <div className="flex items-center justify-between">
        <div>
          <h4 className="font-medium">Theme Selection</h4>
          <p className="text-sm text-gray-600">Choose your preferred theme</p>
        </div>
        <Select
          value={selectedTheme}
          onChange={(value) => setSelectedTheme(value)}
          className="w-40"
        >
          <SelectOption value="light">Light</SelectOption>
          <SelectOption value="dark">Dark</SelectOption>
          <SelectOption value="system">System</SelectOption>
        </Select>
      </div>

      <div className="flex items-center justify-between mt-4">
        <div>
          <h4 className="font-medium">Language</h4>
          <p className="text-sm text-gray-600">Select your preferred language</p>
        </div>
        <Select
          value={selectedLanguage}
          onChange={(value) => setSelectedLanguage(value)}
          className="w-40"
        >
          <SelectOption value="en">English</SelectOption>
          <SelectOption value="fr">French</SelectOption>
          <SelectOption value="es">Spanish</SelectOption>
          <SelectOption value="de">German</SelectOption>
          <SelectOption value="zh">Chinese</SelectOption>
        </Select>
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
        <h3 className="font-medium mb-3">Select Component Props</h3>
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
                <td className="py-2 px-4 border text-sm">any</td>
                <td className="py-2 px-4 border text-sm">undefined</td>
                <td className="py-2 px-4 border text-sm">
                  Currently selected value
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 border text-sm">defaultValue</td>
                <td className="py-2 px-4 border text-sm">any</td>
                <td className="py-2 px-4 border text-sm">undefined</td>
                <td className="py-2 px-4 border text-sm">
                  Initial value when uncontrolled
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 border text-sm">placeholder</td>
                <td className="py-2 px-4 border text-sm">string</td>
                <td className="py-2 px-4 border text-sm">"Select an option"</td>
                <td className="py-2 px-4 border text-sm">
                  Text to display when no option is selected
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 border text-sm">disabled</td>
                <td className="py-2 px-4 border text-sm">boolean</td>
                <td className="py-2 px-4 border text-sm">false</td>
                <td className="py-2 px-4 border text-sm">
                  Whether the select is disabled
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 border text-sm">size</td>
                <td className="py-2 px-4 border text-sm">
                  'xs' | 'sm' | 'md' | 'lg' | 'xl'
                </td>
                <td className="py-2 px-4 border text-sm">'md'</td>
                <td className="py-2 px-4 border text-sm">Size of the select</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border text-sm">onChange</td>
                <td className="py-2 px-4 border text-sm">{`(value) => void`}</td>
                <td className="py-2 px-4 border text-sm">undefined</td>
                <td className="py-2 px-4 border text-sm">
                  Callback when selection changes
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
                <td className="py-2 px-4 border text-sm">undefined</td>
                <td className="py-2 px-4 border text-sm">
                  SelectOption components
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h3 className="font-medium mb-3">SelectOption Component Props</h3>
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
                <td className="py-2 px-4 border text-sm">any</td>
                <td className="py-2 px-4 border text-sm">undefined</td>
                <td className="py-2 px-4 border text-sm">
                  Value of the option
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 border text-sm">children</td>
                <td className="py-2 px-4 border text-sm">ReactNode</td>
                <td className="py-2 px-4 border text-sm">undefined</td>
                <td className="py-2 px-4 border text-sm">
                  Label content to display
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 border text-sm">disabled</td>
                <td className="py-2 px-4 border text-sm">boolean</td>
                <td className="py-2 px-4 border text-sm">false</td>
                <td className="py-2 px-4 border text-sm">
                  Whether the option is disabled
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// Main Select docs page component
const SelectDocsPage = () => {
  const [activeTab, setActiveTab] = React.useState("overview");

  return (
    <div className="max-w-8xl mx-auto px-4 py-8">
      <div className="border-b pb-8 mb-8">
        <h1 className="text-3xl font-bold mb-2">Select</h1>
        <p className="text-gray-600">
          A customizable dropdown select component for choosing from a set of
          options.
        </p>
      </div>

      <DocsNav activeTab={activeTab} setActiveTab={setActiveTab} />

      {activeTab === "overview" && (
        <div>
          <div className="bg-gray-100 border border-primary rounded-lg p-6 my-6 relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex justify-center">
                <Select placeholder="Select an option">
                  <SelectOption value="option1">Option 1</SelectOption>
                  <SelectOption value="option2">Option 2</SelectOption>
                  <SelectOption value="option3">Option 3</SelectOption>
                </Select>
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
            Import the Select component and use it in your application.
          </p>
          <CodeBlock>
            {`import { Select, SelectOption } from "@/components/ui/select";

export default function BasicSelect() {
  return (
    <Select placeholder="Choose an option">
      <SelectOption value="option1">Option 1</SelectOption>
      <SelectOption value="option2">Option 2</SelectOption>
      <SelectOption value="option3">Option 3</SelectOption>
    </Select>
  );
}`}
          </CodeBlock>

          <SectionHeading number="4" title="Controlled Usage" />
          <p className="text-gray-700 mb-4">
            Use the Select component with state to control its value.
          </p>
          <CodeBlock>
            {`import { Select, SelectOption } from "@/components/ui/select";
import { useState } from "react";

export default function ControlledSelect() {
  const [selected, setSelected] = useState(null);
  
  return (
    <div>
      <Select 
        value={selected}
        onChange={(value) => setSelected(value)}
        placeholder="Choose an option"
      >
        <SelectOption value="option1">Option 1</SelectOption>
        <SelectOption value="option2">Option 2</SelectOption>
        <SelectOption value="option3">Option 3</SelectOption>
      </Select>
      
      <p className="mt-2">Selected value: {selected || "None"}</p>
    </div>
  );
}`}
          </CodeBlock>
        </div>
      )}

      {activeTab === "examples" && <SelectExamples />}

      {activeTab === "api" && <ApiReference />}
    </div>
  );
};

export default SelectDocsPage;
