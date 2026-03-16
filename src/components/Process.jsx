import { motion } from 'framer-motion';

const staggerContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 }
  }
};

const staggerItem = {
  hidden: { opacity: 0, y: 24, x: -10 },
  show: { opacity: 1, y: 0, x: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
};

const Process = () => {
  const steps = [
    {
      num: "01",
      title: "Discovery Call",
      desc: "30 minutes, free. I learn about your problem, your users, and what success looks like. This conversation shapes everything."
    },
    {
      num: "02",
      title: "Scope Document",
      desc: "Before any code: a clear document covering what we're building, what we're not building, the tech stack, timeline, and price. No surprises."
    },
    {
      num: "03",
      title: "Pricing",
      desc: "Per project, not per hour. You know exactly what you're committing to before we start. Clean, predictable, professional."
    },
    {
      num: "04",
      title: "Weekly Check-ins",
      desc: "Every week: what got done, what's next, and any decisions I need from you. You never have to chase me for updates."
    },
    {
      num: "05",
      title: "Staging Review",
      desc: "Before launch, you get a live staging link to review and test. Feedback here is free. Feedback after launch costs more."
    },
    {
      num: "06",
      title: "Launch & Handover",
      desc: "After launch: a recorded codebase walkthrough, documentation, and 2 weeks of free bug fixes. You own everything."
    }
  ];

  return (
    <section id="process" className="py-24 lg:py-32 px-6 lg:px-12 max-w-7xl mx-auto border-t-4 border-ink relative">
      
      <div className="absolute top-0 left-6 lg:left-12 -translate-y-1/2 bg-accent px-4 py-1 border-2 border-ink shadow-brutal-sm font-bold text-xs uppercase tracking-widest text-ink z-10">
        How I Work
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mb-14 mt-12 max-w-2xl"
      >
        <h2 className="font-sans font-bold text-4xl lg:text-5xl text-ink tracking-tight mb-4">How I work with clients</h2>
        <p className="font-sans font-medium text-lg text-ink bg-accent-light inline-block px-2">From first conversation to shipped product — here's exactly what to expect.</p>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-col md:flex-row gap-8 overflow-x-auto pb-8 scrollbar-hide md:min-h-0 min-h-full px-2 pt-2 -mx-2"
      >
        {steps.map((step, index) => (
          <motion.div
            key={index}
            variants={staggerItem}
            className="md:min-w-[320px] w-full bg-card border-4 border-ink shadow-brutal p-8 relative hover:-translate-y-2 hover:-translate-x-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 group"
          >
            <div className="absolute top-4 right-4 font-sans font-black text-4xl lg:text-6xl text-ink/10 leading-none select-none group-hover:text-accent transition-colors">
              {step.num}
            </div>
            
            <div className="w-12 h-12 bg-accent border-2 border-ink mb-6 flex items-center justify-center font-bold text-ink shadow-brutal-sm">
              {step.num}
            </div>
            
            <h3 className="font-sans font-bold text-xl text-ink mb-4 relative z-10">{step.title}</h3>
            
            <p className="font-sans text-sm font-medium text-ink leading-relaxed relative z-10 pt-4 border-t-2 border-ink border-dashed">
              {step.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>

    </section>
  );
};

export default Process;
