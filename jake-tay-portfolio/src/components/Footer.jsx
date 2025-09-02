import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>Jake Tay</h3>
            <p>Virtual Assistant & Technical Support Specialist</p>
          </div>
          
          <div className="footer-links">
            <div className="footer-column">
              <h4>Navigation</h4>
              <a href="#about">About</a>
              <a href="#services">Services</a>
              <a href="#experience">Experience</a>
              <a href="#contact">Contact</a>
            </div>
            
            <div className="footer-column">
              <h4>Connect</h4>
              <a href="mailto:mrjaketay@gmail.com">Email</a>
              <a href="tel:+233509891998">Phone</a>
              <a href="https://www.linkedin.com/in/mrjaketay" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </div>
            
            <div className="footer-column">
              <h4>Services</h4>
              <a href="#services">Email Management</a>
              <a href="#services">Technical Support</a>
              <a href="#services">Task Automation</a>
              <a href="#services">Customer Service</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>&copy; {currentYear} Jake Tay. All rights reserved.</p>
          </div>
          <div className="footer-credits">
            <p>Designed with React &amp; Vite</p>
          </div>
        </div>
      </div>
    </footer>
  );
}