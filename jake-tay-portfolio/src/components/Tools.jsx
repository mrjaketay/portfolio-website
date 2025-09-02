import { useRef, useState, useEffect } from 'react';
import './Tools.css';

export default function Tools() {
  const tools = [
    { name: "Gmail", logo: "/images/tools/gmail.png" },
    { name: "HelpScout", logo: "/images/tools/helpscout.png" },
    { name: "ClickUp", logo: "/images/tools/clickup.png" },
    { name: "Asana", logo: "/images/tools/asana.png" },
    { name: "Trello", logo: "/images/tools/trello.png" },
    { name: "Microsoft Office", logo: "/images/tools/office.png" },
    { name: "MS Word", logo: "/images/tools/word.png" },
    { name: "MS Excel", logo: "/images/tools/excel.png" },
    { name: "PowerPoint", logo: "/images/tools/powerpoint.png" },
    { name: "Microsoft Teams", logo: "/images/tools/teams.png" },
    { name: "Canva", logo: "/images/tools/canva.png" },
    { name: "CapCut", logo: "/images/tools/capcut.png" },
    { name: "Photoshop", logo: "/images/tools/photoshop.png" },
    { name: "TikTok", logo: "/images/tools/tiktok.png" },
    { name: "Instagram", logo: "/images/tools/instagram.png" },
    { name: "Facebook", logo: "/images/tools/facebook.png" },
    { name: "ChatGPT", logo: "/images/tools/chatgpt.png" }
  ];

  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftStart, setScrollLeftStart] = useState(0);
  const [autoScrollEnabled, setAutoScrollEnabled] = useState(true);

  // Auto-scroll effect
  useEffect(() => {
    if (!autoScrollEnabled) return;

    const scrollContainer = scrollRef.current;
    let scrollAmount = 0;
    let scrollDirection = 1;
    const speed = 0.5;

    const autoScroll = () => {
      if (scrollContainer && autoScrollEnabled && !isDragging) {
        scrollAmount += speed * scrollDirection;
        
        if (scrollAmount >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
          scrollDirection = -1;
        } else if (scrollAmount <= 0) {
          scrollDirection = 1;
        }
        
        scrollContainer.scrollLeft = scrollAmount;
      }
      requestAnimationFrame(autoScroll);
    };

    const animationId = requestAnimationFrame(autoScroll);
    return () => cancelAnimationFrame(animationId);
  }, [autoScrollEnabled, isDragging]);

  // Get correct horizontal position
  const getClientX = (event) => {
    return event.type.includes('touch') ? event.touches[0].clientX : event.clientX;
  };

  // Mouse drag handlers
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setAutoScrollEnabled(false);
    setStartX(getClientX(e));
    setScrollLeftStart(scrollRef.current.scrollLeft);
    scrollRef.current.style.cursor = 'grabbing';
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      handleDragEnd();
    }
  };

  const handleMouseUp = () => {
    handleDragEnd();
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    
    const x = getClientX(e);
    const walk = (x - startX) * 2; // Scroll multiplier
    scrollRef.current.scrollLeft = scrollLeftStart - walk;
  };

  // Touch handlers
  const handleTouchStart = (e) => {
    setIsDragging(true);
    setAutoScrollEnabled(false);
    setStartX(getClientX(e));
    setScrollLeftStart(scrollRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = getClientX(e);
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeftStart - walk;
  };

  const handleTouchEnd = () => {
    handleDragEnd();
  };

  // Clean up dragging
  const handleDragEnd = () => {
    setIsDragging(false);
    setAutoScrollEnabled(true);
    if (scrollRef.current) {
      scrollRef.current.style.cursor = 'grab';
    }
  };

  return (
    <section className="tools-section">
      <div className="tools-container">
        <h2>Tools I Use</h2>
        <div className="tools-scroll-wrapper">
          <div 
            className="tools-scroll" 
            ref={scrollRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
          >
            <div className="scroll-padding"></div>
            
            {tools.map((tool, index) => (
              <div key={index} className="tool-item">
                <div className="tool-logo">
                  <img 
                    src={tool.logo} 
                    alt={tool.name}
                    onError={(e) => {
                      e.target.src = `https://placehold.co/100x100/6c5ce7/white?text=${tool.name.slice(0,2)}`;
                      e.target.style.backgroundColor = '#f8f9fa';
                    }}
                  />
                </div>
                <p>{tool.name}</p>
              </div>
            ))}
            
            <div className="scroll-padding"></div>
          </div>
        </div>
      </div>
    </section>
  );
}