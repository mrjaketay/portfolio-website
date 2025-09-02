import { useView } from '../context/ViewContext';
import { vaContent, techContent } from '../data/content';
import './Hero.css';

export default function Hero() {
  const { currentView } = useView();
  const content = currentView === 'va' ? vaContent.hero : techContent.hero;

  const backgroundStyle = {
    background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('${content.image}') center/cover`
  };

  const handleCVDownload = () => {
  window.open('https://drive.google.com/file/d/1rMmsACrkKQEavFfRlJV-fgqcjSysg_EJ/view?usp=drive_link', '_blank');
};

  const handleContactScroll = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" style={backgroundStyle}>
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h2>{content.subtitle}</h2>
            <p>{content.description}</p>
            
            <div className="hero-buttons">
              <button className="cta-button primary" onClick={handleContactScroll}>
                {content.cta}
              </button>
              <button className="cta-button secondary" onClick={handleCVDownload}>
                📄 Download CV
              </button>
            </div>
          </div>
          
          <div className="hero-image">
            <img 
              src="/images/LinkedinProfile.jpg" 
              alt="Jake Tay - Professional Virtual Assistant"
              onError={(e) => {
                e.target.src = "https://placehold.co/400x400/6c5ce7/white?text=JT";
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}