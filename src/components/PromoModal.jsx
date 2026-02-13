import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PromoModal({
  isOpen,
  onClose,
  images = ["/popup/02.jpg", "/popup/01.jpg"],
  altPrefix = "Promo",
}) {
  const safeImages = useMemo(
    () => (Array.isArray(images) ? images.filter(Boolean) : []),
    [images]
  );

  const [idx, setIdx] = useState(0);
  const hasMany = safeImages.length > 1;

  // Reset to first slide whenever modal opens
  useEffect(() => {
    if (isOpen) setIdx(0);
  }, [isOpen]);

  const prev = () => {
    if (!hasMany) return;
    setIdx((i) => (i - 1 + safeImages.length) % safeImages.length);
  };

  const next = () => {
    if (!hasMany) return;
    setIdx((i) => (i + 1) % safeImages.length);
  };

  // Keyboard support: ESC close, ←/→ navigate
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose?.();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, onClose, safeImages.length]);

  if (!isOpen || safeImages.length === 0) return null;

  // Swipe config
  const SWIPE_CONFIDENCE_THRESHOLD = 80; // px
  const onDragEnd = (_, info) => {
    if (!hasMany) return;
    if (info.offset.x < -SWIPE_CONFIDENCE_THRESHOLD) next(); // swipe left → next
    else if (info.offset.x > SWIPE_CONFIDENCE_THRESHOLD) prev(); // swipe right → prev
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-[999] bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            aria-hidden="true"
          />

          {/* Wrapper: click outside closes */}
          <motion.div
            className="fixed inset-0 z-[1000] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label="Promotions"
            onClick={onClose}
          >
            {/* Content */}
            <motion.div
              className="relative inline-block"
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute right-2 top-2 z-20 rounded-full bg-white/25 px-3 py-2 text-white hover:bg-white/35 focus:outline-none focus:ring-2 focus:ring-white/60"
                aria-label="Close popup"
                type="button"
              >
                ✕
              </button>

              {/* Left / Right arrows */}
              {hasMany && (
                <>
                  <button
                    onClick={prev}
                    type="button"
                    aria-label="Previous image"
                    className="absolute left-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/20 px-3 py-2 text-white hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-white/60"
                  >
                    ‹
                  </button>

                  <button
                    onClick={next}
                    type="button"
                    aria-label="Next image"
                    className="absolute right-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/20 px-3 py-2 text-white hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-white/60"
                  >
                    ›
                  </button>
                </>
              )}

              {/* Slide */}
              <div className="overflow-hidden rounded-2xl shadow-2xl">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={safeImages[idx]}
                    src={safeImages[idx]}
                    alt={`${altPrefix} ${idx + 1}`}
                    className="block max-h-[85vh] max-w-[92vw] w-auto h-auto object-contain select-none touch-pan-y"
                    draggable="false"
                    initial={{ opacity: 0, x: 25, scale: 0.99 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: -25, scale: 0.99 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    // ✅ Swipe
                    drag={hasMany ? "x" : false}
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.15}
                    onDragEnd={onDragEnd}
                  />
                </AnimatePresence>
              </div>

              {/* Dots */}
              {hasMany && (
                <div className="mt-3 flex items-center justify-center gap-2">
                  {safeImages.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setIdx(i)}
                      aria-label={`Go to image ${i + 1}`}
                      className={`h-2.5 w-2.5 rounded-full transition ${
                        i === idx ? "bg-white" : "bg-white/40 hover:bg-white/60"
                      }`}
                    />
                  ))}
                </div>
              )}
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
