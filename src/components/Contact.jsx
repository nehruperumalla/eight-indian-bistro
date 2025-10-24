import { motion } from "framer-motion";
import { Instagram, Facebook, MapPin, Mail, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-gradient-to-b from-[#0D0D0D] via-[#000000] to-[#0D0D0D] text-gray-300 py-10 px-6 md:px-16"
    >
      {/* Header */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-turmeric mb-3">
          Visit Us
        </h2>
        <p className="text-gray-400 text-sm md:text-2xl">
          The Warmth of Indian flavors and the charm of modern dining. </p>
      </motion.div>

      {/* Contact + Map */}
      <div className="grid md:grid-cols-2 gap-10 max-w-7xl mx-auto items-center">
        {/* Left: Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h3 className="text-2xl font-bold text-turmeric mb-4">
            Eight Indian Bistro
          </h3>

          <div className="space-y-3 text-lg">
            <p className="flex items-center gap-3">
              <MapPin className="text-turmeric" size={20} />
              161 NJ-27, Edison, NJ 08820
            </p>
            <p className="flex items-center gap-3">
              <Phone className="text-turmeric" size={20} />
              732 515-9466
            </p>
            <p className="flex items-center gap-3">
              <Mail className="text-turmeric" size={20} />
              eightindianbistro@gmail.com
            </p>
          </div>

          <div className="mt-6">
            <p className="text-gray-400 text-md mb-2">
              <span className="text-turmeric font-semibold">Hours:</span>
            </p>
              <div className="divide-y divide-white/10 border-t border-b border-white/10 max-w-sm md:max-w-md">
                {[
                  ["Monday", "11:30 AM - 3:00 PM and 5:30 PM - 09:30 PM"],
                  ["Tuesday", "Closed"],
                  ["Wednesday", "11:30 AM - 3:00 PM and 5:30 PM - 10:00 PM"],
                  ["Thursday", "11:30 AM - 3:00 PM and 5:30 PM - 10:30 PM"],
                  ["Friday", "11:30 AM - 3:00 PM and 5:30 PM - 10:30 PM"],
                  ["Saturday", "11:30 AM - 3:00 PM and 5:30 PM - 10:30 PM"],
                  ["Sunday", "11:30 AM - 3:00 PM and 5:30 PM - 10:00 PM"]
                ].map(([day, time], i) => (
                  <div key={i}
                        className="flex justify-between py-2 text-sm">
                          <span className="text-gray-300">{day}</span>
                          <span className="text-gray-100">{time}</span>

                  </div>
                ))}
              </div>
          </div>

          {/* Social Links with Glow */}
          <div className="flex gap-6 mt-8">
            {[
              {
                href: "https://www.instagram.com/eightindianbistro/",
                icon: <Instagram size={28} />,
                color: "#EF0440", // chilli
              },
              {
                href: "https://facebook.com",
                icon: <Facebook size={28} />,
                color: "#FFB306", // turmeric
              },
              {
                href: "https://maps.google.com?q=161+Lincoln+Hwy,+Edison,+NJ+08820",
                icon: <MapPin size={28} />,
                color: "#FFB306",
              },
            ].map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.2,
                  textShadow: `0px 0px 10px ${link.color}`,
                  color: link.color,
                }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
                className="text-gray-400"
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Right: Google Map */}
        <motion.div
          className="w-full h-[350px] md:h-[450px] rounded-2xl overflow-hidden shadow-lg border border-chilli/30"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3035.686894958979!2d-74.35353268460485!3d40.57503407934711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3b86b1234567%3A0xabcdef123456789!2s161%20Lincoln%20Hwy%2C%20Edison%2C%20NJ%2008820!5e0!3m2!1sen!2sus!4v1730000000000!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Eight Indian Bistro Location"
          ></iframe>
        </motion.div>
      </div>

      {/* Footer Note */}
      <div className="text-center text-gray-500 text-sm mt-8">
        <span style={{
        fontFamily: "Georgia, serif"}}>©</span> {new Date().getFullYear()} Eight Indian Bistro <span style={{
        fontFamily: "Georgia, serif"}}>·</span> Crafted with ❤️ and spice
      </div>
    </section>
  );
}
