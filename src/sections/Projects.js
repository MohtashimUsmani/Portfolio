import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import SectionTitle from '../components/SectionTitle';
import './Projects.css';

const PROJECTS = [
  { number:'01', title:'FinTech Fraud Detection & AML Pipeline',
    desc:'End-to-end ML pipeline for real-time financial fraud detection using ensemble models. Achieves 97.8% accuracy with sub-100ms inference.',
    tech:['Python','Scikit-learn','Imbalanced-Learn','Pandas','Power BI','PostgreSQL'],
    github:'https://github.com/MohtashimUsmani/FinTech-Fraud-Detection-Pipeline', demo:'https://www.linkedin.com/posts/mohtashim-usmani_datascience-fintech-sql-ugcPost-7455312139025596416-NlNK/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEFS_50BvDQCMqODwWdJa1dYaHINVM8rw7E', accent:'#FF1744', badge:'Machine Learning' },
  { number:'02', title:'AI Portfolio Website',
    desc:'Cinematic full-stack portfolio built with React and Django, featuring interactive data visualizations and smooth animations.',
    tech:['React','Django','Python','Framer Motion','PostgreSQL'],
    github:'https://github.com/MohtashimUsmani/mohtashim-portfolio', demo:'https://www.mohtashimusmani.me', accent:'#E040FB', badge:'Full Stack' },
  { number:'03', title:'SQL Fraud Detection & Analysis Project',
    desc:'This project focuses on analyzing financial transaction data using SQL to detect suspicious patterns, fraudulent activities, and anomalies. It is designed as a hands on practice project for improving SQL skills, especially for data analysis and fintech-related problems.',
    tech:['PostgreSQL','WITH CTE','Recursive CTE','INNER JOIN & ON','Window Functions', 'Filtering & Conditions'],
    github:'https://github.com/MohtashimUsmani/SQL-Data-Analyst-Project', demo:'https://www.linkedin.com/posts/mohtashim-usmani_opentowork-sql-dataanalytics-ugcPost-7453883417584148480-NE8r/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEFS_50BvDQCMqODwWdJa1dYaHINVM8rw7E', accent:'#00BCD4', badge:'Web App' },
  { number:'04', title:'Customer Management System',
    desc:'The Customer Management System is a web application built using Python, Django, HTML, CSS, and JavaScript. It provides separate interfaces for admins and customers, each with specific functionalities tailored to their roles.',
    tech:['Python','HTML','CSS','Django','Postgresql','JavaScript'],
    github:'https://github.com/MohtashimUsmani/Django-CMS-WebApp', demo:'https://example.com', accent:'#FFD600', badge:'Analytics' },
];

const ProjectCard = ({ project, index }) => (
  <motion.div initial={{ opacity:0, y:50 }} whileInView={{ opacity:1, y:0 }}
    viewport={{ once:true, margin:'-60px' }} transition={{ delay:index*0.12, duration:0.6 }}>
    <Tilt tiltMaxAngleX={6} tiltMaxAngleY={6} perspective={1200}
      glareEnable glareMaxOpacity={0.07} glareColor={project.accent}
      glarePosition="all" scale={1.02} transitionSpeed={1500}>
      <div className="project-card glass-card" style={{ '--project-accent': project.accent }}>
        <div className="project-card__top">
          <span className="project-card__number">{project.number}</span>
          <span className="project-card__badge">{project.badge}</span>
        </div>
        <div className="project-card__accent-line" />
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__desc">{project.desc}</p>
        <div className="project-card__tech">
          {project.tech.map(t => <span key={t} className="project-card__tech-tag">{t}</span>)}
        </div>
        <div className="project-card__actions">
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-card__btn project-card__btn--outline"><FaGithub /> GitHub</a>
          <a href={project.demo}   target="_blank" rel="noopener noreferrer" className="project-card__btn project-card__btn--primary"><FaExternalLinkAlt /> Live Demo</a>
        </div>
        <div className="project-card__corner-glow" />
      </div>
    </Tilt>
  </motion.div>
);

const Projects = () => (
  <section className="projects section" id="projects">
    <div className="container">
      <SectionTitle eyebrow="What I've Built" title="Featured Projects"
        subtitle="A selection of projects showcasing my skills across ML, full-stack, and data engineering." />
      <div className="projects__grid">
        {PROJECTS.map((p, i) => <ProjectCard key={p.title} project={p} index={i} />)}
      </div>
    </div>
    <div className="projects__blob--1" /><div className="projects__blob--2" />
  </section>
);
export default Projects;
