import './Testimonials.css';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Jake completely transformed how we handle customer communications. Our response times improved by 60% and customer satisfaction scores went up significantly. He anticipates needs before we even realize them!",
      author: "Sarah Johnson",
      position: "CEO, TechSolutions Inc.",
      avatar: "/images/testimonials/sarah.jpg"
    },
    {
      quote: "Working with Jake has been a game-changer for our remote team. His ClickUp automations saved us dozens of hours each month, and his attention to detail is unmatched. He's become an indispensable part of our operations.",
      author: "Michael Chen", 
      position: "Operations Manager, Construction Monitor",
      avatar: "/images/testimonials/michael.jpg"
    },
    {
      quote: "I was drowning in email chaos before Jake stepped in. He implemented systems that gave me back 10+ hours per week. His combination of technical skills and personable communication is rare and valuable.",
      author: "Emily Rodriguez",
      position: "Marketing Director, Bright Ideas Agency",
      avatar: "/images/testimonials/emily.jpg"
    }
  ];

  return (
    <section className="testimonials">
      <div className="testimonials-container">
        <h2>What Clients Say</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-content">
                <div className="quote-icon"></div>
                <p>{testimonial.quote}</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.author}
                    onError={(e) => {
                      e.target.src = `https://placehold.co/100x100/6c5ce7/white?text=${testimonial.author.split(' ').map(name => name[0]).join('')}`;
                    }}
                  />
                </div>
                <div className="author-info">
                  <h4>{testimonial.author}</h4>
                  <p>{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}