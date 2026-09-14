import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 900);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45 }}
          className="fixed inset-0 z-[100] grid place-items-center bg-[#08111f]"
        >
          <div className="text-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
              className="mx-auto size-16 rounded-xl border border-blue-300/30 border-t-blue-300"
            />
            <p className="mt-5 text-sm font-black uppercase tracking-normal text-blue-200">Loading Portfolio</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default LoadingScreen;
