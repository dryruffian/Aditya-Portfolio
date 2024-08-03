import React, { useState, useEffect, useRef } from 'react';

const ExperienceCard = ({ company, role, duration, description, skills }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`experience-card bg-gray-900 rounded-lg overflow-hidden shadow-lg transition-all duration-1000 border border-gray-700 ${
        isVisible ? 'opacity-100 transform-none' : 'opacity-0 transform rotate-y-180'
      }`}
      style={{ perspective: '1000px' }}
    >
      <div className="p-4">
        <div className="flex items-left gap-1 mb-2">
          <span className="text-red-400">const</span>
          <span className="text-blue-300">{company}</span>
          <span className="text-yellow-300">=</span>
          <span className="text-green-300">{'{'}</span>
        </div>
        <div className="pl-4 text-purple-300">
          <p>role: <span className="text-yellow-300">"{role}"</span>,</p>
          <p>duration: <span className="text-yellow-300">"{duration}"</span>,</p>
        </div>
        <div className="mt-4 pl-4">
          <p className="text-purple-300">description: <span className="text-gray-300">"{description}"</span></p>
        </div>
        <div className="mt-4 pl-4">
          <span className="text-purple-300">skills: [</span>
          <div className="flex flex-wrap gap-2 mt-2 pl-4">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-gray-800 rounded-md text-xs text-blue-300"
              >
                "{skill}"{index < skills.length - 1 ? ',' : ''}
              </span>
            ))}
          </div>
          <span className="text-purple-300">]</span>
        </div>
        <div className="mt-2">
          <span className="text-green-300">{'}'}</span>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;