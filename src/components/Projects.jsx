import { motion } from "framer-motion";
import { ExternalLink, FileText } from "lucide-react";
import { useMemo, useState } from "react";
import { FiGithub } from "react-icons/fi";
import { Link } from "react-router-dom";
import { projects } from "../data/portfolioData.js";
import SectionHeading from "./SectionHeading.jsx";

const filters = ["All", ...Array.from(new Set(projects.map((project) => project.category)))];

function Projects() {
  const [active, setActive] = useState("All");
  const visibleProjects = useMemo(() => (active === "All" ? projects : projects.filter((project) => project.category === active)), [active]);
  return (
    <section id="projects" className="section-pad mx-auto max-w-7xl scroll-mt-24 px-5 sm:px-8">
      <SectionHeading eyebrow="Featured Projects" title="Business systems, dashboards, and focused frontend work." text="Projects are written for recruiters and clients: the problem, contribution, key functionality, stack, and only real available links." />
      <div className="mt-8 flex flex-wrap gap-2" role="tablist" aria-label="Project filters">{filters.map((filter) => (<button key={filter} type="button" onClick={() => setActive(filter)} className={(active === filter ? "bg-blue-500 text-white " : "border border-slate-500/20 bg-white/[0.05] text-slate-300 hover:bg-white/10 light:border-slate-900/10 light:bg-white light:text-slate-700 ") + "rounded-xl px-4 py-2 text-sm font-black transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-200"} aria-selected={active === filter}>{filter}</button>))}</div>
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {visibleProjects.map((project, index) => {
          const Icon = project.icon;
          const hasCaseStudy = Boolean(project.caseStudy);
          return (
            <motion.article key={project.title} layout initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: index * 0.04 }} className={"glass group flex h-full flex-col overflow-hidden rounded-lg " + (index === 0 && active === "All" ? "border-blue-300/45 lg:col-span-2" : "")}> 
              <div className={"relative min-h-52 bg-gradient-to-br p-6 " + project.accent}>
                <div className="relative flex min-h-40 flex-col justify-between rounded-lg border border-white/30 bg-slate-950/25 p-5 shadow-2xl shadow-slate-950/20 backdrop-blur-sm transition duration-300 group-hover:-translate-y-1">
                  <div className="flex items-center justify-between gap-4"><Icon size={34} className="shrink-0 text-white" aria-hidden="true" /><span className="rounded-full bg-white/20 px-3 py-1 text-xs font-black text-white">{project.category}</span></div>
                  <div><p className="text-sm font-black uppercase text-white/80">{project.status || "Selected work"}</p><p className="mt-2 max-w-2xl text-xl font-black leading-7 text-white">{project.problem}</p></div>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex flex-wrap items-center gap-3"><h3 className="text-2xl font-black text-white light:text-slate-950">{project.title}</h3>{index === 0 && active === "All" && <span className="rounded-full border border-blue-300/30 bg-blue-300/10 px-3 py-1 text-xs font-black text-blue-100 light:text-blue-700">Featured</span>}</div><p className="mt-3 leading-7 text-slate-200 light:text-slate-700">{project.description}</p>
                <div className="mt-5 rounded-lg border border-slate-500/20 bg-white/[0.04] p-4 light:border-slate-900/10 light:bg-slate-50"><p className="text-xs font-black uppercase text-emerald-200 light:text-emerald-700">My contribution</p><p className="mt-2 text-sm font-semibold leading-6 text-slate-300 light:text-slate-600">{project.built}</p></div>
                <div className="mt-5 flex flex-wrap gap-2">{project.stack.map((item) => (<span key={item} className="rounded-full bg-white/[0.06] px-3 py-1 text-xs font-bold text-slate-300 light:bg-slate-100 light:text-slate-600">{item}</span>))}</div>
                <ul className="mt-5 grid gap-2 sm:grid-cols-2">{project.features.map((feature) => (<li key={feature} className="text-sm font-semibold text-slate-300 light:text-slate-600"><span className="mr-2 text-blue-300 light:text-blue-700">-</span>{feature}</li>))}</ul>
                <div className="mt-auto flex flex-wrap gap-3 pt-6">
                  {hasCaseStudy && <Link to={"/projects/" + project.slug} className="inline-flex items-center gap-2 rounded-xl bg-blue-500 px-4 py-3 text-sm font-black text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-200"><FileText size={16} />Case Study</Link>}
                  {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-slate-500/20 bg-white/[0.06] px-4 py-3 text-sm font-black text-white light:border-slate-900/10 light:bg-white light:text-slate-950"><ExternalLink size={16} />Live Demo</a>}
                  {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-slate-500/20 bg-white/[0.06] px-4 py-3 text-sm font-black text-white light:border-slate-900/10 light:bg-white light:text-slate-950"><FiGithub />GitHub</a>}
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