import { motion } from "framer-motion";

const SocialMedia = () => {
  const socials = [
    {
      name: "Twitter",
      link: "https://x.com/Abdulrafiu_dev",
      color: "bg-[#1DA1F2]",
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/abdulrafiu-ibrahim/",
      color: "bg-[#0077B5]",
    },
    {
      name: "GitHub",
      link: "https://github.com/Abdulrafiudev",
      color: "bg-[#333]",
    },
    {
      name: "YouTube",
      link: "https://youtube.com/@Ari_dev",
      color: "bg-[#FF0000]",
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/ari__dev",
      color: "bg-[#E1306C]",
    },
    {
      name: "TikTok",
      link: "https://www.tiktok.com/@abdulrafiucodes",
      color: "bg-[#000000]",
    },
  ];

  return (
    <section
      id="socials"
      className="py-24 lg:py-32 px-6 lg:px-12 max-w-7xl mx-auto border-t-4 border-ink relative overflow-visible"
    >
      <div className="absolute top-0 left-6 lg:left-12 -translate-y-1/2 bg-accent px-4 py-1 border-2 border-ink shadow-brutal-sm font-bold text-xs uppercase tracking-widest text-ink z-10">
        Connect
      </div>

      <div className="mt-12">
        <h2 className="font-sans font-black text-4xl lg:text-7xl text-ink tracking-tighter uppercase mb-16">
          Find me on <br /> the internet
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {socials.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`block p-8 border-4 border-ink shadow-brutal hover:translate-y-[-8px] hover:translate-x-[8px] hover:shadow-none transition-all group relative overflow-hidden ${social.color}`}
            >
              <div className="relative z-10 flex items-center justify-between">
                <span className="font-sans font-black text-2xl md:text-3xl text-white uppercase tracking-tighter italic">
                  {social.name}
                </span>
                <span className="text-white text-3xl transition-transform group-hover:translate-x-2 group-hover:-translate-y-2">
                  ↗
                </span>
              </div>

              {/* Brutalist stripe pattern overlay */}
              <div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(45deg, #000 0, #000 2px, transparent 2px, transparent 10px)",
                }}
              ></div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;
