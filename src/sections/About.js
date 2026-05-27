import React from 'react';
import { motion } from 'framer-motion';
import { FaPython, FaReact, FaDatabase, FaBrain, FaChartLine, FaCode } from 'react-icons/fa';
import { SiDjango } from 'react-icons/si';
import SectionTitle from '../components/SectionTitle';
import './About.css';

const STATS = [
  { value:'3+',  label:'Years Experience' },
  { value:'15+', label:'Projects Built'   },
  { value:'5+',  label:'ML Models'        },
  { value:'10+', label:'Tech Stack'        },
];
const HIGHLIGHTS = [
  { icon:<FaPython />,    label:'Python Expert'    },
  { icon:<FaBrain />,     label:'Machine Learning' },
  { icon:<FaReact />,     label:'React Frontend'   },
  { icon:<SiDjango />,    label:'Django Backend'   },
  { icon:<FaDatabase />,  label:'Database Design'  },
  { icon:<FaChartLine />, label:'Data Analytics'   },
];

const About = () => (
  <section className="about section" id="about">
    <div className="container">
      <SectionTitle eyebrow="Who I Am" title="About Me"
        subtitle="Passionate about turning complex data into actionable insights and building full-stack applications that make a difference." />
      <div className="about__grid">
        <motion.div className="about__bio glass-card"
          initial={{ opacity:0, x:-40 }} whileInView={{ opacity:1, x:0 }}
          viewport={{ once:true }} transition={{ duration:0.65 }}>
          <div className="about__bio-tag"><FaCode className="about__bio-icon" /><span>Bio</span></div>
          <h3 className="about__bio-heading">Building the Future with<br /><span className="about__bio-highlight">Data &amp; Code</span></h3>
          <p className="about__bio-text">I'm <strong>Mohtashim Usmani</strong> a Data Scientist, Full Stack Web Developer, and Python enthusiast with a deep passion for building intelligent systems.</p>
          <p className="about__bio-text">From training machine learning models to architecting full stack web applications with Django and React, I bridge the gap between data and user experience.</p>
          <p className="about__bio-text">I'm always learning, always building whether it's a fraud detection system, a data analytics dashboard, or an AI-powered portfolio.</p>
          <div className="about__highlights">
            {HIGHLIGHTS.map(({ icon, label }, i) => (
              <motion.div key={label} className="about__highlight-item"
                initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true }} transition={{ delay:i*0.07 }}>
                <span className="about__highlight-icon">{icon}</span>
                <span className="about__highlight-label">{label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="about__right">
          <div className="about__stats">
            {STATS.map(({ value, label }, i) => (
              <motion.div key={label} className="about__stat glass-card"
                initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true }} transition={{ delay:i*0.1 }}
                whileHover={{ scale:1.05, y:-4 }}>
                <span className="about__stat-value">{value}</span>
                <span className="about__stat-label">{label}</span>
              </motion.div>
            ))}
          </div>
          <motion.div className="about__terminal glass-card"
            initial={{ opacity:0, x:40 }} whileInView={{ opacity:1, x:0 }}
            viewport={{ once:true }} transition={{ duration:0.65, delay:0.3 }}>
            <div className="about__terminal-bar">
              <span className="about__terminal-dot about__terminal-dot--red"   />
              <span className="about__terminal-dot about__terminal-dot--yellow"/>
              <span className="about__terminal-dot about__terminal-dot--green" />
              <span className="about__terminal-title">mohtashim@portfolio ~</span>
            </div>
            <div className="about__terminal-body">
              <p><span className="t-prompt">$</span> python --version</p>
              <p className="t-output">Python 3.11.4</p>
              <p><span className="t-prompt">$</span> cat skills.json</p>
              <p className="t-output">{'{'}</p>
              <p className="t-output">&nbsp;&nbsp;"role": "Data Scientist",</p>
              <p className="t-output">&nbsp;&nbsp;"stack": ["Django","React","ML"],</p>
              <p className="t-output">&nbsp;&nbsp;"available": <span className="t-green">true</span></p>
              <p className="t-output">{'}'}</p>
              <p><span className="t-prompt">$</span> <span className="t-cursor">█</span></p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
    <div className="about__blob about__blob--1" />
    <div className="about__blob about__blob--2" />
  </section>
);
export default About;
