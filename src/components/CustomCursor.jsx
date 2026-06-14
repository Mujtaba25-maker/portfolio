import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 240, damping: 28 });
  const springY = useSpring(y, { stiffness: 240, damping: 28 });

  useEffect(() => {
    const onMove = (event) => {
      setVisible(true);
      x.set(event.clientX - 14);
      y.set(event.clientY - 14);
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [x, y]);

  return (
    <motion.div
      style={{ x: springX, y: springY }}
      className={`pointer-events-none fixed z-[95] hidden size-7 rounded-full border border-cyan-300/60 bg-cyan-300/10 mix-blend-screen backdrop-blur-sm transition-opacity duration-200 lg:block ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    />
  );
}

export default CustomCursor;
