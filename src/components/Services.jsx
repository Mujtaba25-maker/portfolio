import { motion } from "framer-motion";
import { services } from "../data/portfolioData.js";
import SectionHeading from "./SectionHeading.jsx";

function Services() {
  return (
    <section id="services" className="section-pad mx-auto max-w-7xl px-5 sm:px-8">
      <SectionHeading
        eyebrow="Services"
        title="Development services for serious web products."
        text="From UI to API to database, the service list is built around practical MERN application needs."
      />
      <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="glass rounded-[2rem] p-6"
            >
              <div className="grid size-14 place-items-center rounded-2xl bg-cyan-300/10 text-cyan-200 light:bg-cyan-50 light:text-cyan-700">
                <Icon size={28} />
              </div>
              <h3 className="mt-6 text-xl font-black text-white light:text-slate-950">{service.title}</h3>
              <p className="mt-3 leading-7 text-slate-300 light:text-slate-600">{service.description}</p>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}

export default Services;
