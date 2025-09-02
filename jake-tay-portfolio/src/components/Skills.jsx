import { useView } from '../context/ViewContext';
import { vaContent, techContent } from '../data/content';
import './Skills.css';

export default function Skills() {
  const { currentView } = useView();
  const content = currentView === 'va' ? vaContent.skills : techContent.skills;

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <h2>{content.title}</h2>
        <div className="skills-grid">
          {content.categories.map((category, index) => (
            <div key={index} className="skill-category fade-in-up">
              <div className="category-header">
                <span className="category-icon">{category.icon}</span>
                <h3>{category.title}</h3>
              </div>
              <ul className="skills-list">
                {category.skills.map((skill, i) => (
                  <li key={i} className="skill-item">
                    <span className="skill-check">✓</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}