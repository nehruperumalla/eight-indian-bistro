import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const dishes = [
  { name: "Masala Dosa", desc: "Crispy rice & lentil crepe filled with spiced potato masala.", img: "/images/menu/dosa.jpg" },
  { name: "Hyderabadi Biryani", desc: "Fragrant basmati rice slow-cooked with tender chicken & spices.", img: "/images/menu/biryani.jpg" },
  { name: "Idli Sambar", desc: "Steamed rice cakes served with aromatic lentil broth.", img: "/images/menu/idli.jpg" },
  { name: "Medu Vada", desc: "Golden fried lentil doughnuts, crisp outside & soft inside.", img: "/images/menu/vada.jpg" },
  { name: "Filter Coffee", desc: "South Indian traditional coffee brewed to perfection.", img: "/images/menu/filtercoffee.jpg" },
  { name: "Payasam", desc: "Sweet milk dessert infused with cardamom & cashews.", img: "/images/menu/payasam.jpg" },
];

// 🌶️ Pepper Floating Component
const FloatingPeppers = () => {
  const peppers = Array.from({ length: 7 }); // number of peppers
  return (
    <>
      {peppers.map((_, i) => (
        <motion.span
          key={i}
          className="absolute text-3xl select-none"
          style={{
            left: `${Math.random() * 90}%`,
            top: `${Math.random() * 100}%`,
            opacity: 0.3 + Math.random() * 0.4,
          }}
          animate={{
            y: ["0%", "-100vh"],
            x: [0, Math.random() * 50 - 25],
            opacity: [0, 1, 0],
            rotate: [0, 15, -15, 0],
          }}
          transition={{
            duration: 12 + Math.random() * 6,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut",
          }}
        >
          🌶️
        </motion.span>
      ))}
    </>
  );
};

// ✨ Floating Spice Particles
const FloatingParticles = () => {
  const particles = Array.from({ length: 20 });
  const colors = ["#FFB306", "#EF0440", "#FF9F00", "#FFD166"]; // turmeric + chili tones

  return (
    <>
      {particles.map((_, i) => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        const randomSize = 3 + Math.random() * 4; // small glowing dots
        return (
          <motion.span
            key={i}
            className="absolute rounded-full blur-sm"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: randomColor,
              width: `${randomSize}px`,
              height: `${randomSize}px`,
              opacity: 0.2 + Math.random() * 0.3,
            }}
            animate={{
              y: ["0%", "-120vh"],
              x: [0, Math.random() * 60 - 30],
              opacity: [0, 1, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 10 + Math.random() * 8,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </>
  );
};


export default function Menu() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]); // parallax offset

  return (
    <section
      ref={ref}
      id="menu"
      className="relative min-h-screen text-center py-20 px-6 md:px-16 overflow-hidden"
    >
      {/* Parallax Background */}
      {/* <motion.img
        src="/images/menu-bg.jpg"
        alt="Menu Background"
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={{ y }}
      /> */}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/75" />

      {/* Floating Peppers */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        <FloatingParticles />
        <FloatingPeppers />
      </div>

      {/* Header */}
      <motion.div
        className="relative z-20 mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-turmeric mb-3">
          Our Menu
        </h2>
        <p className="text-gray-300 font-secondary text-lg">
          Experience authentic South Indian flavors crafted with passion and precision.
        </p>
      </motion.div>

      {/* Menu Grid */}
      <div className="relative z-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {dishes.map((dish, i) => (
          <motion.div
            key={dish.name}
            className="relative rounded-2xl overflow-hidden shadow-lg group"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
          >
            <img
              src={dish.img}
              alt={dish.name}
              className="w-full h-72 object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-5">
              <h3 className="text-turmeric text-2xl font-semibold mb-1">
                {dish.name}
              </h3>
              <p className="text-gray-200 text-sm font-secondary">
                {dish.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* View Full Menu Button with Animated Pepper */}
      <motion.div
        className="relative z-20 mt-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <a
          href="/pdfs/EightIndianBistro_FullMenu.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-10 py-3 bg-chilli text-white font-semibold rounded-full hover:bg-turmeric hover:text-black transition-all duration-300 shadow-lg"
        >
          <motion.span
            className="text-xl"
            animate={{
              rotate: [0, -15, 15, 0],
              y: [0, -3, 0],
            }}
            transition={{
              repeat: Infinity,
              repeatDelay: 3,
              duration: 0.9,
              ease: "easeInOut",
            }}
          >
            🌶️
          </motion.span>
          <span>View Full Menu</span>
        </a>
      </motion.div>
    </section>
  );
}
