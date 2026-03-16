const Footer = () => {
  return (
    <footer className="bg-bg border-t-8 border-ink py-12 px-8 flex flex-col md:flex-row justify-between items-center gap-8 relative overflow-hidden">
      {/* Brutalist stripe pattern at bottom */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #000 0, #000 2px, transparent 2px, transparent 8px)",
        }}
      ></div>

      <div className="font-sans font-bold text-sm text-ink text-center md:text-left relative z-10 bg-card px-4 py-2 border-2 border-ink shadow-brutal-sm">
        © 2026 Ari (Abdulrafiu Ibrahim). Software Engineer & Tech Creative.
        Nigeria.
      </div>

      <div className="flex gap-4 relative z-10 w-full md:w-auto">
        <a
          href="https://twitter.com/Abdulrafiu_dev"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full md:w-auto text-center font-sans font-black text-sm uppercase tracking-widest text-ink bg-accent px-6 py-3 border-4 border-ink shadow-brutal hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-brutal-sm transition-all"
        >
          Twitter
        </a>
        <a
          href="https://www.linkedin.com/in/abdulrafiu-ibrahim/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full md:w-auto text-center font-sans font-black text-sm uppercase tracking-widest text-ink bg-card px-6 py-3 border-4 border-ink shadow-brutal hover:translate-y-[2px] hover:translate-x-[2px] hover:shadow-brutal-sm hover:bg-accent transition-all"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer;
