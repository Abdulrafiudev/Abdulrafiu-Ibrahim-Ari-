import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PixelImageTransition = ({ src }) => {
  const [displayedSrc, setDisplayedSrc] = useState(src);
  const [incomingSrc, setIncomingSrc] = useState(null);

  // Grid dimensions
  const GRID_SIZE = 10; // Clean 10x10 grid to avoid some rounding issues
  const cells = Array.from({ length: GRID_SIZE * GRID_SIZE });

  useEffect(() => {
    if (src !== displayedSrc) {
      setIncomingSrc(src);
    }
  }, [src, displayedSrc]);

  const handleAnimationComplete = () => {
    setDisplayedSrc(src);
    setIncomingSrc(null);
  };

  return (
    <div className="relative w-full h-full overflow-hidden bg-card">
      {/* Base Image */}
      <img
        src={displayedSrc}
        alt="Hero Base"
        className="w-full h-full object-cover"
      />

      {/* Incoming Image Transition (Absolute Positioning to avoid Grid Gaps) */}
      <AnimatePresence>
        {incomingSrc && (
          <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
            {cells.map((_, i) => {
              const x = i % GRID_SIZE;
              const y = Math.floor(i / GRID_SIZE);
              const isLast = i === cells.length - 1;

              // Use slightly larger values (10.5% instead of 10%) to overlap pixels and hide lines
              const cellSize = 100 / GRID_SIZE;
              const overlap = 0.5; 

              return (
                <motion.div
                  key={`${incomingSrc}-${i}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.3,
                    delay: (x + y) * 0.05 + Math.random() * 0.15,
                    ease: "easeOut"
                  }}
                  onAnimationComplete={isLast ? handleAnimationComplete : undefined}
                  className="absolute overflow-hidden"
                  style={{
                    left: `${x * cellSize - overlap / 2}%`,
                    top: `${y * cellSize - overlap / 2}%`,
                    width: `${cellSize + overlap}%`,
                    height: `${cellSize + overlap}%`,
                  }}
                >
                  <img
                    src={incomingSrc}
                    alt=""
                    className="absolute object-cover"
                    style={{
                      // Each inner image is sized to the full container (approx 1000% of cell)
                      // We use the exact percentage to ensure synchronization across all pixels
                      width: `${(100 / (cellSize + overlap)) * 100}%`,
                      height: `${(100 / (cellSize + overlap)) * 100}%`,
                      // Shifted to the correct window relative to the pixel
                      left: `-${(x * cellSize) / (cellSize + overlap) * 100}%`,
                      top: `-${(y * cellSize) / (cellSize + overlap) * 100}%`,
                      maxWidth: "none",
                    }}
                  />
                </motion.div>
              );
            })}
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PixelImageTransition;
