"use client";
import { useState } from "react";

const UploadNote = () => {
    const [file, setFile] = useState(null);
    const [subjectName, setSubjectName] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleUpload = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        // Validation
        if (!subjectName || !file) {
            setError("Subject name aur file dono required hain.");
            setLoading(false);
            return;
        }

        const formData = new FormData();
        formData.append("title", subjectName);
        formData.append("pdf", file);

        try {
            const res = await fetch("/api/note", {
                method: "POST",
                body: formData,
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || "Upload failed");
            }

            alert("Note uploaded successfully!");
            setFile(null);
            setSubjectName("");
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="mx-auto mt-36 p-6 shadow-lg border rounded-md w-3/5 bg-white">
            <h1 className="text-2xl font-bold mb-6 text-gray-800">Upload Note</h1>
            <form onSubmit={handleUpload}>
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Subject Name"
                        value={subjectName}
                        onChange={(e) => setSubjectName(e.target.value)}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        disabled={loading}
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="file"
                        onChange={(e) => setFile(e.target.files[0])}
                        className="w-full text-gray-700"
                        accept="application/pdf,image/*"
                        disabled={loading}
                    />
                    <p className="text-sm text-gray-500 mt-1">
                        Accepted formats: PDF, images (max 10MB)
                    </p>
                </div>
                {error && (
                    <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
                        {error}
                    </div>
                )}
                <button
                    type="submit"
                    className={`w-full py-2 rounded-md text-white ${loading ? "bg-blue-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
                        } transition-colors`}
                    disabled={loading}
                >
                    {loading ? "Uploading..." : "Upload"}
                </button>
            </form>
        </div>
    );
};

export default UploadNote;