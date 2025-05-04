"use client";
import { useState, useEffect } from "react";
import { UploadButton } from "@uploadthing/react";
import "@uploadthing/react/styles.css";

const UploadNote = () => {
    const [subjectName, setSubjectName] = useState("");
    const [description, setDescription] = useState("");
    const [tags, setTags] = useState("");
    const [isPublic, setIsPublic] = useState(true);
    const [fileUrl, setFileUrl] = useState("");
    const [fileName, setFileName] = useState("");
    const [thumbnailUrl, setThumbnailUrl] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [successMsg, setSuccessMsg] = useState("");

    // Auto-dismiss error/success after 3 seconds
    useEffect(() => {
        if (error || successMsg) {
            const timer = setTimeout(() => {
                setError(null);
                setSuccessMsg("");
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [error, successMsg]);

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setSuccessMsg("");

        if (!subjectName || !fileUrl || !fileName || !thumbnailUrl) {
            setError("Subject name, file, and thumbnail are required.");
            setLoading(false);
            return;
        }

        try {
            const res = await fetch("/api/notes", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    fileUrl,
                    fileName,
                    title: subjectName,
                    description,
                    tags: tags.split(",").map((tag) => tag.trim()),
                    isPublic,
                    thumbnailUrl,
                }),
            });

            const data = await res.json();

            if (!res.ok) throw new Error(data.error || "Failed to save note.");

            setSuccessMsg("Note uploaded successfully!");

            setSubjectName("");
            setDescription("");
            setTags("");
            setFileUrl("");
            setFileName("");
            setThumbnailUrl("");
            setIsPublic(true);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="mt-36 mx-10 px-10 shadow-lg border rounded-md bg-white flex flex-col">
            <h1 className="text-2xl font-bold mb-6 text-gray-500 py-2">Upload File For sharpEdg</h1>

            <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">

                {/* File Details */}
                <div className="flex flex-col gap-2">
                    <h3 className="text-gray-600 font-bold py-2">File Detail</h3>

                    <input
                        type="text"
                        placeholder="Subject Name"
                        value={subjectName}
                        onChange={(e) => setSubjectName(e.target.value)}
                        className="w-full px-4 py-2 border rounded-md"
                        disabled={loading}
                    />

                    <textarea
                        placeholder="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full px-4 py-2 border rounded-md"
                        rows={4}
                        disabled={loading}
                    />

                    <input
                        type="text"
                        placeholder="Tags (comma separated)"
                        value={tags}
                        onChange={(e) => setTags(e.target.value)}
                        className="w-full px-4 py-2 border rounded-md"
                        disabled={loading}
                    />
                </div>

                {/* Uploads */}
                <div className="flex flex-col gap-4 py-4">
                    <h3 className="text-gray-600 font-bold">File Upload</h3>

                    {/* PDF Upload */}
                    <div className="flex flex-col gap-1">
                        <label className="font-medium text-sm text-gray-700">Upload PDF File</label>
                        <UploadButton
                            endpoint="pdfUploader"
                            className="ut-button:bg-blue-600 ut-button:text-white ut-button:hover:bg-blue-700"
                            content={{
                                button({ ready }) {
                                    return ready ? "Choose File" : "Uploading...";
                                }
                            }}
                            onClientUploadComplete={(res) => {
                                setFileUrl(res?.[0]?.url || "");
                                setFileName(res?.[0]?.name || "");
                            }}
                            onUploadError={(error) => {
                                setError("Upload failed: " + error.message);
                            }}
                        />
                        {fileUrl && <p className="text-green-600 text-sm">PDF uploaded: {fileName}</p>}
                    </div>

                    {/* Thumbnail Upload */}
                    <div className="flex flex-col gap-1">
                        <label className="font-medium text-sm text-gray-700">Upload Thumbnail (Required)</label>
                        <UploadButton
                            endpoint="pdfUploader"
                            className="ut-button:bg-blue-600 ut-button:text-white ut-button:hover:bg-blue-700"
                            content={{
                                button({ ready }) {
                                    return ready ? "Choose Thumbnail" : "Uploading...";
                                }
                            }}
                            onClientUploadComplete={(res) => {
                                setThumbnailUrl(res?.[0]?.url || "");
                            }}
                            onUploadError={(error) => {
                                setError("Thumbnail upload failed: " + error.message);
                            }}
                        />
                        {thumbnailUrl && (
                            <p className="text-green-600 text-sm">Thumbnail uploaded successfully!</p>
                        )}
                    </div>
                </div>

                {/* Public Checkbox */}
                <div className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        checked={isPublic}
                        onChange={(e) => setIsPublic(e.target.checked)}
                        disabled={loading}
                    />
                    <label className="text-sm text-gray-700">Make note public</label>
                </div>

                {/* Messages */}
                {error && (
                    <div className="p-3 bg-red-100 text-red-700 rounded-md text-sm transition-opacity">
                        {error}
                    </div>
                )}
                {successMsg && (
                    <div className="p-3 bg-green-100 text-green-700 rounded-md text-sm transition-opacity">
                        {successMsg}
                    </div>
                )}

                {/* Submit */}
                <button
                    type="submit"
                    className={`w-full py-2 rounded-md text-white flex items-center justify-center ${loading
                        ? "bg-blue-400 cursor-not-allowed"
                        : "bg-blue-600 hover:bg-blue-700"
                        } transition-colors`}
                    disabled={loading}
                >
                    {loading ? (
                        <div className="flex items-center gap-2">
                            <svg
                                className="animate-spin h-5 w-5 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                />
                                <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                                />
                            </svg>
                            Saving...
                        </div>
                    ) : (
                        "Save Note"
                    )}
                </button>
            </form>
        </div>
    );
};

export default UploadNote;
