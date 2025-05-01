// app/api/files/route.js
import { NextResponse } from "next/server";
import ConnectDB from "@/configs/connectDB";
import File from "@/models/File";

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