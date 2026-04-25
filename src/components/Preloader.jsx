import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Preloader = () => {
  const [mounted, setMounted] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { text: "building 🛠️", rotation: "-3deg", image: "./image1.jpeg" },
    { text: "creating 🎬", rotation: "2deg", image: "./image2.jpeg" },
    { text: "thinking 💡", rotation: "-1deg", image: "./image3.jpeg" },
    { text: "shipping 🚀", rotation: "3deg", image: "./image_8.jpeg" },
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev < slides.length - 1 ? prev + 1 : prev));
    }, 600); // Change slide every 600ms

    const timer = setTimeout(() => {
      setMounted(false);
    }, 3800); // 3200ms + 600ms exit animation

    return () => {
      clearInterval(slideInterval);
      clearTimeout(timer);
    };
  }, [slides.length]);

  if (!mounted) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[60] flex flex-col items-center justify-center bg-bg"
      animate={{ opacity: 0, y: "-100%" }}
      transition={{ delay: 3.2, duration: 0.6, ease: "easeInOut" }}
    >
      <div className="relative mb-12 w-48 h-64">
        {slides.map(
          (slide, index) =>
            index <= currentSlide && (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, y: 20, rotate: 0 }}
                animate={{ opacity: 1, scale: 1, y: 0, rotate: slide.rotation }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="absolute inset-0 w-full h-full border-4 border-ink bg-card shadow-brutal p-3 flex flex-col items-center justify-end overflow-hidden"
                style={{ zIndex: index }}
              >
                <img
                  src={slide.image}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* <div className="absolute inset-0 bg-accent/10 flex items-center justify-center font-bold text-ink/30 uppercase tracking-widest text-xs">
                  Photo {index + 1}
                </div> */}
                <span className="font-sans font-bold text-sm text-ink relative z-10 bg-accent px-4 py-2 border-2 border-ink shadow-brutal-sm w-full text-center">
                  {slide.text}
                </span>
              </motion.div>
            ),
        )}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="border-4 border-ink bg-card px-10 py-5 shadow-brutal"
      >
        <h1 className="font-serif font-black text-6xl md:text-8xl text-ink tracking-tighter uppercase">
          Ari.
        </h1>
      </motion.div>

      <div className="fixed bottom-0 left-0 w-full h-2 bg-card border-t-4 border-ink">
        <motion.div
          className="h-full bg-accent border-r-4 border-ink"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 2.8, ease: "linear" }}
        />
      </div>
    </motion.div>
  );
};

export default Preloader;
