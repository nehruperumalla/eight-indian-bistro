import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PromoModal({ isOpen, onClose, imageSrc, alt = "Promo" }) {
  // Close on ESC
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose?.();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop (visual only) */}
          <motion.div
            className="fixed inset-0 z-[999] bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            aria-hidden="true"
          />

          {/* Modal wrapper (captures outside clicks) */}
          <motion.div
            className="fixed inset-0 z-[1000] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label="Promotion"
            onClick={onClose} // ✅ click outside image closes
          >
            {/* Modal content */}
            <motion.div
              className="relative inline-block"
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()} // ✅ clicking image area won't close
            >
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute right-2 top-2 z-10 rounded-full bg-black/25 px-3 py-2 text-white hover:bg-black/35 focus:outline-none focus:ring-2 focus:ring-white/60"
                aria-label="Close popup"
              >
                ✕
              </button>

              {/* Responsive image (single source) */}
              <img
                src={imageSrc}
                alt={alt}
                className="
                  block
                  h-auto
                  w-auto
                  max-h-[85vh]
                  max-w-[92vw]
                  rounded-2xl
                  object-contain
                  shadow-2xl
                "
                draggable="false"
              />
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
