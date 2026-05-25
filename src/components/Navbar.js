import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'Home',       to: 'hero'       },
  { label: 'About',      to: 'about'      },
  { label: 'Skills',     to: 'skills'     },
  { label: 'Projects',   to: 'projects'   },
  { label: 'Experience', to: 'experience' },
  { label: 'Contact',    to: 'contact'    },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active,   setActive]   = useState('hero');

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0,   opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="navbar__inner container">

        {/* Logo */}
        <Link to="hero" smooth duration={700} className="navbar__logo">
          <span className="navbar__logo-code">&lt;/&gt;</span>
          <span className="navbar__logo-mu">MU</span>
          <span className="navbar__logo-dot">.</span>
        </Link>

        {/* Desktop links */}
        <ul className="navbar__links">
          {NAV_LINKS.map(({ label, to }) => (
            <li key={to}>
              <Link to={to} smooth duration={700} offset={-80} spy
                onSetActive={() => setActive(to)}
                className={`navbar__link ${active === to ? 'navbar__link--active' : ''}`}
              >
                {label}<span className="navbar__link-bar" />
              </Link>
            </li>
          ))}
        </ul>

        <Link to="contact" smooth duration={700} offset={-80} className="navbar__cta">Hire Me</Link>

        <button className="navbar__hamburger" onClick={() => setMenuOpen(v => !v)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div className="navbar__mobile"
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ duration: 0.32 }}
          >
            <ul className="navbar__mobile-links">
              {NAV_LINKS.map(({ label, to }, i) => (
                <motion.li key={to}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <Link to={to} smooth duration={700} offset={-80}
                    className="navbar__mobile-link"
                    onClick={() => setMenuOpen(false)}
                  >
                    <span className="navbar__mobile-num">0{i + 1}.</span>{label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
