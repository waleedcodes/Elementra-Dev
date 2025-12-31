"use client";

import React from "react";
import { Copy, CopyIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar } from "@/components/DocsComp/Calendar";

const CalendarComponent = () => {
  const [activeTab, setActiveTab] = React.useState("overview");
  const [mounted, setMounted] = React.useState(false);
  const [selectedDate, setSelectedDate] = React.useState(null);
  const [dateRange, setDateRange] = React.useState([]);
  const [multipleDates, setMultipleDates] = React.useState([]);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "examples", label: "Examples" },
    { id: "api", label: "API" },
  ];

  if (!mounted) {
    return null;
  }

  const handleCopy = (text) => {
    if (text) {
      navigator.clipboard.writeText(text);
      toast("Copied to clipboard", { type: "success" });
    }
  };

  const codeExamples = [
    {
      title: "Basic Calendar",
      code: `import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

export default function BasicCalendar() {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <Calendar 
      value={selectedDate} 
      onValueChange={setSelectedDate}
      mode="single"
    />
  );
}`,
      description: "Simple calendar for single date selection.",
    },
    {
      title: "Date Range Picker",
      code: `import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

export default function DateRangePicker() {
  const [dateRange, setDateRange] = useState([]);

  return (
    <Calendar 
      value={dateRange} 
      onValueChange={setDateRange}
      mode="range"
    />
  );
}`,
      description: "Calendar for selecting date ranges.",
    },
    {
      title: "Multiple Date Selection",
      code: `import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

export default function MultipleDateSelection() {
  const [selectedDates, setSelectedDates] = useState([]);

  return (
    <Calendar 
      value={selectedDates} 
      onValueChange={setSelectedDates}
      mode="multiple"
    />
  );
}`,
      description: "Calendar for selecting multiple individual dates.",
    },
    {
      title: "Disabled Dates",
      code: `import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

export default function DisabledDates() {
  const [selectedDate, setSelectedDate] = useState(null);

  const isWeekend = (date) => {
    const day = date.getDay();
    return day === 0 || day === 6;
  };

  const isPastDate = (date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };

  return (
    <Calendar 
      value={selectedDate} 
      onValueChange={setSelectedDate}
      mode="single"
      disabled={(date) => isWeekend(date) || isPastDate(date)}
    />
  );
}`,
      description: "Calendar with disabled weekends and past dates.",
    },
    {
      title: "Custom Styling",
      code: `import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

export default function CustomCalendar() {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <Calendar 
      value={selectedDate} 
      onValueChange={setSelectedDate}
      mode="single"
      className="rounded-md border shadow-lg p-4 bg-card"
    />
  );
}`,
      description: "Calendar with custom styling and enhanced appearance.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              Calendar
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl">
              A flexible calendar component for date selection with support for
              single dates, ranges, and multiple selections.
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            {tabs.map((tab) => (
              <TabsTrigger
                key={tab.id}
                value={tab.id}
                className="text-sm font-medium"
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="mt-8 sm:mt-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-8 sm:space-y-12"
              >
                {activeTab === "overview" && (
                  <>
                    {/* Installation Section */}
                    <section className="space-y-4">
                      <h2 className="text-xl sm:text-2xl font-semibold flex items-center gap-3 text-foreground">
                        <span className="flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                          1
                        </span>
                        Installation
                      </h2>
                      <div className="relative">
                        <div className="bg-card border border-border rounded-lg p-4 font-mono text-sm overflow-x-auto">
                          <code className="text-foreground">
                            npm i elementra-ui
                          </code>
                        </div>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="absolute top-2 right-2 h-8 w-8 p-0 hover:bg-muted"
                          onClick={() => handleCopy("npm i elementra-ui")}
                        >
                          <Copy className="h-3 w-3" />
                        </Button>
                      </div>
                    </section>

                    {/* Usage Section */}
                    <section className="space-y-4">
                      <h2 className="text-xl sm:text-2xl font-semibold flex items-center gap-3 text-foreground">
                        <span className="flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                          2
                        </span>
                        Add Component
                      </h2>
                      <div className="relative">
                        <div className="bg-card border border-border rounded-lg p-4 font-mono text-sm overflow-x-auto">
                          <code className="text-foreground">
                            npx elementra-ui add calendar
                          </code>
                        </div>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="absolute top-2 right-2 h-8 w-8 p-0 hover:bg-muted"
                          onClick={() =>
                            handleCopy("npx elementra-ui add calendar")
                          }
                        >
                          <Copy className="h-3 w-3" />
                        </Button>
                      </div>
                    </section>

                    {/* Preview Section */}
                    <section className="space-y-4">
                      <h2 className="text-xl sm:text-2xl font-semibold flex items-center gap-3 text-foreground">
                        <span className="flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                          3
                        </span>
                        Preview
                      </h2>
                      <div className="bg-card border border-border rounded-lg p-6">
                        <div className="max-w-sm mx-auto">
                          <Calendar
                            value={selectedDate}
                            onValueChange={setSelectedDate}
                            mode="single"
                          />
                        </div>
                      </div>
                    </section>
                  </>
                )}

                {activeTab === "examples" && (
                  <section className="space-y-8">
                    <h2 className="text-2xl font-semibold text-foreground mb-6">
                      Examples
                    </h2>
                    {codeExamples.map((example, index) => (
                      <div key={index} className="space-y-4">
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg font-medium text-foreground">
                            {example.title}
                          </h3>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4">
                          {example.description}
                        </p>

                        <div className="bg-card border border-border rounded-lg p-6">
                          <div className="max-w-sm mx-auto">
                            {example.title === "Basic Calendar" && (
                              <Calendar
                                value={selectedDate}
                                onValueChange={setSelectedDate}
                                mode="single"
                              />
                            )}
                            {example.title === "Date Range Picker" && (
                              <Calendar
                                value={dateRange}
                                onValueChange={setDateRange}
                                mode="range"
                              />
                            )}
                            {example.title === "Multiple Date Selection" && (
                              <Calendar
                                value={multipleDates}
                                onValueChange={setMultipleDates}
                                mode="multiple"
                              />
                            )}
                            {example.title === "Disabled Dates" && (
                              <Calendar
                                value={selectedDate}
                                onValueChange={setSelectedDate}
                                mode="single"
                                disabled={(date) => {
                                  const day = date.getDay();
                                  const today = new Date();
                                  today.setHours(0, 0, 0, 0);
                                  return day === 0 || day === 6 || date < today;
                                }}
                              />
                            )}
                            {example.title === "Custom Styling" && (
                              <Calendar
                                value={selectedDate}
                                onValueChange={setSelectedDate}
                                mode="single"
                                className="rounded-md border shadow-lg p-4 bg-card"
                              />
                            )}
                          </div>
                        </div>

                        <div className="relative">
                          <div className="bg-card border border-border rounded-lg overflow-hidden">
                            <div className="bg-muted/50 px-4 py-2 border-b border-border">
                              <span className="text-sm font-medium text-foreground">
                                Code
                              </span>
                            </div>
                            <div className="p-4">
                              <pre className="text-sm text-foreground overflow-x-auto">
                                <code>{example.code}</code>
                              </pre>
                            </div>
                          </div>
                          <Button
                            size="sm"
                            variant="ghost"
                            className="absolute top-2 right-2 h-8 w-8 p-0 hover:bg-muted"
                            onClick={() => handleCopy(example.code)}
                          >
                            <CopyIcon className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </section>
                )}

                {activeTab === "api" && (
                  <section className="space-y-8">
                    <h2 className="text-2xl font-semibold text-foreground mb-6">
                      API Reference
                    </h2>

                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-medium text-foreground mb-4">
                          Calendar
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          The main calendar component for date selection with
                          various modes and customization options.
                        </p>
                        <div className="bg-card border border-border rounded-lg overflow-hidden">
                          <table className="w-full">
                            <thead className="bg-muted">
                              <tr>
                                <th className="text-left py-3 px-4 font-semibold text-foreground">
                                  Prop
                                </th>
                                <th className="text-left py-3 px-4 font-semibold text-foreground">
                                  Type
                                </th>
                                <th className="text-left py-3 px-4 font-semibold text-foreground">
                                  Default
                                </th>
                                <th className="text-left py-3 px-4 font-semibold text-foreground">
                                  Description
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="border-t border-border">
                                <td className="py-3 px-4 font-mono text-sm">
                                  value
                                </td>
                                <td className="py-3 px-4 text-sm">
                                  Date | Date[]
                                </td>
                                <td className="py-3 px-4 text-sm text-muted-foreground">
                                  null
                                </td>
                                <td className="py-3 px-4 text-sm text-muted-foreground">
                                  Selected date(s) value
                                </td>
                              </tr>
                              <tr className="border-t border-border">
                                <td className="py-3 px-4 font-mono text-sm">
                                  onValueChange
                                </td>
                                <td className="py-3 px-4 text-sm">
                                  (value) =&gt; void
                                </td>
                                <td className="py-3 px-4 text-sm text-muted-foreground">
                                  -
                                </td>
                                <td className="py-3 px-4 text-sm text-muted-foreground">
                                  Callback when date selection changes
                                </td>
                              </tr>
                              <tr className="border-t border-border">
                                <td className="py-3 px-4 font-mono text-sm">
                                  mode
                                </td>
                                <td className="py-3 px-4 text-sm">
                                  "single" | "multiple" | "range"
                                </td>
                                <td className="py-3 px-4 text-sm text-muted-foreground">
                                  "single"
                                </td>
                                <td className="py-3 px-4 text-sm text-muted-foreground">
                                  Selection mode for the calendar
                                </td>
                              </tr>
                              <tr className="border-t border-border">
                                <td className="py-3 px-4 font-mono text-sm">
                                  disabled
                                </td>
                                <td className="py-3 px-4 text-sm">
                                  (date: Date) =&gt; boolean
                                </td>
                                <td className="py-3 px-4 text-sm text-muted-foreground">
                                  -
                                </td>
                                <td className="py-3 px-4 text-sm text-muted-foreground">
                                  Function to disable specific dates
                                </td>
                              </tr>
                              <tr className="border-t border-border">
                                <td className="py-3 px-4 font-mono text-sm">
                                  className
                                </td>
                                <td className="py-3 px-4 text-sm">string</td>
                                <td className="py-3 px-4 text-sm text-muted-foreground">
                                  -
                                </td>
                                <td className="py-3 px-4 text-sm text-muted-foreground">
                                  Additional CSS classes
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h3 className="text-lg font-medium text-foreground">
                          Usage Examples
                        </h3>
                        <div className="bg-muted/20 border border-border rounded-lg p-4 space-y-4">
                          <div className="space-y-2">
                            <h4 className="font-medium text-foreground text-sm">
                              Single Date Selection
                            </h4>
                            <div className="bg-card border border-border rounded p-3 font-mono text-xs overflow-x-auto">
                              <code className="text-foreground">
                                {`<Calendar 
  value={selectedDate} 
  onValueChange={setSelectedDate}
  mode="single"
/>`}
                              </code>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <h4 className="font-medium text-foreground text-sm">
                              Date Range Selection
                            </h4>
                            <div className="bg-card border border-border rounded p-3 font-mono text-xs overflow-x-auto">
                              <code className="text-foreground">
                                {`<Calendar 
  value={dateRange} 
  onValueChange={setDateRange}
  mode="range"
/>`}
                              </code>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <h4 className="font-medium text-foreground text-sm">
                              With Disabled Dates
                            </h4>
                            <div className="bg-card border border-border rounded p-3 font-mono text-xs overflow-x-auto">
                              <code className="text-foreground">
                                {`<Calendar 
  value={selectedDate} 
  onValueChange={setSelectedDate}
  disabled={(date) => date < new Date()}
/>`}
                              </code>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h3 className="text-lg font-medium text-foreground">
                          Features
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="bg-card border border-border rounded-lg p-4 space-y-2">
                            <h4 className="font-medium text-foreground">
                              Selection Modes
                            </h4>
                            <ul className="text-sm text-muted-foreground space-y-1">
                              <li>• Single date selection</li>
                              <li>• Multiple date selection</li>
                              <li>• Date range selection</li>
                            </ul>
                          </div>
                          <div className="bg-card border border-border rounded-lg p-4 space-y-2">
                            <h4 className="font-medium text-foreground">
                              Customization
                            </h4>
                            <ul className="text-sm text-muted-foreground space-y-1">
                              <li>• Custom disabled dates logic</li>
                              <li>• Flexible styling options</li>
                              <li>• Keyboard navigation support</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default CalendarComponent;
