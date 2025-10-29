"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Transition } from "@headlessui/react";
import { cn } from "@/lib/utils";

// Available color theme options
const colorVariants = {
  purple: {
    gradient: "from-fuchsia-500/25 via-fuchsia-500/5 to-fuchsia-500/0",
    ring: "ring-fuchsia-300 dark:ring-fuchsia-600",
    text: "text-fuchsia-900",
    activeButton: "bg-fuchsia-500 text-white shadow-fuchsia-950/10",
    inactiveButton: "bg-white text-fuchsia-900 hover:bg-fuchsia-100",
    activeDivider: "text-fuchsia-200",
    inactiveDivider: "text-fuchsia-300",
  },
  blue: {
    gradient: "from-blue-500/25 via-blue-500/5 to-blue-500/0",
    ring: "ring-blue-300 dark:ring-blue-600",
    text: "text-blue-900",
    activeButton: "bg-blue-500 text-white shadow-blue-950/10",
    inactiveButton: "bg-white text-blue-900 hover:bg-blue-100",
    activeDivider: "text-blue-200",
    inactiveDivider: "text-blue-300",
  },
  green: {
    gradient: "from-emerald-500/25 via-emerald-500/5 to-emerald-500/0",
    ring: "ring-emerald-300 dark:ring-emerald-600",
    text: "text-emerald-900",
    activeButton: "bg-emerald-500 text-white shadow-emerald-950/10",
    inactiveButton: "bg-white text-emerald-900 hover:bg-emerald-100",
    activeDivider: "text-emerald-200",
    inactiveDivider: "text-emerald-300",
  },
  amber: {
    gradient: "from-amber-500/25 via-amber-500/5 to-amber-500/0",
    ring: "ring-amber-300 dark:ring-amber-600",
    text: "text-amber-900",
    activeButton: "bg-amber-500 text-white shadow-amber-950/10",
    inactiveButton: "bg-white text-amber-900 hover:bg-amber-100",
    activeDivider: "text-amber-200",
    inactiveDivider: "text-amber-300",
  },
  red: {
    gradient: "from-red-500/25 via-red-500/5 to-red-500/0",
    ring: "ring-red-300 dark:ring-red-600",
    text: "text-red-900",
    activeButton: "bg-red-500 text-white shadow-red-950/10",
    inactiveButton: "bg-white text-red-900 hover:bg-red-100",
    activeDivider: "text-red-200",
    inactiveDivider: "text-red-300",
  },
  gray: {
    gradient: "from-gray-500/25 via-gray-500/5 to-gray-500/0",
    ring: "ring-gray-300 dark:ring-gray-600",
    text: "text-gray-900",
    activeButton: "bg-gray-500 text-white shadow-gray-950/10",
    inactiveButton: "bg-white text-gray-900 hover:bg-gray-100",
    activeDivider: "text-gray-200",
    inactiveDivider: "text-gray-300",
  },
  black: {
    gradient: "from-gray-700/25 via-gray-700/5 to-gray-700/0",
    ring: "ring-gray-500 dark:ring-gray-400",
    text: "text-gray-900",
    activeButton: "bg-black text-white shadow-black/10",
    inactiveButton: "bg-white text-gray-900 hover:bg-gray-100",
    activeDivider: "text-gray-300",
    inactiveDivider: "text-gray-400",
  },
};

