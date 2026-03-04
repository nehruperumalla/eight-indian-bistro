import { motion, useScroll, useTransform } from "framer-motion";
import { CreditCard, BottleWine, Utensils, HandPlatter } from "lucide-react";
import { useRef } from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "0%"]);

  const items = [
    {
      label: "Order Online",
      icon: <CreditCard size={26} />,
      color: "#FEEDC8",
      link: "https://order.toasttab.com/online/eightindianbistro",
      external: true,
    },
    {
      label: "BYOB Friendly",
      icon: <BottleWine size={26} />,
      color: "#FEEDC8",
      static: true,
    },
    {
      label: "Private Hall",
      icon: <Utensils size={26} />,
      color: "#FEEDC8",
      route: "/private-party",
    },
    {
      label: "Catering",
      icon: <HandPlatter size={26} />,
      color: "#FEEDC8",
      route: "/catering",
    },
  ];

  return (
    <section
      ref={ref}
      id="hero"
      className="relative h-screen flex items-center justify-center text-center overflow-hidden"
    >
      {/* Background image */}
      <motion.img
        src="/images/hero-latest.jpg"
        alt="Eight Indian Bistro"
        className="absolute inset-0 w-full h-full object-cover object-top"
        style={{ y }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Text */}
      <motion.div
        className="relative z-10 px-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h1 className="font-primary text-4xl sm:text-4xl md:text-6xl font-bold text-turmeric drop-shadow-lg">
          Eight Indian Bistro
        </h1>

        <p className="mt-4 text-sm md:text-2xl text-gray-200">
          Sophisticated Flavors, Soulful Aromas and Infinite Tastes
        </p>

        {/* Action Cards */}
        <motion.div
          className="mt-14 grid grid-cols-2 md:grid-cols-2 gap-6 max-w-4xl mx-auto text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          {items.map((item, i) => {
            const card = (
              <motion.div
                whileHover={{
                  scale: 1.12,
                  color: item.color,
                  textShadow: `0px 0px 10px ${item.color}`,
                  boxShadow: `0px 0px 12px ${item.color}55`,
                }}
                transition={{ type: "spring", stiffness: 220, damping: 12 }}
                className="flex flex-col items-center justify-center bg-black/60 rounded-xl py-4 shadow-md border border-gray-700 hover:border-turmeric transition-all"
              >
                <div className="mb-2 text-xl text-turmeric">{item.icon}</div>
                <span className="text-sm md:text-base font-medium tracking-wide">
                  {item.label}
                </span>
              </motion.div>
            );

            // External Link (new tab)
            if (item.external) {
              return (
                <a
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  {card}
                </a>
              );
            }

            // Internal Route (no refresh)
            if (item.route) {
              return (
                <Link key={i} to={item.route} className="block">
                  {card}
                </Link>
              );
            }

            // Static (no link)
            return (
              <div key={i} className="block">
                {card}
              </div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}