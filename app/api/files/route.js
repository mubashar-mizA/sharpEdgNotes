// app/api/files/route.js
import { NextResponse } from "next/server";
import ConnectDB from "@/app/configs/connectDB";
import File from "@/app/models/File";

export async function POST(req) {
  ConnectDB();
  const body = await req.json();

  const {
    fileUrl,
    fileName,
    fileSize,
    fileType,
    tags,
    description,
    thumbnailUrl,
    isPublic,
  } = body;

  try {
    const newFile = await File.create({
      fileUrl,
      fileName,
      fileSize,
      fileType,
      tags,
      description,
      thumbnailUrl,
      isPublic,
      status: "pending",
    });

    return NextResponse.json({ success: true, file: newFile });
  } catch (err) {
    return NextResponse.json(
      { success: false, error: err.message },

      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    ConnectDB(); // Connect to MongoDB
    const files = await File.find({}); // Get all files
    return NextResponse.json({ files });
  } catch (error) {
    console.error("Error fetching files:", error);
    return NextResponse.json({ error: "Cannot fetch files" }, { status: 500 });
  }
}
