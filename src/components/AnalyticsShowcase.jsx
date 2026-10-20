import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import ProjectImage from "./ProjectImage.jsx";

export default function AnalyticsShowcase({ projects }) {
  return (
    <div id="analytics" className="mt-20 scroll-mt-28">
      <div className="analytics-heading">
        <div><p className="analytics-eyebrow">From data to understanding</p><h3>Data Analytics &amp; Machine Learning</h3></div>
        <p>Exploring data, identifying patterns, and communicating insights through interactive dashboards, statistical analysis, and machine learning.</p>
      </div>
      <div className="mt-10 grid gap-10">
        {projects.map((project) => (
          <motion.article key={project.slug} layout="position" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .1 }} className={"glass analytics-card overflow-hidden rounded-lg" + (project.models ? " analytics-study" : "")}>
            <div className="analytics-card-copy">
              <p className="analytics-eyebrow">{project.category} <span aria-hidden="true"> / </span> {project.discipline === "Machine Learning" ? "Python & Colab" : "Microsoft Power BI"}</p>
              <h4>{project.title}</h4>
              <p className="analytics-description">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">{project.stack.map((item) => <span className="analytics-tag" key={item}>{item}</span>)}</div>
              <ul className="analytics-features">{project.features.slice(0, 4).map((feature) => <li key={feature}>{feature}</li>)}</ul>
              <Link className="analytics-link" to={"/projects/" + project.slug}>View Case Study<ArrowUpRight size={18} aria-hidden="true" /></Link>
            </div>
            <ProjectImage project={project} />
            <ol className="analytics-workflow" aria-label="Project workflow">{project.workflow.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, "0")}</span>{step}</li>)}</ol>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
