import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const LoadingScreen = () => {
  const [showSlowMessage, setShowSlowMessage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSlowMessage(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex min-h-screen w-full flex-col items-center justify-center bg-slate-50 gap-6"
    >
      <div className="h-16 w-16 rounded-full border-4 border-emerald-200 border-t-emerald-600 animate-spin" />
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-lg font-medium text-slate-600"
      >
        Loading energy data...
      </motion.p>
      <AnimatePresence>
        {showSlowMessage && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center gap-2"
          >
            <p className="text-xs text-slate-400 max-w-xs text-center">
              This might take up to 60 seconds if the server was sleeping (free tier hosting).
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
