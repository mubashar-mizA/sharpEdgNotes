import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import PopularNotes from "@/components/PopularNotes";
import FeaturedSubjects from "@/components/FeaturedSubjects";
import FileUpload from "@/components/FileUpload";
export default function Home() {
  return (
    <div className="">
      <Hero />
      <main className="p-6">
        <h1 className="text-xl font-bold mb-4">Upload File</h1>
        <FileUpload />
      </main>
      <Benefits />
      <PopularNotes />
      <FeaturedSubjects />
    </div>
  );
}
