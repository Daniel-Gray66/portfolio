import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import StatusBadge from "@/components/StatusBadge";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Contact from "@/components/Contact";
import WalkingCats from "@/components/WalkingCats";

export default function Home() {
  return (
    <>
      <WalkingCats />
      <Nav />
      <main style={{ maxWidth: "780px", margin: "0 auto", padding: "0 1.5rem" }}>
        <Hero />
        <StatusBadge />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </main>
    </>
  );
}
