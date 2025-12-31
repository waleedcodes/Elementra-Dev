import React, { useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Calendar component with date picking
 * 
 * Props:
 * - value: Date | Date[] (for range)
 * - onValueChange: (value: Date | Date[]) => void
 * - mode: single | multiple | range
 * - disabled: (date: Date) => boolean
 * - className: string
 */
export function Calendar({
  value,
  onValueChange,
  mode = "single",
  disabled,
  className,
  ...props
}) {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  
  const today = new Date();
  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();
  
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const daysInMonth = lastDay.getDate();
  const startingDayOfWeek = firstDay.getDay();
  
  const days = [];
  
  // Previous month's trailing days
  for (let i = startingDayOfWeek - 1; i >= 0; i--) {
    const date = new Date(year, month, -i);
    days.push({ date, isCurrentMonth: false });
  }
  
  // Current month's days
  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(year, month, day);
    days.push({ date, isCurrentMonth: true });
  }
  
  // Next month's leading days
  const remainingDays = 42 - days.length; // 6 weeks * 7 days
  for (let day = 1; day <= remainingDays; day++) {
    const date = new Date(year, month + 1, day);
    days.push({ date, isCurrentMonth: false });
  }

  const isSelected = (date) => {
    if (!value) return false;
    if (Array.isArray(value)) {
      return value.some(d => d && d.toDateString() === date.toDateString());
    }
    return value && value.toDateString() === date.toDateString();
  };

  const isInRange = (date) => {
    if (!Array.isArray(value) || value.length !== 2) return false;
    const [start, end] = value;
    return date >= start && date <= end;
  };

  const isToday = (date) => {
    return date.toDateString() === today.toDateString();
  };

  const handleDateClick = (date) => {
    if (disabled && disabled(date)) return;
    
    if (mode === "single") {
      onValueChange?.(date);
    } else if (mode === "multiple") {
      const currentValue = Array.isArray(value) ? value : [];
      const isAlreadySelected = currentValue.some(d => d && d.toDateString() === date.toDateString());
      
      if (isAlreadySelected) {
        onValueChange?.(currentValue.filter(d => d && d.toDateString() !== date.toDateString()));
      } else {
        onValueChange?.([...currentValue, date]);
      }
    } else if (mode === "range") {
      const currentValue = Array.isArray(value) ? value : [];
      
      if (currentValue.length === 0 || currentValue.length === 2) {
        onValueChange?.([date]);
      } else if (currentValue.length === 1) {
        const [start] = currentValue;
        if (date < start) {
          onValueChange?.([date, start]);
        } else {
          onValueChange?.([start, date]);
        }
      }
    }
  };

  const goToPreviousMonth = () => {
    setCurrentMonth(new Date(year, month - 1));
  };

  const goToNextMonth = () => {
    setCurrentMonth(new Date(year, month + 1));
  };

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div className={cn("w-full max-w-sm", className)} {...props}>
      {/* Header */}
      <div className="flex items-center justify-between py-4">
        <button
          onClick={goToPreviousMonth}
          className="inline-flex items-center justify-center rounded-md p-2 hover:bg-accent hover:text-accent-foreground"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <h2 className="text-sm font-semibold">
          {monthNames[month]} {year}
        </h2>
        
        <button
          onClick={goToNextMonth}
          className="inline-flex items-center justify-center rounded-md p-2 hover:bg-accent hover:text-accent-foreground"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Day names */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {dayNames.map((day) => (
          <div key={day} className="text-center text-xs font-medium text-muted-foreground py-2">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-7 gap-1">
        {days.map(({ date, isCurrentMonth }, index) => (
          <button
            key={index}
            onClick={() => handleDateClick(date)}
            disabled={disabled && disabled(date)}
            className={cn(
              "inline-flex items-center justify-center rounded-md text-sm font-normal",
              "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              "disabled:pointer-events-none disabled:opacity-50",
              !isCurrentMonth && "text-muted-foreground",
              isSelected(date) && "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground",
              isInRange(date) && !isSelected(date) && "bg-accent text-accent-foreground",
              isToday(date) && !isSelected(date) && "bg-accent text-accent-foreground font-semibold",
              "h-9 w-9"
            )}
          >
            {date.getDate()}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Calendar;

// Usage examples:
// <Calendar value={selectedDate} onValueChange={setSelectedDate} />
// <Calendar mode="range" value={dateRange} onValueChange={setDateRange} />
// <Calendar mode="multiple" value={selectedDates} onValueChange={setSelectedDates} />
