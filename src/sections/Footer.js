import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa';
import './Footer.css';

const LINKS   = ['about','skills','projects','experience','contact'];
const SOCIALS = [
  { icon:<FaGithub />,   href:'https://github.com',   label:'GitHub'   },
  { icon:<FaLinkedin />, href:'https://linkedin.com', label:'LinkedIn' },
  { icon:<FaTwitter />,  href:'https://twitter.com',  label:'Twitter'  },
];

const Footer = () => (
  <footer className="footer">
    <div className="footer__top-line" />
    <div className="container footer__inner">
      <div className="footer__brand">
        <div className="footer__logo">
          <span className="footer__logo-code">&lt;/&gt;</span>
          <span className="footer__logo-name">Mohtashim Usmani</span>
        </div>
        <p className="footer__tagline">Data Scientist · Full Stack Developer · Python Developer</p>
        <div className="footer__status"><span className="footer__status-dot" /><span>Open to opportunities</span></div>
      </div>
      <nav className="footer__nav">
        <p className="footer__nav-title">Navigation</p>
        <ul className="footer__nav-list">
          {LINKS.map(to => (
            <li key={to}>
              <Link to={to} smooth duration={700} offset={-80} className="footer__nav-link">
                {to.charAt(0).toUpperCase() + to.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="footer__connect">
        <p className="footer__nav-title">Connect</p>
        <div className="footer__socials">
          {SOCIALS.map(({ icon, href, label }) => (
            <motion.a key={label} href={href} target="_blank" rel="noopener noreferrer"
              className="footer__social" aria-label={label}
              whileHover={{ scale:1.15, y:-3 }} transition={{ type:'spring', stiffness:400 }}>
              {icon}
            </motion.a>
          ))}
        </div>
        <p className="footer__contact-cta">Want to work together?<br />
          <a href="mailto:mohtashim@email.com" className="footer__email">mohtashim@email.com</a>
        </p>
      </div>
    </div>
    <div className="footer__bottom">
      <div className="container footer__bottom-inner">
        <p className="footer__copy">© {new Date().getFullYear()} Mohtashim Usmani. All rights reserved.</p>
        <p className="footer__made">Built with <FaHeart className="footer__heart" /> using React</p>
      </div>
    </div>
  </footer>
);
export default Footer;
