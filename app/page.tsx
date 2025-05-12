// app/page.tsx

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <Navbar />
      <Hero 
        title="Creative Direction for Bold Brands"
        subtitle="Crafting immersive visual experiences that captivate."
        image="/images/hero1.jpg"
      />
      <Projects />
      <Footer />
    </main>
  );
}
