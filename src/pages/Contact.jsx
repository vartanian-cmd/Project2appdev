const socialLinks = [
  { name: 'LinkedIn', handle: 'linkedin.com/in/alex', href: 'https://www.linkedin.com/in/alex-undefined-b955733b1/' },
  { name: 'GitHub', handle: 'https://github.com/vartanian-cmd', href: 'https://github.com/vartanian-cmd' },
  { name: 'Email', handle: 'vartanian2004@gmail.com', href: 'mailto:vartanian2004@gmail.com' },
];

import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  return (
    <main className="page-wrap">
      <section className="section">
        <div className="container">
          <div className="contact-grid">
            {/* left side */}
            <div>
              <p className="section-label">Contact</p>
              <h2>Social Links</h2>
              <div className="social-links">
                {socialLinks.map(link => (
                  <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" className="social-link">
                    <div className="social-link-text">
                      <strong>{link.name}</strong>
                      <span>{link.handle}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

           {/* right side */}
            <div className="contact-form">
              <h3 style={{ marginBottom: '0.5rem' }}>Contact me</h3>
              <p style={{ fontSize: '0.875rem', marginBottom: '1.5rem' }}>
              </p>

              <form>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Name *</label>
                    <input id="name" name="name" type="text" value={form.name} onChange={handleChange} placeholder="Edgar Rosales" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input id="email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="eRosales@csub.edu" required />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input id="subject" name="subject" type="text" value={form.subject} onChange={handleChange} placeholder="Subject..." />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea id="message" name="message" rows="6" value={form.message} onChange={handleChange} placeholder="Your message here..." required />
                </div>

                <button type="submit" className="btn btn-accent" style={{ width: '100%', justifyContent: 'center' }}>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}