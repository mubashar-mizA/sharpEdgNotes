// models/File.js
import mongoose from "mongoose";

const fileSchema = new mongoose.Schema({
  fileUrl: { type: String, required: true },
  fileName: { type: String, required: true },
  uploadedAt: { type: Date, default: Date.now },

  // New fields
  status: {
    type: String,
    enum: ["pending", "published"],
    default: "pending",
  },
  uploadedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  tags: {
    type: [String],
    default: [],
  },
  description: {
    type: String,
    maxlength: 1000,
  },
  thumbnailUrl: {
    type: String, // optional file photo or thumbnail
  },
  isPublic: {
    type: Boolean,
    default: true,
  },
});

export default mongoose.models.File || mongoose.model("File", fileSchema);
