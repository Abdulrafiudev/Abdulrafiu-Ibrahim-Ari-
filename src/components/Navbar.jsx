import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = isHome
    ? ["about", "experience", "process", "work", "socials"]
    : [];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b-4 border-ink ${
        scrolled ? "bg-bg py-4 shadow-brutal" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="font-sans font-black text-2xl text-ink tracking-tight bg-accent px-4 py-1 border-2 border-ink shadow-brutal-sm hover:-rotate-2 transition-transform scale-110 md:scale-100"
          onClick={() => {
            if (isHome) window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          Ari.
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="font-sans font-black text-xs text-ink uppercase tracking-widest hover:text-accent transition-colors relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-accent transition-all group-hover:w-full"></span>
            </a>
          ))}
          <Link
            to="/blog"
            className={`font-sans font-black text-xs text-ink uppercase tracking-widest hover:text-accent transition-colors relative group ${location.pathname.startsWith("/blog") ? "text-accent" : ""}`}
          >
            Blog
            <span
              className={`absolute -bottom-1 left-0 h-1 bg-accent transition-all group-hover:w-full ${location.pathname.startsWith("/blog") ? "w-full" : "w-0"}`}
            ></span>
          </Link>
          <a
            href="mailto:abdulrafiu.dev@gmail.com"
            className="bg-ink text-card px-8 py-3 border-4 border-ink font-sans font-black text-xs uppercase tracking-widest hover:bg-card hover:text-ink transition-all shadow-brutal active:translate-y-1 active:shadow-none"
          >
            Mail me
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden bg-card p-3 border-4 border-ink shadow-brutal-sm"
        >
          <div className="w-6 h-1 bg-ink mb-1 transition-all"></div>
          <div className="w-4 h-1 bg-ink mb-1"></div>
          <div className="w-6 h-1 bg-ink"></div>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-accent z-[60] flex flex-col p-8 pt-32"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-8 right-8 bg-card px-6 py-2 border-4 border-ink font-black shadow-brutal"
            >
              CLOSE
            </button>

            <div className="flex flex-col gap-10">
              {isHome &&
                navItems.map((item) => (
                  <a
                    key={item}
                    href={`#${item}`}
                    onClick={() => setIsOpen(false)}
                    className="font-sans font-black text-5xl text-ink uppercase tracking-tighter hover:italic transition-all"
                  >
                    {item}
                  </a>
                ))}
              {!isHome && (
                <Link
                  to="/"
                  onClick={() => setIsOpen(false)}
                  className="font-sans font-black text-5xl text-ink uppercase tracking-tighter hover:italic transition-all"
                >
                  Home
                </Link>
              )}
              <Link
                to="/blog"
                onClick={() => setIsOpen(false)}
                className="font-sans font-black text-5xl text-ink uppercase tracking-tighter hover:italic transition-all italic text-white"
              >
                Blog
              </Link>
              <a
                href="mailto:hello@ari.dev"
                onClick={() => setIsOpen(false)}
                className="bg-ink text-card p-8 border-4 border-ink font-sans font-black text-3xl uppercase tracking-widest shadow-brutal text-center mt-8 rotate-1 active:rotate-0"
              >
                Let's Talk
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
