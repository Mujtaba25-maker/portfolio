import About from "../components/About.jsx";
import Contact from "../components/Contact.jsx";
import CurrentlyLearning from "../components/CurrentlyLearning.jsx";
import DevelopmentJourney from "../components/DevelopmentJourney.jsx";
import Education from "../components/Education.jsx";
import Experience from "../components/Experience.jsx";
import Hero from "../components/Hero.jsx";
import Projects from "../components/Projects.jsx";
import Services from "../components/Services.jsx";
import Skills from "../components/Skills.jsx";
import Testimonials from "../components/Testimonials.jsx";

function Home() {
  return (
    <div className="bg-[#08111f] text-white light:bg-[#f5f7fb] light:text-slate-950">
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Education />
      <DevelopmentJourney />
      <Services />
      <Testimonials />
      <CurrentlyLearning />
      <Contact />
    </div>
  );
}

export default Home;