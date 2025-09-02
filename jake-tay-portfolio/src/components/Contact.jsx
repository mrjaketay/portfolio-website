import { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Using EmailJS (free alternative) - you need to sign up at https://www.emailjs.com/
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  // TEMPORARY FIX: Use mailto link until backend is setup
  const handleMailTo = (e) => {
    e.preventDefault();
    const subject = "Portfolio Inquiry";
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0AMessage: ${formData.message}`;
    window.location.href = `mailto:mrjaketay@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2>Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Work Together</h3>
            <p>I'm currently available for new projects and opportunities. Reach out and let's discuss how I can help you achieve your goals.</p>
            
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">📧</div>
                <div className="contact-text">
                  <h4>Email</h4>
                  <a href="mailto:mrjaketay@gmail.com">mrjaketay@gmail.com</a>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <div className="contact-text">
                  <h4>Phone</h4>
                  <a href="tel:+233509891998">+233 50 989 1998</a>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">💼</div>
                <div className="contact-text">
                  <h4>LinkedIn</h4>
                  <a href="https://www.linkedin.com/in/mrjaketay" target="_blank" rel="noopener noreferrer">
                    Connect with me
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">📄</div>
                <div className="contact-text">
                  <h4>Download CV</h4>
                  <a href="https://drive.google.com/file/d/1rMmsACrkKQEavFfRlJV-fgqcjSysg_EJ/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                    View & Download CV
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <h3>Send me a message</h3>
            <form onSubmit={handleMailTo}> {/* Changed to handleMailTo temporarily */}
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input 
                  placeholder='Enter your name here'
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  placeholder='Enter your email address here'
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  placeholder='Type your message here'
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="submit-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Opening Email...' : 'Send Message'}
              </button>
            </form>
            
            <p style={{marginTop: '1rem', color: 'var(--text-secondary)', fontSize: '0.9rem'}}>
              <em>This will open your email client to send me a message directly.</em>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}