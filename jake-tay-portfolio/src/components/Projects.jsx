import { useView } from '../context/ViewContext';
import { vaContent, techContent } from '../data/content';
import './Projects.css';

export default function Projects() {
  const { currentView } = useView();
  const content = currentView === 'va' ? vaContent.projects : techContent.projects;

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2>{content.title}</h2>
        <div className="projects-grid">
          {content.items.map((project, index) => (
            <div key={index} className="project-card fade-in-up">
              <div className="project-image">
                <img 
                  src={project.image} 
                  alt={project.title}
                  onError={(e) => {
                    e.target.src = `https://placehold.co/600x400/6c5ce7/white?text=${project.title.split(' ').map(word => word[0]).join('')}`;
                  }}
                />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="project-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}