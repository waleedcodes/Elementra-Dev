"use client";
import React, { useState, useRef, useCallback } from "react";
import { cn } from "../../../lib/utils";

/**
 * FileUpload — Drag-and-drop dropzone uploader with file previews & validation
 *
 * Props:
 * - onFilesChange: (files: File[]) => void
 * - accept: string (e.g. "image/*,.pdf")
 * - maxFiles: number
 * - maxSizeMB: number
 * - multiple: boolean
 * - className: string
 */
export function FileUpload({
  onFilesChange,
  accept = "*",
  maxFiles = 5,
  maxSizeMB = 10,
  multiple = true,
  className,
  ...props
}) {
  const [files, setFiles] = useState([]);
  const [isDragOver, setIsDragOver] = useState(false);
  const [error, setError] = useState(null);
  const inputRef = useRef(null);

  const handleFiles = useCallback(
    (newFilesList) => {
      setError(null);
      const incoming = Array.from(newFilesList);

      const validFiles = incoming.filter((file) => {
        const sizeMB = file.size / (1024 * 1024);
        if (sizeMB > maxSizeMB) {
          setError(`File "${file.name}" exceeds the maximum size limit of ${maxSizeMB}MB.`);
          return false;
        }
        return true;
      });

      setFiles((prev) => {
        let updated = multiple ? [...prev, ...validFiles] : validFiles;
        if (updated.length > maxFiles) {
          updated = updated.slice(0, maxFiles);
          setError(`Maximum limit of ${maxFiles} files reached.`);
        }
        onFilesChange?.(updated);
        return updated;
      });
    },
    [maxFiles, maxSizeMB, multiple, onFilesChange]
  );

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    if (e.dataTransfer.files?.length) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const removeFile = (index) => {
    setFiles((prev) => {
      const updated = prev.filter((_, i) => i !== index);
      onFilesChange?.(updated);
      return updated;
    });
  };

  return (
    <div className={cn("w-full space-y-4", className)} {...props}>
      {/* Dropzone Area */}
      <div
        onClick={() => inputRef.current?.click()}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className={cn(
          "relative flex flex-col items-center justify-center p-8 rounded-xl border-2 border-dashed transition-all duration-200 cursor-pointer select-none",
          isDragOver
            ? "border-primary bg-primary/10 scale-[1.01]"
            : "border-border bg-card hover:bg-muted/50 hover:border-primary/50"
        )}
      >
        <input
          ref={inputRef}
          type="file"
          accept={accept}
          multiple={multiple}
          onChange={(e) => e.target.files?.length && handleFiles(e.target.files)}
          className="hidden"
        />
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary mb-3">
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
            />
          </svg>
        </div>
        <p className="text-sm font-semibold text-foreground">
          Click to upload <span className="font-normal text-muted-foreground">or drag and drop</span>
        </p>
        <p className="text-xs text-muted-foreground mt-1">
          Max size: {maxSizeMB}MB • Up to {maxFiles} file{maxFiles > 1 ? "s" : ""}
        </p>
      </div>

      {/* Error Message */}
      {error && (
        <p className="text-xs font-medium text-destructive">{error}</p>
      )}

      {/* File List Preview */}
      {files.length > 0 && (
        <div className="space-y-2">
          {files.map((file, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between p-3 rounded-lg bg-card border border-border text-sm"
            >
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="h-8 w-8 rounded bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 text-xs font-bold uppercase">
                  {file.name.split(".").pop()}
                </div>
                <div className="truncate">
                  <p className="font-medium text-foreground truncate">{file.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {(file.size / 1024).toFixed(1)} KB
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => removeFile(idx)}
                aria-label={`Remove ${file.name}`}
                className="h-7 w-7 flex items-center justify-center rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors flex-shrink-0"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FileUpload;
