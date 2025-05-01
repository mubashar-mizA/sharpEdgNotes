// app/components/FileList.js
"use client";

import { useState, useEffect } from "react";

export default function FileList() {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchFiles() {
      try {
        const response = await fetch("/api/files");
        const data = await response.json();
        setFiles(data.files);
      } catch (error) {
        console.error("Error:", error);
        alert("Cannot load files");
      } finally {
        setLoading(false);
      }
    }
    fetchFiles();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (!files.length) return <p>No files yet.</p>;

  return (
    <div>
      <h2>Uploaded Files</h2>
      <ul>
        {files.map((file) => (
          <li key={file._id}>
            <a href={file.fileUrl} target="_blank">
              {file.fileName}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}