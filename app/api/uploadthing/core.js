// app/api/uploadthing/core.js
import { createUploadthing } from "uploadthing/next";
import ConnectDB from "@/configs/connectDB";
import File from "@/models/File";

const f = createUploadthing();

export const ourFileRouter = {
  pdfUploader: f({
    "application/pdf": {
      maxFileSize: "4MB",
      maxFileCount: 1,
    },
  }).onUploadComplete(async ({ file }) => {
    try {

      console.log("Upload complete, file:", file); // Debug

      await ConnectDB(); // Add await

      const newFile = new File({

        fileUrl: file.ufsUrl, // Use ufsUrl
        fileName: file.name,
      });

      await newFile.save();
      
      console.log("Saved to MongoDB:", file.ufsUrl);
    } catch (error) {
      console.error("Error saving file:", error);
      throw new Error("Failed to save file to MongoDB");
    }
  }),
};
