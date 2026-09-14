import { motion } from "framer-motion";
import { services } from "../data/portfolioData.js";
import SectionHeading from "./SectionHeading.jsx";

function Services() {
  return (
    <section id="services" className="section-pad mx-auto max-w-7xl scroll-mt-24 px-5 sm:px-8">
      <SectionHeading eyebrow="Services" title="Focused development services for practical web systems." text="Freelance services are centered on the same strengths as the portfolio: Laravel, React, Django, REST APIs, dashboards, and relational database design." />
      <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">{services.map((service, index) => { const Icon = service.icon; return (<motion.article key={service.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ delay: index * 0.05 }} className="glass rounded-lg p-6"><div className="grid size-14 place-items-center rounded-xl bg-blue-400/10 text-blue-200 light:bg-blue-50 light:text-blue-700"><Icon size={28} aria-hidden="true" /></div><h3 className="mt-6 text-xl font-black text-white light:text-slate-950">{service.title}</h3><p className="mt-3 leading-7 text-slate-300 light:text-slate-600">{service.description}</p></motion.article>); })}</div>
    </section>
  );
}

export default Services;