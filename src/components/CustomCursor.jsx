import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

function CustomCursor() {
  const reducedMotion = useReducedMotion();
  const [visible, setVisible] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 240, damping: 28 });
  const springY = useSpring(y, { stiffness: 240, damping: 28 });

  useEffect(() => {
    if (reducedMotion) return;
    const onMove = (event) => {
      setVisible(true);
      x.set(event.clientX - 14);
      y.set(event.clientY - 14);
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [x, y, reducedMotion]);

  if (reducedMotion) return null;
  return (
    <motion.div
      style={{ x: springX, y: springY }}
      className={`pointer-events-none fixed z-[95] hidden size-7 rounded-full border border-blue-300/60 bg-blue-300/10 mix-blend-screen backdrop-blur-sm transition-opacity duration-200 lg:block ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    />
  );
}

export default CustomCursor;