// Available animation presets
const animationPresets = {
  default: {
    image: {
      enter:
        "transition ease-&lsqb;cubic-bezier(0.68,-0.3,0.32,1)&rsqb; duration-700 order-first",
      enterFrom: "opacity-0 -rotate-[60deg]",
      enterTo: "opacity-100 rotate-0",
      leave: "transition ease-&lsqb;cubic-bezier(0.68,-0.3,0.32,1)&rsqb; duration-700",
      leaveFrom: "opacity-100 rotate-0",
      leaveTo: "opacity-0 rotate-[60deg]",
    },
    text: {
      enter: "transition ease-in-out duration-500 delay-200 order-first",
      enterFrom: "opacity-0 -translate-x-4",
      enterTo: "opacity-100 translate-x-0",
      leave: "transition ease-out duration-300 delay-300 absolute",
      leaveFrom: "opacity-100 translate-x-0",
      leaveTo: "opacity-0 translate-x-4",
    },
  },
  fade: {
    image: {
      enter: "transition ease-in duration-500 order-first",
      enterFrom: "opacity-0",
      enterTo: "opacity-100",
      leave: "transition ease-out duration-500",
      leaveFrom: "opacity-100",
      leaveTo: "opacity-0",
    },
    text: {
      enter: "transition ease-in duration-500 delay-200 order-first",
      enterFrom: "opacity-0",
      enterTo: "opacity-100",
      leave: "transition ease-out duration-300 absolute",
      leaveFrom: "opacity-100",
      leaveTo: "opacity-0",
    },
  },
  slide: {
    image: {
      enter: "transition ease-out duration-700 order-first",
      enterFrom: "opacity-0 translate-y-8",
      enterTo: "opacity-100 translate-y-0",
      leave: "transition ease-in duration-500",
      leaveFrom: "opacity-100 translate-y-0",
      leaveTo: "opacity-0 -translate-y-8",
    },
    text: {
      enter: "transition ease-out duration-500 delay-200 order-first",
      enterFrom: "opacity-0 translate-y-4",
      enterTo: "opacity-100 translate-y-0",
      leave: "transition ease-in duration-300 delay-100 absolute",
      leaveFrom: "opacity-100 translate-y-0",
      leaveTo: "opacity-0 -translate-y-4",
    },
  },
  zoom: {
    image: {
      enter: "transition ease-out duration-700 order-first",
      enterFrom: "opacity-0 scale-75",
      enterTo: "opacity-100 scale-100",
      leave: "transition ease-in duration-500",
      leaveFrom: "opacity-100 scale-100",
      leaveTo: "opacity-0 scale-125",
    },
    text: {
      enter: "transition ease-out duration-500 delay-200 order-first",
      enterFrom: "opacity-0 scale-95",
      enterTo: "opacity-100 scale-100",
      leave: "transition ease-in duration-300 absolute",
      leaveFrom: "opacity-100 scale-100",
      leaveTo: "opacity-0 scale-105",
    },
  },
};

// Size variants
const sizeVariants = {
  sm: {
    containerMaxWidth: "max-w-xl",
    profileSize: "w-[320px] h-[320px]",
    imageSize: { width: 40, height: 40 },
    quoteSize: "text-lg",
    buttonSize: "text-xs px-2 py-1",
  },
  md: {
    containerMaxWidth: "max-w-3xl",
    profileSize: "w-[480px] h-[480px]",
    imageSize: { width: 56, height: 56 },
    quoteSize: "text-2xl",
    buttonSize: "text-xs px-3 py-1.5",
  },
  lg: {
    containerMaxWidth: "max-w-5xl",
    profileSize: "w-[640px] h-[640px]",
    imageSize: { width: 72, height: 72 },
    quoteSize: "text-3xl",
    buttonSize: "text-sm px-4 py-2",
  },
};

// Helper function to check if a string is a valid hex color
const isHexColor = (color) => {
  return /^#([0-9A-F]{3}){1,2}$/i.test(color);
};

