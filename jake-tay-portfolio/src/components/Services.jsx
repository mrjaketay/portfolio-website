import { useState } from 'react';
import { useView } from '../context/ViewContext';
import { vaContent, techContent } from '../data/content';
import './Services.css';

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);
  const { currentView } = useView();
  const content = currentView === 'va' ? vaContent.services : techContent.services;

  return (
    <section id="services" className="services">
      <div className="services-container">
        <h2>{content.title}</h2>
        <div className="services-grid">
          {content.items.map(service => (
            <div 
              key={service.id} 
              className="service-card fade-in-up"
              onClick={() => setSelectedService(service)}
              title={`Click to learn more about ${service.title}`}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="service-hover">Click to Learn More →</div>
            </div>
          ))}
        </div>
      </div>

      {selectedService && (
        <div className="modal-overlay" onClick={() => setSelectedService(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedService(null)}>×</button>
            <h3>{selectedService.icon} {selectedService.title}</h3>
            <p>{selectedService.description}</p>
            <ul>
              {selectedService.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
}