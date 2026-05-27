import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaPython, FaServer, FaBrain } from 'react-icons/fa';
import SectionTitle from '../components/SectionTitle';
import './Experience.css';

const TIMELINE = [
  { year:'2021', icon:<FaCode />,   title:'Started Web Development', org:'Self-Taught',
    desc:'Dived into HTML, CSS, JavaScript and began building responsive websites. Fell in love with creating interactive web experiences.',
    tags:['HTML','CSS','JavaScript','Bootstrap'], side:'left' },
  { year:'2022', icon:<FaPython />, title:'Mastered Python & Django',  org:'Backend Development',
    desc:'Deep-dived into Python and the Django framework. Built REST APIs, worked with ORMs, implemented auth systems and deployed production apps.',
    tags:['Python','Django','REST API','PostgreSQL'], side:'right' },
  { year:'2023', icon:<FaServer />, title:'Built Full Stack Projects',  org:'Freelance & Personal',
    desc:'Combined React frontend with Django backend to build complete full stack applications including Customer Management System.',
    tags:['React','Django','Full Stack','Docker'], side:'left' },
  { year:'2024', icon:<FaBrain />,  title:'Entered Data Science & ML', org:'Data Engineering',
    desc:'Transitioned into data science, mastering ML workflows, data pipelines, and building production grade ML systems for fraud detection.',
    tags:['ML','Pandas','Scikit-learn','NumPy'], side:'right' },
];

const TimelineItem = ({ item, index }) => {
  const isLeft = item.side === 'left';
  return (
    <motion.div className={`timeline-item timeline-item--${item.side}`}
      initial={{ opacity:0, x: isLeft ? -50 : 50 }} whileInView={{ opacity:1, x:0 }}
      viewport={{ once:true, margin:'-60px' }} transition={{ duration:0.6, delay:index*0.1 }}>
      <div className="timeline-card glass-card">
        <div className="timeline-card__header">
          <span className="timeline-card__org">{item.org}</span>
          <span className="timeline-card__year">{item.year}</span>
        </div>
        <h3 className="timeline-card__title">{item.title}</h3>
        <p className="timeline-card__desc">{item.desc}</p>
        <div className="timeline-card__tags">
          {item.tags.map(t => <span key={t} className="timeline-card__tag">{t}</span>)}
        </div>
      </div>
      <div className="timeline-dot">
        <div className="timeline-dot__icon">{item.icon}</div>
        <div className="timeline-dot__pulse" />
      </div>
      <div className="timeline-spacer" />
    </motion.div>
  );
};

const Experience = () => (
  <section className="experience section" id="experience">
    <div className="container">
      <SectionTitle eyebrow="My Journey" title="Experience Timeline"
        subtitle="The milestones that shaped me into the developer and data scientist I am today." />
      <div className="timeline">
        <div className="timeline__line">
          <motion.div className="timeline__line-fill"
            initial={{ scaleY:0 }} whileInView={{ scaleY:1 }}
            viewport={{ once:true }} transition={{ duration:1.2 }} />
        </div>
        {TIMELINE.map((item, i) => <TimelineItem key={item.year} item={item} index={i} />)}
      </div>
    </div>
    <div className="experience__blob" />
  </section>
);
export default Experience;
