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

  // Default Variant (Professional Blue)
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

        <div className="bg-gray-50 p-1 rounded-2xl shadow-lg border border-gray-200">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={() => changeMonth(-1)}
                className="group relative inline-flex items-center justify-center rounded-lg p-3 bg-blue-600 text-white shadow-md hover:bg-blue-700 transition-all duration-200"
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
                <h2 className="text-2xl font-bold text-gray-800">
                  {monthNames[month]}
                </h2>
                <p className="text-sm font-medium text-gray-600 mt-1">
                  {year}
                </p>
              </div>

              <button
                onClick={() => changeMonth(1)}
                className="group relative inline-flex items-center justify-center rounded-lg p-3 bg-blue-600 text-white shadow-md hover:bg-blue-700 transition-all duration-200"
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
                  className="text-center text-xs font-semibold text-gray-500 py-3 uppercase tracking-wide"
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
                      "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
                      !isCurrentMonth && "text-gray-300",
                      isCurrentMonth &&
                        !selected &&
                        !inRange &&
                        !todayDate &&
                        "text-gray-700 hover:bg-blue-50 hover:text-blue-600",
                      todayDate &&
                        !selected &&
                        "bg-blue-100 text-blue-700 font-semibold border border-blue-200",
                      (selected || rangeStart || rangeEnd) &&
                        "bg-blue-600 text-white font-semibold shadow-md",
                      inRange &&
                        !selected &&
                        "bg-blue-50 text-blue-600 font-medium",
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
              <div className="mt-6 pt-4 border-t border-gray-200">
                <div className="flex items-center justify-center gap-3 text-sm">
                  <div className="px-4 py-2 rounded-lg bg-blue-50 text-blue-700 font-medium border border-blue-200">
                    {value[0]?.toLocaleDateString()}
                  </div>
                  {value.length === 2 && (
                    <>
                      <span className="text-gray-400 font-medium">→</span>
                      <div className="px-4 py-2 rounded-lg bg-blue-50 text-blue-700 font-medium border border-blue-200">
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

  // Minimal Variant (Clean Gray)
  if (variant === "minimal") {
    return (
      <div className={cn("w-full max-w-md", className)} {...props}>
        <style>{`
          .minimal-day { 
            transition: all 0.15s ease; 
          }
          .minimal-day:hover:not(:disabled) { 
            background: #f8fafc; 
            transform: scale(1.02);
          }
        `}</style>

        <div className="bg-white rounded-lg border border-gray-300 shadow-md p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={() => changeMonth(-1)}
              className="p-2.5 hover:bg-gray-100 rounded-lg transition-colors duration-200 text-gray-600 hover:text-gray-800"
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
              <h2 className="text-xl font-bold text-gray-800">
                {monthNames[month]}
              </h2>
              <p className="text-sm font-medium text-gray-500 mt-1">{year}</p>
            </div>

            <button
              onClick={() => changeMonth(1)}
              className="p-2.5 hover:bg-gray-100 rounded-lg transition-colors duration-200 text-gray-600 hover:text-gray-800"
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
                className="text-center text-xs font-semibold text-gray-500 py-2 uppercase tracking-wide"
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
                    "focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2",
                    !isCurrentMonth && "text-gray-300",
                    isCurrentMonth &&
                      !selected &&
                      !inRange &&
                      !todayDate &&
                      "text-gray-700",
                    todayDate &&
                      !selected &&
                      "font-semibold text-gray-800 bg-gray-100 border border-gray-300",
                    selected && "bg-gray-800 text-white font-semibold shadow-md",
                    inRange &&
                      !selected &&
                      "bg-gray-100 text-gray-700 font-medium",
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
            <div className="mt-6 pt-4 border-t border-gray-200">
              <div className="flex items-center justify-center gap-3 text-sm">
                <div className="px-3 py-2 rounded-md bg-gray-100 text-gray-700 font-medium border border-gray-300">
                  {value[0]?.toLocaleDateString()}
                </div>
                {value.length === 2 && (
                  <>
                    <span className="text-gray-400">→</span>
                    <div className="px-3 py-2 rounded-md bg-gray-100 text-gray-700 font-medium border border-gray-300">
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

  // Card Variant (Corporate Style)
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

        <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={() => changeMonth(-1)}
              className="p-4 bg-gray-700 hover:bg-gray-800 text-white rounded-lg shadow-md transition-colors duration-200"
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
              <h2 className="text-4xl font-bold text-gray-800">
                {monthNames[month]}
              </h2>
              <p className="text-xl font-medium text-gray-600 mt-2">
                {year}
              </p>
            </div>

            <button
              onClick={() => changeMonth(1)}
              className="p-4 bg-gray-700 hover:bg-gray-800 text-white rounded-lg shadow-md transition-colors duration-200"
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
                className="text-center text-lg font-semibold text-gray-600 py-2"
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
                    "focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2",
                    !isCurrentMonth && "text-gray-300 bg-gray-50 border-gray-200",
                    isCurrentMonth &&
                      !selected &&
                      !inRange &&
                      !todayDate &&
                      "text-gray-700 bg-white border-gray-300 hover:bg-gray-50",
                    todayDate &&
                      !selected &&
                      "bg-blue-600 text-white font-semibold shadow-md border-blue-600",
                    selected &&
                      "bg-gray-800 text-white font-semibold shadow-lg border-gray-800",
                    inRange &&
                      !selected &&
                      "bg-gray-100 text-gray-700 font-medium border-gray-400",
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
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-center gap-4 text-base">
                <div className="px-6 py-3 rounded-lg bg-gray-100 text-gray-700 font-medium border border-gray-300 shadow-sm">
                  {value[0]?.toLocaleDateString()}
                </div>
                {value.length === 2 && (
                  <>
                    <span className="text-gray-400 font-medium text-xl">
                      →
                    </span>
                    <div className="px-6 py-3 rounded-lg bg-gray-100 text-gray-700 font-medium border border-gray-300 shadow-sm">
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

  // Inline Variant (Business Compact)
  if (variant === "inline") {
    return (
      <div className={cn("w-full max-w-2xl", className)} {...props}>
        <div className="flex items-center gap-6 bg-gray-50 rounded-lg p-6 shadow-md border border-gray-200">
          {/* Navigation Button */}
          <button
            onClick={() => changeMonth(-1)}
            className="p-3 bg-gray-600 hover:bg-gray-700 text-white rounded-lg shadow-sm transition-colors duration-200 shrink-0"
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
          <div className="flex-1 bg-white rounded-lg p-4 shadow-sm border border-gray-200">
            {/* Header */}
            <div className="text-center mb-4">
              <span className="text-xl font-bold text-gray-800">
                {monthNames[month]} {year}
              </span>
            </div>

            {/* Day Names */}
            <div className="grid grid-cols-7 gap-1 mb-2">
              {days.slice(0, 7).map((_, idx) => (
                <div
                  key={idx}
                  className="text-center text-xs text-gray-600 font-semibold uppercase tracking-wide"
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
                      "focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2",
                      !isCurrentMonth && "text-gray-300",
                      isCurrentMonth &&
                        !selected &&
                        !inRange &&
                        !todayDate &&
                        "text-gray-700 hover:bg-gray-100",
                      todayDate &&
                        !selected &&
                        "bg-blue-600 text-white font-semibold shadow-sm",
                      selected &&
                        "bg-gray-800 text-white font-semibold shadow-md",
                      inRange &&
                        !selected &&
                        "bg-gray-100 text-gray-700 font-medium",
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
            className="p-3 bg-gray-600 hover:bg-gray-700 text-white rounded-lg shadow-sm transition-colors duration-200 shrink-0"
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
            <div className="px-4 py-2 rounded-md bg-gray-100 text-gray-700 font-medium border border-gray-300">
              {value[0]?.toLocaleDateString()}
            </div>
            {value.length === 2 && (
              <>
                <span className="text-gray-400 font-medium">→</span>
                <div className="px-4 py-2 rounded-md bg-gray-100 text-gray-700 font-medium border border-gray-300">
                  {value[1]?.toLocaleDateString()}
                </div>
              </>
            )}
          </div>
        )}
      </div>
    );
  }

  // Sidebar Variant (Professional Dark)
  if (variant === "sidebar") {
    const weeks = [];
    for (let i = 0; i < days.length; i += 7) {
      weeks.push(days.slice(i, i + 7));
    }

    return (
      <div className={cn("w-full max-w-sm", className)} {...props}>
        <div className="bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-700">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white">
              {monthNames[month]}
            </h2>
            <p className="text-gray-300 text-lg mt-2 font-medium">{year}</p>
          </div>

          {/* Navigation */}
          <div className="flex justify-between mb-8">
            <button
              onClick={() => changeMonth(-1)}
              className="p-3 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors duration-200 text-gray-200 hover:text-white border border-gray-600"
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
              className="p-3 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors duration-200 text-gray-200 hover:text-white border border-gray-600"
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
                  className="text-center text-sm font-semibold text-gray-400 uppercase tracking-wide"
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
                        "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800",
                        !isCurrentMonth && "text-gray-500",
                        isCurrentMonth &&
                          !selected &&
                          !inRange &&
                          !todayDate &&
                          "text-gray-200 hover:bg-gray-700 hover:text-white",
                        todayDate &&
                          !selected &&
                          "bg-blue-600 text-white font-semibold shadow-md border border-blue-500",
                        selected &&
                          "bg-white text-gray-800 font-semibold shadow-lg",
                        inRange &&
                          !selected &&
                          "bg-gray-700 text-gray-200 font-medium",
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
            <div className="mt-8 pt-6 border-t border-gray-700">
              <div className="space-y-3 text-sm">
                <div className="bg-gray-700 rounded-lg px-4 py-3 border border-gray-600">
                  <span className="text-gray-400 text-xs uppercase tracking-wide">
                    From:{" "}
                  </span>
                  <span className="font-semibold text-white block mt-1">
                    {value[0]?.toLocaleDateString()}
                  </span>
                </div>
                {value.length === 2 && (
                  <div className="bg-gray-700 rounded-lg px-4 py-3 border border-gray-600">
                    <span className="text-gray-400 text-xs uppercase tracking-wide">
                      To:{" "}
                    </span>
                    <span className="font-semibold text-white block mt-1">
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
