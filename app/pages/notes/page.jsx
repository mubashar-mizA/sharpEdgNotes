// app/page.js
import FileUpload from "@/components/FileUpload";
import FileList from "@/components/FileList";

export default function Home() {
    return (
        <div className="mt-40">
            <h1>Upload PDF</h1>
            <FileUpload />
            <FileList />
        </div>
    );
}