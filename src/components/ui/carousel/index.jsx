"use client";
import React, { useState, useEffect, useCallback } from "react";
import { cn } from "../../../lib/utils";

/**
 * Carousel — Touch/swipe responsive slideshow slider
 *
 * Props:
 * - opts: { loop?: boolean, autoplay?: boolean, interval?: number }
 * - className: string
 *
 * Sub-components: CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, CarouselIndicators
 */

const CarouselContext = React.createContext({});

export function Carousel({
  opts = {},
  className,
  children,
  ...props
}) {
  const { loop = true, autoplay = false, interval = 4000 } = opts;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [count, setCount] = useState(0);

  const next = useCallback(() => {
    setCurrentIndex((prev) => {
      if (prev < count - 1) return prev + 1;
      return loop ? 0 : prev;
    });
  }, [count, loop]);

  const prev = useCallback(() => {
    setCurrentIndex((prev) => {
      if (prev > 0) return prev - 1;
      return loop ? count - 1 : prev;
    });
  }, [count, loop]);

  const goTo = useCallback((index) => {
    if (index >= 0 && index < count) {
      setCurrentIndex(index);
    }
  }, [count]);

  useEffect(() => {
    if (!autoplay || count <= 1) return;
    const timer = setInterval(() => {
      next();
    }, interval);
    return () => clearInterval(timer);
  }, [autoplay, count, interval, next]);

  return (
    <CarouselContext.Provider
      value={{
        currentIndex,
        setCurrentIndex,
        count,
        setCount,
        next,
        prev,
        goTo,
        canScrollPrev: loop || currentIndex > 0,
        canScrollNext: loop || currentIndex < count - 1,
      }}
    >
      <div
        className={cn("relative w-full overflow-hidden select-none", className)}
        {...props}
      >
        {children}
      </div>
    </CarouselContext.Provider>
  );
}

export function CarouselContent({ className, children, ...props }) {
  const { currentIndex, setCount } = React.useContext(CarouselContext);
  const itemsCount = React.Children.count(children);

  useEffect(() => {
    setCount(itemsCount);
  }, [itemsCount, setCount]);

  return (
    <div className="overflow-hidden w-full">
      <div
        className={cn(
          "flex transition-transform duration-500 ease-out",
          className
        )}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        {...props}
      >
        {children}
      </div>
    </div>
  );
}

export function CarouselItem({ className, children, ...props }) {
  return (
    <div
      className={cn("min-w-full flex-shrink-0 flex-grow-0", className)}
      {...props}
    >
      {children}
    </div>
  );
}

export function CarouselPrevious({ className, ...props }) {
  const { prev, canScrollPrev } = React.useContext(CarouselContext);
  return (
    <button
      type="button"
      disabled={!canScrollPrev}
      onClick={prev}
      aria-label="Previous slide"
      className={cn(
        "absolute left-4 top-1/2 -translate-y-1/2 z-10 flex h-9 w-9 items-center justify-center rounded-full",
        "bg-background/80 border border-border text-foreground backdrop-blur-sm shadow-md",
        "hover:bg-accent hover:text-accent-foreground transition-all duration-200",
        "disabled:opacity-40 disabled:cursor-not-allowed",
        className
      )}
      {...props}
    >
      <svg
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
      </svg>
    </button>
  );
}

export function CarouselNext({ className, ...props }) {
  const { next, canScrollNext } = React.useContext(CarouselContext);
  return (
    <button
      type="button"
      disabled={!canScrollNext}
      onClick={next}
      aria-label="Next slide"
      className={cn(
        "absolute right-4 top-1/2 -translate-y-1/2 z-10 flex h-9 w-9 items-center justify-center rounded-full",
        "bg-background/80 border border-border text-foreground backdrop-blur-sm shadow-md",
        "hover:bg-accent hover:text-accent-foreground transition-all duration-200",
        "disabled:opacity-40 disabled:cursor-not-allowed",
        className
      )}
      {...props}
    >
      <svg
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
      </svg>
    </button>
  );
}

export function CarouselIndicators({ className, ...props }) {
  const { count, currentIndex, goTo } = React.useContext(CarouselContext);
  if (count <= 1) return null;

  return (
    <div
      className={cn(
        "absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2",
        className
      )}
      {...props}
    >
      {Array.from({ length: count }).map((_, idx) => (
        <button
          key={idx}
          type="button"
          aria-label={`Go to slide ${idx + 1}`}
          onClick={() => goTo(idx)}
          className={cn(
            "h-2 rounded-full transition-all duration-300",
            idx === currentIndex
              ? "w-6 bg-primary"
              : "w-2 bg-muted-foreground/40 hover:bg-muted-foreground/70"
          )}
        />
      ))}
    </div>
  );
}

export default Carousel;
