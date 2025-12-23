import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

import bg1 from "../assets/bg1.jpg";
import bg2 from "../assets/bg2.jpg";
import bg3 from "../assets/bg3.jpg";
import bg4 from "../assets/background.jpeg";
import bg5 from "../assets/background-image.jpeg";

const images = [bg1, bg2, bg3, bg4, bg5];

export default function HeroCarousel({ page, interval = 5000 }) {
  const [current, setCurrent] = useState(0);

  // Change image every `interval` ms
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [interval]);

  return (
    <section className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden">
      {/* AnimatePresence for smooth transitions */}
      <AnimatePresence>
        <motion.div
          key={current}
          className="absolute inset-0 bg-cover bg-no-repeat  bg-center"
          style={{ backgroundImage: `url(${images[current]})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
        ></motion.div>
      </AnimatePresence>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-green-600/30 to-black/60 z-10"></div>

      {/* Content */}
      <motion.div
        className="relative z-20 text-center px-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl sm:text-6xl font-extrabold text-white drop-shadow-lg mb-4">
          Home
        </h1>
        <p className="text-xl sm:text-2xl text-white/90 mb-6"></p>

        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block px-8 py-3 rounded-full bg-green-500 text-white font-semibold shadow-lg hover:bg-green-400 transition"
        >
          <Link to="/">Shop Now</Link>
        </motion.a>
      </motion.div>
    </section>
  );
}
