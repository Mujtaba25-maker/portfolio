import { motion } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter.jsx";
import SectionHeading from "./SectionHeading.jsx";
import { stats } from "../data/portfolioData.js";

function About() {
  return (
    <section id="about" className="section-pad mx-auto max-w-7xl px-5 sm:px-8">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <SectionHeading
          eyebrow="About me"
          title="I turn real-world problems into clean full-stack products."
          text="I focus on clean frontend experiences with HTML, CSS, Bootstrap, React, and Tailwind, plus scalable APIs with Node.js, Express, Next.js, MongoDB, and PostgreSQL."
        />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-[2rem] p-6 sm:p-8"
        >
          <p className="text-lg leading-8 text-slate-300 light:text-slate-600">
            My development style is practical and product-focused. I build interfaces that users can understand quickly, APIs that stay organized as features grow, and database structures with MongoDB or PostgreSQL that support real application workflows.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-3xl border border-white/10 bg-white/[0.05] p-5 light:border-slate-900/10 light:bg-slate-50">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                <p className="mt-2 text-sm font-bold text-slate-400 light:text-slate-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
