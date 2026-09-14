import { motion } from "framer-motion";
import { learning } from "../data/portfolioData.js";
import SectionHeading from "./SectionHeading.jsx";

function CurrentlyLearning() {
  return (<section id="learning" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-16 sm:px-8 sm:py-20"><SectionHeading eyebrow="Currently Learning" title="Secondary learning areas that support stronger software work." text="AI, machine learning, LLM concepts, data analysis, and deployment are presented as current learning, not the main professional identity." /><div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">{learning.map((item, index) => { const Icon = item.icon; return (<motion.article key={item.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="rounded-lg border border-slate-500/20 bg-white/[0.04] p-5 light:border-slate-900/10 light:bg-white"><Icon className="text-blue-200 light:text-blue-700" size={26} aria-hidden="true" /><h3 className="mt-4 text-lg font-black text-white light:text-slate-950">{item.title}</h3><p className="mt-2 text-sm font-semibold leading-6 text-slate-300 light:text-slate-600">{item.description}</p></motion.article>); })}</div></section>);
}

export default CurrentlyLearning;