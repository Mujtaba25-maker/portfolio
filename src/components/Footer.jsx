import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { navLinks, personalInfo } from "../data/portfolioData.js";

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 py-10 light:border-slate-900/10 light:bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-xl font-black text-white light:text-slate-950">{personalInfo.name}</p>
          <p className="mt-2 text-sm font-semibold text-slate-400 light:text-slate-500">MERN Stack Developer</p>
        </div>
        <div className="flex flex-wrap gap-4">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-bold text-slate-400 transition hover:text-cyan-200 light:text-slate-500 light:hover:text-cyan-700">
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <a href={personalInfo.github} className="grid size-10 place-items-center rounded-xl border border-white/10 text-slate-300 light:border-slate-900/10 light:text-slate-600" aria-label="GitHub">
            <FiGithub />
          </a>
          <a href={personalInfo.linkedin} className="grid size-10 place-items-center rounded-xl border border-white/10 text-slate-300 light:border-slate-900/10 light:text-slate-600" aria-label="LinkedIn">
            <FiLinkedin />
          </a>
          <a href={`mailto:${personalInfo.email}`} className="grid size-10 place-items-center rounded-xl border border-white/10 text-slate-300 light:border-slate-900/10 light:text-slate-600" aria-label="Email">
            <FiMail />
          </a>
        </div>
      </div>
      <p className="mx-auto mt-8 max-w-7xl px-5 text-sm font-semibold text-slate-500 sm:px-8">
        Copyright {new Date().getFullYear()} Mujtaba. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
