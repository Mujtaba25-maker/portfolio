import { motion } from "framer-motion";

function SectionHeading({ eyebrow, title, text, center = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}
    >
      <p className="text-sm font-black uppercase tracking-normal text-blue-300 light:text-blue-700">{eyebrow}</p>
      <h2 className="mt-4 text-4xl font-black leading-tight text-white sm:text-5xl light:text-slate-950">{title}</h2>
      {text && <p className="mt-5 text-lg leading-8 text-slate-300 light:text-slate-600">{text}</p>}
    </motion.div>
  );
}

export default SectionHeading;
