"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

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

  if (loading) return <p className="text-gray-500 text-center">Loading...</p>;
  if (!files.length) return <p className="text-center text-gray-500">No files yet.</p>;

  return (
    <ul className="space-y-4">
      {files.map((file, index) => (
        <motion.li
          key={file._id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.4 }}
          className="bg-white p-4 rounded-lg shadow hover:shadow-md transition"
        >
          <a
            href={file.fileUrl}
            target="_blank"
            className="text-blue-600 hover:underline"
          >
            {file.fileName}
          </a>
        </motion.li>
      ))}
    </ul>
  );
}
