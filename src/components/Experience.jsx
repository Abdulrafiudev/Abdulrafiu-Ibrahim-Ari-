import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      company: 'ChatGrow',
      role: 'Frontend Engineer',
      period: 'Feb 2026 – Present',
      type: 'Fulltime Remote',
      responsibilities: [
        'Leading the frontend architecture transformation using React and Next.js.',
        'Optimizing user conversion funnels through a/b testing and data-driven UI refinements.',
        'Implementing high-performance, real-time chat interfaces for scalable startup needs.'
      ]
    },
    {
      company: 'MailGenie',
      role: 'Contract Software Engineer',
      period: 'Nov 2025 – Nov 2025',
      type: 'Contract',
      responsibilities: [
        'Rapidly prototyped and delivered a custom email automation dashboard.',
        'Integrated complex third-party APIs for seamless email deliverability tracking.',
        'Ensured high accessibility standards and responsive design across all devices.'
      ]
    },
    {
      company: 'CursorCart',
      role: 'Frontend Engineer',
      period: 'March 2025 – Dec 2025',
      type: 'Remote',
      responsibilities: [
        'Developed interactive e-commerce components for a seamless shopping experience.',
        'Refactored legacy codebases to modern React standards, improving maintainability by 40%.',
        'Collaborated with designers to implement complex animations and micro-interactions.'
      ]
    },
    {
      company: 'Freelancer',
      role: 'Software Engineer',
      period: 'Jan 2025 – Present',
      type: 'Self-employed',
      responsibilities: [
        'Delivering high-quality full-stack solutions for various startups and entrepreneurs.',
        'Specializing in rapid MVP development and technical consultation for Web3 projects.',
        'Managing end-to-end project lifecycles from discovery to deployment and maintenance.'
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 lg:py-32 px-6 lg:px-12 max-w-7xl mx-auto border-t-4 border-ink relative overflow-visible">
      <div className="absolute top-0 right-6 lg:right-12 -translate-y-1/2 bg-accent px-4 py-1 border-2 border-ink shadow-brutal-sm font-bold text-xs uppercase tracking-widest text-ink z-10">
        Professional Journey
      </div>

      <div className="mt-12">
        <h2 className="font-sans font-black text-4xl lg:text-7xl text-ink tracking-tighter uppercase mb-16">
          Where I've <br /> been working
        </h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${index}`}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative flex flex-col md:flex-row gap-8 items-start md:items-center bg-card border-4 border-ink p-8 shadow-brutal hover:translate-y-[-4px] hover:translate-x-[4px] hover:shadow-none transition-all"
            >
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-4 mb-2">
                  <h3 className="font-sans font-black text-3xl lg:text-4xl text-ink uppercase tracking-tight">
                    {exp.company}
                  </h3>
                  <span className="bg-accent px-3 py-1 border-2 border-ink font-bold text-xs uppercase shadow-brutal-sm">
                    {exp.type}
                  </span>
                </div>
                <div className="font-sans font-bold text-lg text-subtle mb-4">
                  {exp.role} <span className="mx-2 opacity-30">|</span> {exp.period}
                </div>
                <ul className="space-y-3">
                  {exp.responsibilities.map((task, i) => (
                    <li key={i} className="flex gap-3 text-ink/80 font-medium">
                      <span className="text-accent font-black">→</span>
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="hidden lg:block">
                <div className="w-20 h-20 bg-accent-light border-4 border-ink shadow-brutal-sm flex items-center justify-center font-black text-4xl text-ink/20 uppercase transform rotate-6 group-hover:rotate-0 transition-transform">
                  {exp.company[0]}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
