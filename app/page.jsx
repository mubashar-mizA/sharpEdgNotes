import Benefits from "./components/Benefits";
import FeaturedSubjects from "./components/FeaturedSubjects";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import PopularNotes from "./components/PopularNotes";
export default function Home() {
  return (
    <div className="">
      <Hero />
      <Benefits />
      <PopularNotes />
      <FeaturedSubjects />
      <Footer />
    </div>
  );
}