// Generate custom color styles from hex color
const generateCustomColorStyles = (hexColor) => {
  // Remove # if present
  const hex = hexColor.replace("#", "");

  // Generate lighter and darker variants
  const lightenHex = (hex, percent) => {
    // Convert hex to RGB
    let r = parseInt(hex.substring(0, 2), 16);
    let g = parseInt(hex.substring(2, 4), 16);
    let b = parseInt(hex.substring(4, 6), 16);

    // Convert to HSL to easily lighten
    let rgbToHsl = (r, g, b) => {
      r /= 255;
      g /= 255;
      b /= 255;
      const max = Math.max(r, g, b);
      const min = Math.min(r, g, b);
      let h,
        s,
        l = (max + min) / 2;

      if (max === min) {
        h = s = 0; // achromatic
      } else {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
          case r:
            h = (g - b) / d + (g < b ? 6 : 0);
            break;
          case g:
            h = (b - r) / d + 2;
            break;
          case b:
            h = (r - g) / d + 4;
            break;
        }
        h /= 6;
      }
      return [h, s, l];
    };

    // Convert HSL back to RGB
    let hslToRgb = (h, s, l) => {
      let r, g, b;
      if (s === 0) {
        r = g = b = l; // achromatic
      } else {
        const hue2rgb = (p, q, t) => {
          if (t < 0) t += 1;
          if (t > 1) t -= 1;
          if (t < 1 / 6) return p + (q - p) * 6 * t;
          if (t < 1 / 2) return q;
          if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
          return p;
        };
        const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        const p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
      }
      return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
    };

    // Convert to HSL, adjust lightness, convert back
    let [h, s, l] = rgbToHsl(r, g, b);
    l = Math.min(1, l + percent / 100);
    [r, g, b] = hslToRgb(h, s, l);

    // Convert back to HEX
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  };

  // Generate darker variant
  const darkenHex = (hex, percent) => {
    // Same conversion process but we decrease lightness
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    let rgbToHsl = (r, g, b) => {
      r /= 255;
      g /= 255;
      b /= 255;
      const max = Math.max(r, g, b);
      const min = Math.min(r, g, b);
      let h,
        s,
        l = (max + min) / 2;

      if (max === min) {
        h = s = 0; // achromatic
      } else {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
          case r:
            h = (g - b) / d + (g < b ? 6 : 0);
            break;
          case g:
            h = (b - r) / d + 2;
            break;
          case b:
            h = (r - g) / d + 4;
            break;
        }
        h /= 6;
      }
      return [h, s, l];
    };

    let hslToRgb = (h, s, l) => {
      let r, g, b;
      if (s === 0) {
        r = g = b = l; // achromatic
      } else {
        const hue2rgb = (p, q, t) => {
          if (t < 0) t += 1;
          if (t > 1) t -= 1;
          if (t < 1 / 6) return p + (q - p) * 6 * t;
          if (t < 1 / 2) return q;
          if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
          return p;
        };
        const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        const p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
      }
      return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
    };

    let [h, s, l] = rgbToHsl(r, g, b);
    l = Math.max(0, l - percent / 100);
    let [r2, g2, b2] = hslToRgb(h, s, l);

    return (
      "#" + ((1 << 24) + (r2 << 16) + (g2 << 8) + b2).toString(16).slice(1)
    );
  };

  // Generate color variations
  const baseColor =
    hex.length === 3
      ? `#${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`
      : `#${hex}`;

  const lighterColor = lightenHex(hex.padEnd(6, "0"), 30);
  const darkerColor = darkenHex(hex.padEnd(6, "0"), 20);
  const evenLighterColor = lightenHex(hex.padEnd(6, "0"), 50);

  return {
    gradient: "", // We'll use inline style for gradient
    ring: "", // We'll use inline style for ring
    text: "", // We'll use inline style for text
    activeButton: "", // We'll use inline style
    inactiveButton: "", // We'll use inline style
    activeDivider: "", // We'll use inline style
    inactiveDivider: "", // We'll use inline style
    // Store actual hex values for inline styles
    customColors: {
      base: baseColor,
      lighter: lighterColor,
      darker: darkerColor,
      evenLighter: evenLighterColor,
    },
  };
};

