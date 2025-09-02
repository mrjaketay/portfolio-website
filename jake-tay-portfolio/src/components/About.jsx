import { useView } from '../context/ViewContext';
import { vaContent, techContent } from '../data/content';
import './About.css';

export default function About() {
  const { currentView } = useView();
  const content = currentView === 'va' ? vaContent.about : techContent.about;

  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2>{content.title}</h2>
        <div className="about-content">
          <div className="about-text">
            {content.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          <div className="about-stats">
            {content.stats.map((stat, index) => (
              <div key={index} className="stat">
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}