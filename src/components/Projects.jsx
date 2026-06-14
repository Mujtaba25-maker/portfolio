import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useMemo, useState } from "react";
import { FiGithub } from "react-icons/fi";
import { projects } from "../data/portfolioData.js";
import SectionHeading from "./SectionHeading.jsx";

const filters = ["All", "Dashboard", "Frontend"];

function Projects() {
  const [active, setActive] = useState("All");
  const visibleProjects = useMemo(
    () => (active === "All" ? projects : projects.filter((project) => project.category === active)),
    [active]
  );

  return (
    <section id="projects" className="section-pad mx-auto max-w-7xl px-5 sm:px-8">
      <SectionHeading
        eyebrow="Projects"
        title="Realistic full-stack projects with production-style features."
        text="Each project card is designed like a real case study preview, with tech stack, features, and clean CTA buttons."
      />
      <div className="mt-8 flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActive(filter)}
            className={`rounded-2xl px-4 py-2 text-sm font-black transition ${
              active === filter
                ? "bg-cyan-300 text-slate-950"
                : "border border-white/10 bg-white/[0.05] text-slate-300 hover:bg-white/10 light:border-slate-900/10 light:bg-white light:text-slate-700"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {visibleProjects.map((project, index) => {
          const Icon = project.icon;
          return (
            <motion.article
              key={project.title}
              layout
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.06 }}
              whileHover={{ y: -6 }}
              className="glass group overflow-hidden rounded-[2rem]"
            >
              <div className={`relative min-h-56 bg-gradient-to-br ${project.accent} p-6`}>
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,.18)_1px,transparent_1px)] bg-[length:24px_24px] opacity-40" />
                <div className="relative flex h-44 flex-col justify-between rounded-3xl border border-white/30 bg-slate-950/20 p-5 backdrop-blur-sm">
                  <div className="flex items-center justify-between">
                    <Icon size={34} className="text-white" />
                    <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-black text-white">{project.category}</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <span className="h-3 rounded-full bg-white/40" />
                    <span className="h-3 rounded-full bg-white/25" />
                    <span className="h-3 rounded-full bg-white/35" />
                    <span className="col-span-2 h-16 rounded-2xl bg-white/25" />
                    <span className="h-16 rounded-2xl bg-white/35" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-black text-white light:text-slate-950">{project.title}</h3>
                <p className="mt-3 leading-7 text-slate-300 light:text-slate-600">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="rounded-full bg-white/[0.06] px-3 py-1 text-xs font-bold text-slate-300 light:bg-slate-100 light:text-slate-600">
                      {item}
                    </span>
                  ))}
                </div>
                <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                  {project.features.map((feature) => (
                    <li key={feature} className="text-sm font-semibold text-slate-300 light:text-slate-600">
                      <span className="mr-2 text-cyan-300 light:text-cyan-700">-</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a href={project.liveUrl} className="inline-flex items-center gap-2 rounded-2xl bg-cyan-300 px-4 py-3 text-sm font-black text-slate-950">
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a href={project.githubUrl} className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm font-black text-white light:border-slate-900/10 light:bg-white light:text-slate-950">
                    <FiGithub />
                    GitHub
                  </a>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
