import { useView } from '../context/ViewContext';
import { vaContent, techContent } from '../data/content';
import './Experience.css';

export default function Experience() {
  const { currentView } = useView();
  const content = currentView === 'va' ? vaContent.experience : techContent.experience;

  return (
    <section id="experience" className="experience">
      <div className="experience-container">
        <h2>{content.title}</h2>
        <div className="experience-grid">
          {content.items.map((exp, index) => (
            <div key={index} className="experience-card fade-in-up">
              <h3>{exp.title}</h3>
              <p className="company">{exp.company}</p>
              <p className="period">{exp.period}</p>
              <ul className="achievements">
                {exp.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}