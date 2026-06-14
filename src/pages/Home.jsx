import About from "../components/About.jsx";
import Contact from "../components/Contact.jsx";
import Experience from "../components/Experience.jsx";
import Hero from "../components/Hero.jsx";
import Projects from "../components/Projects.jsx";
import Services from "../components/Services.jsx";
import Skills from "../components/Skills.jsx";
import Testimonials from "../components/Testimonials.jsx";

function Home() {
  return (
    <div className="bg-slate-950 text-white light:bg-slate-50 light:text-slate-950">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Services />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default Home;
