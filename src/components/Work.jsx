import { motion } from "framer-motion";
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

const Work = () => {
  const projects = [
    {
      tags: ["Marketplace", "Full-stack"],
      title: "Naija Trade Hub",
      desc: "Africa's Upwork for handymen. Connecting homeowners with verified, professional tradespeople. Technical lead — Next.js, Node.js, MongoDB.",
      status: "Building →",
      statusClass: "bg-accent border-2 border-ink shadow-brutal-sm text-ink",
      imagePlaceholder: "./naijatradehub.png",
    },
    {
      tags: ["Fintech", "SaaS"],
      title: "TipMe",
      desc: "Tipping and appreciation payments for Nigerian creatives. Because talented people deserve to get paid for their work.",
      status: "Building →",
      statusClass: "bg-accent border-2 border-ink shadow-brutal-sm text-ink",
      imagePlaceholder: "TipMe screenshot",
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

  return (
    <section
      id="work"
      className="py-24 lg:py-32 px-6 lg:px-12 max-w-7xl mx-auto border-t-4 border-ink relative"
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

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={staggerItem}
            className="bg-card border-4 border-ink shadow-brutal group flex flex-col hover:-translate-y-2 hover:-translate-x-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-300"
          >
            <div className="w-full aspect-video bg-subtle border-b-4 border-ink relative overflow-hidden">
              {/* REPLACE: ${project.imagePlaceholder} */}
              {/* <img
                src={project.imagePlaceholder}
                alt=""
                className="w-full h-full object-contain"
              /> */}
              <div className="absolute inset-0 bg-ink/5 flex items-center justify-center font-bold text-ink/50 group-hover:bg-transparent transition-colors duration-300">
                Image Placeholder
              </div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="font-sans font-bold text-xs uppercase tracking-wide bg-card text-ink border-2 border-ink px-2 py-0.5 shadow-brutal-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="font-sans font-bold text-2xl text-ink mb-3 tracking-tight">
                {project.title}
              </h3>
              <p className="font-sans font-medium text-sm text-ink leading-relaxed mb-6 flex-grow">
                {project.desc}
              </p>

              <div className="mt-auto">
                {project.link ? (
                  <Link
                    to={project.link}
                    className={`inline-flex items-center gap-1 font-sans text-xs font-bold uppercase tracking-wider px-4 py-2 hover:translate-y-[1px] hover:translate-x-[1px] hover:shadow-none transition-all cursor-pointer ${project.statusClass}`}
                  >
                    {project.status}
                  </Link>
                ) : (
                  <span
                    className={`inline-flex items-center gap-1 font-sans text-xs font-bold uppercase tracking-wider px-4 py-2 hover:translate-y-[1px] hover:translate-x-[1px] hover:shadow-none transition-all cursor-pointer ${project.statusClass}`}
                  >
                    {project.status}
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Work;
