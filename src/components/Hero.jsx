import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import portrait from "../assets/mujtaba-portrait.png";
import { personalInfo } from "../data/portfolioData.js";

function Hero() {
  return (
    <section id="top" className="relative min-h-screen scroll-mt-24 overflow-hidden px-5 pt-32 sm:px-8">
      <div className="professional-shell absolute inset-0 -z-10" />
      <div className="grid-mask absolute inset-0 -z-10 opacity-35" />
      <div className="mx-auto grid min-h-[680px] max-w-7xl items-center gap-12 pb-20 lg:grid-cols-[1fr_0.9fr]">
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-300/20 bg-blue-300/10 px-4 py-2 text-sm font-black text-blue-100 light:border-blue-700/20 light:bg-blue-50 light:text-blue-800"><span className="size-2 rounded-full bg-emerald-300 shadow-emerald-300/50 shadow-lg" />Open to Full-Stack Development Opportunities</div>
          <p className="mt-6 text-sm font-black uppercase text-blue-200 light:text-blue-700">{personalInfo.title}</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-extrabold leading-tight text-white sm:text-6xl lg:text-6xl light:text-slate-950">{personalInfo.headline}</h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg light:text-slate-700">I am <strong className="text-white light:text-slate-950">{personalInfo.name}</strong>, a Full-Stack Developer working with Laravel, PHP, React, Python, Django, MySQL, and Oracle Database to build secure business web applications.</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a href="#projects" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-blue-500 px-5 font-black text-white shadow-2xl shadow-blue-950/30 transition hover:-translate-y-1 hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-200">View Projects<ArrowDown size={18} /></a>
            <a href={personalInfo.resume} download={personalInfo.resumeFileName} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-slate-500/20 bg-white/[0.06] px-5 font-black text-white transition hover:-translate-y-1 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-200 light:border-slate-900/10 light:bg-white light:text-slate-950"><Download size={18} />Download Resume</a>
            <a href="#contact" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-slate-500/20 bg-white/[0.06] px-5 font-black text-white transition hover:-translate-y-1 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-200 light:border-slate-900/10 light:bg-white light:text-slate-950"><Mail size={18} />Contact Me</a>
          </div>
          <div className="mt-8 flex items-center gap-3">
            {[[FiGithub, personalInfo.github, "GitHub"], [FiLinkedin, personalInfo.linkedin, "LinkedIn"], [FiMail, "mailto:" + personalInfo.email, "Email"]].map(([Icon, href, label]) => (<a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} aria-label={label} className="grid size-12 place-items-center rounded-xl border border-slate-500/20 bg-white/[0.05] text-slate-200 transition hover:-translate-y-1 hover:text-blue-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-200 light:border-slate-900/10 light:bg-white light:text-slate-700 light:hover:text-blue-700"><Icon size={20} /></a>))}
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.95, y: 24 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="relative mx-auto w-full max-w-[520px] lg:mr-0">
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-blue-500/20 via-emerald-400/10 to-transparent blur-2xl" />
          <div className="relative overflow-hidden rounded-[1.5rem] border border-slate-500/20 bg-slate-950/45 shadow-2xl shadow-slate-950/40 light:border-slate-900/10 light:bg-white/70">
            <div className="absolute inset-x-8 top-8 h-48 rounded-full bg-blue-500/15 blur-3xl" />
            <div className="relative mx-auto flex min-h-[440px] items-end justify-center overflow-hidden sm:min-h-[580px]"><img src={portrait} alt="Portrait of Mujtaba Sekandari" className="h-[500px] w-full max-w-none object-cover object-top sm:h-[640px]" /></div>
            <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-slate-950/70 px-6 py-5 backdrop-blur-xl light:border-slate-900/10 light:bg-white/80"><p className="text-lg font-black text-white light:text-slate-950">{personalInfo.name}</p><p className="mt-1 text-sm font-bold text-blue-200 light:text-blue-700">{personalInfo.title}</p></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;