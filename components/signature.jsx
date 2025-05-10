"use client";
import Signature from "@uiw/react-signature";
import {
  CheckIcon,
  CopyIcon,
  DownloadIcon,
  Eraser,
  RefreshCcwIcon,
  PencilIcon,
  PenIcon,
  CircleIcon,
  PaintbrushIcon,
} from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

// Utility function to combine classNames
const cn = (...classes) => classes.filter(Boolean).join(" ");

// Embedded useCopyToClipboard hook
function useCopyToClipboard({ isCopiedDelay = 2000 } = {}) {
  const [copiedText, setCopiedText] = useState(null);
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (!isCopied) return;

    const timer = setTimeout(() => {
      setIsCopied(false);
    }, isCopiedDelay);

    return () => clearTimeout(timer);
  }, [isCopied, isCopiedDelay]);

  const copy = useCallback(async (text) => {
    if (!navigator?.clipboard) return false;

    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(text);
      setIsCopied(true);
      return true;
    } catch (error) {
      console.error("Copy failed:", error);
      setCopiedText(null);
      return false;
    }
  }, []);

  return [copiedText, copy, isCopied];
}

// Function to prepare SVG for download or copying
function prepareSvgElement(svgElement) {
  if (!svgElement) return null;

  const svgelm = svgElement.cloneNode(true);
  const clientWidth = svgElement.clientWidth || 300;
  const clientHeight = svgElement.clientHeight || 150;

  svgelm.removeAttribute("style");
  svgelm.setAttribute("width", `${clientWidth}px`);
  svgelm.setAttribute("height", `${clientHeight}px`);
  svgelm.setAttribute("viewBox", `0 0 ${clientWidth} ${clientHeight}`);

  return { svgelm, clientWidth, clientHeight };
}

// ValidateButton Component
function ValidateButton({ readonly, onClick }) {
  return (
    <button
      className="inline-grid size-8 place-content-center rounded-md border border-neutral-500/10 bg-neutral-500/10 hover:bg-neutral-500/20"
      onClick={onClick}
      type="button"
      aria-label={readonly ? "Reset" : "Validate"}
    >
      {readonly ? (
        <RefreshCcwIcon className="size-5" />
      ) : (
        <CheckIcon className="size-5" />
      )}
    </button>
  );
}

// DownloadButton Component
function DownloadButton({ svgElement }) {
  const handleDownloadImage = () => {
    if (!svgElement) return;

    const svgData = prepareSvgElement(svgElement);
    if (!svgData) return;

    const { svgelm, clientWidth, clientHeight } = svgData;
    const data = new XMLSerializer().serializeToString(svgelm);

    const canvas = document.createElement("canvas");
    canvas.width = clientWidth;
    canvas.height = clientHeight;

    const ctx = canvas.getContext("2d");
    const img = new Image();

    img.onload = () => {
      ctx?.drawImage(img, 0, 0);
      const a = document.createElement("a");
      a.download = "signature.png";
      a.href = canvas.toDataURL("image/png");
      a.click();
    };

    img.src = `data:image/svg+xml;base64,${window.btoa(
      unescape(encodeURIComponent(data))
    )}`;
  };

  return (
    <button
      className="inline-grid size-8 place-content-center rounded-md border border-neutral-500/10 bg-neutral-500/10 hover:bg-neutral-500/20"
      onClick={handleDownloadImage}
      type="button"
      aria-label="Download"
    >
      <DownloadIcon className="size-5" />
    </button>
  );
}

// CopySvgButton Component
function CopySvgButton({ svgElement }) {
  const [_, copyText, isCopied] = useCopyToClipboard();

  const handleCopySvg = () => {
    if (!svgElement) return;

    const svgData = prepareSvgElement(svgElement);
    if (!svgData) return;

    const { svgelm } = svgData;
    copyText(svgelm.outerHTML);
  };

  return (
    <button
      className="inline-flex items-center gap-1 rounded-md border border-neutral-500/10 bg-neutral-500/10 px-2 py-1 text-sm tracking-tight hover:bg-neutral-500/20"
      onClick={handleCopySvg}
      type="button"
    >
      {isCopied ? (
        <>
          <span>Copied</span>
          <CheckIcon className="size-4" />
        </>
      ) : (
        <>
          <span>Copy SVG</span>
          <CopyIcon className="size-4" />
        </>
      )}
    </button>
  );
}

// ClearButton Component
function ClearButton({ onClick }) {
  return (
    <button
      className="inline-grid size-8 place-content-center rounded-md border border-neutral-500/10 bg-neutral-500/10 hover:bg-neutral-500/20"
      onClick={onClick}
      type="button"
      aria-label="Clear"
    >
      <Eraser className="size-5" />
    </button>
  );
}

