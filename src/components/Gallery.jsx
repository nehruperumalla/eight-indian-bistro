import { motion } from "framer-motion";
import { useState } from "react";

const images = [
  "/images/gallery/1.jpg",
  "/images/gallery/2.jpg",
  "/images/gallery/3.jpg",
  "/images/gallery/4.jpg",
  "/images/gallery/5.jpg",
  "/images/gallery/6.jpg"
];

export default function Gallery() {
  const [selected, setSelected] = useState(null);

  return (
    <section
      id="gallery"
      className="relative min-h-screen bg-gradient-to-b from-[#0D0D0D] via-[#000000] to-[#0D0D0D] py-20 px-6 md:px-16 overflow-hidden"
    >
      {/* Header */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-turmeric mb-3">Gallery</h2>
        <p className="text-gray-300 font-secondary text-lg">
          A glimpse into the vibrant colors, textures, and smiles at Eight Indian Bistro.
        </p>
      </motion.div>

      {/* Gallery Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4 max-w-7xl mx-auto">
        {images.map((img, i) => (
          <motion.img
            key={i}
            src={img}
            alt={`Gallery ${i + 1}`}
            className="w-full rounded-2xl shadow-md hover:shadow-lg hover:scale-[1.02] transition-transform duration-500 cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            onClick={() => setSelected(img)}
          />
        ))}
      </div>

      {/* Lightbox Modal */}
      {selected && (
        <motion.div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelected(null)}
        >
          <img
            src={selected}
            alt="Expanded view"
            className="max-h-[90%] max-w-[90%] rounded-2xl shadow-2xl object-contain"
          />
        </motion.div>
      )}
    </section>
  );
}
