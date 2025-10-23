import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Promise() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]); // parallax offset

  return (
    <section
      ref={ref}
      id="promise"
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-center text-center md:text-left overflow-hidden"
    >
      {/* Parallax Background */}
      <motion.img
        src="/images/kitchen-bg.png"
        alt="Our Kitchen"
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={{ y }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80" />

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center px-6 md:px-16 py-20 gap-12">
        {/* Left: Chef Image */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <img
            src="/images/chef.png"
            alt="Chef at Eight Indian Bistro"
            className="rounded-2xl shadow-2xl object-cover w-full h-[380px] md:h-[480px]"
          />
        </motion.div>

        {/* Right: Text */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-turmeric mb-4">
            Our Story & Promise
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-6 font-secondary">
            <span className="text-turmeric font-semibold">Eight Indian Bistro</span> was born from the dream of bringing
            authentic South Indian flavors to a contemporary space. Our founders envisioned a place where the warmth of
            Indian hospitality meets culinary craftsmanship.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-6 font-secondary">
            We promise every guest <span className="text-turmeric">freshness, honesty, and heart</span> in every plate — from locally
            sourced ingredients to time-honored techniques passed down through generations.
          </p>

          <p className="text-gray-400 italic text-md font-secondary">
            “Cooking isn’t just an art; it’s a connection between people. At Eight Indian Bistro, we cook to create memories.”
          </p>

          <div className="mt-6">
            <span className="block text-turmeric font-semibold text-lg">— Chef Anand Kumar</span>
            <span className="block text-gray-400 text-sm">Head Chef & Co-Founder</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
