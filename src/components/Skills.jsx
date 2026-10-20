import { motion } from "framer-motion";
import { skills, analyticsSkills } from "../data/portfolioData.js";
import SectionHeading from "./SectionHeading.jsx";

function Skills() {
  return (
    <section id="skills" className="section-pad scroll-mt-24 border-y border-slate-500/20 bg-slate-900/35 light:border-slate-900/10 light:bg-white/70">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow="Technical Skills" title="A toolkit for building systems and understanding data." text="From responsive interfaces and reliable backends to data preparation, business reporting, and practical analytics." center />
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {skills.map((group, index) => { const Icon = group.icon; return (<motion.article key={group.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ delay: index * 0.08 }} className="glass rounded-lg p-6"><Icon className="text-blue-200 light:text-blue-700" size={30} aria-hidden="true" /><h3 className="mt-5 text-xl font-black text-white light:text-slate-950">{group.title}</h3><div className="mt-5 flex flex-wrap gap-2">{group.items.map((item) => (<span key={item} className="rounded-full border border-slate-500/20 bg-white/[0.06] px-3 py-2 text-sm font-bold text-slate-300 light:border-slate-900/10 light:bg-slate-100 light:text-slate-700">{item}</span>))}</div></motion.article>); })}
        </div>
        <h3 className="mt-14 text-2xl font-black">Data Analytics &amp; Machine Learning</h3>
        <div className="mt-6 grid gap-5 md:grid-cols-2">{analyticsSkills.map((group) => { const Icon = group.icon; return <motion.article key={group.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass skill-card rounded-lg p-6"><Icon size={28} className="text-blue-300 light:text-blue-700" aria-hidden="true" /><h4 className="mt-4 text-xl font-bold">{group.title}</h4>{group.note && <p className="mt-2 text-sm leading-6 text-slate-400 light:text-slate-600">{group.note}</p>}<div className="mt-5 flex flex-wrap gap-2">{group.items.map((item) => <span key={item} className="analytics-tag">{item}</span>)}</div></motion.article>; })}</div>
      </div>
    </section>
  );
}

export default Skills;