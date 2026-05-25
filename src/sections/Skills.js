import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { FaPython, FaReact, FaDatabase, FaChartBar, FaJs } from 'react-icons/fa';
import { SiDjango, SiPandas, SiNumpy, SiScikitlearn, SiPostgresql, SiFastapi, SiTensorflow, SiDocker } from 'react-icons/si';
import SectionTitle from '../components/SectionTitle';
import './Skills.css';

const SKILLS = [
  { icon:<FaPython />,       name:'Python',           level:95, category:'Language',  color:'#3776AB', desc:'Primary language for DS, automation & backends.' },
  { icon:<SiDjango />,       name:'Django',           level:90, category:'Framework', color:'#44B78B', desc:'REST APIs, auth, admin, ORM — full backend mastery.' },
  { icon:<FaReact />,        name:'React',            level:85, category:'Frontend',  color:'#61DAFB', desc:'Component-based UIs, hooks, state management.' },
  { icon:<FaJs />,           name:'JavaScript',       level:82, category:'Language',  color:'#F7DF1E', desc:'ES6+, async/await, DOM manipulation.' },
  { icon:<SiPostgresql />,   name:'PostgreSQL',       level:85, category:'Database',  color:'#336791', desc:'Complex queries, indexing, schema design.' },
  { icon:<SiScikitlearn />,  name:'Machine Learning', level:88, category:'AI / ML',   color:'#F89939', desc:'Supervised & unsupervised models.' },
  { icon:<SiPandas />,       name:'Pandas',           level:92, category:'Data',      color:'#7E57C2', desc:'Data wrangling, transformation, analysis.' },
  { icon:<SiNumpy />,        name:'NumPy',            level:90, category:'Data',      color:'#4DABF7', desc:'Numerical computing, array operations.' },
  { icon:<FaChartBar />,     name:'Data Analysis',    level:88, category:'Analytics', color:'#FF4081', desc:'EDA, visualization, statistical insights.' },
  { icon:<SiFastapi />,      name:'APIs',             level:87, category:'Backend',   color:'#009688', desc:'REST API design, integration, documentation.' },
  { icon:<SiTensorflow />,   name:'TensorFlow',       level:75, category:'AI / ML',   color:'#FF6F00', desc:'Deep learning models, neural networks.' },
  { icon:<SiDocker />,       name:'Docker',           level:70, category:'DevOps',    color:'#2496ED', desc:'Containerization, deployment workflows.' },
];

const SkillCard = ({ skill, index }) => (
  <motion.div
    initial={{ opacity:0, y:40 }} whileInView={{ opacity:1, y:0 }}
    viewport={{ once:true, margin:'-50px' }} transition={{ delay:index*0.06, duration:0.5 }}>
    <Tilt tiltMaxAngleX={12} tiltMaxAngleY={12} perspective={1000}
      glareEnable glareMaxOpacity={0.1} glareColor="rgba(255,23,68,0.4)"
      glarePosition="all" scale={1.03} transitionSpeed={1500}>
      <div className="skill-card glass-card">
        <span className="skill-card__glow-dot" style={{ background: skill.color }} />
        <span className="skill-card__badge">{skill.category}</span>
        <div className="skill-card__icon-wrap" style={{ '--skill-color': skill.color }}>{skill.icon}</div>
        <h3 className="skill-card__name">{skill.name}</h3>
        <p className="skill-card__desc">{skill.desc}</p>
        <div className="skill-card__progress-wrap">
          <div className="skill-card__progress-header">
            <span className="skill-card__progress-label">Proficiency</span>
            <span className="skill-card__progress-pct">{skill.level}%</span>
          </div>
          <div className="skill-card__progress-track">
            <motion.div className="skill-card__progress-fill"
              style={{ '--skill-color': skill.color }}
              initial={{ width:0 }} whileInView={{ width:`${skill.level}%` }}
              viewport={{ once:true }} transition={{ duration:1, delay:index*0.06+0.3 }} />
          </div>
        </div>
      </div>
    </Tilt>
  </motion.div>
);

const Skills = () => (
  <section className="skills section" id="skills">
    <div className="container">
      <SectionTitle eyebrow="What I Know" title="Skills & Tech Stack"
        subtitle="A curated set of tools and technologies I use to build intelligent applications." />
      <div className="skills__grid">
        {SKILLS.map((s, i) => <SkillCard key={s.name} skill={s} index={i} />)}
      </div>
    </div>
    <div className="skills__blob" />
  </section>
);
export default Skills;
