import mongoose from "mongoose";

const NoteSchema = new mongoose.Schema({
  title: String,
  pdfUrl: String,
});

export default mongoose.models.Notes || mongoose.model("Note", NoteSchema);
