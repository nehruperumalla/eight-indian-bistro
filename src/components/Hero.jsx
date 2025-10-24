import { motion, transform, useScroll, useTransform } from "framer-motion";
import { UtensilsCrossed, PartyPopper, Wine, CreditCard, BottleWine } from "lucide-react"; // add this near the top
import {useRef} from "react"
export default function Hero() {
  const ref = useRef(null);
  const {scrollYProgress} = useScroll({target:ref})
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  return (
    <section
    ref={ref}
      id="hero"
      className="relative h-screen flex items-center justify-center text-center overflow-hidden"
    >
      {/* Background image */}
      <img
        src="/images/hero-latest.jpg"
        alt="Eight Indian Bistro"
        className="absolute inset-0 w-full h-full object-cover object-top"
        style={{y, translateY: "50px"}}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70" />

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

        {/* <motion.a
          href="#menu"
          className="inline-block mt-8 px-8 py-3 bg-chilli text-white font-semibold rounded-full hover:bg-turmeric hover:text-black transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore Menu
        </motion.a> */}
        <motion.div
  className="mt-14 grid grid-cols-2 md:grid-cols-2 gap-6 max-w-4xl mx-auto text-gray-300"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 1.5, duration: 1 }}
>
  {[
    // {
    //   label: "Catering Orders",
    //   icon: <PartyPopper size={26} />,
    //   color: "#FFB306", // turmeric
    // },
    {
      label: "Order Online",
      icon: <CreditCard size={26} />,
      color: "#FEEDC8", // chilli
      link: "https://order.toasttab.com/online/eightindianbistro", // your ordering link
    },
    // {
    //   label: "Wine Available",
    //   icon: <Wine size={26} />,
    //   color: "#FFB306",
    // },
    {
      label: "BYOB Friendly",
      icon: <BottleWine size={26} />,
      color: "#FEEDC8",
    },
  ].map((item, i) => (
    <motion.a
      key={i}
      href={item.link || "#"}
      target={item.link ? "_blank" : undefined}
      rel="noopener noreferrer"
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
    </motion.a>
  ))}
</motion.div>
      </motion.div>
    </section>
  );
}
