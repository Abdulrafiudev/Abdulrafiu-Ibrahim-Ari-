import { motion } from "framer-motion";

const Hero = () => {
  const headline =
    "I build web apps that help African Startups & Web3 projects grow.";
  const words = headline.split(" ");

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center pt-24 pb-12 px-6 lg:px-12 max-w-7xl mx-auto">
      <div className="w-full grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8 items-center border-t-4 border-ink pt-12 mt-12">
        {/* Left Column */}
        <div className="lg:col-span-3 flex flex-col items-start text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="inline-block bg-accent px-4 py-2 border-2 border-ink font-bold font-sans text-xs uppercase tracking-widest text-ink mb-6 shadow-brutal-sm"
          >
            Software Engineer & Tech Creative
          </motion.div>

          <h1 className="font-sans font-bold text-5xl lg:text-7xl tracking-tight text-ink leading-[1.1] mb-8">
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.3 + i * 0.04,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="inline-block mr-[0.25em]"
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-sans font-medium text-lg text-ink leading-relaxed mb-10 max-w-xl"
          >
            Software Engineer. Tech Creative. Building Naija Trade Hub & TipMe.
            Kwasu OBGS '25.
          </motion.p>

          <div className="flex flex-wrap items-center gap-6 mb-12">
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              onClick={() => scrollToSection("work")}
              className="bg-accent text-ink font-bold font-sans text-sm px-8 py-4 border-2 border-ink shadow-brutal hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-brutal-sm transition-all"
            >
              See my work →
            </motion.button>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              onClick={() => scrollToSection("contact")}
              className="bg-card text-ink font-bold font-sans text-sm px-8 py-4 border-2 border-ink shadow-brutal hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-brutal-sm transition-all"
            >
              Let's talk
            </motion.button>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            className="font-sans font-bold text-xs text-ink flex items-center gap-3 bg-card border-2 border-ink px-4 py-2 shadow-brutal-sm"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 border border-ink animate-pulse"></span>
            Building @Naija_Trade_Hub · @go_tipme · @Abdulrafiu_dev
          </motion.div>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-2 w-full max-w-sm mx-auto lg:max-w-none">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="aspect-[3/4] bg-card border-4 border-ink shadow-brutal relative overflow-hidden group"
          >
            <img
              src="./portfolio-hero.jpg"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Decorative brutalist corner */}
            <div className="absolute top-0 right-0 w-12 h-12 bg-accent border-b-4 border-l-4 border-ink flex items-center justify-center font-bold">
              ✨
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
