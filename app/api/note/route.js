import { NextResponse } from 'next/server';
import cloudinary from "@/configs/cloudinary.js"
import ConnectDB from "@/configs/connectDB.js"
import Note from "@/models/note.js"

export async function POST(request) {
    try {
        // MongoDB connect karo
        ConnectDB();
        console.log('MongoDB connected successfully');

        // FormData se title aur file lo
        const formData = await request.formData();
        const title = formData.get('title');
        const file = formData.get('pdf');

        // Validation
        if (!title || !file) {
            return NextResponse.json({ error: 'Title aur PDF file dono chahiye' }, { status: 400 });
        }

        // File size check karo (max 5MB)
        const fileSize = file.size / 1024 / 1024; // MB mein convert
        if (fileSize > 5) {
            return NextResponse.json({ error: 'File size 5MB se zyada nahi honi chahiye' }, { status: 400 });
        }
        console.log('File size:', fileSize, 'MB');

        // File ko buffer mein convert karo
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);
        console.log('File buffer created successfully');

        // Cloudinary pe upload karo with timeout
        const uploadResult = await new Promise((resolve, reject) => {
            const timeout = setTimeout(() => {
                reject(new Error('Cloudinary upload timeout after 10 seconds'));
            }, 10000); // 10 seconds timeout

            const stream = cloudinary.uploader.upload_stream(
                {
                    resource_type: "raw",  // Use "raw" for PDF
                    folder: "notes",       // optional
                    type: "upload",        // this is default
                    use_filename: true,
                    unique_filename: false,
                },
                (error, result) => {
                    clearTimeout(timeout);
                    if (error) {
                        console.error('Cloudinary upload error:', error);
                        reject(error);
                    } else {
                        console.log('Cloudinary upload successful:', result.secure_url);
                        resolve(result);
                    }
                }
            );
            stream.end(buffer);
        });

        // MongoDB mein save karo
        const note = new Note({
            title,
            pdfUrl: uploadResult.secure_url,
        });
        await note.save();
        console.log('Note saved to MongoDB:', note);

        return NextResponse.json({ message: 'PDF upload aur save ho gaya', url: uploadResult.secure_url });
    } catch (error) {
        console.error('Upload error details:', error.message);
        return NextResponse.json({ error: error.message || 'Kuch galat hua' }, { status: 500 });
    }
}

export async function GET() {
    try {
        ConnectDB()
        const allNotes = await Note.find()
        return NextResponse.json({
            status: 200,
            success: true,
            message: 'All notes fetched successfully!',
            allNotes
        })
    } catch (error) {
        console.log('Err at getting notes from db', error)
        return NextResponse.json({
            status: 500,
            success: false,
            message: 'Internal server error',
            allNotes
        })
    }
}