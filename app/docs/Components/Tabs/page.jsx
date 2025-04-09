"use client";
import React from "react";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  TabsContext,
} from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

// Navigation component for docs tabs
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
const TabsExamples = () => {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="font-medium mb-3">Basic Tabs</h3>
        <Tabs defaultValue="account" className="w-full max-w-md">
          <TabsList>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          <TabsContent value="account" className="p-4 border rounded-md mt-4">
            <h4 className="font-medium mb-2">Account Settings</h4>
            <p className="text-gray-600">
              Manage your account information and preferences.
            </p>
          </TabsContent>
          <TabsContent value="password" className="p-4 border rounded-md mt-4">
            <h4 className="font-medium mb-2">Password Settings</h4>
            <p className="text-gray-600">
              Change your password and security preferences.
            </p>
          </TabsContent>
          <TabsContent value="settings" className="p-4 border rounded-md mt-4">
            <h4 className="font-medium mb-2">Application Settings</h4>
            <p className="text-gray-600">
              Manage your application settings and preferences.
            </p>
          </TabsContent>
        </Tabs>
        <CodeBlock>
          {`import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export default function TabsExample() {
  return (
    <Tabs defaultValue="account">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <h4>Account Settings</h4>
        <p>Manage your account information and preferences.</p>
      </TabsContent>
      <TabsContent value="password">
        <h4>Password Settings</h4>
        <p>Change your password and security preferences.</p>
      </TabsContent>
      <TabsContent value="settings">
        <h4>Application Settings</h4>
        <p>Manage your application settings and preferences.</p>
      </TabsContent>
    </Tabs>
  );
}`}
        </CodeBlock>
      </div>

      <div>
        <h3 className="font-medium mb-3">Custom Styled Tabs</h3>
        <Tabs defaultValue="overview" className="w-full max-w-md">
          <TabsList className="bg-gray-200 p-1 rounded-lg">
            <TabsTrigger
              value="overview"
              className="data-[state=active]:bg-primary data-[state=active]:text-white"
            >
              Overview
            </TabsTrigger>
            <TabsTrigger
              value="analytics"
              className="data-[state=active]:bg-primary data-[state=active]:text-white"
            >
              Analytics
            </TabsTrigger>
            <TabsTrigger
              value="reports"
              className="data-[state=active]:bg-primary data-[state=active]:text-white"
            >
              Reports
            </TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="p-4 border rounded-md mt-4">
            <h4 className="font-medium mb-2">Dashboard Overview</h4>
            <p className="text-gray-600">
              View a summary of your key metrics and recent activity.
            </p>
          </TabsContent>
          <TabsContent value="analytics" className="p-4 border rounded-md mt-4">
            <h4 className="font-medium mb-2">Analytics Data</h4>
            <p className="text-gray-600">
              Detailed analytics and insights about your application usage.
            </p>
          </TabsContent>
          <TabsContent value="reports" className="p-4 border rounded-md mt-4">
            <h4 className="font-medium mb-2">Generated Reports</h4>
            <p className="text-gray-600">
              View and download your custom generated reports.
            </p>
          </TabsContent>
        </Tabs>
        <CodeBlock>
          {`import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export default function CustomTabsExample() {
  return (
    <Tabs defaultValue="overview">
      <TabsList className="bg-gray-200 p-1 rounded-lg">
        <TabsTrigger 
          value="overview" 
          className="data-[state=active]:bg-primary data-[state=active]:text-white"
        >
          Overview
        </TabsTrigger>
        <TabsTrigger 
          value="analytics" 
          className="data-[state=active]:bg-primary data-[state=active]:text-white"
        >
          Analytics
        </TabsTrigger>
        <TabsTrigger 
          value="reports" 
          className="data-[state=active]:bg-primary data-[state=active]:text-white"
        >
          Reports
        </TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        <h4>Dashboard Overview</h4>
        <p>View a summary of your key metrics and recent activity.</p>
      </TabsContent>
      <TabsContent value="analytics">
        <h4>Analytics Data</h4>
        <p>Detailed analytics and insights about your application usage.</p>
      </TabsContent>
      <TabsContent value="reports">
        <h4>Generated Reports</h4>
        <p>View and download your custom generated reports.</p>
      </TabsContent>
    </Tabs>
  );
}`}
        </CodeBlock>
      </div>

      <div>
        <h3 className="font-medium mb-3">Vertical Tabs Layout</h3>
        <div className="flex max-w-md">
          <Tabs
            defaultValue="dashboard"
            orientation="vertical"
            className="w-full"
          >
            <div className="flex">
              <TabsList className="flex-col h-auto bg-gray-100 rounded-l-md p-2 space-y-1 w-40">
                <TabsTrigger value="dashboard" className="justify-start">
                  Dashboard
                </TabsTrigger>
                <TabsTrigger value="profile" className="justify-start">
                  Profile
                </TabsTrigger>
                <TabsTrigger value="notifications" className="justify-start">
                  Notifications
                </TabsTrigger>
              </TabsList>
              <div className="flex-1">
                <TabsContent
                  value="dashboard"
                  className="p-4 border-t border-r border-b rounded-tr-md rounded-br-md h-full"
                >
                  <h4 className="font-medium mb-2">Dashboard</h4>
                  <p className="text-gray-600">
                    Welcome to your dashboard. Here you can see an overview of
                    your account.
                  </p>
                </TabsContent>
                <TabsContent
                  value="profile"
                  className="p-4 border-t border-r border-b rounded-tr-md rounded-br-md h-full"
                >
                  <h4 className="font-medium mb-2">Profile</h4>
                  <p className="text-gray-600">
                    Update your profile information and photo.
                  </p>
                </TabsContent>
                <TabsContent
                  value="notifications"
                  className="p-4 border-t border-r border-b rounded-tr-md rounded-br-md h-full"
                >
                  <h4 className="font-medium mb-2">Notifications</h4>
                  <p className="text-gray-600">
                    Manage your notification preferences and settings.
                  </p>
                </TabsContent>
              </div>
            </div>
          </Tabs>
        </div>
        <CodeBlock>
          {`import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export default function VerticalTabsExample() {
  return (
    <div className="flex">
      <Tabs defaultValue="dashboard" className="w-full">
        <div className="flex">
          <TabsList className="flex-col h-auto bg-gray-100 rounded-l-md p-2 space-y-1 w-40">
            <TabsTrigger value="dashboard" className="justify-start">Dashboard</TabsTrigger>
            <TabsTrigger value="profile" className="justify-start">Profile</TabsTrigger>
            <TabsTrigger value="notifications" className="justify-start">Notifications</TabsTrigger>
          </TabsList>
          <div className="flex-1">
            <TabsContent value="dashboard" className="p-4 border-t border-r border-b rounded-tr-md rounded-br-md h-full">
              <h4>Dashboard</h4>
              <p>Welcome to your dashboard. Here you can see an overview of your account.</p>
            </TabsContent>
            <TabsContent value="profile" className="p-4 border-t border-r border-b rounded-tr-md rounded-br-md h-full">
              <h4>Profile</h4>
              <p>Update your profile information and photo.</p>
            </TabsContent>
            <TabsContent value="notifications" className="p-4 border-t border-r border-b rounded-tr-md rounded-br-md h-full">
              <h4>Notifications</h4>
              <p>Manage your notification preferences and settings.</p>
            </TabsContent>
          </div>
        </div>
      </Tabs>
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
        <h3 className="font-medium mb-3">Tabs</h3>
        <p className="text-gray-700 mb-3">
          The main container component for the tabs functionality.
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
                <td className="py-2 px-4 border text-sm">defaultValue</td>
                <td className="py-2 px-4 border text-sm">string</td>
                <td className="py-2 px-4 border text-sm">-</td>
                <td className="py-2 px-4 border text-sm">
                  The initial active tab value
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 border text-sm">children</td>
                <td className="py-2 px-4 border text-sm">ReactNode</td>
                <td className="py-2 px-4 border text-sm">-</td>
                <td className="py-2 px-4 border text-sm">
                  TabsList, TabsTrigger, and TabsContent components
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 border text-sm">className</td>
                <td className="py-2 px-4 border text-sm">string</td>
                <td className="py-2 px-4 border text-sm">-</td>
                <td className="py-2 px-4 border text-sm">
                  Optional CSS class names
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h3 className="font-medium mb-3">TabsList</h3>
        <p className="text-gray-700 mb-3">
          Container component for the tab trigger buttons.
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
                <td className="py-2 px-4 border text-sm">children</td>
                <td className="py-2 px-4 border text-sm">ReactNode</td>
                <td className="py-2 px-4 border text-sm">-</td>
                <td className="py-2 px-4 border text-sm">
                  TabsTrigger components
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 border text-sm">className</td>
                <td className="py-2 px-4 border text-sm">string</td>
                <td className="py-2 px-4 border text-sm">-</td>
                <td className="py-2 px-4 border text-sm">
                  Optional CSS class names
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h3 className="font-medium mb-3">TabsTrigger</h3>
        <p className="text-gray-700 mb-3">
          Button component for individual tab triggers.
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
                <td className="py-2 px-4 border text-sm">string</td>
                <td className="py-2 px-4 border text-sm">-</td>
                <td className="py-2 px-4 border text-sm">
                  Unique value for the tab
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 border text-sm">children</td>
                <td className="py-2 px-4 border text-sm">ReactNode</td>
                <td className="py-2 px-4 border text-sm">-</td>
                <td className="py-2 px-4 border text-sm">Tab label content</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border text-sm">className</td>
                <td className="py-2 px-4 border text-sm">string</td>
                <td className="py-2 px-4 border text-sm">-</td>
                <td className="py-2 px-4 border text-sm">
                  Optional CSS class names
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h3 className="font-medium mb-3">TabsContent</h3>
        <p className="text-gray-700 mb-3">
          Component for displaying tab content.
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
                <td className="py-2 px-4 border text-sm">string</td>
                <td className="py-2 px-4 border text-sm">-</td>
                <td className="py-2 px-4 border text-sm">
                  Corresponding value to match with TabsTrigger
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 border text-sm">children</td>
                <td className="py-2 px-4 border text-sm">ReactNode</td>
                <td className="py-2 px-4 border text-sm">-</td>
                <td className="py-2 px-4 border text-sm">Tab content</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border text-sm">className</td>
                <td className="py-2 px-4 border text-sm">string</td>
                <td className="py-2 px-4 border text-sm">-</td>
                <td className="py-2 px-4 border text-sm">
                  Optional CSS class names
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h3 className="font-medium mb-3">TabsContext</h3>
        <p className="text-gray-700 mb-3">Context API for advanced usage.</p>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="py-2 px-4 border text-left text-sm font-medium text-gray-700">
                  Property
                </th>
                <th className="py-2 px-4 border text-left text-sm font-medium text-gray-700">
                  Type
                </th>
                <th className="py-2 px-4 border text-left text-sm font-medium text-gray-700">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border text-sm">activeTab</td>
                <td className="py-2 px-4 border text-sm">string</td>
                <td className="py-2 px-4 border text-sm">
                  Currently active tab value
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 border text-sm">setActiveTab</td>
                <td className="py-2 px-4 border text-sm">{`(value: string) => void`}</td>
                <td className="py-2 px-4 border text-sm">
                  Function to change the active tab
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// Main Tabs docs page component
const TabsDocsPage = () => {
  const [activeTab, setActiveTab] = React.useState("overview");

  return (
    <div className="max-w-8xl mx-auto px-4 py-8">
      <div className="border-b pb-8 mb-8">
        <h1 className="text-3xl font-bold mb-2">Tabs</h1>
        <p className="text-gray-600">
          A set of layered sections of content that display one panel of content
          at a time.
        </p>
      </div>

      <DocsNav activeTab={activeTab} setActiveTab={setActiveTab} />

      {activeTab === "overview" && (
        <div>
          <div className="bg-gray-100 border border-primary rounded-lg p-6 my-6 relative overflow-hidden">
            <div className="relative z-10">
              <Tabs defaultValue="account" className="w-full max-w-md mx-auto">
                <TabsList>
                  <TabsTrigger value="account">Account</TabsTrigger>
                  <TabsTrigger value="password">Password</TabsTrigger>
                  <TabsTrigger value="settings">Settings</TabsTrigger>
                </TabsList>
                <TabsContent
                  value="account"
                  className="p-4 bg-white border rounded-md mt-4"
                >
                  <h4 className="font-medium mb-2">Account Settings</h4>
                  <p className="text-gray-600">
                    Manage your account information and preferences.
                  </p>
                </TabsContent>
                <TabsContent
                  value="password"
                  className="p-4 bg-white border rounded-md mt-4"
                >
                  <h4 className="font-medium mb-2">Password Settings</h4>
                  <p className="text-gray-600">
                    Change your password and security preferences.
                  </p>
                </TabsContent>
                <TabsContent
                  value="settings"
                  className="p-4 bg-white border rounded-md mt-4"
                >
                  <h4 className="font-medium mb-2">Application Settings</h4>
                  <p className="text-gray-600">
                    Manage your application settings and preferences.
                  </p>
                </TabsContent>
              </Tabs>
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
            Create a tabs interface with content that's displayed when the
            corresponding tab is active.
          </p>
          <CodeBlock>
            {`import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export default function TabsDemo() {
  return (
    <Tabs defaultValue="account" className="w-full">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <h4>Account Settings</h4>
        <p>Manage your account information and preferences.</p>
      </TabsContent>
      <TabsContent value="password">
        <h4>Password Settings</h4>
        <p>Change your password and security preferences.</p>
      </TabsContent>
      <TabsContent value="settings">
        <h4>Application Settings</h4>
        <p>Manage your application settings and preferences.</p>
      </TabsContent>
    </Tabs>
  );
}`}
          </CodeBlock>
        </div>
      )}

      {activeTab === "examples" && <TabsExamples />}

      {activeTab === "api" && <ApiReference />}
    </div>
  );
};

export default TabsDocsPage;
