import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { testimonials } from "../data/portfolioData.js";
import SectionHeading from "./SectionHeading.jsx";

function Testimonials() {
  return (
    <section className="section-pad border-y border-white/10 bg-white/[0.03] light:border-slate-900/10 light:bg-white/60">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="What clients and collaborators could say."
          text="These placeholders are written realistically so you can replace them later with real feedback."
          center
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.article
              key={item.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="glass rounded-[2rem] p-6"
            >
              <Quote className="text-cyan-200 light:text-cyan-700" size={32} />
              <p className="mt-5 leading-8 text-slate-300 light:text-slate-600">"{item.text}"</p>
              <div className="mt-6 border-t border-white/10 pt-5 light:border-slate-900/10">
                <p className="font-black text-white light:text-slate-950">{item.name}</p>
                <p className="mt-1 text-sm font-semibold text-slate-400 light:text-slate-500">{item.role}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
