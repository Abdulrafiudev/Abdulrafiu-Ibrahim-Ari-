import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section
      id="contact"
      className="w-full bg-accent text-ink py-32 px-8 border-y-4 border-ink relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 p-8 opacity-20 hidden md:block select-none pointer-events-none">
        <svg
          width="200"
          height="200"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M50 0 L100 50 L50 100 L0 50 Z"
            stroke="#000"
            strokeWidth="4"
          />
          <circle cx="50" cy="50" r="20" fill="#000" />
        </svg>
      </div>

      <div className="absolute bottom-0 left-0 p-8 opacity-20 hidden md:block select-none pointer-events-none">
        <svg
          width="150"
          height="150"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="10"
            y="10"
            width="80"
            height="80"
            stroke="#000"
            strokeWidth="8"
          />
          <line x1="10" y1="10" x2="90" y2="90" stroke="#000" strokeWidth="8" />
        </svg>
      </div>

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="inline-block bg-card px-6 py-2 border-4 border-ink shadow-brutal font-black text-xl uppercase tracking-[0.2em] mb-8 -rotate-2"
        >
          Let's Work
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-sans font-black text-6xl md:text-8xl tracking-tighter text-ink mb-8"
        >
          Ready to build something?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-sans font-bold text-xl md:text-2xl text-ink leading-snug mb-12 max-w-2xl mx-auto bg-card border-4 border-ink p-6 shadow-brutal"
        >
          I have{" "}
          <span className="underline decoration-4 underline-offset-4">
            2 spots open
          </span>{" "}
          for new web app projects. African startups, Web3 projects, and
          international teams — let's talk.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <a
            href="https://cal.com/abdulrafiu-ibrahim-tueost/quick-consultation-call"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-ink text-accent font-sans font-black text-xl md:text-2xl px-12 py-6 border-4 border-ink hover:bg-card hover:text-ink hover:scale-105 hover:-rotate-2 transition-all shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]"
          >
            Book a Call →
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="font-sans font-bold text-base text-ink mt-8 flex flex-col md:flex-row items-center justify-center gap-3"
        >
          <span>You can also reach me via</span>
          <div className="flex items-center gap-2">
            <a
              href="https://x.com/Abdulrafiu_dev"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card px-3 py-1 border-2 border-ink hover:bg-ink hover:text-card transition-colors shadow-brutal-sm"
            >
              Twitter
            </a>
            <span>or</span>
            <a
              href="mailto:abdulrafiu.dev@gmail.com"
              className="bg-card px-3 py-1 border-2 border-ink hover:bg-ink hover:text-card transition-colors shadow-brutal-sm"
            >
              Email
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
