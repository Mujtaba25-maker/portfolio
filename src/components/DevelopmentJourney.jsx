import { motion } from "framer-motion";
import { developmentJourney } from "../data/portfolioData.js";
import SectionHeading from "./SectionHeading.jsx";

function DevelopmentJourney() {
  return (<section id="journey" className="section-pad scroll-mt-24 border-y border-slate-500/20 bg-slate-900/35 light:border-slate-900/10 light:bg-white/70"><div className="mx-auto max-w-7xl px-5 sm:px-8"><SectionHeading eyebrow="Development Journey" title="Learning progression toward business-ready systems." text="This section shows learning growth separately from employment history, keeping the portfolio clear for recruiters." center /><div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">{developmentJourney.map((item, index) => (<motion.article key={item.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="glass rounded-lg p-6"><span className="grid size-11 place-items-center rounded-xl bg-blue-500 text-sm font-black text-white">{index + 1}</span><h3 className="mt-5 text-xl font-black text-white light:text-slate-950">{item.title}</h3><p className="mt-3 leading-7 text-slate-300 light:text-slate-600">{item.text}</p></motion.article>))}</div></div></section>);
}

export default DevelopmentJourney;