import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import portrait from "../assets/mujtaba-portrait.png";
import { personalInfo } from "../data/portfolioData.js";

const typingWords = ["React interfaces", "Next.js backends", "PostgreSQL databases", "dashboard products"];
const techIcons = ["HTML", "CSS", "Bootstrap", "React", "Next.js", "PostgreSQL"];

function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    const word = typingWords[wordIndex];
    let index = 0;
    const typing = window.setInterval(() => {
      setDisplayed(word.slice(0, index + 1));
      index += 1;
      if (index === word.length) {
        window.clearInterval(typing);
        window.setTimeout(() => setWordIndex((value) => (value + 1) % typingWords.length), 1100);
      }
    }, 55);

    return () => window.clearInterval(typing);
  }, [wordIndex]);

  return (
    <section id="top" className="relative min-h-screen overflow-hidden px-5 pt-32 sm:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_15%,rgba(34,211,238,0.24),transparent_30rem),radial-gradient(circle_at_78%_20%,rgba(168,85,247,0.18),transparent_26rem),linear-gradient(135deg,#020617,#0f172a_48%,#111827)] light:bg-[radial-gradient(circle_at_20%_15%,rgba(14,165,233,0.18),transparent_30rem),radial-gradient(circle_at_78%_20%,rgba(168,85,247,0.13),transparent_26rem),linear-gradient(135deg,#f8fafc,#eef2ff_48%,#ecfeff)]" />
      <div className="grid-mask absolute inset-0 -z-10 opacity-50" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 pb-20 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-black text-cyan-200 light:border-cyan-700/20 light:bg-cyan-50 light:text-cyan-800">
            <span className="size-2 rounded-full bg-emerald-300 shadow-[0_0_20px_rgba(110,231,183,0.9)]" />
            {personalInfo.title}
          </div>

          <h1 className="mt-7 max-w-4xl text-4xl font-extrabold leading-tight text-white sm:text-6xl lg:text-7xl light:text-slate-950">
            {personalInfo.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg light:text-slate-600">
            Hi, I am <strong className="text-white light:text-slate-950">{personalInfo.name}</strong>. I create{" "}
            <span className="font-black text-cyan-200 light:text-cyan-700">{displayed}</span>
            <span className="animate-pulse">|</span> with polished frontend design, scalable APIs, authentication, and real-world product thinking.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#projects" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-cyan-300 px-5 font-black text-slate-950 shadow-2xl shadow-cyan-950/40 transition hover:-translate-y-1 hover:bg-cyan-200">
              View Projects
              <ArrowDown size={18} />
            </a>
            <a href="#contact" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.06] px-5 font-black text-white transition hover:-translate-y-1 hover:bg-white/10 light:border-slate-900/10 light:bg-white light:text-slate-950">
              <Mail size={18} />
              Contact Me
            </a>
            <a href={personalInfo.resume} download="Mujtaba-Resume.pdf" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.06] px-5 font-black text-white transition hover:-translate-y-1 hover:bg-white/10 light:border-slate-900/10 light:bg-white light:text-slate-950">
              <Download size={18} />
              Download Resume
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3">
            {[
              [FiGithub, personalInfo.github, "GitHub"],
              [FiLinkedin, personalInfo.linkedin, "LinkedIn"],
              [FiMail, `mailto:${personalInfo.email}`, "Email"]
            ].map(([Icon, href, label]) => (
              <a key={label} href={href} aria-label={label} className="grid size-12 place-items-center rounded-2xl border border-white/10 bg-white/[0.05] text-slate-200 transition hover:-translate-y-1 hover:text-cyan-200 light:border-slate-900/10 light:bg-white light:text-slate-700 light:hover:text-cyan-700">
                <Icon size={20} />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }} className="relative">
          {techIcons.map((item, index) => (
            <motion.span
              key={item}
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 3 + index * 0.2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute z-20 hidden rounded-2xl border border-white/10 bg-white/10 px-3 py-2 text-xs font-black text-cyan-100 backdrop-blur-xl light:border-slate-900/10 light:bg-white/80 light:text-cyan-800 lg:block"
              style={{ left: `${(index % 3) * 34}%`, top: `${10 + index * 12}%` }}
            >
              {item}
            </motion.span>
          ))}
          <div className="glass relative overflow-hidden rounded-[2rem] p-3">
            <div className="relative min-h-[560px] overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-white via-slate-100 to-cyan-50">
              <img src={portrait} alt="Mujtaba portrait" className="absolute inset-x-0 bottom-0 h-full w-full object-cover object-top" />
              <div className="absolute bottom-4 left-4 right-4 rounded-3xl border border-white/60 bg-white/75 p-5 text-slate-950 shadow-2xl backdrop-blur-xl">
                <p className="text-sm font-black">Available for full-stack projects</p>
                <p className="mt-1 text-xs font-bold text-slate-600">React, Next.js, Node.js, MongoDB, PostgreSQL</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
