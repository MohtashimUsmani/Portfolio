import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter, FaPaperPlane, FaMapMarkerAlt } from 'react-icons/fa';
import SectionTitle from '../components/SectionTitle';
import GlowButton from '../components/GlowButton';
import './Contact.css';

const SOCIALS = [
  { icon:<FaGithub />,   label:'GitHub',   href:'https://github.com/MohtashimUsmani', handle:'github.com/mohtashim'},
  { icon:<FaLinkedin />, label:'LinkedIn', href:'https://www.linkedin.com/in/mohtashim-usmani/', handle:'linkedin.com/in/mohtashim' },
  { icon:<FaEnvelope />, label:'Gmail',    href:'mailto:mohtashimusmani09@gmail.com',  handle:'mohtashimusmani09@email.com'},
  { icon:<FaTwitter />,  label:'Twitter',  href:'https://twitter.com', handle:'@mohtashim_dev'},
];

const Contact = () => {
  const [form, setForm]           = useState({ name:'', email:'', subject:'', message:'' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]     = useState(false);

  const handleChange = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  const handleSubmit = async (e) => {
    e.preventDefault(); setLoading(true);
    await new Promise(r => setTimeout(r, 1100));
    setLoading(false); setSubmitted(true);
  };

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <SectionTitle eyebrow="Let's Talk" title="Get In Touch"
          subtitle="Have a project in mind or want to collaborate? I'd love to hear from you." />
        <div className="contact__grid">
          <motion.div className="contact__info"
            initial={{ opacity:0, x:-40 }} whileInView={{ opacity:1, x:0 }}
            viewport={{ once:true }} transition={{ duration:0.65 }}>
            <div className="contact__info-block glass-card">
              <div className="contact__info-header"><FaMapMarkerAlt className="contact__info-icon" /><span className="contact__info-label">Location</span></div>
              <p className="contact__info-value">Available Globally · Remote First</p>
            </div>
            <div className="contact__socials">
              {SOCIALS.map(({ icon, label, href, handle }, i) => (
                <motion.a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  className="contact__social glass-card"
                  initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }}
                  viewport={{ once:true }} transition={{ delay:i*0.08 }}
                  whileHover={{ scale:1.03, y:-3 }}>
                  <span className="contact__social-icon">{icon}</span>
                  <div className="contact__social-text">
                    <span className="contact__social-label">{label}</span>
                    <span className="contact__social-handle">{handle}</span>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div className="contact__form-wrap glass-card"
            initial={{ opacity:0, x:40 }} whileInView={{ opacity:1, x:0 }}
            viewport={{ once:true }} transition={{ duration:0.65 }}>
            {submitted ? (
              <div className="contact__success">
                <div className="contact__success-icon">✖</div>
                <h3 className="contact__success-title">please reach out to me directly via gmail!</h3>
                <p className="contact__success-sub">For the fastest response</p>
                <button className="contact__success-reset"
                  onClick={() => { setSubmitted(false); setForm({ name:'', email:'', subject:'', message:'' }); }}>
                  SEND ANOTHER
                </button>
              </div>
            ) : (
              <form className="contact__form" onSubmit={handleSubmit}>
                <h3 className="contact__form-title">Send a Message</h3>
                <div className="contact__form-row">
                  <div className="contact__field">
                    <label className="contact__label">Your Name</label>
                    <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="John Doe" required className="contact__input" />
                  </div>
                  <div className="contact__field">
                    <label className="contact__label">Email Address</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="john@example.com" required className="contact__input" />
                  </div>
                </div>
                <div className="contact__field">
                  <label className="contact__label">Subject</label>
                  <input type="text" name="subject" value={form.subject} onChange={handleChange} placeholder="Project collaboration..." required className="contact__input" />
                </div>
                <div className="contact__field">
                  <label className="contact__label">Message</label>
                  <textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell me about your project..." required rows={5} className="contact__input contact__textarea" />
                </div>
                <GlowButton variant="primary" icon={loading ? null : <FaPaperPlane />} className="contact__submit">
                  {loading ? 'Sending...' : 'Send Message'}
                </GlowButton>
              </form>
            )}
          </motion.div>
        </div>
      </div>
      <div className="contact__blob" />
    </section>
  );
};
export default Contact;
