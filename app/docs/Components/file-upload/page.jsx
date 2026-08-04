"use client";
import React, { useState } from "react";
import { Copy, CopyIcon, Upload, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const FileUploadDocPage = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const codeExample = `import { FileUpload } from "@/components/ui/file-upload";

export default function FileUploadDemo() {
  return (
    <FileUpload
      accept="image/*,.pdf"
      maxFiles={5}
      maxSizeMB={10}
      multiple={true}
      onFilesChange={(files) => console.log("Uploaded files:", files)}
    />
  );
}`;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 text-foreground">File Upload</h1>
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
          Drag-and-drop dropzone uploader with file size/type validation and removal controls.
        </p>
      </div>

      <div className="space-y-8 sm:space-y-12">
        {/* Step 1 */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-semibold flex items-center gap-3 text-foreground">
            <span className="flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-primary text-primary-foreground text-sm font-bold">1</span>
            Installation
          </h2>
          <div className="bg-card border border-border rounded-lg p-4 font-mono text-sm overflow-x-auto text-foreground">
            <code>npm i elementra-ui</code>
          </div>
        </section>

        {/* Step 2 */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-semibold flex items-center gap-3 text-foreground">
            <span className="flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-primary text-primary-foreground text-sm font-bold">2</span>
            Add Component CLI
          </h2>
          <div className="bg-card border border-border rounded-lg p-4 font-mono text-sm overflow-x-auto text-foreground">
            <code>npx elementra-ui add file-upload</code>
          </div>
        </section>

        {/* Step 3: Interactive Sandbox */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-semibold flex items-center gap-3 text-foreground">
            <span className="flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-primary text-primary-foreground text-sm font-bold">3</span>
            Interactive Dropzone Preview
          </h2>

          <div className="bg-card border border-border rounded-xl p-6 sm:p-8 space-y-6">
            <div className="border-2 border-dashed border-border rounded-xl p-8 text-center bg-card hover:bg-muted/40 transition-colors cursor-pointer select-none">
              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary mx-auto mb-3 flex items-center justify-center">
                <Upload className="h-6 w-6" />
              </div>
              <p className="text-sm font-semibold text-foreground">
                Click to upload <span className="font-normal text-muted-foreground">or drag & drop</span>
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                SVG, PNG, JPG, GIF or PDF (max 10MB)
              </p>
            </div>
          </div>
        </section>

        {/* Step 4: Code Usage */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground">Code Usage</h2>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                navigator.clipboard.writeText(codeExample);
                toast.success("Code copied to clipboard!");
              }}
              className="flex items-center gap-2"
            >
              <Copy className="h-4 w-4" />
              Copy Code
            </Button>
          </div>

          <div className="bg-card border border-border rounded-lg p-4 font-mono text-sm overflow-x-auto text-foreground">
            <pre>{codeExample}</pre>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FileUploadDocPage;
