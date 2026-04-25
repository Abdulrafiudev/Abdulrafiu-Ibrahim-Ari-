import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div className="min-h-screen bg-bg flex flex-col items-center justify-center px-4 sm:px-6 relative overflow-hidden">
      {/* Background decorative grid lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, #000 0, #000 1px, transparent 1px, transparent 60px), repeating-linear-gradient(90deg, #000 0, #000 1px, transparent 1px, transparent 60px)",
        }}
      />

      {/* Decorative accent block top-left */}
      <div className="absolute top-12 left-6 lg:left-12 w-16 h-16 bg-accent border-4 border-ink shadow-brutal hidden sm:block" />
      {/* Decorative block bottom-right */}
      <div className="absolute bottom-12 right-6 lg:right-12 w-10 h-10 bg-ink hidden sm:block" />

      <div className="relative z-10 max-w-2xl w-full text-center">
        {/* Tag */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block bg-accent border-2 border-ink px-4 py-1 font-sans font-bold text-xs uppercase tracking-widest text-ink shadow-brutal-sm mb-8"
        >
          Blog
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-sans font-black text-6xl sm:text-8xl lg:text-9xl text-ink tracking-tighter leading-none uppercase mb-6"
        >
          Coming
          <br />
          <span className="text-accent">Soon.</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-sans font-medium text-lg text-ink/70 leading-relaxed mb-12 max-w-md mx-auto"
        >
          I'm putting my thoughts on software, startups, building in Africa, and
          my life journey into words. Check back soon.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link
            to="/"
            className="inline-block bg-ink text-bg font-black font-sans text-sm uppercase tracking-widest px-8 py-4 border-4 border-ink shadow-brutal hover:translate-y-[4px] hover:translate-x-[4px] hover:shadow-none transition-all"
          >
            ← Back to Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Blog;
