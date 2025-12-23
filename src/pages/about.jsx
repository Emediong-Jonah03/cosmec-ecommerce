import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ab1 from "../assets/ab1.jpg"
import bg1 from "../assets/bg1.jpg"
import bg2 from "../assets/bg2.jpg"
import bg3 from "../assets/bg3.jpg"

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const About = () => {
  return (
    <div className="bg-zinc-50 text-black overflow-hidden">
      
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-32 pb-40 grid md:grid-cols-2 gap-20 items-center">
        
        {/* Text */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          <motion.span
            variants={fadeUp}
            className="text-sm uppercase tracking-widest text-black/40"
          >
            About Us
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="text-6xl font-bold leading-tight mt-4 mb-8"
          >
            Modern beauty,
            <br />
            made honest
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-lg text-black/70 max-w-md mb-10"
          >
            We design cosmetics that respect your skin, your time, and your
            confidence. No noise. No excess. Just thoughtful care.
          </motion.p>

          <motion.button
            variants={fadeUp}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="bg-green-400 hover:bg-green-300 transition px-10 py-3 rounded-full font-semibold"
          >
            Our Philosophy
          </motion.button>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-[2.5rem] bg-black/5">
          <img src={ab1} alt="woman waering hat" /></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-3xl bg-green-300/30">
          <img src={bg2} alt="lady" /></div>
        </motion.div>
      </section>

      {/* Values */}
      <motion.section
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 pb-36 grid md:grid-cols-3 gap-20"
      >
        {[
          {
            title: "Thoughtful Ingredients",
            text: "Every ingredient is chosen with intention, balancing performance and gentleness."
          },
          {
            title: "Designed to Last",
            text: "Products made for consistency, not trends. Your routine should feel timeless."
          },
          {
            title: "Beauty Without Noise",
            text: "We remove what doesn’t matter, so what remains can work beautifully."
          }
        ].map((item, i) => (
          <motion.div key={i} variants={fadeUp}>
            <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
            <p className="text-black/60 leading-relaxed">{item.text}</p>
          </motion.div>
        ))}
      </motion.section>

      {/* Editorial Split */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-40 grid md:grid-cols-2 gap-24 items-center">
          
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="aspect-[3/4] rounded-[2.5rem] bg-black/5">
            <img src={bg1} alt="beautiful girl" /></div>
            <div className="absolute top-10 -left-10 w-28 h-28 rounded-2xl bg-green-400/40">
            <img src={bg3} alt="lady2" /></div>
          </motion.div>

          {/* Text */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.span
              variants={fadeUp}
              className="text-sm uppercase tracking-widest text-black/40"
            >
              Our Mission
            </motion.span>

            <motion.h2
              variants={fadeUp}
              className="text-5xl font-bold mt-4 mb-8"
            >
              Care that feels
              <br />
              intuitive
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-lg text-black/70 leading-relaxed mb-6"
            >
              We believe skincare should integrate seamlessly into real lives.
              Products should feel natural to use and satisfying to return to.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-lg text-black/70 leading-relaxed"
            >
              Our role is not to redefine beauty—but to support it, quietly and
              consistently.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-32"
      >
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-5xl font-bold mb-8">
            Beauty, simplified
          </h2>
          <p className="text-lg text-black/60 mb-12">
            Join a community that values clarity, care, and confidence.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="bg-green-400 hover:bg-green-300 transition px-12 py-4 rounded-full font-semibold"
          ><Link to="/">Explore the Collection</Link>
          </motion.button>
        </div>
      </motion.section>

    </div>
  );
};

export default About;
