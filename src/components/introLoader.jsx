import { motion } from "framer-motion";

export default function IntroLoader() {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-green-400 via-green-300 to-zinc-50"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Brand */}
      <motion.h1
        className="text-4xl sm:text-5xl font-extrabold text-black tracking-wide"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Cosmec
      </motion.h1>

      {/* Sub text */}
      <motion.p
        className="mt-2 text-gray-700 tracking-widest text-sm uppercase"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        Beauty redefined
      </motion.p>

      {/* Loader dots */}
      <motion.div
        className="flex gap-2 mt-8"
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 1.2, repeat: Infinity }}
      >
        <span className="w-2 h-2 bg-black rounded-full"></span>
        <span className="w-2 h-2 bg-black rounded-full"></span>
        <span className="w-2 h-2 bg-black rounded-full"></span>
      </motion.div>
    </motion.div>
  );
}
