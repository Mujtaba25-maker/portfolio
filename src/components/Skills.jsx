import { motion } from "framer-motion";
import { skills } from "../data/portfolioData.js";
import SectionHeading from "./SectionHeading.jsx";

function Skills() {
  return (
    <section id="skills" className="section-pad border-y border-white/10 bg-white/[0.03] light:border-slate-900/10 light:bg-white/60">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Skills"
          title="A modern MERN toolkit for production-ready apps."
          text="The stack is organized around real delivery: frontend experience, backend structure, data modeling, and deployment tools."
          center
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {skills.map((group, index) => {
            const Icon = group.icon;
            return (
              <motion.article
                key={group.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: index * 0.08 }}
                className="glass rounded-[2rem] p-6"
              >
                <Icon className="text-cyan-200 light:text-cyan-700" size={30} />
                <h3 className="mt-5 text-xl font-black text-white light:text-slate-950">{group.title}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-2 text-sm font-bold text-slate-300 light:border-slate-900/10 light:bg-slate-100 light:text-slate-700">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
