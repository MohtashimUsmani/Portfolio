import React, { useEffect, useRef } from 'react';
import './App.css';
import Navbar     from './components/Navbar';
import Hero       from './sections/Hero';
import About      from './sections/About';
import Skills     from './sections/Skills';
import Projects   from './sections/Projects';
import Experience from './sections/Experience';
import Contact    from './sections/Contact';
import Footer     from './sections/Footer';

function App() {
  const dotRef  = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot  = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;
    let mouseX = 0, mouseY = 0, ringX = 0, ringY = 0, rafId;
    const onMove = (e) => {
      mouseX = e.clientX; mouseY = e.clientY;
      dot.style.left = mouseX + 'px'; dot.style.top = mouseY + 'px';
    };
    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.12; ringY += (mouseY - ringY) * 0.12;
      ring.style.left = ringX + 'px'; ring.style.top = ringY + 'px';
      rafId = requestAnimationFrame(animateRing);
    };
    document.addEventListener('mousemove', onMove);
    animateRing();
    return () => { document.removeEventListener('mousemove', onMove); cancelAnimationFrame(rafId); };
  }, []);

  return (
    <div className="app">
      <div id="cursor-dot"  ref={dotRef}  />
      <div id="cursor-ring" ref={ringRef} />
      <div className="noise-overlay" />
      <Navbar />
      <main>
        <Hero /><About /><Skills /><Projects /><Experience /><Contact />
      </main>
      <Footer />
    </div>
  );
}
export default App;
