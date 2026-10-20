import { motion } from "framer-motion";
import { experiences, practicalAnalytics } from "../data/portfolioData.js";
import SectionHeading from "./SectionHeading.jsx";

function Experience() {
  return (
    <section id="experience" className="section-pad scroll-mt-24 border-y border-slate-500/20 bg-slate-900/35 light:border-slate-900/10 light:bg-white/70">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow="Professional Experience" title="Career progression through practical software work." text="One organization, two roles: internship experience that progressed into regular employment." center />
        <div className="mx-auto mt-12 max-w-4xl">
          {experiences.map((experience) => (
            <motion.article key={experience.company} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} className="glass rounded-lg p-6 sm:p-8">
              <div className="flex flex-col gap-2 border-b border-white/10 pb-6 light:border-slate-900/10 sm:flex-row sm:items-end sm:justify-between">
                <div><p className="text-sm font-black uppercase text-blue-200 light:text-blue-700">Company</p><h3 className="mt-2 text-2xl font-black text-white light:text-slate-950">{experience.company}</h3></div>
                <p className="font-bold text-slate-300 light:text-slate-600">{experience.location}</p>
              </div>
              <div className="mt-8 grid gap-5">
                {experience.roles.map((role, index) => (
                  <div key={role.title} className="relative rounded-lg border border-slate-500/20 bg-white/[0.04] p-5 light:border-slate-900/10 light:bg-slate-50">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between"><div><p className="text-sm font-black text-blue-200 light:text-blue-700">{role.period}</p><h4 className="mt-2 text-xl font-black text-white light:text-slate-950">{role.title}</h4></div>{index === 0 && <span className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs font-black text-emerald-200 light:text-emerald-700">Current role</span>}</div>
                    <p className="mt-3 leading-7 text-slate-300 light:text-slate-600">{role.description}</p>
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
          <article className="glass mt-6 rounded-lg p-6 sm:p-8"><p className="analytics-eyebrow">Hands-on project experience</p><h3 className="mt-3 text-2xl font-black">Data preparation, dashboards &amp; reporting</h3><p className="mt-3 leading-7 text-slate-300 light:text-slate-600">Practical analytics work alongside software development, through personal projects and learning.</p><ul className="analytics-features">{practicalAnalytics.map((item) => <li key={item}>{item}</li>)}</ul></article>
        </div>
      </div>
    </section>
  );
}

export default Experience;