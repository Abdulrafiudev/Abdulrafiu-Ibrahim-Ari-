import { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Process from './components/Process';
import Work from './components/Work';
import SocialMedia from './components/SocialMedia';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const requestRef = useRef(null);

  useEffect(() => {
    const onMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0) translate(-50%, -50%)`;
      }
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    const lerp = (start, end, factor) => {
      return start + (end - start) * factor;
    };

    const animate = () => {
      ringPos.current.x = lerp(ringPos.current.x, mousePos.current.x, 0.15);
      ringPos.current.y = lerp(ringPos.current.y, mousePos.current.y, 0.15);

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%) scale(${isHovering ? 2.5 : 1})`;
      }

      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(requestRef.current);
    };
  }, [isHovering]);

  return (
    <>
      <div 
        ref={dotRef}
        className="fixed top-0 left-0 w-3 h-3 rounded-full pointer-events-none z-[9999]"
        style={{ 
          backgroundColor: '#000000'
        }}
      />
      <div 
        ref={ringRef}
        className="fixed top-0 left-0 w-8 h-8 border-2 rounded-full pointer-events-none z-[9999] transition-transform duration-75 ease-out"
        style={{ 
          borderColor: '#000000'
        }}
      />
    </>
  );
};

const MainPortfolio = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-bg min-h-screen pt-20"
    >
      <Hero />
      <About />
      <Experience />
      <Process />
      <Work />
      <SocialMedia />
      <CTA />
    </motion.main>
  );
};

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set loading to false after a timeout if you want to handle Preloader state from here
    // But Preloader.jsx currently handles its own timeout/exit.
    // However, we want to make sure App is solid.
  }, []);

  return (
    <Router>
      <div className="bg-bg selection:bg-accent selection:text-ink overflow-x-hidden">
        <AnimatePresence>
          {loading && <Preloader key="preloader" />}
        </AnimatePresence>

        <CustomCursor />
        <Navbar />

        <Routes>
          <Route path="/" element={<MainPortfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
