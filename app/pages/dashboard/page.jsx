import React, { useState } from "react";
import { Menu } from "lucide-react";  // Hamburger icon from lucide-react
import { motion } from "framer-motion"; // For animation

const Dashboard = () => {
    const [notes, setNotes] = useState([]);
    const [title, setTitle] = useState("");
    const [subject, setSubject] = useState("Math");
    const [difficulty, setDifficulty] = useState("Medium");
    const [status, setStatus] = useState("Draft");
    const [file, setFile] = useState(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar toggle state
    const [isNavbarVisible, setIsNavbarVisible] = useState(true); // To control navbar visibility

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = async (e) => {
        e.preventDefault();
        if (!file || !title) return alert("Please fill all fields");

        const formData = new FormData();
        formData.append("name", title);
        formData.append("file", file);

        const url = "http://localhost:3000/api/note"; // Sahi route

        const res = await fetch(url, {
            method: "POST",
            body: formData,
        });

        const data = await res.json();
        alert(data.message);
    };



    return (
        <div className="flex h-screen bg-gray-100">
            {/* Mobile Hamburger Icon */}
            <div
                className="md:hidden p-4 cursor-pointer z-50 absolute top-4 left-4" // Ensure it's always on top of other elements
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
                <Menu size={24} color="white" />
            </div>

            {/* Sidebar */}
            <motion.div
                className={`w-64 bg-gray-800 text-white p-5 ${isSidebarOpen ? 'block' : 'hidden'} md:block`} // Sidebar toggle visibility
                initial={{ x: -300 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-2xl font-bold mt-20">Admin Dashboard</h2>
                <ul>
                    <li className="py-2 hover:bg-gray-700 rounded">Logout</li>
                    <li className="py-2 hover:bg-gray-700 rounded">Upload Notes</li>
                    <li className="py-2 hover:bg-gray-700 rounded">Manage Users</li>
                </ul>
            </motion.div>

            {/* Main Content */}
            <div className="flex-1 p-6 bg-gray-100">

                <h2 className="text-3xl font-bold mt-12 text-center py-5">Upload Notes</h2>

                {/* Upload Form */}
                <form onSubmit={handleUpload} className="bg-white p-10 rounded-lg shadow-md w-full mt-6 max-w-lg mx-auto">
                    <input
                        type="text"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full p-2 mb-2 border rounded-lg"
                        required
                    />
                    <select
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="w-full p-2 mb-2 border rounded-lg"
                    >
                        <option value="Math">Math</option>
                        <option value="Science">Science</option>
                        <option value="English">English</option>
                        <option value="History">History</option>
                    </select>
                    <select
                        value={difficulty}
                        onChange={(e) => setDifficulty(e.target.value)}
                        className="w-full p-2 mb-2 border rounded-lg"
                    >
                        <option value="Easy">Easy</option>
                        <option value="Medium">Medium</option>
                        <option value="Hard">Hard</option>
                    </select>
                    <select
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        className="w-full p-2 mb-2 border rounded-lg"
                    >
                        <option value="Draft">Draft</option>
                        <option value="Published">Published</option>
                    </select>
                    <input
                        type="file"
                        onChange={handleFileChange}
                        className="w-full p-2 mb-2 border rounded-lg"
                        required
                    />
                    <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
                        Upload Notes
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Dashboard;