'use client';

import { UploadButton } from "@uploadthing/react";

export default function FileUpload() {
  return (
    <UploadButton
      endpoint="pdfUploader" // Matches the key in ourFileRouter
      onClientUploadComplete={(res) => {
        console.log("✅ Upload complete!", res);
        alert("Upload complete!");
      }}
      onUploadError={(error) => {
        console.error("❌ Upload error:", error);
        alert(`Upload error: ${error.message}`);
      }}
    />
  );
}