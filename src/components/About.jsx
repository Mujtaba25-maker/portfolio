import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import SectionHeading from "./SectionHeading.jsx";
import { stats } from "../data/portfolioData.js";

function About() {
  return (
    <section id="about" className="section-pad mx-auto max-w-7xl scroll-mt-24 px-5 sm:px-8">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <SectionHeading eyebrow="About me" title="I build practical, database-driven web applications." text="I am a Full-Stack Developer focused on Laravel, PHP, React, Python, Django, MySQL, and Oracle Database. I enjoy transforming manual business processes into structured digital systems through clean interfaces, reliable backend architecture, and well-designed databases." />
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass rounded-lg p-6 sm:p-8">
          <p className="text-lg leading-8 text-slate-200 light:text-slate-700">My development style is practical and business-focused. I build interfaces that users can understand quickly, backend logic that stays organized as features grow, and relational database structures that support real application workflows.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {stats.map((stat) => (<article key={stat.label} className="rounded-lg border border-slate-500/20 bg-white/[0.05] p-5 light:border-slate-900/10 light:bg-slate-50"><CheckCircle2 className="text-blue-200 light:text-blue-700" size={24} aria-hidden="true" /><h3 className="mt-4 text-lg font-black text-white light:text-slate-950">{stat.label}</h3><p className="mt-2 text-sm font-semibold leading-6 text-slate-300 light:text-slate-600">{stat.description}</p></article>))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;