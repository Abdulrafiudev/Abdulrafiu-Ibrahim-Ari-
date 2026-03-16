import { useEffect, useState, useRef } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';

const CountUp = ({ to, suffix = "", duration = 1.5 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  
  useEffect(() => {
    if (inView) {
      animate(count, to, { duration: duration, ease: "easeOut" });
    }
  }, [inView, count, to, duration]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

const StaticCountUp = ({ text }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <span ref={ref} className={`transition-opacity duration-1000 ${inView ? 'opacity-100' : 'opacity-0'}`}>
      {text}
    </span>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 lg:py-32 px-6 lg:px-12 max-w-7xl mx-auto border-t-4 border-ink relative">
      
      {/* Decorative tag on border */}
      <div className="absolute top-0 left-6 lg:left-12 -translate-y-1/2 bg-accent px-4 py-1 border-2 border-ink shadow-brutal-sm font-bold text-xs uppercase tracking-widest text-ink">
        About me
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mt-12">
        
        {/* Left column */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="font-sans font-bold text-4xl lg:text-5xl text-ink tracking-tight mb-8">
            I build software. I tell stories. I ship products.
          </h2>
          
          <div className="bg-card border-4 border-ink p-8 shadow-brutal relative">
            <p className="font-sans text-base text-ink font-medium leading-relaxed mb-6">
              I'm Abdulrafiu Ibrahim (Ari) — a Software Engineer and Tech Creative based in Nigeria. I build full-stack web applications for African startups and Web3 projects, and I document the entire journey for a growing audience of builders and founders.
            </p>
            
            <p className="font-sans text-base text-ink font-medium leading-relaxed mb-6">
              I work with clients in bringing their ideas to life. I build products, write threads, make videos, and reach out to the right people every week.
            </p>
            
            <p className="font-sans text-base text-ink font-medium leading-relaxed">
              I'm currently the technical lead on two products: <span className="font-bold underline decoration-2 underline-offset-2">Naija Trade Hub</span> — a marketplace connecting African homeowners with verified handymen — and <span className="font-bold underline decoration-2 underline-offset-2">TipMe</span>, a tipping platform for Nigerian creatives. Both are in active development and growing.
            </p>

            {/* Decorative dots corner */}
            <div className="absolute -bottom-4 -right-4 w-8 h-8 grid grid-cols-2 gap-1 opacity-20 hidden md:grid">
              <div className="w-full h-full bg-ink rounded-full"></div>
              <div className="w-full h-full bg-ink rounded-full"></div>
              <div className="w-full h-full bg-ink rounded-full"></div>
              <div className="w-full h-full bg-ink rounded-full"></div>
            </div>
          </div>
        </motion.div>

        {/* Right column - Stats grid */}
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-accent-light border-4 border-ink shadow-brutal p-6 hover:-translate-y-1 hover:translate-x-1 hover:shadow-brutal-sm transition-all">
            <div className="font-sans font-bold text-5xl md:text-6xl text-ink mb-2">
              <CountUp to={2} />
            </div>
            <div className="font-sans font-bold uppercase tracking-wide text-xs text-ink md:text-sm pt-2 border-t-2 border-ink">Products in development</div>
          </div>
          
          <div className="bg-accent-light border-4 border-ink shadow-brutal p-6 hover:-translate-y-1 hover:translate-x-1 hover:shadow-brutal-sm transition-all">
            <div className="font-sans font-bold text-5xl md:text-6xl text-ink mb-2">
              <CountUp to={3} /><StaticCountUp text="+" />
            </div>
            <div className="font-sans font-bold uppercase tracking-wide text-xs text-ink md:text-sm pt-2 border-t-2 border-ink">Years building</div>
          </div>
          
          <div className="bg-accent-light border-4 border-ink shadow-brutal p-6 hover:-translate-y-1 hover:translate-x-1 hover:shadow-brutal-sm transition-all col-span-2">
            <div className="font-sans font-bold text-5xl md:text-6xl text-ink mb-2">
              <CountUp to={2} /><StaticCountUp text="x" />
            </div>
            <div className="font-sans font-bold uppercase tracking-wide text-xs text-ink md:text-sm pt-2 border-t-2 border-ink">Posts per week</div>
          </div>
        </div>
      </div>

      {/* Tech Stack Section */}
      <div className="mt-24 border-4 border-ink bg-card p-8 md:p-12 shadow-brutal relative">
        <div className="absolute top-0 right-12 -translate-y-1/2 bg-accent px-4 py-1 border-2 border-ink shadow-brutal-sm font-bold text-xs uppercase tracking-widest text-ink">
          Tech Stack
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Languages */}
          <div>
            <h3 className="font-sans font-black text-xl text-ink mb-6 uppercase tracking-tight border-b-4 border-ink inline-block">Languages</h3>
            <div className="flex flex-wrap gap-2">
              {['Python', 'JavaScript', 'C#', 'TypeScript', 'SQL'].map((tech) => (
                <span key={tech} className="bg-accent-light px-3 py-1 border-2 border-ink font-bold text-sm shadow-brutal-sm">{tech}</span>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div>
            <h3 className="font-sans font-black text-xl text-ink mb-6 uppercase tracking-tight border-b-4 border-ink inline-block">Backend</h3>
            <div className="flex flex-wrap gap-2">
              {['Node.js', 'Express.js', 'Nest.js', 'Django', 'Microservices', 'REST APIs'].map((tech) => (
                <span key={tech} className="bg-accent-light px-3 py-1 border-2 border-ink font-bold text-sm shadow-brutal-sm">{tech}</span>
              ))}
            </div>
          </div>

          {/* Frontend */}
          <div>
            <h3 className="font-sans font-black text-xl text-ink mb-6 uppercase tracking-tight border-b-4 border-ink inline-block">Frontend</h3>
            <div className="flex flex-wrap gap-2">
              {['React', 'Next.js', 'Astro.js', 'Angular', 'HTML5 & CSS3', 'TailwindCSS', 'Sass/SCSS'].map((tech) => (
                <span key={tech} className="bg-accent-light px-3 py-1 border-2 border-ink font-bold text-sm shadow-brutal-sm">{tech}</span>
              ))}
            </div>
          </div>

          {/* Databases */}
          <div>
            <h3 className="font-sans font-black text-xl text-ink mb-6 uppercase tracking-tight border-b-4 border-ink inline-block">Databases</h3>
            <div className="flex flex-wrap gap-2">
              {['MySQL', 'PostgreSQL', 'MongoDB', 'Firebase'].map((tech) => (
                <span key={tech} className="bg-accent-light px-3 py-1 border-2 border-ink font-bold text-sm shadow-brutal-sm">{tech}</span>
              ))}
            </div>
          </div>

          {/* DevOps & Tools */}
          <div className="md:col-span-2 lg:col-span-1">
            <h3 className="font-sans font-black text-xl text-ink mb-6 uppercase tracking-tight border-b-4 border-ink inline-block">DevOps & Tools</h3>
            <div className="flex flex-wrap gap-2">
              {['AWS', 'Docker', 'CI/CD', 'Git & GitHub'].map((tech) => (
                <span key={tech} className="bg-accent-light px-3 py-1 border-2 border-ink font-bold text-sm shadow-brutal-sm">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
