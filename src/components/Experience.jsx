import { motion } from "framer-motion";
import { experiences } from "../data/portfolioData.js";
import SectionHeading from "./SectionHeading.jsx";

function Experience() {
  return (
    <section className="section-pad border-y border-white/10 bg-white/[0.03] light:border-slate-900/10 light:bg-white/60">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Experience"
          title="A practical journey through full-stack development."
          text="The timeline focuses on hands-on MERN development, freelance-style delivery, and building realistic full-stack products."
          center
        />
        <div className="relative mx-auto mt-12 max-w-4xl">
          <div className="absolute left-5 top-0 h-full w-px bg-white/10 light:bg-slate-900/10 sm:left-1/2" />
          {experiences.map((item, index) => (
            <motion.article
              key={item.role}
              initial={{ opacity: 0, x: index % 2 === 0 ? -24 : 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              className={`relative mb-8 pl-14 sm:w-1/2 sm:pl-0 ${index % 2 === 0 ? "sm:pr-10" : "sm:ml-auto sm:pl-10"}`}
            >
              <span className="absolute left-0 top-4 grid size-10 place-items-center rounded-2xl bg-cyan-300 text-sm font-black text-slate-950 sm:left-auto sm:right-[-20px]">
                {index + 1}
              </span>
              {index % 2 !== 0 && <span className="absolute top-4 hidden size-10 rounded-2xl bg-cyan-300 sm:left-[-20px] sm:block" />}
              <div className="glass rounded-3xl p-6">
                <p className="text-sm font-black text-cyan-200 light:text-cyan-700">{item.period}</p>
                <h3 className="mt-2 text-xl font-black text-white light:text-slate-950">{item.role}</h3>
                <p className="mt-3 leading-7 text-slate-300 light:text-slate-600">{item.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
