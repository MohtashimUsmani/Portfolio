import React, { useCallback } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaChevronDown, FaGithub, FaLinkedin } from 'react-icons/fa';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import GlowButton from '../components/GlowButton';
import './Hero.css';

const Hero = () => {
  const particlesInit = useCallback(async (engine) => { await loadFull(engine); }, []);

  const pOpts = {
    background: { color: { value: 'transparent' } },
    fpsLimit: 60,
    interactivity: {
      events: { onHover: { enable: true, mode: 'repulse' }, onClick: { enable: true, mode: 'push' } },
      modes:  { repulse: { distance: 90, duration: 0.4 }, push: { quantity: 3 } },
    },
    particles: {
      color: { value: ['#720137','#590054','#FF1744','#AA00FF'] },
      links: { color:'#720137', distance:140, enable:true, opacity:0.16, width:1 },
      move:  { direction:'none', enable:true, outModes:{ default:'bounce' }, speed:0.7 },
      number: { density:{ enable:true, area:900 }, value:55 },
      opacity: { value:0.32, random:{ enable:true, minimumValue:0.1 } },
      shape: { type:'circle' },
      size:  { value:{ min:1, max:3 } },
    },
    detectRetina: true,
  };

  const cV = { hidden:{}, visible:{ transition:{ staggerChildren:0.12, delayChildren:0.3 } } };
  const iV = { hidden:{ opacity:0, y:30 }, visible:{ opacity:1, y:0, transition:{ duration:0.7 } } };

  return (
    <section className="hero" id="hero">
      <Particles id="tsparticles" className="hero__particles" init={particlesInit} options={pOpts} />

      <div className="hero__blob hero__blob--1" />
      <div className="hero__blob hero__blob--2" />
      <div className="hero__blob hero__blob--3" />
      <div className="hero__grid" />
      <div className="hero__scanline" />

      <div className="container hero__container">
        <motion.div className="hero__content" variants={cV} initial="hidden" animate="visible">

          <motion.div className="hero__badge" variants={iV}>
            <span className="hero__badge-dot" /><span>Available for hire</span>
          </motion.div>

          <motion.p className="hero__greeting" variants={iV}>Hello, World! I'm</motion.p>

          <motion.h1 className="hero__name" variants={iV}>
            <span className="hero__name-first">Mohtashim</span><br />
            <span className="hero__name-last">Usmani</span>
          </motion.h1>

          <motion.div className="hero__role" variants={iV}>
            <span className="hero__role-prefix">&gt;_ </span>
            <TypeAnimation
              sequence={['Data Scientist',1800,'Full Stack Developer',1800,'Python Developer',1800,'ML Engineer',1800]}
              wrapper="span" speed={50} repeat={Infinity} className="hero__role-text"
            />
          </motion.div>

          <motion.p className="hero__sub" variants={iV}>
            I build intelligent systems and beautiful interfaces — turning data into decisions and ideas into products.
          </motion.p>

          <motion.div className="hero__actions" variants={iV}>
            <Link to="projects" smooth duration={700} offset={-80}>
              <GlowButton variant="primary">View Projects</GlowButton>
            </Link>
            <Link to="contact" smooth duration={700} offset={-80}>
              <GlowButton variant="outline">Contact Me</GlowButton>
            </Link>
          </motion.div>

          <motion.div className="hero__socials" variants={iV}>
            <a href="https://github.com"   target="_blank" rel="noreferrer" className="hero__social-link"><FaGithub /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hero__social-link"><FaLinkedin /></a>
            <div className="hero__social-line" />
          </motion.div>
        </motion.div>

        <motion.div className="hero__decoration"
          initial={{ opacity:0, scale:0.8 }} animate={{ opacity:1, scale:1 }} transition={{ duration:1, delay:0.8 }}>
          <div className="hero__orb">
            <div className="hero__orb-inner"><span className="hero__orb-text">MU</span></div>
            <div className="hero__orb-ring hero__orb-ring--1" />
            <div className="hero__orb-ring hero__orb-ring--2" />
            <div className="hero__orb-ring hero__orb-ring--3" />
            <div className="hero__orb-dot hero__orb-dot--1" />
            <div className="hero__orb-dot hero__orb-dot--2" />
          </div>
          <div className="hero__code-tag hero__code-tag--1"><code>import sklearn</code></div>
          <div className="hero__code-tag hero__code-tag--2"><code>npm run build</code></div>
          <div className="hero__code-tag hero__code-tag--3"><code>django runserver</code></div>
        </motion.div>
      </div>

      <motion.div className="hero__scroll"
        initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:1.6 }}>
        <span className="hero__scroll-label">Scroll Down</span>
        <Link to="about" smooth duration={700} offset={-80}>
          <div className="hero__scroll-icon"><FaChevronDown /></div>
        </Link>
      </motion.div>
    </section>
  );
};
export default Hero;
