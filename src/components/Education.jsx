import { motion } from "framer-motion";
import { Award, GraduationCap } from "lucide-react";
import { education, analyticsTraining } from "../data/portfolioData.js";
import SectionHeading from "./SectionHeading.jsx";

function Education() {
  return (<section id="education" className="section-pad mx-auto max-w-7xl scroll-mt-24 px-5 sm:px-8"><SectionHeading eyebrow="Education and Certifications" title="Computer Science studies with a database-focused direction." text="Only verified education and certification details are shown here, without invented university names, GPA, or graduation dates." /><div className="mt-12 grid gap-6 lg:grid-cols-2"><EducationColumn title="Education" icon={GraduationCap} items={education.studies} /><EducationColumn title="Certifications" icon={Award} items={education.certifications} /></div><div className="mt-6"><EducationColumn title="Training & Practical Learning" icon={GraduationCap} items={[analyticsTraining]} /></div></section>);
}

function EducationColumn({ title, icon: Icon, items }) {
  return (<motion.article initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass rounded-lg p-6 sm:p-8"><div className="flex items-center gap-3"><span className="grid size-12 place-items-center rounded-xl bg-blue-400/10 text-blue-200 light:bg-blue-50 light:text-blue-700"><Icon size={24} aria-hidden="true" /></span><h3 className="text-2xl font-black text-white light:text-slate-950">{title}</h3></div><div className="mt-6 grid gap-4">{items.map((item) => (<div key={item.title} className="rounded-lg border border-slate-500/20 bg-white/[0.04] p-5 light:border-slate-900/10 light:bg-slate-50"><h4 className="font-black text-white light:text-slate-950">{item.title}</h4>{item.details.length > 0 && <ul className="mt-3 grid gap-2">{item.details.map((detail) => (<li key={detail} className="text-sm font-semibold text-slate-300 light:text-slate-600">{detail}</li>))}</ul>}</div>))}</div></motion.article>);
}

export default Education;