import { motion, useScroll, useSpring } from "framer-motion";

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 28, mass: 0.3 });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed left-0 top-0 z-[90] h-1 w-full origin-left bg-gradient-to-r from-cyan-300 via-emerald-300 to-violet-300"
    />
  );
}

export default ScrollProgress;
