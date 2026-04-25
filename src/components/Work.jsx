import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const staggerContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

// ─── Client Projects Slideshow ────────────────────────────────────────────────
const slides = [
  {
    image: "./tikianaly.png",
    title: "TikiAnaly",
    type: "Sports Analytics Platform",
    link: "https://www.tikianaly.com/",
  },
  {
    image: "./cusorcart_1.png",
    title: "CusorCart",
    type: "E-commerce Platform",
    link: "https://coming.cusorcart.com/",
  },
  {
    image: "./approved_1.png",
    title: "Approved.",
    type: "Web3 NFT Site",
    link: "https://www.approvednft.art/",
  },
];

const ClientShowcase = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  const slide = slides[current];

  return (
    <motion.div
      variants={staggerItem}
      className="bg-card border-4 border-ink shadow-brutal group flex flex-col hover:-translate-y-2 hover:-translate-x-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-300"
    >
      {/* Slideshow image area */}
      <div className="w-full aspect-video border-b-4 border-ink relative overflow-hidden bg-ink">
        <AnimatePresence mode="wait">
          <motion.img
            key={current}
            src={slide.image}
            alt={slide.title}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
        </AnimatePresence>

        {/* Slide label */}
        <div className="absolute bottom-0 left-0 right-0 z-10 px-4 py-3 bg-gradient-to-t from-ink/80 to-transparent flex items-end justify-between">
          <div>
            <AnimatePresence mode="wait">
              <motion.p
                key={`label-${current}`}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.3 }}
                className="font-sans font-black text-white text-base leading-tight"
              >
                {slide.title}
              </motion.p>
            </AnimatePresence>
            <p className="font-sans font-bold text-white/60 text-[10px] uppercase tracking-widest">
              {slide.type}
            </p>
          </div>
          {/* Dot indicators */}
          <div className="flex gap-1.5">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 border border-white/50 transition-all ${i === current ? "bg-accent scale-125 border-accent" : "bg-white/30"}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Card body */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex flex-wrap gap-2 mb-4">
          {["Full-stack", "Web Dev", "UI/UX"].map((tag) => (
            <span
              key={tag}
              className="font-sans font-bold text-xs uppercase tracking-wide bg-card text-ink border-2 border-ink px-2 py-0.5 shadow-brutal-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="font-sans font-bold text-2xl text-ink mb-3 tracking-tight">
          Client Projects
        </h3>
        <p className="font-sans font-medium text-sm text-ink leading-relaxed mb-6 flex-grow">
          Full-stack web applications for startups and businesses. Clean code,
          fast delivery, reliable communication.
        </p>
        <div className="mt-auto">
          <Link
            to="/projects"
            className="inline-flex items-center gap-1 font-sans text-xs font-bold uppercase tracking-wider px-4 py-2 bg-green-400 border-2 border-ink shadow-brutal-sm text-ink hover:translate-y-[1px] hover:translate-x-[1px] hover:shadow-none transition-all"
          >
            View All Projects →
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

const Work = () => {
  const projects = [
    {
      tags: ["Marketplace", "Full-stack"],
      title: "Naija Trade Hub",
      desc: "Africa's Upwork for handymen. Connecting homeowners with verified, professional tradespeople. Technical lead — Next.js, Node.js, MongoDB.",
      status: "Building →",
      statusClass: "bg-accent border-2 border-ink shadow-brutal-sm text-ink",
      imagePlaceholder: "./naijatradehub.png",
      link: "https://www.naijatradehub.ng/",
    },
    {
      tags: ["Fintech", "SaaS"],
      title: "TipMe",
      desc: "Tipping and appreciation payments for Nigerian creatives. Because talented people deserve to get paid for their work.",
      status: "Building →",
      statusClass: "bg-accent border-2 border-ink shadow-brutal-sm text-ink",
      imagePlaceholder: "./tipme.png",
      link: "https://tipme.pxxl.click/",
      sellingPoints: [
        "Nigerian Creators First",
        "Paystack Powered",
        "No Wallets Needed",
      ],
      stats: [
        { value: "100+", label: "Creators" },
        { value: "Paystack", label: "Payment" },
        { value: "Live", label: "Status" },
      ],
    },
    {
      tags: ["Web Development", "Full-stack"],
      title: "Client Projects",
      desc: "Full-stack web applications for startups and businesses. Clean code, fast delivery, reliable communication.",
      status: "Available →",
      statusClass: "bg-green-400 border-2 border-ink shadow-brutal-sm text-ink",
      imagePlaceholder: "client project screenshot",
      link: "/projects",
    },
  ];

  const [naija, tipme, ...rest] = projects;

  return (
    <section
      id="work"
      className="py-16 lg:py-32 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto border-t-4 border-ink relative"
    >
      <div className="absolute top-0 left-6 lg:left-12 -translate-y-1/2 bg-accent px-4 py-1 border-2 border-ink shadow-brutal-sm font-bold text-xs uppercase tracking-widest text-ink z-10">
        Selected work
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mb-14 mt-12"
      >
        <h2 className="font-sans font-bold text-4xl lg:text-5xl text-ink tracking-tight">
          Things I've built
        </h2>
      </motion.div>

      {/* ── FEATURED: Naija Trade Hub ── */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="mb-8"
      >
        <motion.div
          whileHover={{ scale: 1.008, rotate: -0.3 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="group relative bg-card border-4 border-ink shadow-brutal overflow-hidden"
          style={{ minHeight: "clamp(360px, 60vw, 520px)" }}
        >
          {/* Full-bleed image */}
          <div className="absolute inset-0">
            <img
              src={naija.imagePlaceholder}
              alt="Naija Trade Hub"
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
            {/* Gradient overlay — dark at bottom, clear at top */}
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/10" />
          </div>

          {/* Top-left: Tags + status badge */}
          <div className="absolute top-4 left-4 sm:top-6 sm:left-6 flex flex-wrap gap-2 z-10">
            {naija.tags.map((tag, i) => (
              <span
                key={i}
                className="bg-accent border-2 border-ink px-2 py-0.5 sm:px-3 sm:py-1 font-sans font-bold text-[10px] sm:text-xs uppercase tracking-widest text-ink shadow-brutal-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Top-right: index label */}
          <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10">
            <span className="font-sans font-black text-3xl sm:text-5xl text-white/20 select-none">
              01
            </span>
          </div>

          {/* Stat pills — hidden on mobile, slide in on hover on desktop */}
          <div className="hidden sm:flex absolute top-1/2 right-6 -translate-y-1/2 z-10 flex-col gap-3 sm:opacity-0 sm:translate-x-4 sm:group-hover:opacity-100 sm:group-hover:translate-x-0 transition-all duration-500">
            {[
              { value: "250+", label: "Waitlist" },
              { value: "Next.js", label: "Stack" },
              { value: "Live", label: "Status" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-card border-2 border-ink shadow-brutal-sm px-2 py-1 sm:px-4 sm:py-2 text-right"
              >
                <div className="font-sans font-black text-sm sm:text-lg text-ink leading-tight">
                  {stat.value}
                </div>
                <div className="font-sans font-bold text-[9px] sm:text-[10px] uppercase tracking-widest text-muted">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom content */}
          <div className="absolute bottom-0 left-0 right-0 z-10 p-4 sm:p-6 lg:p-8">
            {/* Selling-point strip — hidden on mobile */}
            <div className="hidden sm:flex gap-2 mb-5 overflow-x-auto pb-1 scrollbar-hide">
              {[
                "Africa's #1 Handyman Marketplace",
                "Verified Professionals",
                "Instant Booking",
              ].map((point) => (
                <span
                  key={point}
                  className="shrink-0 bg-white/10 backdrop-blur-sm border border-white/30 px-2 py-1 sm:px-3 font-sans font-bold text-[10px] sm:text-xs uppercase tracking-wider text-white"
                >
                  {point}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-6">
              <div className="min-w-0">
                <h3 className="font-sans font-black text-2xl sm:text-4xl lg:text-6xl text-white tracking-tighter leading-none mb-1 sm:mb-3 truncate">
                  {naija.title}
                </h3>
                <p className="hidden sm:block font-sans font-medium text-white/80 text-base lg:text-lg max-w-xl leading-relaxed">
                  {naija.desc}
                </p>
              </div>
              <a
                href={naija.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`self-start sm:self-auto shrink-0 inline-flex items-center gap-1 font-sans text-xs sm:text-sm font-bold uppercase tracking-wider px-4 py-2 sm:px-6 sm:py-3 hover:translate-y-[1px] hover:translate-x-[1px] hover:shadow-none transition-all cursor-pointer ${naija.statusClass}`}
              >
                {naija.status}
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* ── FEATURED: TipMe ── */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="mb-8"
      >
        <motion.div
          whileHover={{ scale: 1.008, rotate: 0.3 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="group relative bg-card border-4 border-ink shadow-brutal overflow-hidden"
          style={{ minHeight: "clamp(360px, 60vw, 520px)" }}
        >
          {/* Full-bleed image */}
          <div className="absolute inset-0">
            <img
              src={tipme.imagePlaceholder}
              alt="TipMe"
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/5" />
          </div>

          {/* Top-left: Tags */}
          <div className="absolute top-4 left-4 sm:top-6 sm:left-6 flex flex-wrap gap-2 z-10">
            {tipme.tags.map((tag, i) => (
              <span
                key={i}
                className="bg-accent border-2 border-ink px-2 py-0.5 sm:px-3 sm:py-1 font-sans font-bold text-[10px] sm:text-xs uppercase tracking-widest text-ink shadow-brutal-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Top-right: index label */}
          <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10">
            <span className="font-sans font-black text-3xl sm:text-5xl text-white/20 select-none">
              02
            </span>
          </div>

          {/* Stat pills — hidden on mobile, slide in on hover on desktop */}
          <div className="hidden sm:flex absolute top-1/2 right-6 -translate-y-1/2 z-10 flex-col gap-3 sm:opacity-0 sm:translate-x-4 sm:group-hover:opacity-100 sm:group-hover:translate-x-0 transition-all duration-500">
            {tipme.stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-card border-2 border-ink shadow-brutal-sm px-2 py-1 sm:px-4 sm:py-2 text-right"
              >
                <div className="font-sans font-black text-sm sm:text-lg text-ink leading-tight">
                  {stat.value}
                </div>
                <div className="font-sans font-bold text-[9px] sm:text-[10px] uppercase tracking-widest text-muted">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom content */}
          <div className="absolute bottom-0 left-0 right-0 z-10 p-4 sm:p-6 lg:p-8">
            {/* Selling-point strip — hidden on mobile */}
            <div className="hidden sm:flex gap-2 mb-5 overflow-x-auto pb-1 scrollbar-hide">
              {tipme.sellingPoints.map((point) => (
                <span
                  key={point}
                  className="shrink-0 bg-white/10 backdrop-blur-sm border border-white/30 px-2 py-1 sm:px-3 font-sans font-bold text-[10px] sm:text-xs uppercase tracking-wider text-white"
                >
                  {point}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-6">
              <div className="min-w-0">
                <h3 className="font-sans font-black text-2xl sm:text-4xl lg:text-6xl text-white tracking-tighter leading-none mb-1 sm:mb-3 truncate">
                  {tipme.title}
                </h3>
                <p className="hidden sm:block font-sans font-medium text-white/80 text-base lg:text-lg max-w-xl leading-relaxed">
                  {tipme.desc}
                </p>
              </div>
              <a
                href={tipme.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`self-start sm:self-auto shrink-0 inline-flex items-center gap-1 font-sans text-xs sm:text-sm font-bold uppercase tracking-wider px-4 py-2 sm:px-6 sm:py-3 hover:translate-y-[1px] hover:translate-x-[1px] hover:shadow-none transition-all cursor-pointer ${tipme.statusClass}`}
              >
                {tipme.status}
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* ── CLIENT PROJECTS SHOWCASE ── */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        <ClientShowcase />
      </motion.div>
    </section>
  );
};

export default Work;
