import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-center text-center md:text-left overflow-hidden"
    >
      {/* --- 🌈 Smooth Transition Gradient (NEW) --- */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black via-black/80 to-transparent z-20" />

      {/* Background Image */}
      <img
        src="/images/about-bg-latest.jpg"
        alt="About Eight Indian Bistro"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/75" />

      {/* Content */}
      <div className="relative z-30 flex flex-col md:flex-row items-center justify-center px-6 md:px-16 py-20 gap-12">
        {/* Left: Image */}
        {/* <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <img
            src="/images/about.jpg"
            alt="South Indian Cuisine"
            className="rounded-2xl shadow-2xl object-cover w-full h-[380px] md:h-[480px]"
          />
        </motion.div> */}

        {/* Right: Text */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-turmeric mb-4 text-center">
            About Us
          </h2>

          <p className="text-gray-200 text-2xl leading-relaxed mb-6 font-secondary">
            At <span className="text-turmeric">Eight Indian Bistro</span>, every
            meal is a journey — a blend of traditional recipes, bold spices, and
            modern presentation. Our story began with the vision to bring South
            Indian comfort food to a refined, contemporary setting.
          </p>

          <p className="text-gray-200 text-2xl leading-relaxed font-secondary">
            Led by our experienced chefs, we combine age-old culinary traditions
            with creativity. From crispy dosas to rich Chettinad curries, every
            dish is handcrafted to celebrate authenticity and elevate your dining
            experience.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