// Default Signature Component
export function ReactSignature({ className, ...props }) {
  const [readonly, setReadonly] = useState(false);
  const $svg = useRef(null);

  const handleClear = () => {
    if ($svg.current) {
      $svg.current.clear();
    }
  };

  const handleValidate = () => {
    if (readonly) {
      if ($svg.current) {
        $svg.current.clear();
      }
      setReadonly(false);
    } else {
      setReadonly(true);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <p className="text-sm tracking-tight text-neutral-500">Just sign here</p>
      <Signature
        className={cn(
          "h-28 w-80 rounded-lg border border-neutral-500/20 bg-neutral-500/10",
          readonly
            ? "cursor-not-allowed fill-neutral-500"
            : "fill-neutral-800 dark:fill-neutral-200",
          className
        )}
        options={{
          smoothing: 0,
          streamline: 0.8,
          thinning: 0.7,
          color: "#000000",
        }}
        readonly={readonly}
        {...props}
        ref={$svg}
      />
      <div className="flex justify-end gap-1 text-neutral-700 dark:text-neutral-200">
        <ValidateButton onClick={handleValidate} readonly={readonly} />
        {readonly && (
          <>
            <DownloadButton svgElement={$svg.current?.svg} />
            <CopySvgButton svgElement={$svg.current?.svg} />
          </>
        )}
        {!readonly && <ClearButton onClick={handleClear} />}
      </div>
    </div>
  );
}

// Compact Signature Component
export function CompactSignature({ className, label = "Sign here", ...props }) {
  const [readonly, setReadonly] = useState(false);
  const $svg = useRef(null);

  const handleClear = () => {
    if ($svg.current) {
      $svg.current.clear();
    }
  };

  const handleValidate = () => {
    setReadonly(!readonly);
  };

  const handleDownload = () => {
    if (!$svg.current?.svg) return;

    const { svgelm } = prepareSvgElement($svg.current.svg);
    if (!svgelm) return;

    const a = document.createElement("a");
    a.download = "signature.svg";
    a.href =
      "data:image/svg+xml;charset=utf-8," +
      encodeURIComponent(svgelm.outerHTML);
    a.click();
  };

  return (
    <div className="flex flex-col gap-1">
      {label && (
        <p className="text-xs tracking-tight text-neutral-500">{label}</p>
      )}
      <Signature
        className={cn(
          "h-20 w-64 rounded-md border border-neutral-500/20 bg-neutral-500/10",
          readonly
            ? "cursor-not-allowed fill-neutral-500"
            : "fill-neutral-800 dark:fill-neutral-200",
          className
        )}
        options={{
          smoothing: 0,
          streamline: 0.8,
          thinning: 0.7,
          color: "#000000",
        }}
        readonly={readonly}
        {...props}
        ref={$svg}
      />
      <div className="flex justify-end gap-1 text-neutral-700 dark:text-neutral-200">
        <button
          className="inline-grid size-6 place-content-center rounded-md border border-neutral-500/10 bg-neutral-500/10 hover:bg-neutral-500/20"
          onClick={handleValidate}
          type="button"
          aria-label={readonly ? "Reset" : "Validate"}
        >
          {readonly ? (
            <RefreshCcwIcon className="size-4" />
          ) : (
            <CheckIcon className="size-4" />
          )}
        </button>
        {readonly && (
          <button
            className="inline-grid size-6 place-content-center rounded-md border border-neutral-500/10 bg-neutral-500/10 hover:bg-neutral-500/20"
            onClick={handleDownload}
            type="button"
            aria-label="Download"
          >
            <DownloadIcon className="size-4" />
          </button>
        )}
        {!readonly && (
          <button
            className="inline-grid size-6 place-content-center rounded-md border border-neutral-500/10 bg-neutral-500/10 hover:bg-neutral-500/20"
            onClick={handleClear}
            type="button"
            aria-label="Clear"
          >
            <Eraser className="size-4" />
          </button>
        )}
      </div>
    </div>
  );
}

// Form Signature Component
export function FormSignature({
  className,
  onSignatureChange,
  required = false,
  label = "Signature",
  color = "#000000",
  backgroundColor = "#ffffff",
  ...props
}) {
  const [signed, setSigned] = useState(false);
  const $svg = useRef(null);

  const handleClear = () => {
    if ($svg.current) {
      $svg.current.clear();
      setSigned(false);
      if (onSignatureChange) {
        onSignatureChange(null);
      }
    }
  };

  // Check for changes in signature
  useEffect(() => {
    const signaturePad = $svg.current;
    if (!signaturePad) return;

    // Function to check if signature exists and notify
    const checkSignature = () => {
      const isEmpty = !(
        signaturePad.svg && signaturePad.svg.querySelector("path")
      );

      if (signed !== !isEmpty) {
        setSigned(!isEmpty);

        if (onSignatureChange) {
          if (!isEmpty && signaturePad.svg) {
            const svgData = prepareSvgElement(signaturePad.svg);
            if (svgData) {
              onSignatureChange(svgData.svgelm.outerHTML);
            }
          } else {
            onSignatureChange(null);
          }
        }
      }
    };

    checkSignature();

    const observer = new MutationObserver(checkSignature);

    if (signaturePad.svg) {
      observer.observe(signaturePad.svg, {
        attributes: true,
        childList: true,
        subtree: true,
      });
    }

    return () => observer.disconnect();
  }, [signed, onSignatureChange]);

  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium flex items-center gap-1">
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>
      <div
        className={cn(
          "border rounded-md p-1",
          required && !signed ? "border-red-300" : "border-neutral-300",
          className
        )}
      >
        <Signature
          className="h-28 w-full"
          style={{ backgroundColor }}
          options={{
            smoothing: 0.2,
            streamline: 0.5,
            thinning: 0.5,
            color,
            size: 2,
          }}
          {...props}
          ref={$svg}
        />
      </div>
      <div className="flex justify-between">
        {required && !signed && (
          <p className="text-xs text-red-500">Signature is required</p>
        )}
        {signed && <p className="text-xs text-green-600">Signature captured</p>}
        <button
          className={`text-sm text-blue-600 hover:text-blue-800 ${
            !signed ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={handleClear}
          type="button"
          disabled={!signed}
        >
          {signed ? "Clear signature" : ""}
        </button>
      </div>
    </div>
  );
}
// Styled Signature Component
export function StyledSignature({ className, ...props }) {
  const [readonly, setReadonly] = useState(false);
  const $svg = useRef(null);
  const [penStyle, setPenStyle] = useState({
    type: "default",
    width: 2,
    color: "#000000",
  });

  const handleClear = () => {
    if ($svg.current) {
      $svg.current.clear();
    }
  };

  const handleValidate = () => {
    if (readonly) {
      if ($svg.current) {
        $svg.current.clear();
      }
      setReadonly(false);
    } else {
      setReadonly(true);
    }
  };

  // Pen style options
  const penTypes = [
    {
      id: "default",
      icon: <PenIcon size={16} />,
      thinning: 0.5,
      smoothing: 0.2,
    },
    {
      id: "brush",
      icon: <PaintbrushIcon size={16} />,
      thinning: 0.2,
      smoothing: 0.5,
    },
    {
      id: "pencil",
      icon: <PencilIcon size={16} />,
      thinning: 0.6,
      smoothing: 0.4,
    },
    {
      id: "marker",
      icon: <CircleIcon size={16} />,
      thinning: 0.1,
      smoothing: 0.5,
    },
  ];

  // Pen width options
  const penWidths = [
    { id: 1, label: "S", size: 1 },
    { id: 2, label: "M", size: 2 },
    { id: 3, label: "L", size: 3 },
  ];

  // Get current pen style options
  const getSignatureOptions = () => {
    const selectedType =
      penTypes.find((type) => type.id === penStyle.type) || penTypes[0];
    return {
      thinning: selectedType.thinning,
      smoothing: selectedType.smoothing,
      streamline: 0.5,
      size: penStyle.width,
      color: penStyle.color,
    };
  };

  return (
    <div className="flex flex-col gap-2 border border-neutral-200 p-3 rounded-lg">
      <div className="flex justify-between items-center">
        <p className="text-sm font-medium">Create your signature</p>
        {!readonly && (
          <div className="flex gap-2">
            <ClearButton onClick={handleClear} />
            <ValidateButton onClick={handleValidate} readonly={readonly} />
          </div>
        )}
      </div>

      {!readonly && (
        <div className="flex flex-wrap gap-2 mb-2 p-2 bg-neutral-50 rounded-md">
          <div className="flex items-center gap-1 border-r pr-2">
            {penTypes.map((type) => (
              <button
                key={type.id}
                className={`p-1 rounded-md ${
                  penStyle.type === type.id
                    ? "bg-blue-100 text-blue-700"
                    : "text-neutral-600 hover:bg-neutral-200"
                }`}
                onClick={() => setPenStyle({ ...penStyle, type: type.id })}
                type="button"
                aria-label={`Select ${type.id} pen style`}
              >
                {type.icon}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-1 border-r pr-2">
            {penWidths.map((width) => (
              <button
                key={width.id}
                className={`size-6 flex items-center justify-center rounded-md text-xs font-medium ${
                  penStyle.width === width.size
                    ? "bg-blue-100 text-blue-700"
                    : "text-neutral-600 hover:bg-neutral-200"
                }`}
                onClick={() => setPenStyle({ ...penStyle, width: width.size })}
                type="button"
                aria-label={`Select ${width.label} pen width`}
              >
                {width.label}
              </button>
            ))}
          </div>
        </div>
      )}

      <Signature
        className={cn(
          "h-32 w-full rounded-md border bg-white",
          readonly ? "cursor-not-allowed" : "cursor-crosshair",
          className
        )}
        options={getSignatureOptions()}
        readonly={readonly}
        {...props}
        ref={$svg}
      />

      {readonly && (
        <div className="flex justify-end gap-2 mt-2">
          <button
            className="px-3 py-1 bg-neutral-100 text-neutral-700 rounded-md text-sm hover:bg-neutral-200"
            onClick={() => {
              handleClear();
              setReadonly(false);
            }}
            type="button"
          >
            Edit
          </button>
          <DownloadButton svgElement={$svg.current?.svg} />
          <CopySvgButton svgElement={$svg.current?.svg} />
        </div>
      )}
    </div>
  );
}
