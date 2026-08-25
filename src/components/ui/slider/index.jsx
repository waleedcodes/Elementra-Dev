import React, { useId } from "react";
import { cn } from "@/lib/utils";

/**
 * Slider component for range inputs
 * 
 * Props:
 * - value: number | [number, number] (for range)
 * - onValueChange: (value: number | [number, number]) => void
 * - min: number (default: 0)
 * - max: number (default: 100)
 * - step: number (default: 1)
 * - disabled: boolean
 * - orientation: horizontal | vertical (default: horizontal)
 * - className: string
 */
export function Slider({
  value = 0,
  onValueChange,
  min = 0,
  max = 100,
  step = 1,
  disabled = false,
  orientation = "horizontal",
  className,
  ...props
}) {
  const sliderId = useId();
  const isRange = Array.isArray(value);
  const currentValue = isRange ? value[0] : value;

  const handleChange = (e) => {
    if (disabled) return;
    const newValue = parseFloat(e.target.value);
    onValueChange?.(newValue);
  };

  const handleRangeChange = (index, e) => {
    if (disabled) return;
    const newValue = parseFloat(e.target.value);
    const newRange = [...value];
    newRange[index] = newValue;
    onValueChange?.(newRange);
  };

  const percentage = ((currentValue - min) / (max - min)) * 100;

  return (
    <div
      className={cn(
        "relative flex w-full touch-none select-none items-center",
        orientation === "vertical" && "h-full w-6 flex-col",
        className
      )}
      {...props}
    >
      <input
        type="range"
        id={sliderId}
        min={min}
        max={max}
        step={step}
        value={currentValue}
        onChange={handleChange}
        disabled={disabled}
        className={cn(
          "peer h-2 w-full cursor-pointer appearance-none rounded-lg bg-secondary",
          "disabled:cursor-not-allowed disabled:opacity-50",
          "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
          orientation === "vertical" && "h-full w-2",
          className
        )}
        style={{
          background: `linear-gradient(to right, hsl(var(--primary)) 0%, hsl(var(--primary)) ${percentage}%, hsl(var(--secondary)) ${percentage}%, hsl(var(--secondary)) 100%)`
        }}
      />
      
      {/* Range slider for dual handles */}
      {isRange && (
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value[1]}
          onChange={(e) => handleRangeChange(1, e)}
          disabled={disabled}
          className={cn(
            "absolute h-2 w-full cursor-pointer appearance-none rounded-lg bg-transparent",
            "disabled:cursor-not-allowed disabled:opacity-50",
            "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
            orientation === "vertical" && "h-full w-2"
          )}
        />
      )}
    </div>
  );
}

/**
 * Slider with labels and value display
 */
export function SliderWithLabels({
  value,
  onValueChange,
  min = 0,
  max = 100,
  step = 1,
  disabled = false,
  label,
  showValue = true,
  className,
  ...props
}) {
  const isRange = Array.isArray(value);
  const currentValue = isRange ? value[0] : value;

  return (
    <div className={cn("space-y-2", className)} {...props}>
      {label && (
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium">{label}</label>
          {showValue && (
            <span className="text-sm text-muted-foreground">
              {isRange ? `${value[0]} - ${value[1]}` : currentValue}
            </span>
          )}
        </div>
      )}
      <Slider
        value={value}
        onValueChange={onValueChange}
        min={min}
        max={max}
        step={step}
        disabled={disabled}
      />
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>{min}</span>
        <span>{max}</span>
      </div>
    </div>
  );
}

export default Slider;

// Usage examples:
// <Slider value={50} onValueChange={setValue} min={0} max={100} />
// <SliderWithLabels label="Volume" value={[20, 80]} onValueChange={setRange} />
// <Slider orientation="vertical" value={30} onValueChange={setValue} />
