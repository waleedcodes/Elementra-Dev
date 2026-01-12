import React, { useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Modern Calendar component with multiple layout variants
 *
 * Props:
 * - value: Date | Date[] (for range)
 * - onValueChange: (value: Date | Date[]) => void
 * - mode: single | multiple | range
 * - disabled: (date: Date) => boolean
 * - className: string
 * - variant: default | minimal | card | inline | sidebar
 */
export function Calendar({
  value,
  onValueChange,
  mode = "single",
  disabled,
  className,
  variant = "default",
  ...props
}) {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [isAnimating, setIsAnimating] = useState(false);

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
  const remainingDays = 42 - days.length;
  for (let day = 1; day <= remainingDays; day++) {
    const date = new Date(year, month + 1, day);
    days.push({ date, isCurrentMonth: false });
  }

  const isSelected = (date) => {
    if (!value) return false;
    if (Array.isArray(value)) {
      return value.some((d) => d && d.toDateString() === date.toDateString());
    }
    return value && value.toDateString() === date.toDateString();
  };

  const isRangeStart = (date) => {
    if (!Array.isArray(value) || value.length === 0) return false;
    return value[0] && value[0].toDateString() === date.toDateString();
  };

  const isRangeEnd = (date) => {
    if (!Array.isArray(value) || value.length < 2) return false;
    return value[1] && value[1].toDateString() === date.toDateString();
  };

  const isInRange = (date) => {
    if (!Array.isArray(value) || value.length !== 2) return false;
    const [start, end] = value;
    return date > start && date < end;
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
      const isAlreadySelected = currentValue.some(
        (d) => d && d.toDateString() === date.toDateString()
      );

      if (isAlreadySelected) {
        onValueChange?.(
          currentValue.filter(
            (d) => d && d.toDateString() !== date.toDateString()
          )
        );
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

  const changeMonth = (direction) => {
    setIsAnimating(true);
    setCurrentMonth(new Date(year, month + direction));
    setTimeout(() => setIsAnimating(false), 300);
  };

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // Default Variant (Primary Theme)
  if (variant === "default") {
    return (
      <div className={cn("w-full max-w-md", className)} {...props}>
        <style>{`
          @keyframes slideIn {
            from { opacity: 0; transform: scale(0.95); }
            to { opacity: 1; transform: scale(1); }
          }
          .calendar-day { 
            transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1); 
          }
          .calendar-day:hover:not(:disabled) { 
            transform: scale(1.02); 
            z-index: 10;
          }
          .calendar-day:active:not(:disabled) { 
            transform: scale(0.98); 
          }
          .animate-in { 
            animation: slideIn 0.3s ease-out; 
          }
        `}</style>

        <div className="bg-muted/20 p-1 rounded-2xl shadow-lg border border-border">
          <div className="bg-card rounded-xl p-6 shadow-sm">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={() => changeMonth(-1)}
                className="group relative inline-flex items-center justify-center rounded-lg p-3 bg-primary text-primary-foreground shadow-md hover:bg-primary/90 transition-all duration-200"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <div className="text-center">
                <h2 className="text-2xl font-bold text-foreground">
                  {monthNames[month]}
                </h2>
                <p className="text-sm font-medium text-muted-foreground mt-1">
                  {year}
                </p>
              </div>

              <button
                onClick={() => changeMonth(1)}
                className="group relative inline-flex items-center justify-center rounded-lg p-3 bg-primary text-primary-foreground shadow-md hover:bg-primary/90 transition-all duration-200"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>

            {/* Day Names */}
            <div className="grid grid-cols-7 gap-2 mb-3">
              {dayNames.map((day) => (
                <div
                  key={day}
                  className="text-center text-xs font-semibold text-muted-foreground py-3 uppercase tracking-wide"
                >
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar Grid */}
            <div
              className={cn(
                "grid grid-cols-7 gap-2",
                isAnimating && "animate-in"
              )}
            >
              {days.map(({ date, isCurrentMonth }, index) => {
                const selected = isSelected(date);
                const rangeStart = isRangeStart(date);
                const rangeEnd = isRangeEnd(date);
                const inRange = isInRange(date);
                const todayDate = isToday(date);
                const isDisabled = disabled && disabled(date);

                return (
                  <button
                    key={index}
                    onClick={() => handleDateClick(date)}
                    disabled={isDisabled}
                    className={cn(
                      "calendar-day relative inline-flex items-center justify-center rounded-lg text-sm font-medium h-11 w-full",
                      "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
                      !isCurrentMonth && "text-muted-foreground/40",
                      isCurrentMonth &&
                        !selected &&
                        !inRange &&
                        !todayDate &&
                        "text-foreground hover:bg-primary/10 hover:text-primary",
                      todayDate &&
                        !selected &&
                        "bg-secondary text-secondary-foreground font-semibold border border-secondary/20",
                      (selected || rangeStart || rangeEnd) &&
                        "bg-primary text-primary-foreground font-semibold shadow-md",
                      inRange &&
                        !selected &&
                        "bg-primary/10 text-primary font-medium",
                      isDisabled &&
                        "opacity-30 cursor-not-allowed hover:transform-none"
                    )}
                  >
                    <span className="relative z-10">{date.getDate()}</span>
                  </button>
                );
              })}
            </div>

            {/* Range Display */}
            {mode === "range" && Array.isArray(value) && value.length > 0 && (
              <div className="mt-6 pt-4 border-t border-border">
                <div className="flex items-center justify-center gap-3 text-sm">
                  <div className="px-4 py-2 rounded-lg bg-primary/10 text-primary font-medium border border-primary/20">
                    {value[0]?.toLocaleDateString()}
                  </div>
                  {value.length === 2 && (
                    <>
                      <span className="text-muted-foreground font-medium">→</span>
                      <div className="px-4 py-2 rounded-lg bg-primary/10 text-primary font-medium border border-primary/20">
                        {value[1]?.toLocaleDateString()}
                      </div>
                    </>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Minimal Variant (Clean Muted)
  if (variant === "minimal") {
    return (
      <div className={cn("w-full max-w-md", className)} {...props}>
        <style>{`
          .minimal-day { 
            transition: all 0.15s ease; 
          }
          .minimal-day:hover:not(:disabled) { 
            background: hsl(var(--muted)); 
            transform: scale(1.02);
          }
        `}</style>

        <div className="bg-card rounded-lg border border-border shadow-md p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={() => changeMonth(-1)}
              className="p-2.5 hover:bg-muted rounded-lg transition-colors duration-200 text-muted-foreground hover:text-foreground"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <div className="text-center">
              <h2 className="text-xl font-bold text-foreground">
                {monthNames[month]}
              </h2>
              <p className="text-sm font-medium text-muted-foreground mt-1">{year}</p>
            </div>

            <button
              onClick={() => changeMonth(1)}
              className="p-2.5 hover:bg-muted rounded-lg transition-colors duration-200 text-muted-foreground hover:text-foreground"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Day Names */}
          <div className="grid grid-cols-7 gap-1 mb-3">
            {dayNames.map((day) => (
              <div
                key={day}
                className="text-center text-xs font-semibold text-muted-foreground py-2 uppercase tracking-wide"
              >
                {day.substring(0, 2)}
              </div>
            ))}
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-1">
            {days.map(({ date, isCurrentMonth }, index) => {
              const selected = isSelected(date);
              const todayDate = isToday(date);
              const inRange = isInRange(date);
              const isDisabled = disabled && disabled(date);

              return (
                <button
                  key={index}
                  onClick={() => handleDateClick(date)}
                  disabled={isDisabled}
                  className={cn(
                    "minimal-day h-10 w-10 flex items-center justify-center text-sm font-medium rounded-lg",
                    "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
                    !isCurrentMonth && "text-muted-foreground/40",
                    isCurrentMonth &&
                      !selected &&
                      !inRange &&
                      !todayDate &&
                      "text-foreground",
                    todayDate &&
                      !selected &&
                      "font-semibold text-foreground bg-muted border border-border",
                    selected && "bg-foreground text-background font-semibold shadow-md",
                    inRange &&
                      !selected &&
                      "bg-muted text-foreground font-medium",
                    isDisabled &&
                      "opacity-30 cursor-not-allowed hover:transform-none"
                  )}
                >
                  {date.getDate()}
                </button>
              );
            })}
          </div>

          {/* Range Display */}
          {mode === "range" && Array.isArray(value) && value.length > 0 && (
            <div className="mt-6 pt-4 border-t border-border">
              <div className="flex items-center justify-center gap-3 text-sm">
                <div className="px-3 py-2 rounded-md bg-muted text-foreground font-medium border border-border">
                  {value[0]?.toLocaleDateString()}
                </div>
                {value.length === 2 && (
                  <>
                    <span className="text-muted-foreground">→</span>
                    <div className="px-3 py-2 rounded-md bg-muted text-foreground font-medium border border-border">
                      {value[1]?.toLocaleDateString()}
                    </div>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Card Variant (Accent Theme)
  if (variant === "card") {
    return (
      <div className={cn("w-full max-w-2xl", className)} {...props}>
        <style>{`
          .card-day {
            transition: all 0.2s ease;
          }
          .card-day:hover:not(:disabled) {
            transform: translateY(-1px);
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          }
        `}</style>

        <div className="bg-card rounded-2xl border border-border shadow-lg p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={() => changeMonth(-1)}
              className="p-4 bg-accent text-accent-foreground hover:bg-accent/90 rounded-lg shadow-md transition-colors duration-200"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <div className="text-center">
              <h2 className="text-4xl font-bold text-foreground">
                {monthNames[month]}
              </h2>
              <p className="text-xl font-medium text-muted-foreground mt-2">
                {year}
              </p>
            </div>

            <button
              onClick={() => changeMonth(1)}
              className="p-4 bg-accent text-accent-foreground hover:bg-accent/90 rounded-lg shadow-md transition-colors duration-200"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Day Names */}
          <div className="grid grid-cols-7 gap-3 mb-6">
            {dayNames.map((day) => (
              <div
                key={day}
                className="text-center text-lg font-semibold text-muted-foreground py-2"
              >
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-3">
            {days.map(({ date, isCurrentMonth }, index) => {
              const selected = isSelected(date);
              const todayDate = isToday(date);
              const inRange = isInRange(date);
              const isDisabled = disabled && disabled(date);

              return (
                <button
                  key={index}
                  onClick={() => handleDateClick(date)}
                  disabled={isDisabled}
                  className={cn(
                    "card-day h-16 flex flex-col items-center justify-center rounded-lg text-base font-medium shadow-sm border",
                    "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
                    !isCurrentMonth && "text-muted-foreground/40 bg-muted/20 border-border/50",
                    isCurrentMonth &&
                      !selected &&
                      !inRange &&
                      !todayDate &&
                      "text-foreground bg-card border-border hover:bg-muted/50",
                    todayDate &&
                      !selected &&
                      "bg-secondary text-secondary-foreground font-semibold shadow-md border-secondary",
                    selected &&
                      "bg-accent text-accent-foreground font-semibold shadow-lg border-accent",
                    inRange &&
                      !selected &&
                      "bg-accent/20 text-accent-foreground font-medium border-accent/30",
                    isDisabled &&
                      "opacity-30 cursor-not-allowed hover:transform-none hover:shadow-sm"
                  )}
                >
                  <span className="text-lg">{date.getDate()}</span>
                </button>
              );
            })}
          </div>

          {/* Range Display */}
          {mode === "range" && Array.isArray(value) && value.length > 0 && (
            <div className="mt-8 pt-6 border-t border-border">
              <div className="flex items-center justify-center gap-4 text-base">
                <div className="px-6 py-3 rounded-lg bg-accent/10 text-accent-foreground font-medium border border-accent/20 shadow-sm">
                  {value[0]?.toLocaleDateString()}
                </div>
                {value.length === 2 && (
                  <>
                    <span className="text-muted-foreground font-medium text-xl">
                      →
                    </span>
                    <div className="px-6 py-3 rounded-lg bg-accent/10 text-accent-foreground font-medium border border-accent/20 shadow-sm">
                      {value[1]?.toLocaleDateString()}
                    </div>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Inline Variant (Secondary Theme)
  if (variant === "inline") {
    return (
      <div className={cn("w-full max-w-2xl", className)} {...props}>
        <div className="flex items-center gap-6 bg-muted/50 rounded-lg p-6 shadow-md border border-border">
          {/* Navigation Button */}
          <button
            onClick={() => changeMonth(-1)}
            className="p-3 bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-lg shadow-sm transition-colors duration-200 shrink-0"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Calendar Content */}
          <div className="flex-1 bg-card rounded-lg p-4 shadow-sm border border-border">
            {/* Header */}
            <div className="text-center mb-4">
              <span className="text-xl font-bold text-foreground">
                {monthNames[month]} {year}
              </span>
            </div>

            {/* Day Names */}
            <div className="grid grid-cols-7 gap-1 mb-2">
              {days.slice(0, 7).map((_, idx) => (
                <div
                  key={idx}
                  className="text-center text-xs text-muted-foreground font-semibold uppercase tracking-wide"
                >
                  {dayNames[idx].substring(0, 2)}
                </div>
              ))}
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-1">
              {days.map(({ date, isCurrentMonth }, index) => {
                const selected = isSelected(date);
                const todayDate = isToday(date);
                const inRange = isInRange(date);
                const isDisabled = disabled && disabled(date);

                return (
                  <button
                    key={index}
                    onClick={() => handleDateClick(date)}
                    disabled={isDisabled}
                    className={cn(
                      "h-9 w-9 flex items-center justify-center text-sm font-medium rounded-md transition-all duration-200",
                      "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
                      !isCurrentMonth && "text-muted-foreground/40",
                      isCurrentMonth &&
                        !selected &&
                        !inRange &&
                        !todayDate &&
                        "text-foreground hover:bg-muted",
                      todayDate &&
                        !selected &&
                        "bg-primary text-primary-foreground font-semibold shadow-sm",
                      selected &&
                        "bg-secondary text-secondary-foreground font-semibold shadow-md",
                      inRange &&
                        !selected &&
                        "bg-secondary/20 text-secondary-foreground font-medium",
                      isDisabled &&
                        "opacity-30 cursor-not-allowed hover:transform-none"
                    )}
                  >
                    {date.getDate()}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Navigation Button */}
          <button
            onClick={() => changeMonth(1)}
            className="p-3 bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-lg shadow-sm transition-colors duration-200 shrink-0"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Range Display for Inline */}
        {mode === "range" && Array.isArray(value) && value.length > 0 && (
          <div className="mt-4 flex items-center justify-center gap-3 text-sm">
            <div className="px-4 py-2 rounded-md bg-secondary/10 text-secondary-foreground font-medium border border-secondary/20">
              {value[0]?.toLocaleDateString()}
            </div>
            {value.length === 2 && (
              <>
                <span className="text-muted-foreground font-medium">→</span>
                <div className="px-4 py-2 rounded-md bg-secondary/10 text-secondary-foreground font-medium border border-secondary/20">
                  {value[1]?.toLocaleDateString()}
                </div>
              </>
            )}
          </div>
        )}
      </div>
    );
  }

  // Sidebar Variant (Dark Sidebar Theme)
  if (variant === "sidebar") {
    const weeks = [];
    for (let i = 0; i < days.length; i += 7) {
      weeks.push(days.slice(i, i + 7));
    }

    return (
      <div className={cn("w-full max-w-sm", className)} {...props}>
        <div className="bg-sidebar rounded-2xl p-6 shadow-lg border border-sidebar-border">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-sidebar-foreground">
              {monthNames[month]}
            </h2>
            <p className="text-sidebar-foreground/70 text-lg mt-2 font-medium">{year}</p>
          </div>

          {/* Navigation */}
          <div className="flex justify-between mb-8">
            <button
              onClick={() => changeMonth(-1)}
              className="p-3 bg-sidebar-accent/20 hover:bg-sidebar-accent/30 rounded-lg transition-colors duration-200 text-sidebar-accent-foreground border border-sidebar-border"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={() => changeMonth(1)}
              className="p-3 bg-sidebar-accent/20 hover:bg-sidebar-accent/30 rounded-lg transition-colors duration-200 text-sidebar-accent-foreground border border-sidebar-border"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Calendar Content */}
          <div className="space-y-3">
            {/* Day Names */}
            <div className="grid grid-cols-7 gap-2 mb-4">
              {dayNames.map((day) => (
                <div
                  key={day}
                  className="text-center text-sm font-semibold text-sidebar-foreground/60 uppercase tracking-wide"
                >
                  {day.substring(0, 1)}
                </div>
              ))}
            </div>

            {/* Weeks */}
            {weeks.map((week, weekIdx) => (
              <div key={weekIdx} className="grid grid-cols-7 gap-2">
                {week.map(({ date, isCurrentMonth }, dayIdx) => {
                  const selected = isSelected(date);
                  const todayDate = isToday(date);
                  const inRange = isInRange(date);
                  const isDisabled = disabled && disabled(date);

                  return (
                    <button
                      key={dayIdx}
                      onClick={() => handleDateClick(date)}
                      disabled={isDisabled}
                      className={cn(
                        "h-11 w-11 flex items-center justify-center text-sm font-medium rounded-lg transition-all duration-200",
                        "focus:outline-none focus:ring-2 focus:ring-sidebar-primary focus:ring-offset-2 focus:ring-offset-sidebar",
                        !isCurrentMonth && "text-sidebar-foreground/30",
                        isCurrentMonth &&
                          !selected &&
                          !inRange &&
                          !todayDate &&
                          "text-sidebar-foreground hover:bg-sidebar-accent/20",
                        todayDate &&
                          !selected &&
                          "bg-sidebar-primary text-sidebar-primary-foreground font-semibold shadow-md border border-sidebar-primary/50",
                        selected &&
                          "bg-sidebar-foreground text-sidebar font-semibold shadow-lg",
                        inRange &&
                          !selected &&
                          "bg-sidebar-accent/30 text-sidebar-accent-foreground font-medium",
                        isDisabled &&
                          "opacity-30 cursor-not-allowed hover:transform-none"
                      )}
                    >
                      {date.getDate()}
                    </button>
                  );
                })}
              </div>
            ))}
          </div>

          {/* Range Display */}
          {mode === "range" && Array.isArray(value) && value.length > 0 && (
            <div className="mt-8 pt-6 border-t border-sidebar-border">
              <div className="space-y-3 text-sm">
                <div className="bg-sidebar-accent/20 rounded-lg px-4 py-3 border border-sidebar-border">
                  <span className="text-sidebar-foreground/60 text-xs uppercase tracking-wide">
                    From:{" "}
                  </span>
                  <span className="font-semibold text-sidebar-foreground block mt-1">
                    {value[0]?.toLocaleDateString()}
                  </span>
                </div>
                {value.length === 2 && (
                  <div className="bg-sidebar-accent/20 rounded-lg px-4 py-3 border border-sidebar-border">
                    <span className="text-sidebar-foreground/60 text-xs uppercase tracking-wide">
                      To:{" "}
                    </span>
                    <span className="font-semibold text-sidebar-foreground block mt-1">
                      {value[1]?.toLocaleDateString()}
                    </span>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  return null;
}

export default Calendar;
