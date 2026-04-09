import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Stack from "@/components/sections/Stack";
import Projects from "@/components/sections/Projects";
import AILab from "@/components/sections/AILab";
import Experience from "@/components/sections/Experience";
import Arcode from "@/components/sections/Arcode";
import Certifications from "@/components/sections/Certifications";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Stack />
        <Projects />
        <AILab />
        <Experience />
        <Arcode />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
