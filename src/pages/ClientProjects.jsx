import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

// ─── Project Data ─────────────────────────────────────────────────────────────
const clientProjects = [
  {
    title: "TikiAnaly",
    type: "Sports Analytics Platform",
    year: "Ongoing",
    desc: "A live sports analytics and news platform covering football, basketball, and more — with real-time fixtures, league tables, and a mobile app.",
    tags: ["React", "Node.js", "MongoDB"],
    image: "./tikianaly.png",
    link: "https://www.tikianaly.com/",
    sellingPoints: ["Live Fixtures", "Multi-sport", "Mobile App"],
  },
  {
    title: "CusorCart",
    type: "E-commerce Platform",
    year: "2025",
    desc: "A full-featured e-commerce marketplace built for local businesses — vendor dashboard, waitlist system, and App Store–ready.",
    tags: ["Next.js", "Shadcn UI", "Tailwind"],
    image: "./cusorcart_1.png",
    link: "https://coming.cusorcart.com/",
    sellingPoints: ["Multi-vendor", "App Store Ready", "10% Launch Discount"],
  },
  {
    title: "Approved.",
    type: "Web3 NFT Site",
    year: "2026",
    desc: "A cinematic Web3 minting experience. Bold design, exclusive access flow, and a conversion-first landing page that feels premium.",
    tags: ["Next.js", "Shadcn UI", "Tailwind"],
    image: "./approved_1.png",
    link: "https://www.approvednft.art/",
    sellingPoints: ["Exclusive Access", "Web3 Ready", "Cinematic UX"],
  },
];

// ─── Cinematic Featured Card ──────────────────────────────────────────────────
const FeaturedCard = ({ project, index }) => (
  <motion.a
    href={project.link}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{
      duration: 0.7,
      delay: index * 0.08,
      ease: [0.22, 1, 0.36, 1],
    }}
    whileHover={{ scale: 1.012, rotate: index % 2 === 0 ? -0.4 : 0.4 }}
    className="group relative border-4 border-ink shadow-brutal overflow-hidden block"
    style={{ minHeight: "clamp(340px, 55vw, 500px)" }}
  >
    {/* Full-bleed image */}
    <div className="absolute inset-0">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/65 to-ink/10" />
    </div>

    {/* Top-left: type badge */}
    <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-10 flex gap-2 flex-wrap">
      <span className="bg-accent border-2 border-ink px-2 py-0.5 sm:px-3 sm:py-1 font-sans font-bold text-[10px] sm:text-xs uppercase tracking-widest text-ink shadow-brutal-sm">
        {project.type}
      </span>
    </div>

    {/* Top-right: year */}
    <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10">
      <span className="font-sans font-black text-3xl sm:text-5xl text-white/15 select-none">
        {project.year}
      </span>
    </div>

    {/* Selling-point pills — hidden on mobile, slide in on hover desktop */}
    <div className="hidden sm:flex absolute top-1/2 right-6 -translate-y-1/2 z-10 flex-col gap-3 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
      {project.sellingPoints.map((pt) => (
        <div
          key={pt}
          className="bg-card border-2 border-ink shadow-brutal-sm px-4 py-2 text-right"
        >
          <div className="font-sans font-bold text-sm text-ink leading-tight">
            {pt}
          </div>
        </div>
      ))}
    </div>

    {/* Bottom content */}
    <div className="absolute bottom-0 left-0 right-0 z-10 p-4 sm:p-6 lg:p-8">
      {/* Tag strip — hidden on mobile */}
      <div className="hidden sm:flex gap-2 mb-4 flex-wrap">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="bg-white/10 backdrop-blur-sm border border-white/30 px-3 py-1 font-sans font-bold text-[10px] uppercase tracking-wider text-white"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-6">
        <div className="min-w-0">
          <h3 className="font-sans font-black text-2xl sm:text-4xl lg:text-5xl text-white tracking-tighter leading-none mb-1 sm:mb-2">
            {project.title}
          </h3>
          <p className="hidden sm:block font-sans font-medium text-white/75 text-sm lg:text-base max-w-xl leading-relaxed">
            {project.desc}
          </p>
        </div>
        <span className="self-start sm:self-auto shrink-0 inline-flex items-center gap-1 font-sans text-xs sm:text-sm font-bold uppercase tracking-wider px-4 py-2 sm:px-5 sm:py-2.5 bg-accent border-2 border-ink shadow-brutal-sm text-ink hover:translate-y-[1px] hover:translate-x-[1px] hover:shadow-none transition-all">
          View Project ↗
        </span>
      </div>
    </div>
  </motion.a>
);

// ─── Page ─────────────────────────────────────────────────────────────────────
const ClientProjects = () => {
  return (
    <div className="min-h-screen bg-bg pt-24 sm:pt-32 pb-24 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* ── Header ── */}
        <div className="mb-16 sm:mb-20">
          <Link
            to="/"
            className="inline-block mb-8 font-sans font-bold text-sm uppercase tracking-widest text-ink hover:translate-x-[-4px] transition-transform"
          >
            ← Back to Home
          </Link>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-sans font-bold text-xs uppercase tracking-widest text-accent mb-4"
              >
                Real work. Real clients. Real results.
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 }}
                className="font-sans font-black text-5xl sm:text-7xl lg:text-8xl tracking-tighter text-ink leading-none"
              >
                CLIENT <br />
                <span className="text-accent">PROJECTS</span>
              </motion.h1>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="lg:w-2/5 border-l-4 border-ink pl-6 py-2"
            >
              <p className="font-sans font-medium text-base sm:text-lg text-ink/80 leading-relaxed mb-6">
                Bespoke digital products for startups and businesses across
                Africa and globally. Every project is engineered for
                performance, built to scale, and designed to convert.
              </p>
              <div className="flex flex-wrap gap-4">
                {[
                  "5+ Projects Shipped",
                  "Startups & SMBs",
                  "Africa & Global",
                ].map((t) => (
                  <span
                    key={t}
                    className="flex items-center gap-1.5 font-sans font-bold text-xs uppercase tracking-wide text-ink"
                  >
                    <span className="w-2 h-2 bg-accent border border-ink inline-block" />
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* ── All Featured Cards ── */}
        <div className="space-y-6 mb-16">
          {clientProjects.map((project, i) => (
            <FeaturedCard key={project.title} project={project} index={i} />
          ))}
        </div>

        {/* ── CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="border-4 border-ink shadow-brutal bg-card p-8 sm:p-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8"
        >
          <div>
            <p className="font-sans font-bold text-xs uppercase tracking-widest text-accent mb-3">
              Next on the list?
            </p>
            <h2 className="font-sans font-black text-3xl sm:text-4xl lg:text-5xl text-ink tracking-tighter leading-tight">
              You could be <br className="hidden sm:block" />
              <span className="text-accent">my next case study.</span>
            </h2>
          </div>
          <a
            href="https://calendly.com/abdulrafiu"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-block bg-accent text-ink font-black font-sans text-base sm:text-lg px-8 py-5 border-4 border-ink shadow-brutal hover:translate-y-[4px] hover:translate-x-[4px] hover:shadow-none transition-all uppercase tracking-wide"
          >
            Book a Call →
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default ClientProjects;
