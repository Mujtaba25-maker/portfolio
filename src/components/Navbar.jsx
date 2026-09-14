import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import logo from "../assets/mujtaba-ms-monogram.svg";
import { navLinks } from "../data/portfolioData.js";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [light, setLight] = useState(false);
  const [active, setActive] = useState("#top");
  useEffect(() => { document.documentElement.classList.toggle("light", light); }, [light]);
  useEffect(() => {
    const onKey = (event) => { if (event.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  useEffect(() => {
    const onScroll = () => {
      const current = navLinks.findLast((link) => { const element = document.querySelector(link.href); return element && element.getBoundingClientRect().top <= 120; });
      if (current) setActive(current.href);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-500/20 bg-[#08111f]/85 backdrop-blur-2xl light:border-slate-900/10 light:bg-white/90">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8"><a href="/#top" className="flex shrink-0 items-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-200" aria-label="Mujtaba Sekandari - Home"><img src={logo} alt="Mujtaba Sekandari logo" className="h-7 w-auto sm:h-8 lg:h-10" /></a>
        <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] p-1 lg:flex light:border-slate-900/10 light:bg-slate-950/[0.03]" aria-label="Main navigation">{navLinks.map((link) => (<a key={link.href} href={link.href} aria-current={active === link.href ? "page" : undefined} className={(active === link.href ? "bg-white/10 text-white light:bg-slate-950/10 light:text-slate-950 " : "text-slate-300 hover:bg-white/10 hover:text-white light:text-slate-600 light:hover:bg-slate-950/10 light:hover:text-slate-950 ") + "rounded-full px-4 py-2 text-sm font-bold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-200"}>{link.label}</a>))}</nav>
        <div className="flex items-center gap-2"><button type="button" onClick={() => setLight((value) => !value)} className="grid size-11 place-items-center rounded-xl border border-slate-500/20 bg-white/[0.05] text-slate-200 transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-200 light:border-slate-900/10 light:bg-white light:text-slate-700" aria-label="Toggle theme" title="Toggle theme">{light ? <Moon size={19} /> : <Sun size={19} />}</button><button type="button" onClick={() => setOpen((value) => !value)} className="grid size-11 place-items-center rounded-xl border border-slate-500/20 bg-white/[0.05] text-slate-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-200 lg:hidden light:border-slate-900/10 light:bg-white light:text-slate-700" aria-label="Toggle navigation" aria-expanded={open} aria-controls="mobile-navigation" title="Menu">{open ? <X size={20} /> : <Menu size={20} />}</button></div></div>
      {open && (<nav id="mobile-navigation" className="mx-5 mb-4 grid gap-2 rounded-lg border border-slate-500/20 bg-slate-900 p-3 lg:hidden light:border-slate-900/10 light:bg-white" aria-label="Mobile navigation">{navLinks.map((link) => (<a key={link.href} href={link.href} onClick={() => setOpen(false)} className="rounded-lg px-4 py-3 text-sm font-bold text-slate-300 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-200 light:text-slate-700 light:hover:bg-slate-100">{link.label}</a>))}</nav>)}
    </header>
  );
}

export default Navbar;
