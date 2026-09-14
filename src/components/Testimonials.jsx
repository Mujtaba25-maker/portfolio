import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { professionalValues } from "../data/portfolioData.js";
import SectionHeading from "./SectionHeading.jsx";

function Testimonials() {
  return (
    <section className="section-pad border-y border-slate-500/20 bg-slate-900/35 light:border-slate-900/10 light:bg-white/70">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow="Why Work With Me" title="Professional value without inflated claims." text="A concise view of strengths shown across the portfolio: practical problem solving, maintainable structure, clean interfaces, and business-focused implementation." center />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">{professionalValues.map((item, index) => (<motion.article key={item.name} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="glass rounded-lg p-6"><CheckCircle2 className="text-blue-200 light:text-blue-700" size={32} aria-hidden="true" /><p className="mt-5 leading-8 text-slate-300 light:text-slate-600">{item.text}</p><div className="mt-6 border-t border-white/10 pt-5 light:border-slate-900/10"><h3 className="font-black text-white light:text-slate-950">{item.name}</h3><p className="mt-1 text-sm font-semibold text-slate-400 light:text-slate-500">{item.role}</p></div></motion.article>))}</div>
      </div>
    </section>
  );
}

export default Testimonials;