const FancyTestimonialsSlider = React.forwardRef(
  (
    {
      testimonials,
      autorotateTiming = 7000,
      colorVariant = "purple",
      size = "md",
      animationPreset = "default",
      autorotate = true,
      className,
      ...props
    },
    ref
  ) => {
    const testimonialsRef = useRef(null);
    const [active, setActive] = useState(0);
    const [isAutorotating, setIsAutorotating] = useState(autorotate);

    // Check if colorVariant is a hex color
    const isCustomColor = isHexColor(colorVariant);

    // Get the appropriate variants
    const colors = isCustomColor
      ? generateCustomColorStyles(colorVariant)
      : colorVariants[colorVariant] || colorVariants.purple;

    const animations =
      animationPresets[animationPreset] || animationPresets.default;
    const sizeVariant = sizeVariants[size] || sizeVariants.md;

    useEffect(() => {
      if (!isAutorotating) return;
      const interval = setInterval(() => {
        setActive(
          active + 1 === testimonials.length ? 0 : (active) => active + 1
        );
      }, autorotateTiming);
      return () => clearInterval(interval);
    }, [active, isAutorotating, testimonials.length, autorotateTiming]);

    const heightFix = () => {
      if (testimonialsRef.current && testimonialsRef.current.parentElement)
        testimonialsRef.current.parentElement.style.height = `${testimonialsRef.current.clientHeight}px`;
    };

    useEffect(() => {
      heightFix();
    }, []);

    // Create inline styles for custom colors
    const customGradientStyle = isCustomColor
      ? {
          background: `radial-gradient(circle, ${colors.customColors.base}25 0%, ${colors.customColors.base}05 25%, transparent 70%)`,
        }
      : {};

    const customTextStyle = isCustomColor
      ? {
          color: colors.customColors.darker,
        }
      : {};

    const customActiveButtonStyle = isCustomColor
      ? {
          backgroundColor: colors.customColors.base,
          color: "#FFFFFF",
          boxShadow: `0 1px 3px ${colors.customColors.darker}20`,
        }
      : {};

    const customInactiveButtonStyle = isCustomColor
      ? {
          backgroundColor: "#FFFFFF",
          color: colors.customColors.darker,
          "&:hover": {
            backgroundColor: `${colors.customColors.evenLighter}`,
          },
        }
      : {};

    const customActiveDividerStyle = isCustomColor
      ? {
          color: colors.customColors.lighter,
        }
      : {};

    const customInactiveDividerStyle = isCustomColor
      ? {
          color: colors.customColors.base + "80", // Add transparency
        }
      : {};

    const customRingStyle = isCustomColor
      ? {
          "--tw-ring-color": colors.customColors.base + "40", // Add transparency
        }
      : {};

    return (
      <div
        className={cn(
          `mx-auto w-full ${sizeVariant.containerMaxWidth} text-center`,
          className
        )}
        ref={ref}
        {...props}
      >
        {/* Testimonial image */}
        <div className="relative h-32">
          <div
            className={cn(
              "pointer-events-none absolute left-1/2 top-0",
              sizeVariant.profileSize,
              "-translate-x-1/2 before:absolute before:inset-0 before:-z-10 before:rounded-full",
              !isCustomColor &&
                "before:bg-gradient-to-b before:" + colors.gradient
            )}
            style={
              isCustomColor
                ? {
                    "&::before": customGradientStyle,
                  }
                : {}
            }
          >
            <div
              className="h-32 [mask-image:_linear-gradient(0deg,transparent,theme(colors.white)_20%,theme(colors.white))]"
              style={
                isCustomColor
                  ? {
                      "--before-background": customGradientStyle.background,
                    }
                  : {}
              }
            >
              {testimonials.map((testimonial, index) => (
                <Transition
                  as="div"
                  key={index}
                  show={active === index}
                  className="absolute inset-0 -z-10 h-full"
                  enter={animations.image.enter}
                  enterFrom={animations.image.enterFrom}
                  enterTo={animations.image.enterTo}
                  leave={animations.image.leave}
                  leaveFrom={animations.image.leaveFrom}
                  leaveTo={animations.image.leaveTo}
                  beforeEnter={() => heightFix()}
                >
                  <Image
                    className="relative left-1/2 top-11 -translate-x-1/2 rounded-full"
                    src={testimonial.img}
                    width={sizeVariant.imageSize.width}
                    height={sizeVariant.imageSize.height}
                    alt={testimonial.name}
                  />
                </Transition>
              ))}
            </div>
          </div>
        </div>
        {/* Text */}
        <div className="mb-9 transition-all delay-300 duration-150 ease-in-out">
          <div className="relative flex flex-col" ref={testimonialsRef}>
            {testimonials.map((testimonial, index) => (
              <Transition
                key={index}
                show={active === index}
                enter={animations.text.enter}
                enterFrom={animations.text.enterFrom}
                enterTo={animations.text.enterTo}
                leave={animations.text.leave}
                leaveFrom={animations.text.leaveFrom}
                leaveTo={animations.text.leaveTo}
                beforeEnter={() => heightFix()}
              >
                <div
                  className={cn(
                    `font-bold before:content-['\x201C'] after:content-['\x201D']`,
                    !isCustomColor && colors.text,
                    sizeVariant.quoteSize
                  )}
                  style={isCustomColor ? customTextStyle : {}}
                >
                  {testimonial.quote}
                </div>
              </Transition>
            ))}
          </div>
        </div>
        {/* Buttons */}
        <div className="-m-1.5 flex flex-wrap justify-center">
          {testimonials.map((testimonial, index) => (
            <button
              key={index}
              className={cn(
                "m-1.5 inline-flex justify-center whitespace-nowrap rounded-full shadow-sm transition-colors duration-150",
                "focus-visible:outline-none focus-visible:ring focus-visible:ring-offset-2",
                !isCustomColor && colors.ring,
                sizeVariant.buttonSize,
                !isCustomColor &&
                  (active === index
                    ? colors.activeButton
                    : colors.inactiveButton)
              )}
              style={{
                ...(isCustomColor
                  ? active === index
                    ? customActiveButtonStyle
                    : customInactiveButtonStyle
                  : {}),
                ...(isCustomColor ? customRingStyle : {}),
              }}
              onClick={() => {
                setActive(index);
                setIsAutorotating(false);
              }}
            >
              <span>{testimonial.name}</span>{" "}
              <span
                className={cn(
                  !isCustomColor &&
                    (active === index
                      ? colors.activeDivider
                      : colors.inactiveDivider)
                )}
                style={
                  isCustomColor
                    ? active === index
                      ? customActiveDividerStyle
                      : customInactiveDividerStyle
                    : {}
                }
              >
                -
              </span>{" "}
              <span>{testimonial.role}</span>
            </button>
          ))}
        </div>
      </div>
    );
  }
);

const TestimonialItem = ({ img, quote, name, role }) => {
  return null; // This component is only used for structure
};

FancyTestimonialsSlider.displayName = "FancyTestimonialsSlider";
TestimonialItem.displayName = "TestimonialItem";

export { FancyTestimonialsSlider, TestimonialItem };
