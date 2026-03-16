import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const clientProjects = [
  {
    title: "TikiAnaly",
    type: "Web Application",
    year: "Ongoing",
    desc: "A waste management and recycling platform with a rewarding system.",
    tags: ["React", "Node.js", "MongoDB"],
    color: "bg-blue-400",
    link: "https://tikianaly.com",
    image: "./tikianaly.png",
  },
  {
    title: "Cusorcart",
    type: "E-commerce Platform",
    year: "2025",
    desc: "An e-commerce platform for local businesses to sell their products online.",
    tags: ["Next.js", "Shadcn UI", "Tailwind"],
    color: "bg-orange-400",
    link: "https://cursorcart.com",
    image: "./image2.jpeg",
  },
  {
    title: "SwiftShip",
    type: "Logistics Dashboard",
    year: "2023",
    desc: "Real-time tracking and dispatch management system for delivery startups.",
    tags: ["React", "Express", "PostgreSQL"],
    color: "bg-green-400 ",
    link: "https://swiftship.app",
    image: "./image3.jpeg",
  },
  {
    title: "Approved.",
    type: "Web3 NFT Site",
    year: "2026",
    desc: "A sleek minting page for an upcoming digital collectible series.",
    tags: ["Next.js", "Shadcn UI", "Tailwind"],
    color: "bg-purple-400",
    link: "https://approvednft.art",
    image: "./image4.jpeg",
  },
];

const PixelCard = ({ project, index, forceVisible }) => {
  const [isHovered, setIsHovered] = useState(false);

  const isImageVisible = isHovered || forceVisible;

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const GRID_SIZE = 8;
  const cells = Array.from({ length: GRID_SIZE * GRID_SIZE });

  return (
    <motion.a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 + 0.3 }}
      whileHover={{ rotate: index % 2 === 0 ? 1 : -1, scale: 1.02 }}
      className={`${project.color} border-4 border-ink p-8 shadow-brutal hover:shadow-brutal-lg transition-all relative group cursor-pointer block min-h-[400px] overflow-hidden`}
    >
      {/* Pixelized Image Overlay */}
      <AnimatePresence>
        {isImageVisible && (
          <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
            {cells.map((_, i) => {
              const x = i % GRID_SIZE;
              const y = Math.floor(i / GRID_SIZE);
              const cellSize = 100 / GRID_SIZE;
              const overlap = 1.0;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, clipPath: "inset(50%)" }}
                  animate={{ opacity: 1, clipPath: "inset(0%)" }}
                  exit={{ opacity: 0, clipPath: "inset(50%)" }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.008,
                    ease: "easeInOut",
                  }}
                  className="absolute overflow-hidden pointer-events-none"
                  style={{
                    left: `${x * cellSize - overlap / 2}%`,
                    top: `${y * cellSize - overlap / 2}%`,
                    width: `${cellSize + overlap}%`,
                    height: `${cellSize + overlap}%`,
                  }}
                >
                  <img
                    src={project.image}
                    alt=""
                    className="absolute object-cover pointer-events-none"
                    style={{
                      width: `${(100 / (cellSize + overlap)) * 100 * 1.01}%`,
                      height: `${(100 / (cellSize + overlap)) * 100 * 1.01}%`,
                      left: `-${((x * cellSize) / (cellSize + overlap)) * 100}%`,
                      top: `-${((y * cellSize) / (cellSize + overlap)) * 100}%`,
                      maxWidth: "none",
                    }}
                  />
                </motion.div>
              );
            })}
          </div>
        )}
      </AnimatePresence>

      {/* Card Content */}
      <div className="relative z-10 h-full flex flex-col">
        <div className="flex justify-between items-start mb-12">
          <span className="font-sans font-black text-4xl opacity-20">
            0{index + 1}
          </span>
          <span className="bg-bg border-2 border-ink px-3 py-1 font-sans font-bold text-xs uppercase shadow-brutal-sm">
            {project.year}
          </span>
        </div>

        <h3 className="font-sans font-bold text-4xl text-ink mb-4 tracking-tight group-hover:underline decoration-4">
          {project.title}
        </h3>
        <p className="font-sans font-medium text-lg text-ink mb-8 leading-snug">
          {project.desc}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="bg-bg/40 border-2 border-ink px-2 py-0.5 font-sans font-bold text-[10px] uppercase"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Decorative corner */}
        <div className="absolute bottom-0 right-0 w-12 h-12 bg-bg border-t-4 border-l-4 border-ink flex items-center justify-center font-bold group-hover:bg-accent transition-colors z-30">
          ↗
        </div>
      </div>
    </motion.a>
  );
};

const ClientProjects = () => {
  const [activeCardIndex, setActiveCardIndex] = useState(-1); // Start at -1 (nothing active)
  const [visibleCount, setVisibleCount] = useState(4);

  // Centralized Sequential Loop with Initial 5s Delay and Strict Sequentiality
  useEffect(() => {
    let interval;
    let currentIndex = -1; // Local tracker for the sequence

    // Initial 5-second delay before starting the loop
    const startTimeout = setTimeout(() => {
      const totalCycleTime = 7000; // Total time per card turn
      const holdTime = 5000; // How long the image stays visible

      const runCycle = () => {
        currentIndex =
          (currentIndex + 1) % Math.min(clientProjects.length, visibleCount);
        setActiveCardIndex(currentIndex);

        // Hide logic to ensure strict sequentiality (gap between cards)
        setTimeout(() => {
          setActiveCardIndex(-1);
        }, holdTime);
      };

      // Start the first one immediately after the 5s delay
      runCycle();

      // Then set the interval for the rest
      interval = setInterval(runCycle, totalCycleTime);
    }, 5000);

    return () => {
      clearTimeout(startTimeout);
      if (interval) clearInterval(interval);
    };
  }, [visibleCount]); // Re-run if visible count changes to include new cards in loop

  const showMore = () => setVisibleCount(clientProjects.length);

  return (
    <div className="min-h-screen bg-bg pt-32 pb-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <Link
              to="/"
              className="inline-block mb-8 font-sans font-bold text-sm uppercase tracking-widest text-ink hover:translate-x-[-4px] transition-transform"
            >
              ← Back to Home
            </Link>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-sans font-bold text-6xl lg:text-8xl tracking-tighter text-ink leading-none"
            >
              CLIENT <br /> <span className="text-accent">PROJECTS</span>
            </motion.h1>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="md:w-1/3 border-l-4 border-ink pl-6 py-2"
          >
            <p className="font-sans font-medium text-lg text-ink/80 leading-relaxed">
              A selection of bespoke solutions built for startups and businesses
              across Africa and globally. Focused on performance, scalability,
              and UX.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {clientProjects.slice(0, visibleCount).map((project, index) => (
            <PixelCard
              key={index}
              project={project}
              index={index}
              forceVisible={activeCardIndex === index}
            />
          ))}
        </div>

        {visibleCount < clientProjects.length && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-16 text-center"
          >
            <button
              onClick={showMore}
              className="bg-accent text-ink font-bold font-sans text-lg px-8 py-4 border-4 border-ink shadow-brutal hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-brutal-sm transition-all"
            >
              View More Projects
            </button>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-32 text-center"
        >
          <p className="font-sans font-bold text-2xl text-ink mb-8">
            Got a fresh idea?
          </p>
          <Link
            to="/#contact"
            className="inline-block bg-accent text-ink font-bold font-sans text-xl px-12 py-6 border-4 border-ink shadow-brutal hover:translate-y-[4px] hover:translate-x-[4px] hover:shadow-none transition-all"
          >
            Let's work together →
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default ClientProjects;
