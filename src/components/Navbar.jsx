import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navLinks, personalInfo } from "../data/portfolioData.js";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [light, setLight] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("light", light);
  }, [light]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-2xl light:border-slate-900/10 light:bg-white/80">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="/#top" className="flex items-center gap-3" aria-label="Mujtaba portfolio home">
          <span className="grid size-11 place-items-center rounded-2xl bg-cyan-300 font-black text-slate-950">M</span>
          <span>
            <span className="block text-sm font-black text-white light:text-slate-950">{personalInfo.name}</span>
            <span className="block text-xs font-bold text-slate-400 light:text-slate-500">{personalInfo.title}</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] p-1 lg:flex light:border-slate-900/10 light:bg-slate-950/[0.03]">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="rounded-full px-4 py-2 text-sm font-bold text-slate-300 transition hover:bg-white/10 hover:text-white light:text-slate-600 light:hover:bg-slate-950/10 light:hover:text-slate-950">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setLight((value) => !value)}
            className="grid size-11 place-items-center rounded-2xl border border-white/10 bg-white/[0.05] text-slate-200 transition hover:bg-white/10 light:border-slate-900/10 light:bg-white light:text-slate-700"
            aria-label="Toggle theme"
            title="Toggle theme"
          >
            {light ? <Moon size={19} /> : <Sun size={19} />}
          </button>
          <button
            onClick={() => setOpen((value) => !value)}
            className="grid size-11 place-items-center rounded-2xl border border-white/10 bg-white/[0.05] text-slate-200 lg:hidden light:border-slate-900/10 light:bg-white light:text-slate-700"
            aria-label="Toggle navigation"
            title="Menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="mx-5 mb-4 grid gap-2 rounded-3xl border border-white/10 bg-slate-900 p-3 lg:hidden light:border-slate-900/10 light:bg-white">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="rounded-2xl px-4 py-3 text-sm font-bold text-slate-300 hover:bg-white/10 light:text-slate-700 light:hover:bg-slate-100">
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

export default Navbar;
